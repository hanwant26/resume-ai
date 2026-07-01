"use client";

import { useState } from "react";
import { useResume } from "../context/ResumeContext";

import Button from "../ui/Button";
import Card from "../ui/Card";
import Input from "../ui/Input";
import SectionTitle from "../ui/SectionTitle";
import Badge from "../ui/Badge";

export default function SkillsForm() {
  const { resume, setResume } = useResume();

  const [skill, setSkill] = useState("");

  const addSkill = () => {
    const trimmed = skill.trim();

    if (!trimmed) return;

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
      <SectionTitle title="Skills" />

      <Card>
        <div className="flex gap-3">
          <div className="flex-1">
            <Input
              value={skill}
              placeholder="Enter a skill (e.g. React)"
              onChange={(e) => setSkill(e.target.value)}
            />
          </div>

          <Button onClick={addSkill}>
            Add
          </Button>
        </div>

        {resume.skills.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {resume.skills.map((item, index) => (
              <button
                key={index}
                onClick={() => removeSkill(index)}
                className="cursor-pointer"
                title="Click to remove"
              >
                <Badge>
                  {item} ✕
                </Badge>
              </button>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}