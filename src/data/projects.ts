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
      es: "Los restaurantes de comida rápida necesitaban digitalizar el pedido y la gestión en tienda sin depender de terceros. Construí un ecosistema completo — kiosco, TPV, cola de turnos, cartelería — de forma independiente o integrada con su ERP. En producción en 2 locales, 6 kioscos.",
      en: "Quick-service restaurants needed to digitize ordering and in-store management without relying on third parties. Built a full ecosystem — kiosk, POS, queue system, digital signage — standalone or ERP-integrated. Live across 2 locations, 6 kiosks.",
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
      es: "Un autónomo de la construcción en Florida (EE. UU.) llevaba sus cobros por metros a mano, sin control claro de lo cobrado. Le construí una PWA para registrar trabajos, calcular totales y conciliar cobros. En uso real por el cliente.",
      en: "A self-employed contractor in Florida, US was tracking meter-based billing by hand, with no clear view of what was owed. Built him a PWA to log jobs, calculate totals, and reconcile payments. In real use by the client.",
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
      es: "Las empresas necesitaban fichaje remoto preciso y difícil de falsear. Reconstruí el sistema como app nativa en Flutter y como PWA, con geolocalización. En uso a diario por 18 empresas.",
      en: "Companies needed accurate, hard-to-game remote clock-in. Rebuilt the system as a native Flutter app and a PWA, with geolocation. Used daily by 18 companies.",
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
      es: "Quería llevar la idea de cartelería digital más allá de lo que había explorado en el trabajo. Construí, por mi cuenta, una plataforma multi-tenant con emparejamiento de pantallas por código y un reproductor de escritorio en Electron.",
      en: "Wanted to take the digital signage idea further than I'd been able to explore at work. Built, on my own, a multi-tenant platform with code-based screen pairing and an Electron desktop player.",
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
      es: "Los equipos en obra necesitaban gestionar órdenes de trabajo sin volver a la oficina para actualizar el ERP. Construí una app móvil sincronizada en tiempo real con el sistema de la empresa.",
      en: "Crews on site needed to manage work orders without a trip back to the office to update the ERP. Built a mobile app that syncs with the company system in real time.",
    },
    tags: [
      { label: { es: "Móvil", en: "Mobile" } },
      { label: { es: "Integración ERP", en: "ERP integration" } },
      { label: "REST APIs" },
    ],
  },
];
