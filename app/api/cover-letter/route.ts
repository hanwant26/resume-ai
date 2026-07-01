import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const {
      resume,
      company,
      jobTitle,
      jobDescription,
    } = await request.json();

    const prompt = `
You are an expert resume and career coach.

Using the following resume information:

Name: ${resume.name}

Professional Title:
${resume.title}

Professional Summary:
${resume.summary}

Skills:
${resume.skills.join(", ")}

Experience:
${JSON.stringify(resume.experience)}

Projects:
${JSON.stringify(resume.projects)}

Write a professional cover letter.

Requirements:

- Company: ${company}
- Job Title: ${jobTitle}

Job Description:
${jobDescription}

Instructions:

- Keep it around 350-450 words.
- Make it personalized.
- Mention relevant skills.
- Mention achievements naturally.
- Use a professional tone.
- Do NOT use markdown.
- Return only the cover letter text.
`;

    const completion =
      await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
      });

    const result =
      completion.choices[0]?.message?.content ?? "";

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("Cover Letter Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Generation failed",
      },
      {
        status: 500,
      }
    );
  }
}