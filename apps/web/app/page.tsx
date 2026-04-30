"use client";

import { useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { UrlInput } from "@/components/home/url-input";
import { ScoreCard } from "@/components/home/score-card";
import { KeywordTable } from "@/components/home/keyword-table";
import { ChartCard } from "@/components/home/chart-card";
import { ClusterCard } from "@/components/home/cluster-card";
import { RecommendationList } from "@/components/home/recommendation-list";
import { AnalysisLoader } from "@/components/home/analysis-loader";

type AnalyzeResponse = {
  source: string;
  scores: { seo: number; content: number; optimization: number };
  keywordDensity: { keyword: string; count: number; density: number }[];
  tfidf: { missingKeywords: string[]; relevance: { keyword: string; count: number; density: number }[] };
  clusters: Record<string, string[]>;
  recommendations: string[];
};

export default function HomePage() {
  const resultsRef = useRef<HTMLDivElement>(null);
  const analyzeMutation = useMutation<AnalyzeResponse, Error, { url: string; content?: string }>({
    mutationFn: async (payload) => {
      const response = await fetch("/api/analyze", { method: "POST", body: JSON.stringify(payload) });
      if (!response.ok) throw new Error("Failed to analyze URL");
      return response.json();
    },
    onSuccess: () => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 px-4 py-10 text-slate-100">
      <section className="mx-auto max-w-6xl rounded-3xl border border-slate-800/60 bg-slate-900/40 p-8 shadow-2xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-indigo-300">Fast • Accurate • AI-Powered</p>
          <h1 className="text-4xl font-bold md:text-5xl">Analyze Your Website’s SEO in Seconds</h1>
          <p className="mt-4 text-lg text-slate-300">Keyword density, content gaps, and semantic clusters — all in one powerful tool.</p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl">
          <UrlInput onAnalyze={(payload) => analyzeMutation.mutate(payload)} isLoading={analyzeMutation.isPending} error={analyzeMutation.error?.message} />
        </div>
      </section>

      <section ref={resultsRef} className="mx-auto mt-10 max-w-6xl space-y-6">
        {analyzeMutation.isPending && <AnalysisLoader />}

        {analyzeMutation.data && (
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <ScoreCard label="SEO Score" score={analyzeMutation.data.scores.seo} />
              <ScoreCard label="Content Score" score={analyzeMutation.data.scores.content} />
              <ScoreCard label="Optimization Score" score={analyzeMutation.data.scores.optimization} />
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <KeywordTable rows={analyzeMutation.data.keywordDensity} />
              <ChartCard title="Keyword Frequency" data={analyzeMutation.data.keywordDensity} />
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
                <h3 className="mb-3 font-semibold">TF-IDF Content Gap</h3>
                <p className="mb-2 text-sm text-slate-400">Missing Keywords</p>
                <div className="flex flex-wrap gap-2">{analyzeMutation.data.tfidf.missingKeywords.map((term) => <span key={term} className="rounded-full bg-amber-500/20 px-3 py-1 text-xs text-amber-200">{term}</span>)}</div>
                <div className="mt-4"><ChartCard title="Relevance Comparison" data={analyzeMutation.data.tfidf.relevance} /></div>
              </article>

              <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
                <h3 className="mb-3 font-semibold">Semantic Clusters</h3>
                <div className="space-y-3">{Object.entries(analyzeMutation.data.clusters).map(([name, kws]) => <ClusterCard key={name} title={name} keywords={kws} />)}</div>
              </article>
            </div>

            <RecommendationList items={analyzeMutation.data.recommendations} />
            <div className="flex flex-wrap gap-3"><button className="rounded-xl bg-indigo-600 px-4 py-2">Analyze another URL</button><button className="rounded-xl border border-slate-700 px-4 py-2">Export Report</button></div>
          </motion.div>
        )}
      </section>
    </main>
  );
}
