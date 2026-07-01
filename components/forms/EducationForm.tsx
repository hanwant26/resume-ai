"use client";

import { useResume } from "../context/ResumeContext";

export default function EducationForm() {
  const { resume, setResume } = useResume();

  const addEducation = () => {
    setResume({
      ...resume,
      education: [
        ...resume.education,
        {
          id: Date.now(),
          school: "",
          degree: "",
          field: "",
          startYear: "",
          endYear: "",
        },
      ],
    });
  };

  const updateEducation = (
    id: number,
    field: string,
    value: string
  ) => {
    setResume({
      ...resume,
      education: resume.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const deleteEducation = (id: number) => {
    setResume({
      ...resume,
      education: resume.education.filter((edu) => edu.id !== id),
    });
  };

  return (
    <div className="mt-10">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Education
        </h2>

        <button
          type="button"
          onClick={addEducation}
          className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          + Add Education
        </button>
      </div>

      {resume.education.map((edu) => (
        <div
          key={edu.id}
          className="mb-6 rounded-lg border bg-white p-5 shadow"
        >
          <div className="mb-4 flex justify-between">
            <h3 className="text-lg font-semibold">
              Education
            </h3>

            <button
              type="button"
              onClick={() => deleteEducation(edu.id)}
              className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
            >
              Delete
            </button>
          </div>

          <input
            value={edu.school}
            onChange={(e) =>
              updateEducation(edu.id, "school", e.target.value)
            }
            placeholder="School / University"
            className="mb-3 w-full rounded border p-3"
          />

          <input
            value={edu.degree}
            onChange={(e) =>
              updateEducation(edu.id, "degree", e.target.value)
            }
            placeholder="Degree"
            className="mb-3 w-full rounded border p-3"
          />

          <input
            value={edu.field}
            onChange={(e) =>
              updateEducation(edu.id, "field", e.target.value)
            }
            placeholder="Field of Study"
            className="mb-3 w-full rounded border p-3"
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              value={edu.startYear}
              onChange={(e) =>
                updateEducation(edu.id, "startYear", e.target.value)
              }
              placeholder="Start Year"
              className="rounded border p-3"
            />

            <input
              type="number"
              value={edu.endYear}
              onChange={(e) =>
                updateEducation(edu.id, "endYear", e.target.value)
              }
              placeholder="End Year"
              className="rounded border p-3"
            />
          </div>
        </div>
      ))}
    </div>
  );
}