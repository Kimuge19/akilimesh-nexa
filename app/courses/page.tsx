"use client"

import { useRouter } from "next/navigation"

export default function CoursesPage() {
  const router = useRouter()

  const courses = [
    {
      code: "CSF-805",
      title: "Distributed Ledger Technology Security",
      lecturer: "Dr. Munyole",
      progress: 70,
      students: 18,
      focus: "Smart Contracts & Blockchain Security",
    },
    {
      code: "CSC-823",
      title: "Internet of Things (IoT)",
      lecturer: "Dr. Odongo",
      progress: 55,
      students: 15,
      focus: "Device Security & IoT Protocols",
    },
    {
      code: "CSF-801",
      title: "Networks & Web Security",
      lecturer: "Dr. Mururi",
      progress: 80,
      students: 20,
      focus: "Web Application Security & Firewalls",
    },
    {
      code: "CSF-803",
      title: "Advanced Digital Forensics",
      lecturer: "Dr. Ngaira",
      progress: 60,
      students: 16,
      focus: "Evidence Collection & Investigation",
    },
  ]

  const open = (code: string, tab: string) => {
    router.push(`/courses/${code}?tab=${tab}`)
  }

  return (
    <div style={styles.page}>

      {/* HEADER */}
      <div style={styles.header}>
        <h2>📚 Units / Courses — Year 1 • Semester 1</h2>
        <p>📅 May – August 2026 | 🧠 AkiliMesh Learning Intelligence System</p>
      </div>

      {/* GRID */}
      <div style={styles.grid}>
        {courses.map((c, i) => (
          <div key={i} style={styles.card}>

            <div style={styles.row}>
              <span style={styles.badge}>{c.code}</span>
              <span style={styles.progress}>{c.progress}%</span>
            </div>

            <h3>{c.title}</h3>

            <p>👨‍🏫 {c.lecturer}</p>
            <p>🧠 Focus: {c.focus}</p>

            <p>👥 {c.students} Students</p>

            <div style={styles.actions}>
              <button onClick={() => open(c.code, "modules")} style={styles.btn}>
                📖 View Modules
              </button>

              <button onClick={() => open(c.code, "peer")} style={styles.btn2}>
                👥 Peer Group
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

/* ============ STYLES ============ */

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
    marginBottom: 20,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 16,
  },

  card: {
    background: "white",
    padding: 16,
    borderRadius: 12,
    boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  badge: {
    background: "#0b2e4a",
    color: "white",
    padding: "4px 8px",
    borderRadius: 6,
    fontSize: 12,
  },

  progress: {
    color: "#16a34a",
    fontWeight: "bold",
  },

  actions: {
    display: "flex",
    gap: 10,
    marginTop: 12,
  },

  btn: {
    flex: 1,
    background: "#0b2e4a",
    color: "white",
    padding: 8,
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },

  btn2: {
    flex: 1,
    background: "#2563eb",
    color: "white",
    padding: 8,
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },
}