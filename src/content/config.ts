import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const essays = defineCollection({
	schema:z.object({
		title:z.string(),
		description:z.string(),
		pubDate:z.coerce.date(),
		heroImage:z.string().optional(),
		tag:z.string()
	})
})

export const collections = { blog, essays };
