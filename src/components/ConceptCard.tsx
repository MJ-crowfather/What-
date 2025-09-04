"use client";

import type { Concept, Category } from "@/types";
import { ArrowUpRight, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
}

export function ConceptCard({ concept, category }: ConceptCardProps) {
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
          <ul className="space-y-2 list-disc list-inside text-foreground/80">
            {concept.why_cool.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      {concept.learn_more && (
        <CardFooter className="p-6 md:p-8 pt-0">
          <Button asChild variant="link" className="p-0 h-auto text-base">
            <a
              href={concept.learn_more}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
