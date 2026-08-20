import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, ScrollText, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

const SOLUTIONS = [
  "Deploy a governed AI capability entirely inside your private cloud — no model call leaves your perimeter.",
  "Capture a cryptographically signed, replayable record of every AI-assisted decision.",
  "Map AI usage to your existing model risk management framework, even where SR 26-2 is silent.",
  "Give examiners a complete provenance trail: what was retrieved, inferred, and stated — and how certain the system was.",
];

const PROOFS = [
  "Replay any AI-assisted decision exactly as it occurred, months later.",
  "Show which source documents grounded each output, with signatures intact.",
  "Demonstrate that no client PII or proprietary strategy ever left your control.",
];

const TIMELINE = [
  { step: "Weeks 1\u20132", title: "Discovery", body: "Map your highest-risk GenAI usage and governance gaps against SR 26-2." },
  { step: "Weeks 3\u20136", title: "Deploy", body: "Install the governed control plane inside your environment, evidenced from day one." },
  { step: "Weeks 7\u20139", title: "Validate", body: "Run a mock examination: replay decisions and produce the evidence pack." },
];

export function Sr262() {
  return (
    <div className="w-full">
      <PageHero
        breadcrumbs={[{ label: "Solutions", href: "/solutions" }, { label: "SR 26-2" }]}
        eyebrow="Regulatory Solution Brief"
        eyebrowIcon={<ScrollText className="w-4 h-4" />}
        title={
          <>
            Close the GenAI governance gap <br className="hidden md:block" />
            <span className="text-muted-foreground">SR 26-2 left open.</span>
          </>
        }
        subtitle="SR 26-2 explicitly excludes generative AI from model risk guidance. The gap does not disappear — your bank simply owns it. SocioProphet is how you close it."
      />

      {/* The trigger */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-primary text-sm uppercase tracking-widest">The Problem</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                Your AI adoption is already happening — without you
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Your portfolio managers are already using ChatGPT. SR 26-2 carved generative AI out
                of model risk guidance, so there is no supervisory playbook telling you how to govern
                it. When your examiner asks you to replay an AI-assisted decision — can you?
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The carve-out is not permission. It is exposure. The institution carries the
                governance burden whether or not the guidance names it.
              </p>
            </div>
            <div className="border-l-2 border-primary bg-primary/5 p-8">
              <p className="text-xl text-white leading-relaxed">
                &ldquo;SR 26-2 explicitly excludes generative AI from model risk guidance.
                <span className="text-primary"> Your bank owns the governance gap.</span>&rdquo;
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
              What you can now prove to a regulator
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

      {/* 60-day sprint */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">Engagement</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              A 60-day SR 26-2 readiness sprint
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
                The cryptographic signing and replay layer that turns every decision into defensible,
                examinable evidence.
              </p>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                See the Platform <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Close the gap before your next examination."
        subtitle="Start a 60-day SR 26-2 readiness sprint with our engineering and deployment team."
        buttonLabel="Request an SR 26-2 Briefing"
      />
    </div>
  );
}
