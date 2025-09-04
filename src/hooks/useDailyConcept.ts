"use client";

import { useState, useEffect } from "react";
import { concepts } from "@/lib/concepts";
import type { DailyConcept } from "@/types";

export function useDailyConcept() {
  const [dailyConcept, setDailyConcept] = useState<DailyConcept | null>(null);

  useEffect(() => {
    // This logic runs only on the client, avoiding hydration mismatches.
    const epoch = new Date("2024-01-01");
    const today = new Date();
    // Set time to 0 to compare dates only, ensuring consistency across timezones
    epoch.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const msInDay = 1000 * 60 * 60 * 24;
    const dayIndex = Math.floor((today.getTime() - epoch.getTime()) / msInDay);

    if (concepts.length > 0) {
      const conceptIndex = dayIndex % concepts.length;
      setDailyConcept(concepts[conceptIndex]);
    }
  }, []);

  return dailyConcept;
}
