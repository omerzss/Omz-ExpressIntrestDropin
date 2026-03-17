# Express Interest Drop-in - Storefront Integration

To use this drop-in in your EDS/boilerplate storefront (e.g. [accs-citisignal](https://github.com/demo-system-stores/accs-citisignal)):

## 1. Add dependency

In your storefront `package.json`, use one of the following.

**Local path (development):**

```json
"dependencies": {
  "@dropins/express-interest": "file:../Omz-ExpressIntrestDropin"
}
```

**GitHub (git):**

```json
"dependencies": {
  "@dropins/express-interest": "github:omerzss/Omz-ExpressIntrestDropin"
}
```

Optional: pin to a branch or tag, e.g. `"github:omerzss/Omz-ExpressIntrestDropin#main"` or `"github:omerzss/Omz-ExpressIntrestDropin#v1.0.0"`.

**Published package (npm):**

```json
"dependencies": {
  "@dropins/express-interest": "~1.0.0"
}
```

Then run `npm install`.

## 2. Build the drop-in (for local or GitHub dependency)

- **Local path:** `cd ../Omz-ExpressIntrestDropin && npm run build`
- **GitHub:** build inside the installed package so your postinstall can copy built files:  
  `npm run build --prefix node_modules/@dropins/express-interest`  
  (Or add a postinstall in your storefront that runs this if you use the GitHub dependency.)

## 3. Add import map

In `head.html`, add to the `imports` object:

```json
"@dropins/express-interest/": "/scripts/__dropins__/express-interest/"
```

## 4. Copy block files

Copy the contents of `storefront-integration/blocks/express-interest/` to your storefront's `blocks/express-interest/`:

- `express-interest.js`
- `express-interest.css`
- `_express-interest.json` (optional, for Universal Editor)

## 5. Fix block import path

The block uses `readBlockConfig` from `../../scripts/aem.js`. Adjust the path if your storefront structure differs (e.g. `../../../scripts/aem.js`).

## 6. Block configuration

In your page/document, add an Express Interest block with this config table:

| baseurl |
|---------|
| https://development-287568-406omzexpressintrest-stage.dev.runtime.adobe.io |

Replace with your App Builder runtime origin (no trailing slash).

## Postinstall

The existing postinstall (e.g. accs-citisignal) copies `node_modules/@dropins/*` to `scripts/__dropins__/`. No changes needed if the package is named `@dropins/express-interest`.

## Universal Editor (da.live)

To show the Express Interest block in the Blocks sidebar in da.live / Universal Editor, register it in your storefront:

1. **Copy block files** into `blocks/express-interest/` (js, css, json).

2. **Add block to section filter** – In `models/_section.json`, add `"express-interest"` to the `filters[0].components` array:

   ```json
   "components": [
     "hero", "accordion", "product-recommendations", ...,
     "express-interest"
   ]
   ```

3. **Add block to component definitions** – In `models/_component-definition.json`, add an entry under the Blocks group:

   ```json
   {
     "...": "../blocks/express-interest/_*.json#/definitions"
   }
   ```

4. **Run build** – Execute the storefront's JSON build (e.g. `npm run build` or `npm run build:json`) so `component-models.json`, `component-definitions.json`, and `component-filters.json` are regenerated from the models/ and blocks/ sources.

5. **Deploy / refresh** – Ensure the updated config is deployed and refresh the Universal Editor.
