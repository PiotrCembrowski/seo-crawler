import { apiClient } from "./api-client";

export async function getReports() {
  const { data } = await apiClient.get("/reports");
  return data;
}
