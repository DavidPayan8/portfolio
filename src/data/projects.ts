import type { LocalizedText } from "../i18n/types";
import type { Tag } from "./tags";

export interface Project {
  id: string;
  /** false when there's no demo video planned yet — hides the play-button placeholder. */
  hasMedia: boolean;
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
    badgeVariant: "live",
    badge: { es: "Sistema en producción", en: "Live system" },
    title: { es: "Ecosistema de Kioscos de Autoservicio", en: "Self-Service Kiosk Ecosystem" },
    description: {
      es: "Una plataforma de pedidos completa para restaurantes de comida rápida: el kiosco de cara al cliente, un panel remoto de gestión de dispositivos, una app de TPV y pantalla de cocina en WPF, un sistema de turnos y llamada, y un gestor de cartelería digital — de forma independiente o totalmente integrada con el ERP del cliente.",
      en: "A full ordering platform for quick-service restaurants: the customer-facing kiosk, a remote device management panel, a WPF POS and kitchen display app, a queue & calling system, and a digital signage manager — standalone or fully wired into the client's ERP.",
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
    title: { es: "App de Fichaje Móvil (Flutter)", en: "Mobile Time Tracking (Flutter)" },
    description: {
      es: "App de fichaje por geolocalización reconstruida como app nativa multiplataforma en Flutter — mi propio port independiente del sistema original, publicado para iOS y Android.",
      en: "Geolocation-based clock-in app rebuilt as a native cross-platform Flutter app — my own independent port of the original system, shipped for iOS and Android.",
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
