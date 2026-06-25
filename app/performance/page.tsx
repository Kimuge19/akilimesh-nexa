"use client"

export default function PerformancePage() {
  const data = [
    { course: "CSF-805", score: 70 },
    { course: "CSC-823", score: 55 },
    { course: "CSF-801", score: 80 },
    { course: "CSF-803", score: 60 },
  ]

  return (
    <div>
      <h1>📊 Performance</h1>

      {data.map((d, i) => (
        <div key={i} style={card}>
          <h3>{d.course}</h3>
          <p>{d.score}%</p>

          <div style={bar}>
            <div style={{ ...fill, width: `${d.score}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}

const card: any = {
  background: "white",
  padding: 15,
  marginTop: 10,
  borderRadius: 10,
}

const bar: any = {
  height: 10,
  background: "#ddd",
  borderRadius: 5,
}

const fill: any = {
  height: "100%",
  background: "#0b2e4a",
}