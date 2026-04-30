import { apiClient } from "./api-client";
import type { ClusteringRequest, ClusteringResponse } from "@/types/analysis";

export async function analyzeClustering(payload: ClusteringRequest): Promise<ClusteringResponse> {
  const { data } = await apiClient.post("/analysis/semantic-clustering", payload);
  return data;
}
