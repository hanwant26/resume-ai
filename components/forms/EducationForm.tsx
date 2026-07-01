"use client";

import { useResume } from "../context/ResumeContext";

import Button from "../ui/Button";
import Card from "../ui/Card";
import Input from "../ui/Input";
import SectionTitle from "../ui/SectionTitle";

export default function EducationForm() {
  const { resume, setResume } = useResume();

  const addEducation = () => {
    setResume({
      ...resume,
      education: [
        ...resume.education,
        {
          id: Date.now(),
          school: "",
          degree: "",
          field: "",
          startYear: "",
          endYear: "",
        },
      ],
    });
  };

  const updateEducation = (
    id: number,
    field: string,
    value: string
  ) => {
    setResume({
      ...resume,
      education: resume.education.map((edu) =>
        edu.id === id
          ? { ...edu, [field]: value }
          : edu
      ),
    });
  };

  return (
    <div className="mt-10">
      <div className="mb-5 flex items-center justify-between">
        <SectionTitle title="Education" />

        <Button
          onClick={addEducation}
          className="bg-green-600 hover:bg-green-700"
        >
          + Add Education
        </Button>
      </div>

      {resume.education.map((edu) => (
        <Card key={edu.id}>
          <Input
            value={edu.school}
            placeholder="School / University"
            onChange={(e) =>
              updateEducation(
                edu.id,
                "school",
                e.target.value
              )
            }
          />

          <Input
            value={edu.degree}
            placeholder="Degree"
            onChange={(e) =>
              updateEducation(
                edu.id,
                "degree",
                e.target.value
              )
            }
          />

          <Input
            value={edu.field}
            placeholder="Field of Study"
            onChange={(e) =>
              updateEducation(
                edu.id,
                "field",
                e.target.value
              )
            }
          />

          <Input
            value={edu.startYear}
            placeholder="Start Year"
            onChange={(e) =>
              updateEducation(
                edu.id,
                "startYear",
                e.target.value
              )
            }
          />

          <Input
            value={edu.endYear}
            placeholder="End Year"
            onChange={(e) =>
              updateEducation(
                edu.id,
                "endYear",
                e.target.value
              )
            }
          />
        </Card>
      ))}
    </div>
  );
}