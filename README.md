# Opsly

**Simple operations. Smarter businesses.**

Opsly is an AI-native operating workspace for growing businesses. It brings tasks, sales, products, teams and business intelligence into one focused experience.

## Architecture

- Next.js + React + TypeScript
- Tailwind CSS
- PostgreSQL + Prisma
- AWS Cognito for identity
- Amazon Bedrock for business intelligence
- AWS production infrastructure

## Product areas

- Overview
- Tasks
- Sales
- Products
- Team
- Opsly AI
- Settings

## Development

Copy `.env.example` to `.env.local`, configure the database, then run:

```bash
npm install
npm run db:generate
npm run db:push
npm run dev
```

## Vision

Opsly is designed as a multi-tenant SaaS product: each business gets an isolated workspace, its own operational data and an AI layer that turns business context into useful actions.
