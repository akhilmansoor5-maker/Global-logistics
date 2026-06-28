"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Building2, Zap, ShieldCheck } from "lucide-react";

const CAPABILITIES = [
  {
    icon: Globe,
    title: "Global Network",
    description: "Connected to 50+ countries through partnerships with major freight forwarders, customs brokers, and logistics providers.",
    color: "#4F8EF7",
  },
  {
    icon: Building2,
    title: "Licensed Operations",
    description: "Fully licensed freight forwarder and customs broker in Oman, compliant with IATA, IMDG, and all regulatory requirements.",
    color: "#38BDF8",
  },
  {
    icon: Zap,
    title: "Real-Time Visibility",
    description: "Advanced tracking systems provide complete visibility from origin to destination with proactive shipment updates.",
    color: "#818cf8",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Grade",
    description: "Handling everything from general cargo to dangerous goods, pharmaceuticals, and complex project cargo with precision.",
    color: "#4F8EF7",
  },
];

export default function Credibility() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="cr-section" style={{ background: "#04080f", padding: "96px 60px", position: "relative", overflow: "hidden" }}>

      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg, transparent, rgba(79,142,247,0.3), transparent)" }} />
      <div style={{ position: "absolute", top: "30%", left: -100, width: 500, height: 500, background: "radial-gradient(ellipse, rgba(79,142,247,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative", zIndex: 1 }}>

        <motion.div
          className="cr-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ maxWidth: 680, margin: "0 auto 64px", textAlign: "center" }}
        >
          <div style={{ marginBottom: 20 }}>
            <span className="label-badge">Our Capabilities</span>
          </div>
          <h2 style={{ fontSize: 52, fontWeight: 800, color: "#fff", marginBottom: 20, lineHeight: 1.06, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.03em" }}>
            Enterprise logistics,<br /><span className="gt">built for scale</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.75 }}>
            We combine deep regional expertise with global logistics capabilities to move your cargo reliably, transparently, and profitably.
          </p>
        </motion.div>

        <div className="cr-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                style={{
                  padding: "40px 36px",
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  gap: 24,
                  transition: "border-color 0.25s, background 0.25s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(79,142,247,0.28)";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(79,142,247,0.055)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
                }}
              >
                <div style={{ flexShrink: 0 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: "rgba(79,142,247,0.1)",
                    border: "1px solid rgba(79,142,247,0.18)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={24} strokeWidth={1.5} style={{ color: cap.color }} />
                  </div>
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 10, letterSpacing: "-0.02em" }}>{cap.title}</h3>
                  <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, margin: 0 }}>{cap.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){.cr-section{padding:72px 40px!important}}
        @media(max-width:768px){.cr-section{padding:56px 24px!important}.cr-grid{grid-template-columns:1fr!important;gap:14px!important}.cr-header h2{font-size:34px!important}}
        @media(max-width:768px){.cr-grid .motion-div{flex-direction:column!important;gap:16px!important}}
      `}</style>
    </section>
  );
}
