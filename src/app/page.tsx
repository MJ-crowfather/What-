"use client";

import { useState, useEffect } from "react";
import { useDailyConcept } from "@/hooks/useDailyConcept";
import { Puzzle } from "@/components/Puzzle";
import { ConceptCard } from "@/components/ConceptCard";
import { Loader2 } from "lucide-react";

export default function Home() {
  const dailyConcept = useDailyConcept();
  const [isSolved, setIsSolved] = useState(false);
  const [animationState, setAnimationState] = useState<"idle" | "in" | "out">(
    "idle",
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const todayStr = today.toISOString().split("T")[0];
      const solvedDate = localStorage.getItem("conceptQuest-solvedDate");

      if (solvedDate === todayStr) {
        setIsSolved(true);
      }
    }
  }, []);

  const handleSolve = () => {
    if (animationState === "idle") {
      setAnimationState("in");
    }
  };

  const handleAnimationEnd = () => {
    if (animationState === "in") {
      setIsSolved(true);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const todayStr = today.toISOString().split("T")[0];
      localStorage.setItem("conceptQuest-solvedDate", todayStr);
      setAnimationState("out");
    } else if (animationState === "out") {
      setAnimationState("idle");
    }
  };

  if (!dailyConcept) {
    return (
      <main className="flex min-h-screen items-center justify-center p-4 bg-background">
        <div className="flex flex-col items-center gap-4 text-primary">
          <Loader2 className="h-12 w-12 animate-spin" />
          <h1 className="font-headline text-3xl font-bold">Loading Concept...</h1>
        </div>
      </main>
    );
  }

  return (
    <main
      data-category={dailyConcept.category.toLowerCase().replace(/ /g, "-")}
      className="flex min-h-screen flex-col items-center justify-center p-4 transition-colors duration-500 relative overflow-hidden"
    >
      <div
        onAnimationEnd={handleAnimationEnd}
        className={`fixed inset-0 z-50 bg-primary ${
          animationState === "idle" ? "hidden" : "block"
        } ${animationState === "in" ? "animate-in reveal-in" : ""} ${
          animationState === "out" ? "animate-out reveal-out" : ""
        }`}
      />

      <div className="w-full max-w-4xl mx-auto">
        {isSolved ? (
          <ConceptCard
            concept={dailyConcept.concept}
            category={dailyConcept.category}
          />
        ) : (
          <div className="flex flex-col items-center">
            <h1 className="font-headline text-8xl md:text-9xl font-bold text-primary mb-8 text-center">
              What?
            </h1>
            <Puzzle puzzle={dailyConcept.puzzle} onSolve={handleSolve} />
          </div>
        )}
      </div>
    </main>
  );
}
