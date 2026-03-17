---
name: adobe-commerce-howtos
description: Implement Adobe Commerce Storefront how-tos: federated search, multistore setup, cart/checkout customizations, address validation, and other tutorials. Use when following official how-to guides.
---

# Adobe Commerce How-Tos

## When to Use

- Implementing federated search (content + commerce)
- Setting up multistore (locales, store switcher)
- Customizing cart, checkout, PDP
- Adding address validation, payment methods, etc.

## Federated Search

- Content index: `helix-query.yaml` for `/content-index.json`
- Combined search block: parallel `search()` (Product Discovery) + client-side content filter
- Tabbed UI: Products | Content
- Ref: https://experienceleague.adobe.com/developer/commerce/storefront/how-tos/federated-search/

## Multistore

- Folder structure: `/en/`, `/en-ca/`, `/fr-ca/` (language-code-region-code)
- Store switcher: `store-switcher` fragment per store, links with `#nolocal`
- Config: `headers.cs` with Magento-Store-Code, Magento-Store-View-Code, Magento-Website-Code
- Ref: https://experienceleague.adobe.com/developer/commerce/storefront/setup/configuration/multistore-setup/

## Cart/Checkout Customizations

- Slots for custom content
- Events: `cart/data`, `checkout/values`, `order/placed`
- Block config via `readBlockConfig(block)`

## Releases

Track compatibility: https://experienceleague.adobe.com/developer/commerce/storefront/releases/
- Drop-in SDK versions
- Component compatibility matrix
- Breaking changes
