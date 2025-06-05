import { Context } from 'hono'
import { itemRepository } from '../repositories/ItemRepository'
import { createItem } from '../../domain/Item'

export const addGroceryItem = async (context: Context) => {
  const { name, programId } = await context.req.parseBody()
  
  if (typeof name !== 'string' || !name.trim()) {
    return context.json({ error: 'Item name is required' }, 400)
  }

  if (typeof programId !== 'string') {
    return context.json({ error: 'Program ID is required' }, 400)
  }

  const item = createItem(programId, name)
  itemRepository.save(item)
  
  return context.redirect(`/programs/${programId}`)
} 