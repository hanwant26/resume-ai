"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

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
  liveDemo: string;
};

export type ResumeData = {
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

  atsScore: number | null;
  setAtsScore: React.Dispatch<React.SetStateAction<number | null>>;

  jobMatchScore: number | null;
  setJobMatchScore: React.Dispatch<
    React.SetStateAction<number | null>
  >;
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

  const [atsScore, setAtsScore] = useState<number | null>(null);

  const [jobMatchScore, setJobMatchScore] =
    useState<number | null>(null);

  useEffect(() => {
    const savedResume = localStorage.getItem("resumeData");

    if (savedResume) {
      setResume(JSON.parse(savedResume));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "resumeData",
      JSON.stringify(resume)
    );
  }, [resume]);

  return (
    <ResumeContext.Provider
      value={{
        resume,
        setResume,

        atsScore,
        setAtsScore,

        jobMatchScore,
        setJobMatchScore,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);

  if (!context) {
    throw new Error(
      "useResume must be used inside ResumeProvider"
    );
  }

  return context;
}