"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Header({ onLogout }: { onLogout?: () => void }) {
  const router = useRouter()

  return (
    <div style={styles.header}>
      <div style={styles.left}>
        <Image
          src="/ouk-logo.png"
          alt="OUK Logo"
          width={42}
          height={42}
        />

        <div>
          <h2 style={{ margin: 0, color: "white" }}>
            AkiliMesh | OUK Learning Intelligence
          </h2>
          <p style={styles.sub}>
            Adaptive Intelligence for Student Success
          </p>
        </div>
      </div>

      {onLogout && (
        <button style={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
    </div>
  )
}

const styles: any = {
  header: {
    background: "#0b2e4a",
    padding: "14px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: 12
  },

  sub: {
    margin: 0,
    fontSize: 12,
    color: "#cfe3ff"
  },

  logout: {
    background: "#ffcc00",
    border: "none",
    padding: "8px 14px",
    fontWeight: "bold",
    cursor: "pointer"
  }
}