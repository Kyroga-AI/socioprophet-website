import { Link } from "wouter";
import { ArrowRight, ShieldCheck, ScrollText, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

const SOLUTIONS = [
  "Deploy a governed AI capability entirely inside your private cloud — no data crosses the regulatory boundary.",
  "Maintain a cryptographically signed, replayable record of every AI-assisted operational decision.",
  "Map AI usage to your existing operational risk framework, including third-party dependency obligations under CPS 230.",
  "Give APRA examiners a complete provenance trail: what was retrieved, inferred, and stated — and how certain the system was.",
];

const PROOFS = [
  "Replay any AI-assisted decision exactly as it occurred, months after the fact.",
  "Demonstrate that no customer data or operational data ever left your controlled environment.",
  "Show that AI-driven processes meet your operational resilience obligations — structurally, not by policy assertion.",
];

const TIMELINE = [
  { step: "Weeks 1–2", title: "Scoping", body: "Map your highest-risk AI usage and operational resilience gaps against CPS 230 obligations." },
  { step: "Weeks 3–6", title: "Deploy", body: "Install the governed control plane inside your environment. Every AI action is evidenced from day one." },
  { step: "Weeks 7–9", title: "Validate", body: "Run a structured review: replay decisions and produce the evidence pack your examiners expect." },
];

export function ApraCps230() {
  return (
    <div className="w-full">
      <PageHero
        breadcrumbs={[{ label: "Solutions", href: "/solutions" }, { label: "APRA CPS 230" }]}
        eyebrow="Regulatory Solution Brief"
        eyebrowIcon={<ScrollText className="w-4 h-4" />}
        title={
          <>
            Operational resilience obligations <br className="hidden md:block" />
            <span className="text-muted-foreground">CPS 230 now extends to AI.</span>
          </>
        }
        subtitle="APRA CPS 230 requires Australian-regulated entities to manage operational risk across all critical systems — including AI. SocioProphet gives you the governed infrastructure to meet that obligation structurally."
      />

      {/* The trigger */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-primary text-sm uppercase tracking-widest">The Problem</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                AI is now inside your operational risk perimeter
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                CPS 230 requires boards and management to understand, manage, and document operational
                risk across all material business activities. AI systems that influence operational
                decisions — from credit processing to claims triage — sit squarely inside that scope.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ungoverned AI is not a grey area. It is an unmanaged operational risk. When APRA
                asks you to demonstrate resilience — and they will — you need more than a policy.
                You need a structural evidence record.
              </p>
            </div>
            <div className="border-l-2 border-primary bg-primary/5 p-8">
              <p className="text-xl text-white leading-relaxed">
                &ldquo;CPS 230 requires entities to manage the risks associated with operational
                disruption — including disruptions originating from{" "}
                <span className="text-primary">technology systems and third-party dependencies.</span>&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we solve it */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">How SocioProphet solves it</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              A governed AI capability your examiner can interrogate
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {SOLUTIONS.map((item) => (
              <div key={item} className="flex items-start gap-4 bg-background p-8">
                <div className="mt-1 bg-primary/20 p-1 rounded-full shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-white leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you can prove */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">The Evidence</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              What you can now demonstrate to APRA
            </h2>
          </div>
          <ul className="space-y-6 max-w-3xl">
            {PROOFS.map((proof) => (
              <li key={proof} className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-lg text-white leading-relaxed">{proof}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Engagement sprint */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">Engagement</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              A 60-day CPS 230 readiness sprint
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TIMELINE.map((phase) => (
              <div key={phase.step} className="p-8 border border-border bg-background">
                <span className="font-mono text-xs uppercase tracking-wider text-primary">{phase.step}</span>
                <h3 className="text-xl font-bold text-white mt-3 mb-3">{phase.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{phase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related components */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">Related components</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              The platform pieces that make this work
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/products/noetica" className="group p-8 border border-border bg-card hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">Noetica</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The governed workspace your staff actually use — frontier conversational AI that never
                leaves the perimeter.
              </p>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                Explore Noetica <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/platform" className="group p-8 border border-border bg-card hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">Evidence Fabric</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The cryptographic signing and replay layer that turns every AI-assisted decision into
                defensible, examinable evidence.
              </p>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                See the Platform <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Meet your CPS 230 obligations before your next APRA review."
        subtitle="Start a 60-day CPS 230 readiness sprint with our engineering and deployment team."
        buttonLabel="Request a CPS 230 Briefing"
      />
    </div>
  );
}
