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
  /** One line: the problem this solves. Always visible on the card. */
  description: LocalizedText;
  /** The full story, revealed by the card's "see more" toggle. */
  descriptionLong: LocalizedText;
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
    descriptionLong: {
      es: "Una plataforma de pedidos completa: el kiosco de cara al cliente, un panel remoto de gestión de dispositivos, una app de TPV y pantalla de cocina en WPF, un sistema de turnos y llamada, y un gestor de cartelería digital. Cada módulo funciona por separado o totalmente integrado con el ERP del cliente. En producción en 2 locales con 3 kioscos cada uno, junto al gestor de colas. Actualmente integrando el pago con tarjeta vía Redsys.",
      en: "A full ordering platform: the customer-facing kiosk, a remote device management panel, a WPF POS and kitchen display app, a queue & calling system, and a digital signage manager. Each module runs standalone or fully wired into the client's ERP. Live across 2 locations with 3 kiosks each, alongside the queue system. Currently integrating card payment via Redsys.",
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
    descriptionLong: {
      es: "Encargo freelance para un autónomo de la construcción en Florida (EE. UU.), que hasta entonces llevaba sus cobros a mano. Da de alta trabajos por ubicación, registra líneas de metros por tipo guardando el precio histórico de cada una, calcula el total y lo concilia con lo que realmente se ha cobrado. Instalable en el móvil como PWA y en uso real por el cliente.",
      en: "Freelance work for a self-employed contractor in Florida, US, who until then tracked billing by hand. Logs jobs by location, records meter lines by type keeping each one's historical price, calculates the total, and reconciles it against what was actually paid. Installable on mobile as a PWA and in real use by the client.",
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
    descriptionLong: {
      es: "Sistema de fichaje por geolocalización reconstruido como app nativa multiplataforma en Flutter — mi propio port independiente del sistema original, publicado para iOS y Android — y disponible también como PWA. Entre ambas versiones lo usan a diario 18 empresas de entre 20 y 50 trabajadores, la mayoría integradas con su ERP y algunas con panel de gestión propio e independiente.",
      en: "Geolocation-based clock-in system rebuilt as a native cross-platform Flutter app — my own independent port of the original system, shipped for iOS and Android — and also available as a PWA. Between both versions it's used daily by 18 companies of 20 to 50 employees, most integrated with their ERP and some with their own independent management panel.",
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
    descriptionLong: {
      es: "Proyecto personal. Plataforma multi-tenant con emparejamiento de pantallas mediante código de 6 dígitos, programaciones por horario y por zona de pantalla, y control de acceso por organización y local. El reproductor que corre en cada pantalla se empaqueta con Electron como ejecutable de escritorio. Arquitectura, modelo de datos y código propios.",
      en: "Personal project. Multi-tenant platform with 6-digit code screen pairing, schedule- and zone-based programming, and organization/location-scoped access control. The player running on each screen is packaged with Electron as a desktop executable. Own architecture, data model, and code.",
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
    descriptionLong: {
      es: "App móvil para que los equipos en obra gestionen sus órdenes de trabajo sin pasar por la oficina: actualización de tareas sobre el terreno, sincronización de datos con el ERP de la empresa y generación de informes.",
      en: "Mobile app so crews on site can manage their work orders without a trip to the office: task updates in the field, data sync with the company ERP, and report generation.",
    },
    tags: [
      { label: { es: "Móvil", en: "Mobile" } },
      { label: { es: "Integración ERP", en: "ERP integration" } },
      { label: "REST APIs" },
    ],
  },
];
