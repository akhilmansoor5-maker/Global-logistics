"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const REASONS = [
  {
    icon: "🌍",
    title: "Global Network",
    desc: "50+ countries, trusted partner network, seamless cross-border logistics.",
  },
  {
    icon: "✓",
    title: "Licensed Customs Expertise",
    desc: "Expert brokers, Oman-certified, zero delays at borders, full compliance.",
  },
  {
    icon: "⚡",
    title: "Reliable Delivery",
    desc: "On-time performance, real-time tracking, proactive communication.",
  },
  {
    icon: "🛡️",
    title: "Full Service Coverage",
    desc: "Air, Sea, Land freight + warehousing + supply chain management.",
  },
];

export default function WhyChoose() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} style={{ background: "#F9FAFB", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 72, maxWidth: 600 }}
        >
          <h2 style={{ fontSize: 44, fontWeight: 900, color: "#0A1929", marginBottom: 16, lineHeight: 1.12, fontFamily: "var(--font-inter-tight,sans-serif)" }}>
            Why Choose Globe Logistic
          </h2>
          <p style={{ fontSize: 17, color: "#64748B", lineHeight: 1.75 }}>
            We combine global reach with local expertise to move your cargo reliably.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ padding: 40, background: "#fff", borderRadius: 12, border: "1px solid #E5E7EB", transition: "all 0.3s" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#0066FF";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,102,255,0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#E5E7EB";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 16 }}>{r.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0A1929", marginBottom: 10 }}>{r.title}</h3>
              <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.8 }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:768px){section>div>div:last-child{grid-template-columns:1fr!important}}}`}</style>
    </section>
  );
}
