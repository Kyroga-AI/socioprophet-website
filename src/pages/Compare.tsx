import { Check, Minus, X } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

type State = "yes" | "partial" | "no";
type Cell = { state: State; label: string };

const COLUMNS = [
  "SocioProphet",
  "Public AI",
  "DIY Build",
  "Governance Wrappers",
  "Hyperscaler In-Tenant",
  "AI Gateways",
];

const ROWS: { capability: string; cells: Cell[] }[] = [
  {
    capability: "Data stays in-perimeter",
    cells: [
      { state: "yes", label: "Always" },
      { state: "no", label: "Leaves perimeter" },
      { state: "yes", label: "Yes" },
      { state: "no", label: "Monitors external calls" },
      { state: "partial", label: "In-tenant, vendor-run" },
      { state: "partial", label: "Gateway only" },
    ],
  },
  {
    capability: "Frontier model currency",
    cells: [
      { state: "yes", label: "Managed cadence" },
      { state: "yes", label: "Vendor-controlled" },
      { state: "no", label: "Falls behind" },
      { state: "no", label: "No models" },
      { state: "yes", label: "Vendor catalogue" },
      { state: "partial", label: "Bring-your-own" },
    ],
  },
  {
    capability: "Signed, replayable evidence",
    cells: [
      { state: "yes", label: "Built-in" },
      { state: "no", label: "None" },
      { state: "partial", label: "Bolted on" },
      { state: "partial", label: "Logs & reports" },
      { state: "partial", label: "Cloud audit logs" },
      { state: "partial", label: "Gateway logs" },
    ],
  },
  {
    capability: "Uncertainty carried to the decision",
    cells: [
      { state: "yes", label: "Propagated" },
      { state: "no", label: "Collapsed" },
      { state: "no", label: "Manual" },
      { state: "no", label: "Traffic-light score" },
      { state: "no", label: "None" },
      { state: "no", label: "Pass / fail" },
    ],
  },
  {
    capability: "Governs in execution, not on paper",
    cells: [
      { state: "yes", label: "Architectural" },
      { state: "no", label: "No" },
      { state: "partial", label: "Self-built" },
      { state: "no", label: "On paper" },
      { state: "partial", label: "Policy controls" },
      { state: "partial", label: "Gateway checks" },
    ],
  },
  {
    capability: "No vendor lock-in",
    cells: [
      { state: "yes", label: "Full export" },
      { state: "no", label: "API-bound" },
      { state: "yes", label: "You own it" },
      { state: "partial", label: "Tool-bound" },
      { state: "no", label: "Cloud-bound" },
      { state: "partial", label: "Platform-bound" },
    ],
  },
];

const CLAIMS = [
  {
    target: "vs. decision-intelligence platforms",
    quote: "They collapse uncertainty into a traffic light. We carry it to the decision.",
  },
  {
    target: "vs. governance-on-paper tools",
    quote: "They govern on paper. We govern in execution.",
  },
  {
    target: "vs. AI gateways",
    quote:
      "Gateway enforcement asks \u201cdid it pass?\u201d We answer \u201cwhat did it do, why, and can you prove it?\u201d",
  },
];

function StatusCell({ cell, highlight }: { cell: Cell; highlight?: boolean }) {
  const Icon = cell.state === "yes" ? Check : cell.state === "partial" ? Minus : X;
  const tone =
    cell.state === "yes"
      ? "text-primary"
      : cell.state === "partial"
        ? "text-muted-foreground"
        : "text-destructive/80";
  return (
    <div className="flex items-center gap-2">
      <Icon className={`w-4 h-4 shrink-0 ${tone}`} />
      <span className={`text-sm ${highlight ? "text-white font-semibold" : "text-muted-foreground"}`}>
        {cell.label}
      </span>
    </div>
  );
}

export function Compare() {
  return (
    <div className="w-full">
      <PageHero
        eyebrow="Competitive Positioning"
        title={
          <>
            How SocioProphet compares.
          </>
        }
        subtitle="SocioProphet doesn't compete with public AI, vendor platforms, or in-house agents — it governs all three. But against every category trying to solve governance, the structural difference is stark. Here is the honest landscape."
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[1040px]">
              <caption className="sr-only">
                Capability comparison of SocioProphet against public AI, DIY builds, governance
                wrappers, hyperscaler in-tenant offerings, and AI gateways.
              </caption>
              <thead>
                <tr className="border-b border-border">
                  <th
                    scope="col"
                    className="text-left p-5 font-mono text-xs uppercase tracking-widest text-muted-foreground font-medium w-[19%]"
                  >
                    Capability
                  </th>
                  {COLUMNS.map((col, i) => (
                    <th
                      key={col}
                      scope="col"
                      className={
                        i === 0
                          ? "text-left p-5 font-bold text-white bg-primary/5 border-x border-primary/20"
                          : "text-left p-5 font-mono text-xs uppercase tracking-widest text-muted-foreground font-medium"
                      }
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.capability} className="border-b border-border">
                    <th
                      scope="row"
                      className="p-5 text-white font-medium align-top text-left text-sm"
                    >
                      {row.capability}
                    </th>
                    {row.cells.map((cell, i) => (
                      <td
                        key={i}
                        className={
                          i === 0
                            ? "p-5 bg-primary/5 border-x border-primary/20 align-top"
                            : "p-5 align-top"
                        }
                      >
                        <StatusCell cell={cell} highlight={i === 0} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              The distinction in one line
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Everyone else manages the symptom. We change the architecture.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {CLAIMS.map((claim) => (
              <div key={claim.target} className="p-8 border border-border bg-background flex flex-col">
                <span className="font-mono text-xs uppercase tracking-wider text-primary mb-6">
                  {claim.target}
                </span>
                <p className="text-lg text-white leading-relaxed">{claim.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="See the difference in your environment."
        subtitle="We will walk your risk and technology teams through exactly how the evidence fabric holds up under examination."
      />
    </div>
  );
}
