'use server';
/**
 * @fileOverview Flow to generate an emoji riddle for a given concept.
 *
 * - generateEmojiRiddle - A function that generates an emoji riddle.
 * - GenerateEmojiRiddleInput - The input type for the generateEmojiRiddle function.
 * - GenerateEmojiRiddleOutput - The return type for the generateEmojiRiddle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEmojiRiddleInputSchema = z.object({
  conceptName: z.string().describe('The name of the concept for which to generate the emoji riddle.'),
  category: z.string().describe('The category of the concept (e.g., Science, History).'),
});
export type GenerateEmojiRiddleInput = z.infer<typeof GenerateEmojiRiddleInputSchema>;

const GenerateEmojiRiddleOutputSchema = z.object({
  riddle: z.string().describe('The emoji riddle representing the concept.'),
});
export type GenerateEmojiRiddleOutput = z.infer<typeof GenerateEmojiRiddleOutputSchema>;

export async function generateEmojiRiddle(input: GenerateEmojiRiddleInput): Promise<GenerateEmojiRiddleOutput> {
  return generateEmojiRiddleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateEmojiRiddlePrompt',
  input: {schema: GenerateEmojiRiddleInputSchema},
  output: {schema: GenerateEmojiRiddleOutputSchema},
  prompt: `You are an expert at creating fun and engaging emoji riddles.

  Create an emoji riddle for the following concept:

  Concept Name: {{{conceptName}}}
  Category: {{{category}}}

The emoji riddle should be creative and relevant to the concept.

Output the emoji riddle as a single string.
  `,
});

const generateEmojiRiddleFlow = ai.defineFlow(
  {
    name: 'generateEmojiRiddleFlow',
    inputSchema: GenerateEmojiRiddleInputSchema,
    outputSchema: GenerateEmojiRiddleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
