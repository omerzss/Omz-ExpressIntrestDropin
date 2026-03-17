# Omz Express Interest Drop-in

Custom Adobe Commerce drop-in for ACCS App Builder extension.

## Project Context

- **Type**: Custom drop-in for Adobe Commerce as a Cloud Service (ACCS)
- **Stack**: Drop-in SDK (@dropins/tools ~1.7.0), Edge Delivery Services, Commerce Boilerplate

## Development Guidelines

1. **Extend vs Create**: Prefer extending existing drop-ins with slots/events when possible. Create new drop-ins only for net-new functionality.

2. **SDK First**: Use @dropins/tools components, design tokens, and utilities. Follow official patterns from B2C/B2B drop-ins.

3. **Boilerplate Integration**: When integrating with boilerplate, follow block decoration patterns, use createContextualFragment for multi-element DOM, createElement for single elements.

4. **References**: Consult Adobe Commerce Storefront docs at https://experienceleague.adobe.com/developer/commerce/storefront/

## Key Documentation

- SDK: /sdk/, /sdk/design/, /sdk/utilities/
- CLI: npx elsie generate config|component|container|api
- B2C Drop-ins: /dropins/
- B2B Drop-ins: /dropins-b2b/
- Boilerplate: /boilerplate/
