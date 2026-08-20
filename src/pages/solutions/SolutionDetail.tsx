import { Link, useParams } from "wouter";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { getSolution } from "./solutionData";
import NotFound from "@/pages/not-found";

export function SolutionDetail() {
  const { slug } = useParams();
  const solution = getSolution(slug);

  if (!solution) return <NotFound />;

  const Icon = solution.icon;

  return (
    <div className="w-full">
      <PageHero
        breadcrumbs={[{ label: "Solutions", href: "/solutions" }, { label: solution.name }]}
        eyebrow={solution.tagline}
        eyebrowIcon={<Icon className="w-4 h-4" />}
        title={solution.name}
        subtitle={solution.intro}
      />

      {/* Problem */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-mono text-primary text-sm uppercase tracking-widest">The Problem</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                {solution.problemHeading}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{solution.problem}</p>
            </div>
            <div className="p-8 bg-card border border-border">
              <h3 className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
                Regulatory Drivers
              </h3>
              <ul className="space-y-3 text-white">
                {solution.drivers.map((d) => (
                  <li key={d} className="flex items-center gap-3">
                    <span className="text-primary">&bull;</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How we solve it */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              How SocioProphet solves it
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Frontier capability, governed by architecture
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {solution.solutions.map((item) => (
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
            {solution.proofs.map((proof) => (
              <li key={proof} className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-lg text-white leading-relaxed">{proof}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">Related</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">Where to go next</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solution.related.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between p-8 border border-border bg-background hover:border-primary/40 transition-colors"
              >
                <span className="text-xl font-bold text-white">{link.name}</span>
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Bring governed AI to your ${solution.name.toLowerCase()} teams.`}
        subtitle="Request a briefing to discuss your specific regulatory and architectural requirements."
        buttonLabel={`Request a ${solution.name} Briefing`}
      />
    </div>
  );
}
