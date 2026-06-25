import OpenAI from "openai"
import { NextResponse } from "next/server"

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  const { message, course } = await req.json()

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `
You are AkiliMesh AI Tutor.

You teach:
CSF-805 Blockchain Security
CSC-823 IoT
CSF-801 Networks Security
CSF-803 Digital Forensics

Always:
- explain simply
- give exam hints
- generate revision questions
- relate answer to course: ${course}
        `,
      },
      {
        role: "user",
        content: message,
      },
    ],
  })

  return NextResponse.json({
    reply: completion.choices[0].message.content,
  })
}