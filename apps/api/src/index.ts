import { serve } from '@hono/node-server'
import { Hono } from 'hono'

// Hono API Gateway, HTTP Inbound Adapters (Controllers, Routing)
const app = new Hono()

app.get('/', c => c.text('Hello from API'))
app.get('/health', c => c.json({ status: 'ok', timestamp: new Date().toISOString() }))

export default app

// Only start the HTTP server when running directly, not during Vitest execution
if (!process.env.VITEST) {
	const port = Number(process.env.PORT) || 3000
	console.log(`Server is running on http://localhost:${port}`)
	serve({ fetch: app.fetch, port })
}
