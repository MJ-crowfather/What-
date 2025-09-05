"use client";

import { useState, useEffect } from "react";
import { concepts } from "@/lib/concepts";
import type { DailyConcept } from "@/types";

export function useDailyConcept() {
  const [dailyConcept, setDailyConcept] = useState<DailyConcept | null>(null);

  useEffect(() => {
    // This logic runs only on the client, avoiding hydration mismatches.
    const epoch = Date.UTC(2024, 0, 1); // January 1, 2024 in UTC
    const now = new Date();
    // Get the current date in UTC
    const todayInUTC = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());

    const msInDay = 1000 * 60 * 60 * 24;
    const dayIndex = Math.floor((todayInUTC - epoch) / msInDay);

    if (concepts.length > 0) {
      const conceptIndex = dayIndex % concepts.length;
      setDailyConcept(concepts[conceptIndex]);
    }
  }, []);

  return dailyConcept;
}
