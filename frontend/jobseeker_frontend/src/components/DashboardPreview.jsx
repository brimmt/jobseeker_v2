import {
  LayoutDashboard,
  FileText,
  Mail,
  Target,
  Settings,
  Bell,
  User,
  Search,
  MoreHorizontal,
  Briefcase,
} from "lucide-react";

const previewApps = [
  { company: "TechCorp", role: "Frontend Developer", status: "Applied", color: "gray" },
  { company: "HealthTech Co.", role: "Junior Software Developer", status: "In Review", color: "blue" },
  { company: "DataWorks", role: "Python Developer", status: "Saved", color: "green" },
];

function DashboardPreview() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/10 bg-[var(--primary)]/5 px-4 py-2">
            <span className="text-sm font-medium text-[var(--primary)]">
              Dashboard Preview
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-[var(--primary)] md:text-4xl lg:text-5xl">
            Manage your job search from one workspace
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-[var(--foreground)]/70">
            Keep resumes, cover letters, saved jobs, and applications organized
            as you move through your job search.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-2xl">
            <div className="flex h-[600px]">
              <aside className="hidden w-64 flex-col bg-gradient-to-b from-[var(--primary)] to-[#143252] p-6 text-white md:flex">
                <div className="mb-8 flex items-center gap-3">
                  
                  <span className="font-semibold">JobSeeker AI</span>
                </div>

                <nav className="flex-1 space-y-2">
                  <PreviewNavItem icon={LayoutDashboard} label="Dashboard" active />
                  <PreviewNavItem icon={FileText} label="Resume Builder" />
                  <PreviewNavItem icon={Mail} label="Cover Letters" />
                  <PreviewNavItem icon={Target} label="Job Search" />
                  <PreviewNavItem icon={Briefcase} label="Manage Jobs" />
                </nav>

                <div className="border-t border-white/20 pt-4">
                  <PreviewNavItem icon={Settings} label="Settings" />
                </div>
              </aside>

              <div className="flex-1 overflow-y-auto bg-gray-50/50">
                <div className="border-b border-[var(--border)] bg-white px-6 py-4 md:px-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-[var(--primary)]">
                        Dashboard
                      </h3>
                      <p className="text-sm text-[var(--foreground)]/60">
                        Your job search workspace
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button className="relative rounded-lg p-2 transition-colors hover:bg-gray-100">
                        <Bell className="h-5 w-5 text-[var(--foreground)]/70" />
                        <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
                      </button>

                      <button className="rounded-lg p-2 transition-colors hover:bg-gray-100">
                        <User className="h-5 w-5 text-[var(--foreground)]/70" />
                      </button>
                    </div>
                  </div>

                  <div className="relative mt-4">
                    <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--foreground)]/40" />
                    <input
                      type="text"
                      placeholder="Search saved jobs or applications..."
                      className="w-full rounded-lg border border-[var(--border)] bg-gray-50 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                      readOnly
                    />
                  </div>
                </div>

                <div className="space-y-6 p-6 md:p-8">
                  <div className="grid gap-6 md:grid-cols-3">
                    <PreviewStat title="Resumes" value="3" note="Drafts ready" />
                    <PreviewStat title="Cover Letters" value="5" note="Generated drafts" />
                    <PreviewStat title="Saved Jobs" value="12" note="Tracked in one place" />
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-6 text-white">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="mb-1 font-semibold">
                          Resume Match Preview
                        </h3>
                        <p className="text-sm text-white/80">
                          Compare your resume against a job description and
                          identify keywords to improve.
                        </p>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                        <span className="text-xl">✨</span>
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="mb-2 flex justify-between text-sm">
                        <span>Backend Developer Role</span>
                        <span>82%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/20">
                        <div className="h-2 w-[82%] rounded-full bg-white" />
                      </div>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-white">
                    <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-4">
                      <h3 className="font-semibold text-[var(--primary)]">
                        Recent Applications
                      </h3>
                      <button className="text-sm text-[var(--primary)] hover:underline">
                        View all
                      </button>
                    </div>

                    <div className="divide-y divide-[var(--border)]">
                      {previewApps.map((app) => (
                        <div
                          key={`${app.company}-${app.role}`}
                          className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-gray-50"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20">
                              <span className="text-sm font-bold text-[var(--primary)]">
                                {app.company[0]}
                              </span>
                            </div>

                            <div>
                              <div className="font-medium text-[var(--primary)]">
                                {app.role}
                              </div>
                              <div className="text-sm text-[var(--foreground)]/60">
                                {app.company}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <StatusBadge status={app.status} color={app.color} />

                            <button className="rounded p-1 hover:bg-gray-100">
                              <MoreHorizontal className="h-4 w-4 text-[var(--foreground)]/40" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-[var(--foreground)]/60">
            Preview uses sample data for demonstration.
          </p>
        </div>
      </div>
    </section>
  );
}

function PreviewNavItem({ icon: Icon, label, active = false }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
        active ? "bg-white/20 backdrop-blur-sm" : "hover:bg-white/10"
      }`}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </div>
  );
}

function PreviewStat({ title, value, note }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-white p-6">
      <div className="mb-1 text-sm text-[var(--foreground)]/60">{title}</div>
      <div className="text-3xl font-bold text-[var(--primary)]">{value}</div>
      <div className="mt-1 text-xs text-[var(--secondary)]">{note}</div>
    </div>
  );
}

function StatusBadge({ status, color }) {
  const styles = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    gray: "bg-gray-100 text-gray-700",
  };

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-medium ${styles[color]}`}>
      {status}
    </span>
  );
}

export default DashboardPreview;