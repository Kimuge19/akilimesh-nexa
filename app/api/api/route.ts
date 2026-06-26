import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message, course } = await req.json();

  const reply = `
🤖 AkiliMesh AI Tutor (Demo Mode)

Course: ${course}

Your Question:
"${message}"

This is the free demonstration version of AkiliMesh-Nexa.

Suggested guidance:

• Review your lecture notes for ${course}
• Break the problem into smaller concepts.
• Revise key definitions.
• Practice previous examination questions.
• Discuss difficult topics with your peer learning group.

AI-powered tutoring using an open-source language model will be added in a future release.
`;

  return NextResponse.json({ reply });
}