import { createClient } from "./server";

/**
 * Get all resumes for the currently authenticated user
 */
export async function getResumes() {
  const supabase = await createClient();

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

  if (error) {
    throw error;
  }

  return data;
}

/**
 * Get a single resume
 */
export async function getResumeById(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("resumes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}