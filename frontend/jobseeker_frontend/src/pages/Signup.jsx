import { useState } from "react";
import { Check, ArrowRight, User, Mail, Lock, Sparkles, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const pricingTiers = [
  {
    id: "free",
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
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "$3.99",
    period: "per month",
    description: "Best for active job seekers",
    features: [
      "Unlimited resume generations",
      "Unlimited cover letters",
      "Advanced job tracking",
      "Unlimited saved applications",
      "AI job search assistance",
      "Priority support",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "$7.99",
    period: "per month",
    description: "For serious professionals",
    features: [
      "Everything in Pro",
      "Personal career coach AI",
      "Interview preparation",
      "Salary negotiation tools",
      "LinkedIn optimization",
      "1-on-1 career consultation",
    ],
    popular: false,
  },
];

function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedTier, setSelectedTier] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handleTierSelect(tierId) {
    setSelectedTier(tierId);
    setStep(2);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/accounts/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          tier: selectedTier,
        }),
      });

      const data = await response.json();
      console.log("Sign up", data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Sign up error:", error);
    }

     }
    

     const selectedTierData = pricingTiers.find((tier) => tier.id === selectedTier);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)] px-4 py-12">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--primary)]/5 via-[var(--background)] to-[var(--secondary)]/5" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(74,127,167,0.1),transparent_50%)]" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <Link to="/" className="mb-6 inline-flex items-center justify-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)] text-white shadow-sm">
              <FileText className="h-5 w-5" />
            </div>

            <span className="text-xl font-semibold text-[var(--primary)]">
              JobSeeker <span className="text-[var(--secondary)]">AI</span>
            </span>
          </Link>

          <h1 className="mb-2 text-3xl font-bold text-[var(--primary)]">
            Create your account
          </h1>

          <p className="text-[var(--foreground)]/70">
            {step === 1 ? "Choose the plan that works for you" : "Complete your registration"}
          </p>
        </div>

        {step === 1 && (
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                onClick={() => handleTierSelect(tier.id)}
                className={`relative cursor-pointer rounded-2xl border-2 bg-white p-8 transition-all hover:shadow-xl ${
                  tier.popular
                    ? "scale-105 border-[var(--primary)] shadow-xl"
                    : "border-[var(--border)] hover:border-[var(--primary)]/30"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-4 py-1 text-sm font-medium text-white">
                      <Sparkles className="h-3 w-3" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-6 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-[var(--primary)]">
                    {tier.name}
                  </h3>

                  <p className="mb-4 text-sm text-[var(--foreground)]/60">
                    {tier.description}
                  </p>

                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-[var(--primary)]">
                      {tier.price}
                    </span>
                    <span className="text-[var(--foreground)]/60">/{tier.period}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className={`mb-6 w-full rounded-lg py-3 font-medium transition-all ${
                    tier.popular
                      ? "bg-[var(--primary)] text-white shadow-md hover:bg-[#143252]"
                      : "border border-[var(--primary)]/20 bg-[var(--primary)]/5 text-[var(--primary)] hover:bg-[var(--primary)]/10"
                  }`}
                >
                  Get Started
                </button>

                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                      <span className="text-sm text-[var(--foreground)]/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="mx-auto max-w-md">
            <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-lg">
              <div className="mb-6 rounded-lg border border-[var(--primary)]/10 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-[var(--foreground)]/60">Selected Plan</div>
                    <div className="font-semibold text-[var(--primary)]">
                      {selectedTierData?.name} - {selectedTierData?.price}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-sm text-[var(--primary)] hover:underline"
                  >
                    Change
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    id="firstName"
                    label="First Name"
                    type="text"
                    icon={User}
                    value={formData.firstName}
                    placeholder="John"
                    onChange={(value) => setFormData({ ...formData, firstName: value })}
                  />

                  <InputField
                    id="lastName"
                    label="Last Name"
                    type="text"
                    icon={User}
                    value={formData.lastName}
                    placeholder="Doe"
                    onChange={(value) => setFormData({ ...formData, lastName: value })}
                  />
                </div>

                <InputField
                  id="email"
                  label="Email Address"
                  type="email"
                  icon={Mail}
                  value={formData.email}
                  placeholder="you@example.com"
                  onChange={(value) => setFormData({ ...formData, email: value })}
                />

                <div>
                  <InputField
                    id="password"
                    label="Password"
                    type="password"
                    icon={Lock}
                    value={formData.password}
                    placeholder="••••••••"
                    onChange={(value) => setFormData({ ...formData, password: value })}
                  />
                  <p className="mt-1 text-xs text-[var(--foreground)]/60">
                    Must be at least 8 characters
                  </p>
                </div>

                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-[var(--border)] text-[var(--primary)] focus:ring-[var(--primary)]/20"
                    required
                  />

                  <span className="text-sm text-[var(--foreground)]/70">
                    I agree to the{" "}
                    <a href="#" className="text-[var(--primary)] hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[var(--primary)] hover:underline">
                      Privacy Policy
                    </a>
                  </span>
                </label>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--primary)] py-3 font-medium text-white shadow-md transition-all hover:bg-[#143252] hover:shadow-lg"
                >
                  Create Account
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-[var(--foreground)]/70">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-[var(--primary)] hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="text-sm text-[var(--foreground)]/60 transition-colors hover:text-[var(--primary)]"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function InputField({ id, label, type, icon: Icon, value, placeholder, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-[var(--primary)]">
        {label}
      </label>

      <div className="relative">
        <Icon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--foreground)]/40" />

        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-[var(--border)] bg-white py-3 pl-10 pr-4 transition-all focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
          required
        />
      </div>
    </div>
  );
}

export default Signup;