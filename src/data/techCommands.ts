/**
 * Per-skill-tag data for the Technologies console: the "file" hovering it
 * `cat`s, and the real command that prints out as that file's content. Keyed
 * by the tag's label (its English form, when the label is localized) — the
 * same key TechSection derives for React's `key` prop, so no separate id
 * needs to be threaded through Tag.
 *
 * Commands are real and plausible; several lean on this portfolio's own
 * projects (kiosk-order, screens/pair, erp/sync) rather than generic
 * boilerplate, since that's the actual work these skills were used for.
 */
export interface TechEntry {
  file: string;
  command: string;
}

export const techCommands: Record<string, TechEntry> = {
  Angular: { file: "angular.sh", command: "ng generate component kiosk-order" },
  React: { file: "react.sh", command: "npm create vite@latest -- --template react-ts" },
  "Node.js": { file: "node.sh", command: "node --watch server.js" },
  TypeScript: { file: "typescript.sh", command: "tsc --noEmit --strict" },
  Laravel: { file: "laravel.sh", command: "php artisan migrate --seed" },
  "Flutter / Dart": { file: "flutter.sh", command: "flutter build ios --release" },
  "SQL Server": { file: "sql-server.sh", command: 'sqlcmd -S localhost -Q "SELECT @@VERSION"' },
  Supabase: { file: "supabase.sh", command: "supabase db push" },
  "VB6 → .NET": { file: "dotnet.sh", command: "dotnet build --configuration Release" },
  "Azure DevOps / CI-CD": { file: "azure-devops.sh", command: "az pipelines run --name kiosk-ci" },
  "REST APIs": { file: "rest-apis.sh", command: "curl -X POST /api/screens/pair" },
  "ERP integration": { file: "erp.sh", command: "curl -X POST /api/erp/sync/orders" },
};
