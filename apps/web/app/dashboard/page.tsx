import { MetricCard } from "@/components/shared/metric-card";

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-5 p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Total Analyses" value="1,284" />
        <MetricCard label="Keyword Insights" value="23,400" />
        <MetricCard label="Avg Content Score" value="82/100" />
      </div>
    </main>
  );
}
