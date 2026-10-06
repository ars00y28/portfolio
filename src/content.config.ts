import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  image: z.string().optional(),
  video: z.string().optional(),
  featured: z.boolean().default(false),
  // Engineering specific fields
  github: z.string().optional(),
  demo: z.string().optional()
});

export const collections = {
  engineering: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/engineering" }),
    schema: projectSchema
  }),
  cooking: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/cooking" }),
    schema: projectSchema
  }),
  art: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/art" }),
    schema: projectSchema
  }),
  writings: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/writings" }),
    schema: projectSchema
  })
};
