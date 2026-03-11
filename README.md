# UK Transport Card

Home Assistant Lovelace custom card for combined UK bus and train departures.

This card merges bus and train services into one list (or optional sectioned view), uses simple monochrome icons to differentiate transport type, and provides a shared status presentation approach.

## Features

- Combined bus + train card (`custom:uk-transport-card`)
- Merged list sorted by expected time (default)
- Optional sectioned mode (train and bus groups)
- Monochrome transport icons (`mdi:train`, `mdi:bus`)
- Shared late/cancel status rendering while respecting upstream status text

## Data Sources

You can use one or both of these existing entity shapes:

- Bus entity with `buses[]` attribute (for example `sensor.bus_schedule_stop_1`)
- Train entity with `trains[]` attribute (for example `sensor.train_schedule_ksn`)

## Local Build

```bash
npm install
npm run build
```

Build output:

- `dist/uk-transport-card.js`

## HACS Installation (Custom Repository)

1. In Home Assistant, open HACS.
2. Top-right menu -> `Custom repositories`.
3. Add your GitHub repo URL.
4. Category: `Dashboard`.
5. Install `UK Transport Card`.

If resource is not auto-added, add manually:

```text
URL: /hacsfiles/uk-transport-card/uk-transport-card.js
Type: module
```

## Lovelace Examples

### Combined Bus + Train

```yaml
type: custom:uk-transport-card
bus_entity: sensor.bus_schedule_stop_1
train_entity: sensor.train_schedule_ksn
limit: 10
merge_mode: merged
```

### Bus Only

```yaml
type: custom:uk-transport-card
bus_entity: sensor.bus_schedule_stop_1
limit: 6
```

### Train Only

```yaml
type: custom:uk-transport-card
train_entity: sensor.train_schedule_ksn
limit: 6
```

## Card Options

- `entity` (optional): combined entity containing `buses[]` and/or `trains[]`
- `bus_entity` (optional): bus source entity
- `train_entity` (optional): train source entity
- `title` (optional): override card title
- `limit` (default `10`): max rows displayed
- `merge_mode` (default `merged`): `merged` or `sectioned`
- `sort_by` (default `expected`): `expected` or `scheduled`
- `show_icons` (default `true`)
- `show_platform` (default `true`)
- `hide_on_time_expected` (default `false`)
