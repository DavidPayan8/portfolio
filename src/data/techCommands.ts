/**
 * One real command per skill tag, shown typing itself in the Technologies
 * terminal on hover. Keyed by the tag's label (its English form, when the
 * label is localized) — the same key TechSection already derives for React's
 * `key` prop, so no separate id needs to be threaded through Tag.
 *
 * Real, plausible commands only — several lean on this portfolio's own
 * projects (kiosk-order, screens/pair, erp/sync) rather than generic
 * boilerplate, since that's the actual work these skills were used for.
 */
export const techCommands: Record<string, string> = {
  Angular: "ng generate component kiosk-order",
  React: "npm create vite@latest -- --template react-ts",
  "Node.js": "node --watch server.js",
  TypeScript: "tsc --noEmit --strict",
  Laravel: "php artisan migrate --seed",
  "Flutter / Dart": "flutter build ios --release",
  "SQL Server": 'sqlcmd -S localhost -Q "SELECT @@VERSION"',
  Supabase: "supabase db push",
  "VB6 → .NET": "dotnet build --configuration Release",
  "Azure DevOps / CI-CD": "az pipelines run --name kiosk-ci",
  "REST APIs": "curl -X POST /api/screens/pair",
  "ERP integration": "curl -X POST /api/erp/sync/orders",
};
