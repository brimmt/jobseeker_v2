import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does Nevara Ascend work?",
    answer:
      "Nevara Ascend helps simplify the job search process by bringing resume creation, cover letter generation, job discovery, and application tracking into one workspace.\n\nUsers can create and refine application materials with AI-assisted tools, organize opportunities, and manage their progress throughout the job search journey.\n\nOur goal is to reduce stress, save time, and help professionals stay focused on landing the right opportunity.",
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
      "Yes. Nevara Ascend offers a free plan called the Explorer Tier. It includes limited resume and cover letter generation, as well as basic job tracking features. We believe professional career tools should be accessible to everyone. \n\nThe Explorer Tier allows users to experience the platform at no cost, while optional paid plans provide expanded capabilities, higher limits, and additional automation features for power users.",
  },
  {
    question: "What makes Nevara Ascend different?",
    answer:
      "Nevara Ascend is more than a resume builder. It brings resume creation, cover letters, job search, and application tracking into one workspace designed to reduce the stress and complexity of the job hunt. \n\nOur mission is to support professionals throughout their career journey, not just during the application process. From preparing application materials to organizing opportunities and managing career growth, Ascend is built to help users stay focused, confident, and in control. \n\nAs part of the NevaraTech ecosystem, Ascend also embraces responsible AI practices. We continuously research sustainable and efficient approaches to AI development with the goal of delivering valuable tools while minimizing unnecessary resource consumption.",
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
            Everything you need to know about Nevara Ascend.
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

              <Accordion.Content className="px-6 pb-5 pt-0 leading-relaxed text-[var(--foreground)]/70 whitespace-pre-line">
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