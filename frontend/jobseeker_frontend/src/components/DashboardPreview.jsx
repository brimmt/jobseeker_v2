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
import AscendNevara from "../assets/AscendNevara-cut.png";
import nevaraDashboard from "../assets/nevaratech-dashboard.png";
const previewApps = [
  { company: "TechCorp", role: "Frontend Developer", status: "Applied", color: "gray" },
  { company: "HealthTech Co.", role: "Junior Software Developer", status: "In Review", color: "blue" },
  { company: "DataWorks", role: "Python Developer", status: "Saved", color: "green" },
];

function DashboardPreview() {
  return (
    <section 
    id="dashboard-preview"
    className="px-6 py-20 md:py-28">
      
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
                          <img
                  src={nevaraDashboard}
                  alt="Nevara Ascend Dashboard"
                  className="w-full"
                />
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