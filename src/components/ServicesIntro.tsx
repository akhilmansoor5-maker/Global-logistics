"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Plane, Ship, Truck, FileText, Container } from "lucide-react";

const SERVICES = [
  { icon: Plane,     name: "Air Freight",       brief: "Express & transshipment solutions",  color: "#4F8EF7" },
  { icon: Ship,      name: "Sea Freight",        brief: "Economical global shipping",         color: "#38BDF8" },
  { icon: Truck,     name: "Land Freight",       brief: "GCC and cross-border coverage",      color: "#818cf8" },
  { icon: FileText,  name: "Customs Clearance",  brief: "Licensed broker expertise",          color: "#4F8EF7" },
  { icon: Container, name: "Project Cargo",      brief: "Heavy lift and complex logistics",   color: "#38BDF8" },
];

export default function ServicesIntro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="si-section" style={{ background: "#070b14", padding: "96px 60px", position: "relative", overflow: "hidden" }}>

      {/* Divider line */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg, transparent, rgba(79,142,247,0.3), transparent)" }} />

      {/* Glow */}
      <div style={{ position: "absolute", bottom: -80, right: "10%", width: 500, height: 400, background: "radial-gradient(ellipse, rgba(56,189,248,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative", zIndex: 1 }}>

        <motion.div
          className="si-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ maxWidth: 680, margin: "0 auto 64px", textAlign: "center" }}
        >
          <div style={{ marginBottom: 20 }}>
            <span className="label-badge">Our Services</span>
          </div>
          <h2 style={{ fontSize: 52, fontWeight: 800, color: "#fff", marginBottom: 20, lineHeight: 1.06, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.03em" }}>
            End-to-end <span className="gt">logistics solutions</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, marginBottom: 28 }}>
            Comprehensive logistics solutions tailored for importers, exporters, and manufacturers.
          </p>
          <a
            href="/Global-logistics/services"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#93c5fd", fontWeight: 600, fontSize: 14, textDecoration: "none", transition: "gap 0.25s" }}
            onMouseEnter={e => (e.currentTarget.style.gap = "14px")}
            onMouseLeave={e => (e.currentTarget.style.gap = "8px")}
          >
            Explore All Services <ArrowRight size={16} strokeWidth={2} />
          </a>
        </motion.div>

        <div className="si-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.name}
                href="/Global-logistics/services"
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  padding: "32px 24px",
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.07)",
                  textDecoration: "none",
                  transition: "all 0.25s",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(79,142,247,0.35)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(79,142,247,0.07)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 13,
                  background: "rgba(79,142,247,0.1)",
                  border: "1px solid rgba(79,142,247,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={22} strokeWidth={1.5} style={{ color: s.color }} />
                </div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", margin: 0, letterSpacing: "-0.02em" }}>{s.name}</h3>
                  <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.35)", margin: "7px 0 0", lineHeight: 1.5 }}>{s.brief}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      <style>{`
        @media(max-width:1200px){.si-grid{grid-template-columns:repeat(3,1fr)!important}}
        @media(max-width:1024px){.si-section{padding:72px 40px!important}}
        @media(max-width:768px){.si-section{padding:56px 24px!important}.si-grid{grid-template-columns:1fr 1fr!important;gap:12px!important}.si-header h2{font-size:34px!important}}
        @media(max-width:480px){.si-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}
