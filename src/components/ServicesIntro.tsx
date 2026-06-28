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
    <section ref={ref} className="si-section" style={{ background: "#F8F9FA", padding: "80px 60px", borderTop: "1px solid #E5E7EB" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>

        <motion.div
          className="si-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 800, margin: "0 auto 56px", textAlign: "center" }}
        >
          <h2 style={{ fontSize: 56, fontWeight: 800, color: "#0A1929", marginBottom: 20, lineHeight: 1.1, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.01em" }}>
            Our Services
          </h2>
          <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7, marginBottom: 32 }}>
            Comprehensive logistics solutions tailored for importers, exporters, and manufacturers.
          </p>
          <a
            href="/Global-logistics/services"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "#0066FF", fontWeight: 600, fontSize: 15, textDecoration: "none", transition: "gap 0.25s" }}
            onMouseEnter={e => (e.currentTarget.style.gap = "16px")}
            onMouseLeave={e => (e.currentTarget.style.gap = "10px")}
          >
            Explore All Services <ArrowRight size={18} strokeWidth={1.5} />
          </a>
        </motion.div>

        <div className="si-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 24 }}>
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
                  padding: "32px 24px",
                  background: "#fff",
                  borderRadius: 8,
                  border: "1px solid rgba(0,102,255,0.1)",
                  textDecoration: "none",
                  transition: "all 0.25s",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#0066FF";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(0,102,255,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,102,255,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                <div>
                  <Icon size={28} strokeWidth={1.5} style={{ color: "#0066FF" }} />
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0A1929", margin: 0, letterSpacing: "-0.01em" }}>{s.name}</h3>
                  <p style={{ fontSize: 13, color: "#94A3B8", margin: "8px 0 0 0" }}>{s.brief}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      <style>{`
        @media(max-width:1200px){.si-grid{grid-template-columns:repeat(3,1fr)!important}}
        @media(max-width:1024px){.si-section{padding:60px 40px!important}}
        @media(max-width:768px){.si-section{padding:48px 24px!important}.si-grid{grid-template-columns:1fr 1fr!important;gap:16px!important}.si-header h2{font-size:32px!important}.si-header p{font-size:14px!important}}
        @media(max-width:480px){.si-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}
