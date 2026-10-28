import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const noticias=defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/noticias'}),schema:z.object({title:z.string(),description:z.string(),date:z.coerce.date(),image:z.string().optional(),imageAlt:z.string().optional(),category:z.string().default('Comunidad'),draft:z.boolean().default(false)})});
export const collections={noticias};
