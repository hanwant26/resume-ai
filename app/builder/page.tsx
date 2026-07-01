"use client";

import { useRef } from "react";

import Sidebar from "@/components/layout/Sidebar";
import BuilderHeader from "@/components/layout/BuilderHeader";
import DashboardCards from "@/components/dashboard/DashboardCards";

import ResumeForm from "@/components/forms/ResumeForm";
import ResumePreview from "@/components/preview/ResumePreview";

export default function BuilderPage() {
  const resumeRef = useRef<HTMLDivElement>(null);

  return (
    <main className="flex h-screen">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <BuilderHeader resumeRef={resumeRef} />

        <DashboardCards />

        <div className="grid flex-1 grid-cols-2 overflow-hidden">
          <div className="overflow-y-auto bg-gray-50 p-8">
            <ResumeForm />
          </div>

          <div className="overflow-y-auto bg-gray-100 p-8">
            <ResumePreview ref={resumeRef} />
          </div>
        </div>
      </div>
    </main>
  );
}