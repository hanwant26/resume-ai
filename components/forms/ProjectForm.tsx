"use client";

import { useResume } from "../context/ResumeContext";

export default function ProjectForm() {
  const { resume, setResume } = useResume();

  const addProject = () => {
    setResume({
      ...resume,
      projects: [
        ...resume.projects,
        {
          id: Date.now(),
          title: "",
          techStack: "",
          description: "",
          github: "",
        },
      ],
    });
  };

  const updateProject = (
    id: number,
    field: string,
    value: string
  ) => {
    setResume({
      ...resume,
      projects: resume.projects.map((project) =>
        project.id === id
          ? { ...project, [field]: value }
          : project
      ),
    });
  };

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projects</h2>

        <button
          onClick={addProject}
          className="rounded-lg bg-purple-600 px-4 py-2 text-white"
        >
          + Add Project
        </button>
      </div>

      {resume.projects.map((project) => (
        <div
          key={project.id}
          className="mt-5 rounded-lg border bg-white p-5 shadow"
        >
          <input
            value={project.title}
            onChange={(e) =>
              updateProject(project.id, "title", e.target.value)
            }
            placeholder="Project Title"
            className="mb-3 w-full rounded border p-3"
          />

          <input
            value={project.techStack}
            onChange={(e) =>
              updateProject(project.id, "techStack", e.target.value)
            }
            placeholder="Tech Stack"
            className="mb-3 w-full rounded border p-3"
          />

          <input
            value={project.github}
            onChange={(e) =>
              updateProject(project.id, "github", e.target.value)
            }
            placeholder="GitHub URL"
            className="mb-3 w-full rounded border p-3"
          />

          <textarea
            value={project.description}
            onChange={(e) =>
              updateProject(project.id, "description", e.target.value)
            }
            placeholder="Project Description"
            className="h-32 w-full rounded border p-3"
          />
        </div>
      ))}
    </div>
  );
}