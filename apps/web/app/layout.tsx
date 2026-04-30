import "./globals.css";
import type { Metadata } from "next";
import { AppQueryProvider } from "@/components/shared/query-provider";
import { AppShell } from "@/components/layout/app-shell";

export const metadata: Metadata = {
  title: "Keyword & Content Analysis Suite",
  description: "Premium SEO SaaS for agencies and content teams",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppQueryProvider>
          <AppShell>{children}</AppShell>
        </AppQueryProvider>
      </body>
    </html>
  );
}
