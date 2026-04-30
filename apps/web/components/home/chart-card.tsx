"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import type { KeywordRow } from "@/types/analysis";

export function ChartCard({ data, title }: { data: KeywordRow[]; title: string }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
      <h3 className="mb-3 font-semibold">{title}</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%"><BarChart data={data}><XAxis dataKey="keyword"/><YAxis/><Tooltip/><Bar dataKey="count" fill="#4f46e5" /></BarChart></ResponsiveContainer>
      </div>
    </article>
  );
}
