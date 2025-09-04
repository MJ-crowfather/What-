"use client";

import type { Concept, Category } from "@/types";
import {
  ArrowLeft,
  ArrowUpRight,
  BookMarked,
  Lightbulb,
  Share2,
} from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ConceptCardProps {
  concept: Concept;
  category: Category;
  isSkipped?: boolean;
  guessCount: number;
  isDaily: boolean;
  onGoBack?: () => void;
  onLearnNew: () => void;
  onDailyConcept: () => void;
}

export function ConceptCard({
  concept,
  category,
  isSkipped = false,
  guessCount,
  onGoBack,
  onLearnNew,
  onDailyConcept,
  isDaily,
}: ConceptCardProps) {
  const { toast } = useToast();

  const handleShare = () => {
    const emojis = ["💡", "🧠", "✨", "🧩", "🎯", "🤔"].slice(0, guessCount).join('');
    const shareText = `I solved today's What? in ${guessCount} guess${guessCount === 1 ? '' : 'es'}!\n${emojis}\n\nThink you can do better?`;

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
          <div className="flex-1">
            <div className="flex items-center gap-4">
               <CardTitle className="font-headline text-4xl md:text-5xl !leading-tight text-foreground">
                {concept.title}
              </CardTitle>
            </div>
             {!isDaily && (
              <Button
                onClick={onDailyConcept}
                variant="link"
                className="p-0 h-auto text-base mt-2"
              >
                Back to What? of the day
              </Button>
            )}
          </div>
          <Badge
            variant="default"
            className="bg-primary text-primary-foreground text-sm self-start sm:self-auto"
          >
            {category}
          </Badge>
        </div>
        <CardDescription className="text-lg md:text-xl italic pt-2 text-primary">
          "{concept.tldr}"
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 md:p-8 pt-0 space-y-6 text-base">
        <Separator className="bg-primary" />
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
        <div className="flex flex-wrap gap-4">
          <Button onClick={onLearnNew} variant="default">
            Learn Something New!
          </Button>

          {isSkipped && (
            <Button onClick={onGoBack} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              See Puzzle Breakdown
            </Button>
          )}
          {!isSkipped && isDaily && (
            <Button
              onClick={handleShare}
              variant="secondary"
              className="bg-foreground text-background hover:bg-foreground/90"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Score
            </Button>
          )}
        </div>
        {concept.learn_more && concept.learn_more.length > 0 && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="link" className="p-0 h-auto text-base">
                Learn More <BookMarked className="w-4 h-4 ml-1" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-card border-primary">
              <DialogHeader>
                <DialogTitle className="font-headline text-2xl text-primary">
                  Learn More about {concept.title}
                </DialogTitle>
                <DialogDescription>
                  Here are some top resources to dive deeper.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4">
                {concept.learn_more.map((source, index) => (
                  <a
                    key={index}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3 rounded-md bg-secondary hover:bg-accent transition-colors"
                  >
                    <span className="font-medium text-secondary-foreground group-hover:text-accent-foreground">
                      {source.title}
                    </span>
                    <ArrowUpRight className="w-4 h-4 ml-2 text-muted-foreground group-hover:text-accent-foreground transition-transform group-hover:translate-x-1" />
                  </a>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        )}
      </CardFooter>
    </Card>
  );
}
