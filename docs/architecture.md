# Production Architecture

## System Design
- **Monorepo** with isolated frontend/backend apps.
- **Frontend (Next.js)** serves dashboards, onboarding, billing, team collaboration.
- **Backend (FastAPI)** exposes versioned API, async-safe services, OpenAI recommendation layer.
- **PostgreSQL** stores users, projects, reports, subscriptions, usage logs.
- **Redis + Celery** power background scraping, TF-IDF batch jobs, exports, and caching.
- **Object storage** (S3-compatible) stores generated PDF/CSV/XLSX reports.

## Scalability Patterns
- Horizontal API workers behind load balancer.
- Separate Celery workers by queue: `analysis`, `exports`, `notifications`.
- Rate limiting per plan tier.
- Query-level caching for repeated analyses.
- Tenant-aware authorization and audit logging.

## Security
- Row-level tenant isolation.
- Signed URLs for report downloads.
- Secrets managed with environment variables and cloud secret manager.
- Webhook signature verification for Stripe.

## Deployment
- Frontend on Vercel.
- API + workers + Redis + Postgres on Railway/Render/AWS ECS.
- CI/CD: lint, tests, migrations, build, deploy.
