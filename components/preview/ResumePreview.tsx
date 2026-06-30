"use client";

import { useResume } from "../context/ResumeContext";

export default function ResumePreview() {
  const { resume } = useResume();

  return (
    <div className="min-h-[900px] rounded-xl bg-white p-8 shadow-xl">

      <h1 className="text-4xl font-bold">
        {resume.name || "Your Name"}
      </h1>

      <p className="mt-2 text-gray-500">
        {resume.email || "you@example.com"}
      </p>

      <p className="text-gray-500">
        {resume.phone}
      </p>

      <hr className="my-6" />

      <h2 className="text-xl font-bold">
        Professional Summary
      </h2><hr className="my-6" />

<h2 className="mb-4 text-xl font-bold">
  Experience
</h2>

{resume.experience.map((exp) => (
  <div key={exp.id} className="mb-6">
    <h3 className="font-bold text-lg">
      {exp.position || "Position"}
    </h3>

    <p className="text-gray-600">
      {exp.company || "Company"}
    </p>

    <p className="mt-2 text-gray-700">
      {exp.description}
    </p>
  </div>
))}


      <p className="mt-3 text-gray-700">
        {resume.summary || "Your professional summary will appear here..."}
      </p>

    </div>
  );
}