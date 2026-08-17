import type { LocalizedText } from "../i18n/types";
import type { Tag } from "./tags";

export interface Project {
  id: string;
  /** false when there's no demo video planned yet — hides the play-button placeholder. */
  hasMedia: boolean;
  /** Short muted loop shown in the card background. Requires hasMedia: true. */
  videoSrc?: string;
  /** Full recording with audio, shown in the "maximize" modal. Requires videoSrc. */
  videoSrcFull?: string;
  badge?: LocalizedText;
  badgeVariant?: "live" | "progress";
  title: LocalizedText;
  description: LocalizedText;
  tags: Tag[];
}

export const projects: Project[] = [
  {
    id: "kiosk-ecosystem",
    hasMedia: true,
    videoSrc: "/videos/kiosk-ecosystem-preview.mp4",
    videoSrcFull: "/videos/kiosk-ecosystem.mp4",
    badgeVariant: "live",
    badge: { es: "Sistema en producción", en: "Live system" },
    title: { es: "Ecosistema de Kioscos de Autoservicio", en: "Self-Service Kiosk Ecosystem" },
    description: {
      es: "Digitaliza el pedido y la gestión en restaurantes de comida rápida, de forma independiente o integrada con su ERP.",
      en: "Digitizes ordering and in-store management for quick-service restaurants, standalone or ERP-integrated.",
    },
    tags: [
      { label: "Angular", icon: "angular" },
      { label: "Node.js", icon: "nodedotjs" },
      { label: "Laravel", icon: "laravel" },
      { label: "WPF / .NET", icon: "dotnet" },
      { label: "SQL Server" },
      { label: { es: "Integración ERP", en: "ERP integration" } },
      { label: "Redsys", icon: "redsys" },
    ],
  },
  {
    id: "trabajo-por-metros",
    hasMedia: false,
    badgeVariant: "live",
    badge: { es: "Freelance, en producción", en: "Freelance, live" },
    title: { es: "App de Cobros por Metros (Freelance)", en: "Meter-Based Billing App (Freelance)" },
    description: {
      es: "Sustituye el cálculo de cobros a mano de un autónomo de la construcción por una app que registra trabajos y concilia lo cobrado.",
      en: "Replaces a construction contractor's manual billing calculations with an app that logs jobs and reconciles payments.",
    },
    tags: [
      { label: "React", icon: "react" },
      { label: "TypeScript", icon: "typescript" },
      { label: "Supabase", icon: "supabase" },
      { label: "PWA" },
    ],
  },
  {
    id: "mobile-time-tracking",
    hasMedia: true,
    badgeVariant: "live",
    badge: { es: "Sistema en producción", en: "Live system" },
    title: { es: "App de Fichaje Móvil (Flutter + PWA)", en: "Mobile Time Tracking (Flutter + PWA)" },
    description: {
      es: "Fichaje remoto preciso y difícil de falsear, con geolocalización, como app nativa y como PWA.",
      en: "Accurate, hard-to-game remote clock-in with geolocation, as a native app and a PWA.",
    },
    tags: [
      { label: "Flutter", icon: "flutter" },
      { label: "Dart", icon: "dart" },
      { label: { es: "Geolocalización", en: "Geolocation" } },
    ],
  },
  {
    id: "signageflow",
    hasMedia: false,
    badgeVariant: "progress",
    badge: { es: "Proyecto personal", en: "Personal project" },
    title: { es: "SignageFlow — Gestor de Cartelería Digital", en: "SignageFlow — Digital Signage Manager" },
    description: {
      es: "Gestor de cartelería digital multi-tenant para pantallas en tienda, con reproductor de escritorio en Electron.",
      en: "Multi-tenant digital signage manager for in-store screens, with an Electron desktop player.",
    },
    tags: [
      { label: "Angular", icon: "angular" },
      { label: "Node.js", icon: "nodedotjs" },
      { label: "TypeScript", icon: "typescript" },
      { label: "SQL Server" },
      { label: "Electron", icon: "electron" },
      { label: { es: "Multi-tenant", en: "Multi-tenant" } },
    ],
  },
  {
    id: "work-order-app",
    hasMedia: true,
    title: { es: "App de Gestión de Órdenes de Trabajo", en: "Work Order & Construction App" },
    description: {
      es: "Gestión de órdenes de trabajo en obra, sincronizada en tiempo real con el ERP de la empresa.",
      en: "On-site work order management, synced in real time with the company ERP.",
    },
    tags: [
      { label: { es: "Móvil", en: "Mobile" } },
      { label: { es: "Integración ERP", en: "ERP integration" } },
      { label: "REST APIs" },
    ],
  },
];
