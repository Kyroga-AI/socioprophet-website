import { Box, Database, BarChart3, Crosshair, type LucideIcon } from "lucide-react";

export interface Capability {
  title: string;
  body: string;
}

export interface ComparisonRow {
  label: string;
  us: string;
  them: string;
}

export interface Tier {
  name: string;
  body: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  icon: LucideIcon;
  intro: string;
  capabilities: Capability[];
  highlights: string[];
  notList?: string[];
  comparisonTitle?: string;
  comparisonThem?: string;
  comparison?: ComparisonRow[];
  tiersTitle?: string;
  tiers?: Tier[];
}

export const PRODUCTS: Product[] = [
  {
    slug: "noetica",
    name: "Noetica",
    tagline: "ChatGPT you can hand to a regulator",
    icon: Box,
    intro:
      "Noetica is a governed AI workspace that runs inside your own environment — the most accessible entry point into the SocioProphet platform. It delivers the full power of frontier AI — research, analysis, writing, reasoning — while keeping every piece of data on your device and producing a signed evidence record of every interaction.",
    capabilities: [
      {
        title: "Start with what you already use",
        body: "Claude, GPT, Gemini, Llama, Mistral, and Perplexity integrated out of the box — bring your existing API key and keep working, under the same governance and evidence controls.",
      },
      {
        title: "Governed model choir",
        body: "Curated open-weight frontier models, hardened and run entirely inside your environment.",
      },
      {
        title: "Local-first, on your hardware",
        body: "Built on Tauri — compiled Rust, not Electron — with an install of roughly 85MB. Runs on the user's own device.",
      },
      {
        title: "Offline capability",
        body: "Operates fully air-gapped when your environment demands it. No outbound calls required.",
      },
      {
        title: "Hellagraph builds automatically",
        body: "Your organisational knowledge graph grows in the background as you work — no manual curation, and full export in standard formats at any time.",
      },
      {
        title: "Source attribution",
        body: "Every factual claim cites its exact location in your internal documentation.",
      },
      {
        title: "Exodus migration",
        body: "Bring your existing Claude and ChatGPT history, prompts, and workflows across without lock-in or rework.",
      },
    ],
    highlights: [
      "Nothing you type ever trains anyone else's model",
      "Cryptographically signed, replayable interactions",
      "Works offline. Exports your knowledge graph anytime. No lock-in.",
    ],
    notList: [
      "Not a headless API you have to wire up yourself",
      "Not a thin RAG backend bolted onto a public model",
      "Not a tool that quietly phones home with your data",
    ],
  },
  {
    slug: "hellagraph",
    name: "Hellagraph",
    tagline: "The knowledge infrastructure that learns your organisation",
    icon: Database,
    intro:
      "Hellagraph is the knowledge layer beneath everything SocioProphet does — a proprietary hypergraph database storing structured conceptual relationships across a 22-dimension domain model. Not just what is semantically similar — what things mean to each other, within your organisation's specific domain. It builds automatically as your people work, compounds over time, and belongs entirely to you.",
    capabilities: [
      {
        title: "22-dimension domain model",
        body: "Captures the relationships a flat vector store simply cannot represent — what things mean to each other in your domain.",
      },
      {
        title: "Compounds automatically",
        body: "The graph grows through use, without manual curation. The longer you use the platform, the more valuable your brain becomes.",
      },
      {
        title: "Vector packs",
        body: "Composable knowledge bundles for fast, scoped, permission-aware retrieval.",
      },
      {
        title: "Brain-build sequence",
        body: "A managed process that ingests and structures your institutional knowledge end to end.",
      },
      {
        title: "Ontology mapping",
        body: "Automatically infers relationships between disparate internal documents.",
      },
      {
        title: "Policy-constrained merging",
        body: "Entity merges are governed decisions — policy can veto even high-confidence links, and every merge is reversible with a full unmerge path.",
      },
      {
        title: "Access segregation",
        body: "Information barriers enforced at the graph layer, not just the interface.",
      },
      {
        title: "Portable export",
        body: "Full extraction of your graph in standard formats — zero vendor lock-in.",
      },
    ],
    highlights: [
      "It's your brain. You built it. You own it.",
      "Safe linkage: resolve carefully, merge cautiously, prove what did not leak",
      "Export the entire graph at any time, in standard formats",
    ],
    comparisonTitle: "Hellagraph vs. vector databases & Neo4j",
    comparisonThem: "Vector DB / Neo4j",
    comparison: [
      { label: "Relationship depth", us: "22-dimension hypergraph", them: "Flat vector similarity" },
      { label: "Ownership", us: "Full export, no lock-in", them: "Tied to the vendor store" },
      { label: "Access control", us: "Graph-layer segregation", them: "App-layer filtering" },
      { label: "Grounding", us: "Structured + semantic", them: "Semantic only" },
    ],
  },
  {
    slug: "prophet-platform",
    name: "Prophet Platform",
    tagline: "The organisational admin and control harness",
    icon: BarChart3,
    intro:
      "The Prophet Platform is the control harness that turns governed AI from a workspace into an organisation-wide capability — Chinese-walled agent orchestration, fine-tuning on your own data, and model lifecycle management, delivered as a managed service so you never need to build an internal AI team.",
    capabilities: [
      {
        title: "Chinese-walled agent orchestration",
        body: "Information barriers — between fund mandates, engagements, or lines of business — enforced at the platform level, not the interface.",
      },
      {
        title: "In-perimeter fine-tuning",
        body: "Train on proprietary data without it ever leaving your environment.",
      },
      {
        title: "Model lifecycle management",
        body: "Quarterly model updates, new model family assessments, and managed migrations. You own the upgrade decision; we manage the execution.",
      },
      {
        title: "Agent orchestration",
        body: "Role-bounded agent workflows with capability routing and audit-friendly operator state — high-risk actions require approval, never silent execution.",
      },
      {
        title: "Brain-build managed service",
        body: "We build and maintain your Hellagraph knowledge graph on your behalf.",
      },
      {
        title: "Model evaluation",
        body: "Automated benchmarks to prove model safety and accuracy to risk committees.",
      },
      {
        title: "API gateway",
        body: "Securely expose governed AI endpoints to your internal applications.",
      },
    ],
    highlights: [
      "Frontier capability without an internal AI arms race",
      "Every workflow inherits the evidence fabric",
      "You own the models and the knowledge graph",
    ],
    tiersTitle: "How engagements are structured",
    tiers: [
      {
        name: "Team",
        body: "Fine-tuning and agent orchestration scoped to a single business unit.",
      },
      {
        name: "Division",
        body: "Multi-team orchestration with the managed brain-build service included.",
      },
      {
        name: "Enterprise",
        body: "An organisation-wide intelligence layer with dedicated deployment engineering.",
      },
    ],
  },
  {
    slug: "scope-d",
    name: "SCOPE-D",
    tagline: "Adversarial AI testing — evidence, not reports",
    icon: Crosshair,
    intro:
      "Before your AI goes into production — or before your regulator examines it — SCOPE-D proves it is not exploitable. Governed purple-team testing with fail-closed engagement policies and tamper-evident cryptographic receipts of every test conducted and every vulnerability found. The output is not a report. It is evidence.",
    capabilities: [
      {
        title: "Governed purple-team simulation",
        body: "Adversarial testing of your production AI systems under explicit, governed engagement rules — not ad hoc red-teaming.",
      },
      {
        title: "Fail-closed engagement policies",
        body: "Testing halts safely by default. No engagement proceeds outside its authorised scope.",
      },
      {
        title: "Tamper-evident receipts",
        body: "Every test conducted, every vulnerability identified, and every remediation applied is recorded with a cryptographic receipt.",
      },
      {
        title: "Pre-examination confidence",
        body: "When the regulator asks how you know your AI is safe, the answer is a cryptographic proof chain — not a policy document.",
      },
    ],
    highlights: [
      "The output is not a report. It is evidence.",
      "Structural proof of what was tested and what was found",
      "Built for CISOs, security teams, and board-level assurance",
    ],
    notList: [
      "Not a PDF penetration-test report",
      "Not an unaccountable red team with no evidence trail",
      "Not a one-off exercise — testing is governed and repeatable",
    ],
  },
];

export function getProduct(slug: string | undefined): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
