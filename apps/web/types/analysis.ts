export type KeywordDensityRequest = { url?: string; content?: string };

export type KeywordRow = { keyword: string; count: number; density: number };

export type KeywordDensityResponse = {
  keywords: KeywordRow[];
  warnings: { stuffing: KeywordRow[]; under_optimized: boolean };
};

export type TfidfRequest = {
  target_url?: string;
  target_content?: string;
  competitor_urls: string[];
};

export type TfidfResponse = { terms: string[]; matrix: number[][] };

export type ClusteringRequest = { keywords: string[] };

export type ClusteringResponse = { clusters: Record<string, string[]>; pillar_topics: string[] };
