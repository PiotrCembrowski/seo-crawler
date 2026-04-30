# Keyword & Content Analysis Suite

Production-oriented SaaS monorepo for SEO professionals and agencies.

## Stack
- **Frontend**: Next.js, TypeScript, Tailwind CSS, shadcn/ui, Recharts, Framer Motion
- **Backend**: FastAPI, PostgreSQL, Redis, Celery, scikit-learn, spaCy, sentence-transformers
- **Auth**: NextAuth-ready integration point
- **Billing**: Stripe-ready service boundaries

## Monorepo Layout
- `apps/web` - Next.js SaaS frontend
- `apps/api` - FastAPI backend and workers
- `infra` - deployment and infrastructure templates
- `docs` - architecture and product docs
- `packages/ui` - shared UI package scaffold

## Quick Start
1. Configure `.env` files from provided examples.
2. Run API: `cd apps/api && uvicorn app.main:app --reload`
3. Run web: `cd apps/web && next dev`
4. Optional workers: `cd apps/api && celery -A app.workers.celery_app.celery_app worker --loglevel=INFO`
