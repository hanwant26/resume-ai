import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: Request) {
    try {
        const { resume } = await request.json();

        const prompt = `
You are an ATS Resume Analyzer.

Analyze the following resume.

Return ONLY valid JSON.

{
  "score": 0,
  "strengths": [],
  "improvements": [],
  "missingKeywords": []
}

Resume:

${JSON.stringify(resume)}
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
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                error: error.message,
            },
            { status: 500 }
        );
    }
}