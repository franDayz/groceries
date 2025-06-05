export type Item = Readonly<{
  id: string
  programId: string
  name: string
  createdAt: Date
}>

export const createItem = (
  programId: string,
  name: string,
  id = crypto.randomUUID()
): Item => ({
  id,
  programId,
  name,
  createdAt: new Date()
})