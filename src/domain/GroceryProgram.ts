import { randomUUID } from 'crypto'

export type GroceryProgram = Readonly<{
  id: string
  name: string
  lastAccessed: Date
  createdAt: Date
}>

export function createProgram(name: string): GroceryProgram {
  return {
    id: randomUUID(),
    name,
    lastAccessed: new Date(),
    createdAt: new Date()
  }
}

export function updateLastAccessed(program: GroceryProgram): GroceryProgram {
  return {
    ...program,
    lastAccessed: new Date()
  }
} 