# Portfolio de David Payán

SPA en React 18 + TypeScript, construida con Vite y Tailwind CSS. Contenido en
español por defecto, con un toggle ES/EN en la barra de navegación.

## Stack

- **Vite** — dev server y bundler.
- **React 18 + TypeScript** — componentes en `src/components/`.
- **Tailwind CSS** — mismos tokens de diseño ("Deep Code Narrative") que la
  versión estática anterior, definidos en `tailwind.config.js`.
- **i18n propio** (`src/i18n/`) — sin librería externa: un `Context` con el
  diccionario ES/EN (`translations.ts`) y un hook `useI18n()`. La preferencia
  de idioma se guarda en `localStorage`.

## Desarrollo local

Requiere Node.js 18+.

```bash
npm install
npm run dev       # servidor de desarrollo con hot reload
npm run build     # type-check (tsc -b) + build de producción a dist/
npm run preview   # sirve el build de dist/ localmente
npm run lint      # ESLint
```

## Estructura

```
src/
  App.tsx              # composición de la página
  i18n/                # tipos, diccionario ES/EN, Context/hook useI18n()
  data/                 # contenido de proyectos y skills (bilingüe, tipado)
  components/           # Nav, Hero, WorkSection, ProjectCard, AboutSection,
                         # Footer, SeoHead, icons/
public/                 # servido tal cual: favicon, CV, vídeos
```

Para añadir o editar un proyecto del apartado "Trabajo", edita el array
`projects` en `src/data/projects.ts` (título, descripción y tags en ambos
idiomas). Los skills del apartado "Sobre mí" están en `src/data/skills.ts`.

## Desplegar en Vercel

El proyecto ya está conectado a GitHub (`DavidPayan8/portfolio`) — cada
`git push` a `main` dispara un deploy automático. `vercel.json` fija
explícitamente `framework: vite`, `buildCommand: npm run build` y
`outputDirectory: dist`, así que no requiere configuración manual en el
dashboard.

Si alguna vez quieres desplegar sin pasar por Git:

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Cómo añadir tus vídeos

Cada proyecto tiene un bloque de vídeo "placeholder" (un patrón de rejilla
con un icono de play) en `src/components/ProjectCard.tsx`, marcado con
`<!-- TODO -->`. Para poner tu vídeo real:

1. Comprime el vídeo a `.mp4` (recomendado: menos de 8-10 MB, sin audio,
   loop corto de 10-20s — HandBrake o `ffmpeg` funcionan bien:
   `ffmpeg -i original.mov -an -vcodec libx264 -crf 28 salida.mp4`)
2. Colócalo en `public/videos/` (ej. `kiosk-ecosystem.mp4`).
3. En `ProjectCard.tsx`, sustituye el `<div className="card-media ...">` de
   ese proyecto por:
   ```tsx
   <video
     className="card-media absolute inset-0 z-0 w-full h-full object-cover opacity-70 transition-opacity duration-700"
     autoPlay muted loop playsInline
     poster="/videos/kiosk-ecosystem-poster.jpg"
   >
     <source src="/videos/kiosk-ecosystem.mp4" type="video/mp4" />
   </video>
   ```

## Checklist ATS / filtros de portfolio aplicados

- `<title>` y meta description con nombre + rol + stack, actualizados por
  idioma desde `SeoHead.tsx` (esto es lo primero que indexa Google y lo que
  aparece en resultados de búsqueda).
- Open Graph (`og:title`, `og:description`, `og:image`) para que el link se
  vea bien al compartirlo en LinkedIn / Slack / WhatsApp.
- Datos estructurados JSON-LD (`schema.org/Person`) en `index.html`, para que
  buscadores y algunos ATS que rastrean la web puedan identificarte como
  persona + rol.
- Accesibilidad: `aria-label`, texto alternativo, contraste AA, navegación
  por teclado, respeta `prefers-reduced-motion`, y un enlace "skip to
  content" para lectores de pantalla.
- Responsive real (grid de 12 columnas en desktop, apilado en móvil).
- CTA claro arriba ("Ver el trabajo" / "Contactar") y botón de descarga
  directa del CV en la barra de navegación.
- Antes de publicar, pásalo por Google Lighthouse (F12 → Lighthouse en
  Chrome) o https://pagespeed.web.dev.

## Pendiente de tu parte

- [ ] Vídeos reales de cada proyecto (o al menos capturas de pantalla /
      GIFs cortos como primer paso)
- [ ] Comprobar con Kong Consulting si puedes mostrar públicamente capturas
      o vídeo del kiosco (sobre todo si aparecen datos o marca de un cliente)
