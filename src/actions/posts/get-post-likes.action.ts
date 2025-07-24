import { getPostById } from '@actions/shared/getPostById'
import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const getPostLikes = defineAction({
  input: z.string(),
  handler: async (postId) => {
    return await getPostById(postId)
  },
})
