# Express Interest Block

Express Interest form block for EDS/boilerplate storefronts. Renders a form that submits expressions of interest to a configurable App Builder endpoint.

## Files

- `express-interest.js` – Block decorator; loads and renders the drop-in
- `express-interest.css` – Block styles
- `_express-interest.json` – Universal Editor instrumentation (definitions, models, filters)

## Configuration

| Property | Description |
|----------|-------------|
| `baseurl` | App Builder runtime origin with no trailing slash (e.g. `https://xxx.dev.runtime.adobe.io`) |

## Usage

1. Copy this folder to your storefront's `blocks/express-interest/`
2. Add the import map and dependency per [INTEGRATION.md](../../INTEGRATION.md)
3. Add the block to your page with the config table:

   | baseurl |
   |---------|
   | https://your-app.dev.runtime.adobe.io |

4. For Universal Editor (da.live), register the block in your storefront's `models/_section.json` and `models/_component-definition.json` as described in [INTEGRATION.md](../../INTEGRATION.md).
