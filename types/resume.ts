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