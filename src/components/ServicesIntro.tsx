"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  { icon: "✈️", name: "Air Freight", brief: "Speed matters" },
  { icon: "🚢", name: "Sea Freight", brief: "Cost-effective" },
  { icon: "🚛", name: "Land Freight", brief: "Regional coverage" },
  { icon: "📋", name: "Customs", brief: "Expert clearance" },
  { icon: "⚓", name: "Project Cargo", brief: "Complex solutions" },
];

export default function ServicesIntro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} style={{ background: "#fff", padding: "100px 40px", borderTop: "1px solid #f0f0f0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 72, maxWidth: 600 }}
        >
          <h2 style={{ fontSize: 44, fontWeight: 900, color: "#0A1929", marginBottom: 16, lineHeight: 1.12, fontFamily: "var(--font-inter-tight,sans-serif)" }}>
            Our Services
          </h2>
          <p style={{ fontSize: 17, color: "#64748B", lineHeight: 1.75, marginBottom: 32 }}>
            Complete logistics solutions tailored to your business needs.
          </p>
          <a
            href="/Global-logistics/services"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#0066FF", fontWeight: 600, fontSize: 15, textDecoration: "none", transition: "gap 0.3s" }}
            onMouseEnter={e => (e.currentTarget.style.gap = "16px")}
            onMouseLeave={e => (e.currentTarget.style.gap = "8px")}
          >
            View All Services <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
          {SERVICES.map((s, i) => (
            <motion.a
              key={s.name}
              href="/Global-logistics/services"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                padding: 36,
                background: "#F9FAFB",
                borderRadius: 12,
                border: "1px solid #E5E7EB",
                textDecoration: "none",
                transition: "all 0.3s",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#0066FF";
                (e.currentTarget as HTMLAnchorElement).style.background = "#EFF6FF";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(0,102,255,0.08)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E5E7EB";
                (e.currentTarget as HTMLAnchorElement).style.background = "#F9FAFB";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                (e.currentTarget as HTMLAnchorElement).style.transform = "none";
              }}
            >
              <div style={{ fontSize: 40 }}>{s.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0A1929", margin: 0 }}>{s.name}</h3>
              <p style={{ fontSize: 14, color: "#94A3B8", margin: 0 }}>{s.brief}</p>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:900px){div>div:last-child{grid-template-columns:1fr 1fr!important}}@media(max-width:600px){div>div:last-child{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
