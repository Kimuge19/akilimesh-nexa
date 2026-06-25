"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function PeerLearning() {
  const router = useRouter()

  const [program, setProgram] = useState("")
  const [course, setCourse] = useState("")
  const [moduleView, setModuleView] = useState("")

  useEffect(() => {
    const user = localStorage.getItem("akilimesh_user")
    if (!user) router.push("/login")
  }, [router])

  /* ================= DATA ================= */

  const programs = [
    "MSc Cybersecurity and Digital Forensics",
    "MSc Data Science",
    "MSc Artificial Intelligence",
    "MSc Education Technology",
    "Other Programs",
  ]

  const courses: any = {
    "MSc Cybersecurity and Digital Forensics": [
      "CSF 803: Advanced Digital Forensics",
      "CSF 805: Distributed Ledger Technology Security",
      "CSC 823: Internet of Things (IoT)",
      "CSF 801: Networks and Web Security",
    ],
  }

  const modules: any = {
    "CSF 803: Advanced Digital Forensics": [
      "Module 1: Forensic Tools",
      "Module 2: Evidence Handling",
      "Module 3: Case Studies",
    ],
    "CSF 805: Distributed Ledger Technology Security": [
      "Module 1: Blockchain Basics",
      "Module 2: Smart Contracts",
      "Module 3: Consensus Security",
    ],
    "CSC 823: Internet of Things (IoT)": [
      "Module 1: IoT Architecture",
      "Module 2: Device Security",
      "Module 3: IoT Threats",
    ],
    "CSF 801: Networks and Web Security": [
      "Module 1: Network Defense",
      "Module 2: Firewalls",
      "Module 3: Web Security",
    ],
  }

  const groups = [
    {
      name: "Group A",
      members: ["Beatrice Wanjiru", "Isaac Mugambi", "Mercy Kandie"],
    },
    {
      name: "Group B",
      members: ["Kiptoo Kirwa", "Osman Ali", "Dlamini Siphosethu"],
    },
  ]

  /* ================= UI ================= */

  return (
    <div style={styles.page}>

      <h2>🧠 Peer Learning Network</h2>
      <p>Program → Course → Module → Study Groups</p>

      {/* ================= PROGRAM ================= */}
      <div style={styles.box}>
        <h3>🎓 Select Program</h3>

        {programs.map((p, i) => (
          <button key={i} onClick={() => setProgram(p)} style={styles.btn}>
            {p}
          </button>
        ))}
      </div>

      {/* ================= COURSE ================= */}
      {program && (
        <div style={styles.box}>
          <h3>📚 Courses</h3>

          {courses[program]?.map((c: string, i: number) => (
            <button key={i} onClick={() => setCourse(c)} style={styles.btn}>
              {c}
            </button>
          ))}
        </div>
      )}

      {/* ================= MODULE ================= */}
      {course && (
        <div style={styles.box}>
          <h3>📖 Modules</h3>

          {modules[course]?.map((m: string, i: number) => (
            <button
              key={i}
              onClick={() => setModuleView(m)}
              style={styles.moduleBtn}
            >
              {m}
            </button>
          ))}
        </div>
      )}

      {/* ================= GROUPS ================= */}
      {moduleView && (
        <div style={styles.box}>
          <h3>👥 Study Groups</h3>

          {groups.map((g, i) => (
            <div key={i} style={styles.groupCard}>
              <h4>{g.name}</h4>

              {g.members.map((m, j) => (
                <p key={j}>👤 {m}</p>
              ))}

              <button style={styles.joinBtn}>
                Request to Join
              </button>
            </div>
          ))}

          <button style={styles.createBtn}>
            + Create New Group
          </button>
        </div>
      )}

    </div>
  )
}

/* ================= STYLES ================= */

const styles: any = {

  page: {
    padding: 20,
    fontFamily: "Arial",
    background: "#f4f6fb",
    minHeight: "100vh",
  },

  box: {
    marginTop: 20,
    padding: 15,
    background: "white",
    borderRadius: 10,
  },

  btn: {
    margin: 5,
    padding: 10,
    background: "#0b2e4a",
    color: "white",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },

  moduleBtn: {
    display: "block",
    marginTop: 8,
    padding: 10,
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    width: "100%",
    textAlign: "left",
  },

  groupCard: {
    marginTop: 10,
    padding: 10,
    background: "#eef2ff",
    borderRadius: 8,
  },

  joinBtn: {
    marginTop: 10,
    padding: 8,
    background: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },

  createBtn: {
    marginTop: 15,
    padding: 10,
    background: "#7c3aed",
    color: "white",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    width: "100%",
  },
}