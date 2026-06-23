"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ background: "#fff", padding: "120px 40px", borderTop: "1px solid #EBF0FF" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <h2 style={{ fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 900, color: "#0A2540", marginBottom: 20, lineHeight: 1.08 }}>
            Ready to move your<br /><span className="gt">cargo worldwide?</span>
          </h2>
          <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.8, marginBottom: 44 }}>
            Get a customised quote in under 24 hours. Our team is ready to design the right solution for your shipment.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:info@globelogisticoman.com"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#0066FF", color: "#fff", fontWeight: 700, fontSize: 14, padding: "14px 28px", borderRadius: 10, textDecoration: "none", boxShadow: "0 4px 24px rgba(0,102,255,0.28)", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#0055DD"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#0066FF"; e.currentTarget.style.transform = "none"; }}
            >
              Request A Free Quote <ArrowRight size={15}/>
            </a>
            <a
              href="tel:+96896995001"
              style={{ display: "inline-flex", alignItems: "center", color: "#0A2540", fontWeight: 600, fontSize: 14, padding: "14px 28px", borderRadius: 10, textDecoration: "none", border: "1px solid #DDE6F5", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#0066FF"; e.currentTarget.style.color = "#0066FF"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#DDE6F5"; e.currentTarget.style.color = "#0A2540"; }}
            >
              +968 96995001
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
