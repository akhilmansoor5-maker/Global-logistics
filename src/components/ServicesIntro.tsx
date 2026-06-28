"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Plane, Ship, Truck, FileText, Container } from "lucide-react";

const SERVICES = [
  { icon: Plane, name: "Air Freight", brief: "Express delivery worldwide" },
  { icon: Ship, name: "Sea Freight", brief: "Economical global shipping" },
  { icon: Truck, name: "Land Freight", brief: "GCC and cross-border coverage" },
  { icon: FileText, name: "Customs Clearance", brief: "Licensed broker expertise" },
  { icon: Container, name: "Project Cargo", brief: "Heavy lift and complex logistics" },
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
          style={{ marginBottom: 80, maxWidth: 700 }}
        >
          <h2 style={{ fontSize: 48, fontWeight: 800, color: "#0A1929", marginBottom: 20, lineHeight: 1.15, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.01em" }}>
            Our Services
          </h2>
          <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7, marginBottom: 32 }}>
            Comprehensive logistics solutions tailored for importers, exporters, and manufacturers.
          </p>
          <a
            href="/Global-logistics/services"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "#0A1929", fontWeight: 600, fontSize: 14, textDecoration: "none", transition: "gap 0.25s" }}
            onMouseEnter={e => (e.currentTarget.style.gap = "16px")}
            onMouseLeave={e => (e.currentTarget.style.gap = "10px")}
          >
            Explore Our Services <ArrowRight size={18} strokeWidth={1.5} />
          </a>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32 }}>
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.name}
                href="/Global-logistics/services"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  padding: 32,
                  background: "#fff",
                  borderRadius: 8,
                  border: "1px solid #E5E7EB",
                  textDecoration: "none",
                  transition: "all 0.25s",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  transform: "translateY(0)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#0A1929";
                  (e.currentTarget as HTMLAnchorElement).style.background = "#F8F9FA";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E5E7EB";
                  (e.currentTarget as HTMLAnchorElement).style.background = "#fff";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                <div>
                  <Icon size={28} strokeWidth={1.5} style={{ color: "#0A1929" }} />
                </div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0A1929", margin: 0, letterSpacing: "-0.01em" }}>{s.name}</h3>
                  <p style={{ fontSize: 13, color: "#94A3B8", margin: "8px 0 0 0" }}>{s.brief}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      <style>{`@media(max-width:900px){div>div:last-child{grid-template-columns:1fr 1fr!important}}@media(max-width:600px){div>div:last-child{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
