"use client"

import { useState } from "react"

export default function ResearchPage() {
  const [topic, setTopic] = useState("")
  const [ideas, setIdeas] = useState<string[]>([])

  const generateIdeas = () => {
    if (!topic.trim()) return

    setIdeas([
      `AI-powered ${topic} Risk Prediction`,
      `${topic} for Smart Universities`,
      `Machine Learning for ${topic}`,
      `${topic} using Blockchain`,
      `${topic} for Sustainable Development`,
      `Privacy-Preserving ${topic}`,
      `Digital Transformation using ${topic}`,
      `${topic} Research for African Universities`,
    ])
  }

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1>💡 Research & Innovation Hub</h1>
        <p>
          Generate research ideas, discover innovation opportunities and
          collaborate with fellow students using AkiliMesh Intelligence.
        </p>
      </div>

      <div style={styles.card}>
        <h2>🧠 AI Research Assistant</h2>

        <input
          type="text"
          placeholder="Example: Blockchain Security"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          style={styles.input}
        />

        <button style={styles.button} onClick={generateIdeas}>
          Generate Research Ideas
        </button>
      </div>

      {ideas.length > 0 && (
        <div style={styles.card}>
          <h2>🚀 Suggested Research Topics</h2>

          {ideas.map((idea, index) => (
            <div key={index} style={styles.idea}>
              💡 {idea}
            </div>
          ))}
        </div>
      )}

      <div style={styles.grid}>
        <div style={styles.smallCard}>
          <h3>🚀 Innovation Challenge</h3>

          <p>
            Students often struggle to find collaborators working on similar
            research problems.
          </p>

          <strong>Innovation</strong>

          <p>
            AI-powered Research Matchmaking that automatically recommends
            supervisors and collaborators.
          </p>
        </div>

        <div style={styles.smallCard}>
          <h3>🏆 Funding Opportunities</h3>

          <ul>
            <li>OUK Innovation Challenge</li>
            <li>NACOSTI Research Fund</li>
            <li>Africa AI Innovation Grant</li>
            <li>Google Research Program</li>
          </ul>
        </div>

        <div style={styles.smallCard}>
          <h3>👥 Suggested Collaborators</h3>

          <p>👤 Isaac Mugambi — Blockchain</p>
          <p>👤 Faith Odhiambo — Cybersecurity</p>
          <p>👤 Rachel Joseph — Artificial Intelligence</p>
          <p>👤 Andrew Kimuge — Software Quality Engineering</p>
        </div>

        <div style={styles.smallCard}>
          <h3>📈 Research Readiness</h3>

          <p>Research Potential ⭐⭐⭐⭐⭐</p>
          <p>Innovation ⭐⭐⭐⭐⭐</p>
          <p>Collaboration ⭐⭐⭐⭐☆</p>
          <p>Publication Readiness ⭐⭐⭐⭐☆</p>
        </div>
      </div>
    </div>
  )
}

const styles: any = {
  page: {
    padding: 25,
    background: "#f4f6fb",
    minHeight: "100vh",
  },

  header: {
    background: "#0b2e4a",
    color: "white",
    padding: 25,
    borderRadius: 12,
    marginBottom: 20,
  },

  card: {
    background: "white",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },

  input: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    border: "1px solid #ddd",
    marginTop: 10,
    marginBottom: 15,
    fontSize: 15,
  },

  button: {
    background: "#0b2e4a",
    color: "white",
    border: "none",
    padding: "12px 18px",
    borderRadius: 8,
    cursor: "pointer",
  },

  idea: {
    background: "#eef7ff",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: 20,
  },

  smallCard: {
    background: "white",
    padding: 20,
    borderRadius: 12,
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
}