"use client";

import { useResume } from "../context/ResumeContext";

import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import ProjectForm from "./ProjectForm";
import SkillsForm from "./SkillsForm";

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
          value={resume.title}
          onChange={(e) =>
            setResume({ ...resume, title: e.target.value })
          }
          placeholder="Professional Title"
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

        <input
          value={resume.address}
          onChange={(e) =>
            setResume({ ...resume, address: e.target.value })
          }
          placeholder="Address"
          className="w-full rounded-lg border p-3"
        />

        <input
          value={resume.linkedin}
          onChange={(e) =>
            setResume({ ...resume, linkedin: e.target.value })
          }
          placeholder="LinkedIn URL"
          className="w-full rounded-lg border p-3"
        />

        <input
          value={resume.github}
          onChange={(e) =>
            setResume({ ...resume, github: e.target.value })
          }
          placeholder="GitHub URL"
          className="w-full rounded-lg border p-3"
        />

        <input
          value={resume.portfolio}
          onChange={(e) =>
            setResume({ ...resume, portfolio: e.target.value })
          }
          placeholder="Portfolio Website"
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

      <EducationForm />

      <ProjectForm />

      <SkillsForm />

    </div>
  );
}