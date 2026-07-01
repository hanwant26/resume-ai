"use client";

import { useState } from "react";
import { useResume } from "./context/ResumeContext";

type MatchResult = {
  matchScore: number;
  matchingSkills: string[];
  missingSkills: string[];
  suggestions: string[];
};

export default function JobMatch() {
  const {
    resume,
    setJobMatchScore,
  } = useResume();

  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<MatchResult | null>(null);

  const analyzeJobMatch = async () => {
    if (!jobDescription.trim()) {
      alert("Please paste a job description.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/job-match", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resume,
          jobDescription,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        alert("Job Match Analysis failed.");
        setLoading(false);
        return;
      }

      const cleanJSON = data.result
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      const parsed: MatchResult = JSON.parse(cleanJSON);

      setResult(parsed);

      // Save score globally
      setJobMatchScore(parsed.matchScore);
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="mt-8 rounded-xl border bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold">
        🎯 Job Description Analyzer
      </h2>

      <textarea
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste the Job Description here..."
        className="h-48 w-full rounded-lg border p-4"
      />

      <button
        onClick={analyzeJobMatch}
        disabled={loading}
        className="mt-4 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-50"
      >
        {loading ? "Analyzing..." : "Analyze Job Match"}
      </button>

      {result && (
        <div className="mt-8">

          <div className="mb-6 text-center">
            <h3 className="text-5xl font-bold text-indigo-600">
              {result.matchScore}%
            </h3>

            <p className="mt-2 text-gray-600">
              Resume Match Score
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-xl font-bold">
              ✅ Matching Skills
            </h3>

            <div className="flex flex-wrap gap-2">
              {result.matchingSkills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full bg-green-100 px-3 py-1 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-xl font-bold">
              ❌ Missing Skills
            </h3>

            <div className="flex flex-wrap gap-2">
              {result.missingSkills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full bg-red-100 px-3 py-1 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-bold">
              💡 Suggestions
            </h3>

            <ul className="list-disc pl-5">
              {result.suggestions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      )}
    </div>
  );
}