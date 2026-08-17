import type { Tag } from "./tags";

export const skills: Tag[] = [
  { label: "Angular", icon: "angular" },
  { label: "React", icon: "react" },
  { label: "Node.js", icon: "nodedotjs" },
  { label: "TypeScript", icon: "typescript" },
  { label: "Laravel", icon: "laravel" },
  { label: "Flutter / Dart", icon: ["flutter", "dart"] },
  { label: "SQL Server" },
  { label: "Supabase", icon: "supabase" },
  {
    label: "VB6 → .NET",
    tooltip: { es: "VB6 fue el precursor de .NET", en: "VB6 was the predecessor of .NET" },
    icon: "dotnet",
  },
  { label: "Azure DevOps / CI-CD" },
  { label: "REST APIs" },
  { label: { es: "Integración ERP", en: "ERP integration" } },
];
