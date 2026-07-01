import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { resume, jobDescription } = await request.json();

    const prompt = `
You are an ATS Resume Expert.

Compare the resume with the following Job Description.

Return ONLY valid JSON.

{
  "matchScore": 0,
  "matchingSkills": [],
  "missingSkills": [],
  "suggestions": []
}

Resume:
${JSON.stringify(resume)}

Job Description:
${jobDescription}
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.2,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    let text = completion.choices[0]?.message?.content || "";

    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return NextResponse.json({
      success: true,
      result: text,
    });

  } catch (error: any) {
    console.error("Job Match Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}