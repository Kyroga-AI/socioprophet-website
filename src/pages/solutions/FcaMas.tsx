import { Link } from "wouter";
import { ArrowRight, ShieldCheck, ScrollText, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

const SOLUTIONS = [
  "Deploy a governed AI capability entirely inside your private cloud — demonstrating data control to FCA and MAS examiners as an architectural fact.",
  "Maintain a cryptographically signed, replayable record of every AI-assisted customer or market decision — the structural evidence both regulators expect.",
  "Produce AI explainability reports grounded in real decision traces, not post-hoc narrative summaries.",
  "Map AI usage to your existing consumer duty and conduct frameworks — including third-party model dependency disclosures.",
];

const PROOFS = [
  "Replay any AI-assisted decision for a regulator — showing exactly what was retrieved, what was inferred, and how certain the system was.",
  "Demonstrate AI explainability as a structural property of the system, not a documentation exercise.",
  "Show that no customer data or proprietary market intelligence left your controlled environment.",
];

const TIMELINE = [
  { step: "Weeks 1–2", title: "Mapping", body: "Map your AI usage against FCA Consumer Duty and MAS FEAT expectations — identifying your highest-risk decision points." },
  { step: "Weeks 3–6", title: "Deploy", body: "Install the governed control plane with explainability and audit logging active from day one." },
  { step: "Weeks 7–9", title: "Validate", body: "Run a structured review — replay decisions and produce the evidence pack your supervisors expect to see." },
];

export function FcaMas() {
  return (
    <div className="w-full">
      <PageHero
        breadcrumbs={[{ label: "Solutions", href: "/solutions" }, { label: "FCA & MAS" }]}
        eyebrow="Regulatory Solution Brief"
        eyebrowIcon={<ScrollText className="w-4 h-4" />}
        title={
          <>
            AI explainability and auditability <br className="hidden md:block" />
            <span className="text-muted-foreground">that FCA and MAS can examine.</span>
          </>
        }
        subtitle="The FCA and MAS are moving from principles to examination. Both regulators require firms to demonstrate AI fairness, explainability, and auditability — not just assert it. SocioProphet gives you the structural evidence to stand behind every AI-assisted decision."
      />

      {/* The trigger */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-primary text-sm uppercase tracking-widest">The Problem</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                Principles do not produce evidence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The FCA's Consumer Duty and AI-specific expectations, and MAS's FEAT principles, both
                require firms to demonstrate fairness, ethics, accountability, and transparency for
                AI systems. The standard is not a policy statement — it is a demonstrated capability
                that survives examination.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When a supervisor asks you to explain an AI-assisted decision made three months ago
                — what was the basis, what data was used, and what alternatives were considered — can
                you replay it? Most firms cannot. That is the gap SocioProphet closes.
              </p>
            </div>
            <div className="border-l-2 border-primary bg-primary/5 p-8">
              <p className="text-xl text-white leading-relaxed">
                &ldquo;Firms must be able to explain AI decisions to customers and regulators.
                <span className="text-primary"> Explainability must be structural, not retrospective.</span>&rdquo;
              </p>
              <p className="text-sm text-muted-foreground mt-4">FCA AI Regulation Discussion Paper, 2024</p>
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
              A governed AI capability your supervisor can interrogate
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
              What you can demonstrate to the FCA or MAS
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
              A 60-day FCA / MAS readiness sprint
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
            <Link href="/evidence" className="group p-8 border border-border bg-card hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">Evidence</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                See how SocioProphet builds a structural evidence record across every AI-assisted
                decision — the foundation of FCA and MAS examination readiness.
              </p>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                Explore Evidence <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/products/noetica" className="group p-8 border border-border bg-card hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">Noetica</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The governed workspace your staff actually use — frontier conversational AI with
                structural explainability built into every interaction.
              </p>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                Explore Noetica <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Demonstrate AI governance to your FCA or MAS supervisor."
        subtitle="Start a 60-day regulatory readiness sprint with our engineering and deployment team."
        buttonLabel="Request an FCA / MAS Briefing"
      />
    </div>
  );
}
