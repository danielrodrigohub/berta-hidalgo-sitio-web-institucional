import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site: process.env.SITE_URL || 'https://escuelabertahidalgo.cl',integrations:[sitemap({filter:(page)=>new URL(page).pathname!=='/admin/'})],output:'static',trailingSlash:'always',redirects:{'/noticias/proyecto-educativo/':'/proyecto-educativo/'}});
