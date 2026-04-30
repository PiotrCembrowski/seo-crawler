"use client";

import dynamic from "next/dynamic";

export const DensityBarChart = dynamic(() => import("./density-bar-chart").then((mod) => mod.DensityBarChart), {
  ssr: false,
  loading: () => <div className="h-72 animate-pulse rounded-xl bg-slate-800" />,
});
