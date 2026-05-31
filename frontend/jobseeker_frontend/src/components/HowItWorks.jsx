import { Upload, Sparkles, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload or build your resume",
    description:
      "Start by uploading your existing resume or create a new one from scratch using the AI-powered builder.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Optimize your applications",
    description:
      "Generate tailored cover letters, improve your resume, and prepare stronger job applications.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Track jobs and manage your search",
    description:
      "Organize applications, track progress, and manage your job search from one dashboard.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-gradient-to-br from-[var(--primary)]/5 via-[var(--background)] to-[var(--secondary)]/5 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/10 bg-[var(--primary)]/5 px-4 py-2">
            <span className="text-sm font-medium text-[var(--primary)]">
              How It Works
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-[var(--primary)] md:text-4xl lg:text-5xl">
            Get started in three simple steps
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-[var(--foreground)]/70">
            From resume creation to application tracking, Nevara Ascend helps
            simplify the job search process.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 blur-xl" />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]">
                      <Icon className="h-10 w-10 text-white" />
                    </div>

                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--primary)] bg-white shadow-lg">
                      <span className="text-xs font-bold text-[var(--primary)]">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-[var(--primary)]">
                    {step.title}
                  </h3>

                  <p className="leading-relaxed text-[var(--foreground)]/70">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute left-[60%] top-10 hidden h-0.5 w-[80%] bg-gradient-to-r from-[var(--primary)]/30 to-transparent md:block">
                    <ArrowRight className="absolute -right-3 -top-2 h-5 w-5 text-[var(--primary)]/30" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;