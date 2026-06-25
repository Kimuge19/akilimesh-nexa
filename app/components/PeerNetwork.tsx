export default function PeerNetwork() {
  const peers = [
    { name: "Beatrice Wanjiru", score: 92 },
    { name: "Isaac Mugambi", score: 88 },
    { name: "Osman Ali", score: 70 },
    { name: "Rachel Joseph", score: 85 },
    { name: "Faith Odhiambo", score: 60 },
  ]

  const best = [...peers].sort((a, b) => b.score - a.score)[0]

  const strong = peers.filter(p => p.score >= 80)
  const weak = peers.filter(p => p.score < 80)

  return (
    <div style={styles.box}>

      <h3>👥 Peer Intelligence Network</h3>

      <p>🧠 Best Peer to Ask: <b>{best.name}</b></p>

      <h4>⭐ Strong Students</h4>
      {strong.map((p, i) => (
        <div key={i} style={styles.card}>
          {p.name} — {p.score}%
        </div>
      ))}

      <h4>📘 Needs Support</h4>
      {weak.map((p, i) => (
        <div key={i} style={styles.cardWeak}>
          {p.name} — {p.score}%
        </div>
      ))}

      <h4>🤝 Suggested Pairings</h4>
      {weak.map((w, i) => (
        <div key={i} style={styles.card}>
          {w.name} → Learn with {strong[0]?.name}
        </div>
      ))}

    </div>
  )
}

const styles: any = {
  box: {
    padding: 15,
    background: "#f6f8fb",
    borderRadius: 10,
  },

  card: {
    background: "white",
    padding: 8,
    marginTop: 6,
    borderRadius: 8,
  },

  cardWeak: {
    background: "#fff7ed",
    padding: 8,
    marginTop: 6,
    borderRadius: 8,
  },
}