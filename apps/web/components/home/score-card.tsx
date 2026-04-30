type Props = { label: string; score: number };

export function ScoreCard({ label, score }: Props) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="text-2xl font-semibold">{score}/100</p>
      <div className="mt-2 h-2 rounded-full bg-slate-800"><div className="h-2 rounded-full bg-emerald-500" style={{ width: `${score}%` }} /></div>
    </article>
  );
}
