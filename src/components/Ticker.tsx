"use client";

const ITEMS = [
  "Air Freight", "Sea Freight", "Land Freight", "Customs Clearance",
  "Warehousing", "Project Cargo", "Door-to-Door Delivery",
  "Oman Imports & Exports", "GCC Logistics", "Supply Chain Solutions",
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      padding: "14px 0",
      overflow: "hidden",
      backdropFilter: "blur(8px)",
    }}>
      <div className="marquee" style={{ display: "flex", gap: 0, whiteSpace: "nowrap" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 24, padding: "0 36px" }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#4F8EF7", display: "inline-block", flexShrink: 0, opacity: 0.7 }} />
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 11.5, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
