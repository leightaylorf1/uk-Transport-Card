/** Parse an ISO-8601 datetime string to HH:MM local time. */
export const parseToTime = (isoString) => {
  if (!isoString) return "";
  try {
    const d = new Date(isoString);
    return d.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return isoString;
  }
};

const toDate = (value) => {
  if (!value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
};

export const computeDelayMinutes = (scheduled, expected) => {
  const s = toDate(scheduled);
  const e = toDate(expected);
  if (!s || !e) return 0;
  return Math.max(0, Math.round((e.getTime() - s.getTime()) / 60000));
};

export const computeMinsAway = (expected) => {
  const e = toDate(expected);
  if (!e) return null;
  return Math.max(0, Math.round((e.getTime() - Date.now()) / 60000));
};

export const minsLabel = (minsAway) => {
  if (minsAway === undefined || minsAway === null) return "";
  if (minsAway <= 1) return "Due";
  return `${minsAway} min`;
};

const trainDestination = (train) => {
  if (train?.terminus) return train.terminus;
  const first = Array.isArray(train?.destinations) ? train.destinations[0] : null;
  return first?.name || "Unknown";
};

export const normalizeBusItems = (items = [], sourceEntity = "") =>
  items.map((bus) => {
    const scheduled = bus.scheduled || "";
    const expected = bus.expected || scheduled;
    const delay =
      bus.delay_minutes !== undefined && bus.delay_minutes !== null
        ? Number(bus.delay_minutes) || 0
        : computeDelayMinutes(scheduled, expected);
    const minsAway =
      bus.mins_away !== undefined && bus.mins_away !== null
        ? Number(bus.mins_away)
        : computeMinsAway(expected);

    return {
      type: "bus",
      sourceEntity,
      route: bus.line || "Bus",
      destination: bus.destination || bus.terminus || "Unknown",
      scheduled,
      expected,
      delay_minutes: delay,
      mins_away: minsAway,
      status: bus.status || "",
      platform: bus.stand || bus.platform || "",
      raw: bus,
    };
  });

export const normalizeTrainItems = (items = [], sourceEntity = "") =>
  items.map((train) => {
    const scheduled = train.scheduled || "";
    const expected = train.expected || scheduled;
    const delay = computeDelayMinutes(scheduled, expected);
    const minsAway = computeMinsAway(expected);
    const fallbackStatus = train.perturbation || delay > 0 ? "Delayed" : "On Time";

    return {
      type: "train",
      sourceEntity,
      route: train.service || "Train",
      destination: trainDestination(train),
      scheduled,
      expected,
      delay_minutes: delay,
      mins_away: minsAway,
      status: train.status || fallbackStatus,
      platform: train.platform || "",
      raw: train,
    };
  });

export const transportStatus = (item) => {
  if (!item) return { cssClass: "unknown", label: "Unknown" };

  const status = String(item.status || "").toLowerCase();
  if (status.includes("cancel")) return { cssClass: "perturbed", label: "Cancelled" };
  if (status.includes("disruption")) return { cssClass: "warning", label: item.status };
  if (status.includes("delay") || status.includes("late") || status.includes("perturb")) {
    return { cssClass: "warning", label: item.status || "Delayed" };
  }

  if ((item.delay_minutes || 0) >= 10) return { cssClass: "warning", label: "Major Delay" };
  if ((item.delay_minutes || 0) >= 5) return { cssClass: "warning", label: "Minor Delay" };
  return { cssClass: "good", label: item.status || "On Time" };
};

export const sortTransportItems = (items, sortBy = "expected") => {
  const key = sortBy === "scheduled" ? "scheduled" : "expected";
  return [...items].sort((a, b) => {
    const ta = toDate(a[key])?.getTime() ?? Number.MAX_SAFE_INTEGER;
    const tb = toDate(b[key])?.getTime() ?? Number.MAX_SAFE_INTEGER;
    return ta - tb;
  });
};
