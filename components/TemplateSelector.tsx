"use client";

import { useTemplate } from "./context/TemplateContext";

export default function TemplateSelector() {
  const { template, setTemplate } = useTemplate();

  const templates = [
    {
      id: "modern",
      name: "Modern",
    },
    {
      id: "professional",
      name: "Professional",
    },
    {
      id: "minimal",
      name: "Minimal",
    },
  ];

  return (
    <div className="rounded-xl border bg-white p-5 shadow">
      <h2 className="mb-4 text-xl font-bold">
        Resume Templates
      </h2>

      <div className="space-y-3">
        {templates.map((item) => (
          <button
            key={item.id}
            onClick={() => setTemplate(item.id as any)}
            className={`w-full rounded-lg border p-3 text-left transition ${
              template === item.id
                ? "border-blue-600 bg-blue-100 font-bold"
                : "hover:bg-gray-100"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}