import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export function Header() {
  const [location] = useLocation();

  const links = [
    { href: "/platform", label: "Platform" },
    { href: "/products", label: "Products" },
    { href: "/solutions", label: "Solutions" },
    { href: "/compare", label: "Compare" },
    { href: "/evidence", label: "Evidence" },
    { href: "/education", label: "Education" },
    { href: "/company", label: "Company" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" aria-label="SocioProphet home" className="flex items-center gap-2 shrink-0">
            <img
              src="/socioprophet-logo.png"
              alt=""
              className="size-8 md:size-9 object-contain shrink-0"
            />
            <span className="font-sans font-bold text-lg md:text-xl tracking-tight text-white">Socio<span className="text-primary">Prophet</span></span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-5">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  location.startsWith(link.href) ? "text-white" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:block text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Contact
          </Link>
          <Button asChild className="rounded-none font-semibold uppercase tracking-wider text-[11px] md:text-xs px-4 md:px-6">
            <Link href="/contact">Request Briefing</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
