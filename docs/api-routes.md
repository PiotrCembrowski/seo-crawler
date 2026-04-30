# API Routes (v1)

## Auth / Account
- `GET /api/v1/account/me`
- `PATCH /api/v1/account/me`
- `GET /api/v1/account/usage`

## Keyword Density
- `POST /api/v1/analysis/keyword-density`
- `POST /api/v1/analysis/keyword-density/export`

## TF-IDF
- `POST /api/v1/analysis/tfidf`
- `POST /api/v1/analysis/tfidf/export`

## Semantic Clustering
- `POST /api/v1/analysis/semantic-clustering`
- `POST /api/v1/analysis/semantic-clustering/export`

## Reports
- `GET /api/v1/reports`
- `GET /api/v1/reports/{report_id}`
- `DELETE /api/v1/reports/{report_id}`

## Billing
- `GET /api/v1/billing/plans`
- `POST /api/v1/billing/checkout`
- `POST /api/v1/billing/webhooks/stripe`

## Admin
- `GET /api/v1/admin/tenants`
- `GET /api/v1/admin/queues`
- `GET /api/v1/admin/metrics`
