"use client";

import Link from "next/link";
import { useUiStore } from "@/store/ui-store";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { sidebarOpen, toggleSidebar } = useUiStore();
  return (
    <div className="min-h-screen md:grid md:grid-cols-[260px_1fr]">
      <aside className={`border-r border-slate-800 bg-slate-950 p-4 ${sidebarOpen ? "block" : "hidden md:block"}`}>
        <p className="mb-4 text-lg font-semibold">SEO Suite</p>
        <nav className="space-y-2 text-sm">
          {[["Dashboard","/dashboard"],["Keyword Density","/keyword-density"],["TF-IDF","/tfidf"],["Clustering","/clustering"],["Reports","/reports"],["Billing","/billing"],["Settings","/settings"]].map(([label, href]) => <Link key={href} href={href as string} className="block rounded p-2 hover:bg-slate-800">{label}</Link>)}
        </nav>
      </aside>
      <div>
        <header className="flex items-center justify-between border-b border-slate-800 p-4"><button onClick={toggleSidebar} className="rounded border border-slate-700 px-3 py-1">Menu</button><p className="text-sm text-slate-400">Premium SEO Intelligence</p></header>
        {children}
      </div>
    </div>
  );
}
