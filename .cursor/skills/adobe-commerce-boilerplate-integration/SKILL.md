---
name: adobe-commerce-boilerplate-integration
description: Integrate custom drop-ins with Adobe Commerce Boilerplate and Edge Delivery Services. Use when adding blocks, configuring initializers, setting up import maps, or customizing commerce pages. Covers block decoration, DOM patterns, and Universal Editor.
---

# Adobe Commerce Boilerplate Integration

## When to Use

- Adding a new commerce block
- Configuring drop-in initializers
- Setting up import maps for custom drop-ins
- Customizing block layout or behavior
- Universal Editor instrumentation

## Block Integration

1. Create `blocks/your-block/your-block.js` with `decorate(block)` export
2. Use `createContextualFragment` for multi-element layout, `createElement` for single
3. Render drop-in containers into block DOM
4. Add `blocks/your-block/your-block.css` for styles
5. For UE: add `_your-block.json` in block folder

## Initializers

- Location: `scripts/initializers/`
- Use `initializeDropin()` wrapper
- Call `initializers.mountImmediately(initialize, config)`
- Set endpoint via `setEndpoint(CORE_FETCH_GRAPHQL)` or drop-in specific
- Fetch placeholders for dictionaries

## Import Maps

Add in `head.html`:
```json
"@dropins/your-dropin/": "/scripts/__dropins__/your-dropin/"
```

## Configuration

- `config.json` or Configuration Service for commerce-endpoint, headers
- `default-site.json` for production templates

## References

- Boilerplate: https://experienceleague.adobe.com/developer/commerce/storefront/boilerplate/
- Blocks Reference: /boilerplate/blocks-reference/
- Customizing Blocks: /boilerplate/customizing-blocks/
- Universal Editor: /boilerplate/universal-editor/
