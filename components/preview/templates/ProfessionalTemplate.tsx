"use client";

import { useResume } from "../../context/ResumeContext";

export default function ProfessionalTemplate() {
  const { resume } = useResume();

  return (
    <div
      id="resume-preview"
      className="min-h-[1123px] w-[794px] bg-white p-12 shadow-2xl"
    >
      {/* Header */}

      <div className="border-b-4 border-black pb-6">
        <h1 className="text-center text-5xl font-bold uppercase tracking-widest text-black">
          {resume.name || "YOUR NAME"}
        </h1>

        <p className="mt-3 text-center text-xl font-semibold text-gray-700">
          {resume.title || "Professional Title"}
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <span>{resume.email}</span>
          <span>|</span>

          <span>{resume.phone}</span>
          <span>|</span>

          <span>{resume.address}</span>
          <span>|</span>

          <span>{resume.linkedin}</span>
          <span>|</span>

          <span>{resume.github}</span>
        </div>
      </div>

      {/* Summary */}

      <section className="mt-8">
        <h2 className="border-b border-black pb-2 text-xl font-bold uppercase">
          Professional Summary
        </h2>

        <p className="mt-4 leading-7 text-gray-700">
          {resume.summary}
        </p>
      </section>

      {/* Experience */}

      <section className="mt-8">
        <h2 className="border-b border-black pb-2 text-xl font-bold uppercase">
          Experience
        </h2>

        {resume.experience.map((exp) => (
          <div key={exp.id} className="mt-6">
            <div className="flex justify-between">
              <h3 className="text-lg font-bold">
                {exp.position}
              </h3>

              <span className="text-sm text-gray-500">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>

            <p className="font-semibold">
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
        <h2 className="border-b border-black pb-2 text-xl font-bold uppercase">
          Education
        </h2>

        {resume.education.map((edu) => (
          <div key={edu.id} className="mt-6">
            <div className="flex justify-between">
              <h3 className="text-lg font-bold">
                {edu.degree}
              </h3>

              <span className="text-sm text-gray-500">
                {edu.startYear} - {edu.endYear}
              </span>
            </div>

            <p className="font-semibold">
              {edu.school}
            </p>

            <p>{edu.field}</p>
          </div>
        ))}
      </section>

      {/* Projects */}

      <section className="mt-8">
        <h2 className="border-b border-black pb-2 text-xl font-bold uppercase">
          Projects
        </h2>

        {resume.projects.map((project) => (
          <div key={project.id} className="mt-6">
            <h3 className="text-lg font-bold">
              {project.title}
            </h3>

            <p className="font-semibold">
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

      <section className="mt-8">
        <h2 className="border-b border-black pb-2 text-xl font-bold uppercase">
          Skills
        </h2>

        <div className="mt-4 flex flex-wrap gap-2">
          {resume.skills.map((skill, index) => (
            <span
              key={index}
              className="rounded border border-black px-3 py-1 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}