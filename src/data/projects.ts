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
      es: "Una plataforma de pedidos completa para restaurantes de comida rápida: el kiosco de cara al cliente, un panel remoto de gestión de dispositivos, una app de TPV y pantalla de cocina en WPF, un sistema de turnos y llamada, y un gestor de cartelería digital — de forma independiente o totalmente integrada con el ERP del cliente. En producción en 2 locales con 3 kioscos cada uno, junto con el gestor de cola de turnos. Actualmente integrando el pago seguro con tarjeta vía Redsys.",
      en: "A full ordering platform for quick-service restaurants: the customer-facing kiosk, a remote device management panel, a WPF POS and kitchen display app, a queue & calling system, and a digital signage manager — standalone or fully wired into the client's ERP. Live across 2 locations with 3 kiosks each, alongside the queue & calling system. Currently integrating secure card payment via Redsys.",
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
    id: "mobile-time-tracking",
    hasMedia: true,
    badgeVariant: "live",
    badge: { es: "Sistema en producción", en: "Live system" },
    title: { es: "App de Fichaje Móvil (Flutter)", en: "Mobile Time Tracking (Flutter)" },
    description: {
      es: "App de fichaje por geolocalización reconstruida como app nativa multiplataforma en Flutter — mi propio port independiente del sistema original, publicado para iOS y Android. En uso, entre la versión Flutter y la PWA, por 18 empresas (media de 20-50 trabajadores cada una), la mayoría integradas con el ERP del cliente y algunas con panel de gestión propio e independiente.",
      en: "Geolocation-based clock-in app rebuilt as a native cross-platform Flutter app — my own independent port of the original system, shipped for iOS and Android. Between the Flutter app and the PWA version, in use by 18 companies (avg. 20-50 employees each), most integrated with the client's ERP and some with their own independent management panel.",
    },
    tags: [
      { label: "Flutter", icon: "flutter" },
      { label: "Dart", icon: "dart" },
      { label: { es: "Geolocalización", en: "Geolocation" } },
    ],
  },
  {
    id: "work-order-app",
    hasMedia: true,
    title: { es: "App de Gestión de Órdenes de Trabajo", en: "Work Order & Construction App" },
    description: {
      es: "App móvil para gestionar órdenes de trabajo de construcción, sincronizada con el ERP de la empresa para actualización de tareas, sincronización de datos y reporting.",
      en: "Mobile app for managing construction work orders, synced with the company ERP for task updates, data sync, and reporting.",
    },
    tags: [
      { label: { es: "Móvil", en: "Mobile" } },
      { label: { es: "Integración ERP", en: "ERP integration" } },
      { label: "REST APIs" },
    ],
  },
  {
    id: "signageflow",
    hasMedia: false,
    badgeVariant: "progress",
    badge: { es: "Proyecto personal", en: "Personal project" },
    title: { es: "SignageFlow — Gestor de Cartelería Digital", en: "SignageFlow — Digital Signage Manager" },
    description: {
      es: "Plataforma multi-tenant de gestión de cartelería digital para pantallas en tienda: emparejamiento de pantallas por código, programaciones por horario y por zona, y control de acceso por organización y local. Una exploración personal en profundidad de una idea que en Kong Consulting solo pude abordar de forma parcial — arquitectura, modelo de datos y código propios, sin conexión con sistemas ni datos de cliente.",
      en: "Multi-tenant digital signage management platform for in-store screens: code-based device pairing, schedule- and zone-based content, and organization/location-scoped access control. A deeper personal exploration of an idea I could only partially address at Kong Consulting — own architecture, data model, and code, with no connection to any client system or data.",
    },
    tags: [
      { label: "Angular", icon: "angular" },
      { label: "Node.js", icon: "nodedotjs" },
      { label: "TypeScript", icon: "typescript" },
      { label: "SQL Server" },
      { label: { es: "Multi-tenant", en: "Multi-tenant" } },
    ],
  },
  {
    id: "trabajo-por-metros",
    hasMedia: false,
    badgeVariant: "live",
    badge: { es: "Freelance, en producción", en: "Freelance, live" },
    title: { es: "App de Cobros por Metros (Freelance)", en: "Meter-Based Billing App (Freelance)" },
    description: {
      es: "PWA de gestión de cobros construida como encargo freelance para un autónomo de la construcción en Florida (EE. UU.): da de alta trabajos, registra metros por tipo con precio histórico, calcula totales y concilia lo cobrado frente a lo esperado. Instalable desde el móvil, en uso real por el cliente.",
      en: "Billing management PWA built as freelance work for a self-employed contractor in Florida, US: logs jobs, tracks meters by type with historical pricing, calculates totals, and reconciles what's billed against what's collected. Installable from mobile, in real use by the client.",
    },
    tags: [
      { label: "React", icon: "react" },
      { label: "TypeScript", icon: "typescript" },
      { label: "Supabase", icon: "supabase" },
      { label: "PWA" },
    ],
  },
];
