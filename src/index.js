import { LitElement, html, nothing } from "lit";
import { styles, editorStyles } from "./style";
import {
  parseToTime,
  minsLabel,
  normalizeBusItems,
  normalizeTrainItems,
  transportStatus,
  sortTransportItems,
} from "./utils";

const CARD_VERSION = "0.1.1";
console.info(
  `%c  UK-TRANSPORT-CARD  %c v${CARD_VERSION} `,
  "background:#37474f;color:#fff;font-weight:700;padding:2px 4px;border-radius:3px 0 0 3px;",
  "background:#eceff1;color:#37474f;font-weight:700;padding:2px 4px;border-radius:0 3px 3px 0;"
);

// ─────────────────────────────────────────────────────────────────────────────
// Main card
// ─────────────────────────────────────────────────────────────────────────────
class UkTransportCard extends LitElement {
  static get properties() {
    return {
      hass: { attribute: false },
      config: { attribute: false },
    };
  }

  static get styles() {
    return styles;
  }

  setConfig(config) {
    if (
      !config.entity &&
      !config.bus_entity &&
      !config.bus_entity_primary &&
      !config.bus_entity_secondary &&
      !config.train_entity
    ) {
      throw new Error("uk-transport-card: set entity, bus_entity, or train_entity");
    }
    this.config = {
      limit: 10,
      merge_mode: "merged",
      show_icons: true,
      show_platform: true,
      hide_on_time_expected: false,
      sort_by: "expected",
      ...config,
    };
  }

  _stateObj(entityId) {
    return entityId ? this.hass?.states[entityId] : null;
  }

  _attrs(entityId) {
    return this._stateObj(entityId)?.attributes ?? {};
  }

  _collectTransportItems() {
    const items = [];
    const busEntities = [
      this.config.bus_entity,
      this.config.bus_entity_primary,
      this.config.bus_entity_secondary,
    ].filter(Boolean);
    const uniqueBusEntities = [...new Set(busEntities)];

    if (this.config.entity) {
      const attrs = this._attrs(this.config.entity);
      if (Array.isArray(attrs.buses)) {
        const defaultBusLocation = attrs.stop || attrs.stop_name || attrs.location || "";
        items.push(...normalizeBusItems(attrs.buses, this.config.entity, defaultBusLocation));
      }
      if (Array.isArray(attrs.trains)) {
        items.push(...normalizeTrainItems(attrs.trains, this.config.entity));
      }
    }

    uniqueBusEntities.forEach((entityId) => {
      const attrs = this._attrs(entityId);
      if (Array.isArray(attrs.buses)) {
        const defaultBusLocation = attrs.stop || attrs.stop_name || attrs.location || "";
        items.push(...normalizeBusItems(attrs.buses, entityId, defaultBusLocation));
      }
    });

    if (this.config.train_entity) {
      const attrs = this._attrs(this.config.train_entity);
      if (Array.isArray(attrs.trains)) {
        items.push(...normalizeTrainItems(attrs.trains, this.config.train_entity));
      }
    }

    const sorted = sortTransportItems(items, this.config.sort_by);
    return sorted.slice(0, Number(this.config.limit) || sorted.length);
  }

  _collectErrors() {
    const entities = [
      this.config.entity,
      this.config.bus_entity,
      this.config.bus_entity_primary,
      this.config.bus_entity_secondary,
      this.config.train_entity,
    ]
      .filter(Boolean)
      .filter((value, index, arr) => arr.indexOf(value) === index);
    return entities
      .map((entityId) => ({ entityId, error: this._attrs(entityId).error }))
      .filter((e) => e.error);
  }

  _title(items) {
    if (this.config.title) return this.config.title;
    if (this.config.entity) {
      const attrs = this._attrs(this.config.entity);
      return attrs.stop || attrs.station || "Transport Departures";
    }
    if ((this.config.bus_entity || this.config.bus_entity_primary || this.config.bus_entity_secondary) && this.config.train_entity) {
      return "Transport Departures";
    }
    if (this.config.bus_entity_primary || this.config.bus_entity_secondary) {
      return "Bus Departures";
    }
    if (this.config.bus_entity) return this._attrs(this.config.bus_entity).stop || "Bus Departures";
    if (this.config.train_entity) return this._attrs(this.config.train_entity).station || "Train Departures";
    return items.length ? "Transport Departures" : "No Services";
  }

  render() {
    if (!this.config || !this.hass) return nothing;

    const displayed = this._collectTransportItems();
    const errors = this._collectErrors();
    const title = this._title(displayed);
    const mergedMode = this.config.merge_mode !== "sectioned";

    const buses = displayed.filter((item) => item.type === "bus");
    const trains = displayed.filter((item) => item.type === "train");

    return html`
      <ha-card>
        <div class="card-header">
          <ha-icon class="header-icon" icon="mdi:bus"></ha-icon>
          <ha-icon class="header-icon" icon="mdi:train"></ha-icon>
          <h2>${title}</h2>
        </div>
        <div class="card-content">
          ${errors.map(
            (entry) => html`<div class="error-banner">${entry.entityId}: ${entry.error}</div>`
          )}
          ${displayed.length === 0
            ? html`<div class="no-services">No upcoming services</div>`
            : mergedMode
              ? displayed.map((item) => this._renderService(item))
              : html`
                  ${trains.length
                    ? html`<div class="section-heading">Train Services</div>${trains.map((item) => this._renderService(item))}`
                    : nothing}
                  ${buses.length
                    ? html`<div class="section-heading">Bus Services</div>${buses.map((item) => this._renderService(item))}`
                    : nothing}
                `}
        </div>
      </ha-card>
    `;
  }

