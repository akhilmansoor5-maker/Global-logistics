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
    <section ref={ref} style={{ background: "#0A2540", padding: "120px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 72, maxWidth: 500 }}
        >
          <div style={{ color: "#38BDF8", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 18 }}>Why Globe Logistic</div>
          <h2 style={{ fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
            Three reasons businesses<br />trust us with their cargo
          </h2>
        </motion.div>

        {/* Reasons */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              style={{ padding: "48px 40px", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none" }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(56,189,248,0.4)", letterSpacing: "0.12em", marginBottom: 24 }}>0{i + 1}</div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>{r.title}</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.38)", lineHeight: 1.8 }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:768px){#whyus-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
