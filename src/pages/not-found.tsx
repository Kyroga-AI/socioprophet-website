import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center pt-24 pb-32">
      <div className="container mx-auto px-4 md:px-8 max-w-md text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/20">
          <AlertTriangle className="h-8 w-8 text-primary" />
        </div>
        
        <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">404</h1>
        <h2 className="text-xl font-mono text-muted-foreground uppercase tracking-wider mb-8">
          Path Not Resolvable
        </h2>
        
        <p className="text-muted-foreground mb-12 leading-relaxed">
          The requested route does not exist within the sovereign perimeter. Please verify the URL or return to the verified index.
        </p>

        <Button asChild variant="outline" className="rounded-none border-border group hover:border-primary/50 hover:bg-primary/10">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-semibold uppercase tracking-wider text-xs">Return to Home</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
