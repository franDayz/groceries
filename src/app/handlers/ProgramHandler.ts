import { Context } from 'hono'
import { groceryProgramRepository } from '../repositories/GroceryProgramRepository'
import { itemRepository } from '../repositories/ItemRepository'
import { updateLastAccessed, createProgram } from '../../domain/GroceryProgram'
import { renderTemplate } from '../utils/template'

export const viewProgram = async (context: Context) => {
  const id = context.req.param('id')
  const program = groceryProgramRepository.findById(id)
  
  if (!program) {
    return context.notFound()
  }

  groceryProgramRepository.save(updateLastAccessed(program))
  const items = itemRepository.findByProgramId(id)

  const html = renderTemplate('program', { program, items })
  return context.html(html)
}

export const showNewProgramForm = async (context: Context) => {
  return context.html(renderTemplate('new-program'))
}

export const createNewProgram = async (context: Context) => {
  const { name } = await context.req.parseBody()
  
  if (!name || typeof name !== 'string') {
    return context.html(renderTemplate('new-program', { 
      error: 'Please provide a name for your grocery list' 
    }))
  }

  const program = createProgram(name)
  groceryProgramRepository.save(program)
  return context.redirect(`/programs/${program.id}`)
} 