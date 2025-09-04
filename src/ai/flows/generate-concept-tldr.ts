// src/ai/flows/generate-concept-tldr.ts
'use server';

/**
 * @fileOverview Generates a TL;DR (one-line explanation) for a given concept.
 *
 * - generateConceptTldr - A function that generates the TL;DR.
 * - GenerateConceptTldrInput - The input type for the generateConceptTldr function.
 * - GenerateConceptTldrOutput - The return type for the generateConceptTldr function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateConceptTldrInputSchema = z.object({
  conceptDescription: z.string().describe('A detailed description of the concept.'),
});
export type GenerateConceptTldrInput = z.infer<
  typeof GenerateConceptTldrInputSchema
>;

const GenerateConceptTldrOutputSchema = z.object({
  tldr: z.string().describe('A one-line TL;DR explanation of the concept.'),
});
export type GenerateConceptTldrOutput = z.infer<
  typeof GenerateConceptTldrOutputSchema
>;

export async function generateConceptTldr(
  input: GenerateConceptTldrInput
): Promise<GenerateConceptTldrOutput> {
  return generateConceptTldrFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateConceptTldrPrompt',
  input: {schema: GenerateConceptTldrInputSchema},
  output: {schema: GenerateConceptTldrOutputSchema},
  prompt: `You are an expert at summarizing complex topics into a single concise sentence.

  Please provide a one-line TL;DR explanation of the following concept:

  {{conceptDescription}}
  `,
});

const generateConceptTldrFlow = ai.defineFlow(
  {
    name: 'generateConceptTldrFlow',
    inputSchema: GenerateConceptTldrInputSchema,
    outputSchema: GenerateConceptTldrOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
