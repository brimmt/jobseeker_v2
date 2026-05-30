import { useState } from "react";
import { Shield, FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function Legal() {
  const [activeSection, setActiveSection] = useState("privacy");

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-semibold text-[var(--primary)]">
            JobSeeker <span className="text-[var(--secondary)]">AI</span>
          </h1>

          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-[var(--foreground)]/60 hover:text-[var(--primary)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[var(--primary)]">
            Legal Information
          </h2>
          <p className="text-[var(--foreground)]/70">
            Privacy Policy and Terms of Service for JobSeeker AI.
          </p>
        </div>

        <div className="mx-auto mb-8 flex w-fit gap-4 rounded-lg border border-[var(--border)] bg-white p-2">
          <button
            onClick={() => setActiveSection("privacy")}
            className={`flex items-center gap-2 rounded-lg px-6 py-3 font-medium ${
              activeSection === "privacy"
                ? "bg-[var(--primary)] text-white shadow-md"
                : "text-[var(--foreground)]/70 hover:bg-[var(--primary)]/5 hover:text-[var(--primary)]"
            }`}
          >
            <Shield className="h-5 w-5" />
            Privacy Policy
          </button>

          <button
            onClick={() => setActiveSection("terms")}
            className={`flex items-center gap-2 rounded-lg px-6 py-3 font-medium ${
              activeSection === "terms"
                ? "bg-[var(--primary)] text-white shadow-md"
                : "text-[var(--foreground)]/70 hover:bg-[var(--primary)]/5 hover:text-[var(--primary)]"
            }`}
          >
            <FileText className="h-5 w-5" />
            Terms of Service
          </button>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-lg md:p-12">
          {activeSection === "privacy" ? <PrivacyPolicy /> : <TermsOfService />}
        </div>

        <div className="mt-8 text-center text-sm text-[var(--foreground)]/60">
          <p>Last updated: May 30, 2026</p>
          <p className="mt-2">
            Questions? Contact{" "}
            <a
              href="mailto:info@nevaratech.com"
              className="text-[var(--primary)] hover:underline"
            >
              info@nevaratech.com
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[var(--primary)]">
        Privacy Policy
      </h2>

      <LegalSection title="1. Information We Collect">
       <p> We may collect information that you voluntarily provide when creating an account or using JobSeeker AI, including: <br /> <br />

    • First and last name <br />
    • Email address <br />
    • Account credentials <br />
    • Resume and career information <br />
    • Cover letters and application materials <br />
    • Job preferences and search criteria <br />
    • Usage and interaction data <br />
    • Feedback and support requests <br /> <br />


    We do not collect payment information directly. Payment processing, if offered, is handled through trusted third-party providers.
    </p>
      </LegalSection>

      <LegalSection title="2. How We Use Information">
        We use your information to provide the app, generate resumes and cover
        letters, manage applications, improve features, provide support, and
        communicate service updates.
      </LegalSection>

      <LegalSection title="3. Information Sharing">
        <p>We do not sell your personal information. <br /> <br />

We may share limited information with trusted third-party service providers that help us operate JobSeeker AI. Examples may include: <br /> <br />

• Authentication providers <br />
• Cloud hosting providers <br />
• AI service providers used to generate resume and career recommendations <br />            
• Job search and job matching providers <br />
• Analytics and monitoring services <br /> <br />

These providers only receive the information necessary to perform their services and are contractually expected to protect user data. <br /> <br />

We do not share personal information such as names, email addresses, phone numbers, or physical addresses with third parties for marketing purposes without your consent. </p>
      </LegalSection>

      <LegalSection title="4. Data Security">
        <p> We implement reasonable administrative, technical, and organizational safeguards to protect user information.

Security measures may include: <br /> <br />

• Encryption of data in transit using HTTPS/TLS <br />
• Secure password hashing and storage <br />
• Secure authentication and authorization controls <br />
• Restricted access to sensitive systems <br />
• Monitoring and logging of critical services <br />
• Cloud-hosted infrastructure with industry-standard security controls <br /> <br />

While we take reasonable precautions to protect user data, no method of transmission or storage is completely secure. Users should carefully review information before submitting it to the platform. </p>
      </LegalSection>

      <LegalSection title="5. Your Choices">
        You may request access, correction, deletion, or export of your account
        data by contacting support.
      </LegalSection>

      <LegalSection title="6. Changes">
        We may update this policy as the product evolves. Updates will be posted
        on this page.
      </LegalSection>
    </div>
  );
}

function TermsOfService() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[var(--primary)]">
        Terms of Service
      </h2>

      <LegalSection title="1. Acceptance of Terms">
        By using JobSeeker AI, you agree to these Terms and the Privacy Policy.
      </LegalSection>

      <LegalSection title="2. Service Description">
        JobSeeker AI provides resume creation, cover letter generation, job
        tracking, and related job search tools.
      </LegalSection>

      <LegalSection title="3. User Responsibilities">
        You are responsible for the accuracy of your information, protecting
        your account credentials, and reviewing all generated content before use.
      </LegalSection>

      <LegalSection title="4. AI-Generated Content">
        AI outputs are suggestions only. JobSeeker AI does not guarantee job
        interviews, offers, employment outcomes, or the accuracy of generated
        content.
      </LegalSection>

      <LegalSection title="5. Payments and Plans">
        Paid plans, if offered, may be billed monthly. Pricing and plan features
        may change as the beta evolves.
      </LegalSection>

      <LegalSection title="6. Acceptable Use">
        You may not misuse the service, attempt unauthorized access, upload
        harmful content, or use the platform for illegal activity.
      </LegalSection>

      <LegalSection title="7. Limitation of Liability">
        The service is provided as-is. JobSeeker AI and NevaraTech are not
        responsible for employment outcomes or indirect damages.
      </LegalSection>

      <LegalSection title="8. Changes to Terms">
        These terms may be updated over time. Continued use of the service means
        you accept the updated terms.
      </LegalSection>
    </div>
  );
}

function LegalSection({ title, children }) {
  return (
    <section>
      <h3 className="mb-3 text-2xl font-semibold text-[var(--primary)]">
        {title}
      </h3>
      <p className="leading-relaxed text-[var(--foreground)]/80">{children}</p>
    </section>
  );
}

export default Legal;