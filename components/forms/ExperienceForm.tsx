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

  const deleteExperience = (id: number) => {
    setResume({
      ...resume,
      experience: resume.experience.filter((exp) => exp.id !== id),
    });
  };

  return (
    <div className="mt-10">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Experience
        </h2>

        <button
          type="button"
          onClick={addExperience}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          + Add Experience
        </button>
      </div>

      {resume.experience.map((exp) => (
        <div
          key={exp.id}
          className="mb-6 rounded-lg border bg-white p-5 shadow"
        >
          <div className="mb-4 flex justify-between">
            <h3 className="text-lg font-semibold">
              Experience
            </h3>

            <button
              type="button"
              onClick={() => deleteExperience(exp.id)}
              className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
            >
              Delete
            </button>
          </div>

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

          <div className="mb-3 grid grid-cols-2 gap-3">
            <input
              type="month"
              value={exp.startDate}
              onChange={(e) =>
                updateExperience(exp.id, "startDate", e.target.value)
              }
              className="rounded border p-3"
            />

            <input
              type="month"
              value={exp.endDate}
              onChange={(e) =>
                updateExperience(exp.id, "endDate", e.target.value)
              }
              className="rounded border p-3"
            />
          </div>

          <textarea
            value={exp.description}
            onChange={(e) =>
              updateExperience(exp.id, "description", e.target.value)
            }
            placeholder="Describe your work, achievements, technologies used..."
            className="h-32 w-full rounded border p-3"
          />
        </div>
      ))}
    </div>
  );
}