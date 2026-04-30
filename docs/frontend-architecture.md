# Frontend Architecture & Production Implementation Plan

## Stack
- Next.js App Router + React 19 + TypeScript.
- Tailwind CSS + shadcn/ui design primitives.
- TanStack Query for API caching/retries/background refresh.
- Zustand for local UI preferences and transient filters.
- React Hook Form + Zod validation.
- Axios service layer for API access + normalization.
- Recharts + Framer Motion for visual analytics and animation.

## Scalable Folder Structure
```text
apps/web/
├── app/
│   ├── dashboard/
│   ├── keyword-density/
│   ├── tfidf/
│   ├── clustering/
│   ├── reports/
│   ├── settings/
│   ├── onboarding/
│   ├── login/
│   ├── register/
│   └── billing/
├── components/
│   ├── ui/
│   ├── charts/
│   ├── tables/
│   ├── forms/
│   ├── layout/
│   └── shared/
├── features/
│   ├── keyword-density/
│   ├── tfidf/
│   ├── clustering/
│   └── reports/
├── hooks/
├── lib/
├── services/
├── store/
├── types/
└── styles/
```

## Page-level Implementation
- Dashboard: metric cards, report feed, quick actions, queue health widgets.
- Keyword Density: dual input modes, sortable DataTable, warnings, chart + circular score meter, inline recommendations, export actions.
- TF-IDF: competitor URL dynamic field array, gap highlighting, opportunity graph, term importance drilldown, competitor toggles.
- Clustering: CSV drag/drop + paste mode, cluster cards, expandable topic groups, semantic graph/hierarchy tree.
- Reports: saved analysis history, date/tool/project filters, preview drawer, CSV/XLSX/PDF actions.
- Onboarding: wizard with project creation, first-run analysis guidance, default settings bootstrap.

## Reusable Components
- `DataTable`: sorting/filtering/pagination, keyboard navigation, virtualization hook.
- `ChartWrapper`: unified chart theming, loading fallback, empty states.
- `FileUploadDropzone`: drag/drop + validation + progress.
- `MetricCard`, `SEOScoreBadge`, `LoadingSkeleton`, `EmptyState`.
- Global modal/drawer stack for previews and inline edits.

## State & Data Management
- TanStack Query keys: `analysis`, `reports`, `billing`, `usage`, `profile`.
- Background polling for long-running jobs every 3-5s with exponential backoff.
- Zustand slices: layout/sidebar, table filters, chart preferences, theme.

## API Integration Layer
- `services/keyword.service.ts`, `tfidf.service.ts`, `clustering.service.ts`, `report.service.ts`.
- Interceptors for auth token, standard error object, and tracing headers.
- Service responses normalized into typed `types/*` contracts.

## Performance Plan
- Route and component-level code splitting via dynamic imports.
- Lazy-load charts + graph visualizations.
- Virtualize large keyword tables and debounce filter/search input.
- Memoized transforms for chart data and derived metrics.

## Authentication & Billing UI
- Login/register/reset pages with protected route wrappers.
- Billing page supports plan comparisons, upgrade/downgrade CTA, usage charting.
- Stripe checkout/session status UX states and webhook-origin feedback banners.

## Responsiveness & UX
- Mobile-first responsive grid and collapsible sidebar.
- Accessible color system for light/dark themes.
- Framer Motion transitions for route sections, loading states, and KPI updates.
- Toast notifications for API errors, export completion, and job progress.

## Testing & Release Readiness
- Unit: Vitest + React Testing Library for components/hooks.
- Integration: route-level tests with mocked API and query cache.
- E2E: Playwright flows for onboarding, analysis submission, report export.
- CI: lint, typecheck, test, build, Lighthouse budget gate.
