"use client";

import { useState } from "react";
import { useResume } from "./context/ResumeContext";

export default function GenerateAIButton() {
  const { resume, setResume } = useResume();

  const [jobTitle, setJobTitle] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [loading, setLoading] = useState(false);

  const generateResume = async () => {
    if (!jobTitle || !experienceLevel) {
      alert("Please enter Job Title and Experience Level.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobTitle,
          experienceLevel,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        alert("AI generation failed.");
        setLoading(false);
        return;
      }

      const aiData = JSON.parse(data.result);

      setResume({
        ...resume,
        title: jobTitle,
        summary: aiData.summary,
        skills: aiData.skills,
        experience: aiData.experience.map((exp: any, index: number) => ({
          id: Date.now() + index,
          company: exp.company,
          position: exp.position,
          startDate: "",
          endDate: "",
          description: exp.description,
        })),
        projects: aiData.projects.map((project: any, index: number) => ({
          id: Date.now() + 100 + index,
          title: project.title,
          techStack: project.techStack,
          description: project.description,
          github: "",
        })),
      });

      alert("Resume generated successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="mt-8 rounded-lg border bg-white p-5 shadow">
      <h2 className="mb-4 text-xl font-bold">
        ✨ Generate Resume with AI
      </h2>

      <input
        placeholder="Job Title"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        className="mb-3 w-full rounded border p-3"
      />

      <input
        placeholder="Experience Level (e.g. Fresher, 2 Years)"
        value={experienceLevel}
        onChange={(e) => setExperienceLevel(e.target.value)}
        className="mb-4 w-full rounded border p-3"
      />

      <button
        onClick={generateResume}
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Generating..." : "✨ Generate with AI"}
      </button>
    </div>
  );
}