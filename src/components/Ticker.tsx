"use client";

const ITEMS = [
  "Air Freight",
  "Sea Freight",
  "Land Freight",
  "Customs Clearance",
  "Warehousing",
  "Project Cargo",
  "Door-to-Door Delivery",
  "Oman Imports & Exports",
  "GCC Logistics",
  "Supply Chain Solutions",
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div style={{ background: "#0A2540", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "16px 0", overflow: "hidden" }}>
      <div className="marquee" style={{ display: "flex", gap: 0, whiteSpace: "nowrap" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 24, padding: "0 36px" }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#0066FF", display: "inline-block", flexShrink: 0 }}/>
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
