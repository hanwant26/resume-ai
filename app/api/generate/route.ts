import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { jobTitle, experienceLevel } = await request.json();

    const prompt = `
You are an expert resume writer.

Generate ONLY valid JSON.

Job Title: ${jobTitle}
Experience Level: ${experienceLevel}

Return this exact structure:

{
  "summary": "",
  "skills": [],
  "experience": [
    {
      "company": "",
      "position": "",
      "description": ""
    }
  ],
  "projects": [
    {
      "title": "",
      "techStack": "",
      "description": ""
    }
  ]
}

Do not return markdown.
Do not use \`\`\`json.
Return JSON only.
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const text = completion.choices[0]?.message?.content || "";

    return NextResponse.json({
      success: true,
      result: text,
    });

  } catch (error: any) {
    console.error("Groq Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}