import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    skills: z.array(z.string()).default([]),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const hobbiesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/hobbies" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    date: z.date(),
    image: z.string().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'hobbies': hobbiesCollection,
};
