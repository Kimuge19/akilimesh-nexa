"use client"

export default function ProfilePage() {
  return (
    <div>
      <h1>👤 Profile</h1>

      <div style={card}>
        <h3>Student Profile</h3>
        <p><b>Name:</b> Andrew Kimuge</p>
        <p><b>Email:</b> st63610222025@students.ouk.ac.ke</p>
        <p><b>Status:</b> Active</p>
        <p><b>Program:</b> MSc Cybersecurity & Digital Forensics</p>
      </div>

      <div style={card}>
        <h3>AI Learning Profile</h3>
        <p>🧠 Strength: Networks & Security</p>
        <p>⚠ Weak Area: IoT Security</p>
      </div>
    </div>
  )
}

const card: any = {
  background: "white",
  padding: 15,
  marginTop: 10,
  borderRadius: 10,
}