"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: "10+",  label: "Years of Experience" },
  { value: "50+",  label: "Countries Served" },
  { value: "1000+",label: "Shipments Completed" },
  { value: "24/7", label: "Customer Support" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} style={{ background: "#fff", padding: "120px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/3" }}
        >
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80"
            alt="Globe Logistic warehouse operations"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ color: "#0066FF", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>About Us</div>
          <h2 style={{ fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 800, color: "#0A2540", marginBottom: 24, lineHeight: 1.1 }}>
            Your Trusted Freight<br />Partner in Oman
          </h2>
          <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.85, marginBottom: 52 }}>
            Globe Logistic Service LLC has been at the forefront of international freight
            and logistics from Muscat, Oman. We provide comprehensive supply chain solutions
            that connect businesses across the Gulf, Middle East, and beyond — with precision,
            reliability, and deep customs expertise at every step.
          </p>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px 40px" }}>
            {STATS.map(({ value, label }) => (
              <div key={label} style={{ borderLeft: "2px solid #E0EBFF", paddingLeft: 20 }}>
                <div style={{ fontSize: 34, fontWeight: 900, color: "#0066FF", lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: 13, color: "#94A3B8", marginTop: 7, fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`@media(max-width:768px){#about>div{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
