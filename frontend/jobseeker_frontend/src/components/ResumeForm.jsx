import { useState } from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";

const TEMPLATES = [
  {
    id: "classic",
    label: "Classic",
    description: "Traditional layout, timeless and professional",
  },
  {
    id: "modern",
    label: "Modern",
    description: "Clean lines, contemporary design",
  },
  {
    id: "ats_friendly",
    label: "ATS Friendly",
    description: "Optimized for applicant tracking systems",
  },
];

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  title: "",
  summary: "",
  school: "",
  degreeOrCertification: "",
  fieldOfStudy: "",
  year: "",
  company: "",
  jobTitle: "",
  startDate: "",
  endDate: "",
  description: "",
  skills: "",
};

function ResumeForm({ setMode }) {
  const [step, setStep] = useState("form");
  const [formData, setFormData] = useState(initialForm);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const required = [
      "firstName",
      "lastName",
      "email",
      "city",
      "state",
      "title",
      "summary",
      "school",
      "degreeOrCertification",
      "company",
      "jobTitle",
      "startDate",
      "description",
      "skills",
    ];

    const next = {};

    for (const key of required) {
      if (!formData[key].trim()) {
        next[key] = "This field is required";
      }
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setStep("template");
    }
  };

  const buildPayload = () => ({
    title: formData.title,
    source: "scratch",
    template_type: selectedTemplate,
    document_type: "resume",
    content: {
      personal: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        state: formData.state,
      },
      summary: formData.summary,
      education: [
        {
          school: formData.school,
          degreeOrCertification: formData.degreeOrCertification,
          fieldOfStudy: formData.fieldOfStudy,
          year: formData.year,
        },
      ],
      experience: [
        {
          company: formData.company,
          jobTitle: formData.jobTitle,
          startDate: formData.startDate,
          endDate: formData.endDate,
          description: formData.description,
        },
      ],
      skills: formData.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
    },
  });

  const handleCreateResume = async () => {
  if (!selectedTemplate) return;

  setStep("loading");

  const payload = buildPayload();
  const token = localStorage.getItem("accessToken");

  try {
    const response = await fetch("http://127.0.0.1:8000/api/resume/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Resume creation failed:", errorData);
      setStep("template");
      return;
    }

    const createdResume = await response.json();
    console.log("Resume created:", createdResume);

    setMode("dashboard");
  } catch (error) {
    console.error("Network error creating resume:", error);
    setStep("template");
  }

  console.log("Creating resume with payload:", payload);
  console.log("Using token:", token);
};

  const inputClass = (field) =>
    `w-full px-4 py-2.5 rounded-lg border text-sm transition-colors outline-none focus:ring-2 ${
      errors[field]
        ? "border-red-400 focus:ring-red-200"
        : "border-gray-200 focus:ring-blue-100 focus:border-[#4A7FA7]"
    }`;

  const labelClass = "block text-sm font-medium mb-1.5 text-[#1A3D63]";
  const sectionHeadingClass =
    "text-base font-semibold text-[#1A3D63] mb-4 pb-2 border-b border-gray-100";

  if (step === "loading") {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#4A7FA7] border-t-transparent" />
        <p className="font-medium text-[#1A3D63]">Creating your resume…</p>
      </div>
    );
  }

  if (step === "template") {
    return (
      <div className="mx-auto max-w-2xl px-4 py-10">
        <button
          type="button"
          onClick={() => setStep("form")}
          className="mb-6 flex items-center gap-2 text-sm text-[#4A7FA7] transition-colors hover:text-[#1A3D63]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to form
        </button>

        <h2 className="mb-2 text-2xl font-semibold text-[#1A3D63]">
          Choose a Template
        </h2>

        <p className="mb-8 text-sm text-[#4A7FA7]">
          Select the template that best fits your style and industry.
        </p>

        <div className="mb-8 grid gap-4">
          {TEMPLATES.map((template) => (
            <button
              key={template.id}
              type="button"
              onClick={() => setSelectedTemplate(template.id)}
              className={`flex w-full items-center justify-between rounded-xl border-2 px-5 py-4 text-left transition-all ${
                selectedTemplate === template.id
                  ? "border-[#1A3D63] bg-[#F6FAFD]"
                  : "border-gray-200 bg-white hover:border-[#4A7FA7]"
              }`}
            >
              <div>
                <p className="font-semibold text-[#1A3D63]">
                  {template.label}
                </p>
                <p className="mt-0.5 text-sm text-[#4A7FA7]">
                  {template.description}
                </p>
              </div>

              {selectedTemplate === template.id && (
                <CheckCircle className="h-5 w-5 shrink-0 text-[#1A3D63]" />
              )}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleCreateResume}
          disabled={!selectedTemplate}
          className="w-full rounded-lg bg-[#1A3D63] py-3 font-medium text-white transition-opacity disabled:opacity-40"
        >
          Create Resume
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <button
        type="button"
        onClick={() => setMode("dashboard")}
        className="mb-6 flex items-center gap-2 text-sm text-[#4A7FA7] transition-colors hover:text-[#1A3D63]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Resume Builder
      </button>

      <h2 className="mb-2 text-2xl font-semibold text-[#1A3D63]">
        Create New Resume
      </h2>

      <p className="mb-8 text-sm text-[#4A7FA7]">
        Fill in your information to build a professional resume from scratch.
      </p>

      <form onSubmit={handleFormSubmit} noValidate className="space-y-8">
        <section>
          <h3 className={sectionHeadingClass}>Personal Information</h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InputField
              label="First Name *"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={inputClass("firstName")}
              error={errors.firstName}
              placeholder="Jane"
            />

            <InputField
              label="Last Name *"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={inputClass("lastName")}
              error={errors.lastName}
              placeholder="Doe"
            />

            <InputField
              label="Email *"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass("email")}
              error={errors.email}
              placeholder="jane@example.com"
            />

            <InputField
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass("phone")}
              placeholder="+1 (555) 000-0000"
            />

            <InputField
              label="City *"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={inputClass("city")}
              error={errors.city}
              placeholder="Atlanta"
            />

            <InputField
              label="State *"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={inputClass("state")}
              error={errors.state}
              placeholder="GA"
            />
          </div>
        </section>

        <section>
          <h3 className={sectionHeadingClass}>Resume Details</h3>

          <div className="space-y-4">
            <InputField
              label="Resume Title *"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={inputClass("title")}
              error={errors.title}
              placeholder="Software Engineer Resume"
            />

            <TextAreaField
              label="Professional Summary *"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              className={inputClass("summary")}
              error={errors.summary}
              placeholder="Briefly describe your background, strengths, and goals..."
            />
          </div>
        </section>

        <section>
          <h3 className={sectionHeadingClass}>Education / Certifications</h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <InputField
                label="School or Organization *"
                name="school"
                value={formData.school}
                onChange={handleChange}
                className={inputClass("school")}
                error={errors.school}
                placeholder="Georgia State University"
              />
            </div>

            <InputField
              label="Degree or Certification *"
              name="degreeOrCertification"
              value={formData.degreeOrCertification}
              onChange={handleChange}
              className={inputClass("degreeOrCertification")}
              error={errors.degreeOrCertification}
              placeholder="M.S. Software Engineering"
            />

            <InputField
              label="Field of Study"
              name="fieldOfStudy"
              value={formData.fieldOfStudy}
              onChange={handleChange}
              className={inputClass("fieldOfStudy")}
              placeholder="Software Engineering"
            />

            <InputField
              label="Graduation / Completion Year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className={inputClass("year")}
              placeholder="2026"
            />
          </div>
        </section>

        <section>
          <h3 className={sectionHeadingClass}>Experience</h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InputField
              label="Company *"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={inputClass("company")}
              error={errors.company}
              placeholder="NevaraTech"
            />

            <InputField
              label="Job Title *"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className={inputClass("jobTitle")}
              error={errors.jobTitle}
              placeholder="Software Engineer"
            />

            <InputField
              label="Start Date *"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className={inputClass("startDate")}
              error={errors.startDate}
              placeholder="Jan 2024"
            />

            <InputField
              label="End Date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className={inputClass("endDate")}
              placeholder="Present"
            />

            <div className="sm:col-span-2">
              <TextAreaField
                label="Description *"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className={inputClass("description")}
                error={errors.description}
                placeholder="Describe your responsibilities and achievements..."
              />
            </div>
          </div>
        </section>

        <section>
          <h3 className={sectionHeadingClass}>Skills</h3>

          <InputField
            label="Skills *"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className={inputClass("skills")}
            error={errors.skills}
            placeholder="React, Python, Django, SQL"
          />

          <p className="mt-1.5 text-xs text-[#4A7FA7]">
            Separate skills with commas.
          </p>
        </section>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="mb-6 block w-full rounded-lg bg-[var(--primary)] py-3 text-center font-medium text-white shadow-lg transition-all hover:bg-[#143252]"
          >
            Continue to Template Selection
          </button>
        </div>
      </form>
    </div>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  className,
  error,
  placeholder,
  type = "text",
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-[#1A3D63]">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
      />

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function TextAreaField({
  label,
  name,
  value,
  onChange,
  className,
  error,
  placeholder,
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-[#1A3D63]">
        {label}
      </label>

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        className={className}
        placeholder={placeholder}
      />

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default ResumeForm;