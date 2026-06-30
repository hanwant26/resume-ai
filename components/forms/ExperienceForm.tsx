"use client";

import { useResume } from "../context/ResumeContext";

export default function ExperienceForm() {
  const { resume, setResume } = useResume();

  const addExperience = () => {
    setResume({
      ...resume,
      experience: [
        ...resume.experience,
        {
          id: Date.now(),
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    });
  };

  const updateExperience = (
    id: number,
    field: string,
    value: string
  ) => {
    setResume({
      ...resume,
      experience: resume.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Experience</h2>

        <button
          onClick={addExperience}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white"
        >
          + Add Experience
        </button>
      </div>

      {resume.experience.map((exp) => (
        <div
          key={exp.id}
          className="mt-6 rounded-lg border bg-white p-5 shadow"
        >
          <input
            value={exp.company}
            onChange={(e) =>
              updateExperience(exp.id, "company", e.target.value)
            }
            placeholder="Company"
            className="mb-3 w-full rounded border p-3"
          />

          <input
            value={exp.position}
            onChange={(e) =>
              updateExperience(exp.id, "position", e.target.value)
            }
            placeholder="Position"
            className="mb-3 w-full rounded border p-3"
          />

          <textarea
            value={exp.description}
            onChange={(e) =>
              updateExperience(exp.id, "description", e.target.value)
            }
            placeholder="Job Description"
            className="h-32 w-full rounded border p-3"
          />
        </div>
      ))}
    </div>
  );
}