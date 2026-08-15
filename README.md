# Platform Monitoring Monorepo

## 🏗️ Architecture & Methodology
- **Workspace Boundaries**:
  - `packages/core`: Domain models, Value Objects, Repository Interfaces (Ports), Use Cases.
  - `apps/api`: Hono API Gateway, HTTP Inbound Adapters (Controllers, Routing).
  - `apps/worker`: BullMQ Worker App, Queue Consumers (Inbound Adapters).
  - `packages/db`: Drizzle ORM schemas, Migrations, TimescaleDB Outbound Adapter.


## 🚀 Getting Started

### Prerequisites
- **Docker & Docker Compose**: All infrastructure and application code run inside containers. No local Node.js or pnpm installation is required for development.

### Quick Start
Run the following command to install dependencies, build images, and start the entire stack: ```make setup```
