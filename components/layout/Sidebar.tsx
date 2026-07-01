"use client";

import DownloadButton from "../DownloadButton";

const sections = [
  "👤 Personal Info",
  "📝 Summary",
  "💼 Experience",
  "🎓 Education",
  "🚀 Projects",
  "⭐ Skills",
  "🏆 Certifications",
  "🌐 Languages",
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen flex-col bg-slate-900 p-6 text-white">
      {/* Logo */}
      <h1 className="mb-8 text-3xl font-bold text-blue-400">
        ResumeAI
      </h1>

      {/* Navigation */}
      <div className="flex-1 space-y-2">
        {sections.map((section) => (
          <button
            key={section}
            className="w-full rounded-lg px-4 py-3 text-left transition hover:bg-slate-700"
          >
            {section}
          </button>
        ))}
      </div>

      {/* Download PDF */}
      <div className="mt-8 border-t border-slate-700 pt-6">
        <DownloadButton />
      </div>
    </aside>
  );
}