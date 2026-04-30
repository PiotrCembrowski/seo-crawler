"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import type { KeywordRow } from "@/types/analysis";

export function DensityBarChart({ rows }: { rows: KeywordRow[] }) {
  return <ResponsiveContainer width="100%" height={280}><BarChart data={rows}><XAxis dataKey="keyword"/><YAxis/><Tooltip/><Bar dataKey="count" fill="#6366f1"/></BarChart></ResponsiveContainer>;
}
