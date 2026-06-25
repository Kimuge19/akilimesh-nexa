"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  const [emailOrReg, setEmailOrReg] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const login = () => {
    if (!emailOrReg || !password) {
      alert("Please enter your credentials")
      return
    }

    setLoading(true)

    setTimeout(() => {
      localStorage.setItem("akilimesh_user", emailOrReg)
      setLoading(false)
      router.push("/dashboard")
    }, 600)
  }

  const forgotPassword = () => {
    alert("Password reset link will be sent to your institutional email.")
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0b2e4a, #123a5c)",
        padding: 20,
        boxSizing: "border-box",
        fontFamily: "Arial",
      }}
    >
      {/* CARD WRAPPER */}
      <div style={{ width: "100%", maxWidth: 420 }}>
        
        {/* LOGIN CARD */}
        <div
          style={{
            background: "white",
            padding: 28,
            borderRadius: 16,
            boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
            textAlign: "center",
          }}
        >
          
          {/* LOGO */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
            <img
              src="/ouk-logo.png"
              alt="AkiliMesh-Nexa Logo"
              style={{
                width: 60,
                height: 60,
                objectFit: "contain",
              }}
            />
          </div>

          {/* TITLE */}
          <h1 style={{ margin: 0, fontSize: 26, color: "#0b2e4a" }}>
            AkiliMesh-Nexa
          </h1>

          {/* TAGLINE */}
          <p style={{ marginTop: 6, marginBottom: 18, fontSize: 13, color: "#1b4965" }}>
            Adaptive Intelligence for Student Success
          </p>

          {/* EMAIL */}
          <input
            placeholder="School Email or Reg Number"
            value={emailOrReg}
            onChange={(e) => setEmailOrReg(e.target.value)}
            style={{
              width: "100%",
              padding: 12,
              marginBottom: 12,
              borderRadius: 8,
              border: "1px solid #ccc",
              outline: "none",
              boxSizing: "border-box",
            }}
          />

          {/* PASSWORD */}
          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                flex: 1,
                padding: 12,
                borderRadius: 8,
                border: "1px solid #ccc",
                outline: "none",
              }}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                padding: "10px 12px",
                border: "none",
                background: "#e5e7eb",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* LOGIN BUTTON */}
          <button
            onClick={login}
            disabled={loading}
            style={{
              width: "100%",
              padding: 12,
              background: "#0b2e4a",
              color: "white",
              border: "none",
              borderRadius: 8,
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {loading ? "Signing in..." : "Login"}
          </button>

          {/* FORGOT PASSWORD */}
          <button
            onClick={forgotPassword}
            style={{
              marginTop: 10,
              background: "none",
              border: "none",
              color: "#0b2e4a",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Forgot Password?
          </button>
          {/* SIGNATURE */}
<p
  style={{
    marginTop: 18,
    fontSize: 12,
    color: "#888",
  }}
>
  @Kimuge2026
</p>
        </div>
      </div>
    </div>
  )
}