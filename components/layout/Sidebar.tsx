"use client";

import {
  User,
  FileText,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Sparkles,
  BrainCircuit,
  Target,
} from "lucide-react";

const sections = [
  {
    icon: <User size={20} />,
    label: "Personal Info",
  },
  {
    icon: <FileText size={20} />,
    label: "Summary",
  },
  {
    icon: <Briefcase size={20} />,
    label: "Experience",
  },
  {
    icon: <GraduationCap size={20} />,
    label: "Education",
  },
  {
    icon: <FolderKanban size={20} />,
    label: "Projects",
  },
  {
    icon: <Sparkles size={20} />,
    label: "Skills",
  },
  {
    icon: <BrainCircuit size={20} />,
    label: "ATS Analysis",
  },
  {
    icon: <Target size={20} />,
    label: "Job Match",
  },
];

export default function Sidebar() {
  return (
    <aside className="flex w-72 flex-col bg-slate-900 text-white shadow-xl">
      {/* Logo */}
      <div className="border-b border-slate-700 p-6">
        <h1 className="text-3xl font-extrabold text-blue-400">
          ResumeAI
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          AI Powered Resume Builder
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {sections.map((section) => (
          <button
            key={section.label}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 hover:bg-slate-800 hover:text-blue-400"
          >
            {section.icon}
            <span>{section.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-700 p-5 text-center text-sm text-slate-400">
        ResumeAI v1.0
      </div>
    </aside>
  );
}