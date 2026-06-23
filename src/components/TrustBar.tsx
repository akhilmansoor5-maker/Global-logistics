"use client";

const items = [
  "Air Freight","Sea Freight","Land Freight","Customs Clearance",
  "Cargo Insurance","Warehousing","Supply Chain","Project Cargo",
  "Air Freight","Sea Freight","Land Freight","Customs Clearance",
  "Cargo Insurance","Warehousing","Supply Chain","Project Cargo",
];

export default function TrustBar() {
  return (
    <div style={{ background:"#0A2540", borderTop:"1px solid rgba(255,255,255,0.06)", borderBottom:"1px solid rgba(255,255,255,0.06)", overflow:"hidden", position:"relative", padding:"14px 0" }}>
      {/* Edge fades */}
      <div style={{ position:"absolute",left:0,top:0,bottom:0,width:80,background:"linear-gradient(to right,#0A2540,transparent)",zIndex:1,pointerEvents:"none" }}/>
      <div style={{ position:"absolute",right:0,top:0,bottom:0,width:80,background:"linear-gradient(to left,#0A2540,transparent)",zIndex:1,pointerEvents:"none" }}/>

      <div className="animate-marquee" style={{ display:"flex", whiteSpace:"nowrap", userSelect:"none" }}>
        {items.map((item, i) => (
          <div key={i} style={{ display:"inline-flex", alignItems:"center", flexShrink:0, paddingLeft:32, paddingRight:32 }}>
            <span style={{ width:4, height:4, borderRadius:"50%", background:"#0066FF", marginRight:28, flexShrink:0, display:"inline-block" }}/>
            <span style={{ color:"rgba(255,255,255,0.42)", fontSize:12.5, fontWeight:500, letterSpacing:"0.03em" }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
