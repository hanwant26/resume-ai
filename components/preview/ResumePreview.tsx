"use client";

import { forwardRef } from "react";
import { useTemplate } from "../context/TemplateContext";

import ModernTemplate from "./templates/ModernTemplate";
import ProfessionalTemplate from "./templates/ProfessionalTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";

const ResumePreview = forwardRef<HTMLDivElement>((props, ref) => {
  const { template } = useTemplate();

  return (
    <div className="flex justify-center bg-gray-100 p-8">
      <div ref={ref}>
        {template === "modern" && <ModernTemplate />}
        {template === "professional" && <ProfessionalTemplate />}
        {template === "minimal" && <MinimalTemplate />}
      </div>
    </div>
  );
});

ResumePreview.displayName = "ResumePreview";

export default ResumePreview;