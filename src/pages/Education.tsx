import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Building2,
  Database,
  Download,
  FileText,
  Fingerprint,
  Network,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { TermTooltip } from "@/components/TermTooltip";
import { CTASection } from "@/components/sections/CTASection";

const PATHWAYS = [
  {
    icon: Users,
    title: "Individuals & Families",
    body: "Own your AI. Keep every conversation, document, and insight on your own device — building a personal knowledge graph that compounds over time, without contributing to anyone else's training data.",
    cta: "Start with Noetica →",
    href: "/contact",
  },
  {
    icon: Brain,
    title: "Teams & Knowledge Workers",
    body: "A governed AI workspace for your whole team. Shared institutional knowledge that stays inside your environment — not scattered across individual accounts in third-party tools.",
    cta: "Explore team use →",
    href: "/contact",
  },
  {
    icon: Building2,
    title: "Organisations & Enterprises",
    body: "Sovereign, governed AI with cryptographic evidence for every decision. Meet SR 26-2, APRA CPS 230, EU AI Act and more — by architecture, not after the fact.",
    cta: "Request a briefing →",
    href: "/contact",
  },
];

const WHY_SOVEREIGN = [
  {
    icon: ShieldCheck,
    title: "Your data never leaves",
    body: "Every public AI tool — no matter how powerful — sends your prompts and documents to a third-party server. SocioProphet installs inside your own environment. We never see it. We never train on it.",
  },
  {
    icon: Database,
    title: "Your knowledge is an asset, not a liability",
    body: "The durable competitive moat was never the foundation model everyone has access to. It is your organisation's own compounding knowledge — kept governed and sovereign. SocioProphet turns institutional memory into IP, not a compliance line item.",
  },
  {
    icon: Network,
    title: "Three incomplete paths — and a fourth",
    body: "Public AI leaks context. Single-vendor platforms create dependency. In-house agents fragment governance. SocioProphet is the fourth path: a governed layer that sits underneath all three and makes every action provable.",
  },
  {
    icon: ArrowRight,
    title: "Bring your history with you",
    body: "Exodus migration tooling lets you bring your existing AI conversations, prompts, and workflows across — without lock-in or rework. Start governed from day one, without starting from scratch.",
  },
];

const HOW_NOETICA_WORKS = [
  {
    icon: Download,
    title: "~85MB. Installs on your device.",
    body: "Built on Tauri — compiled Rust, not Electron. Noetica is fast, lightweight, and runs entirely on your own hardware. Works offline. Nothing phones home.",
  },
  {
    icon: Zap,
    title: "Bring your own API keys",
    body: "Noetica integrates the frontier models you already pay for — open-weight and hosted alike — under the same governance and evidence controls. No new subscriptions required.",
  },
  {
    icon: Fingerprint,
    title: "Every answer is tagged by how it was made",
    body: "The neurosymbolic harness labels every output — stated, retrieved, inferred, or deduced. You always know how much to trust the answer, and so does any auditor who asks.",
  },
  {
    icon: Database,
    title: "Your brain builds automatically",
    body: "Hellagraph, the knowledge layer underneath Noetica, grows in the background as you work — no manual curation. Every conversation, document, and decision adds to a knowledge graph that belongs entirely to you. Export it in standard formats at any time. No lock-in.",
  },
];

const REGULATORY_CONTEXT = [
  {
    label: "SR 26-2",
    region: "United States",
    body: "The US Federal Reserve's model risk guidance excludes generative AI — which means your organisation owns the governance gap. SR 26-2 makes the evidence record a structural requirement, not a dashboard.",
    href: "/solutions/sr26-2",
  },
  {
    label: "APRA CPS 230",
    region: "Australia",
    body: "Operational risk management for Australian-regulated entities. AI systems that produce decisions affecting customers or operations need traceable, auditable evidence trails.",
    href: "/solutions/apra-cps-230",
  },
  {
    label: "EU AI Act",
    region: "European Union",
    body: "Risk-tiered regulation requiring high-risk AI systems to maintain technical documentation, logging, and human oversight. Governed-by-architecture is the only durable compliance path.",
    href: "/solutions/eu-ai-act",
  },
  {
    label: "FCA & MAS",
    region: "UK & Singapore",
    body: "Financial conduct regulators in both jurisdictions are requiring firms to demonstrate AI explainability and auditability. The standard is not documentation — it is structural evidence.",
    href: "/solutions/fca-mas",
  },
];

