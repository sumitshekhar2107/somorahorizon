# React + TypeScript + Vite

## Manufacturer page and packaging QR code

### Manufacturer subdomain (Vercel)

The app renders the manufacturer page at `https://manufacturer.somorahorizon.com/` based on the hostname, while keeping `/manufacturer` available on the main domain. Navigation on the subdomain links back to the main website.

1. In the existing frontend Vercel project, open **Settings → Domains** and add `manufacturer.somorahorizon.com` to the production environment. Attach it to this same project, without redirecting it to the main domain.
2. At the domain's DNS provider, create a **CNAME** record with name **manufacturer** and the exact target shown by Vercel. Remove any conflicting records for this name; do not change the main domain's records. If DNS is managed by Vercel, follow its automatic configuration instead.
3. Commit/push the app changes and deploy. The project's Root Directory should be `frontend`, where `vercel.json` enables SPA fallback.
4. Wait for Vercel to confirm valid DNS and issue the HTTPS certificate, then open the subdomain and test the home/quality links.
5. Once verified publicly, use `https://manufacturer.somorahorizon.com/` as the packaging QR destination.

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
