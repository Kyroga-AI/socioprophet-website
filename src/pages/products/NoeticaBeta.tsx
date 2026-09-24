import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "wouter";
import { ArrowRight, BadgeCheck, Brain, Lock, Sparkles, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { COMPANY_SIZES, INDUSTRIES, joinWaitlist, type JoinWaitlistRequest } from "@/lib/waitlist-api";

const DEFAULT_SOURCE = "mpower-2026";
const MIN_FILL_MS = 1_200;

const labelClass = "block text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mb-2";
const inputClass = "rounded-none bg-background border-border focus-visible:ring-primary h-12 w-full text-base";
const selectClass =
  "rounded-none bg-background border border-border text-white h-12 w-full px-3 text-base focus:outline-none focus:ring-1 focus:ring-primary";
const errorClass = "text-xs text-red-400 mt-1";

const POINTS = [
  {
    icon: Wallet,
    title: "Free to run",
    body: "It runs open AI models on your own computer, so there are no monthly AI bills or per-question charges.",
  },
  {
    icon: Lock,
    title: "Your IP stays yours",
    body: "Your work stays on your machine, and nothing you type trains anyone else's model.",
  },
  {
    icon: Brain,
    title: "A brain that compounds",
    body: "Every chat, note and document adds to a knowledge graph that gets more useful the longer you use it. Start by bringing your ChatGPT or Claude history across.",
  },
  {
    icon: BadgeCheck,
    title: "Governed from day one",
    body: "Every answer shows its sources and flags what they don't support, so you know what you can rely on.",
  },
];

const SCREENSHOTS = [
  {
    src: "/noetica-canvas.jpg",
    width: 1600,
    height: 1004,
    title: "Write with it",
    caption:
      "Draft documents in a canvas next to the chat. Each answer records which model wrote it (here, Claude) and which sources it used, and flags claims those sources don't support.",
    alt: "Noetica drafting a document about AI adoption in Australian small businesses in a canvas beside the chat, with the model, sources and verification details shown alongside.",
  },
  {
    src: "/noetica-knowledge-graph.jpg",
    width: 1600,
    height: 980,
    title: "Your knowledge graph",
    caption:
      "As you work, Noetica maps the people, companies and topics in your documents, and keeps that map on your device.",
    alt: "Noetica's knowledge graph view: a network of connected topics, companies and documents, labelled on-device.",
  },
];

function sourceFromUrl(): string {
  const source = new URLSearchParams(window.location.search).get("source")?.trim().toLowerCase();
  return source && /^[a-z0-9-]{1,40}$/.test(source) ? source : DEFAULT_SOURCE;
}

export function NoeticaBeta() {
  const [joined, setJoined] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [failed, setFailed] = useState(false);
  const formShownAt = useRef(Date.now());

  const { register, handleSubmit, watch, formState: { errors } } = useForm<JoinWaitlistRequest>({
    defaultValues: { companySize: "", industry: "" },
  });
  const industry = watch("industry");

  useEffect(() => {
    const previous = document.title;
    document.title = "Noetica free edition waitlist | SocioProphet";
    return () => {
      document.title = previous;
    };
  }, []);

  const onSubmit = async (data: JoinWaitlistRequest) => {
    setFailed(false);
    setIsPending(true);
    try {
      // The server rejects sub-second submits as bots; a person using autofill can be that fast, so wait it out.
      const remaining = MIN_FILL_MS - (Date.now() - formShownAt.current);
      if (remaining > 0) await new Promise((resolve) => setTimeout(resolve, remaining));
      await joinWaitlist(data, sourceFromUrl(), Date.now() - formShownAt.current);
      setJoined(true);
    } catch {
      setFailed(true);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="w-full">
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 border-b border-border/40">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Free self-managed edition · Coming soon</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-5 leading-[1.1]">
            Stop renting AI. Start building a brain you own.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Noetica runs today as managed deployments for organisations. Soon we&apos;re releasing a
            free, self-managed edition you can use every day on your own computer: no AI bills, your
            IP stays on your machine, and every conversation starts building a governed, compounding
            knowledge brain for you or your business. Join the waitlist to get it first.
          </p>

          <div className="bg-card border border-border p-6 md:p-8 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent" />
            {joined ? (
              <div role="status" className="animate-in fade-in duration-500">
                <h2 className="text-2xl font-bold text-white mb-3">You&apos;re on the list.</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We&apos;ll email you as soon as the free self-managed edition is ready to download.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 relative" noValidate>
                {/* Spam honeypot: hidden from people, only bots fill it in. */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  {...register("sp_field_7")}
                />
                <div>
                  <label htmlFor="waitlist-email" className={labelClass}>
                    Your email
                  </label>
                  <Input
                    id="waitlist-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="name@example.com"
                    className={inputClass}
                    aria-invalid={!!errors.email}
                    {...register("email", {
                      required: "Please enter your email address.",
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email address." },
                    })}
                  />
                  {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="waitlist-company-size" className={labelClass}>
                    Company size
                  </label>
                  <select
                    id="waitlist-company-size"
                    className={selectClass}
                    aria-invalid={!!errors.companySize}
                    {...register("companySize", { required: "Please choose your company size." })}
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    {COMPANY_SIZES.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.companySize && <p className={errorClass}>{errors.companySize.message}</p>}
                </div>

                <div>
                  <label htmlFor="waitlist-industry" className={labelClass}>
                    Industry
                  </label>
                  <select
                    id="waitlist-industry"
                    className={selectClass}
                    aria-invalid={!!errors.industry}
                    {...register("industry", { required: "Please choose your industry." })}
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    {INDUSTRIES.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.industry && <p className={errorClass}>{errors.industry.message}</p>}
                </div>

                {industry === "other" && (
                  <div>
                    <label htmlFor="waitlist-industry-other" className={labelClass}>
                      Your industry
                    </label>
                    <Input
                      id="waitlist-industry-other"
                      className={inputClass}
                      aria-invalid={!!errors.industryOther}
                      {...register("industryOther", {
                        required: "Please tell us your industry.",
                        shouldUnregister: true,
                      })}
                    />
                    {errors.industryOther && <p className={errorClass}>{errors.industryOther.message}</p>}
                  </div>
                )}

                <p className="pt-4 border-t border-border/40 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Optional
                </p>

                <div>
                  <label htmlFor="waitlist-name" className={labelClass}>
                    Your name
                  </label>
                  <Input id="waitlist-name" autoComplete="name" className={inputClass} {...register("fullName")} />
                </div>

                <div>
                  <label htmlFor="waitlist-company" className={labelClass}>
                    Company name
                  </label>
                  <Input
                    id="waitlist-company"
                    autoComplete="organization"
                    className={inputClass}
                    {...register("companyName")}
                  />
                </div>

                <div>
                  <label htmlFor="waitlist-heard" className={labelClass}>
                    How did you hear about us?
                  </label>
                  <Input id="waitlist-heard" className={inputClass} {...register("heardAbout")} />
                </div>

                <div>
                  <label htmlFor="waitlist-reason" className={labelClass}>
                    Why do you want Noetica?
                  </label>
                  <Textarea
                    id="waitlist-reason"
                    className="rounded-none bg-background border-border focus-visible:ring-primary min-h-[100px] resize-none w-full text-base"
                    {...register("reason")}
                  />
                </div>

                {failed && (
                  <p role="alert" className="text-sm text-red-400">
                    That didn&apos;t go through. Please check your connection and try again.
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full rounded-none font-semibold uppercase tracking-wider h-14 text-sm"
                >
                  {isPending ? "Joining…" : "Join the waitlist"}
                </Button>

                <p className="text-xs text-muted-foreground">
                  We&apos;ll only email you about the free Noetica edition. Unsubscribe any time. See our{" "}
                  <Link href="/privacy" className="text-primary underline underline-offset-2 hover:text-white">
                    privacy policy
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-b border-border/40">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">See what it looks like</h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            Every answer shows which model produced it, which of your documents it used, and how well
            those sources back it up. When they don&apos;t, Noetica says so.
          </p>
          <div className="space-y-12">
            {SCREENSHOTS.map((shot) => (
              <figure key={shot.src}>
                <a href={shot.src} target="_blank" rel="noopener" className="block">
                  <img
                    src={shot.src}
                    width={shot.width}
                    height={shot.height}
                    loading="lazy"
                    decoding="async"
                    alt={shot.alt}
                    className="w-full h-auto border border-border"
                  />
                </a>
                <figcaption className="mt-4 max-w-2xl">
                  <span className="block font-bold text-white mb-1">{shot.title}</span>
                  <span className="text-sm text-muted-foreground leading-relaxed">{shot.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-6">Tap an image to view it full size.</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Why join</h2>
          <div className="space-y-6 mb-14">
            {POINTS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <div className="w-12 h-12 bg-card border border-border flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-white mb-3">Available now for organisations</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Organisations already run Noetica as a managed deployment inside their own environment.
            The free self-managed edition is next, and people on the waitlist get it first.
          </p>
          <Link
            href="/products/noetica"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-white transition-colors"
          >
            See Noetica for organisations <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="text-sm text-muted-foreground leading-relaxed mt-14 pt-8 border-t border-border/40">
            Came from the MPOWER talk for the free resources? They&apos;re at{" "}
            <a
              href="https://kyroga.ai/mpower"
              className="text-primary underline underline-offset-2 hover:text-white"
            >
              kyroga.ai/mpower
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
