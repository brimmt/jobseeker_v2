import { Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Explorer",
    price: "$0",
    period: "during beta",
    description: "Perfect for exploring JobSeeker AI",
    features: [
      "Resume creation",
      "Cover letter generation",
      "Basic job tracking",
      "Application management",
      "Community support",
    ],
    cta: "Beta Access",
    popular: true,
  },

  {
    name: "Ascender",
    price: "TBD",
    period: "after beta",
    description: "For active job seekers",
    features: [
      "Everything in Free",
      "Resume optimization",
      "Advanced job tracking",
      "Career insights",
      "Priority support",
      "Early access to new features",
    ],
    cta: "Coming Soon",
    popular: false,
  },

  {
    name: "Summiter",
    price: "TBD",
    period: "after beta",
    description: "For professionals and power users",
    features: [
      "Everything in Pro",
      "Interview preparation",
      "LinkedIn optimization",
      "Advanced career recommendations",
      "Dedicated support",
      "Future premium features",
    ],
    cta: "Coming Soon",
    popular: false,
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      className="px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/10 bg-[var(--primary)]/5 px-4 py-2">

            <span className="text-sm font-medium text-[var(--primary)]">
              Pricing Plans
            </span>

          </div>

          <h2 className="mb-4 text-3xl font-bold text-[var(--primary)] md:text-4xl lg:text-5xl">
            Choose the right plan
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-[var(--foreground)]/70">
              Beta access is limited while pricing and plan features are finalized.

          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`relative rounded-2xl border-2 bg-white p-8 transition-all ${
                plan.popular
                  ? "scale-105 border-[var(--primary)] shadow-2xl"
                  : "border-[var(--border)] hover:border-[var(--primary)]/30 hover:shadow-lg"
              }`}
            >

              {plan.popular && (

                <div className="absolute -top-4 left-1/2 -translate-x-1/2">

                  <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-4 py-1 text-sm font-medium text-white">

                    <Sparkles className="h-3 w-3" />

                    Beta

                  </div>

                </div>

              )}

              <div className="mb-6 text-center">

                <h3 className="mb-2 text-2xl font-bold text-[var(--primary)]">
                  {plan.name}
                </h3>

                <p className="mb-4 text-sm text-[var(--foreground)]/60">
                  {plan.description}
                </p>

                <div className="flex items-baseline justify-center gap-1">

                  <span className="text-4xl font-bold text-[var(--primary)]">
                    {plan.price}
                  </span>

                  <span className="text-[var(--foreground)]/60">
                    /{plan.period}
                  </span>

                </div>

              </div>

              {plan.name === "Free" ? (
                  <a
              href="https://www.linkedin.com/company/nevaratech"
              target="_blank"
              rel="noreferrer"
              className="mb-6 block w-full rounded-lg bg-[var(--primary)] py-3 text-center font-medium text-white shadow-lg transition-all hover:bg-[#143252]"
            >
              {plan.cta}
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="mb-6 block w-full cursor-not-allowed rounded-lg border border-gray-200 bg-gray-100 py-3 text-center font-medium text-gray-500"
              title="Coming soon"
            >
              {plan.cta}
            </button>
          )}

              <ul className="space-y-3">

                {plan.features.map((feature) => (

                  <li
                    key={feature}
                    className="flex items-start gap-3"
                  >

                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />

                    <span className="text-[var(--foreground)]/80">
                      {feature}
                    </span>

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Pricing;