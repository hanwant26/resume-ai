"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import { useResume } from "./context/ResumeContext";

export default function CoverLetter() {
  const { resume } = useResume();

  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");

  const generateCoverLetter = async () => {
    if (!company || !jobTitle || !jobDescription) {
      toast.error("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/cover-letter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resume,
          company,
          jobTitle,
          jobDescription,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        toast.error("Failed to generate cover letter.");
        setLoading(false);
        return;
      }

      setCoverLetter(data.result);

      toast.success("Cover Letter Generated!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }

    setLoading(false);
  };

  const copyLetter = async () => {
    await navigator.clipboard.writeText(coverLetter);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="mt-8 rounded-2xl border bg-white p-6 shadow">

      <h2 className="mb-6 text-3xl font-bold">
        ✨ AI Cover Letter Generator
      </h2>

      <div className="space-y-4">

        <input
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full rounded-lg border p-3"
        />

        <input
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="w-full rounded-lg border p-3"
        />

        <textarea
          placeholder="Paste Job Description..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className="h-48 w-full rounded-lg border p-4"
        />

        <button
          onClick={generateCoverLetter}
          disabled={loading}
          className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700 disabled:opacity-50"
        >
          {loading
            ? "Generating..."
            : "✨ Generate Cover Letter"}
        </button>

      </div>

      {coverLetter && (
        <div className="mt-8">

          <div className="mb-4 flex justify-between">

            <h3 className="text-2xl font-bold">
              Generated Cover Letter
            </h3>

            <button
              onClick={copyLetter}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Copy
            </button>

          </div>

          <textarea
            value={coverLetter}
            onChange={(e) =>
              setCoverLetter(e.target.value)
            }
            className="h-[500px] w-full rounded-lg border p-4"
          />

        </div>
      )}

    </div>
  );
}