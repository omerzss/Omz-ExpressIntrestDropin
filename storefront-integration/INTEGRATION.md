# Express Interest Drop-in - Storefront Integration

To use this drop-in in your EDS/boilerplate storefront (e.g. [accs-citisignal](https://github.com/demo-system-stores/accs-citisignal)):

## 1. Add dependency

In your storefront `package.json`:

```json
"dependencies": {
  "@dropins/express-interest": "file:../Omz-ExpressIntrestDropin"
}
```

For a published package: `"@dropins/express-interest": "~1.0.0"`

Then run `npm install`.

## 2. Build the drop-in (for local file dependency)

```bash
cd ../Omz-ExpressIntrestDropin && npm run build
```

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
