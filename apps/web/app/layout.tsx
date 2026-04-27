import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keyword & Content Analysis Suite",
  description: "Startup-grade SEO SaaS for keyword density, TF-IDF, and semantic clustering.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
