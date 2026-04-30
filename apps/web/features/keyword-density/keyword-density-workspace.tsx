"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useKeywordDensity } from "@/hooks/use-keyword-density";
import { DataTable } from "@/components/tables/data-table";
import { DensityBarChart } from "@/components/charts/chart-wrapper";

const schema = z.object({
  url: z.string().url().optional().or(z.literal("")),
  content: z.string().min(30, "Please provide at least 30 characters.").optional(),
});

type FormValues = z.infer<typeof schema>;

export function KeywordDensityWorkspace() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(schema) });
  const mutation = useKeywordDensity();

  return (
    <section className="space-y-6">
      <form className="grid gap-3 rounded-xl border border-slate-800 p-4" onSubmit={handleSubmit((values) => mutation.mutate(values))}>
        <input {...register("url")} placeholder="https://example.com" className="rounded bg-slate-900 p-3" />
        <textarea {...register("content")} placeholder="Paste content" className="min-h-40 rounded bg-slate-900 p-3" />
        {errors.content && <p className="text-sm text-rose-400">{errors.content.message}</p>}
        <button className="rounded bg-indigo-600 px-4 py-2">{mutation.isPending ? "Analyzing..." : "Analyze"}</button>
      </form>
      {mutation.data && <><DataTable rows={mutation.data.keywords} /><DensityBarChart rows={mutation.data.keywords.slice(0, 20)} /></>}
    </section>
  );
}
