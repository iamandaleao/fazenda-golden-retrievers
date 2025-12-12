import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection(
      asSeoCollection({
        source: 'blog/**/*.md',
        type: 'page',
        schema: z.object({
          title: z.string(),
          description: z.string(),
          region: z.string().optional(),
          cover: z.string(),
          thumbnail: z.string(),
          date: z.date(),
          published: z.boolean(),
          tags: z.array(z.string()).optional(),
        }),
      }),
    ),
  },
})