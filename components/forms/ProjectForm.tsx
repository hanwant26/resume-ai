"use client";

import { useResume } from "../context/ResumeContext";

import Button from "../ui/Button";
import Card from "../ui/Card";
import Input from "../ui/Input";
import SectionTitle from "../ui/SectionTitle";

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
      <div className="mb-5 flex items-center justify-between">
        <SectionTitle title="Projects" />

        <Button
          onClick={addProject}
          className="bg-purple-600 hover:bg-purple-700"
        >
          + Add Project
        </Button>
      </div>

      {resume.projects.map((project) => (
        <Card key={project.id}>
          <Input
            value={project.title}
            placeholder="Project Title"
            onChange={(e) =>
              updateProject(
                project.id,
                "title",
                e.target.value
              )
            }
          />

          <Input
            value={project.techStack}
            placeholder="Tech Stack"
            onChange={(e) =>
              updateProject(
                project.id,
                "techStack",
                e.target.value
              )
            }
          />

          <Input
            value={project.github}
            placeholder="GitHub Repository URL"
            onChange={(e) =>
              updateProject(
                project.id,
                "github",
                e.target.value
              )
            }
          />

          <textarea
            value={project.description}
            onChange={(e) =>
              updateProject(
                project.id,
                "description",
                e.target.value
              )
            }
            placeholder="Project Description"
            className="mt-3 h-32 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
          />
        </Card>
      ))}
    </div>
  );
}