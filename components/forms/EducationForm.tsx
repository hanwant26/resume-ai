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

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold">
          Education
        </h2>

        <button
          onClick={addEducation}
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Education
        </button>

      </div>

      {resume.education.map((edu) => (
        <div
          key={edu.id}
          className="mt-5 rounded-lg border bg-white p-5 shadow"
        >

          <input
            value={edu.school}
            onChange={(e) =>
              updateEducation(
                edu.id,
                "school",
                e.target.value
              )
            }
            placeholder="School / University"
            className="mb-3 w-full rounded border p-3"
          />

          <input
            value={edu.degree}
            onChange={(e) =>
              updateEducation(
                edu.id,
                "degree",
                e.target.value
              )
            }
            placeholder="Degree"
            className="mb-3 w-full rounded border p-3"
          />

          <input
            value={edu.field}
            onChange={(e) =>
              updateEducation(
                edu.id,
                "field",
                e.target.value
              )
            }
            placeholder="Field of Study"
            className="mb-3 w-full rounded border p-3"
          />

        </div>
      ))}
    </div>
  );
}