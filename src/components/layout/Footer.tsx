import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50 py-16 mt-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" aria-label="SocioProphet home" className="flex items-center gap-2 mb-4">
              <img
                src="/socioprophet-logo.png"
                alt=""
                className="size-10 object-contain shrink-0"
              />
              <span className="font-sans font-bold text-xl tracking-tight text-white">Socio<span className="text-primary">Prophet</span></span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              SocioProphet turns your organisation's use of AI into an asset you own — sovereign,
              provable, and compounding inside your own walls.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><Link href="/platform" className="text-sm text-muted-foreground hover:text-white transition-colors">Control Plane</Link></li>
              <li><Link href="/platform" className="text-sm text-muted-foreground hover:text-white transition-colors">Model Choir</Link></li>
              <li><Link href="/platform" className="text-sm text-muted-foreground hover:text-white transition-colors">Evidence Fabric</Link></li>
              <li><Link href="/evidence" className="text-sm text-muted-foreground hover:text-white transition-colors">Evidence &amp; Benchmarks</Link></li>
              <li><Link href="/compare" className="text-sm text-muted-foreground hover:text-white transition-colors">Compare</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white mb-4">Products & Solutions</h4>
            <ul className="space-y-3">
              <li><Link href="/products/noetica" className="text-sm text-muted-foreground hover:text-white transition-colors">Noetica</Link></li>
              <li><Link href="/products/prophet-platform" className="text-sm text-muted-foreground hover:text-white transition-colors">Prophet Platform</Link></li>
              <li><Link href="/products/scope-d" className="text-sm text-muted-foreground hover:text-white transition-colors">SCOPE-D</Link></li>
              <li><Link href="/products/hellagraph" className="text-sm text-muted-foreground hover:text-white transition-colors">Hellagraph</Link></li>
              <li><Link href="/solutions/sr26-2" className="text-sm text-muted-foreground hover:text-white transition-colors">SR 26-2</Link></li>
              <li><Link href="/solutions" className="text-sm text-muted-foreground hover:text-white transition-colors">All Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white mb-4">Learn</h4>
            <ul className="space-y-3">
              <li><Link href="/education" className="text-sm text-muted-foreground hover:text-white transition-colors">Education</Link></li>
              <li><Link href="/education#why-sovereign" className="text-sm text-muted-foreground hover:text-white transition-colors">Why Sovereign AI</Link></li>
              <li><Link href="/education#how-noetica" className="text-sm text-muted-foreground hover:text-white transition-colors">How Noetica Works</Link></li>
              <li><Link href="/company" className="text-sm text-muted-foreground hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} SocioProphet. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-muted-foreground font-mono tracking-widest uppercase">Own your AI. Don't rent it.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
