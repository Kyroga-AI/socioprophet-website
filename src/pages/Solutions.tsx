import { Link } from "wouter";
import { ArrowRight, ScrollText, Quote } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { SOLUTIONS } from "@/pages/solutions/solutionData";

const QUOTES = [
  {
    quote:
      "Our portfolio managers use ungoverned tools \u2014 and ASIC is asking us to replay the reasoning.",
    role: "Chief Risk Officer, Asset Manager",
  },
  {
    quote:
      "Every time a lawyer uses Claude for client work, privileged information may be disclosed.",
    role: "General Counsel, Financial Institution",
  },
];

export function Solutions() {
  return (
    <div className="w-full">
      <PageHero
        eyebrow="Solutions by Industry"
        title="Built for the most regulated operations on earth."
        subtitle="The trap is universal, but the regulatory pressure is specific. SocioProphet maps to the frameworks governing your industry — and gives you the evidence to prove it."
      />

      {/* Featured: SR 26-2 */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <Link
            href="/solutions/sr26-2"
            className="group block border border-primary/30 bg-primary/5 hover:border-primary/60 transition-colors"
          >
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3 p-10 md:p-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium uppercase tracking-wider mb-6">
                  <ScrollText className="w-4 h-4" />
                  <span>Priority Regulatory Brief</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Close the GenAI gap SR 26-2 left open
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  SR 26-2 explicitly excludes generative AI from model risk guidance. The gap does not
                  disappear — your bank simply owns it. Here is how to close it in 60 days.
                </p>
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                  Read the SR 26-2 brief
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
              <div className="md:col-span-2 border-t md:border-t-0 md:border-l border-primary/20 p-10 md:p-12 flex flex-col justify-center bg-background/40">
                <span className="font-mono text-5xl font-bold text-primary/40 mb-4">60</span>
                <p className="text-white font-medium">Day readiness sprint</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Discovery, deployment, and a mock examination — evidenced from day one.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Verticals */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              By industry
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Vertical solution briefs
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {SOLUTIONS.map((solution) => {
              const Icon = solution.icon;
              return (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  className="group flex flex-col p-8 border border-border bg-card hover:border-primary/40 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{solution.name}</h3>
                  <p className="text-sm font-mono text-primary uppercase tracking-wider mb-6">
                    {solution.tagline}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                    {solution.intro}
                  </p>
                  <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                    Read the {solution.name} brief
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="border-l-2 border-primary bg-primary/5 p-8">
            <p className="text-lg text-white leading-relaxed">
              Beyond these verticals, we deploy with public sector and sovereign systems —
              readiness, resilience, and public-service operations inside a governed defensive
              perimeter, under explicit human oversight.
            </p>
          </div>
        </div>
      </section>

      {/* Pull quotes */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {QUOTES.map((q) => (
              <figure key={q.role} className="border-l-2 border-primary bg-background p-8">
                <Quote className="w-8 h-8 text-primary/40 mb-6" />
                <blockquote className="text-xl text-white leading-relaxed mb-6 italic">
                  {q.quote}
                </blockquote>
                <figcaption className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {q.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't see your framework?"
        subtitle="We work across EU AI Act, APRA CPS 230, FCA, DORA, MAS and more. Tell us your regulatory context and we will map it."
      />
    </div>
  );
}
