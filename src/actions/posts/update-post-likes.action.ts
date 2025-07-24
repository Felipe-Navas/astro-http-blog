import { getPostById } from '@actions/shared/getPostById'
import { actions, defineAction } from 'astro:actions'
import { db, eq, Posts } from 'astro:db'
import { z } from 'astro:schema'

export const updatePostLikes = defineAction({
  input: z.object({
    postId: z.string(),
    increment: z.number(),
  }),
  handler: async ({ postId, increment }) => {
    const { exists, likes } = await getPostById(postId)

    if (!exists) {
      const newPost = {
        id: postId,
        title: 'Post not found',
        likes: 0,
      }

      await db.insert(Posts).values(newPost)
    }

    await db
      .update(Posts)
      .set({ likes: likes + increment })
      .where(eq(Posts.id, postId))

    return true
  },
})
