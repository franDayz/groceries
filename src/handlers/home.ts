import { Context } from 'hono'
import { renderTemplate } from '../utils/template'
import { groceryStore } from '../store/groceries'

export const homeHandler = async (c: Context) => {
  const html = renderTemplate('index', {
    title: 'Grocery List Manager',
    welcome: 'Welcome to your grocery list!',
    items: groceryStore.getItems()
  })
  return c.html(html)
} 