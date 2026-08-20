import { useParams } from "wouter";
import { Check, X } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { getProduct } from "./productData";
import NotFound from "@/pages/not-found";

export function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);

  if (!product) return <NotFound />;

  const Icon = product.icon;

  return (
    <div className="w-full">
      <PageHero
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: product.name }]}
        eyebrow={product.tagline}
        eyebrowIcon={<Icon className="w-4 h-4" />}
        title={product.name}
        subtitle={product.intro}
      />

      {/* Capabilities */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-mono text-sm uppercase tracking-widest text-primary mb-12">
            Capabilities
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {product.capabilities.map((cap) => (
              <div key={cap.title} className="bg-background p-8">
                <h3 className="font-bold text-white mb-3">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Why it matters</h2>
              <ul className="space-y-5">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/20 p-1 rounded-full shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-lg text-white leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {product.notList && (
              <div className="border border-border bg-background p-10">
                <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-6">
                  What {product.name} is not
                </h3>
                <ul className="space-y-5">
                  {product.notList.map((n) => (
                    <li key={n} className="flex items-start gap-4">
                      <X className="w-5 h-5 text-destructive/70 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Comparison */}
      {product.comparison && (
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">
              {product.comparisonTitle ?? "How it compares"}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-5 font-mono text-xs uppercase tracking-widest text-muted-foreground font-medium w-[34%]">
                      Dimension
                    </th>
                    <th className="text-left p-5 font-bold text-white bg-primary/5 border-x border-primary/20 w-[33%]">
                      {product.name}
                    </th>
                    <th className="text-left p-5 font-mono text-xs uppercase tracking-widest text-muted-foreground font-medium w-[33%]">
                      {product.comparisonThem ?? "Alternatives"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.comparison.map((row) => (
                    <tr key={row.label} className="border-b border-border">
                      <th scope="row" className="p-5 text-white font-medium align-top text-left text-sm">
                        {row.label}
                      </th>
                      <td className="p-5 bg-primary/5 border-x border-primary/20 align-top">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 shrink-0 text-primary" />
                          <span className="text-sm text-white font-semibold">{row.us}</span>
                        </div>
                      </td>
                      <td className="p-5 align-top">
                        <span className="text-sm text-muted-foreground">{row.them}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Tiers */}
      {product.tiers && (
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">
              {product.tiersTitle ?? "Engagement tiers"}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {product.tiers.map((tier) => (
                <div key={tier.name} className="p-8 border border-border bg-background">
                  <h3 className="text-xl font-bold text-white mb-3">{tier.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{tier.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`See ${product.name} in your environment.`}
        subtitle="Request a demo and we will show you exactly how it deploys inside your perimeter."
        buttonLabel="Request a Demo"
      />
    </div>
  );
}
