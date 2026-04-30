# Product Blueprint

## Frontend Pages
- `/` marketing + quick start
- `/analyzer` keyword density workspace
- `/tfidf` competitor gap workspace
- `/clustering` semantic clustering workspace
- `/reports` saved report history
- `/billing` plans and invoices
- `/settings` workspace/team settings
- `/admin` tenant and operational controls

## Reusable Components
- Analysis form shell (URL/content modes)
- Data table with sorting/filtering/export actions
- KPI cards and warning badges
- Recharts wrappers for bars/meters/comparison plots
- File dropzone for CSV uploads
- Skeleton loaders and empty states

## Background Jobs
- Scrape + clean page content
- TF-IDF batch processing
- Semantic embedding generation
- Report export rendering (CSV/PDF/XLSX)
- Notification and webhook pipelines

## SaaS Capabilities
- Plan-gated usage enforcement
- Team roles (owner/admin/member)
- API usage metering
- Workspace report retention policies
- Audit log streams for enterprise plans
