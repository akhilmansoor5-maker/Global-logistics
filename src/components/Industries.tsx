"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingBag, Factory, Package, Truck, Zap, Boxes, ShoppingCart, HardHat } from "lucide-react";

const LIST = [
  { label: "Retail",          icon: ShoppingBag, desc: "Consumer goods, fashion & retail distribution" },
  { label: "Manufacturing",   icon: Factory, desc: "Raw materials & finished goods supply chains" },
  { label: "Healthcare",      icon: Package, desc: "Medical supplies & healthcare logistics" },
  { label: "Automotive",      icon: Truck, desc: "Parts, vehicles & assembly logistics" },
  { label: "Energy",          icon: Zap, desc: "Project cargo & equipment distribution" },
  { label: "FMCG",            icon: Boxes, desc: "Fast-moving consumer goods distribution" },
  { label: "E-Commerce",      icon: ShoppingCart, desc: "Fulfillment, last-mile & distribution" },
  { label: "Construction",    icon: HardHat, desc: "Heavy equipment & building materials" },
];

export default function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="industries" ref={ref} style={{ padding: "100px 0", background: "#070b14", position: "relative", overflow: "hidden" }}>

      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg, transparent, rgba(79,142,247,0.25), transparent)" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <div style={{ marginBottom: 20 }}>
            <span className="label-badge">Industries We Serve</span>
          </div>
          <h2 style={{ fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", fontFamily: "var(--font-inter-tight,sans-serif)" }}>
            Expertise Across<br /><span className="gt">Every Sector</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }} className="ind-grid">
          {LIST.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: 16,
                padding: "24px 20px",
                border: "1px solid rgba(255,255,255,0.07)",
                cursor: "default",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(79,142,247,0.3)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(79,142,247,0.06)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ marginBottom: 12, display: "block" }}>
                <ind.icon size={28} strokeWidth={1.5} style={{ color: "#93c5fd" }} />
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 6, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.01em" }}>{ind.label}</div>
              <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}>{ind.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){.ind-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:768px){#industries{padding:72px 0!important}#industries>div{padding:0 24px!important}}
      `}</style>
    </section>
  );
}
