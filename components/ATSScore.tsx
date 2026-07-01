"use client";

import { useState } from "react";
import { useResume } from "./context/ResumeContext";

type ATSResult = {
  score: number;
  strengths: string[];
  improvements: string[];
  missingKeywords: string[];
};

export default function ATSScore() {
  const {
    resume,
    setAtsScore,
  } = useResume();

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ATSResult | null>(null);

  const analyzeResume = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/ats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resume,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        alert("ATS analysis failed.");
        setLoading(false);
        return;
      }

      const cleanJSON = data.result
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      const parsed: ATSResult = JSON.parse(cleanJSON);

      setResult(parsed);

      // Save ATS score globally
      setAtsScore(parsed.score);
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="mt-8 rounded-xl border bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold">
        📊 ATS Resume Analyzer
      </h2>

      <button
        onClick={analyzeResume}
        disabled={loading}
        className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? "Analyzing..." : "Analyze ATS Score"}
      </button>

      {result && (
        <div className="mt-8">

          <div className="mb-6 text-center">
            <h3 className="text-5xl font-bold text-green-600">
              {result.score}/100
            </h3>

            <p className="mt-2 text-gray-600">
              ATS Compatibility Score
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-xl font-bold">
              ✅ Strengths
            </h3>

            <ul className="list-disc pl-5">
              {result.strengths.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-xl font-bold">
              ⚠ Improvements
            </h3>

            <ul className="list-disc pl-5">
              {result.improvements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-bold">
              🔑 Missing Keywords
            </h3>

            <div className="flex flex-wrap gap-2">
              {result.missingKeywords.map((keyword, index) => (
                <span
                  key={index}
                  className="rounded-full bg-red-100 px-3 py-1 text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}