"use client";

export function TfidfPanel() {
  return (
    <section className="space-y-4 p-8">
      <h2 className="text-2xl font-semibold">TF-IDF Competitor Gap Analysis</h2>
      <p>Compare target relevance against up to 10 competitor URLs and discover missing terms.</p>
      <ul className="list-disc pl-6 text-sm text-slate-600 dark:text-slate-300">
        <li>Top missing keywords panel</li>
        <li>Opportunity scoring</li>
        <li>Relevance benchmark chart</li>
      </ul>
    </section>
  );
}
