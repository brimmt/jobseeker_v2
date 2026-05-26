import { Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "1 resume generation per month",
      "3 cover letters per month",
      "Basic job tracking",
      "10 saved applications",
      "Community support",
    ],
    cta: "Get Started",
    popular: false,
  },

  {
    name: "Pro",
    price: "$3.99",
    period: "per month",
    description: "Best for active job seekers",
    features: [
      "Unlimited resume generation",
      "Unlimited cover letters",
      "Advanced job tracking",
      "Unlimited saved jobs",
      "Priority support",
      "Resume optimization",
    ],
    cta: "Start Free Trial",
    popular: true,
  },

  {
    name: "Premium",
    price: "$7.99",
    period: "per month",
    description: "For serious professionals",
    features: [
      "Everything in Pro",
      "Interview preparation",
      "LinkedIn optimization",
      "Resume review tools",
      "Career recommendations",
      "Dedicated support",
    ],
    cta: "Start Free Trial",
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
            Start free and upgrade when you need more tools.
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

                    Most Popular

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

              <Link
                to="/signup"
                className={`mb-6 block w-full rounded-lg py-3 text-center font-medium transition-all ${
                  plan.popular
                    ? "bg-[var(--primary)] text-white shadow-lg hover:bg-[#143252]"
                    : "border border-[var(--primary)]/20 bg-[var(--primary)]/5 text-[var(--primary)] hover:bg-[var(--primary)]/10"
                }`}
              >
                {plan.cta}
              </Link>

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