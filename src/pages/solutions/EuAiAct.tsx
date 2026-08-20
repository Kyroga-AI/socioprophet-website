import { Link } from "wouter";
import { ArrowRight, ShieldCheck, ScrollText, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

const SOLUTIONS = [
  "Deploy high-risk AI systems with the technical documentation the EU AI Act requires — generated automatically by your infrastructure, not assembled after the fact.",
  "Maintain the mandatory logging and audit trail for every AI-assisted decision, cryptographically signed and replayable.",
  "Implement structural human oversight controls that satisfy Article 14 obligations — not interface-level warnings that can be dismissed.",
  "Keep the required conformity documentation current as model updates are applied on a managed cadence.",
];

const PROOFS = [
  "Produce the complete technical documentation package required for high-risk AI system registration.",
  "Demonstrate that human oversight controls are architectural, not advisory.",
  "Show a notified body or national authority a replayable record of any AI-assisted decision.",
];

const TIMELINE = [
  { step: "Weeks 1–2", title: "Classification", body: "Classify your AI systems under the EU AI Act risk tiers and identify which obligations apply to your deployment." },
  { step: "Weeks 3–6", title: "Deploy", body: "Install the governed control plane with technical documentation and audit logging active from day one." },
  { step: "Weeks 7–9", title: "Conformity", body: "Assemble the conformity assessment package, including the replayable decision record, for your designated authority." },
];

export function EuAiAct() {
  return (
    <div className="w-full">
      <PageHero
        breadcrumbs={[{ label: "Solutions", href: "/solutions" }, { label: "EU AI Act" }]}
        eyebrow="Regulatory Solution Brief"
        eyebrowIcon={<ScrollText className="w-4 h-4" />}
        title={
          <>
            High-risk AI compliance <br className="hidden md:block" />
            <span className="text-muted-foreground">governed by architecture, not documentation.</span>
          </>
        }
        subtitle="The EU AI Act imposes binding obligations on high-risk AI systems: technical documentation, logging, human oversight, and conformity assessment. SocioProphet delivers compliance as infrastructure — not a paperwork exercise."
      />

      {/* The trigger */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-primary text-sm uppercase tracking-widest">The Problem</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                Documentation is not compliance
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The EU AI Act creates legal obligations, not best-practice guidelines. Organisations
                operating high-risk AI systems in finance, healthcare, and critical infrastructure
                must demonstrate — not merely assert — that their systems meet the Act's technical
                requirements. A policy document is not evidence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Most organisations reach for documentation. The Act demands something harder: a
                structural record showing what the system did, why it did it, and that a human could
                have overridden it. That requires infrastructure, not paperwork.
              </p>
            </div>
            <div className="border-l-2 border-primary bg-primary/5 p-8">
              <p className="text-xl text-white leading-relaxed">
                &ldquo;High-risk AI systems shall be designed and developed in a way that allows
                providers to{" "}
                <span className="text-primary">log events automatically throughout the lifecycle.</span>&rdquo;
              </p>
              <p className="text-sm text-muted-foreground mt-4">EU AI Act, Article 12</p>
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
              Compliance as infrastructure, not a checklist
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
              What you can demonstrate to a notified body
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
              A 60-day EU AI Act readiness sprint
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
            <Link href="/platform" className="group p-8 border border-border bg-card hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">Evidence Fabric</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The cryptographic signing and replay layer that generates your Article 12 audit log
                automatically — structured for conformity assessment from the start.
              </p>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                See the Platform <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/products/noetica" className="group p-8 border border-border bg-card hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">Noetica</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The governed workspace with structural human oversight controls — satisfying Article 14
                at the architecture layer, not the interface layer.
              </p>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                Explore Noetica <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Meet your EU AI Act obligations before enforcement begins."
        subtitle="Start a 60-day EU AI Act readiness sprint with our engineering and deployment team."
        buttonLabel="Request an EU AI Act Briefing"
      />
    </div>
  );
}
