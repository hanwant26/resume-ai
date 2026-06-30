import Sidebar from "@/components/layout/Sidebar";
import ResumeForm from "@/components/forms/ResumeForm";
import ResumePreview from "@/components/preview/ResumePreview";

export default function BuilderPage() {
  return (
    <main className="grid min-h-screen grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>

      <div className="col-span-5 overflow-auto bg-gray-50 p-8">
        <ResumeForm />
      </div>

      <div className="col-span-5 overflow-auto bg-gray-200 p-8">
        <ResumePreview />
      </div>
    </main>
  );
}