import { Context } from 'hono'
import { renderTemplate } from '../utils/template'
import { itemRepository } from '../repositories/ItemRepository'

export const homeHandler = async (context: Context) => {
  const html = renderTemplate('index', {
    title: 'Grocery List Manager',
    welcome: 'Welcome to your grocery list!',
    items: itemRepository.findAll()
  })
  return context.html(html)
} 