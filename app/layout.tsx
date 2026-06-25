"use client"

import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()

  const [photo, setPhoto] = useState<string | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem("akili_photo")
    if (saved) setPhoto(saved)
  }, [])

  const logout = () => {
    localStorage.clear()
    router.push("/login")
  }

  const handleUpload = (e: any) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()

    reader.onload = () => {
      const img = reader.result as string
      localStorage.setItem("akili_photo", img)
      setPhoto(img)
    }

    reader.readAsDataURL(file)
  }

  const isLoginPage = pathname === "/login"

  return (
    <html lang="en">
      <body style={styles.wrapper}>

        {isLoginPage ? (
          children
        ) : (
          <>
            {/* SIDEBAR */}
            <div style={styles.sidebar}>

              <div style={styles.brandBox}>
                <Image
                  src="/ouk-logo.png"
                  alt="OUK Logo"
                  width={34}
                  height={34}
                />

                <div>
                  <div style={styles.brandTitle}>
                    AkiliMesh
                  </div>

                  <div style={styles.brandSub}>
                    OUK Learning Intelligence
                  </div>
                </div>
              </div>

              {/* PROFILE */}
              <div style={styles.profileBox}>

                <label style={styles.avatarUpload}>
                  {photo ? (
                    <img
                      src={photo}
                      style={styles.avatarImg}
                      alt="Profile"
                    />
                  ) : (
                    "📷"
                  )}

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleUpload}
                    style={{ display: "none" }}
                  />
                </label>

                <div>
                  <div style={styles.name}>
                    Andrew
                  </div>

                  <div style={styles.email}>
                    st63610222025@students.ouk.ac.ke
                  </div>

                  <div style={styles.statusRow}>
                    <span style={styles.active}>
                      ● Active
                    </span>

                    <span style={styles.registered}>
                      Registered
                    </span>
                  </div>
                </div>

              </div>

              <hr style={styles.divider} />

              <button
                onClick={() => router.push("/dashboard")}
                style={styles.btn}
              >
                🏠 Dashboard
              </button>

              <button
                onClick={() => router.push("/courses")}
                style={styles.btn}
              >
                📚 Courses
              </button>

              <button
                onClick={() => router.push("/labs")}
                style={styles.btn}
              >
                🧪 Labs
              </button>
              <button
  onClick={() => router.push("/research")}
  style={styles.btn}
>
  💡 Research & Innovation
</button>

              <button
                onClick={() => router.push("/peer")}
                style={styles.btn}
              >
                🧠 Peer Learning
              </button>

              <button
                onClick={() => router.push("/profile")}
                style={styles.btn}
              >
                👤 Profile
              </button>

              <button
                onClick={() => router.push("/performance")}
                style={styles.btn}
              >
                📊 Performance
              </button>

              <button
                onClick={() => router.push("/settings")}
                style={styles.btn}
              >
                ⚙ Settings
              </button>

              <button
                onClick={logout}
                style={styles.logout}
              >
                Logout
              </button>

            </div>

            {/* MAIN CONTENT */}
            <div style={styles.main}>

              <div style={styles.topbar}>

                <div style={styles.topLeft}>
                  <Image
                    src="/ouk-logo.png"
                    alt="OUK Logo"
                    width={28}
                    height={28}
                  />

                  <div style={styles.topTitle}>
                    AkiliMesh
                  </div>
                </div>

                <div style={styles.topRight}>
                  OUK Learning Intelligence System
                </div>

              </div>

              <div style={styles.content}>
                {children}
              </div>

            </div>
          </>
        )}

      </body>
    </html>
  )
}

const styles: any = {
  wrapper: {
    display: "flex",
    margin: 0,
    fontFamily: "Arial",
    background: "#f4f6fb",
    minHeight: "100vh",
  },

  sidebar: {
    width: 250,
    background: "#0b2e4a",
    color: "white",
    padding: 15,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  brandBox: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },

  brandTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },

  brandSub: {
    fontSize: 11,
    opacity: 0.8,
  },

  profileBox: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    padding: 12,
    background: "#123a5c",
    borderRadius: 12,
  },

  avatarUpload: {
    width: 45,
    height: 45,
    borderRadius: "50%",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    overflow: "hidden",
    fontSize: 18,
    color: "#0b2e4a",
  },

  avatarImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  name: {
    fontWeight: "bold",
    fontSize: 14,
  },

  email: {
    fontSize: 11,
    opacity: 0.85,
  },

  statusRow: {
    display: "flex",
    gap: 8,
    fontSize: 10,
    marginTop: 3,
  },

  active: {
    color: "#4ade80",
  },

  registered: {
    color: "#60a5fa",
  },

  divider: {
    borderColor: "#1f3f5a",
  },

  btn: {
    padding: 10,
    background: "#123a5c",
    color: "white",
    border: "none",
    borderRadius: 8,
    textAlign: "left",
    cursor: "pointer",
  },

  logout: {
    marginTop: 15,
    padding: 10,
    background: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },

  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  topbar: {
    background: "white",
    padding: 12,
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  topLeft: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  topTitle: {
    fontWeight: "bold",
    color: "#0b2e4a",
    fontSize: 16,
  },

  topRight: {
    fontSize: 12,
    color: "#6b7280",
  },

  content: {
    padding: 20,
  },
}