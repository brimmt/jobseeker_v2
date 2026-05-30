import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import JobseekerAILogo from "../assets/Jobseeker_AI.png";

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-32 md:pt-40">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--background)] via-blue-50/40 to-[var(--background)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(74,127,167,0.12),transparent_50%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          
          <h1 className="text-4xl font-bold leading-tight text-[var(--primary)] md:text-5xl lg:text-6xl">
            Less stress. Better applications. Faster results.
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-[var(--foreground)]/70 md:text-xl">
            Build resumes, generate cover letters, discover jobs tailored to your resume,
              and organize applications in one place.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://www.linkedin.com/company/nevaratech"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-8 py-4 text-white shadow-lg transition-all hover:bg-[#143252] hover:shadow-xl"
            >
              Stay Updated
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <Link
              to="/login"
              className="rounded-lg border border-[var(--primary)]/20 bg-white px-8 py-4 text-center text-[var(--primary)] shadow-sm transition-all hover:bg-gray-50 hover:shadow-md"
            >
              View Dashboard
            </Link>
          </div>

          <div className="grid max-w-lg grid-cols-3 gap-6 pt-4">
            <div>
              <div className="text-2xl font-bold text-[var(--primary)]">V1</div>
              <div className="text-sm text-[var(--foreground)]/60">In Development</div>
            </div>

            <div>
              <div className="text-2xl font-bold text-[var(--primary)]">5+</div>
              <div className="text-sm text-[var(--foreground)]/60">Core Tools</div>
            </div>

            <div>
              <div className="text-2xl font-bold text-[var(--primary)]">Eco Focus</div>
              <div className="text-sm text-[var(--foreground)]/60">Assisted Workflow</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 blur-3xl" />

          <div className="relative rounded-2xl border border-[var(--border)] bg-white p-6 shadow-2xl">
            <div className="relative mb-6 h-16 border-b border-[var(--border)]">
  <div className="absolute left-0 top-1/2 flex -translate-y-1/2 gap-2">
    <div className="h-3 w-3 rounded-full bg-red-400" />
    <div className="h-3 w-3 rounded-full bg-yellow-400" />
    <div className="h-3 w-3 rounded-full bg-green-400" />
  </div>

  <img
    src={JobseekerAILogo}
    alt="JobSeeker AI logo"
    className="absolute left-1/2 top-1/2 h-50 w-auto -translate-x-1/2 -translate-y-1/2 object-contain"
  />
</div>

            <div className="space-y-4">
              <DashboardRow
                icon="📄"
                title="Resume Builder"
                subtitle="Create targeted resumes"
                status="Active"
                color="bg-[var(--primary)]"
                badge="bg-green-100 text-green-700"
              />

              <DashboardRow
                icon="✉️"
                title="Cover Letters"
                subtitle="Generate role-specific letters"
                status="Ready"
                color="bg-[var(--secondary)]"
                badge="bg-blue-100 text-blue-700"
              />

              <DashboardRow
                icon="🎯"
                title="Job Tracker"
                subtitle="Track applications in one place"
                status="Tracking"
                color="bg-[var(--accent)]"
                badge="bg-purple-100 text-purple-700"
              />

              <div className="mt-6 rounded-lg border border-[var(--primary)]/10 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>

                  <div>
                    <div className="mb-1 text-sm font-medium text-[var(--primary)]">
                      Resume Insights
                    </div>
                    <div className="text-xs text-[var(--foreground)]/70">
                      Your resume is almost ready. Add stronger project keywords
                      to improve role matching.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardRow({ icon, title, subtitle, status, color, badge }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${color}`}>
        <span className="text-lg text-white">{icon}</span>
      </div>

      <div className="flex-1">
        <div className="text-sm font-medium text-[var(--foreground)]">{title}</div>
        <div className="text-xs text-[var(--foreground)]/60">{subtitle}</div>
      </div>

      <div className={`rounded-full px-3 py-1 text-xs ${badge}`}>{status}</div>
    </div>
  );
}

export default Hero;