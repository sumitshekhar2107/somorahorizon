# React + TypeScript + Vite

## Manufacturer page and packaging QR code

- The dedicated page is available at `/manufacturer` (for example, `https://your-domain.com/manufacturer`). It is intentionally not listed in the main navigation.
- Configure production hosting to serve `index.html` for `/manufacturer` (an SPA fallback/rewrite, not a redirect to `/`). This allows direct QR visits and browser refreshes to work. Vite provides this fallback during development.
- Before publishing, replace the pending-information content in `src/components/ManufacturerPage.tsx` with verified manufacturer details. Do not treat the brand contact details as the legal manufacturer details.
- Deploy the website to its permanent public HTTPS domain, then generate a static QR code containing the complete manufacturer URL. A QR code generator's URL/website option is sufficient; no backend is needed.
- Export the QR code as SVG or a high-resolution PNG for packaging. Keep a clear white border and test the printed code with multiple phones before production.
- Do not encode `localhost` or a temporary development URL in printed packaging. Keep the final destination URL stable so existing labels continue to work when page content changes.
- The page is public. Hiding it from the menu does not restrict access; private manufacturer information would require authentication.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
