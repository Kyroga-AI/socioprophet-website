import { TermTooltip } from "@/components/TermTooltip";
import { Link } from "wouter";
import {
  ShieldCheck,
  Network,
  Cpu,
  Database,
  Activity,
  Server,
  Lock,
  Smartphone,
  Cloud,
  Zap,
  KeyRound,
  FileLock2,
  Fingerprint,
} from "lucide-react";
import platformMesh from "@/assets/images/platform-mesh.png";
import { CTASection } from "@/components/sections/CTASection";

const COMPONENTS = [
  {
    icon: Activity,
    name: "Evidence Fabric",
    body: "The headline claim — and the moat. Cryptographically signed, replayable provenance at every agent action. Not logs. Not dashboards. Full proof. No wrapper or dashboard competitor can fake this without rebuilding at the architecture level, because the architecture itself is the evidence — provenance, promotion, and reversibility are explicit, and uncertainty is carried to the decision, not collapsed into a traffic light.",
    points: [
      "Cryptographic signatures on all agent actions",
      "Proof artifacts with full provenance from source to output",
      "Replayable, reversible decision contexts for risk committees",
    ],
  },
  {
    icon: Fingerprint,
    name: "Neurosymbolic Harness",
    body: "Every output is tagged with how it was produced — stated, retrieved, inferred, or deduced — creating an auditable epistemic chain regulators can actually examine. Your risk committee doesn't just see the answer; it sees the reasoning mode that produced it.",
    points: [
      "Four reasoning modes: stated, retrieved, inferred, deduced",
      "An auditable epistemic chain on every output",
      "Uncertainty as a first-class primitive, never a traffic light",
    ],
  },
  {
    icon: Network,
    name: "Cybernetic Control Plane",
    body: "The routing and orchestration layer that connects your data, your people, and the model choir securely. Agents run as role-bounded executors inside explicit control loops, with policy enforced on every request. High-risk actions surface as approval-required or blocked — never as silent execution.",
    points: [
      "Role-bounded agent execution with capability routing",
      "Policy enforcement and human oversight on every control loop",
      "Audit-friendly operator state — nothing executes silently",
    ],
  },
  {
    icon: Cpu,
    name: "Governed Model Choir — Prophet Mesh",
    body: "A curated suite of frontier-grade open-weight models — Llama, Mistral, Command and more — continuously hardened, fine-tuned, and deployed inside your environment. Prophet Mesh adds a conductor layer: tasks are routed to the right specialist model and results re-aggregated across up to eight model families. You are never reliant on a single provider's API, and you never need to configure routing manually.",
    points: [
      "Models run 100% inside your infrastructure",
      "Managed cadence for capability refreshes",
      "Immune to upstream deprecations and rate limits",
      // Spend minimisation claim pending internal validation before publishing
      "Routes to local models by default — cloud escalation only when task complexity genuinely requires it",
    ],
  },
  {
    icon: Database,
    name: "Hellagraph Knowledge Layer",
    body: "A 22-dimension hypergraph — not a flat vector database — that structures your institutional knowledge into a connected, AI-readable brain. Retrieval is grounded in real relationships, entity linkage is policy-constrained, and access barriers are enforced at the graph layer.",
    points: [
      "22-dimension domain model, not flat vectors",
      "Governed entity graph with policy-constrained, reversible merges",
      "Dialogue-flow-first: non-generative tasks execute in milliseconds via the graph — LLM generation is the last resort",
      "Full export in standard formats — no lock-in",
    ],
  },
];

const TIERS = [
  {
    icon: Smartphone,
    name: "Edge",
    detail: "On-device",
    body: "Runs locally on your own hardware — fully air-gapped where required. For the most sensitive, disconnected environments.",
  },
  {
    icon: Cloud,
    name: "Pro",
    detail: "Neocloud managed",
    body: "Deployed and managed inside your private cloud (AWS, Azure, GCP, IBM) with capability kept current on a managed cadence.",
  },
  {
    icon: Zap,
    name: "Frontier",
    detail: "Heaviest models",
    body: "Frontier-grade capability with the heaviest models and continuous tuning, kept current on a managed quarterly cadence.",
  },
];

