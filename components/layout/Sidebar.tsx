"use client";

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
    <aside className="h-screen bg-slate-900 text-white p-6">
      <h1 className="text-3xl font-bold text-blue-400 mb-8">
        ResumeAI
      </h1>

      <div className="space-y-2">
        {sections.map((section) => (
          <button
            key={section}
            className="w-full rounded-lg px-4 py-3 text-left transition hover:bg-slate-700"
          >
            {section}
          </button>
        ))}
      </div>
    </aside>
  );
}