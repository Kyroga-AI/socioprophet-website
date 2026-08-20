import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ShieldCheck, Mail, Building } from "lucide-react";
import { submitLead, type CreateLeadRequest } from "@/lib/lead-api";
import { Link } from "wouter";

const PRODUCT_OPTIONS: { value: CreateLeadRequest["productInterest"]; label: string }[] = [
  { value: "noetica", label: "Noetica" },
  { value: "prophet-platform", label: "Prophet Platform" },
  { value: "scope-d", label: "SCOPE-D" },
  { value: "general", label: "General Enquiry" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [mutationError, setMutationError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<CreateLeadRequest>();

  const onSubmit = async (data: CreateLeadRequest) => {
    setMutationError(null);
    setIsPending(true);

    try {
      await submitLead(data);
      setSubmitted(true);
      reset();
    } catch (error) {
      setMutationError(
        error instanceof Error
          ? error.message
          : "{mutationError}",
      );
    } finally {
      setIsPending(false);
    }
  };

  const inputClass =
    "rounded-none bg-background border-border focus-visible:ring-primary h-12 w-full";
  const labelClass =
    "block text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mb-2";
  const errorClass = "text-xs text-red-400 mt-1";

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium uppercase tracking-wider mb-6">
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Start building intelligence you own.
            </h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-md leading-relaxed">
              Tell us where your organisation is using AI today and where you need the value to
              accumulate. We will start with your existing tools, boundaries, and highest-value work.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-card border border-border flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">A direct conversation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Bring the questions your teams are already asking about ownership, evidence,
                    deployment, and the work you want AI to improve.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-card border border-border flex items-center justify-center shrink-0">
                  <Building className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Inside your boundary</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We can discuss private-cloud, on-premise, and air-gapped deployment contexts
                    around your organisation's data and operating constraints.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border p-8 md:p-10 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent" />

            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Request Received</h3>
                <p className="text-muted-foreground mb-2">
                  Our engineering team will review your requirements and reach out securely to
                  schedule a briefing.
                </p>
                <p className="text-sm text-muted-foreground mb-8">
                  Expect a response within two business days.
                </p>
                <Button
                  variant="outline"
                  className="rounded-none border-border"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} htmlFor="firstName">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      className={inputClass}
                      aria-invalid={!!errors.firstName}
                      {...register("firstName", { required: "Required" })}
                    />
                    {errors.firstName && (
                      <p className={errorClass}>{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="lastName">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      className={inputClass}
                      aria-invalid={!!errors.lastName}
                      {...register("lastName", { required: "Required" })}
                    />
                    {errors.lastName && (
                      <p className={errorClass}>{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="email">
                    Corporate Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    className={inputClass}
                    aria-invalid={!!errors.email}
                    {...register("email", {
                      required: "Required",
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                    })}
                  />
                  {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                </div>

                <div>
                  <label className={labelClass} htmlFor="organisation">
                    Organisation
                  </label>
                  <Input
                    id="organisation"
                    className={inputClass}
                    aria-invalid={!!errors.organisation}
                    {...register("organisation", { required: "Required" })}
                  />
                  {errors.organisation && (
                    <p className={errorClass}>{errors.organisation.message}</p>
                  )}
                </div>

                <div>
                  <label className={labelClass} htmlFor="role">
                    Role / Title
                  </label>
                  <Input
                    id="role"
                    className={inputClass}
                    placeholder="e.g. Chief Risk Officer"
                    aria-invalid={!!errors.role}
                    {...register("role", { required: "Required" })}
                  />
                  {errors.role && <p className={errorClass}>{errors.role.message}</p>}
                </div>

                <div>
                  <label className={labelClass} htmlFor="productInterest">
                    Area of Interest
                  </label>
                  <select
                    id="productInterest"
                    className="rounded-none bg-background border border-border text-white h-12 w-full px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    aria-invalid={!!errors.productInterest}
                    {...register("productInterest", { required: "Required" })}
                  >
                    <option value="" disabled>
                      Select one…
                    </option>
                    {PRODUCT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.productInterest && (
                    <p className={errorClass}>{errors.productInterest.message}</p>
                  )}
                </div>

                <div>
                  <label className={labelClass} htmlFor="message">
                    Additional Context{" "}
                    <span className="text-muted-foreground normal-case font-normal">(optional)</span>
                  </label>
                  <Textarea
                    id="message"
                    className="rounded-none bg-background border-border focus-visible:ring-primary min-h-[100px] resize-none w-full"
                    placeholder="Regulatory requirements, deployment constraints, timelines…"
                    {...register("message")}
                  />
                </div>

                {mutationError && (
                  <p className="text-sm text-red-400 text-center">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full rounded-none font-semibold uppercase tracking-wider h-14 text-sm mt-2"
                >
                  {isPending ? "Submitting…" : "Submit Request"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our{" "}
                  <Link
                    href="/privacy"
                    className="text-primary underline underline-offset-2 hover:text-white"
                  >
                    privacy policy
                  </Link>{" "}
                  and secure handling of your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
