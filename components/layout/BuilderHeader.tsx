"use client";

import DownloadPDFButton from "../DownloadPDFButton";

type BuilderHeaderProps = {
  resumeRef: React.RefObject<HTMLDivElement | null>;
};

export default function BuilderHeader({
  resumeRef,
}: BuilderHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b bg-white px-8 py-5 shadow-sm">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Resume Builder
        </h1>

        <p className="mt-1 text-gray-500">
          Build an ATS-friendly resume with AI
        </p>
      </div>

      <DownloadPDFButton resumeRef={resumeRef} />
    </div>
  );
}