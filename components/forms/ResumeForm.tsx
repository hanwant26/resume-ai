"use client";

import ExperienceForm from "./ExperienceForm";
import { useResume } from "../context/ResumeContext";

export default function ResumeForm() {
  const { resume, setResume } = useResume();

  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold">
        Personal Information
      </h2>

      <div className="space-y-4">

        <input
          value={resume.name}
          onChange={(e) =>
            setResume({ ...resume, name: e.target.value })
          }
          placeholder="Full Name"
          className="w-full rounded-lg border p-3"
        />

        <input
          value={resume.email}
          onChange={(e) =>
            setResume({ ...resume, email: e.target.value })
          }
          placeholder="Email"
          className="w-full rounded-lg border p-3"
        />

        <input
          value={resume.phone}
          onChange={(e) =>
            setResume({ ...resume, phone: e.target.value })
          }
          placeholder="Phone"
          className="w-full rounded-lg border p-3"
        />

        <textarea
          value={resume.summary}
          onChange={(e) =>
            setResume({ ...resume, summary: e.target.value })
          }
          placeholder="Professional Summary"
          className="h-40 w-full rounded-lg border p-3"
        />

      </div>
      <ExperienceForm />
    </div>
  );
}
