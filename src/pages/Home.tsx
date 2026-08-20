import { TermTooltip } from "@/components/TermTooltip";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  Database,
  Network,
} from "lucide-react";
import heroAbstract from "@/assets/images/hero-abstract.png";
import evidenceFabric from "@/assets/images/evidence-fabric.png";
import { CTASection } from "@/components/sections/CTASection";

const PILLARS = [
  {
    icon: Database,
    title: "Build knowledge that compounds",
    body: "Every question, document, and decision can become a deposit in an intelligence asset that stays yours and grows with use.",
  },
  {
    icon: Network,
    title: "Keep intelligence in your control",
    body: "Your reasoning, data, and decisions stay inside your environment. Sovereignty is the difference between renting intelligence and building one.",
  },
  {
    icon: ShieldCheck,
    title: "Make it provable",
    body: "Governance is infrastructure, not paperwork. Every AI decision can be signed, evidenced, and replayed — not logged after the fact and hoped for.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Deploy inside your environment",
    body: "SocioProphet installs in your private cloud or on-premise — no data crosses your perimeter.",
  },
  {
    step: "02",
    title: "Connect what you already use",
    body: "Bring your preferred models, vendor platforms, and existing agents without replacing the systems your teams rely on.",
  },
  {
    step: "03",
    title: "Govern every action",
    body: "Policies control what people and agents can access, while every action produces signed, replayable evidence.",
  },
  {
    step: "04",
    title: "Let the asset compound",
    body: "Your organisational knowledge grows inside your boundary while managed migrations keep your model choices current.",
  },
];

