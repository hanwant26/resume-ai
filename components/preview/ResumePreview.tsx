"use client";

import { useTemplate } from "../context/TemplateContext";

import ModernTemplate from "./templates/ModernTemplate";
import ProfessionalTemplate from "./templates/ProfessionalTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";

export default function ResumePreview() {
  const { template } = useTemplate();

  return (
    <div className="flex justify-center bg-gray-100 p-8">
      {template === "modern" && <ModernTemplate />}

      {template === "professional" && <ProfessionalTemplate />}

      {template === "minimal" && <MinimalTemplate />}
    </div>
  );
}