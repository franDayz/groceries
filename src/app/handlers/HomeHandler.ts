import { Context } from 'hono'

export const homeHandler = async (context: Context) => {
  return context.redirect('/programs/new')
} 