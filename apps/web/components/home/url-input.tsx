"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  onAnalyze: (payload: { url: string; content?: string }) => void;
  isLoading: boolean;
  error?: string;
};

export function UrlInput({ onAnalyze, isLoading, error }: Props) {
  const [url, setUrl] = useState("");
  const [contentMode, setContentMode] = useState(false);
  const [content, setContent] = useState("");
  const [debouncedUrl, setDebouncedUrl] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedUrl(url.trim()), 300);
    return () => clearTimeout(timer);
  }, [url]);

  const validUrl = useMemo(() => {
    if (!debouncedUrl) return false;
    try {
      new URL(debouncedUrl);
      return true;
    } catch {
      return false;
    }
  }, [debouncedUrl]);

  const disabled = isLoading || (!contentMode && !validUrl) || (contentMode && content.length < 30);

  return (
    <div className="w-full rounded-2xl border border-slate-700/60 bg-slate-950/60 p-4 shadow-2xl backdrop-blur">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs uppercase tracking-wide text-slate-400">Real-time SEO analysis</span>
        <button onClick={() => setContentMode((v) => !v)} className="text-xs text-indigo-300">
          {contentMode ? "Use URL Instead" : "Paste Content"}
        </button>
      </div>
      <div className="flex flex-col gap-3 md:flex-row">
        {!contentMode ? (
          <input
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && !disabled && onAnalyze({ url: debouncedUrl })}
            placeholder="https://example.com"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3"
          />
        ) : (
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Paste at least 30 characters of content"
            className="min-h-28 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3"
          />
        )}
        <button
          onClick={() => onAnalyze(contentMode ? { url: "https://content.local", content } : { url: debouncedUrl })}
          disabled={disabled}
          className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white disabled:cursor-not-allowed disabled:bg-slate-700"
        >
          {isLoading ? "Analyzing content..." : "Run Analysis"}
        </button>
      </div>
      {isLoading && <div className="mt-3 h-1 overflow-hidden rounded bg-slate-800"><div className="h-full w-1/3 animate-pulse bg-indigo-500"/></div>}
      {error && <p className="mt-3 text-sm text-rose-400">{error}</p>}
    </div>
  );
}
