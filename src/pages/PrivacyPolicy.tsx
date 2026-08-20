import { Link } from "wouter";
import { LockKeyhole } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";

export function PrivacyPolicy() {
  return (
    <div className="w-full">
      <PageHero
        eyebrow="Privacy"
        eyebrowIcon={<LockKeyhole className="w-4 h-4" />}
        title="Privacy Policy"
        subtitle="How SocioProphet handles the contact information you share when you request a briefing or contact our team."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />

      <main className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 md:px-8">
          <div className="prose prose-invert prose-headings:text-white prose-headings:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-li:leading-relaxed prose-strong:text-white max-w-none">
            <p className="font-mono text-xs uppercase tracking-wider text-primary !mb-10">
              Last updated: 19 August 2026
            </p>

            <h2>What this policy covers</h2>
            <p>
              This policy explains how SocioProphet handles information submitted through the
              briefing request form and other direct enquiries on this website. It is intended to
              help enterprise visitors understand what happens to their contact information before
              they decide to share it.
            </p>

            <h2>Information you choose to provide</h2>
            <p>
              When you request a briefing, we may collect your name, corporate email address,
              organisation, role or title, area of interest, and any additional context you include
              in your message. We may also keep information from subsequent correspondence so that
              we can respond consistently.
            </p>
            <p>
              Please do not include passwords, confidential customer information, production
              credentials, or other sensitive material in the form. The form is for an initial
              conversation, not for transferring restricted documents.
            </p>

            <h2>How we use contact information</h2>
            <p>We use this information to:</p>
            <ul>
              <li>respond to your enquiry and arrange a briefing or follow-up conversation;</li>
              <li>understand the regulatory, architectural, and deployment context you describe;</li>
              <li>route your request to the appropriate SocioProphet team member; and</li>
              <li>protect the website and enquiry process from misuse and maintain an accurate business record.</li>
            </ul>
            <p>
              We do not use briefing-request information to train AI models, and we do not sell
              contact information. We will not add you to unrelated marketing communications
              without a separate, appropriate choice.
            </p>

            <h2>Who may receive it</h2>
            <p>
              Access is limited to people who need the information to respond to your enquiry.
              SocioProphet may use trusted service providers to host the website, process form
              submissions, or support business communications. Those providers receive only the
              information needed for their service and are expected to protect it. We may also
              disclose information where necessary to address security, fraud, or a legal
              requirement.
            </p>

            <h2>Retention</h2>
            <p>
              We keep contact information for as long as it is reasonably needed to assess and
              follow up on the enquiry, maintain the related business record, and protect our
              systems. As an expectation, we aim to remove or anonymise inactive briefing requests
              within 24 months after the last meaningful interaction, unless an active engagement
              or a legal, security, or accounting need requires a longer period. When the
              information is no longer needed, we delete it or remove identifying details.
            </p>

            <h2>Security and your choices</h2>
            <p>
              We use reasonable administrative and technical safeguards for contact information.
              No internet transmission or storage system can be guaranteed completely secure, so
              please share only the information needed for an initial enquiry.
            </p>
            <p>
              You can ask us to tell you what contact information we hold about you, correct it,
              remove it, or stop using it for follow-up. We will consider and respond to requests
              in line with the context and any obligations that apply to the information.
            </p>

            <h2>Contact us about privacy</h2>
            <p>
              To ask a privacy question, request access or correction, or ask us to remove your
              contact information, please use the{" "}
              <Link href="/contact" className="text-primary underline underline-offset-4 hover:text-white">
                SocioProphet Contact page
              </Link>
              {" "}and select “General Enquiry.” Please mention “Privacy” in your message so we can
              route it promptly. We may need to verify the request before making changes.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy when our website, enquiry process, or information practices
              change. The date at the top of this page shows when it was most recently updated.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}