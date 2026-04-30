"use client";

import { useMutation } from "@tanstack/react-query";
import { analyzeKeywordDensity } from "@/services/keyword.service";

export function useKeywordDensity() {
  return useMutation({ mutationFn: analyzeKeywordDensity });
}
