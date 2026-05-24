import { Link } from "react-router-dom";
import { FileText, Mail, Search, Briefcase, User } from "lucide-react";

const dashboardCards = [
  {
    icon: FileText,
    title: "Resume Builder",
    description: "Create and customize professional resumes with AI assistance",
    path: "/resume",
    color: "#1A3D63",
  },
  {
    icon: Mail,
    title: "Cover Letter Generator",
    description: "Generate tailored cover letters for any job application",
    path: "/cover-letter",
    color: "#1A3D63",
  },
  {
    icon: Search,
    title: "Job Search",
    description: "Find and explore job opportunities matching your profile",
    path: "/job-search",
    color: "#1A3D63",
  },
  {
    icon: Briefcase,
    title: "Manage Jobs",
    description: "Track applications and organize your job search pipeline",
    path: "/manage-jobs",
    color: "#1A3D63",
  },
  {
    icon: User,
    title: "Manage Account",
    description: "Update your profile, preferences, and account settings",
    path: "/account",
    color: "#1A3D63",
  },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-[var(--background)] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-semibold text-[var(--primary)]">
            Welcome to JobSeeker AI
          </h1>

          <p className="text-lg text-[var(--secondary)]">
            Your intelligent companion for job search success
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dashboardCards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.path}
                to={card.path}
                className="group rounded-2xl border border-[var(--border)] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-full flex-col">
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: card.color }}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="mb-2 text-xl font-semibold text-[var(--primary)]">
                    {card.title}
                  </h3>

                  <p className="text-sm text-[var(--secondary)]">
                    {card.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;