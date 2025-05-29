import { readFileSync } from 'fs'
import { join } from 'path'
import * as Handlebars from 'handlebars'

export function renderTemplate(templateName: string, context: object = {}) {
  const template = readFileSync(join(__dirname, '..', '..', 'views', `${templateName}.hbs`), 'utf-8')
  const compiledTemplate = Handlebars.compile(template)
  return compiledTemplate(context)
} 