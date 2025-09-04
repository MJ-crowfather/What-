export type Category =
  | "Science"
  | "History"
  | "International Relations"
  | "Technical Advancements"
  | "Literature"
  | "Psychology"
  | "Philosophy"
  | "Mathematics"
  | "Anthropology"
  | "Linguistics"
  | "Economics"
  | "Neuroscience"
  | "Art History"
  | "Sociology"
  | "Physics"
  | "Biology"
  | "Geography"
  | "Computer Science"
  | "Chemistry"
  | "Astronomy"
  | "Music Theory"
  | "Architecture"
  | "Ecology";

export type Puzzle = {
  answer: string;
  explanation: string;
} & (
  | {
      type: "emoji";
      clue: string;
    }
  | {
      type: "word-scramble";
      clue: string;
    }
  | {
      type: "factoid";
      clue: string;
    }
);

export interface Concept {
  title: string;
  tldr: string;
  description: string;
  why_cool: string[];
  learn_more?: { title: string; url: string }[];
}

export interface DailyConcept {
  category: Category;
  puzzle: Puzzle;
  concept: Concept;
}
