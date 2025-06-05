import { readFileSync } from 'fs'
import { join } from 'path'
import * as Handlebars from 'handlebars'

const isDev = process.env.NODE_ENV !== 'production';

export function renderTemplate(templateName: string, context: object = {}) {
  const basePath = isDev
    ? join(process.cwd(), 'src', 'app', 'views')
    : join(process.cwd(), 'dist', 'app', 'views');

  const templatePath = join(basePath, `${templateName}.hbs`);
  const template = readFileSync(templatePath, 'utf-8');
  const compiledTemplate = Handlebars.compile(template);
  return compiledTemplate(context);
}