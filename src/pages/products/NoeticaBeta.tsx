import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "wouter";
import { ArrowRight, History, Laptop, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { joinWaitlist, type JoinWaitlistRequest } from "@/lib/waitlist-api";

const DEFAULT_SOURCE = "mpower-2026";
const MIN_FILL_MS = 1_200;

const POINTS = [
  {
    icon: Laptop,
    title: "Runs on your own device",
    body: "Noetica works on your computer, so what your business knows stays with you.",
  },
  {
    icon: ShieldCheck,
    title: "Nothing you type trains anyone else's model",
    body: "Your questions, notes and documents are never used to improve someone else's AI.",
  },
  {
    icon: History,
    title: "Bring your ChatGPT or Claude history",
    body: "Move your existing conversations and prompts across instead of starting from scratch.",
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

  const { register, handleSubmit, formState: { errors } } = useForm<JoinWaitlistRequest>();

  useEffect(() => {
    const previous = document.title;
    document.title = "Noetica early access | SocioProphet";
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
      await joinWaitlist({ ...data, source: sourceFromUrl() }, Date.now() - formShownAt.current);
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
            <span>Noetica early access</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-5 leading-[1.1]">
            AI where the knowledge stays yours.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Noetica today is built for larger organisations. We&apos;re building a version for
            businesses your size. Leave your email and we&apos;ll let you know when it&apos;s ready.
          </p>

          <div className="bg-card border border-border p-6 md:p-8 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent" />
            {joined ? (
              <div role="status" className="animate-in fade-in duration-500">
                <h2 className="text-2xl font-bold text-white mb-3">You&apos;re on the list.</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We&apos;ll email you when there&apos;s a version you can try. We don&apos;t have a
                  date yet.
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
                <label
                  htmlFor="waitlist-email"
                  className="block text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider"
                >
                  Your email
                </label>
                <Input
                  id="waitlist-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="name@example.com"
                  className="rounded-none bg-background border-border focus-visible:ring-primary h-12 w-full text-base"
                  aria-invalid={!!errors.email}
                  {...register("email", {
                    required: "Please enter your email address.",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email address." },
                  })}
                />
                {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}

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
                  We&apos;ll only email you about Noetica early access. Unsubscribe any time. See our{" "}
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

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">What Noetica is about</h2>
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

          <h2 className="text-xl font-bold text-white mb-3">Where things stand today</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Right now Noetica is used by larger organisations with strict rules about their data, and
            the rest of this website is written for them. If you&apos;d like to see what it does
            today, you&apos;re welcome to read about it.
          </p>
          <Link
            href="/products/noetica"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-white transition-colors"
          >
            Read about Noetica today <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