const GET_STARTED = [
  {
    icon: Users,
    audience: "For individuals",
    title: "Download Noetica",
    body: "A local-first AI workspace that runs on your own device. Use your existing API keys for frontier models you already pay for. Your data stays yours.",
    cta: "Join the interest list",
    href: "/contact",
    highlight: true,
  },
  {
    icon: Brain,
    audience: "For teams",
    title: "Request a team briefing",
    body: "We will walk your team through how Noetica works, what the governance controls do, and how your institutional knowledge graph builds over time.",
    cta: "Talk to our team",
    href: "/contact",
    highlight: false,
  },
  {
    icon: Building2,
    audience: "For enterprises",
    title: "Book a technical briefing",
    body: "A session for your CIO, CDO, and risk teams — covering the architecture, the evidence fabric, and how it maps to your regulatory obligations.",
    cta: "Request a briefing",
    href: "/contact",
    highlight: false,
  },
];

export function Education() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-24 pb-0 md:pt-32 border-b border-border/40">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 pb-0">
            {/* Left-top: badge + headline — always first */}
            <div className="md:col-span-2 md:row-start-1 order-1 pt-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium uppercase tracking-wider mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Education</span>
              </div>
              <h1 className="text-3xl min-[375px]:text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Are you renting intelligence,<br />
                <span className="text-primary">or building one?</span>
              </h1>
            </div>

            {/* Right: audience pathway panel — order-2 on mobile (directly after headline), sticky on md+ */}
            <div className="order-2 md:row-start-1 md:row-span-2 md:col-start-3 border-t border-border/40 pt-8 md:border-t-0 md:border-l md:border-border/40 md:pt-0 md:pl-10 pb-8 md:pb-0 self-start md:sticky md:top-24">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
                Choose your path
              </p>
              <div className="space-y-px border border-border">
                {PATHWAYS.map((p) => {
                  const Icon = p.icon;
                  return (
                    <Link
                      key={p.title}
                      href={p.href}
                      className="group flex flex-col gap-2 p-4 min-[375px]:p-5 bg-card hover:bg-primary/5 border-b border-border last:border-0 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-primary shrink-0" />
                        <span className="font-bold text-white text-sm leading-snug">{p.title}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed pl-6 min-[375px]:pl-7">{p.body}</p>
                      <span className="pl-6 min-[375px]:pl-7 font-mono text-xs text-primary group-hover:text-white transition-colors">
                        {p.cta}
                      </span>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-6 p-4 min-[375px]:p-5 border border-primary/20 bg-primary/5">
                <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">Read now</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Platform", href: "/platform" },
                    { label: "Architecture", href: "/platform" },
                    { label: "Evidence", href: "/evidence" },
                  ].map((l) => (
                    <Link
                      key={l.label}
                      href={l.href}
                      className="font-mono text-xs uppercase tracking-wider border border-border px-3 py-1.5 text-muted-foreground hover:text-white hover:border-primary/40 transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Left-bottom: body copy + tags — order-3 on mobile (after pathway panel), col 1-2 row 2 on md+ */}
            <div className="order-3 md:col-span-2 md:col-start-1 md:row-start-2 pb-16 md:pb-24">
              <p className="text-base min-[375px]:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Noetica is the daily entry point for everyone — individuals, families, teams, and
                regulated enterprises. It is a local-first AI workspace where your questions,
                documents, and reasoning stay yours and build a knowledge base that compounds over time.
              </p>
              <p className="text-sm min-[375px]:text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                ~85MB install. Bring your existing API keys for{" "}
                <TermTooltip term="model-choir">the frontier models you already use</TermTooltip>.
                Works offline. Full{" "}
                <TermTooltip term="evidence-fabric">evidence record</TermTooltip>{" "}
                on every interaction. No lock-in.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                {["Governed AI", "On-device", "Offline-capable", "No data egress", "Full export"].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs uppercase tracking-wider text-muted-foreground border border-border px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 1: Why sovereign AI matters */}
      <section id="why-sovereign" className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              Foundations
            </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              The difference between renting intelligence and building one
            </h2>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              Sovereignty determines whether anything accumulates. Governance determines whether
              what accumulated can be relied on. Compounding knowledge is the return.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
            {WHY_SOVEREIGN.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-background p-8">
                  <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.body}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 border-l-2 border-primary bg-primary/5 p-8">
            <p className="text-lg text-white leading-relaxed">
              Every question your people ask AI is a deposit. The only question is whose account it lands in.
            </p>
          </div>
        </div>
      </section>

      {/* Pillar 2: How Noetica works */}
      <section id="how-noetica" className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              How it works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Noetica: governed AI, on your device
            </h2>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              Full frontier AI capability — research, analysis, writing, reasoning — with a complete evidence record on every interaction. Here is what makes that possible.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {HOW_NOETICA_WORKS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-8 border border-border bg-background relative overflow-hidden">
                  <span className="absolute top-6 right-6 font-mono text-4xl font-bold text-muted-foreground/10 select-none">
                    0{i + 1}
                  </span>
                  <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.body}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 flex flex-wrap gap-6">
            <Button asChild variant="link" className="text-primary p-0 h-auto font-semibold uppercase tracking-wider text-sm">
              <Link href="/products/noetica" className="flex items-center gap-2">
                Full Noetica overview <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="link" className="text-primary p-0 h-auto font-semibold uppercase tracking-wider text-sm">
              <Link href="/platform" className="flex items-center gap-2">
                Platform architecture <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Regulatory context */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              Regulatory context
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              The regulatory wave is here
            </h2>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              These frameworks are evidence of a shift in what organisations must be able to
              govern and explain. We provide structural support — you bring your regulatory
              interpretation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {REGULATORY_CONTEXT.map((reg) => (
              <div key={reg.label} className="border border-border bg-card p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-mono text-primary font-bold text-sm uppercase tracking-wider">
                      {reg.label}
                    </span>
                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-1">
                      {reg.region}
                    </p>
                  </div>
                  <FileText className="w-5 h-5 text-muted-foreground/40 shrink-0 mt-1" />
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">{reg.body}</p>
                {reg.href && (
                  <Link
                    href={reg.href}
                    className="inline-flex items-center gap-1 mt-4 font-mono text-xs uppercase tracking-wider text-primary hover:text-white transition-colors"
                  >
                    Read the brief <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillar 3: Get started */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              Get started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Start with the right path
            </h2>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              Noetica is the entry point for everyone. Choose the option that fits where you are right now.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {GET_STARTED.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`p-8 border flex flex-col ${
                    item.highlight
                      ? "border-primary/40 bg-primary/5"
                      : "border-border bg-background"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {item.audience}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-8 flex-1">
                    {item.body}
                  </p>
                  <Button
                    asChild
                    variant={item.highlight ? "default" : "outline"}
                    className="rounded-none font-semibold uppercase tracking-wider text-xs w-full"
                  >
                    <Link href={item.href}>{item.cta}</Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Glossary strip */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-10">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              Concepts explained
            </span>
            <h2 className="text-2xl font-bold text-white mt-4">
              Hover any underlined term across the site for a plain-English explanation
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { term: "evidence-fabric" as const, label: "Evidence Fabric" },
              { term: "neurosymbolic-harness" as const, label: "Neurosymbolic Harness" },
              { term: "cybernetic-control-plane" as const, label: "Cybernetic Control Plane" },
              { term: "model-choir" as const, label: "Model Choir" },
              { term: "hellagraph" as const, label: "Hellagraph" },
            ].map(({ term, label }) => (
              <div key={term} className="border border-border bg-card p-5 flex items-center gap-3">
                <Network className="w-4 h-4 text-primary/60 shrink-0" />
                <TermTooltip term={term}>
                  <span className="text-sm text-white font-medium">{label}</span>
                </TermTooltip>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Start with Noetica."
        subtitle="The entry point for everyone. Join the interest list and we will notify you when Noetica is available for your device and configuration."
        buttonLabel="Join the interest list"
        buttonHref="/contact"
      />
    </div>
  );
}
