import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does JobSeeker AI work?",
    answer:
      "JobSeeker AI helps you create resumes, generate cover letters, and organize job applications using AI-assisted tools.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is a priority. User data should be protected with authentication, backend authorization checks, and secure environment variables. More production security controls will be added before public launch.",
  },
  {
    question: "Can I track applications?",
    answer:
      "Yes. The dashboard is designed to help you save jobs, track application statuses, and manage your job search workflow.",
  },
  {
    question: "Does AI write my resume?",
    answer:
      "AI helps generate and improve resume content, but you stay in control. You can edit, review, and customize every result.",
  },
  {
    question: "Can I use it for free?",
    answer:
      "Yes. The free plan includes limited resume and cover letter generation, plus basic job tracking.",
  },
  {
    question: "What makes JobSeeker AI different?",
    answer:
      "It brings resume creation, cover letters, job search, and application tracking into one simple workspace.",
  },
];

function FAQ() {
  return (
    <section
      id="faq"
      className="bg-gradient-to-b from-[var(--background)] to-[var(--primary)]/5 px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/10 bg-[var(--primary)]/5 px-4 py-2">
            <span className="text-sm font-medium text-[var(--primary)]">
              FAQ
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-[var(--primary)] md:text-4xl lg:text-5xl">
            Frequently asked questions
          </h2>

          <p className="text-lg text-[var(--foreground)]/70">
            Everything you need to know about JobSeeker AI.
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={faq.question}
              value={`item-${index}`}
              className="overflow-hidden rounded-xl border border-[var(--border)] bg-white"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50">
                  <span className="pr-4 font-medium text-[var(--primary)]">
                    {faq.question}
                  </span>

                  <ChevronDown className="h-5 w-5 shrink-0 text-[var(--foreground)]/40 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="px-6 pb-5 pt-0 leading-relaxed text-[var(--foreground)]/70">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

export default FAQ;