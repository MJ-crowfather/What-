export type Category =
  | "Science"
  | "History"
  | "International Relations"
  | "Technical Advancements"
  | "Literature";

export interface Puzzle {
  type: "emoji";
  clue: string;
  answer: string;
}

export interface Concept {
  title: string;
  tldr: string;
  description: string;
  why_cool: string[];
  learn_more?: string;
}

export interface DailyConcept {
  category: Category;
  puzzle: Puzzle;
  concept: Concept;
}
