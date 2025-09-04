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
        "Schrödinger's Cat is a thought experiment, sometimes described as a paradox, devised by Austrian-Irish physicist Erwin Schrödinger in 1935. It illustrates what he saw as the problem of the Copenhagen interpretation of quantum mechanics applied to everyday objects. The scenario presents a hypothetical cat that may be simultaneously both alive and dead, a state known as a quantum superposition, as a result of being linked to a random subatomic event that may or may not occur. The experiment is a cornerstone of quantum mechanics and highlights the strange nature of reality at the quantum level.",
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
        "The Trojan Horse is a story from the Trojan War about the subterfuge that the Greeks used to enter the independent city of Troy and win the war. In the canonical version, after a fruitless 10-year siege, the Greeks constructed a huge wooden horse and hid a select force of men inside, including Odysseus. The Greeks pretended to sail away, and the Trojans pulled the horse into their city as a victory trophy. That night the Greek force crept out of the horse and opened the gates for the rest of the Greek army, which had sailed back under cover of night. The Greeks entered and destroyed the city of Troy, ending the war.",
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
        "Game theory is the study of mathematical models of strategic interactions among rational agents. It has applications in all fields of social science, as well as in logic, systems science and computer science. Originally, it addressed two-person zero-sum games, in which each participant's gains or losses are exactly balanced by those of the other participants. In the 21st century, game theory applies to a wide range of behavioral relations; it is now an umbrella term for the science of logical decision making in humans, animals, and computers.",
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
        "CRISPR is a family of DNA sequences found in the genomes of prokaryotic organisms such as bacteria and archaea. These sequences are derived from DNA fragments of bacteriophages that had previously infected the prokaryote and are used to detect and destroy DNA from similar bacteriophages during subsequent infections. Hence these sequences play a key role in the antiviral defense system of prokaryotes. CRISPR-Cas9 technology was adapted from this system to create a powerful gene editing tool. It can be programmed to find and alter specific sections of DNA, opening up vast possibilities for correcting genetic defects, treating diseases, and improving crops.",
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
        "In narratology and comparative mythology, the hero's journey, or the monomyth, is the common template of stories that involve a hero who goes on an adventure, is victorious in a decisive crisis, and comes home changed or transformed. The concept was popularized by Joseph Campbell in his book 'The Hero with a Thousand Faces' (1949). Campbell's work has been influential on many artists and storytellers, and his ideas are widely used in filmmaking, literature, and other creative arts.",
      why_cool: [
        "Once you know it, you see it everywhere, from Star Wars (Luke Skywalker) and The Lord of the Rings (Frodo) to The Matrix (Neo).",
        "It speaks to a fundamental human experience of growth through challenge and adversity.",
        "It provides a powerful blueprint for storytellers to create resonant and satisfying narratives.",
      ],
      learn_more: "https://en.wikipedia.org/wiki/Hero%27s_journey",
    },
  },
];
