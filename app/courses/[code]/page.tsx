"use client"

import { useParams, useSearchParams } from "next/navigation"
import { useState } from "react"

export default function CourseDetail() {
  const params = useParams()
  const tab = useSearchParams().get("tab")

  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  const courses: any = {
    "CSF-805": {
      title: "Distributed Ledger Technology Security",
      lecturer: "Dr. Munyole",
      modules: [
        "Blockchain Fundamentals",
        "Smart Contracts Security",
        "Consensus Algorithms",
        "Cryptographic Hashing",
      ],
      peers: [
        { name: "Isaac Mugambi", score: 92 },
        { name: "Beatrice Wanjiru", score: 85 },
        { name: "Faith Odhiambo", score: 78 },
      ],
    },

    "CSC-823": {
      title: "Internet of Things (IoT)",
      lecturer: "Dr. Odongo",
      modules: [
        "IoT Fundamentals",
        "IoT Sensors & Devices",
        "IoT Communication Protocols",
        "IoT Security",
      ],
      peers: [
        { name: "Rachel Joseph", score: 91 },
        { name: "Osman Ali", score: 88 },
        { name: "Kiptoo Kirwa", score: 60 },
      ],
    },

    "CSF-801": {
      title: "Networks & Web Security",
      lecturer: "Dr. Mururi",
      modules: [
        "Network Security Fundamentals",
        "Firewalls and IDS",
        "Web Application Security",
        "OWASP Top 10",
      ],
      peers: [
        { name: "Hazel Kimani", score: 90 },
        { name: "Candace Jepchumba", score: 75 },
        { name: "Brian Jiruveti", score: 81 },
      ],
    },

    "CSF-803": {
      title: "Advanced Digital Forensics",
      lecturer: "Dr. Ngaira",
      modules: [
        "Forensic Tools",
        "Evidence Handling",
        "Memory Forensics",
        "Case Investigation",
      ],
      peers: [
        { name: "Andrew Kimuge", score: 95 },
        { name: "Dorah Mwangi", score: 80 },
        { name: "Ayman Rugamba", score: 84 },
      ],
    },
  }

  const code = params.code as string
  const course = courses[code]

  if (!course) {
    return (
      <div style={{ padding: 20 }}>
        <h2>❌ Course not found</h2>
        <p>{code}</p>
      </div>
    )
  }

  const bestPeer = [...course.peers].sort(
    (a: any, b: any) => b.score - a.score
  )[0]

  function askQuestion() {
    if (!question.trim()) return

    setAnswer(
      `🧠 AkiliMesh AI Tutor:

For ${course.title}, your question is highly relevant.

Question:
"${question}"

Recommended approach:
1. Review the current module.
2. Discuss with ${bestPeer.name}.
3. Complete the practical lab related to this topic.
4. Attempt self-assessment questions before moving forward.

This response is currently running in demo mode. Later it can be connected to OpenAI for real AI-generated answers.`
    )

    setQuestion("")
  }

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h2>{code}</h2>
        <h3>{course.title}</h3>
        <p>👨‍🏫 {course.lecturer}</p>
      </div>

      <div style={styles.insight}>
        🧠 Best peer to ask: <b>{bestPeer.name}</b> ({bestPeer.score}%)
      </div>

      {tab === "modules" && (
        <div>
          <h3>📖 Course Modules</h3>

          {course.modules.map((m: string, i: number) => (
            <div key={i} style={styles.card}>
              📘 {m}
            </div>
          ))}
        </div>
      )}

      {tab === "peer" && (
        <div>
          <h3>🧠 Peer Learning Timeline</h3>

          <div style={styles.section}>
            <h4>📜 Previous Discussion</h4>

            <ul>
              <li>Module revision and recap</li>
              <li>Assessment preparation</li>
              <li>Common student challenges</li>
            </ul>
          </div>

          <div style={styles.current}>
            <h4>🔥 Current Discussion</h4>

            <ul>
              <li>Current module deep dive</li>
              <li>Practical applications</li>
              <li>Peer collaboration exercises</li>
            </ul>
          </div>

          <div style={styles.future}>
            <h4>🚀 Next Discussion</h4>

            <ul>
              <li>Emerging technologies</li>
              <li>Industry trends</li>
              <li>Research opportunities</li>
            </ul>
          </div>

          <div style={styles.askBox}>
            <h4>💬 Ask AI or Peers</h4>

            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={`Ask anything about ${course.title}`}
              style={styles.textarea}
            />

            <button
              style={styles.askBtn}
              onClick={askQuestion}
            >
              Ask Now
            </button>

            {answer && (
              <div style={styles.answer}>
                <strong>🧠 AI Tutor Response</strong>
                <p>{answer}</p>
              </div>
            )}
          </div>

          <h3 style={{ marginTop: 25 }}>
            👥 Active Peer Network
          </h3>

          {course.peers.map((peer: any, index: number) => (
            <div key={index} style={styles.peer}>
              <span>👤 {peer.name}</span>

              <span style={styles.score}>
                {peer.score}%
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const styles: any = {
  page: {
    padding: 20,
    background: "#f6f8fb",
    minHeight: "100vh",
    fontFamily: "Arial",
  },

  header: {
    background: "#0b2e4a",
    color: "white",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },

  insight: {
    background: "#ecfeff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    borderLeft: "5px solid #0b2e4a",
  },

  card: {
    background: "white",
    padding: 12,
    marginTop: 8,
    borderRadius: 8,
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
  },

  section: {
    background: "white",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },

  current: {
    background: "#ecfeff",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },

  future: {
    background: "#f1f5f9",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },

  askBox: {
    background: "white",
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
  },

  textarea: {
    width: "100%",
    minHeight: 90,
    padding: 10,
    borderRadius: 8,
    border: "1px solid #ccc",
    marginTop: 8,
  },

  askBtn: {
    marginTop: 10,
    background: "#0b2e4a",
    color: "white",
    border: "none",
    padding: "10px 16px",
    borderRadius: 8,
    cursor: "pointer",
  },

  answer: {
    marginTop: 15,
    background: "#ecfeff",
    padding: 12,
    borderRadius: 10,
  },

  peer: {
    background: "white",
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
    display: "flex",
    justifyContent: "space-between",
  },

  score: {
    color: "#16a34a",
    fontWeight: "bold",
  },
}