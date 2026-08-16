# Portfolio de David Payán

Sitio estático de una sola página (`index.html`), sin build ni dependencias.
Diseño basado en el sistema "Deep Code Narrative" que enviaste.

## Desplegar en Vercel (con davidpayanalvarado@gmail.com)

**Opción A — Drag & drop (2 minutos, sin terminal):**
1. Entra en https://vercel.com/new y accede con `davidpayanalvarado@gmail.com`
   (Google o "email magic link", lo que uses normalmente).
2. Arrastra esta carpeta completa a la zona de "Deploy" (no hace falta Git).
3. Vercel detecta que es HTML estático y lo publica solo. Te da una URL tipo
   `tu-proyecto.vercel.app` al momento.

**Opción B — Vercel CLI (si prefieres terminal):**
```bash
npm install -g vercel
cd portfolio_site
vercel login          # inicia sesión con davidpayanalvarado@gmail.com
vercel --prod
```

**Opción C — Conectado a GitHub (recomendado a medio plazo):**
1. Sube esta carpeta a un repo de GitHub.
2. En vercel.com → "Add New Project" → importa el repo.
3. Cada `git push` despliega automáticamente. Así también versionas los cambios.

Un dominio propio (davidpayan.dev o similar) se añade después desde
Project → Settings → Domains, una vez tengas el sitio publicado.

## Cómo añadir tus vídeos

Ahora mismo cada proyecto tiene un bloque de vídeo "placeholder" (un patrón
de rejilla con un icono de play) marcado con `<!-- TODO -->` en `index.html`.
Para poner tu vídeo real:

1. Comprime el vídeo a `.mp4` (recomendado: menos de 8-10 MB, sin audio,
   loop corto de 10-20s — HandBrake o `ffmpeg` funcionan bien:
   `ffmpeg -i original.mov -an -vcodec libx264 -crf 28 salida.mp4`)
2. Colócalo en `assets/videos/` (ej. `kiosk-ecosystem.mp4`)
3. Sustituye el `<div class="card-media ...">` de ese proyecto por:
   ```html
   <video class="card-media absolute inset-0 z-0 w-full h-full object-cover opacity-70 transition-opacity duration-700"
          autoplay muted loop playsinline
          poster="/assets/videos/kiosk-ecosystem-poster.jpg">
     <source src="/assets/videos/kiosk-ecosystem.mp4" type="video/mp4">
   </video>
   ```
4. Vuelve a desplegar (`vercel --prod` o simplemente arrastra la carpeta de nuevo).

## Checklist ATS / filtros de portfolio aplicados

- Una sola página, HTML semántico, sin frameworks de build — carga rápida.
- `<title>` y `<meta name="description">` con tu nombre + rol + stack (esto es
  lo primero que indexa Google y lo que aparece en resultados de búsqueda).
- Open Graph (`og:title`, `og:description`, `og:image`) para que el link se
  vea bien al compartirlo en LinkedIn / Slack / WhatsApp.
- Datos estructurados JSON-LD (`schema.org/Person`) para que buscadores y
  algunos ATS que rastrean la web puedan identificarte como persona + rol.
- Accesibilidad: etiquetas `aria-label`, texto alternativo, contraste AA,
  navegación por teclado, respeta `prefers-reduced-motion`, y un enlace
  "skip to content" para lectores de pantalla.
- Responsive real (grid de 12 columnas en desktop, apilado en móvil).
- CTA claro arriba ("See the work" / "Get in touch") y botón de descarga
  directa del CV en la barra de navegación.
- Antes de publicar, pásalo por Google Lighthouse (F12 → Lighthouse en
  Chrome) o https://pagespeed.web.dev — con esta base deberías estar
  por encima de 90 en Performance y Accessibility sin tocar nada más.

## Pendiente de tu parte

- [ ] Vídeos reales de cada proyecto (o al menos capturas de pantalla /
      GIFs cortos como primer paso)
- [ ] Comprobar con Kong Consulting si puedes mostrar públicamente capturas
      o vídeo del kiosco (sobre todo si aparecen datos o marca de un cliente)
