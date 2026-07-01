import Link from "next/link";

import { getResumes } from "@/lib/supabase/resume-server";

export default async function ResumesPage() {
  const resumes = await getResumes();

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              My Resumes
            </h1>

            <p className="mt-2 text-gray-600">
              Manage all your saved resumes.
            </p>
          </div>

          <Link
            href="/builder"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            + New Resume
          </Link>
        </div>

        {resumes.length === 0 ? (
          <div className="rounded-xl bg-white p-16 text-center shadow">
            <h2 className="text-2xl font-bold text-gray-800">
              No resumes yet
            </h2>

            <p className="mt-3 text-gray-500">
              Create your first resume to get started.
            </p>

            <Link
              href="/builder"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Create Resume
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resumes.map((resume: any) => (
              <div
                key={resume.id}
                className="rounded-xl bg-white p-6 shadow transition hover:shadow-lg"
              >
                <h2 className="text-2xl font-bold">
                  {resume.title}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Last Updated
                </p>

                <p className="text-gray-700">
                  {new Date(resume.updated_at).toLocaleDateString()}
                </p>

                <div className="mt-6 flex gap-3">
                  <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                    Open
                  </button>

                  <button className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}