"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import { useResume } from "./context/ResumeContext";
import { saveResume } from "@/lib/supabase/resume-service";

export default function SaveResumeButton() {
  const { resume } = useResume();

  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    try {
      setLoading(true);

      const title =
        resume.title?.trim() ||
        resume.name?.trim() ||
        "My Resume";

      await saveResume(title, resume);

      toast.success("Resume saved successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to save resume.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleSave}
      disabled={loading}
      className="rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? "Saving..." : "💾 Save Resume"}
    </button>
  );
}