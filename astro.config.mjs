import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site: process.env.SITE_URL || 'https://escuela-berta-hidalgo-tahuinco.danielragecl.chatgpt.site',integrations:[sitemap()],output:'static',trailingSlash:'always'});
