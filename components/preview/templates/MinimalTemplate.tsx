"use client";

import { useResume } from "../../context/ResumeContext";

export default function MinimalTemplate() {
  const { resume } = useResume();

  return (
    <div
      id="resume-preview"
      className="min-h-[1123px] w-[794px] bg-white p-12 shadow-2xl"
    >
      {/* Header */}

      <div className="text-center">
        <h1 className="text-5xl font-light uppercase tracking-[8px]">
          {resume.name || "Your Name"}
        </h1>

        <p className="mt-3 text-lg text-gray-600">
          {resume.title || "Professional Title"}
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <span>{resume.email}</span>
          <span>{resume.phone}</span>
          <span>{resume.address}</span>
          <span>{resume.linkedin}</span>
          <span>{resume.github}</span>
        </div>
      </div>

      {/* Summary */}

      <section className="mt-10">
        <h2 className="mb-3 text-xl font-semibold uppercase tracking-wider">
          Summary
        </h2>

        <p className="leading-7 text-gray-700">
          {resume.summary}
        </p>
      </section>

      {/* Experience */}

      <section className="mt-10">
        <h2 className="mb-3 text-xl font-semibold uppercase tracking-wider">
          Experience
        </h2>

        {resume.experience.map((exp) => (
          <div key={exp.id} className="mb-6">
            <div className="flex justify-between">
              <h3 className="font-semibold">
                {exp.position}
              </h3>

              <span className="text-sm text-gray-500">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>

            <p className="italic text-gray-600">
              {exp.company}
            </p>

            <p className="mt-2 whitespace-pre-line text-gray-700">
              {exp.description}
            </p>
          </div>
        ))}
      </section>

      {/* Education */}

      <section className="mt-10">
        <h2 className="mb-3 text-xl font-semibold uppercase tracking-wider">
          Education
        </h2>

        {resume.education.map((edu) => (
          <div key={edu.id} className="mb-6">
            <div className="flex justify-between">
              <h3 className="font-semibold">
                {edu.degree}
              </h3>

              <span className="text-sm text-gray-500">
                {edu.startYear} - {edu.endYear}
              </span>
            </div>

            <p>{edu.school}</p>

            <p className="text-gray-600">
              {edu.field}
            </p>
          </div>
        ))}
      </section>

      {/* Projects */}

      <section className="mt-10">
        <h2 className="mb-3 text-xl font-semibold uppercase tracking-wider">
          Projects
        </h2>

        {resume.projects.map((project) => (
          <div key={project.id} className="mb-6">
            <h3 className="font-semibold">
              {project.title}
            </h3>

            <p className="text-gray-600">
              {project.techStack}
            </p>

            <p className="mt-2">
              {project.description}
            </p>

            <div className="mt-2 flex gap-5">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  GitHub
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-600 underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}

      <section className="mt-10">
        <h2 className="mb-3 text-xl font-semibold uppercase tracking-wider">
          Skills
        </h2>

        <div className="flex flex-wrap gap-2">
          {resume.skills.map((skill, index) => (
            <span
              key={index}
              className="border-b border-gray-400 pb-1 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}