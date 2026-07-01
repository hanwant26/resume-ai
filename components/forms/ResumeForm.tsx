"use client";

import { useResume } from "../context/ResumeContext";

import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import ProjectForm from "./ProjectForm";
import SkillsForm from "./SkillsForm";
import GenerateAIButton from "../GenerateAIButton";
import ATSScore from "../ATSScore";
import JobMatch from "../JobMatch";
import PersonalInfoForm from "./PersonalInfoForm";
import CoverLetter from "../CoverLetter";

export default function ResumeForm() {
  const { resume, setResume } = useResume();

  return (
    <div>
      <PersonalInfoForm />

      <ExperienceForm />

      <EducationForm />

      <ProjectForm />

      <SkillsForm />
      <GenerateAIButton />
      <ATSScore />
      <JobMatch />
      <CoverLetter />

    </div>
  );
}