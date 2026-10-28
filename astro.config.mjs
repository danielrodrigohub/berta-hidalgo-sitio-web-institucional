import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site: process.env.SITE_URL || 'https://berta-hidalgo-sitio-web-institucional.admin1537.workers.dev',integrations:[sitemap()],output:'static',trailingSlash:'always'});
