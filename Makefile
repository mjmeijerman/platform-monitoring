.PHONY: setup install up down test dev lint build rebuild

setup: build up
	@echo "✅ Setup complete! API is available at http://localhost:3000"

rebuild:
	docker compose down -v --remove-orphans
	docker compose build --no-cache
	docker compose up -d
	@echo "✅ Rebuild complete! API is available at http://localhost:3000"

pnpm-update:
	docker compose run --rm api pnpm update

build:
	docker compose build

up:
	docker compose up -d

down:
	docker compose down

test:
	docker compose run --rm api pnpm test

dev:
	docker compose up -d api

lint:
	docker compose run --rm api pnpm lint
