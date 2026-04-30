import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const sampleKeywords = [
    { keyword: "seo", count: 18, density: 3.1 },
    { keyword: "content", count: 14, density: 2.4 },
    { keyword: "keyword", count: 12, density: 2.1 },
    { keyword: "analysis", count: 8, density: 1.4 },
  ];

  const payload = {
    source: body.url,
    scores: { seo: 84, content: 79, optimization: 76 },
    keywordDensity: sampleKeywords,
    tfidf: {
      missingKeywords: ["search intent", "internal linking", "topic authority"],
      relevance: [
        { keyword: "seo", count: 82, density: 0 },
        { keyword: "content optimization", count: 68, density: 0 },
        { keyword: "semantic clusters", count: 74, density: 0 },
      ],
    },
    clusters: {
      "technical seo": ["crawl budget", "site speed", "core web vitals"],
      "content strategy": ["pillar page", "topic cluster", "search intent"],
    },
    recommendations: [
      "Reduce overused terms in headings to avoid keyword stuffing.",
      "Add missing high-value terms: search intent, internal linking.",
      "Introduce clear H2 structure for topical completeness.",
      "Expand semantic cluster coverage around technical SEO.",
    ],
  };

  return NextResponse.json(payload);
}
