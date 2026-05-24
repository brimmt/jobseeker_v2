import {
  FileText,
  Mail,
  Target,
  Search,
  FolderKanban,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "AI Resume Builder",
    description:
      "Create professional, ATS-friendly resumes with AI suggestions and templates.",
  },
  {
    icon: Mail,
    title: "AI Cover Letter Generator",
    description:
      "Generate personalized cover letters tailored to each application.",
  },
  {
    icon: Target,
    title: "Smart Job Tracking",
    description:
      "Track applications, interviews, and progress from one dashboard.",
  },
  {
    icon: Search,
    title: "AI Job Search Assistance",
    description:
      "Discover jobs aligned to your skills and experience.",
  },
  {
    icon: FolderKanban,
    title: "Application Management",
    description:
      "Manage resumes, cover letters, and applications in one workflow.",
  },
  {
    icon: TrendingUp,
    title: "Career Insights",
    description:
      "Get recommendations to improve your job search strategy.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-[var(--background)] px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/10 bg-[var(--primary)]/5 px-4 py-2">
            <span className="text-sm font-medium text-[var(--primary)]">
              Powerful Features
            </span>
          </div>

          <h2 className="mb-4 text-4xl font-bold text-[var(--primary)]">
            Everything you need to succeed
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-[var(--foreground)]/70">
            AI-powered tools built to help organize, optimize, and streamline
            your job search journey.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group cursor-pointer rounded-2xl border border-[var(--border)] bg-white p-8 transition-all hover:border-[var(--primary)]/30 hover:shadow-lg"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] transition-transform group-hover:scale-110">

                  <Icon className="h-6 w-6 text-white" />

                </div>

                <h3 className="mb-3 text-xl font-semibold text-[var(--primary)]">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-[var(--foreground)]/70">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Features;