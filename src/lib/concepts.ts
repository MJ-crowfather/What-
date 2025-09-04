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
        "It brilliantly translates the bizarre, abstract nature of quantum mechanics into a tangible and debatable scenario. Instead of just talking about atoms being in two places at once, we're forced to confront the idea of a cat being both alive and dead, making the philosophical implications of quantum theory impossible to ignore.",
        "It brings the 'measurement problem' into sharp focus. The experiment questions how or why observation forces a quantum system to 'choose' a single state out of many possibilities. It probes the very definition of 'measurement' and whether consciousness plays a role in shaping reality.",
        "It has permeated popular culture as a powerful metaphor for uncertainty, paradox, and situations that can't be resolved until they are directly observed. It's a piece of physics that has become a philosophical touchstone for writers, artists, and thinkers everywhere.",
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
        "It's the ultimate underdog story of brains over brawn. The Greeks couldn't win by force after a decade of trying, so they won through an audacious act of deception. It celebrates strategic thinking and creativity in warfare, proving that the mind can be the most powerful weapon.",
        "The story gave us the modern term 'Trojan Horse,' which is now a fundamental concept in cybersecurity. It perfectly describes malware that disguises itself as legitimate software to trick users into installing it, thereby gaining access to their systems from the inside.",
        "It exists in the fascinating gray area between myth and history. While the giant horse is likely a poetic embellishment, archaeological evidence at the site of ancient Troy shows that the city was indeed destroyed by warfare. The story might be a metaphorical telling of how the Greeks breached the city's seemingly impenetrable defenses, perhaps using a siege engine that resembled a horse.",
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
        "It provides a powerful logical framework for understanding why rational actors (be they people, corporations, or nations) make the decisions they do. It was instrumental in shaping nuclear strategy during the Cold War, helping both sides understand the logic of Mutually Assured Destruction (MAD).",
        "It introduced the world to fascinating and counter-intuitive concepts like the 'Prisoner's Dilemma,' which demonstrates how two individuals acting in their own self-interest can result in a worse outcome than if they had cooperated. This has profound implications for economics, politics, and social behavior.",
        "Its applications are incredibly diverse, reaching far beyond economics. Evolutionary biologists use it to understand animal behavior and evolution, computer scientists use it to design artificial intelligence, and it can even be applied to everyday social situations to analyze why we behave the way we do.",
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
        "It's essentially a biological 'find and replace' function for the code of life. Its precision and ease of use are so groundbreaking that it has democratized genetic engineering, making it accessible to labs around the world, not just a select few.",
        "It holds the immense potential to eradicate genetic diseases that have plagued humanity for millennia. By correcting faulty genes, CRISPR could one day provide cures for conditions like cystic fibrosis, sickle cell anemia, and Huntington's disease, changing medicine forever.",
        "It forces us to confront some of the most profound ethical questions of our time. The possibility of editing the human germline (sperm and eggs) opens the door to 'designer babies' and inheritable genetic enhancements, raising crucial debates about the future of human evolution and social equity.",
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
        "It's a universal storytelling blueprint that you can find in almost every culture and era. Once you learn its structure, you'll see it everywhere, from ancient myths like 'The Odyssey' to modern blockbusters like 'Star Wars,' 'The Matrix,' and the 'Harry Potter' series. It's the secret sauce that makes these stories feel so satisfying.",
        "It mirrors our own psychological development. The journey of the hero—leaving the comfortable, facing the unknown, conquering fears, and returning with newfound wisdom—is a powerful metaphor for our own lives, struggles, and processes of personal growth and transformation.",
        "It provides a masterclass in effective storytelling. For writers, filmmakers, and creators, the Hero's Journey offers a reliable framework for crafting compelling narratives that resonate deeply with audiences, ensuring that the story hits all the right emotional and psychological notes.",
      ],
      learn_more: "https://en.wikipedia.org/wiki/Hero%27s_journey",
    },
  },
];
