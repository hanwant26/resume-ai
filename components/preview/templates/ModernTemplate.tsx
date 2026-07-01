"use client";

import { useResume } from "../../context/ResumeContext";

export default function ModernTemplate() {
  const { resume } = useResume();

  return (
    <div
      id="resume-preview"
      className="min-h-[1123px] w-[794px] bg-white p-12 shadow-2xl"
    >
      {/* Header */}

      <div className="border-b-4 border-blue-600 pb-6">
        <h1 className="text-5xl font-bold uppercase tracking-wide text-gray-900">
          {resume.name || "Your Name"}
        </h1>

        <p className="mt-2 text-2xl font-semibold text-blue-600">
          {resume.title || "Professional Title"}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-2 text-sm text-gray-700">
          <p>{resume.email}</p>
          <p>{resume.phone}</p>
          <p>{resume.address}</p>
          <p>{resume.linkedin}</p>
          <p>{resume.github}</p>
          <p>{resume.portfolio}</p>
        </div>
      </div>

      {/* Summary */}

      <section className="mt-8">
        <h2 className="mb-3 border-b-2 border-blue-500 pb-2 text-2xl font-bold uppercase">
          Professional Summary
        </h2>

        <p className="leading-7 text-gray-700">
          {resume.summary}
        </p>
      </section>

      {/* Experience */}

      <section className="mt-8">
        <h2 className="mb-3 border-b-2 border-blue-500 pb-2 text-2xl font-bold uppercase">
          Experience
        </h2>

        {resume.experience.map((exp) => (
          <div key={exp.id} className="mb-6">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold">
                {exp.position}
              </h3>

              <span className="text-sm text-gray-500">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>

            <p className="font-semibold text-blue-600">
              {exp.company}
            </p>

            <p className="mt-2 whitespace-pre-line text-gray-700">
              {exp.description}
            </p>
          </div>
        ))}
      </section>

      {/* Education */}

      <section className="mt-8">
        <h2 className="mb-3 border-b-2 border-blue-500 pb-2 text-2xl font-bold uppercase">
          Education
        </h2>

        {resume.education.map((edu) => (
          <div key={edu.id} className="mb-6">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold">
                {edu.degree}
              </h3>

              <span className="text-sm text-gray-500">
                {edu.startYear} - {edu.endYear}
              </span>
            </div>

            <p className="font-semibold text-blue-600">
              {edu.school}
            </p>

            <p>{edu.field}</p>
          </div>
        ))}
      </section>

      {/* Projects */}

      <section className="mt-8">
        <h2 className="mb-3 border-b-2 border-blue-500 pb-2 text-2xl font-bold uppercase">
          Projects
        </h2>

        {resume.projects.map((project) => (
          <div key={project.id} className="mb-6">
            <h3 className="text-xl font-semibold">
              {project.title}
            </h3>

            <p className="font-medium text-blue-600">
              {project.techStack}
            </p>

            <p className="mt-2 text-gray-700">
              {project.description}
            </p>

            <div className="mt-2 flex gap-6">
              {project.github && (
                <a
                  href={project.github}
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  className="text-green-600 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}

      <section className="mt-8">
        <h2 className="mb-3 border-b-2 border-blue-500 pb-2 text-2xl font-bold uppercase">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {resume.skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}