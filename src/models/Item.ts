export type Item = Readonly<{
  id: string
  name: string
  createdAt: Date
}>

export const createItem = (name: string): Item => ({
  id: crypto.randomUUID(),
  name: name.trim(),
  createdAt: new Date()
})