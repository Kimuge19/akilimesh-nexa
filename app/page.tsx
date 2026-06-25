"use client"

import Link from "next/link"

export default function Dashboard() {
  return (
    <div>
      <h1>🧠 AkiliMesh AI Dashboard</h1>

      <div style={card}>
        <p>📚 Courses: 4</p>
        <p>👥 Peers: 7</p>
        <p>📘 Modules: 16</p>
        <p>📊 Progress: 66%</p>
      </div>

      <div style={card}>
        <h3>🧠 AI Insight</h3>
        <p>Improve IoT Security (CSC-823)</p>
      </div>

      <Link href="/courses">Go to Courses →</Link>
    </div>
  )
}

const card: any = {
  background: "white",
  padding: 15,
  marginTop: 10,
  borderRadius: 10,
}