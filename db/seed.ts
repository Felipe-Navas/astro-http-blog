import { Clients, db } from 'astro:db'

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Clients).values([
    { id: 1, name: 'Kasim', age: 21, isActive: true },
    { id: 2, name: 'Felipe', age: 35, isActive: false },
    { id: 3, name: 'Raul', age: 34, isActive: true },
    { id: 4, name: 'Pao', age: 22, isActive: false },
    { id: 5, name: 'Kasim', age: 53, isActive: true },
  ])
}
