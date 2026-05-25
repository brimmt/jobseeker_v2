import { Link, useLocation } from "react-router-dom";
import {
  FileText,
  Mail,
  Search,
  Briefcase,
  User,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Home,
} from "lucide-react";
import { useState, useEffect } from "react";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/dashboard" },
  { icon: FileText, label: "Resume", path: "/resume" },
  { icon: Mail, label: "Cover Letter", path: "/cover-letter" },
  { icon: Search, label: "Job Search", path: "/job-search" },
  { icon: Briefcase, label: "Manage Jobs", path: "/manage-jobs" },
  { icon: User, label: "Manage Account", path: "/account" },
  { icon: HelpCircle, label: "Knowledge Base", path: "/knowledge-base" },
];

function Sidebar() {
  const location = useLocation();

  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    function checkMobile() {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    }

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <aside
      className={`fixed left-0 top-16 z-20 h-[calc(100vh-4rem)] border-r border-[var(--border)] bg-white transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex h-full flex-col">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-6 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] transition-colors hover:bg-gray-50"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4 text-[var(--primary)]" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-[var(--primary)]" />
          )}
        </button>

        <nav className="flex-1 px-3 py-6">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    title={isCollapsed ? item.label : undefined}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${
                      isActive
                        ? "bg-[var(--primary)] text-white shadow-sm"
                        : "text-[var(--primary)] hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="h-5 w-5 shrink-0" />

                    {!isCollapsed && (
                      <span className="text-sm font-medium">
                        {item.label}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;