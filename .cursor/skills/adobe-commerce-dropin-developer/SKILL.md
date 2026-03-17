---
name: adobe-commerce-dropin-developer
description: Build and customize Adobe Commerce Storefront drop-in components for ACCS. Use when developing drop-ins, containers, slots, events, GraphQL integration, or SDK component usage. Covers B2C/B2B patterns, design tokens, and boilerplate integration.
---

# Adobe Commerce Drop-in Developer

## When to Use

- Building or customizing drop-in components
- Integrating with Cart, Checkout, PDP, or other drop-ins
- Adding slots, events, or GraphQL extensions
- Creating blocks for Edge Delivery Services

## Core Patterns

### Container Rendering

```javascript
import { render as provider } from '@dropins/your-dropin/render.js';
import YourContainer from '@dropins/your-dropin/containers/YourContainer.js';

await provider.render(YourContainer, {
  slots: { Footer: (ctx) => { /* inject UI */ } },
  /* props */
})(containerElement);
```

### Event Bus

```javascript
import { events } from '@dropins/tools/event-bus.js';
events.on('cart/data', (data) => { /* react */ });
events.emit('custom/event', payload);
```

### SDK Components

Import from `@dropins/tools/components.js`: Button, Input, Field, Card, Price, Modal, etc. Use `render` from `@dropins/tools/render.js` to render into DOM.

### Design Tokens

Use CSS variables: `var(--spacing-medium)`, `var(--color-brand-500)`, `var(--type-body-1-default-font)`.

## Extending vs Creating

- **Extend**: Use slots, events, `overrideGQLOperations`, model transformers. Add UI/behavior to existing drop-ins.
- **Create**: Use dropin-template, Elsie CLI (`npx elsie generate`). For net-new functionality.

## References

- SDK: https://experienceleague.adobe.com/developer/commerce/storefront/sdk/
- B2C: https://experienceleague.adobe.com/developer/commerce/storefront/dropins/
- B2B: https://experienceleague.adobe.com/developer/commerce/storefront/dropins-b2b/
- Extending: /dropins/all/extending/
- Creating: /dropins/all/creating/
