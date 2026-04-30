import { apiClient } from "./api-client";
import type { KeywordDensityRequest, KeywordDensityResponse } from "@/types/analysis";

export async function analyzeKeywordDensity(payload: KeywordDensityRequest): Promise<KeywordDensityResponse> {
  const { data } = await apiClient.post("/analysis/keyword-density", payload);
  return data;
}
