import type { DailyConcept } from "@/types";

export const concepts: DailyConcept[] = [
  {
    category: "Science",
    puzzle: {
      type: "emoji",
      clue: "🐱‍👤📦☢️",
      answer: "Schrodinger's Cat",
      explanation: "The emoji sequence shows a ninja cat (representing secrecy/mystery), a box, and a radioactive symbol. This represents the cat in a box whose life is tied to a random radioactive decay, the core of the thought experiment.",
    },
    concept: {
      title: "Schrödinger's Cat",
      tldr: "A famous thought experiment illustrating the paradox of quantum superposition.",
      description:
        "Schrödinger's Cat is a thought experiment devised by Austrian-Irish physicist Erwin Schrödinger in 1935. It's not a real experiment but an illustration of a core concept in quantum mechanics: superposition. In the scenario, a cat, a flask of poison, and a radioactive source are placed in a sealed box. If an internal monitor detects radioactivity (a random quantum event), the flask is shattered, releasing the poison that kills the cat. The Copenhagen interpretation of quantum mechanics implies that after a while, the cat is simultaneously alive and dead in a state of quantum superposition. Only when one looks in the box (i.e., makes an observation) does the cat's state collapse into being either alive or dead. This highlights the strange, non-intuitive nature of reality at the quantum level and the measurement problem.",
      why_cool: [
        "It makes the bizarre nature of quantum mechanics tangible and debatable.",
        "It highlights the 'measurement problem' – how or why observation collapses a quantum state from multiple possibilities into one.",
        "It has transcended physics to become a cultural touchstone for uncertainty and paradox.",
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
      explanation: "A horse, a gift box, a classical building (representing Troy), and fire. This sequence illustrates the story of the Greeks gifting a wooden horse to Troy, which ultimately led to the city's destruction.",
    },
    concept: {
      title: "The Trojan Horse",
      tldr: "A tale from the Trojan War about a deceptive wooden horse used to conquer the city of Troy.",
      description:
        "The Trojan Horse is a pivotal story from the legendary Trojan War. After a fruitless 10-year siege of the city of Troy, the Greeks devised a cunning plan. They constructed a massive wooden horse and hid a select force of their best soldiers inside. The Greek fleet then pretended to sail away in defeat. The Trojans, believing the horse to be a victory trophy and a peace offering to the gods, pulled it into their fortified city. That night, as the Trojans celebrated, the hidden Greek soldiers emerged, opened the city gates for their returning army, and the Greeks decisively conquered Troy. This story is the origin of the term 'Trojan Horse,' meaning a trick or strategy that causes a target to invite a foe into a securely protected bastion or place.",
      why_cool: [
        "It's the ultimate story of winning through cleverness, not just brute force.",
        "The term 'Trojan Horse' is now a widespread metaphor for any malware or trick that involves getting an enemy to invite an attacker into a secure space.",
        "It blurs the line between myth and history, as archaeological evidence at the site of Troy suggests the city was indeed destroyed in a violent conflict.",
      ],
      learn_more: "https://en.wikipedia.org/wiki/Trojan_Horse",
    },
  },
  {
    category: "International Relations",
    puzzle: {
      type: "factoid",
      clue: "This field of study uses mathematical models to figure out the best strategies in situations where players' choices affect each other, like in a game of chess or a political negotiation. What is it called?",
      answer: "Game Theory",
      explanation: "The clue describes the fundamental concept of Game Theory: using math to model strategic interactions between 'players' (which can be people, companies, or countries) to predict outcomes and find optimal strategies.",
    },
    concept: {
      title: "Game Theory",
      tldr: "The study of mathematical models of strategic interaction among rational decision-makers.",
      description:
        "Game Theory is a theoretical framework for conceiving social situations among competing players. In more rigorous terms, it is the study of mathematical models of strategic interactions among rational agents. It has applications in all fields of social science, as well as in logic, systems science and computer science. A key concept is the 'game,' which is any situation where there are multiple participants ('players') and the outcome for each player depends not only on their own actions but on the actions of others. Game theory helps explain and predict how these players will behave. It analyzes strategies, cooperation, conflict, and decision-making in a huge variety of contexts, from economics and politics to biology and psychology.",
      why_cool: [
        "It provides a logical framework for understanding complex strategic decisions, from nuclear standoffs (like the Cold War) to simple price-setting by companies.",
        "It introduces fascinating concepts like the 'Prisoner's Dilemma,' which shows how rational individual choices can lead to a worse outcome for everyone.",
        "It's applicable everywhere: in economics, politics, biology (evolutionary game theory), and even everyday social situations.",
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
      explanation: "A DNA strand, scissors, and a hand writing. This represents the core function of CRISPR technology: cutting and editing DNA sequences.",
    },
    concept: {
      title: "CRISPR",
      tldr: "A revolutionary gene-editing technology that allows scientists to alter DNA sequences.",
      description:
        "CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) is a revolutionary gene-editing technology adapted from a natural defense system in bacteria. Bacteria use CRISPR-associated proteins, like Cas9, to find and chop up the DNA of invading viruses. Scientists have harnessed this system to create a tool that can be programmed to find a specific DNA sequence inside a cell and then make a precise cut. This allows researchers to add, remove, or alter genetic material at particular locations in the genome. It is faster, cheaper, more accurate, and more efficient than other existing genome editing methods.",
      why_cool: [
        "It's like a 'find and replace' function for DNA, allowing for unprecedented precision in genetic manipulation.",
        "It has the potential to cure hereditary diseases like cystic fibrosis, sickle cell anemia, and Huntington's disease by correcting the faulty genes.",
        "It raises profound ethical questions about the future of humanity, including the possibility of 'designer babies' and genetic enhancement.",
      ],
      learn_more: "https://en.wikipedia.org/wiki/CRISPR",
    },
  },
  {
    category: "Literature",
    puzzle: {
      type: "word-scramble",
      clue: "EHT REOH'S YENROUJ",
      answer: "The Hero's Journey",
      explanation: "The letters are a simple scramble of 'The Hero's Journey,' a foundational concept in storytelling.",
    },
    concept: {
      title: "The Hero's Journey",
      tldr: "A common narrative template that involves a hero who goes on an adventure, wins a victory, and comes home transformed.",
      description:
        "The Hero's Journey, or monomyth, is a common narrative archetype, or story template, that involves a hero who is called to adventure, enters an unknown world of trials and challenges, wins a decisive victory, and then returns home changed or transformed. The concept was articulated by mythologist Joseph Campbell in his book 'The Hero with a Thousand Faces' (1949). He argued that countless myths and stories from around the world follow this fundamental structure. The journey is typically broken down into several stages, such as the Call to Adventure, the Refusal of the Call, Meeting the Mentor, Crossing the Threshold, Tests, Allies, and Enemies, the Ordeal, and the Return with the Elixir.",
      why_cool: [
        "Once you know it, you see it everywhere, from Star Wars (Luke Skywalker) and The Lord of the Rings (Frodo) to The Lion King (Simba) and The Matrix (Neo).",
        "It speaks to a fundamental human experience of growth, transformation, and overcoming adversity.",
        "It provides a powerful blueprint for storytellers to create resonant and satisfying narratives that connect with audiences on a deep, psychological level.",
      ],
      learn_more: "https://en.wikipedia.org/wiki/Hero%27s_journey",
    },
  },
];
