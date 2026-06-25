"use client"

import { useState } from "react"

type Message = {
  from: "me" | "peer" | "ai"
  text: string
}

export default function ChatPage() {
  const [course, setCourse] = useState("CSF-805")

  const [messages, setMessages] = useState<Message[]>([
    {
      from: "ai",
      text: "🧠 Welcome to AkiliMesh Peer Chat. Start collaborating per course.",
    },
  ])

  const [input, setInput] = useState("")

  const courses = ["CSF-805", "CSC-823", "CSF-801", "CSF-803"]

  function sendMessage() {
    if (!input.trim()) return

    setMessages((prev) => [
      ...prev,
      { from: "me", text: input },
    ])

    setInput("")

    setTimeout(() => {
      const replies = [
        "📘 Let’s revise this topic together",
        "🧠 Focus on lecture notes first",
        "👥 Ask your top peer for clarification",
        "🔍 This is exam-relevant content",
      ]

      setMessages((prev) => [
        ...prev,
        {
          from: "peer",
          text: replies[Math.floor(Math.random() * replies.length)],
        },
      ])
    }, 800)
  }

  return (
    <div style={styles.page}>

      <div style={styles.header}>
        <h2>💬 AkiliMesh Peer Chat</h2>
      </div>

      <div style={styles.courseBar}>
        {courses.map((c) => (
          <button
            key={c}
            onClick={() => setCourse(c)}
            style={{
              ...styles.courseBtn,
              background: course === c ? "#0b2e4a" : "#e5e7eb",
              color: course === c ? "white" : "black",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <p>📚 Active Course: <b>{course}</b></p>

      <div style={styles.chatBox}>
        {messages.map((m, i) => (
          <div key={i} style={m.from === "me" ? styles.me : styles.peer}>
            {m.text}
          </div>
        ))}
      </div>

      <div style={styles.inputRow}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
          placeholder="Ask peers..."
        />

        <button onClick={sendMessage} style={styles.btn}>
          Send
        </button>
      </div>

    </div>
  )
}

const styles: any = {
  page: { padding: 20, fontFamily: "Arial" },

  header: {
    background: "#0b2e4a",
    color: "white",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  courseBar: {
    display: "flex",
    gap: 8,
    marginBottom: 10,
    flexWrap: "wrap",
  },

  courseBtn: {
    padding: "6px 10px",
    borderRadius: 6,
    border: "none",
    cursor: "pointer",
  },

  chatBox: {
    height: 400,
    overflowY: "auto",
    background: "#f3f4f6",
    padding: 10,
    borderRadius: 10,
  },

  me: {
    textAlign: "right",
    background: "#0b2e4a",
    color: "white",
    padding: 8,
    margin: 6,
    borderRadius: 8,
  },

  peer: {
    textAlign: "left",
    background: "#e5e7eb",
    padding: 8,
    margin: 6,
    borderRadius: 8,
  },

  inputRow: {
    display: "flex",
    marginTop: 10,
  },

  input: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
  },

  btn: {
    background: "#0b2e4a",
    color: "white",
    padding: 10,
    border: "none",
  },
}