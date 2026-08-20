import { Link } from "wouter";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  eyebrowIcon?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  breadcrumbs?: Crumb[];
}

export function PageHero({ eyebrow, eyebrowIcon, title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 mb-8 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <ChevronRight className="w-3 h-3" />}
                </span>
              ))}
            </nav>
          )}

          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium uppercase tracking-wider mb-6">
              {eyebrowIcon}
              <span>{eyebrow}</span>
            </div>
          )}

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            {title}
          </h1>

          {subtitle && (
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