const REGULATIONS: { label: string; region: string; href?: string }[] = [
  { label: "SR 26-2", region: "United States", href: "/solutions/sr26-2" },
  { label: "APRA CPS 230", region: "Australia", href: "/solutions/apra-cps-230" },
  { label: "EU AI Act", region: "European Union", href: "/solutions/eu-ai-act" },
  { label: "FCA & MAS", region: "United Kingdom & Singapore", href: "/solutions/fca-mas" },
  { label: "DORA", region: "Brief in development" },
];

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen">
          <img src={heroAbstract} alt="" className="w-full h-full object-cover archival-hero-image" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium uppercase tracking-wider mb-8 fade-in-up">
              <ShieldCheck className="w-4 h-4" />
              <span>Build an intelligence asset you own</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1] fade-in-up delay-100">
              Are you renting intelligence, <br className="hidden md:block" />
              <span className="text-muted-foreground">or building one?</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed fade-in-up delay-200">
              SocioProphet turns your organisation's use of AI into an asset you own. Sovereignty
              makes it yours. Governance makes it provable. Every use helps it compound inside
              your own walls.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 fade-in-up delay-300">
              <Button asChild size="lg" className="rounded-none font-semibold uppercase tracking-wider h-14 px-8 text-sm">
                <Link href="/evidence">See the Evidence</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-none font-semibold uppercase tracking-wider h-14 px-8 text-sm border-muted-foreground/30 hover:bg-muted-foreground/10">
                <Link href="/contact">Request a Briefing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Incomplete Paths */}
      <section className="py-24 border-y border-border bg-card">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-14">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
              Your AI can create value. The question is where it accumulates.
            </h2>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              Public models, a single vendor platform, and in-house agents can all help you work.
              Each remains incomplete if the intelligence they create does not become yours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="py-8 border-t border-border">
              <h3 className="text-xl font-bold text-white mb-4">Public AI</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fast and capable — but your data, prompts, and institutional IP leave your control, with no record you can defend to an examiner.
              </p>
            </div>
            <div className="py-8 border-t border-border">
              <h3 className="text-xl font-bold text-white mb-4">A single vendor's platform</h3>
              <p className="text-muted-foreground leading-relaxed">
                Enterprise-grade — but you are dependent on one lab's availability, roadmap, and commercial terms, with no portability and no way to fine-tune without sending data out.
              </p>
            </div>
            <div className="py-8 border-t border-border">
              <h3 className="text-xl font-bold text-white mb-4">In-house agents</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your teams are already building brilliant agents — completely ungoverned. Reasoning leaks into model providers, and nothing can be traced or replayed after the fact.
              </p>
            </div>
          </div>

          <div className="mt-6 border border-primary/25 bg-primary/5 p-8 md:p-10">
            <p className="text-lg md:text-xl text-white leading-relaxed">
              SocioProphet is the fourth path: one layer that turns AI use into an owned asset —
              sovereign, provable, and compounding inside your environment.
            </p>
          </div>
        </div>
      </section>

      {/* Deep Dive: Evidence Fabric */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Logs &ne; provenance. <br/>
                <span className="text-primary">Dashboards &ne; replay.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A decision you cannot reproduce is not institutional knowledge. It is a rumour with
                a timestamp. The <TermTooltip term="evidence-fabric">Evidence Fabric</TermTooltip>{" "}
                records why a model was called, what it relied on, and how to replay the result.
                Every agent action produces cryptographically signed provenance, while the{" "}
                <TermTooltip term="neurosymbolic-harness">neurosymbolic harness</TermTooltip>{" "}
                distinguishes what was stated, retrieved, inferred, or deduced.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/20 p-1 rounded-full"><ShieldCheck className="w-4 h-4 text-primary" /></div>
                  <span className="text-white">Cryptographically signed, replayable artifacts at every decision point</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/20 p-1 rounded-full"><ShieldCheck className="w-4 h-4 text-primary" /></div>
                  <span className="text-white">Four reasoning modes: stated, retrieved, inferred, deduced</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/20 p-1 rounded-full"><ShieldCheck className="w-4 h-4 text-primary" /></div>
                  <span className="text-white">Policy enforcement: information barriers, access permissions, task controls</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button asChild variant="link" className="text-primary p-0 h-auto font-semibold uppercase tracking-wider text-sm">
                  <Link href="/platform" className="flex items-center gap-2">
                    Read the Platform Architecture <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="link" className="text-primary p-0 h-auto font-semibold uppercase tracking-wider text-sm">
                  <Link href="/evidence" className="flex items-center gap-2">
                    See the Evidence <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/3] border border-border/50 bg-card p-2">
              <img src={evidenceFabric} alt="Cryptographic Evidence Fabric" className="w-full h-full object-cover filter grayscale opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Sovereignty makes it yours. Governance makes it provable. Compounding knowledge is the return.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PILLARS.map((pillar) => (
              <div key={pillar.title} className="py-8 border-t border-border">
                <div className="w-11 h-11 bg-primary/10 flex items-center justify-center mb-6">
                  <pillar.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button asChild variant="outline" className="rounded-none font-semibold uppercase tracking-wider text-xs border-muted-foreground/30 hover:bg-muted-foreground/10">
              <Link href="/platform" className="flex items-center gap-2">
                Explore the Platform <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Every question is a deposit.
            </h2>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              The only question is whose account it lands in. Keep the work your people do with AI
              inside your environment, where it can become knowledge your organisation owns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 border-y border-border">
            {HOW_IT_WORKS.map((stage) => (
              <div key={stage.step} className="py-8 md:px-6 first:pl-0 border-b md:border-b-0 md:border-r border-border last:border-0">
                <span className="font-mono text-sm font-bold text-primary block mb-5">{stage.step}</span>
                <h3 className="text-lg font-bold text-white mb-3">{stage.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{stage.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild variant="outline" className="rounded-none font-semibold uppercase tracking-wider text-xs border-muted-foreground/30 hover:bg-muted-foreground/10">
              <Link href="/platform">Read the Platform Architecture</Link>
            </Button>
            <Button asChild variant="link" className="text-primary px-0 h-auto font-semibold uppercase tracking-wider text-xs sm:px-4">
              <Link href="/compare" className="flex items-center gap-2">
                Compare the alternatives <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Regulatory Context */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              The rules are moving. Build the asset, not just the paperwork.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              These frameworks are evidence of a shift: organisations must be able to govern risk,
              evidence decisions, and maintain control. SocioProphet provides structural support —
              you bring your regulatory interpretation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 border-y border-border">
            {REGULATIONS.map((reg) =>
              reg.href ? (
                <Link
                  key={reg.label}
                  href={reg.href}
                  className="group py-7 sm:px-6 first:pl-0 border-b sm:border-b-0 sm:border-r border-border last:border-0 hover:bg-primary/5 transition-colors"
                >
                  <span className="text-lg font-bold text-white group-hover:text-primary transition-colors block">
                    {reg.label}
                  </span>
                  <span className="text-xs text-muted-foreground mt-2 block">{reg.region}</span>
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-primary mt-5">
                    Read brief <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ) : (
                <div key={reg.label} className="py-7 sm:px-6 first:pl-0 border-b sm:border-b-0 sm:border-r border-border last:border-0">
                  <span className="text-lg font-bold text-white/60 block">{reg.label}</span>
                  <span className="text-xs text-muted-foreground mt-2 block">{reg.region}</span>
                </div>
              ),
            )}
          </div>
          <div className="mt-10">
            <Button asChild variant="outline" className="rounded-none font-semibold uppercase tracking-wider text-xs border-muted-foreground/30 hover:bg-muted-foreground/10">
              <Link href="/solutions" className="flex items-center gap-2">
                Explore all solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
