import { TermTooltip } from "@/components/TermTooltip";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { PRODUCTS } from "@/pages/products/productData";

export function Products() {
  return (
    <div className="w-full">
      <PageHero
        eyebrow="The Product Family"
        title="Build the intelligence asset your organisation owns."
        subtitle="SocioProphet gives you the product surfaces to make AI yours: a daily workspace for people, a governed control layer for organisations, and the evidence architecture that lets what you learn compound."
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {PRODUCTS.map((product) => {
              const Icon = product.icon;
              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group flex flex-col p-8 border border-border bg-card hover:border-primary/40 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">{product.name}</h2>
                  <p className="text-sm font-mono text-primary uppercase tracking-wider mb-6">
                    {product.tagline}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                    {product.intro}
                  </p>
                  <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                    Explore {product.name}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Prophet Mesh spotlight */}
          <div className="mt-12 border border-primary/30 bg-primary/5 p-8 flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-1">
              <span className="font-mono text-primary text-xs uppercase tracking-widest">Inside Noetica</span>
              <h2 className="text-2xl font-bold text-white mt-2 mb-3">Prophet Mesh</h2>
              <p className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
                Multi-model orchestration — model choir + conductor
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Prophet Mesh ships inside Noetica — not as a separate purchase. Multi-model orchestration so no single model is a single point of failure or a build-it-yourself target. The conductor routes each task to the right specialist and re-aggregates results across up to eight model families.
              </p>
            </div>
            <div className="md:w-64 shrink-0 border-l border-border/40 md:pl-8">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">Who uses it</p>
              <p className="text-sm text-white">Enterprise IT, CIOs evaluating build-vs-buy</p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-mono text-primary text-sm uppercase tracking-widest mb-8">
              Also on the platform
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-border bg-card">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-4">Product Surface</span>
                <h3 className="text-xl font-bold text-white mb-2">Prophet Mesh</h3>
                <p className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
                  Multi-model orchestration inside Noetica
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  Model choir + conductor — dynamic routing across up to 8 model families, running on your own hardware.
                </p>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">Who uses it</p>
                <p className="text-sm text-white">Enterprise IT, CIOs evaluating build-vs-buy</p>
              </div>
              <div className="p-8 border border-border bg-card">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-4">Product Surface</span>
                <h3 className="text-xl font-bold text-white mb-2">SocioSphere</h3>
                <p className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
                  DevSecOps workspace fabric
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Sovereign Git, CI/CD, and dependency intelligence for engineering teams —
                  the same governance and evidence guarantees, applied to how software gets built.
                </p>
              </div>
              <div className="p-8 border border-border bg-card">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-4">Product Surface</span>
                <h3 className="text-xl font-bold text-white mb-2">Lattice Forge</h3>
                <p className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
                  Agent builder
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Bespoke agent creation with governance controls — for enterprise teams building
                  branded AI assistants that inherit the{" "}
                  <TermTooltip term="evidence-fabric">evidence fabric</TermTooltip> by default.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Choose the door. Keep the story."
        subtitle="Start with Noetica, the organisational platform, or a focused product surface. The destination is the same: intelligence you own."
      />
    </div>
  );
}
