"use client";

import { useResume } from "../context/ResumeContext";

export default function ResumePreview() {
  const { resume } = useResume();

  return (
    <div className="min-h-[900px] rounded-xl bg-white p-8 shadow-xl">

      {/* Header */}
      <h1 className="text-4xl font-bold">
        {resume.name || "Your Name"}
      </h1>

      <p className="mt-2 text-xl text-blue-600">
        {resume.title || "Professional Title"}
      </p>

      <div className="mt-4 space-y-1 text-gray-600">
        <p>{resume.email}</p>
        <p>{resume.phone}</p>
        <p>{resume.address}</p>
        <p>{resume.linkedin}</p>
        <p>{resume.github}</p>
        <p>{resume.portfolio}</p>
      </div>

      {/* Summary */}
      <hr className="my-6" />

      <h2 className="mb-3 text-xl font-bold">
        Professional Summary
      </h2>

      <p className="text-gray-700">
        {resume.summary ||
          "Your professional summary will appear here..."}
      </p>

      {/* Experience */}
      <hr className="my-6" />

      <h2 className="mb-4 text-xl font-bold">
        Experience
      </h2>

      {resume.experience.map((exp) => (
        <div key={exp.id} className="mb-6">
          <h3 className="text-lg font-bold">
            {exp.position || "Position"}
          </h3>

          <p className="text-gray-600">
            {exp.company || "Company"}
          </p>

          <p className="mt-2">
            {exp.description}
          </p>
        </div>
      ))}

      {/* Education */}
      <hr className="my-6" />

      <h2 className="mb-4 text-xl font-bold">
        Education
      </h2>

      {resume.education.map((edu) => (
        <div key={edu.id} className="mb-6">
          <h3 className="font-bold">
            {edu.degree || "Degree"}
          </h3>

          <p>
            {edu.school || "University"}
          </p>

          <p className="text-gray-600">
            {edu.field}
          </p>
        </div>
      ))}

      {/* Projects */}
      <hr className="my-6" />

      <h2 className="mb-4 text-xl font-bold">
        Projects
      </h2>

      {resume.projects.map((project) => (
        <div key={project.id} className="mb-6">
          <h3 className="font-bold">
            {project.title || "Project Title"}
          </h3>

          <p className="text-gray-600">
            {project.techStack}
          </p>

          <p className="mt-2">
            {project.description}
          </p>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              GitHub Repository
            </a>
          )}
        </div>
      ))}
    </div>
  );
}