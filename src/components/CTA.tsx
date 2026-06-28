"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ background: "#fff", padding: "120px 40px", borderTop: "1px solid #E5E7EB" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <h2 style={{ fontSize: 56, fontWeight: 800, color: "#0A1929", marginBottom: 24, lineHeight: 1.15, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.01em" }}>
            Let's discuss your logistics needs
          </h2>
          <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7, marginBottom: 48 }}>
            Our team of logistics specialists will work with you to design a solution that fits your business. Connect with us to explore your options.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:sales@gls-oman.com"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#0A1929", color: "#fff", fontWeight: 600, fontSize: 14, padding: "14px 28px", borderRadius: 6, textDecoration: "none", transition: "all 0.25s", transform: "translateY(0)" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(10,25,41,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Discuss Your Logistics Needs <ArrowRight size={16} strokeWidth={1.5}/>
            </a>
            <a
              href="tel:+96896995001"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#0A1929", fontWeight: 600, fontSize: 14, padding: "14px 28px", borderRadius: 6, textDecoration: "none", border: "1px solid #E5E7EB", transition: "all 0.2s", transform: "translateY(0)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#0A1929"; e.currentTarget.style.background = "#F8F9FA"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Call +968 96995001
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
