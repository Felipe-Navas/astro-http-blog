import { getCollection } from 'astro:content'
import { Clients, db, Posts } from 'astro:db'

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Clients).values([
    { id: 1, name: 'Kasim', age: 21, isActive: true },
    { id: 2, name: 'Felipe', age: 35, isActive: false },
    { id: 3, name: 'Raul', age: 34, isActive: true },
    { id: 4, name: 'Pao', age: 22, isActive: false },
    { id: 5, name: 'Kasim', age: 53, isActive: true },
  ])

  const posts = await getCollection('blog')

  await db.insert(Posts).values(
    posts.map((post) => ({
      id: post.id,
      title: post.data.title,
      likes: Math.floor(Math.random() * 100),
    }))
  )
}
