"use client";

import { RefObject } from "react";
import { useReactToPrint } from "react-to-print";

type DownloadPDFButtonProps = {
  resumeRef: RefObject<HTMLDivElement | null>;
};

export default function DownloadPDFButton({
  resumeRef,
}: DownloadPDFButtonProps) {
  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Resume",
  });

  return (
    <button
      onClick={handlePrint}
      className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
    >
      📄 Download / Print
    </button>
  );
}