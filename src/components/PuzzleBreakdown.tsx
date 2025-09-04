"use client";

import type { Puzzle } from "@/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

interface PuzzleBreakdownProps {
  puzzle: Puzzle;
  onReturn: () => void;
}

export function PuzzleBreakdown({ puzzle, onReturn }: PuzzleBreakdownProps) {
  const renderClue = () => {
    switch (puzzle.type) {
      case "emoji":
        return <div className="text-6xl md:text-7xl">{puzzle.clue}</div>;
      case "word-scramble":
        return <div className="text-4xl md:text-5xl font-mono tracking-widest">{puzzle.clue}</div>;
      case "factoid":
        return <p className="text-lg md:text-xl italic">"{puzzle.clue}"</p>;
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto border-2 bg-card/80 backdrop-blur-sm animate-in fade-in duration-700">
      <CardHeader className="p-6 md:p-8">
        <CardTitle className="font-headline text-4xl md:text-5xl !leading-tight text-foreground">
          Puzzle Breakdown
        </CardTitle>
        <CardDescription className="text-lg md:text-xl pt-2">
          The answer was: <span className="font-bold text-primary">{puzzle.answer}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 md:p-8 pt-0 space-y-6 text-base">
        <div className="space-y-4">
          <div>
            <h3 className="font-headline text-xl font-bold mb-2">The Clue</h3>
            <div className="p-4 bg-muted/50 rounded-lg">{renderClue()}</div>
          </div>
          <div>
            <h3 className="font-headline text-xl font-bold mb-2">The Connection</h3>
            <p className="text-foreground/90 leading-relaxed">{puzzle.explanation}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 md:p-8 pt-0">
        <Button onClick={onReturn}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Concept
        </Button>
      </CardFooter>
    </Card>
  );
}
