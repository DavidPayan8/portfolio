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
  heroRole: string;
  heroIntro: string;
  heroIntroSecondary: string;
  ctaWork: string;
  ctaContact: string;
  workHeading: string;
  carouselPrevLabel: string;
  carouselNextLabel: string;
  maximizeLabel: string;
  modalCloseHint: string;
  seeMore: string;
  seeLess: string;
  aboutHeading: string;
  aboutParagraph: string;
  aboutParagraphSecondary: string;
  educationHeading: string;
  techHeading: string;
  navTech: string;
  contactHeading: string;
  contactParagraph: string;
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
    heroRole: "Desarrollador Full Stack",
    heroIntro:
      "Parto de los requisitos, pienso la solución, construyo el sistema y me encargo de que termine funcionando en producción.",
    heroIntroSecondary:
      "He trabajado con plataformas web, aplicaciones móviles, kioscos de autoservicio e integraciones con ERP. En este portfolio puedes ver algunos de esos proyectos y cómo están construidos.",
    ctaWork: "Ver el trabajo",
    ctaContact: "Contactar",
    workHeading: "Trabajos seleccionados",
    carouselPrevLabel: "Proyecto anterior",
    carouselNextLabel: "Siguiente proyecto",
    maximizeLabel: "Ver a pantalla grande",
    modalCloseHint: "Pulsa Escape o haz clic fuera del vídeo para cerrar",
    seeMore: "Ver más",
    seeLess: "Ver menos",
    aboutHeading: "Sobre mí",
    aboutParagraph:
      "Más de dos años desarrollando sistemas desde los requisitos hasta producción. Me gusta especialmente entender bien un problema, pensar cómo encajan todas sus piezas y encontrar una solución que no solo funcione, sino que facilite realmente el trabajo de quien la utiliza. Si algo no lo sé, intento entenderlo: planteo una hipótesis, la investigo y aprendo por el camino.",
    aboutParagraphSecondary:
      "Fuera del código soy entrenador de un equipo juvenil, donde disfruto enseñando y buscando la forma de que otra persona consiga aplicar lo que le explico. También tengo cierta tendencia a investigar cómo funcionan las cosas cuando algo me parece especialmente complejo o eficiente. En 2023 viví un verano en Londres sin apenas saber inglés, una experiencia que me enseñó, sobre todo, a adaptarme, equivocarme y seguir aprendiendo.",
    educationHeading: "Formación",
    techHeading: "Tecnologías",
    navTech: "Tecnologías",
    contactHeading: "Contacto",
    contactParagraph:
      "¿Tienes un proyecto entre manos o quieres hablar sobre una oportunidad? Escríbeme directamente o encuéntrame en estas redes.",
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
    heroRole: "Full Stack Developer",
    heroIntro:
      "I start from the requirements, think through the solution, build the system, and make sure it ends up running in production.",
    heroIntroSecondary:
      "I've worked with web platforms, mobile apps, self-service kiosks, and ERP integrations. You can see some of those projects in this portfolio, and how they're built.",
    ctaWork: "See the work",
    ctaContact: "Get in touch",
    workHeading: "Selected work",
    carouselPrevLabel: "Previous project",
    carouselNextLabel: "Next project",
    maximizeLabel: "View fullscreen",
    modalCloseHint: "Press Escape or click outside the video to close",
    seeMore: "See more",
    seeLess: "See less",
    aboutHeading: "About",
    aboutParagraph:
      "More than two years building systems from requirements through to production. I especially like getting a problem right — understanding how all its pieces fit together and finding a solution that doesn't just work, but genuinely makes life easier for whoever uses it. When I don't know something, I try to understand it: I form a hypothesis, investigate it, and learn along the way.",
    aboutParagraphSecondary:
      "Outside of code I coach a youth team, where I enjoy teaching and figuring out how to help someone actually apply what I explain. I also have a bit of a habit of digging into how things work when something strikes me as especially complex or efficient. In 2023 I spent a summer in London barely speaking English — an experience that taught me, above all, to adapt, make mistakes, and keep learning.",
    educationHeading: "Education",
    techHeading: "Technologies",
    navTech: "Tech",
    contactHeading: "Contact",
    contactParagraph:
      "Got a project in mind or want to talk about an opportunity? Reach out directly or find me on these.",
    socialEmail: "Email",
    langToggleLabel: "Cambiar a español",
  },
};
