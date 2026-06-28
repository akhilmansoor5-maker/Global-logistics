"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, ShieldCheck, Radar } from "lucide-react";

const REASONS = [
  {
    icon: Globe,
    title: "Global Network",
    desc: "Connected across 50+ countries with trusted freight forwarding, customs, and logistics partners.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Certified",
    desc: "Oman-licensed freight forwarder and customs broker. IATA, IMDG, and pharmaceutical certified.",
  },
  {
    icon: Radar,
    title: "Real-Time Intelligence",
    desc: "Complete visibility from pickup to delivery with proactive tracking and shipment updates.",
  },
];

export default function WhyChoose() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} style={{ background: "#fff", padding: "80px 60px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>

        {/* Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56, maxWidth: 800, margin: "0 auto 56px", textAlign: "center" }}
        >
          <h2 style={{ fontSize: 56, fontWeight: 800, color: "#0A1929", marginBottom: 24, lineHeight: 1.1, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.01em" }}>
            Why businesses choose us
          </h2>
          <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7 }}>
            We combine deep regional expertise with enterprise-grade logistics infrastructure to deliver consistent results.
          </p>
        </motion.div>

        {/* Grid - Better spacing and cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 60 }}>
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ padding: "40px 32px", background: "#fff", borderRadius: "8px", border: "1px solid rgba(0,102,255,0.1)", transition: "all 0.3s ease" }}
              >
                <div style={{ marginBottom: 28, height: 40, display: "flex", alignItems: "flex-start" }}>
                  <Icon size={32} strokeWidth={1.5} style={{ color: "#0066FF" }} />
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: "#0A1929", marginBottom: 16, letterSpacing: "-0.01em" }}>{r.title}</h3>
                <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.7, margin: 0 }}>{r.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`@media(max-width:900px){section>div>div:last-child{grid-template-columns:1fr 1fr!important}}@media(max-width:600px){section>div>div:last-child{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
