import { Context } from 'hono'
import { itemRepository } from '../repositories/ItemRepository'
import { createItem } from '../models/Item'

export const addGroceryItem = async (context: Context) => {
  const { name } = await context.req.parseBody()
  
  if (typeof name !== 'string' || !name.trim()) {
    return context.json({ error: 'Item name is required' }, 400)
  }

  const item = createItem(name)
  itemRepository.save(item)
  
  return context.redirect('/')
} 