# Express Interest Drop-in

Adobe Commerce storefront drop-in that posts an Express Interest form to a configurable App Builder **submit-public** endpoint.

## Features

- **Required fields**: First name, Last name, Email
- **Optional fields**: Mobile number, Country, Customer type (Individual / Business / Reseller)
- **Configurable base URL**: App Builder runtime origin (no trailing slash)
- Compatible with EDS/boilerplate storefronts (e.g. [accs-citisignal](https://github.com/demo-system-stores/accs-citisignal))
- Works with postinstall.js deployment cycle

## API Endpoint

POST to `{baseUrl}/api/v1/web/ExpressInterest/submit-public`

**Minimal payload:**
```json
{
  "firstName": "Test",
  "lastName": "again",
  "email": "user@example.com"
}
```

**Full payload (with optional):**
```json
{
  "firstName": "Test",
  "lastName": "again",
  "email": "user@example.com",
  "mobileNumber": "+1234567890",
  "country": "US",
  "customerType": "Individual"
}
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Build

```bash
npm run build
```

### 3. Development

```bash
npm run dev
```

- Storybook: http://localhost:6006
- Sandbox: http://127.0.0.1:3000

## Storefront Integration

See [storefront-integration/INTEGRATION.md](storefront-integration/INTEGRATION.md) for instructions to add this drop-in to your EDS storefront (accs-citisignal or similar).

## Block Configuration

| baseurl |
|---------|
| https://your-app.runtime.adobe.io |

Replace with your App Builder runtime origin (no trailing slash).

## References

- [Creating drop-in components](https://experienceleague.adobe.com/developer/commerce/storefront/dropins/all/creating/)
- [accs-citisignal](https://github.com/demo-system-stores/accs-citisignal)
