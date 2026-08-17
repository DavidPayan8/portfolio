import type { Lang } from "./types";

export interface UiText {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  skipLink: string;
  navWork: string;
  navAbout: string;
  navContact: string;
  navResume: string;
  badgeAvailable: string;
  heroRole: string;
  heroHeadline: string;
  heroIntro: string;
  ctaWork: string;
  ctaContact: string;
  workHeading: string;
  carouselPrevLabel: string;
  carouselNextLabel: string;
  maximizeLabel: string;
  modalCloseHint: string;
  aboutHeading: string;
  aboutParagraph: string;
  educationHeading: string;
  contactHeading: string;
  contactParagraph: string;
  footerCopyright: string;
  socialEmail: string;
  langToggleLabel: string;
}

export const translations: Record<Lang, UiText> = {
  es: {
    metaTitle: "David Payán — Desarrollador Full Stack",
    metaDescription:
      "David Payán es un Desarrollador Full Stack afincado en Sevilla, España, que construye ecosistemas de kioscos de autoservicio, apps móviles multiplataforma y sistemas integrados con ERP.",
    ogTitle: "David Payán — Desarrollador Full Stack",
    ogDescription:
      "Ecosistemas de kioscos de autoservicio, apps móviles multiplataforma y sistemas integrados con ERP, construidos de principio a fin.",
    skipLink: "Saltar al trabajo",
    navWork: "Trabajo",
    navAbout: "Sobre mí",
    navContact: "Contacto",
    navResume: "CV",
    badgeAvailable: "Disponible para nuevas oportunidades",
    heroRole: "Desarrollador Full Stack",
    heroHeadline:
      "Sistemas full stack, construidos de principio a fin — desde la pantalla del kiosco hasta el ERP que lo conecta todo.",
    heroIntro:
      "Desarrollador Full Stack con más de 2 años de experiencia sacando proyectos adelante hasta producción, desde el análisis de requisitos hasta el despliegue y el mantenimiento. Construyo plataformas web, apps móviles multiplataforma y los sistemas conectados a ERP que los mantienen unidos — el tipo de software que tiene que funcionar de forma fiable en un restaurante real, en una obra real, todos los días.",
    ctaWork: "Ver el trabajo",
    ctaContact: "Contactar",
    workHeading: "Trabajos seleccionados",
    carouselPrevLabel: "Proyecto anterior",
    carouselNextLabel: "Siguiente proyecto",
    maximizeLabel: "Ver a pantalla grande",
    modalCloseHint: "Pulsa Escape o haz clic fuera del vídeo para cerrar",
    aboutHeading: "Sobre mí",
    aboutParagraph:
      "Desarrollador Full Stack en Kong Consulting, en Sevilla, con más de 2 años construyendo aplicaciones web escalables con Angular, Node.js y Laravel, apps móviles multiplataforma con Flutter, y sistemas conectados a ERP. Los sistemas que he construido están hoy en producción: un ecosistema de kioscos de autoservicio en 2 restaurantes y una app de fichaje usada a diario por 18 empresas. Me gusta llevar un sistema desde una idea en la pizarra hasta algo que funciona de forma fiable y sin supervisión en producción. También he trabajado en Londres (verano de 2023), reforzando mi inglés y mi experiencia trabajando en equipos internacionales.",
    educationHeading: "Formación",
    contactHeading: "Contacto",
    contactParagraph:
      "¿Tienes un proyecto entre manos o quieres hablar sobre una oportunidad? Escríbeme directamente o encuéntrame en estas redes.",
    footerCopyright: "© 2026 David Payán. Sevilla, España.",
    socialEmail: "Correo electrónico",
    langToggleLabel: "Switch to English",
  },
  en: {
    metaTitle: "David Payán — Full Stack Developer",
    metaDescription:
      "David Payán is a Full Stack Developer based in Seville, Spain, building self-service kiosk ecosystems, cross-platform mobile apps, and ERP-integrated systems.",
    ogTitle: "David Payán — Full Stack Developer",
    ogDescription:
      "Self-service kiosk ecosystems, cross-platform mobile apps, and ERP-integrated systems, built end to end.",
    skipLink: "Skip to work",
    navWork: "Work",
    navAbout: "About",
    navContact: "Contact",
    navResume: "Resume",
    badgeAvailable: "Available for new opportunities",
    heroRole: "Full Stack Developer",
    heroHeadline: "Full stack systems, built end to end — from the kiosk screen to the ERP that ties it all together.",
    heroIntro:
      "Full Stack Developer with 2+ years of experience taking projects all the way to production, from requirements analysis through deployment and maintenance. I build web platforms, cross-platform mobile apps, and the ERP-connected systems that tie them together — the kind of software that has to run reliably in a real restaurant, on a real job site, every day.",
    ctaWork: "See the work",
    ctaContact: "Get in touch",
    workHeading: "Selected work",
    carouselPrevLabel: "Previous project",
    carouselNextLabel: "Next project",
    maximizeLabel: "View fullscreen",
    modalCloseHint: "Press Escape or click outside the video to close",
    aboutHeading: "About",
    aboutParagraph:
      "Full Stack Developer at Kong Consulting in Seville, with 2+ years building scalable web applications with Angular, Node.js, and Laravel, cross-platform mobile apps with Flutter, and ERP-connected systems. The systems I've built are live today: a self-service kiosk ecosystem across 2 restaurants and a time-tracking app used daily by 18 companies. I like taking a system from a whiteboard idea to something that runs reliably, unattended, in production. I've also worked in London (summer 2023), which strengthened my English and my experience working in international teams.",
    educationHeading: "Education",
    contactHeading: "Contact",
    contactParagraph:
      "Got a project in mind or want to talk about an opportunity? Reach out directly or find me on these.",
    footerCopyright: "© 2026 David Payán. Seville, Spain.",
    socialEmail: "Email",
    langToggleLabel: "Cambiar a español",
  },
};
