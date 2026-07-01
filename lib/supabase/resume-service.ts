import { createClient } from "./client";
import type { ResumeData } from "@/components/context/ResumeContext";

const supabase = createClient();

/**
 * Save a new resume
 */
export async function saveResume(
  title: string,
  resume: ResumeData
) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    throw new Error("User not authenticated.");
  }

  const { data, error } = await supabase
    .from("resumes")
    .insert({
      user_id: user.id,
      title,
      resume_data: resume,
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

/**
 * Get all resumes of current user
 */
export async function getResumes() {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    throw new Error("User not authenticated.");
  }

  const { data, error } = await supabase
    .from("resumes")
    .select("*")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false });

  if (error) throw error;

  return data;
}

/**
 * Get one resume by ID
 */
export async function getResumeById(id: string) {
  const { data, error } = await supabase
    .from("resumes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

/**
 * Update existing resume
 */
export async function updateResume(
  id: string,
  title: string,
  resume: ResumeData
) {
  const { data, error } = await supabase
    .from("resumes")
    .update({
      title,
      resume_data: resume,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
}

/**
 * Delete resume
 */
export async function deleteResume(id: string) {
  const { error } = await supabase
    .from("resumes")
    .delete()
    .eq("id", id);

  if (error) throw error;
}