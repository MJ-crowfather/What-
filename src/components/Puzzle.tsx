"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import type { Puzzle as PuzzleType } from "@/types";

interface PuzzleProps {
  puzzle: PuzzleType;
  onSolve: (skipped: boolean, guessCount: number) => void;
  isDaily: boolean;
}

const PuzzleContent = ({ puzzle }: { puzzle: PuzzleType }) => {
  switch (puzzle.type) {
    case "emoji":
      return (
        <div className="text-6xl md:text-8xl" aria-hidden="true">
          {puzzle.clue}
        </div>
      );
    case "word-scramble":
       return (
        <div className="text-5xl md:text-7xl font-mono tracking-widest" aria-hidden="true">
          {puzzle.clue}
        </div>
      );
    case "factoid":
      return (
        <p className="text-xl md:text-2xl text-foreground/90" aria-hidden="true">
          {puzzle.clue}
        </p>
      );
    default:
      return null;
  }
};


export function Puzzle({ puzzle, onSolve, isDaily }: PuzzleProps) {
  const [guess, setGuess] = useState("");
  const [error, setError] = useState<string | false>(false);
  const [guessCount, setGuessCount] = useState(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (guessCount >= 6) return;

    const newGuessCount = guessCount + 1;
    setGuessCount(newGuessCount);

    if (guess.trim().toLowerCase() === puzzle.answer.toLowerCase()) {
      setError(false);
      onSolve(false, newGuessCount);
    } else {
      setGuess("");
      if (newGuessCount >= 6) {
        setError("Better luck next time, but don't worry, all knowledge is free (as it should be :)");
        setTimeout(() => onSolve(true, newGuessCount), 2000);
      } else {
        setError("Not quite. Try again!");
      }
    }
  };
  
  const handleSkip = () => {
    onSolve(true, guessCount);
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center text-center p-4 animate-in fade-in duration-700">
      <PuzzleContent puzzle={puzzle} />
      <p className="mt-4 text-muted-foreground">
        Solve the riddle to reveal {isDaily ? "today's" : "another"} concept. You have {6 - guessCount} guesses remaining.
      </p>
      <form onSubmit={handleSubmit} className="w-full mt-8 space-y-4">
        <Input
          type="text"
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value);
            if (error) setError(false);
          }}
          placeholder="Your answer..."
          aria-label="Your answer for the riddle"
          disabled={guessCount >= 6}
          className={`font-body text-center text-lg h-14 border-2 text-foreground bg-card/50 ${
            error
              ? "border-destructive ring-2 ring-destructive/50"
              : "focus-visible:ring-primary"
          }`}
        />
        <div className="flex gap-4 w-full">
          <Button type="submit" className="w-full h-12 text-lg" disabled={guessCount >= 6}>
            Guess
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={handleSkip}
            className="w-full h-12 text-lg"
            disabled={guessCount >= 6}
          >
            Skip
          </Button>
        </div>
      </form>
      {error && (
        <p className="mt-2 text-destructive font-medium">
          {error}
        </p>
      )}
    </div>
  );
}
