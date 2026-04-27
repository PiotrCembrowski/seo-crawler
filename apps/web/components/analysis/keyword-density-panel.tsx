"use client";

import { useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const mock = [
  { keyword: "seo", count: 14, density: 2.8 },
  { keyword: "keyword", count: 10, density: 2.0 },
  { keyword: "content", count: 9, density: 1.8 }
];

export function KeywordDensityPanel() {
  const stuffing = useMemo(() => mock.filter((k) => k.density > 3), []);

  return (
    <section className="space-y-6 p-8">
      <h2 className="text-2xl font-semibold">Keyword Density Analyzer</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {mock.map((row) => (
          <article key={row.keyword} className="rounded-xl border p-4">
            <h3 className="font-medium">{row.keyword}</h3>
            <p>Count: {row.count}</p>
            <p>Density: {row.density}%</p>
          </article>
        ))}
      </div>
      <div className="h-72 rounded-xl border p-4">
        <ResponsiveContainer>
          <BarChart data={mock}>
            <XAxis dataKey="keyword" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm text-amber-600">Warnings: {stuffing.length ? "Potential stuffing detected" : "No stuffing risk."}</p>
    </section>
  );
}
