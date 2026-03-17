---
name: adobe-commerce-dropin-create-new
description: Create new Adobe Commerce drop-ins from the dropin-template. Use when building a net-new drop-in (not extending existing). Covers Elsie CLI, project structure, sandbox, and build workflow.
---

# Create New Adobe Commerce Drop-in

## When to Use

- Building entirely new commerce functionality
- No existing drop-in to extend
- Need standalone NPM package

## Setup

1. Use template: https://github.com/adobe-commerce/dropin-template (Use this template)
2. Clone and `npm install`
3. `npx elsie generate config --name <DropInName>`
4. Copy `.env.sample` to `.env`, set ENDPOINT

## Elsie CLI

```bash
npx elsie generate config --name <Domain>
npx elsie generate component --pathname <MyUIComponent>   # PascalCase
npx elsie generate container --pathname <MyContainer>     # PascalCase
npx elsie generate api --pathname <myApiFunction>         # camelCase
```

## Project Structure

- `src/api/` - API functions, GraphQL
- `src/components/` - UI components (presentation)
- `src/containers/` - Business logic, state, data fetching
- `src/render/` - Render utilities, provider
- `examples/html-host/` - Sandbox for testing

## Shared Components

```bash
npm install @adobe-commerce/elsie
```

Import Button, Input, etc. from `@adobe-commerce/elsie`.

## Build & Test

- `npm run dev` - Development server
- `npm run build` - Production bundles
- `npm run test` - Unit tests
- `npm run storybook` - Component stories

## References

- Creating: https://experienceleague.adobe.com/developer/commerce/storefront/dropins/all/creating/
- CLI: https://experienceleague.adobe.com/developer/commerce/storefront/sdk/get-started/cli/
