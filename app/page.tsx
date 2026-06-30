import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <nav className="flex items-center justify-between border-b p-6">
        <h1 className="text-3xl font-bold text-blue-600">
          ResumeAI
        </h1>

        <Link
          href="/builder"
          className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          Create Resume
        </Link>
      </nav>

      <section className="flex h-[80vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl font-bold">
          Build ATS Friendly Resumes
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-gray-600">
          Create professional resumes that pass ATS systems and impress recruiters.
        </p>

        <Link
          href="/builder"
          className="mt-10 rounded-xl bg-blue-600 px-8 py-4 text-lg text-white hover:bg-blue-700"
        >
          Start Building
        </Link>
      </section>
    </main>
  );
}