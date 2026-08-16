// Lightweight ES/EN toggle: no build step, default content is Spanish, English lives in this dictionary.
(function () {
  var translations = {
    es: {
      "meta-title": "David Payán — Desarrollador Full Stack",
      "meta-description": "David Payán es un Desarrollador Full Stack afincado en Sevilla, España, que construye ecosistemas de kioscos de autoservicio, apps móviles multiplataforma y sistemas integrados con ERP.",
      "og-title": "David Payán — Desarrollador Full Stack",
      "og-description": "Ecosistemas de kioscos de autoservicio, apps móviles multiplataforma y sistemas integrados con ERP, construidos de principio a fin.",
      "skip-link": "Saltar al trabajo",
      "nav-work": "Trabajo",
      "nav-about": "Sobre mí",
      "nav-contact": "Contacto",
      "nav-resume": "CV",
      "badge-available": "Disponible para nuevas oportunidades",
      "h1": "Sistemas full stack, construidos de principio a fin — desde la pantalla del kiosco hasta la base de datos.",
      "intro-p": "Soy David Payán, Desarrollador Full Stack en Sevilla, España. Construyo plataformas web, apps móviles multiplataforma y los sistemas conectados a ERP que los mantienen unidos — el tipo de software que tiene que funcionar de forma fiable en un restaurante real, en una obra real, todos los días.",
      "cta-work": "Ver el trabajo",
      "cta-contact": "Contactar",
      "work-sr-heading": "Trabajos seleccionados",
      "p1-badge": "Sistema en producción",
      "p1-title": "Ecosistema de Kioscos de Autoservicio",
      "p1-desc": "Una plataforma de pedidos completa para restaurantes de comida rápida: el kiosco de cara al cliente, un panel remoto de gestión de dispositivos, una app de TPV y pantalla de cocina en WPF, un sistema de turnos y llamada, y un gestor de cartelería digital — de forma independiente o totalmente integrada con el ERP del cliente.",
      "p2-title": "App de Fichaje Móvil (Flutter)",
      "p2-desc": "App de fichaje por geolocalización reconstruida como app nativa multiplataforma en Flutter — mi propio port independiente del sistema original, publicado para iOS y Android.",
      "p3-title": "App de Gestión de Órdenes de Trabajo",
      "p3-desc": "App móvil para gestionar órdenes de trabajo de construcción, sincronizada con el ERP de la empresa para actualización de tareas, sincronización de datos y reporting.",
      "p4-badge": "En curso",
      "p4-title": "Integración de Pagos Redsys",
      "p4-desc": "Añadiendo pago seguro con tarjeta al ecosistema de kioscos a través de la pasarela de pago Redsys.",
      "about-heading": "Sobre mí",
      "about-p": "Ingeniero Full Stack en Kong Consulting, en Sevilla, trabajando con Angular, Node.js y Laravel en el lado web, Flutter en móvil, y SQL Server en datos. Me gusta llevar un sistema desde una idea en la pizarra hasta algo que funciona sin supervisión en producción — kioscos en restaurantes, apps en obras, dashboards que no se caen a las 2 de la madrugada.",
      "tag-erp": "Integración ERP",
      "tag-mobile": "Móvil",
      "tag-geo": "Geolocalización",
      "tag-payments": "Pagos",
      "vb6-note": "VB6 fue el precursor de .NET",
      "footer-copyright": "© 2026 David Payán. Sevilla, España.",
      "social-email": "Correo electrónico",
      "lang-toggle-label": "Switch to English"
    },
    en: {
      "meta-title": "David Payán — Full Stack Developer",
      "meta-description": "David Payán is a Full Stack Developer based in Seville, Spain, building self-service kiosk ecosystems, cross-platform mobile apps, and ERP-integrated systems.",
      "og-title": "David Payán — Full Stack Developer",
      "og-description": "Self-service kiosk ecosystems, cross-platform mobile apps, and ERP-integrated systems, built end to end.",
      "skip-link": "Skip to work",
      "nav-work": "Work",
      "nav-about": "About",
      "nav-contact": "Contact",
      "nav-resume": "Resume",
      "badge-available": "Available for new opportunities",
      "h1": "Full stack systems, built end to end — from the kiosk screen to the database.",
      "intro-p": "I'm David Payán, a Full Stack Developer in Seville, Spain. I build web platforms, cross-platform mobile apps, and the ERP-connected systems that tie them together — the kind of software that has to run reliably in a real restaurant, on a real job site, every day.",
      "cta-work": "See the work",
      "cta-contact": "Get in touch",
      "work-sr-heading": "Selected work",
      "p1-badge": "Live system",
      "p1-title": "Self-Service Kiosk Ecosystem",
      "p1-desc": "A full ordering platform for quick-service restaurants: the customer-facing kiosk, a remote device management panel, a WPF POS and kitchen display app, a queue & calling system, and a digital signage manager — standalone or fully wired into the client's ERP.",
      "p2-title": "Mobile Time Tracking (Flutter)",
      "p2-desc": "Geolocation-based clock-in app rebuilt as a native cross-platform Flutter app — my own independent port of the original system, shipped for iOS and Android.",
      "p3-title": "Work Order & Construction App",
      "p3-desc": "Mobile app for managing construction work orders, synced with the company ERP for task updates, data sync, and reporting.",
      "p4-badge": "In progress",
      "p4-title": "Redsys Payment Integration",
      "p4-desc": "Adding secure card-payment checkout to the kiosk ecosystem via the Redsys payment gateway.",
      "about-heading": "About",
      "about-p": "Full Stack Engineer at Kong Consulting in Seville, working across Angular, Node.js, and Laravel on the web side, Flutter on mobile, and SQL Server on data. I like taking a system from a whiteboard idea to something that runs unattended in production — kiosks in restaurants, apps on job sites, dashboards that don't break at 2am.",
      "tag-erp": "ERP integration",
      "tag-mobile": "Mobile",
      "tag-geo": "Geolocation",
      "tag-payments": "Payments",
      "vb6-note": "VB6 was the predecessor of .NET",
      "footer-copyright": "© 2026 David Payán. Seville, Spain.",
      "social-email": "Email",
      "lang-toggle-label": "Cambiar a español"
    }
  };

  function applyLanguage(lang) {
    if (lang !== "es" && lang !== "en") lang = "es";
    document.documentElement.lang = lang;
    var dict = translations[lang];

    var textNodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < textNodes.length; i++) {
      var el = textNodes[i];
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    }

    var attrNodes = document.querySelectorAll("[data-i18n-attr]");
    for (var j = 0; j < attrNodes.length; j++) {
      var node = attrNodes[j];
      var pairs = node.getAttribute("data-i18n-attr").split(";");
      for (var k = 0; k < pairs.length; k++) {
        var parts = pairs[k].split(":");
        var attr = parts[0], key2 = parts[1];
        if (dict[key2] !== undefined) node.setAttribute(attr, dict[key2]);
      }
    }

    var toggleBtn = document.getElementById("lang-toggle");
    if (toggleBtn) {
      var other = lang === "es" ? "en" : "es";
      toggleBtn.textContent = other.toUpperCase();
      toggleBtn.setAttribute("aria-label", dict["lang-toggle-label"]);
      toggleBtn.setAttribute("data-current-lang", lang);
    }

    try { localStorage.setItem("site-lang", lang); } catch (e) {}
  }

  var initialLang = "es";
  try {
    var saved = localStorage.getItem("site-lang");
    if (saved === "en" || saved === "es") initialLang = saved;
  } catch (e) {}

  if (initialLang !== "es") applyLanguage(initialLang);
  else {
    var toggleBtnInit = document.getElementById("lang-toggle");
    if (toggleBtnInit) toggleBtnInit.setAttribute("aria-label", translations.es["lang-toggle-label"]);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var toggleBtn = document.getElementById("lang-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        var current = toggleBtn.getAttribute("data-current-lang") || "es";
        applyLanguage(current === "es" ? "en" : "es");
      });
    }
  });
})();
