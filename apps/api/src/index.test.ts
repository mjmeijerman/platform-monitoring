import { describe, it, expect } from 'vitest'
import app from './index.js'

describe('API Endpoints', () => {
	it('GET / should return 200 and greeting text', async () => {
		const res = await app.request('/')
		expect(res.status).toBe(200)
		expect(await res.text()).toBe('Hello from API')
	})

	it('GET /health should return 200, status ok, and timestamp', async () => {
		const res = await app.request('/health')
		expect(res.status).toBe(200)
		const json = await res.json()
		expect(json.status).toBe('ok')
		expect(typeof json.timestamp).toBe('string')
	})
})
