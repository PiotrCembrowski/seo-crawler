import type { KeywordRow } from "@/types/analysis";

export function KeywordTable({ rows }: { rows: KeywordRow[] }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
      <h3 className="mb-3 font-semibold">Keyword Density</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm"><thead><tr className="text-left text-slate-400"><th className="p-2">Keyword</th><th className="p-2">Count</th><th className="p-2">Density</th><th className="p-2">Status</th></tr></thead>
        <tbody>{rows.map((row) => <tr key={row.keyword} className="border-t border-slate-800"><td className="p-2">{row.keyword}</td><td className="p-2">{row.count}</td><td className="p-2">{row.density}%</td><td className="p-2">{row.density > 3 ? "over-optimized" : "healthy"}</td></tr>)}</tbody></table>
      </div>
    </article>
  );
}
