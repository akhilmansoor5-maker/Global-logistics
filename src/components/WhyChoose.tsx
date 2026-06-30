"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, ShieldCheck, Radar } from "lucide-react";

const REASONS = [
  {
    icon: Globe,
    title: "Global Network",
    desc: "Connected across 50+ countries with trusted freight forwarding, customs, and logistics partners.",
    color: "#4F8EF7",
  },
  {
    icon: ShieldCheck,
    title: "Licensed Operations",
    desc: "Oman-licensed freight forwarder and customs broker with professional compliance standards.",
    color: "#38BDF8",
  },
  {
    icon: Radar,
    title: "Real-Time Intelligence",
    desc: "Complete visibility from pickup to delivery with proactive tracking and shipment updates.",
    color: "#818cf8",
  },
];

export default function WhyChoose() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="wc-section" style={{ background: "#04080f", padding: "96px 60px", position: "relative", overflow: "hidden" }}>

      {/* Glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 400, background: "radial-gradient(ellipse, rgba(79,142,247,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative", zIndex: 1 }}>

        <motion.div
          className="wc-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ maxWidth: 680, margin: "0 auto 64px", textAlign: "center" }}
        >
          <div style={{ marginBottom: 20 }}>
            <span className="label-badge">Why choose us</span>
          </div>
          <h2 style={{ fontSize: 52, fontWeight: 800, color: "#fff", marginBottom: 20, lineHeight: 1.06, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.03em" }}>
            Why businesses <span className="gt">choose us</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.75 }}>
            We combine deep regional expertise with enterprise-grade logistics infrastructure to deliver consistent results.
          </p>
        </motion.div>

        <div className="wc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                style={{
                  padding: "40px 36px",
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.07)",
                  transition: "border-color 0.25s, background 0.25s",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(79,142,247,0.3)";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(79,142,247,0.06)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
                }}
              >
                <div style={{
                  marginBottom: 28,
                  width: 52, height: 52,
                  borderRadius: 14,
                  background: `rgba(${r.color === "#4F8EF7" ? "79,142,247" : r.color === "#38BDF8" ? "56,189,248" : "129,140,248"},0.12)`,
                  border: `1px solid rgba(${r.color === "#4F8EF7" ? "79,142,247" : r.color === "#38BDF8" ? "56,189,248" : "129,140,248"},0.2)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={24} strokeWidth={1.5} style={{ color: r.color }} />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-0.02em" }}>{r.title}</h3>
                <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, margin: 0 }}>{r.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){.wc-section{padding:72px 40px!important}.wc-grid{grid-template-columns:1fr 1fr!important;gap:20px!important}}
        @media(max-width:768px){.wc-section{padding:56px 24px!important}.wc-grid{grid-template-columns:1fr!important}.wc-header h2{font-size:34px!important}}
      `}</style>
    </section>
  );
}
