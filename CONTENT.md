# Contenido institucional

Noticias en `src/content/noticias/*.md`. Campos obligatorios: title, description, date (AAAA-MM-DD). Opcionales: category, image, imageAlt y draft. `draft: true` excluye la publicación del sitio. Las fechas futuras no programan publicación: usar borrador hasta la fecha deseada.

Usar información confirmada por la escuela. No inventar eventos, cifras, cargos, testimonios o redes sociales. Imágenes reales con texto alternativo; subir a `public/images/`, referenciar `/images/nombre.webp`.

En GitCMS seleccionar Astro, colección Noticias, directorio src/content/noticias, extensión md, medios public/images con URL /images. Los cambios aprobados en main disparan GitHub Actions y Cloudflare Workers. GitCMS genera y gestiona .gitcms al conectar el repositorio; no editar esa configuración manualmente.
