---
name: adobe-commerce-dropin-researcher
description: Look up Adobe Commerce drop-in APIs, slot names, event payloads, container interfaces, and GraphQL fragments. Use before implementing customizations to ensure correct slot names, event signatures, and API usage from official drop-ins.
---

# Adobe Commerce Drop-in Researcher

## When to Use

- Before implementing a slot customization
- When unsure of event names or payload structure
- When extending GraphQL fragments
- When integrating with Cart, Checkout, PDP, Order, Wishlist, etc.

## Lookup Strategy

1. **Slots**: Check the specific drop-in's Slots documentation (e.g., Cart slots, Checkout slots). Slot names are case-sensitive.

2. **Events**: Check Common events and drop-in-specific Events docs. Use `{ eager: true }` for lastPayload when needed.

3. **Containers**: Each drop-in has Containers (e.g., CartSummaryList, PlaceOrder). Check container props and slots.

4. **GraphQL**: Use `overrideGQLOperations` in build.mjs. Reference existing fragments in drop-in source.

5. **API Functions**: Drop-ins expose API functions (e.g., `search` from product-discovery). Check Functions docs.

## Key Docs

- Cart: /dropins/cart/ (Slots, Events, Containers)
- Checkout: /dropins/checkout/
- PDP: /dropins/product-details/
- Product Discovery: /dropins/product-discovery/
- SDK Reference: /sdk/reference/ (Events, GraphQL, Initializer, Render, Slots, VComponent)

## MCP Tool

If available, use `search-commerce-docs` MCP tool for live documentation search.
