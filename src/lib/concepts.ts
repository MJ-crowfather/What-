import type { DailyConcept } from "@/types";

export const concepts: DailyConcept[] = [
  {
    category: "Science",
    puzzle: {
      type: "emoji",
      clue: "🐱‍👤📦☢️",
      answer: "Schrodinger's Cat",
    },
    concept: {
      title: "Schrödinger's Cat",
      tldr: "A famous thought experiment illustrating the paradox of quantum superposition.",
      description:
        "Austrian physicist Erwin Schrödinger designed this thought experiment in 1935. It imagines a cat, a flask of poison, and a radioactive source placed in a sealed box. If an internal monitor detects radioactivity, the flask is shattered, poisoning the cat. Quantum mechanics suggests that after a while, the cat is in a state of being simultaneously alive and dead until the box is opened and the cat is observed.",
      why_cool: [
        "It makes the bizarre nature of quantum mechanics tangible and debatable.",
        "It highlights the 'measurement problem' – how or why observation collapses a quantum state.",
        "It has transcended physics to become a cultural touchstone for uncertainty.",
      ],
      learn_more:
        "https://en.wikipedia.org/wiki/Schr%C3%B6dinger%27s_cat",
    },
  },
  {
    category: "History",
    puzzle: {
      type: "emoji",
      clue: "🐴🎁🏛️🔥",
      answer: "Trojan Horse",
    },
    concept: {
      title: "The Trojan Horse",
      tldr: "A tale from the Trojan War about a deceptive wooden horse used to conquer the city of Troy.",
      description:
        "As told in the ancient Greek epic the 'Aeneid', after a fruitless 10-year siege, the Greeks constructed a huge wooden horse and hid a select force of men inside. They pretended to sail away, and the Trojans pulled the horse into their city as a victory trophy. That night, the Greek soldiers crept out, opened the gates for the rest of their army, and destroyed the city, decisively ending the war.",
      why_cool: [
        "It's the ultimate story of winning through cleverness, not just brute force.",
        "The term 'Trojan Horse' is now a widespread metaphor for any trick that involves getting an enemy to invite an attacker into a secure space.",
        "It blurs the line between myth and history, as archaeological evidence at the site of Troy suggests the city was indeed destroyed in a war.",
      ],
      learn_more: "https://en.wikipedia.org/wiki/Trojan_Horse",
    },
  },
  {
    category: "International Relations",
    puzzle: {
      type: "emoji",
      clue: "🤝🤔🎲🏆",
      answer: "Game Theory",
    },
    concept: {
      title: "Game Theory",
      tldr: "The study of mathematical models of strategic interaction among rational decision-makers.",
      description:
        "Game theory is used in many fields, but it became a core tool in International Relations during the Cold War. It helps analyze situations where the outcome of one's choices depends on the choices of others. Concepts like the 'Prisoner's Dilemma' are used to understand arms races, international cooperation, and conflict strategy between countries, assuming each acts in its own self-interest.",
      why_cool: [
        "It provides a logical framework for understanding complex strategic decisions, from nuclear standoffs to trade negotiations.",
        "It shows how cooperation can emerge even between purely self-interested actors.",
        "It's applicable everywhere: in economics, politics, biology, and even everyday social situations.",
      ],
      learn_more: "https://en.wikipedia.org/wiki/Game_theory",
    },
  },
  {
    category: "Technical Advancements",
    puzzle: {
      type: "emoji",
      clue: "🧬✂️✍️",
      answer: "CRISPR",
    },
    concept: {
      title: "CRISPR",
      tldr: "A revolutionary gene-editing technology that allows scientists to alter DNA sequences.",
      description:
        "CRISPR-Cas9 is a technology adapted from a natural defense mechanism in bacteria. It acts like a pair of 'molecular scissors' that can be programmed to find a specific sequence of DNA and cut it. This allows scientists to remove, add, or alter sections of the DNA sequence, opening up vast possibilities for correcting genetic defects, treating diseases, and improving crops.",
      why_cool: [
        "It's far more precise, cheaper, and faster than previous gene-editing methods.",
        "It has the potential to cure hereditary diseases like sickle cell anemia and Huntington's disease.",
        "It raises profound ethical questions about the future of humanity and 'designer babies'.",
      ],
      learn_more: "https://en.wikipedia.org/wiki/CRISPR",
    },
  },
  {
    category: "Literature",
    puzzle: {
      type: "emoji",
      clue: "🧑‍ unassuming➡️🐉⚔️➡️🏆🧑‍ hero",
      answer: "The Hero's Journey",
    },
    concept: {
      title: "The Hero's Journey",
      tldr: "A common narrative template that involves a hero who goes on an adventure, wins a victory, and comes home transformed.",
      description:
        "Popularized by mythologist Joseph Campbell in his book 'The Hero with a Thousand Faces', this framework describes a pattern found in countless myths, stories, and films. The typical journey involves stages like the Call to Adventure, Crossing the Threshold, a series of trials (the Road of a Thousand Trials), the Ultimate Boon (victory), and the Return Home with new wisdom or a treasure for their community.",
      why_cool: [
        "Once you know it, you see it everywhere, from Star Wars (Luke Skywalker) and The Lord of the Rings (Frodo) to The Matrix (Neo).",
        "It speaks to a fundamental human experience of growth through challenge and adversity.",
        "It provides a powerful blueprint for storytellers to create resonant and satisfying narratives.",
      ],
      learn_more: "https://en.wikipedia.org/wiki/Hero%27s_journey",
    },
  },
];
