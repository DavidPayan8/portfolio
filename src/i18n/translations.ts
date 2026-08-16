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
  heroHeadline: string;
  heroIntro: string;
  ctaWork: string;
  ctaContact: string;
  workSrHeading: string;
  aboutHeading: string;
  aboutParagraph: string;
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
    heroHeadline:
      "Sistemas full stack, construidos de principio a fin — desde la pantalla del kiosco hasta la base de datos.",
    heroIntro:
      "Soy David Payán, Desarrollador Full Stack en Sevilla, España. Construyo plataformas web, apps móviles multiplataforma y los sistemas conectados a ERP que los mantienen unidos — el tipo de software que tiene que funcionar de forma fiable en un restaurante real, en una obra real, todos los días.",
    ctaWork: "Ver el trabajo",
    ctaContact: "Contactar",
    workSrHeading: "Trabajos seleccionados",
    aboutHeading: "Sobre mí",
    aboutParagraph:
      "Ingeniero Full Stack en Kong Consulting, en Sevilla, trabajando con Angular, Node.js y Laravel en el lado web, Flutter en móvil, y SQL Server en datos. Me gusta llevar un sistema desde una idea en la pizarra hasta algo que funciona sin supervisión en producción — kioscos en restaurantes, apps en obras, dashboards que no se caen a las 2 de la madrugada.",
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
    heroHeadline: "Full stack systems, built end to end — from the kiosk screen to the database.",
    heroIntro:
      "I'm David Payán, a Full Stack Developer in Seville, Spain. I build web platforms, cross-platform mobile apps, and the ERP-connected systems that tie them together — the kind of software that has to run reliably in a real restaurant, on a real job site, every day.",
    ctaWork: "See the work",
    ctaContact: "Get in touch",
    workSrHeading: "Selected work",
    aboutHeading: "About",
    aboutParagraph:
      "Full Stack Engineer at Kong Consulting in Seville, working across Angular, Node.js, and Laravel on the web side, Flutter on mobile, and SQL Server on data. I like taking a system from a whiteboard idea to something that runs unattended in production — kiosks in restaurants, apps on job sites, dashboards that don't break at 2am.",
    footerCopyright: "© 2026 David Payán. Seville, Spain.",
    socialEmail: "Email",
    langToggleLabel: "Cambiar a español",
  },
};
