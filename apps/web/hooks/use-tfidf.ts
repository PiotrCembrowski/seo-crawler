"use client";

import { useMutation } from "@tanstack/react-query";
import { analyzeTfidf } from "@/services/tfidf.service";

export function useTfidf() {
  return useMutation({ mutationFn: analyzeTfidf });
}
