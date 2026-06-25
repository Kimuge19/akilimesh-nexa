"use client";
import { useState } from "react";

export default function Tutor() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    setLoading(true);
    setAnswer("");

    const res = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();

    setAnswer(data.answer);
    setLoading(false);
  }

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🤖 AI Tutor</h1>

      <input
        className="border p-3 w-full rounded"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask anything..."
      />

      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={askAI}
      >
        Ask
      </button>

      <div className="mt-6 p-4 bg-gray-100 rounded whitespace-pre-wrap">
        {loading ? "Thinking..." : answer}
      </div>
    </div>
  );
}