import { Context } from 'hono'
import { itemRepository } from '../repositories/ItemRepository'
import { createItem } from '../../domain/Item'

export const addGroceryItem = async (context: Context) => {
  const { name, category, programId } = await context.req.parseBody()
  
  if (typeof name !== 'string' || !name.trim()) {
    return context.json({ error: 'Item name is required' }, 400)
  }

  if (typeof category !== 'string' || !category.trim()) {
    return context.json({ error: 'Item category is required' }, 400)
  }

  if (typeof programId !== 'string') {
    return context.json({ error: 'Program ID is required' }, 400)
  }

  const item = createItem(programId, name, category)
  itemRepository.save(item)
  
  return context.redirect(`/programs/${programId}`)
}

export const getCategories = async (context: Context) => {
  const categories = itemRepository.getDistinctCategories()
  console.log('Categories in handler function:', categories)
  return context.json({ categories })
} 