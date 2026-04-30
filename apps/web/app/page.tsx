import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl p-8">
      <h1 className="text-4xl font-bold">Keyword & Content Analysis Suite</h1>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
        Production SaaS platform for SEO teams: keyword density audits, TF-IDF competitor analysis,
        semantic clustering, subscription plans, usage tracking, and collaborative reports.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/analyzer" className="rounded-lg bg-indigo-600 px-4 py-2 text-white">Start Analysis</Link>
        <Link href="/tfidf" className="rounded-lg border border-slate-300 px-4 py-2">TF-IDF Tool</Link>
      </div>
    </main>
  );
}
