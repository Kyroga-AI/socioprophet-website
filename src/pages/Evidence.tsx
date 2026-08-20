import { TermTooltip } from "@/components/TermTooltip";
import { FileText, FlaskConical, ShieldCheck, BarChart3, Quote } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

const QUOTES = [
  {
    quote:
      "Our portfolio managers use ungoverned tools \u2014 and ASIC is asking us to replay the reasoning.",
    role: "Chief Risk Officer, Asset Manager",
  },
  {
    quote:
      "Our clinical AI infers things it was never told \u2014 and we can\u2019t show a regulator the difference.",
    role: "Head of Data, Healthcare Provider",
  },
];

const CERTS = [
  { label: "SOC 2 Type II", status: "In progress" },
  { label: "ISO 27001", status: "In progress" },
  { label: "MMLU Benchmark Suite", status: "Publication pending" },
];

const FAQ = [
  {
    q: "What is SocioProphet?",
    a: "SocioProphet turns your organisation's use of AI into an asset you own. It installs inside your own environment and produces a signed, replayable evidence record of every AI and agent action — so the knowledge you build can compound without leaving your control.",
  },
  {
    q: "Does my data leave my environment?",
    a: "No. SocioProphet deploys entirely inside your private cloud or on-premise infrastructure. We never see it, we never train on it.",
  },
  {
    q: "Can I use my existing AI tools with SocioProphet?",
    a: "Yes. Noetica integrates Claude, GPT, Gemini, Meta, Mistral, and Perplexity out of the box.",
  },
  {
    q: "What happens to my data if I stop using SocioProphet?",
    a: "Export your entire knowledge graph at any time, in standard formats. No lock-in.",
  },
  {
    q: "How is this different from an AI governance platform?",
    a: "SocioProphet is not a dashboard bolted onto someone else's platform. It makes governance part of the execution layer, so every action produces structural evidence and the knowledge that accumulates remains yours.",
  },
  {
    q: "Is my AI-generated institutional knowledge really an asset, not just a risk to manage?",
    a: "Yes — that's a deliberate reframe. The durable competitive moat isn't the foundation model everyone has access to; it's your organisation's own compounding, governed, sovereign knowledge.",
  },
  {
    q: "What regulations does SocioProphet help with?",
    a: "SR 26-2 (US banking), APRA CPS 230 (Australia), EU AI Act, FCA (UK), MAS (Singapore). We provide structural support for the evidence and control obligations — you bring your regulatory interpretation.",
  },
  {
    q: "What is Prophet Mesh?",
    a: "Prophet Mesh is Model Choir plus Model Conductor — a curated ensemble of open-weight models running on your own hardware, with a conductor that routes each task to the right model and combines results. It ships as part of Noetica, not as a separate purchase.",
  },
  {
    q: "Why not just use one good model?",
    a: "Because 'one good model' is exactly what any competitor can also wrap. Prophet Mesh's multi-model routing is the reason SocioProphet can't be replicated by adding a feature to an existing chatbot — it's an architectural difference, not a configuration choice.",
  },
];

export function Evidence() {
  return (
    <div className="w-full">
      <PageHero
        eyebrow="Proof, Not Promises"
        eyebrowIcon={<BarChart3 className="w-4 h-4" />}
        title={
          <>
            Build an intelligence asset <br className="hidden md:block" />
            <span className="text-muted-foreground">you can prove.</span>
          </>
        }
        subtitle="If the work your organisation does with AI is going to compound, you need to know what happened, why it happened, and whether you can reproduce it. This page collects the evidence as it is released."
      />

      {/* Benchmarks */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-6">
                <FlaskConical className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Benchmark results</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We are running the full MMLU suite against our governed{" "}
                <TermTooltip term="model-choir">model choir</TermTooltip> and graph
                retrieval layer. The results — including head-to-head comparisons against frontier
                lab performance — publish here on release.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We will publish the methodology with the results. The point is not a number in a
                sales deck; it is evidence your own technical team can inspect and reproduce.
              </p>
            </div>
            <div className="border border-border bg-card p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  MMLU Suite
                </h3>
                <span className="font-mono text-xs uppercase tracking-wider text-primary border border-primary/30 bg-primary/10 px-2 py-1">
                  Publication pending
                </span>
              </div>
              <div className="space-y-4">
                {["Aggregate accuracy", "Graph-grounded retrieval", "Uncertainty calibration"].map(
                  (metric) => (
                    <div key={metric}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-white">{metric}</span>
                        <span className="text-sm text-muted-foreground font-mono">— —</span>
                      </div>
                      <div className="h-2 bg-background border border-border overflow-hidden">
                        <div className="h-full w-0 bg-primary/40" />
                      </div>
                    </div>
                  ),
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
                Figures intentionally withheld until the full methodology is published alongside
                them. We will not cherry-pick.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why benchmarks matter */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              Why our benchmarks matter
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
              A score is only useful if you can trust how it was produced
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Most vendor benchmarks are run on a configuration you will never deploy. Ours are run
              on the same governed, in-perimeter architecture you would actually operate —{" "}
              <TermTooltip term="model-choir">model choir</TermTooltip>, Hellagraph knowledge layer,
              and <TermTooltip term="evidence-fabric">evidence fabric</TermTooltip> included.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every result will ship with its methodology so your own technical team can reproduce
              it. Outputs are proof artifacts — evidence-bearing by construction, with provenance
              and reversibility built in. That is the difference between marketing and evidence.
            </p>
          </div>
        </div>
      </section>

      {/* Whitepaper + Security */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border bg-card p-10">
              <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Architecture whitepaper</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A technical deep-dive into the{" "}
                <TermTooltip term="cybernetic-control-plane">control plane</TermTooltip>, the{" "}
                <TermTooltip term="evidence-fabric">evidence fabric</TermTooltip>, the boundary
                model, and the cryptographic signing model — written for CIOs, CDOs, and security
                architects.
              </p>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground border border-border px-3 py-2">
                Available on request under NDA
              </span>
            </div>
            <div className="border border-border bg-card p-10">
              <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Security & certifications</h3>
              <ul className="space-y-4">
                {CERTS.map((cert) => (
                  <li key={cert.label} className="flex items-center justify-between border-b border-border/60 pb-3 last:border-0 last:pb-0">
                    <span className="text-white">{cert.label}</span>
                    <span className="font-mono text-xs uppercase tracking-wider text-primary">
                      {cert.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              Frequently asked questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Straight answers to the questions buyers ask
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {FAQ.map((item) => (
              <div key={item.q} className="bg-background p-8">
                <h3 className="font-bold text-white mb-3">{item.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer voices */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              From the field
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              The problems our buyers describe
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {QUOTES.map((q) => (
              <figure key={q.role} className="p-8 border border-border bg-background">
                <Quote className="w-8 h-8 text-primary/40 mb-6" />
                <blockquote className="text-xl text-white leading-relaxed mb-6 italic">
                  {q.quote}
                </blockquote>
                <figcaption className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {q.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to verify what you are building?"
        subtitle="Request the whitepaper and a technical briefing. We will give your engineers the detail they need to inspect the architecture and its evidence."
        buttonLabel="Request the Whitepaper"
      />
    </div>
  );
}
