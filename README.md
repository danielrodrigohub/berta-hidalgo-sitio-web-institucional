# Berta Hidalgo Sitio Web Institucional

Sitio Astro de la Escuela Berta Hidalgo Barahona, Tahuinco, Salamanca. Destino de producción: **Cloudflare Workers Static Assets**, no Cloudflare Pages. No requiere servidor dinámico ni adaptador: Astro genera HTML y Workers sirve dist.

## Desarrollo

Node 22 o superior. `npm ci`, `npm run dev`. `npm run build` genera dist. `npm run deploy` compila y publica con Wrangler tras autenticar Cloudflare. El archivo wrangler.jsonc configura Workers.

## Publicación en Workers

1. Crear o conectar este repositorio en GitHub con rama main.
2. Configurar secrets CLOUDFLARE_API_TOKEN (Workers Scripts:Edit y acceso a la cuenta) y CLOUDFLARE_ACCOUNT_ID en GitHub Actions.
3. Configurar la variable de repositorio SITE_URL con el origen HTTPS final (dominio institucional o workers.dev).
4. Ejecutar Publicar en Cloudflare Workers. Un push a main ejecuta la misma publicación.
5. Agregar el dominio institucional al Worker en Cloudflare. Reconstruir al cambiar SITE_URL, pues controla canonical, sitemap y datos estructurados.

Publicado en https://escuelabertahidalgo.cl y https://www.escuelabertahidalgo.cl, conectados al Worker. Canonical y sitemap usan https://escuelabertahidalgo.cl. La URL workers.dev se conserva como acceso previo.

## Pages CMS (código abierto)

Pages CMS, licencia MIT, sustituye la configuración de GitCMS. El servicio alojado gratuito es https://app.pagescms.org . La configuración está en .pages.yml: colección de noticias, editor visual, fechas, categorías, borradores y medios en public/images. Acceso de la escuela: https://escuelabertahidalgo.cl/admin/ .

El propietario debe autorizar la GitHub App de Pages CMS para este repositorio. Las ediciones se guardan en main y activan la publicación automática en Workers. No se necesita contratar una licencia de CMS. La autenticación la gestiona Pages CMS; la página /admin/ es un acceso al editor, no un sistema de cuentas independiente.

## SEO y Education Fundamentals

HTML estático, metadatos, canonical, Open Graph, School JSON-LD, sitemap, robots, rutas legibles, diseño adaptable y navegación por teclado. No se garantiza posición en Google. Tras publicar: verificar dominio en Search Console, enviar sitemap-index.xml, comprobar indexación y rendimiento de la URL pública.

Para Education Fundamentals se requiere dominio verificado y reconocimiento oficial; solicitar con un representante autorizado y documentación de acreditación. El sitio apoya la identificación institucional, no constituye aprobación. Ver https://knowledge.workspace.google.com/admin/getting-started/editions/qualifications-for-google-workspace-for-education .

## Fuentes y pendientes institucionales

Contenido institucional y contacto: PEI 2025 proporcionado. El documento muestra dígitos verificadores contradictorios del RBD; se usa 1017 sin dígito. Datos de director, dependencia y contacto requieren confirmación de vigencia para 2026. Reglamentos entregados por el solicitante, copiados íntegros a public/documentos.

Fotografía real descargada de https://www.davidnoticias.cl/wp-content/uploads/2025/05/Entrega-computadores-Tahuinco-4.jpg ; crédito y fuente en la noticia. La publicación en prensa no acredita por sí sola una licencia: confirmar permiso de reutilización y autorización institucional de imágenes antes de difusión pública. No se ha alterado ni generado ninguna fotografía con IA. Escudo aportado por el solicitante.

No se encontraron redes sociales oficiales verificables: no se enlazan perfiles supuestos. Las noticias se basan en fuentes identificadas; la nota sobre el PEI usa marzo de 2025 como período documental, no como fecha de un evento.

No hay formularios, cookies de analítica ni captación de datos. La política de privacidad deberá revisarse si se agregan estos servicios.
