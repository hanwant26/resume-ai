"use client";

import { useResume } from "../context/ResumeContext";

import Button from "../ui/Button";
import Card from "../ui/Card";
import Input from "../ui/Input";
import SectionTitle from "../ui/SectionTitle";

export default function ExperienceForm() {
  const { resume, setResume } = useResume();

  const addExperience = () => {
    setResume({
      ...resume,
      experience: [
        ...resume.experience,
        {
          id: Date.now(),
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    });
  };

  const updateExperience = (
    id: number,
    field: string,
    value: string
  ) => {
    setResume({
      ...resume,
      experience: resume.experience.map((exp) =>
        exp.id === id
          ? { ...exp, [field]: value }
          : exp
      ),
    });
  };

  return (
    <div className="mt-10">
      <div className="mb-5 flex items-center justify-between">
        <SectionTitle title="Experience" />

        <Button onClick={addExperience}>
          + Add Experience
        </Button>
      </div>

      {resume.experience.map((exp) => (
        <Card key={exp.id}>
          <Input
            value={exp.company}
            placeholder="Company"
            onChange={(e) =>
              updateExperience(
                exp.id,
                "company",
                e.target.value
              )
            }
          />

          <Input
            value={exp.position}
            placeholder="Position"
            onChange={(e) =>
              updateExperience(
                exp.id,
                "position",
                e.target.value
              )
            }
          />

          <Input
            value={exp.startDate}
            placeholder="Start Date (e.g. Jan 2023)"
            onChange={(e) =>
              updateExperience(
                exp.id,
                "startDate",
                e.target.value
              )
            }
          />

          <Input
            value={exp.endDate}
            placeholder="End Date (e.g. Present)"
            onChange={(e) =>
              updateExperience(
                exp.id,
                "endDate",
                e.target.value
              )
            }
          />

          <textarea
            value={exp.description}
            onChange={(e) =>
              updateExperience(
                exp.id,
                "description",
                e.target.value
              )
            }
            placeholder="Job Description"
            className="mt-3 h-32 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
          />
        </Card>
      ))}
    </div>
  );
}