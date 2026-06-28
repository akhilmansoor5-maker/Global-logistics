"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const REASONS = [
  {
    title: "Global Network",
    desc: "Direct partnerships across 50+ countries spanning every major trade corridor. Your cargo moves through trusted agents, not unknowns.",
  },
  {
    title: "Customs Expertise",
    desc: "Licensed brokers with deep knowledge of Oman, GCC, and international customs law. Zero surprises at the border.",
  },
  {
    title: "Reliable Delivery",
    desc: "We commit to timelines and deliver on them. Proactive communication at every milestone — from pickup to final delivery.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ background: "#04080f", padding: "120px 40px", position: "relative", overflow: "hidden" }}>

      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg, transparent, rgba(79,142,247,0.25), transparent)" }} />
      <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 400, background: "radial-gradient(ellipse, rgba(79,142,247,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 72, maxWidth: 500 }}
        >
          <div style={{ marginBottom: 20 }}>
            <span className="label-badge">Why Globe Logistic</span>
          </div>
          <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 800, color: "#fff", lineHeight: 1.06, letterSpacing: "-0.03em", fontFamily: "var(--font-inter-tight,sans-serif)" }}>
            Three reasons businesses<br />trust us with their cargo
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, borderTop: "1px solid rgba(255,255,255,0.06)" }} className="whyus-grid">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              style={{
                padding: "48px 40px",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(79,142,247,0.04)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "transparent"; }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(79,142,247,0.4)", letterSpacing: "0.12em", marginBottom: 24 }}>0{i + 1}</div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.2, letterSpacing: "-0.02em" }}>{r.title}</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.35)", lineHeight: 1.85, margin: 0 }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:768px){.whyus-grid{grid-template-columns:1fr!important}section>div>div:last-child>div{border-right:none!important;border-bottom:1px solid rgba(255,255,255,0.06)!important}}
        @media(max-width:768px){section>div{padding:72px 24px!important}}
      `}</style>
    </section>
  );
}
