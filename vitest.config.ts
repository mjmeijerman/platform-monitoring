import { defineConfig } from 'vitest/config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	test: {
		globals: true,
		setupFiles: [path.resolve(__dirname, './vitest.setup.ts')],
		include: ['**/*.test.ts'],
		testEnvironment: 'node',
		passWithNoTests: true,
	},
})
