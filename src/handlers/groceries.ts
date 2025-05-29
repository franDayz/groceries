import { Context } from 'hono'
import { groceryStore } from '../store/groceries'

export const addGroceryItem = async (c: Context) => {
  const { name } = await c.req.parseBody()
  
  if (typeof name !== 'string' || !name.trim()) {
    return c.json({ error: 'Item name is required' }, 400)
  }

  const item = groceryStore.addItem(name.trim())
  return c.redirect('/')
} 