"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LIST = [
  { label:"Retail",         icon:"🛍️", desc:"Consumer goods, fashion & retail distribution" },
  { label:"Manufacturing",  icon:"⚙️", desc:"Raw materials & finished goods supply chains" },
  { label:"Pharmaceuticals",icon:"💊", desc:"Cold chain & temperature-sensitive cargo" },
  { label:"Automotive",     icon:"🚗", desc:"Parts, vehicles & assembly logistics" },
  { label:"Oil & Gas",      icon:"🛢️", desc:"Project cargo & oilfield equipment" },
  { label:"FMCG",           icon:"📦", desc:"Fast-moving consumer goods distribution" },
  { label:"E-Commerce",     icon:"🛒", desc:"Fulfilment, last-mile & returns management" },
  { label:"Construction",   icon:"🏗️", desc:"Heavy equipment & building materials" },
];

export default function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });

  return (
    <section id="industries" ref={ref} style={{ padding:"96px 0", background:"#F8FAFC" }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 48px" }}>
        <motion.div
          initial={{ opacity:0, y:20 }}
          animate={inView?{ opacity:1, y:0 }:{}}
          transition={{ duration:0.6 }}
          style={{ display:"flex", flexDirection:"column", gap:0, marginBottom:52 }}
        >
          <div style={{ fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#0066FF", marginBottom:16 }}>Industries We Serve</div>
          <h2 style={{ fontSize:"clamp(32px,3.5vw,44px)", fontWeight:900, color:"#0A2540" }}>
            Expertise Across<br/><span className="gradient-text">Every Sector</span>
          </h2>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14 }}>
          {LIST.map((ind,i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity:0, y:18 }}
              animate={inView?{ opacity:1, y:0 }:{}}
              transition={{ duration:0.45, delay:i*0.06 }}
              style={{ background:"#fff", borderRadius:16, padding:"24px 20px", border:"1px solid #EFF2F6", cursor:"default", transition:"all 0.2s" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,102,255,0.25)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,102,255,0.07)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#EFF2F6";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize:28, marginBottom:12, display:"block" }}>{ind.icon}</div>
              <div style={{ fontSize:14, fontWeight:700, color:"#0A2540", marginBottom:6, fontFamily:"var(--font-inter-tight,sans-serif)" }}>{ind.label}</div>
              <div style={{ fontSize:12.5, color:"#9CA3AF", lineHeight:1.5 }}>{ind.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
