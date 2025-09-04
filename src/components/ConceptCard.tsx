"use client";

import type { Concept, Category } from "@/types";
import { ArrowLeft, ArrowUpRight, Lightbulb, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ConceptCardProps {
  concept: Concept;
  category: Category;
  isSkipped?: boolean;
  guessCount: number;
  onGoBack?: () => void;
}

export function ConceptCard({ concept, category, isSkipped = false, guessCount, onGoBack }: ConceptCardProps) {
  const { toast } = useToast();

  const handleShare = () => {
    const shareText = `I solved today's What? in ${guessCount} guess${guessCount > 1 ? 'es' : ''}! WHAT'S your score?`;
    navigator.clipboard.writeText(shareText);
    toast({
      title: "Copied to clipboard!",
      description: "You can now share your score.",
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto border-2 bg-card/80 backdrop-blur-sm animate-in fade-in duration-700">
      <CardHeader className="p-6 md:p-8">
        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
          <CardTitle className="font-headline text-4xl md:text-5xl !leading-tight text-foreground">
            {concept.title}
          </CardTitle>
          <Badge
            variant="default"
            className="bg-primary text-primary-foreground text-sm self-start sm:self-auto"
          >
            {category}
          </Badge>
        </div>
        <CardDescription className="text-lg md:text-xl italic pt-2">
          "{concept.tldr}"
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 md:p-8 pt-0 space-y-6 text-base">
        <Separator />
        <p className="text-foreground/90 leading-relaxed">
          {concept.description}
        </p>
        <div>
          <h3 className="font-headline text-xl font-bold mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-accent" />
            Why It's Cool
          </h3>
          <ul className="space-y-3 text-foreground/80">
            {concept.why_cool.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="p-6 md:p-8 pt-0 flex flex-wrap gap-4 justify-between items-center">
        <div className="flex gap-4">
          {isSkipped && (
            <Button onClick={onGoBack} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              See Puzzle Breakdown
            </Button>
          )}
          {!isSkipped && (
            <Button onClick={handleShare} variant="secondary">
              <Share2 className="w-4 h-4 mr-2" />
              Share Score
            </Button>
          )}
        </div>
        {concept.learn_more && (
          <Button asChild variant="link" className="p-0 h-auto text-base">
            <a
              href={concept.learn_more}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
