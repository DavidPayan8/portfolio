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
      es: "Una plataforma de pedidos completa para restaurantes de comida rápida: el kiosco de cara al cliente, un panel remoto de gestión de dispositivos, una app de TPV y pantalla de cocina en WPF, un sistema de turnos y llamada, y un gestor de cartelería digital — de forma independiente o totalmente integrada con el ERP del cliente. En producción en 2 locales con 3 kioscos cada uno, junto con el gestor de cola de turnos.",
      en: "A full ordering platform for quick-service restaurants: the customer-facing kiosk, a remote device management panel, a WPF POS and kitchen display app, a queue & calling system, and a digital signage manager — standalone or fully wired into the client's ERP. Live across 2 locations with 3 kiosks each, alongside the queue & calling system.",
    },
    tags: [
      { label: "Angular" },
      { label: "Node.js" },
      { label: "WPF / .NET" },
      { label: "SQL Server" },
      { label: { es: "Integración ERP", en: "ERP integration" } },
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
      { label: "Flutter" },
      { label: "Dart" },
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
    id: "redsys-payments",
    hasMedia: false,
    badgeVariant: "progress",
    badge: { es: "En curso", en: "In progress" },
    title: { es: "Integración de Pagos Redsys", en: "Redsys Payment Integration" },
    description: {
      es: "Añadiendo pago seguro con tarjeta al ecosistema de kioscos a través de la pasarela de pago Redsys.",
      en: "Adding secure card-payment checkout to the kiosk ecosystem via the Redsys payment gateway.",
    },
    tags: [
      { label: "Redsys" },
      { label: { es: "Pagos", en: "Payments" } },
      { label: "Node.js" },
    ],
  },
];
