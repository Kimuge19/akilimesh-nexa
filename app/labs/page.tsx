"use client"

import { useState } from "react"

export default function LabsPage() {
  const [selectedLab, setSelectedLab] = useState<any>(null)

  const labs = [
    {
      title: "Banking API Test",
      course: "CSF-805",
      difficulty: "Intermediate",
      duration: "20 Minutes",
      progress: 65,
      task: "Test authentication and API responses",
      hint:
        "Verify login endpoint, token generation, status codes and error handling.",
      steps: [
        "Send POST /login request",
        "Verify JWT token response",
        "Test invalid credentials",
        "Validate API error handling",
      ],
    },

    {
      title: "Fraud Detection",
      course: "CSF-803",
      difficulty: "Advanced",
      duration: "30 Minutes",
      progress: 45,
      task: "Detect abnormal transaction behavior",
      hint:
        "Look for unusual transaction patterns, velocity spikes and anomalies.",
      steps: [
        "Review transaction history",
        "Identify suspicious activity",
        "Flag fraud indicators",
        "Prepare investigation report",
      ],
    },

    {
      title: "SQL Challenge",
      course: "CSF-801",
      difficulty: "Beginner",
      duration: "15 Minutes",
      progress: 80,
      task: "Find users with failed logins",
      hint:
        "Use filtering, grouping and ordering to identify suspicious accounts.",
      steps: [
        "Review user table",
        "Write SQL query",
        "Validate returned records",
        "Document findings",
      ],
    },

    {
      title: "Blockchain Integrity",
      course: "CSF-805",
      difficulty: "Advanced",
      duration: "25 Minutes",
      progress: 50,
      task: "Validate hash chain integrity",
      hint:
        "Verify block hashes and ensure chain consistency.",
      steps: [
        "Inspect blockchain records",
        "Validate previous hashes",
        "Detect tampering",
        "Generate integrity report",
      ],
    },

    {
      title: "IoT Device Security Audit",
      course: "CSC-823",
      difficulty: "Intermediate",
      duration: "25 Minutes",
      progress: 30,
      task: "Assess IoT device vulnerabilities",
      hint:
        "Review authentication, firmware and network exposure.",
      steps: [
        "Inspect device configuration",
        "Review firmware security",
        "Assess communication protocols",
        "Prepare recommendations",
      ],
    },
  ]

  return (
    <div style={styles.page}>

      <div style={styles.header}>
        <h1>🧪 AkiliMesh Practical Labs</h1>
        <p>
          Learn by doing. Complete practical exercises, simulations,
          investigations and real-world challenges.
        </p>
      </div>

      <div style={styles.stats}>
        <div style={styles.statCard}>
          <h2>5</h2>
          <p>Active Labs</p>
        </div>

        <div style={styles.statCard}>
          <h2>54%</h2>
          <p>Average Progress</p>
        </div>

        <div style={styles.statCard}>
          <h2>3</h2>
          <p>Courses Covered</p>
        </div>

        <div style={styles.statCard}>
          <h2>12</h2>
          <p>Skills Practiced</p>
        </div>
      </div>

      <h2 style={{ marginBottom: 15 }}>🚀 Available Labs</h2>

      <div style={styles.grid}>
        {labs.map((lab, index) => (
          <div key={index} style={styles.card}>
            <h3>{lab.title}</h3>

            <p>
              <strong>Course:</strong> {lab.course}
            </p>

            <p>
              <strong>Difficulty:</strong> {lab.difficulty}
            </p>

            <p>
              <strong>Duration:</strong> {lab.duration}
            </p>

            <p>
              <strong>Task:</strong> {lab.task}
            </p>

            <div style={styles.progressContainer}>
              <div
                style={{
                  ...styles.progressBar,
                  width: `${lab.progress}%`,
                }}
              />
            </div>

            <p>{lab.progress}% Complete</p>

            <button
              style={styles.button}
              onClick={() => setSelectedLab(lab)}
            >
              ▶ Start Lab
            </button>
          </div>
        ))}
      </div>

      {selectedLab && (
        <div style={styles.modal}>

          <h2>🧪 {selectedLab.title}</h2>

          <p>
            <strong>Course:</strong> {selectedLab.course}
          </p>

          <p>
            <strong>Difficulty:</strong> {selectedLab.difficulty}
          </p>

          <p>
            <strong>Duration:</strong> {selectedLab.duration}
          </p>

          <div style={styles.section}>
            <h3>🎯 Objective</h3>
            <p>{selectedLab.task}</p>
          </div>

          <div style={styles.section}>
            <h3>📝 Lab Steps</h3>

            {selectedLab.steps.map(
              (step: string, i: number) => (
                <div key={i} style={styles.step}>
                  ✅ Step {i + 1}: {step}
                </div>
              )
            )}
          </div>

          <div style={styles.section}>
            <h3>🧠 AI Hint</h3>
            <p>{selectedLab.hint}</p>
          </div>

          <div style={styles.section}>
            <h3>🏆 Expected Learning Outcome</h3>

            <p>
              Upon completion, students should be able
              to apply theoretical concepts in practical
              cybersecurity, blockchain, digital forensics,
              database security and IoT environments.
            </p>
          </div>

          <button
            style={styles.closeBtn}
            onClick={() => setSelectedLab(null)}
          >
            Close Lab
          </button>

        </div>
      )}
    </div>
  )
}

const styles: any = {
  page: {
    padding: 20,
    background: "#f4f6fb",
    minHeight: "100vh",
  },

  header: {
    background: "#0b2e4a",
    color: "white",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
    gap: 15,
    marginBottom: 25,
  },

  statCard: {
    background: "white",
    padding: 15,
    borderRadius: 12,
    textAlign: "center",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: 15,
  },

  card: {
    background: "white",
    padding: 15,
    borderRadius: 12,
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },

  progressContainer: {
    width: "100%",
    height: 10,
    background: "#e5e7eb",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },

  progressBar: {
    height: "100%",
    background: "#16a34a",
    borderRadius: 10,
  },

  button: {
    marginTop: 10,
    width: "100%",
    background: "#0b2e4a",
    color: "white",
    border: "none",
    padding: 10,
    borderRadius: 8,
    cursor: "pointer",
  },

  modal: {
    marginTop: 30,
    background: "white",
    padding: 20,
    borderRadius: 12,
    border: "2px solid #0b2e4a",
  },

  section: {
    marginTop: 15,
  },

  step: {
    padding: 10,
    marginTop: 8,
    background: "#f8fafc",
    borderRadius: 8,
  },

  closeBtn: {
    marginTop: 20,
    background: "#dc2626",
    color: "white",
    border: "none",
    padding: 10,
    borderRadius: 8,
    cursor: "pointer",
  },
}