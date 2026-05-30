import { Mail} from "lucide-react";
import LinkedIn from "../assets/linkedin-svgrepo-com.svg";
import JobseekerAILogo from "../assets/Jobseeker_AI.png";
import legal from "../pages/Legal";


function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="relative mb-4 h-12 w-48 overflow-hidden">
  <img
    src={JobseekerAILogo}
    alt="JobSeeker AI"
    className="absolute left-0 top-1/2 h-15 w-auto -translate-y-1/2 object-contain"
  />
</div>

            <p className="mt-3 max-w-sm text-sm text-[var(--foreground)]/70">
              Build resumes, generate cover letters, discover jobs, and organize
              applications in one place.
            </p>

            <p className="mt-3 text-sm text-[var(--secondary)]">
              Built by NevaraTech · Currently in beta
            </p>
            
            <div className="mt-3 flex items-center gap-4">

  <a
    href="mailto:info@nevaratech.com"
    className="text-[var(--primary)] hover:opacity-80"
  >
    <Mail className="h-5 w-5" />
  </a>

  <a
    href="https://www.linkedin.com/company/nevaratech"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 text-sm text-[var(--foreground)]/70 hover:text-[var(--primary)]"
  >
    <img
      src={LinkedIn}
      alt="LinkedIn"
      className="h-5 w-5"
    />

    

  </a>

</div>



          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[var(--primary)]">
              Product
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-[var(--foreground)]/70 hover:text-[var(--primary)]">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-[var(--foreground)]/70 hover:text-[var(--primary)]">
                  Memberships
                </a>
              </li>
              <li>
                <a href="#dashboard-preview" className="text-[var(--foreground)]/70 hover:text-[var(--primary)]">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[var(--foreground)]/70 hover:text-[var(--primary)]">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[var(--primary)]">
              Company
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.linkedin.com/company/nevaratech" target="_blank" rel="noreferrer" className="text-[var(--foreground)]/70 hover:text-[var(--primary)]">
                  About
                </a>
              </li>
              <li>
                <a href="mailto:info@nevaratech.com" className="text-[var(--foreground)]/70 hover:text-[var(--primary)]">
                  Contact
                </a>
              </li>
              <li>
                <a href="/legal" className="text-[var(--foreground)]/70 hover:text-[var(--primary)]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/legal" className="text-[var(--foreground)]/70 hover:text-[var(--primary)]">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-8">
          <p className="text-sm text-[var(--foreground)]/60">
            © {new Date().getFullYear()} JobSeeker AI. Built by NevaraTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;