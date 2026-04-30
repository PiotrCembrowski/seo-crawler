export function MetricCard({ label, value }: { label: string; value: string | number }) {
  return <div className="rounded-xl border border-slate-800 p-4"><p className="text-xs text-slate-400">{label}</p><p className="text-2xl font-semibold">{value}</p></div>;
}
