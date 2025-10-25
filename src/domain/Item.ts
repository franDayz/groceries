export type Item = Readonly<{
  id: string
  programId: string
  name: string
  category: string
  inStock: boolean
  createdAt: Date
}>

export const createItem = (
  programId: string,
  name: string,
  category: string,
  id = crypto.randomUUID()
): Item => ({
  id,
  programId,
  name,
  category,
  inStock: false,
  createdAt: new Date()
})