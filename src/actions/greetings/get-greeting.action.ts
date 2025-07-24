import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const getGreeting = defineAction({
  input: z.object({
    name: z.string(),
    age: z.number(),
    isActive: z.boolean(),
  }),
  handler: async ({ name, age, isActive }) => {
    console.log('name', name)
    console.log('age', age)
    console.log('isActive', isActive)

    return `Hello, ${name}!`
  },
})
