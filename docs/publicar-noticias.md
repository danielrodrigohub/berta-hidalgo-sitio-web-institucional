# Publicación de noticias

Sitio institucional: https://escuelabertahidalgo.cl

Repositorio: https://github.com/danielrodrigohub/berta-hidalgo-sitio-web-institucional

Editor: https://app.gitcms.dev

## Conexión inicial

Autorizar el inicio de sesión de GitCMS con GitHub e instalar su aplicación solo para este repositorio. Elegir el sitio escuelabertahidalgo.cl y la colección noticias. Desactivar la colección docs, que contiene documentación de mantenimiento y no publicaciones escolares. Medio recomendado: public/images, con referencia /images. La configuración inicial se generó con el CLI oficial.

El guardado y publicación con GitCMS requiere una licencia de sitio según sus condiciones actuales. No se ha contratado ninguna licencia ni realizado un pago.

## Nueva noticia

1. Abrir la colección noticias y crear una entrada.
2. Completar título, resumen, fecha original, categoría, imagen y descripción de la imagen.
3. Escribir el contenido y comprobar fuentes y fotografías.
4. Mantener draft activado durante la preparación. Desactivarlo cuando el contenido esté listo.
5. Publicar con el flujo de revisión de GitCMS. El contenido publicado debe llegar a main para desplegarse.
6. Revisar Publicar en Cloudflare Workers en la pestaña Actions de GitHub; cuando termine correctamente, comprobar el sitio.

Las imágenes deben subirse al repositorio con una ruta pública como /images/noticia.webp. La portada para redes sociales se genera automáticamente durante la compilación. No se necesitan fechas futuras ficticias, datos de matrícula sin confirmar ni documentos rotulados como vigentes sin confirmación.

## Infraestructura

Cloudflare Workers sirve la salida de Astro. Los dominios raíz y www se asociaron al Worker berta-hidalgo-sitio-web-institucional. El registro web A anterior apuntaba a 209.126.9.56 (proxied, TTL automático); fue sustituido por el dominio gestionado del Worker. Se conservaron MX y registros TXT de correo/verificación.

GitHub Actions dispone de credenciales cifradas de despliegue. El token de Cloudflare se creó restringido a este Worker y sus rutas de dominio; no se almacena en el repositorio. SITE_URL apunta al dominio institucional.
