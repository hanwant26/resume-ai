"use client";

import { createContext, useContext, useState } from "react";

export type Experience = {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
};
export type Education = {
  id: number;
  school: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
};
export type Project = {
  id: number;
  title: string;
  techStack: string;
  description: string;
  github: string;
};
type ResumeData = {
  name: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  github: string;
  portfolio: string;
  summary: string;

  experience: Experience[];
  education: Education[];
  projects: Project[];

  skills: string[];
};
type ResumeContextType = {
  resume: ResumeData;
  setResume: React.Dispatch<React.SetStateAction<ResumeData>>;
};

const ResumeContext = createContext<ResumeContextType | null>(null);

export function ResumeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
const [resume, setResume] = useState<ResumeData>({
  name: "",
  title: "",
  email: "",
  phone: "",
  address: "",
  linkedin: "",
  github: "",
  portfolio: "",
  summary: "",

  experience: [],
  education: [],
  projects: [],
  skills: [],
});
  return (
    <ResumeContext.Provider value={{ resume, setResume }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);

  if (!context) {
    throw new Error("useResume must be used inside ResumeProvider");
  }

  return context;
}