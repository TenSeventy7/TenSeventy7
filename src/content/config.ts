import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        position: z.string(),
        description: z.string(),
        link: z.string(),
        image: image(),
        tags: z.array(z.string()).optional(),
        featured: z.boolean().optional().default(false),
        date: z.date(),
        end: z.date().optional(),
    })
});

export const collections = {
  'projects': projects,
};