const SECURITY = [
  {
    icon: Lock,
    title: "Zero data egress",
    body: "No prompt, document, or inference ever leaves your perimeter. There is nothing to phone home.",
  },
  {
    icon: KeyRound,
    title: "Cryptographic signing",
    body: "Every action is signed, producing a tamper-evident chain you can verify independently.",
  },
  {
    icon: FileLock2,
    title: "Immutable audit trail",
    body: "Append-only evidence logs built for examination by auditors, regulators, and risk committees.",
  },
  {
    icon: Fingerprint,
    title: "Identity & access",
    body: "RBAC and information barriers enforced from the control plane down to the knowledge graph.",
  },
  {
    icon: Network,
    title: "Boundary-first model",
    body: "A clear public-versus-restricted security boundary. What is exposed and what is protected is explicit by design, never ambient.",
  },
  {
    icon: ShieldCheck,
    title: "Authorized cyberdefense",
    body: "Defense-first validation with purple-team learning loops — the platform is hardened under authorization, and every defensive exercise produces evidence.",
  },
];

export function Platform() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border/40">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium uppercase tracking-wider mb-6">
              <Network className="w-4 h-4" />
              <span>The Architecture</span>
            </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              The infrastructure that makes intelligence yours.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Sovereignty determines whether anything accumulates. Governance determines whether
              it can be relied on. SocioProphet sits underneath public AI, vendor platforms, and
              in-house agents alike — an{" "}
              <TermTooltip term="evidence-fabric">evidence fabric</TermTooltip>, a{" "}
              <TermTooltip term="neurosymbolic-harness">neurosymbolic harness</TermTooltip>, a{" "}
              <TermTooltip term="cybernetic-control-plane">cybernetic control plane</TermTooltip>, a
              governed <TermTooltip term="model-choir">model choir</TermTooltip>, and a{" "}
              <TermTooltip term="hypergraph-knowledge-layer">hypergraph knowledge layer</TermTooltip>,
              deployed entirely inside your perimeter.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Visual */}
      <section className="py-12 border-b border-border/40 bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="aspect-[21/9] md:aspect-[21/7] relative border border-border overflow-hidden bg-background">
            <img
              src={platformMesh}
              alt="SocioProphet platform architecture mesh"
              className="w-full h-full object-cover filter contrast-125 opacity-70 mix-blend-lighten"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Core Components */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              Five integrated layers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              One system, governed end to end
            </h2>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              The evidence fabric is the headline — everything else supports it. Each layer
              depends on the one below it, so evidence is structural rather than a feature added
              after the work is done.
            </p>
          </div>
          <div className="space-y-32">
            {COMPONENTS.map((comp, idx) => {
              const Icon = comp.icon;
              const reversed = idx % 2 === 1;
              return (
                <div key={comp.name} className="grid md:grid-cols-2 gap-16 items-center">
                  <div className={reversed ? "order-1 md:order-2" : ""}>
                    <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{comp.name}</h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{comp.body}</p>
                    <ul className="space-y-3">
                      {comp.points.map((point) => (
                        <li key={point} className="flex items-center gap-3 text-muted-foreground">
                          <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`bg-card border border-border p-8 aspect-square flex items-center justify-center ${
                      reversed ? "order-2 md:order-1" : ""
                    }`}
                  >
                    <Icon className="w-32 h-32 text-muted-foreground/20" strokeWidth={1} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deployment Tiers */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              Deployment tiers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              From air-gapped edge to frontier-grade
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TIERS.map((tier) => {
              const Icon = tier.icon;
              return (
                <div key={tier.name} className="p-8 border border-border bg-background">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {tier.detail}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{tier.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{tier.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              Security posture
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Governance is structural, not bolted on
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
            {SECURITY.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-background p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Server className="hidden" />
                    <Icon className="w-6 h-6 text-primary shrink-0" />
                    <h3 className="font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12">
            <Link
              href="/evidence"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary hover:text-white transition-colors"
            >
              See our evidence &amp; benchmarks
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="See what your AI can become."
        subtitle="Request a technical briefing and we will walk your CIO, CDO, and security teams through the architecture that turns use into an owned asset."
        buttonLabel="Request a Technical Briefing"
      />
    </div>
  );
}
