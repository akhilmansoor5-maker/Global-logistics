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
    <section ref={ref} style={{ background: "#F9FAFB", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 80, maxWidth: 700 }}
        >
          <h2 style={{ fontSize: 48, fontWeight: 800, color: "#0A1929", marginBottom: 20, lineHeight: 1.15, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.01em" }}>
            Why businesses choose us
          </h2>
          <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7 }}>
            We combine deep regional expertise with enterprise-grade logistics infrastructure to deliver consistent results.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ padding: 0 }}
              >
                <div style={{ marginBottom: 24 }}>
                  <Icon size={28} strokeWidth={1.5} style={{ color: "#0A1929" }} />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0A1929", marginBottom: 12, letterSpacing: "-0.01em" }}>{r.title}</h3>
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
