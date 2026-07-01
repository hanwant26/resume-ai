"use client";

export default function DownloadButton() {
  const printResume = () => {
    window.print();
  };

  return (
    <button
      onClick={printResume}
      className="w-full rounded-lg bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
    >
      📄 Download PDF
    </button>
  );
}