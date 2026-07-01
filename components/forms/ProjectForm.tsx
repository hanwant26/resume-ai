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
          liveDemo: "",
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

  const deleteProject = (id: number) => {
    setResume({
      ...resume,
      projects: resume.projects.filter(
        (project) => project.id !== id
      ),
    });
  };

  return (
    <div className="mt-10">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Projects
        </h2>

        <button
          type="button"
          onClick={addProject}
          className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
        >
          + Add Project
        </button>
      </div>

      {resume.projects.map((project) => (
        <div
          key={project.id}
          className="mb-6 rounded-lg border bg-white p-5 shadow"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              Project
            </h3>

            <button
              type="button"
              onClick={() => deleteProject(project.id)}
              className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
            >
              Delete
            </button>
          </div>

          <input
            type="text"
            value={project.title}
            onChange={(e) =>
              updateProject(project.id, "title", e.target.value)
            }
            placeholder="Project Title"
            className="mb-3 w-full rounded border p-3"
          />

          <input
            type="text"
            value={project.techStack}
            onChange={(e) =>
              updateProject(project.id, "techStack", e.target.value)
            }
            placeholder="Tech Stack (React, Next.js, Node.js...)"
            className="mb-3 w-full rounded border p-3"
          />

          <input
            type="url"
            value={project.github}
            onChange={(e) =>
              updateProject(project.id, "github", e.target.value)
            }
            placeholder="GitHub Repository URL"
            className="mb-3 w-full rounded border p-3"
          />

          <input
            type="url"
            value={project.liveDemo}
            onChange={(e) =>
              updateProject(project.id, "liveDemo", e.target.value)
            }
            placeholder="Live Demo URL"
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