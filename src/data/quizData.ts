export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  section: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is Rialo's primary goal as a Layer-1 blockchain?",
    options: [
      "To become the fastest blockchain for pure DeFi trading.",
      "To make dApp development as seamless and user-friendly as traditional Web2 app creation.",
      "To focus exclusively on anonymous, privacy-focused transactions.",
      "To replace Bitcoin as the world's premier store of value."
    ],
    correctAnswer: "To make dApp development as seamless and user-friendly as traditional Web2 app creation.",
    section: "The Basics"
  },
  {
    id: 2,
    question: "What was the former name of the company/lab building the Rialo blockchain?",
    options: [
      "Subzero Labs",
      "Sub-Zero Protocol",
      "Web3 Architects",
      "The Rialo Foundation"
    ],
    correctAnswer: "Subzero Labs",
    section: "The Basics"
  },
  {
    id: 3,
    question: "What critical Web3 component does Rialo aim to eliminate the need for, by building real-world connectivity directly into the core?",
    options: [
      "Smart Contracts",
      "Wallets",
      "Oracles (and complex external middleware like bridges/webhooks)",
      "Cryptographic Hashing"
    ],
    correctAnswer: "Oracles (and complex external middleware like bridges/webhooks)",
    section: "The Basics"
  },
  {
    id: 4,
    question: "What analogy is used to describe the difficulty of building dApps on current blockchains, even for simple real-world connections?",
    options: [
      "Like trying to power a car with a rubber band.",
      "Like trying to solve a Rubik's Cube while blindfolded.",
      "Like having to \"duct-tape together\" Oracles, Bridges, and off-chain servers.",
      "Like using a dial-up modem for a streaming service."
    ],
    correctAnswer: "Like having to \"duct-tape together\" Oracles, Bridges, and off-chain servers.",
    section: "The Basics"
  },
  {
    id: 5,
    question: "Which core architectural principle, borrowed from modern Web2 development, allows a Rialo transaction to automatically execute when an external condition is met (like a weather report or a confirmed payment)?",
    options: [
      "Deterministic Functionality",
      "Asynchronous Pooling",
      "Event-Driven Architecture",
      "Zero-Knowledge Proofs"
    ],
    correctAnswer: "Event-Driven Architecture",
    section: "Key Architectural Features"
  },
  {
    id: 6,
    question: "What is a practical example of Rialo's Event-Driven capability?",
    options: [
      "A complex game of chess running on a smart contract.",
      "A transaction that is manually signed by the user every time.",
      "A smart contract that automatically unlocks funds when a payment confirmation is received from Stripe.",
      "A dApp that only operates on weekends."
    ],
    correctAnswer: "A smart contract that automatically unlocks funds when a payment confirmation is received from Stripe.",
    section: "Key Architectural Features"
  },
  {
    id: 7,
    question: "Rialo's performance and scalability are boosted by compatibility with which two virtual machine/instruction set technologies?",
    options: [
      "EVM (Ethereum Virtual Machine) and x86",
      "RISC-V (Instruction Set) and Solana Virtual Machine (SVM)",
      "JVM (Java Virtual Machine) and EVM",
      "WASM (WebAssembly) and Hyperledger Fabric"
    ],
    correctAnswer: "RISC-V (Instruction Set) and Solana Virtual Machine (SVM)",
    section: "Key Architectural Features"
  },
  {
    id: 8,
    question: "For developers to achieve a \"Web2-Friendly\" experience, which feature does Rialo offer for direct web interactions?",
    options: [
      "Relying on a vast network of third-party indexers.",
      "Writing proprietary, new programming languages.",
      "Native web connectivity/webhooks to plug directly into APIs.",
      "Only supporting transactions via physical hardware wallets."
    ],
    correctAnswer: "Native web connectivity/webhooks to plug directly into APIs.",
    section: "Key Architectural Features"
  },
  {
    id: 9,
    question: "How does Rialo address the common Web3 hurdle of users needing to learn complex wallet operations?",
    options: [
      "By removing all wallet requirements.",
      "By requiring users to memorize a 100-word seed phrase.",
      "By enabling users to log in using familiar identities like social media accounts and email addresses.",
      "By creating a new, exclusive hardware wallet model."
    ],
    correctAnswer: "By enabling users to log in using familiar identities like social media accounts and email addresses.",
    section: "Key Architectural Features"
  },
  {
    id: 10,
    question: "What is a key Web2 user experience feature that Rialo supports to enhance usability?",
    options: [
      "Mandatory weekly account audits.",
      "2FA (Two-Factor Authentication) and timed transactions.",
      "Only supporting transactions in specific time zones.",
      "Using only command-line interfaces."
    ],
    correctAnswer: "2FA (Two-Factor Authentication) and timed transactions.",
    section: "Vision and Use Cases"
  },
  {
    id: 11,
    question: "By providing a \"vertically integrated full-stack solution,\" what developer pain point is Rialo solving?",
    options: [
      "The need to write faster code.",
      "The need to choose a programming language.",
      "The friction of fragmented infrastructure that requires stitching together many third-party services.",
      "The challenge of marketing their dApps to users."
    ],
    correctAnswer: "The friction of fragmented infrastructure that requires stitching together many third-party services.",
    section: "Vision and Use Cases"
  },
  {
    id: 12,
    question: "Rialo aims to unlock powerful new primitives for use cases. Which of the following is not mentioned as a potential use case?",
    options: [
      "RWA (Real World Asset) issuance",
      "Agent-based trading",
      "Cross-domain oracles",
      "Mining of new cryptographic currencies with Proof-of-Work"
    ],
    correctAnswer: "Mining of new cryptographic currencies with Proof-of-Work",
    section: "Vision and Use Cases"
  },
  {
    id: 13,
    question: "In a system built on Rialo's event-driven architecture, what can be triggered without needing off-chain monitoring, servers, or polling?",
    options: [
      "The price of a token becoming unstable.",
      "A user deciding to buy a token.",
      "An on-chain transaction/logic execution based on a real-world event (like shipment arrival).",
      "A software update on a different blockchain."
    ],
    correctAnswer: "An on-chain transaction/logic execution based on a real-world event (like shipment arrival).",
    section: "Vision and Use Cases"
  },
  {
    id: 14,
    question: "What does Rialo aim to deliver that \"match or exceed Web2 standards\" in the final application?",
    options: [
      "Decentralization and Immutability.",
      "Low gas fees and high transaction volume.",
      "Speed, Usability, and Cost.",
      "Only speculative trading use cases."
    ],
    correctAnswer: "Speed, Usability, and Cost.",
    section: "Vision and Use Cases"
  },
  {
    id: 15,
    question: "Rialo's privacy focus includes what built-in capability?",
    options: [
      "Anonymous VPN services.",
      "Support for encrypted messaging.",
      "Mandating all transactions be public.",
      "Physically destroying old transaction data."
    ],
    correctAnswer: "Support for encrypted messaging.",
    section: "Vision and Use Cases"
  },
  {
    id: 16,
    question: "The developers behind Rialo, Ade Adepoju and Lu Zhang, are noted for their foundational roles in the development of which other well-known network?",
    options: [
      "Ethereum (ETH)",
      "Avalanche (AVAX)",
      "Sui (SUI)",
      "Cardano (ADA)"
    ],
    correctAnswer: "Sui (SUI)",
    section: "Vision and Use Cases"
  }
];

export const SURPRISE_THRESHOLD = 12; // Number of correct answers needed to unlock surprise
