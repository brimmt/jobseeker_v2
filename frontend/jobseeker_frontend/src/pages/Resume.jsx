import { FileText, Plus, Edit, Sparkles, Download } from "lucide-react";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import { useState } from "react";
import ResumeForm from "../components/ResumeForm";

const resumeTemplates = [
  { id: "classic", name: "Classic", description: "Clean professional layout" },
  { id: "modern", name: "Modern", description: "Balanced modern design" },
  { id: "ats", name: "ATS Friendly", description: "Simple format for job systems" },
];

const savedResumes = [
  { id: 1, title: "Software Engineer Resume", lastEdited: "2 days ago" },
  { id: 2, title: "Product Manager Resume", lastEdited: "1 week ago" },
];

function Resume() {
    const [mode, setMode] = useState("dashboard");

    if (mode === "create") {
        return (
            <div className="min-h-screen bg-[var(--background)]">
                <TopNav />
                <Sidebar />

                <div className="mx-auto max-w-6xl px-6 pt-24 pb-12">
                <ResumeForm setMode={setMode} />
            </div>
            </div>
        );
    }






  return (
    <div className="min-h-screen bg-[var(--background)]">
        <TopNav />
        <Sidebar />
    <div className="mx-auto max-w-6xl px-6 pt-24 pb-12">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-semibold text-[var(--primary)]">
          Resume Builder
        </h1>
        <p className="text-lg text-[var(--secondary)]">
          Create, manage, and organize resumes for your job search.
        </p>
      </div>

      <div className="mb-10 grid gap-4 md:grid-cols-2">
        <button
          onClick={() => setMode("create")}
          className="rounded-xl border border-[var(--border)] bg-white p-6 text-left shadow-sm transition hover:shadow-md"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)] text-white">
            <Plus className="h-6 w-6" />
          </div>

          <h2 className="mb-2 text-xl font-semibold text-[var(--primary)]">
            Create Resume From Scratch
          </h2>

          <p className="text-sm text-[var(--secondary)]">
            Start with a blank resume and build it section by section.
          </p>
        </button>

        <button className="rounded-xl border border-[var(--border)] bg-white p-6 text-left opacity-70 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--secondary)] text-white">
            <Sparkles className="h-6 w-6" />
          </div>

          <h2 className="mb-2 text-xl font-semibold text-[var(--primary)]">
            Enhance Existing Resume
          </h2>

          <p className="text-sm text-[var(--secondary)]">
            Upload and improve an existing resume. Coming soon.
          </p>
        </button>
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-[var(--primary)]">
          Your Resumes
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {savedResumes.map((resume) => (
            <div
              key={resume.id}
              className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3 flex items-start justify-between">
                <FileText className="h-8 w-8 text-[var(--primary)]" />

                <button className="transition hover:opacity-70">
                  <Edit className="h-5 w-5 text-[var(--primary)]" />
                </button>
              </div>

              <h3 className="mb-1 font-semibold text-[var(--primary)]">
                {resume.title}
              </h3>

              <p className="mb-4 text-sm text-[var(--secondary)]">
                Last edited {resume.lastEdited}
              </p>

              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white opacity-70">
                <Download className="h-4 w-4" />
                Export PDF Coming Soon
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-semibold text-[var(--primary)]">
          Resume Templates
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {resumeTemplates.map((template) => (
            <div
              key={template.id}
              className="cursor-pointer rounded-xl border border-[var(--border)] bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex h-48 w-full items-center justify-center rounded-lg bg-[var(--background)]">
                <FileText className="h-16 w-16 text-[var(--secondary)]" />
              </div>

              <h3 className="mb-1 font-semibold text-[var(--primary)]">
                {template.name}
              </h3>

              <p className="text-sm text-[var(--secondary)]">
                {template.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Resume;