"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function PeerLearning() {
  const router = useRouter()

  const [view, setView] = useState<"local" | "global">("local")
  const [requests, setRequests] = useState<any[]>([])
  const [connected, setConnected] = useState<any[]>([])

  useEffect(() => {
    const user = localStorage.getItem("akilimesh_user")
    if (!user) router.push("/login")
  }, [router])

  /* ================= DATA ================= */

  const localPeers = [
    { name: "Beatrice Wanjiru", course: "CSF 805", focus: "Distributed Ledger Security" },
    { name: "Isaac Mugambi", course: "CSF 805", focus: "Blockchain Architecture" },
    { name: "Kiptoo Kirwa", course: "CSC 823", focus: "IoT Security Systems" },
    { name: "Osman Ali", course: "CSC 823", focus: "Smart Devices Security" },
    { name: "Dlamini Siphosethu", course: "CSF 801", focus: "Network Defense" },
    { name: "Kandie Kimuge", course: "CSF 801", focus: "Web Security Protocols" },
  ]

  const globalPeers = [
    { name: "Alex Johnson", country: "USA", university: "MIT", course: "CSF 805", focus: "Blockchain Research" },
    { name: "Emily Carter", country: "UK", university: "University of London", course: "CSC 823", focus: "Cyber Defense Models" },
    { name: "Raj Patel", country: "India", university: "IIT Delhi", course: "CSC 823", focus: "IoT Engineering" },
    { name: "Amina Yusuf", country: "Nigeria", university: "UNILAG", course: "CSF 801", focus: "Web Security" },
  ]

  const data = view === "local" ? localPeers : globalPeers

  /* ================= ACTIONS ================= */

  const sendRequest = (peer: any) => {
    if (!requests.find(r => r.name === peer.name)) {
      setRequests([...requests, peer])
    }
  }

  const acceptRequest = (peer: any) => {
    setConnected([...connected, peer])
    setRequests(requests.filter(r => r.name !== peer.name))
  }

  const rejectRequest = (peer: any) => {
    setRequests(requests.filter(r => r.name !== peer.name))
  }

  /* ================= GROUP LOGIC ================= */

  const groups = connected.reduce((acc: any, p: any) => {
    acc[p.course] = acc[p.course] || []
    acc[p.course].push(p)
    return acc
  }, {})

  const groupCount = Object.keys(groups).length

  /* ================= STATS ================= */

  const stats = {
    connected: connected.length,
    pending: requests.length,
    available: data.length,
  }

  /* ================= UI ================= */

  return (
    <div style={styles.wrapper}>

      {/* ================= LEFT SIDEBAR ================= */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>🧠 AkiliMesh</h2>

        <div style={styles.menu}>
          <button onClick={() => setView("local")} style={styles.btn}>
            🇰🇪 Local Peers
          </button>

          <button onClick={() => setView("global")} style={styles.btn}>
            🌍 Global Peers
          </button>
        </div>

        <div style={styles.statsBox}>
          <p>🤝 Connected: {stats.connected}</p>
          <p>📩 Pending: {stats.pending}</p>
          <p>👥 Available: {stats.available}</p>
        </div>

        <div style={styles.groupBox}>
          <h4>📚 My Peer Groups ({groupCount})</h4>

          {Object.keys(groups).length === 0 && (
            <p style={{ fontSize: 12 }}>No groups yet</p>
          )}

          {Object.keys(groups).map((course) => (
            <div key={course} style={styles.groupCard}>
              <b>{course}</b>
              <p>{groups[course].length} members</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MAIN AREA ================= */}
      <div style={styles.main}>

        <h2>🌍 Peer Learning Network</h2>
        <p>Local + Global Intelligent Collaboration</p>

        {/* CONNECTED */}
        <div style={styles.section}>
          <h3>🤝 Connected Peers</h3>

          {connected.length === 0 && <p>No connections yet</p>}

          {connected.map((p, i) => (
            <div key={i} style={styles.connectedCard}>
              👤 {p.name} — {p.course}
            </div>
          ))}
        </div>

        {/* REQUESTS */}
        <div style={styles.section}>
          <h3>📩 Pending Requests</h3>

          {requests.length === 0 && <p>No pending requests</p>}

          {requests.map((p, i) => (
            <div key={i} style={styles.requestCard}>
              <div>
                👤 {p.name}
                <p>{p.course} • {p.focus}</p>
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                <button style={styles.accept} onClick={() => acceptRequest(p)}>
                  Accept
                </button>

                <button style={styles.reject} onClick={() => rejectRequest(p)}>
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* AVAILABLE */}
        <div style={styles.section}>
          <h3>{view === "local" ? "🇰🇪 Local Peers" : "🌍 Global Peers"}</h3>

          {data.map((p, i) => (
            <div key={i} style={styles.card}>
              <div>
                👤 {p.name}
                <p>{p.course} • {p.focus}</p>
                {p.country && <p>🌍 {p.country} - {p.university}</p>}
              </div>

              <button style={styles.connect} onClick={() => sendRequest(p)}>
                Connect
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

/* ================= STYLES ================= */

const styles: any = {

  wrapper: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial",
    background: "#f4f6fb",
  },

  sidebar: {
    width: "260px",
    background: "#0b2e4a",
    color: "white",
    padding: 20,
  },

  logo: {
    marginBottom: 20,
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  btn: {
    padding: 10,
    background: "#123a5c",
    border: "none",
    color: "white",
    borderRadius: 6,
    cursor: "pointer",
    textAlign: "left",
  },

  statsBox: {
    marginTop: 20,
    padding: 10,
    background: "#123a5c",
    borderRadius: 8,
  },

  groupBox: {
    marginTop: 20,
    padding: 10,
    background: "#123a5c",
    borderRadius: 8,
  },

  groupCard: {
    padding: 8,
    marginTop: 8,
    background: "#1b4965",
    borderRadius: 6,
  },

  main: {
    flex: 1,
    padding: 20,
  },

  section: {
    marginTop: 20,
    padding: 15,
    background: "white",
    borderRadius: 10,
  },

  card: {
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 10,
    background: "#eef2ff",
    borderRadius: 8,
  },

  requestCard: {
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 10,
    background: "#fff7ed",
    borderRadius: 8,
  },

  connectedCard: {
    padding: 10,
    marginTop: 10,
    background: "#dcfce7",
    borderRadius: 8,
  },

  connect: {
    padding: "6px 10px",
    background: "#0b2e4a",
    color: "white",
    border: "none",
    borderRadius: 6,
  },

  accept: {
    padding: "6px 10px",
    background: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: 6,
  },

  reject: {
    padding: "6px 10px",
    background: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: 6,
  },
}