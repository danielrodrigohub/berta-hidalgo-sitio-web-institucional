# Publicación de noticias con Pages CMS

Sitio: https://escuelabertahidalgo.cl

Acceso del equipo: https://escuelabertahidalgo.cl/admin/

Editor gratuito: https://app.pagescms.org

Repositorio: https://github.com/danielrodrigohub/berta-hidalgo-sitio-web-institucional

## Activación inicial

Ingresar con GitHub y autorizar la aplicación Pages CMS solamente para `berta-hidalgo-sitio-web-institucional`. Seleccionar ese repositorio y la rama `main`. Pages CMS leerá `.pages.yml` y mostrará la colección «Noticias de la escuela».

Pages CMS es código abierto, licencia MIT; su versión alojada se ofrece gratuitamente. Esta configuración sustituye GitCMS, que exigía licencia de publicación. No se contrató ni pagó una licencia.

## Crear y publicar

1. Abrir «Noticias de la escuela» y crear una entrada.
2. Completar título, resumen, fecha original y categoría.
3. Seleccionar o subir una fotografía real y escribir su descripción accesible.
4. Redactar el contenido en el editor visual.
5. Dejar «Guardar como borrador» activado mientras se prepara la noticia.
6. Desactivarlo y guardar cuando esté lista para publicar. Usar la rama main.
7. Esperar que finalice la publicación automática y revisar el sitio. Puede consultarse el estado en la pestaña Actions de GitHub.

Cambiar el título de una noticia no debe implicar cambiar su nombre de archivo: así se conserva su URL. El nombre solo se propone al crear la entrada. Los archivos borrador se guardan en GitHub pero no aparecen en el sitio. Una fecha futura no programa una publicación: usar el borrador hasta el día elegido.

Las portadas sociales se generan automáticamente a partir de la fotografía y el título. Al cambiar estos datos cambia la dirección de la imagen para compartir. No hay que diseñar y subir una portada adicional.

## Infraestructura

Astro genera el sitio y Cloudflare Workers lo sirve. Los dominios raíz y www se asociaron al Worker berta-hidalgo-sitio-web-institucional. El antiguo registro web A apuntaba a 209.126.9.56 (proxied, TTL automático); se sustituyó por el dominio gestionado del Worker. Se conservaron MX y TXT de correo y verificación.

GitHub Actions ya dispone de las credenciales cifradas para desplegar este Worker. SITE_URL apunta al dominio institucional. Las credenciales no están en el repositorio.
