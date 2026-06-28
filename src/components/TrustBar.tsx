"use client";

const items = [
  "Air Freight","Sea Freight","Land Freight","Customs Clearance",
  "Cargo Insurance","Warehousing","Supply Chain","Project Cargo",
  "Air Freight","Sea Freight","Land Freight","Customs Clearance",
  "Cargo Insurance","Warehousing","Supply Chain","Project Cargo",
];

export default function TrustBar() {
  return (
    <div style={{
      background: "rgba(255,255,255,0.025)",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      overflow: "hidden",
      position: "relative",
      padding: "13px 0",
    }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to right, #04080f, transparent)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to left, #04080f, transparent)", zIndex: 1, pointerEvents: "none" }} />

      <div className="marquee" style={{ display: "flex", whiteSpace: "nowrap", userSelect: "none" }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: "inline-flex", alignItems: "center", flexShrink: 0, paddingLeft: 32, paddingRight: 32 }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#4F8EF7", marginRight: 28, flexShrink: 0, display: "inline-block", opacity: 0.6 }} />
            <span style={{ color: "rgba(255,255,255,0.28)", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
