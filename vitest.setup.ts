import { beforeAll } from 'vitest'

// When running inside Docker, connection details are injected via environment variables.
// For local development without Docker Compose, these defaults apply.
const DEFAULTS = {
  POSTGRES_HOST: 'localhost',
  POSTGRES_PORT: '5432',
  POSTGRES_USER: 'postgres',
  POSTGRES_PASSWORD: 'postgres',
  POSTGRES_DB: 'app_db',
  REDIS_HOST: 'localhost',
  REDIS_PORT: '6379'
}

beforeAll(() => {
  process.env.POSTGRES_HOST = process.env.POSTGRES_HOST || DEFAULTS.POSTGRES_HOST
  process.env.POSTGRES_PORT = process.env.POSTGRES_PORT || DEFAULTS.POSTGRES_PORT
  process.env.POSTGRES_USER = process.env.POSTGRES_USER || DEFAULTS.POSTGRES_USER
  process.env.POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || DEFAULTS.POSTGRES_PASSWORD
  process.env.POSTGRES_DB = process.env.POSTGRES_DB || DEFAULTS.POSTGRES_DB

  process.env.REDIS_HOST = process.env.REDIS_HOST || DEFAULTS.REDIS_HOST
  process.env.REDIS_PORT = process.env.REDIS_PORT || DEFAULTS.REDIS_PORT
})
