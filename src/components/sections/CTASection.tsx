import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export function CTASection({
  title = "Build what your AI learns.",
  subtitle = "SocioProphet turns daily AI use into a sovereign, governed, compounding knowledge asset inside your organisation.",
  buttonLabel = "Request a Briefing",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-32 bg-primary/5 relative overflow-hidden border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">{subtitle}</p>
        <Button asChild size="lg" className="rounded-none font-semibold uppercase tracking-wider h-14 px-10 text-sm">
          <Link href={buttonHref}>{buttonLabel}</Link>
        </Button>
      </div>
    </section>
  );
}
