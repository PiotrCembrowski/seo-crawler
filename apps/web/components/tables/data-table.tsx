"use client";

import type { KeywordRow } from "@/types/analysis";

export function DataTable({ rows }: { rows: KeywordRow[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-800">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-900/60 text-left">
          <tr><th className="p-3">Keyword</th><th className="p-3">Count</th><th className="p-3">Density %</th></tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.keyword} className="border-t border-slate-800"><td className="p-3">{row.keyword}</td><td className="p-3">{row.count}</td><td className="p-3">{row.density}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
