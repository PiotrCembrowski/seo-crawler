import { apiClient } from "./api-client";
import type { TfidfRequest, TfidfResponse } from "@/types/analysis";

export async function analyzeTfidf(payload: TfidfRequest): Promise<TfidfResponse> {
  const { data } = await apiClient.post("/analysis/tfidf", payload);
  return data;
}
