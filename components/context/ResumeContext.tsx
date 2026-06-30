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

type ResumeData = {
  name: string;
  email: string;
  phone: string;
  summary: string;
  experience: Experience[];
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
    email: "",
    phone: "",
    summary: "",
    experience: [],
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