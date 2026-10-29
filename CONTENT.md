# Contenido institucional

Noticias en `src/content/noticias/*.md`. Campos obligatorios: title, description, date (AAAA-MM-DD). Opcionales: category, image, imageAlt y draft. `draft: true` excluye la publicación del sitio. Las fechas futuras no programan publicación: usar borrador hasta la fecha deseada.

Usar información confirmada por la escuela. No inventar eventos, cifras, cargos, testimonios o redes sociales. Imágenes reales con texto alternativo; subir a `public/images/`, referenciar `/images/nombre.webp`.

En Pages CMS la colección «Noticias de la escuela» usa `.pages.yml`. Las imágenes se guardan en public/images con URL /images. Los cambios en main activan GitHub Actions y Cloudflare Workers.

Las portadas para compartir noticias se generan automáticamente al construir el sitio, a partir de title, category, date y la imagen local de cada entrada. No hay que subir una segunda imagen. La portada social conserva fotografía, título y degradado azul; su dirección cambia al editar esos datos o el archivo fotográfico. Las etiquetas Open Graph y Twitter apuntan a ese JPEG de 1200 × 630. Si una red conserva la vista previa anterior, solicitar una nueva lectura en su herramienta de depuración.
