"use client";

import { useState } from "react";
import { useResume } from "../context/ResumeContext";

export default function SkillsForm() {
  const { resume, setResume } = useResume();
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    const trimmed = skill.trim();

    if (!trimmed) return;

    // Prevent duplicate skills
    if (resume.skills.includes(trimmed)) {
      setSkill("");
      return;
    }

    setResume({
      ...resume,
      skills: [...resume.skills, trimmed],
    });

    setSkill("");
  };

  const removeSkill = (index: number) => {
    setResume({
      ...resume,
      skills: resume.skills.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="mt-10">
      <h2 className="mb-4 text-2xl font-bold">
        Skills
      </h2>

      <div className="flex gap-3">
        <input
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addSkill();
            }
          }}
          placeholder="Enter a skill (e.g. React)"
          className="flex-1 rounded-lg border p-3"
        />

        <button
          type="button"
          onClick={addSkill}
          className="rounded-lg bg-blue-600 px-5 text-white hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {resume.skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2"
          >
            <span>{skill}</span>

            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="font-bold text-red-600"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}