import {
  Landmark,
  TrendingUp,
  Shield,
  HeartPulse,
  Blocks,
  Factory,
  Building2,
  type LucideIcon,
} from "lucide-react";

export interface RelatedLink {
  name: string;
  href: string;
}

export interface Solution {
  slug: string;
  name: string;
  tagline: string;
  icon: LucideIcon;
  intro: string;
  problemHeading: string;
  problem: string;
  solutions: string[];
  proofs: string[];
  drivers: string[];
  related: RelatedLink[];
}

export const SOLUTIONS: Solution[] = [
  {
    slug: "banking",
    name: "Banking",
    tagline: "Governed AI inside the firewall",
    icon: Landmark,
    intro:
      "Tier-1 banks cannot send proprietary strategy, client PII, or internal communications to public AI — yet falling behind on AI is its own risk. SocioProphet delivers frontier capability inside the perimeter.",
    problemHeading: "Adoption is already happening without governance",
    problem:
      "Your portfolio managers and analysts are already using public AI. Chinese walls, model risk policies, and examiner expectations all assume you can show exactly what an AI did. Public tools give you no such record.",
    solutions: [
      "Run frontier conversational AI entirely inside your private cloud — no data crosses the perimeter.",
      "Enforce information barriers at the knowledge-graph layer, not just the interface.",
      "Produce a signed, replayable record for every AI-assisted decision.",
      "Map AI usage to your existing model risk management framework.",
    ],
    proofs: [
      "Replay any AI-assisted decision for an examiner, exactly as it occurred.",
      "Demonstrate that information barriers held across every query.",
      "Prove no client PII or proprietary strategy left your control.",
    ],
    drivers: ["SR 26-2 (US Federal Reserve)", "APRA CPS 230 (Australia)", "FCA AI Framework (UK)"],
    related: [
      { name: "SR 26-2 Solution Brief", href: "/solutions/sr26-2" },
      { name: "Noetica", href: "/products/noetica" },
    ],
  },
  {
    slug: "asset-management",
    name: "Asset Management",
    tagline: "Proprietary strategy stays proprietary",
    icon: TrendingUp,
    intro:
      "Your alpha is your strategy. Asset managers cannot feed query theses to external models, and ASIC / SEC discoverability means every AI-assisted action may later be examined.",
    problemHeading: "Ungoverned tools, discoverable decisions",
    problem:
      "Portfolio managers use ungoverned tools, and regulators ask you to replay the reasoning. Feeding a thesis to a public model leaks your edge; having no AI at all leaves productivity on the table.",
    solutions: [
      "Synthesise market research and internal data without sending your thesis to an external model.",
      "Keep every proprietary strategy and signal inside your perimeter.",
      "Capture a discoverable, signed evidence trail for ASIC / SEC examinations.",
      "Maintain frontier model currency on a managed cadence — no internal AI arms race.",
    ],
    proofs: [
      "Produce a complete, signed record of AI-assisted reasoning on demand.",
      "Show exactly which data grounded each output.",
      "Prove proprietary strategies never reached a third-party endpoint.",
    ],
    drivers: ["ASIC (Australia)", "SEC (United States)", "MAS (Singapore)"],
    related: [
      { name: "Hellagraph", href: "/products/hellagraph" },
      { name: "Evidence", href: "/evidence" },
    ],
  },
  {
    slug: "insurance",
    name: "Insurance",
    tagline: "Defensible, explainable underwriting",
    icon: Shield,
    intro:
      "Actuarial science and underwriting require deterministic reasoning and defensible decisions. \u201cBlack box\u201d AI is unacceptable when assessing risk or processing claims.",
    problemHeading: "Risk decisions must be explainable, clause by clause",
    problem:
      "Model risk and actuarial AI governance demand that every decision be explainable to a regulator. Traffic-light dashboards collapse the uncertainty you are required to defend.",
    solutions: [
      "Carry uncertainty all the way to the decision point — no traffic-light oversimplification.",
      "Cite the exact policy clauses driving each AI recommendation.",
      "Keep PHI and policyholder data segregated inside your environment.",
      "Govern actuarial AI within your existing model risk framework.",
    ],
    proofs: [
      "Explain any AI-assisted risk assessment to a regulator, fully traced.",
      "Show the provenance of every claims recommendation.",
      "Demonstrate strict data segregation across lines of business.",
    ],
    drivers: ["DORA (Digital Operational Resilience Act)", "EU AI Act", "Solvency II Directive"],
    related: [
      { name: "Evidence", href: "/evidence" },
      { name: "Platform", href: "/platform" },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    tagline: "Frontier AI without touching PHI",
    icon: HeartPulse,
    intro:
      "Patient data (PHI) is the most strictly protected data class globally. Public AI endpoints are fundamentally incompatible with HIPAA and equivalent frameworks.",
    problemHeading: "PHI cannot touch a public endpoint",
    problem:
      "Public AI endpoints can't touch PHI, and clinical AI infers things it was never explicitly told — leaving you unable to show a regulator the difference between fact and inference.",
    solutions: [
      "Run models on your hardware so PHI never leaves your network.",
      "Analyse unstructured clinical data locally, with architectural controls that provide structural support for HIPAA obligations.",
      "Trace every inference back to its source for clinical and regulatory review.",
      "Automate medical coding and charting securely within the hospital network.",
    ],
    proofs: [
      "Guarantee zero PHI leakage with an architectural, not policy, control.",
      "Show provenance for every clinical AI output.",
      "Produce structural evidence that supports HIPAA / HITECH and GDPR obligations.",
    ],
    drivers: ["HIPAA / HITECH (US)", "GDPR (EU)", "EMA Regulations"],
    related: [
      { name: "Noetica", href: "/products/noetica" },
      { name: "Evidence", href: "/evidence" },
    ],
  },
  {
    slug: "software-providers",
    name: "Software Providers",
    tagline: "AI-powered platform extension",
    icon: Blocks,
    intro:
      "Your customers are asking for AI capabilities your platform doesn't deliver yet. SocioProphet integrates at the deepest level — your data model, your business logic, your domain — and turns your entire customer base into an AI-ready deployment. In months, not years.",
    problemHeading: "AI-native competitors, no internal ML team",
    problem:
      "Mid-market software companies face existential pressure from AI-native competitors — with no internal machine learning team and no reusable integration template. Bolting a chatbot onto your product is not a strategy.",
    solutions: [
      "Partner at the ontology level: your data schema and business logic become the foundation for AI reasoning.",
      "Convert your entire customer base into template deployments — one integration, many customers.",
      "Add governed AI intelligence without building an AI team or exposing customer data.",
      "Every deployment inherits the evidence fabric — governance your enterprise customers can verify.",
    ],
    proofs: [
      "Show enterprise customers a signed evidence trail for every AI action in your product.",
      "Prove customer data never leaves their environment.",
      "Demonstrate a concrete roadmap: managed model updates on a controlled cadence.",
    ],
    drivers: ["Customer retention", "New AI-enhanced revenue", "Platform defensibility"],
    related: [
      { name: "Prophet Platform", href: "/products/prophet-platform" },
      { name: "Hellagraph", href: "/products/hellagraph" },
    ],
  },
  {
    slug: "supply-chain",
    name: "Food Manufacturing & Supply Chain",
    tagline: "One governed pane of glass",
    icon: Factory,
    intro:
      "Supplier emails, ingredient specifications, pricing updates, and compliance documents arrive from dozens of sources daily — and sit disconnected in inboxes, spreadsheets, and shared drives. SocioProphet turns them into a governed supply chain intelligence layer.",
    problemHeading: "Product development runs on memory and inboxes",
    problem:
      "Recipe development relies on a manager's memory of what suppliers quoted last month and which ingredients meet current regulatory standards. Nothing is searchable, nothing compounds, and nothing can be audited.",
    solutions: [
      "Ingest supplier communications and map ingredient specifications to regulatory requirements automatically.",
      "Generate recipe candidates grounded in real supplier data — not hallucinated from generic training data.",
      "Build a knowledge graph of formulation preferences, supplier relationships, and compliance constraints as your team works.",
      "Scale through your existing ERP ontology — every deployment follows the same template, not bespoke integration.",
    ],
    proofs: [
      "Trace which supplier data informed each formulation decision.",
      "Show which regulatory standard was applied — and whether each output was retrieved or inferred.",
      "Give quality and compliance teams a full evidence trail for every AI-assisted decision.",
    ],
    drivers: ["Faster product development cycles", "Compounding supplier intelligence", "Traceable quality & compliance"],
    related: [
      { name: "Noetica", href: "/products/noetica" },
      { name: "Hellagraph", href: "/products/hellagraph" },
    ],
  },
  {
    slug: "government",
    name: "Local Councils & Government",
    tagline: "Community intelligence, citizen data sovereign",
    icon: Building2,
    intro:
      "Community input arrives from dozens of channels — social sentiment, meeting minutes, planning submissions, resident correspondence, service requests. SocioProphet consolidates it into a single governed view, with citizen data sovereignty maintained by architecture.",
    problemHeading: "Manual synthesis that cannot be audited",
    problem:
      "Today, synthesising community engagement happens manually, is inconsistent, and cannot be audited. And any AI answer must withstand public scrutiny on planning decisions — with citizen data never leaving the council's environment.",
    solutions: [
      "Consolidate all community engagement data into one governed view — dump everything in, get a holistic picture out.",
      "Draw from multiple models, not a single vendor — with accuracy improving through managed quarterly updates.",
      "Tag every output as retrieved from a document, inferred from a pattern, or generated.",
      "Run entirely inside the council's own environment — no citizen data leaves.",
    ],
    proofs: [
      "Make every AI-assisted insight traceable and auditable for public scrutiny.",
      "Demonstrate citizen data sovereignty as an architectural fact, not a policy promise.",
      "Show IT teams a platform that extends their capabilities rather than replacing them.",
    ],
    drivers: ["Citizen data sovereignty", "Auditable community intelligence", "Multi-model independence"],
    related: [
      { name: "Noetica", href: "/products/noetica" },
      { name: "Platform", href: "/platform" },
    ],
  },
];

export function getSolution(slug: string | undefined): Solution | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}
