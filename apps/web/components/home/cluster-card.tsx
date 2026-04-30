export function ClusterCard({ title, keywords }: { title: string; keywords: string[] }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
      <h4 className="font-semibold">{title}</h4>
      <div className="mt-2 flex flex-wrap gap-2">{keywords.map((k) => <span key={k} className="rounded-full bg-slate-800 px-3 py-1 text-xs">{k}</span>)}</div>
    </article>
  );
}
