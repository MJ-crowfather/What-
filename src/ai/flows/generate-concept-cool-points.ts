'use server';
/**
 * @fileOverview This file defines a Genkit flow to generate 'Why It's Cool' bullet points for a given concept.
 *
 * - generateConceptCoolPoints - A function that generates the cool points for a concept.
 * - GenerateConceptCoolPointsInput - The input type for the generateConceptCoolPoints function.
 * - GenerateConceptCoolPointsOutput - The return type for the generateConceptCoolPoints function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateConceptCoolPointsInputSchema = z.object({
  title: z.string().describe('The title of the concept.'),
  description: z.string().describe('A short description of the concept.'),
});
export type GenerateConceptCoolPointsInput = z.infer<
  typeof GenerateConceptCoolPointsInputSchema
>;

const GenerateConceptCoolPointsOutputSchema = z.object({
  coolPoints: z
    .array(z.string())
    .describe('A list of 2-3 bullet points explaining why the concept is cool.'),
});
export type GenerateConceptCoolPointsOutput = z.infer<
  typeof GenerateConceptCoolPointsOutputSchema
>;

export async function generateConceptCoolPoints(
  input: GenerateConceptCoolPointsInput
): Promise<GenerateConceptCoolPointsOutput> {
  return generateConceptCoolPointsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateConceptCoolPointsPrompt',
  input: {schema: GenerateConceptCoolPointsInputSchema},
  output: {schema: GenerateConceptCoolPointsOutputSchema},
  prompt: `You are an AI assistant that generates a list of 2-3 bullet points explaining why a given concept is cool and interesting.

Concept Title: {{{title}}}
Concept Description: {{{description}}}

Why It's Cool:`,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const generateConceptCoolPointsFlow = ai.defineFlow(
  {
    name: 'generateConceptCoolPointsFlow',
    inputSchema: GenerateConceptCoolPointsInputSchema,
    outputSchema: GenerateConceptCoolPointsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
