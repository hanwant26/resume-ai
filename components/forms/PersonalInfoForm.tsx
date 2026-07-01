"use client";

import { useResume } from "../context/ResumeContext";

import Card from "../ui/Card";
import Input from "../ui/Input";
import SectionTitle from "../ui/SectionTitle";

export default function PersonalInfoForm() {
  const { resume, setResume } = useResume();

  return (
    <Card>
      <SectionTitle title="Personal Information" />

      <Input
        value={resume.name}
        placeholder="Full Name"
        onChange={(e) =>
          setResume({ ...resume, name: e.target.value })
        }
      />

      <Input
        value={resume.title}
        placeholder="Professional Title"
        onChange={(e) =>
          setResume({ ...resume, title: e.target.value })
        }
      />

      <Input
        value={resume.email}
        placeholder="Email"
        onChange={(e) =>
          setResume({ ...resume, email: e.target.value })
        }
      />

      <Input
        value={resume.phone}
        placeholder="Phone"
        onChange={(e) =>
          setResume({ ...resume, phone: e.target.value })
        }
      />

      <Input
        value={resume.address}
        placeholder="Address"
        onChange={(e) =>
          setResume({ ...resume, address: e.target.value })
        }
      />

      <Input
        value={resume.linkedin}
        placeholder="LinkedIn URL"
        onChange={(e) =>
          setResume({ ...resume, linkedin: e.target.value })
        }
      />

      <Input
        value={resume.github}
        placeholder="GitHub URL"
        onChange={(e) =>
          setResume({ ...resume, github: e.target.value })
        }
      />

      <Input
        value={resume.portfolio}
        placeholder="Portfolio Website"
        onChange={(e) =>
          setResume({ ...resume, portfolio: e.target.value })
        }
      />

      <textarea
        value={resume.summary}
        onChange={(e) =>
          setResume({ ...resume, summary: e.target.value })
        }
        placeholder="Professional Summary"
        className="h-40 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
      />
    </Card>
  );
}