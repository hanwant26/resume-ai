import Sidebar from "@/components/layout/Sidebar";
import ResumeForm from "@/components/forms/ResumeForm";
import ResumePreview from "@/components/preview/ResumePreview";
import TemplateSelector from "@/components/TemplateSelector";

export default function BuilderPage() {
  return (
    <main className="grid min-h-screen grid-cols-12">
      {/* Sidebar */}
      <div className="col-span-2">
        <Sidebar />
      </div>

      {/* Form */}
      <div className="col-span-5 overflow-auto bg-gray-50 p-8">
        <ResumeForm />

        {/* Template Selector */}
        <div className="mt-10">
          <TemplateSelector />
        </div>
      </div>

      {/* Preview */}
      <div className="col-span-5 overflow-auto bg-gray-200 p-8">
        <ResumePreview />
      </div>
    </main>
  );
}