  _serviceIcon(type) {
    return type === "train" ? "mdi:train" : "mdi:bus";
  }

  _locationLabel(item) {
    if (!item?.platform) return "";
    const value = String(item.platform).trim();
    if (item.type !== "train") return value;
    if (/^plat(?:form)?\b/i.test(value)) return value;
    return `Platform ${value}`;
  }

  _renderService(item) {
    const scheduled = parseToTime(item.scheduled);
    const expected = parseToTime(item.expected);
    const { cssClass, label } = transportStatus(item);
    const isDelayed = (item.delay_minutes || 0) > 0;
    const isDue = item.mins_away !== null && item.mins_away <= 1;
    const showExpected = !this.config.hide_on_time_expected || isDelayed;

    return html`
      <div class="service-row ${cssClass}">
        <span class="service-icon-slot">
          ${this.config.show_icons
            ? html`<ha-icon class="service-icon" .icon=${this._serviceIcon(item.type)}></ha-icon>`
            : nothing}
        </span>
        <div class="service-line">${item.route}</div>
        <div class="service-destination">
          <span class="service-destination-main">${item.destination}</span>
          ${this.config.show_platform && item.platform
            ? html`<span class="service-location">${this._locationLabel(item)}</span>`
            : nothing}
        </div>
        <div class="service-times">
          <span class="scheduled-time">${scheduled}</span>
          ${showExpected
            ? html`<span class="expected-time">→ ${expected}</span>`
            : nothing}
        </div>
        <div>
          ${isDue
            ? html`<span class="badge due">Due</span>`
            : item.mins_away !== null
              ? html`<span class="badge ${cssClass}">${minsLabel(item.mins_away)}</span>`
              : html`<span class="badge ${cssClass}">${label}</span>`}
        </div>
      </div>
    `;
  }

  getCardSize() {
    const items = this._collectTransportItems();
    return Math.min(items.length, Number(this.config?.limit) || items.length) + 2;
  }

  static getConfigElement() {
    return document.createElement("uk-transport-card-editor");
  }

  static getStubConfig() {
    return {
      bus_entity_primary: "sensor.bus_schedule_stop_1",
      bus_entity_secondary: "sensor.bus_schedule_stop_2",
      train_entity: "sensor.train_schedule_ksn",
      limit: 10,
      merge_mode: "merged",
      show_icons: true,
      show_platform: true,
      hide_on_time_expected: false,
      sort_by: "expected",
    };
  }
}

customElements.define("uk-transport-card", UkTransportCard);

// ─────────────────────────────────────────────────────────────────────────────
// Config editor
// ─────────────────────────────────────────────────────────────────────────────
class UkTransportCardEditor extends LitElement {
  static get properties() {
    return {
      hass: { attribute: false },
      config: { attribute: false },
    };
  }

  static get styles() {
    return editorStyles;
  }

  setConfig(config) {
    this.config = config;
  }

  get _schema() {
    return [
      {
        name: "entity",
        label: "Combined transport entity (optional)",
        selector: {
          entity: {
            filter: [{ domain: "sensor" }],
          },
        },
      },
      {
        name: "bus_entity",
        label: "Bus entity (optional, legacy single-source)",
        selector: {
          entity: {
            filter: [{ domain: "sensor" }],
          },
        },
      },
      {
        name: "bus_entity_primary",
        label: "Bus entity primary direction (optional)",
        selector: {
          entity: {
            filter: [{ domain: "sensor" }],
          },
        },
      },
      {
        name: "bus_entity_secondary",
        label: "Bus entity opposite direction (optional)",
        selector: {
          entity: {
            filter: [{ domain: "sensor" }],
          },
        },
      },
      {
        name: "train_entity",
        label: "Train entity (optional)",
        selector: {
          entity: {
            filter: [{ domain: "sensor" }],
          },
        },
      },
      {
        name: "title",
        label: "Card title",
        selector: {
          text: {},
        },
      },
      {
        name: "limit",
        label: "Max services to display",
        selector: {
          number: { min: 1, max: 20, step: 1, mode: "box" },
        },
      },
      {
        name: "merge_mode",
        label: "Display mode",
        selector: {
          select: {
            mode: "dropdown",
            options: [
              { value: "merged", label: "Merged (time sorted)" },
              { value: "sectioned", label: "Sectioned (train/bus)" },
            ],
          },
        },
      },
      {
        name: "sort_by",
        label: "Sort by",
        selector: {
          select: {
            mode: "dropdown",
            options: [
              { value: "expected", label: "Expected time" },
              { value: "scheduled", label: "Scheduled time" },
            ],
          },
        },
      },
      {
        name: "show_icons",
        label: "Show transport icons",
        selector: { boolean: {} },
      },
      {
        name: "show_platform",
        label: "Show platform/stand",
        selector: { boolean: {} },
      },
      {
        name: "hide_on_time_expected",
        label: "Hide expected time when on time",
        selector: { boolean: {} },
      },
    ];
  }

  render() {
    if (!this.hass || !this.config) return nothing;
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${this._schema}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  _valueChanged(ev) {
    this.dispatchEvent(
      new CustomEvent("config-changed", { detail: { config: ev.detail.value } })
    );
  }
}

customElements.define("uk-transport-card-editor", UkTransportCardEditor);

// ─────────────────────────────────────────────────────────────────────────────
// HACS / Lovelace card registry
// ─────────────────────────────────────────────────────────────────────────────
window.customCards = window.customCards || [];
window.customCards.push({
  type: "uk-transport-card",
  name: "UK Transport Card",
  description: "Combined bus and train departures with unified status rendering",
  preview: true,
  documentationURL: "https://github.com/leightaylorf1/uk-transport-card",
});
