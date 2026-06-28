"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "Globe Logistic handled our complex GCC shipments with precision. Zero delays, excellent customs clearance.",
    author: "Ahmed Al Mansuri",
    company: "Gulf Trading Co.",
    rating: 5,
  },
  {
    quote: "Their real-time tracking and proactive communication saved us thousands. Highly reliable partner.",
    author: "Fatima Al Raisi",
    company: "Oman Textiles",
    rating: 5,
  },
  {
    quote: "Best freight forwarding team in Muscat. Fast quotes, transparent pricing, no hidden fees.",
    author: "Hassan Al Dhahri",
    company: "Import Logistics LLC",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} style={{ background: "#070b14", padding: "100px 40px", position: "relative", overflow: "hidden" }}>

      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg, transparent, rgba(79,142,247,0.25), transparent)" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 400, background: "radial-gradient(ellipse, rgba(79,142,247,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64, textAlign: "center" }}
        >
          <div style={{ marginBottom: 20 }}>
            <span className="label-badge">Testimonials</span>
          </div>
          <h2 style={{ fontSize: 44, fontWeight: 900, color: "#fff", marginBottom: 16, lineHeight: 1.06, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.03em" }}>
            Trusted by <span className="gt">leading businesses</span>
          </h2>
        </motion.div>

        <div className="testi-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                padding: "36px",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "border-color 0.25s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(79,142,247,0.28)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)"; }}
            >
              <div style={{ marginBottom: 20, display: "flex", gap: 3 }}>
                {Array(t.rating).fill(0).map((_, j) => (
                  <span key={j} style={{ color: "#fbbf24", fontSize: 16 }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: 28, fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div style={{ fontSize: 14.5, fontWeight: 700, color: "#fff" }}>{t.author}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>{t.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){.testi-grid{grid-template-columns:1fr 1fr!important}}
        @media(max-width:600px){.testi-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}
