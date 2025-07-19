import type { APIRoute, GetStaticPaths } from 'astro'
import { getCollection, getEntry } from 'astro:content'

export const prerender = false

export const GET: APIRoute = async ({ params, request }) => {
  const { slug } = params

  const post = await getEntry('blog', slug as any)

  if (!post) {
    return new Response(JSON.stringify({ message: `Post ${slug} not found` }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  return new Response(JSON.stringify(post), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const posts = await getCollection('blog')

//   return posts.map((post) => ({
//     params: { slug: post.id },
//     props: { post },
//   }))
// }
