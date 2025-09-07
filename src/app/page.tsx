
"use client";

import { useState, useEffect } from "react";
import { useDailyConcept } from "@/hooks/useDailyConcept";
import { Puzzle } from "@/components/Puzzle";
import { ConceptCard } from "@/components/ConceptCard";
import { PuzzleBreakdown } from "@/components/PuzzleBreakdown";
import { Loader2 } from "lucide-react";
import { concepts } from "@/lib/concepts";
import type { DailyConcept } from "@/types";

export default function Home() {
  const dailyConcept = useDailyConcept();
  const [currentConcept, setCurrentConcept] = useState<DailyConcept | null>(null);
  const [isSolved, setIsSolved] = useState(false);
  const [skipped, setSkipped] = useState(false);
  const [guessCount, setGuessCount] = useState(0);
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [animationState, setAnimationState] = useState<"idle" | "in" | "out">(
    "idle",
  );
  const [isDaily, setIsDaily] = useState(true);

  useEffect(() => {
    if (dailyConcept) {
      setCurrentConcept(dailyConcept);
      setIsSolved(false);
      setSkipped(false);
      setGuessCount(0);
      setShowBreakdown(false);
      setIsDaily(true);
    }
  }, [dailyConcept]);

  const handleSolve = (wasSkipped: boolean, guesses: number) => {
    if (animationState === "idle") {
      setSkipped(wasSkipped);
      setGuessCount(guesses);
      setAnimationState("in");
    }
  };
  
  const handleLearnNew = () => {
    let newConcept: DailyConcept;
    const seenTitles = [currentConcept?.concept.title, dailyConcept?.concept.title].filter(Boolean);

    let availableConcepts = concepts.filter(c => !seenTitles.includes(c.concept.title));
    if (availableConcepts.length === 0) {
      availableConcepts = concepts.filter(c => c.concept.title !== currentConcept?.concept.title);
    }
    
    const randomIndex = Math.floor(Math.random() * availableConcepts.length);
    newConcept = availableConcepts[randomIndex];

    setCurrentConcept(newConcept);
    setIsSolved(false);
    setSkipped(false);
    setGuessCount(0);
    setShowBreakdown(false);
    setIsDaily(false);
  };

  const handleGoBack = () => {
    setShowBreakdown(true);
  };
  
  const handleDailyConcept = () => {
    setCurrentConcept(dailyConcept);
    setIsSolved(false);
    setSkipped(false);
    setGuessCount(0);
    setShowBreakdown(false);
    setIsDaily(true);
  };

  const handleReturnToConcept = () => {
    setShowBreakdown(false);
  };

  const handleAnimationEnd = () => {
    if (animationState === "in") {
      setIsSolved(true);
      setAnimationState("out");
    } else if (animationState === "out") {
      setAnimationState("idle");
    }
  };

  if (!currentConcept) {
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
      data-category={currentConcept.category.toLowerCase().replace(/ /g, "-")}
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
          showBreakdown ? (
            <PuzzleBreakdown
              puzzle={currentConcept.puzzle}
              onReturn={handleReturnToConcept}
            />
          ) : (
            <ConceptCard
              concept={currentConcept.concept}
              category={currentConcept.category}
              isSkipped={skipped}
              guessCount={guessCount}
              onGoBack={handleGoBack}
              onLearnNew={handleLearnNew}
              onDailyConcept={handleDailyConcept}
              isDaily={isDaily}
            />
          )
        ) : (
          <div className="flex flex-col items-center">
            <h1 className="font-headline text-8xl md:text-9xl font-bold text-primary mb-8 text-center">
              What?
            </h1>
            <Puzzle
              puzzle={currentConcept.puzzle}
              onSolve={handleSolve}
              isDaily={isDaily}
            />
          </div>
        )}
      </div>
    </main>
  );
}
