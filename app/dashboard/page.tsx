"use client"

import { useRouter } from "next/navigation"

export default function Dashboard() {
  const router = useRouter()

  const stats = {
    courses: 4,
    peers: 7,
    modules: 16,
    avgProgress: 66,
  }

  function getInsight(p: number) {
    if (p < 50) return "Focus on fundamentals and revision"
    if (p < 75) return "Good progress — improve weak modules (IoT)"
    return "Excellent performance — consider mentoring peers"
  }

  return (
    <div style={styles.page}>

      <div style={styles.header}>
        <h2>🧠 AkiliMesh AI Dashboard</h2>
        <p>OUK Learning Intelligence System</p>
      </div>

      <div style={styles.grid}>
        <div style={styles.card}>📚 Courses <h2>{stats.courses}</h2></div>
        <div style={styles.card}>👥 Peers <h2>{stats.peers}</h2></div>
        <div style={styles.card}>📘 Modules <h2>{stats.modules}</h2></div>
        <div style={styles.card}>📊 Progress <h2>{stats.avgProgress}%</h2></div>
      </div>

      <div style={styles.insight}>
        🧠 AI Insight: {getInsight(stats.avgProgress)}
      </div>

      <button style={styles.btn} onClick={() => router.push("/courses")}>
        Go to Courses →
      </button>

    </div>
  )
}

const styles: any = {
  page: { padding: 20, fontFamily: "Arial", background: "#f6f8fb", minHeight: "100vh" },

  header: {
    background: "#0b2e4a",
    color: "white",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 12,
  },

  card: {
    background: "white",
    padding: 20,
    borderRadius: 12,
  },

  insight: {
    marginTop: 20,
    padding: 15,
    background: "#ecfeff",
    borderRadius: 10,
  },

  btn: {
    marginTop: 20,
    padding: 10,
    background: "#0b2e4a",
    color: "white",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },
}