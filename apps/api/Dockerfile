FROM node:24-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV CI=true
ENV NPM_CONFIG_yes=true
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable

WORKDIR /app
COPY package.json pnpm-workspace.yaml .npmrc ./
COPY apps/api/package.json ./apps/api/
COPY apps/worker/package.json ./apps/worker/
COPY packages/core/package.json ./packages/core/
COPY packages/db/package.json ./packages/db/

FROM base AS deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --ignore-scripts

FROM base AS build
COPY . .
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/api/node_modules ./apps/api/node_modules
COPY --from=deps /app/apps/worker/node_modules ./apps/worker/node_modules
COPY --from=deps /app/packages/core/node_modules ./packages/core/node_modules
COPY --from=deps /app/packages/db/node_modules ./packages/db/node_modules
RUN pnpm build

FROM node:24-alpine AS runner
WORKDIR /app/apps/api
ENV NODE_ENV=production

# Ensure pnpm is available for ad-hoc commands (e.g., docker compose run api pnpm test)
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV CI=true
ENV NPM_CONFIG_yes=true
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable

COPY --from=build /app/apps/api/dist ./dist
COPY --from=deps /app/node_modules /app/node_modules
COPY --from=deps /app/apps/api/node_modules ./node_modules
COPY --from=build /app/apps/api/package.json ./package.json

EXPOSE 3000
CMD ["node", "dist/index.js"]
