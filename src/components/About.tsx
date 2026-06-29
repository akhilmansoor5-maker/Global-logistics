"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: "50+",  label: "Countries Served" },
  { value: "24/7", label: "Customer Support" },
  { value: "Air · Sea · Land", label: "Freight Modes" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} style={{ background: "#04080f", padding: "120px 40px", position: "relative", overflow: "hidden" }}>

      <div style={{ position: "absolute", top: "20%", right: -80, width: 500, height: 500, background: "radial-gradient(ellipse, rgba(79,142,247,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", position: "relative", zIndex: 1 }} className="about-grid">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/3", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 40px 80px rgba(0,0,0,0.5)", position: "relative" }}
        >
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80"
            alt="Globe Logistic warehouse operations"
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.75) saturate(0.85)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(4,8,15,0.6) 100%)" }} />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ marginBottom: 24 }}>
            <span className="label-badge">About Us</span>
          </div>
          <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 800, color: "#fff", marginBottom: 24, lineHeight: 1.06, letterSpacing: "-0.03em", fontFamily: "var(--font-inter-tight,sans-serif)" }}>
            Your Trusted Freight<br /><span className="gt">Partner in Oman</span>
          </h2>
          <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.85, marginBottom: 52 }}>
            Globe Logistic Service LLC has been at the forefront of international freight
            and logistics from Muscat, Oman. We provide comprehensive supply chain solutions
            that connect businesses across the Gulf, Middle East, and beyond — with precision,
            reliability, and deep customs expertise at every step.
          </p>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px 40px" }}>
            {STATS.map(({ value, label }) => (
              <div key={label} style={{
                borderLeft: "2px solid rgba(79,142,247,0.3)",
                paddingLeft: 20,
              }}>
                <div style={{ fontSize: 34, fontWeight: 900, color: "#93c5fd", lineHeight: 1, letterSpacing: "-0.03em", fontFamily: "var(--font-inter-tight,sans-serif)" }}>{value}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", marginTop: 7, fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:40px!important}#about{padding:72px 24px!important}}`}</style>
    </section>
  );
}
