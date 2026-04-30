export function RecommendationList({ items }: { items: string[] }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
      <h3 className="mb-3 font-semibold">SEO Recommendations</h3>
      <ul className="space-y-2 text-sm text-slate-300">{items.map((item) => <li key={item}>• {item}</li>)}</ul>
    </article>
  );
}
