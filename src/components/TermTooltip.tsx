import type { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const GLOSSARY = {
  "evidence-fabric":
    "Every AI action gets a cryptographically signed, replayable record — not a log, a proof. When a regulator asks \"prove what your AI did,\" this is the answer no dashboard or wrapper can fake.",
  "neurosymbolic-harness":
    "Every answer is tagged by how it was made — stated, retrieved, inferred, or deduced. Most AI can't tell you which. This can, which is what makes the evidence trail actually trustworthy.",
  "cybernetic-control-plane":
    "The layer every agent action runs through — enforcing rules and holding risky actions for approval before they execute, not reporting on them after. Governance built into execution, not bolted on top.",
  "model-choir":
    "A curated ensemble of models running on your own infrastructure, plus your own API keys for external models. Best-fit intelligence for every task — without your data or IP ever leaving your walls.",
  "hellagraph":
    "A true hypergraph, not a flat property graph like Neo4j — connections themselves can be full objects. Your organisation's knowledge compounds into owned, structured IP instead of scattered documents.",
  "hypergraph-knowledge-layer":
    "A true hypergraph, not a flat property graph like Neo4j — connections themselves can be full objects. Your organisation's knowledge compounds into owned, structured IP instead of scattered documents.",
} as const;

export type TermKey = keyof typeof GLOSSARY;

interface TermTooltipProps {
  term: TermKey;
  children: ReactNode;
}

export function TermTooltip({ term, children }: TermTooltipProps) {
  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            tabIndex={0}
            className="cursor-help underline decoration-dotted decoration-primary/60 underline-offset-4 hover:decoration-primary hover:text-white focus-visible:decoration-primary focus-visible:text-white focus-visible:outline-none transition-colors"
          >
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="max-w-xs bg-card text-foreground border border-primary/30 px-4 py-3 text-sm leading-relaxed shadow-xl"
        >
          {GLOSSARY[term]}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
