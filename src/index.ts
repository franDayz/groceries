import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'
import { homeHandler } from './app/handlers/HomeHandler'
import { addGroceryItem } from './app/handlers/ItemHandlers'
import { viewProgram, createNewProgram, showNewProgramForm } from './app/handlers/ProgramHandler'

const app = new Hono()

// Serve static files from public directory
app.use('/static/*', serveStatic({ root: './' }))

// Routes
app.get('/', homeHandler)
app.post('/items', addGroceryItem)

// Program routes
app.get('/programs/new', showNewProgramForm)
app.get('/programs/:id', viewProgram)
app.post('/programs', createNewProgram)

// Start the server
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
}) 