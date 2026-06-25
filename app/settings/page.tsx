"use client"

import { useState } from "react"

export default function SettingsPage() {
  const [dark, setDark] = useState(false)

  return (
    <div>
      <h1>⚙ Settings</h1>

      <div style={card}>
        <h3>Preferences</h3>

        <label>
          <input
            type="checkbox"
            checked={dark}
            onChange={() => setDark(!dark)}
          />
          Dark Mode (UI only)
        </label>
      </div>

      <div style={card}>
        <h3>Account</h3>
        <p>🔐 Password protected</p>
        <p>📧 Email notifications ON</p>
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