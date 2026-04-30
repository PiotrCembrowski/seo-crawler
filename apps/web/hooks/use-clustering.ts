"use client";

import { useMutation } from "@tanstack/react-query";
import { analyzeClustering } from "@/services/clustering.service";

export function useClustering() {
  return useMutation({ mutationFn: analyzeClustering });
}
