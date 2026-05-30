import { Menu, X, FileText } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import JobseekerAILogo from "../assets/Jobseeker_AI.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-white/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={JobseekerAILogo} alt="JobSeeker AI logo" className="h-10 md:h-10 w-auto" />
            
          </Link>
           
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-[var(--foreground)]/70 transition-colors hover:text-[var(--foreground)]">
              Features
            </a>
            <a href="#pricing" className="text-[var(--foreground)]/70 transition-colors hover:text-[var(--foreground)]">
              Memberships
            </a>
            <a href="#dashboard-preview" className="text-[var(--foreground)]/70 transition-colors hover:text-[var(--foreground)]">
              Dashboard
            </a>
            <a href="#faq" className="text-[var(--foreground)]/70 transition-colors hover:text-[var(--foreground)]">
              FAQ
            </a>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <Link
              to="/login"
              className="px-4 py-2 text-[var(--foreground)]/70 transition-colors hover:text-[var(--foreground)]"
            >
              Login
            </Link>

            <button
              disabled
              title="Sign up is coming soon!"
              className="cursor-not-allowed rounded-lg bg-[var(--primary)] px-6 py-2 text-white shadow-sm transition-all hover:bg-[#143252] hover:shadow-md"
            >
              Sign Up
            </button>
          </div>

          <button
            className="p-2 text-[var(--primary)] md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-[var(--border)] py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-[var(--foreground)]/70 hover:text-[var(--foreground)]">
                Features
              </a>
              <a href="#pricing" className="text-[var(--foreground)]/70 hover:text-[var(--foreground)]">
                Pricing
              </a>
              <a href="#dashboard-preview" className="text-[var(--foreground)]/70 hover:text-[var(--foreground)]">
                Dashboard
              </a>
              <a href="#faq" className="text-[var(--foreground)]/70 hover:text-[var(--foreground)]">
                FAQ
              </a>

              <div className="flex flex-col gap-2 border-t border-[var(--border)] pt-4">
                <Link
                  to="/login"
                  className="px-4 py-2 text-[var(--foreground)]/70 hover:text-[var(--foreground)]"
                >
                  Login
                </Link>

                 <button
              disabled
              title="Sign up is coming soon!"
              className="cursor-not-allowed rounded-lg bg-[var(--primary)] px-6 py-2 text-white shadow-sm transition-all hover:bg-[#143252] hover:shadow-md"
            >
              Sign Up
            </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;