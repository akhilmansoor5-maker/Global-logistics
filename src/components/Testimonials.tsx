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
    <section ref={ref} style={{ background: "#F9FAFB", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64, textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}
        >
          <h2 style={{ fontSize: 44, fontWeight: 900, color: "#0A1929", marginBottom: 16, lineHeight: 1.12, fontFamily: "var(--font-inter-tight,sans-serif)" }}>
            Trusted by Leading Businesses
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ padding: 40, background: "#fff", borderRadius: 12, border: "1px solid #E5E7EB" }}
            >
              {/* Stars */}
              <div style={{ marginBottom: 20, display: "flex", gap: 4 }}>
                {Array(t.rating)
                  .fill(0)
                  .map((_, j) => (
                    <span key={j} style={{ fontSize: 18 }}>⭐</span>
                  ))}
              </div>

              {/* Quote */}
              <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.8, marginBottom: 24, fontStyle: "italic" }}>
                "{t.quote}"
              </p>

              {/* Author */}
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#0A1929" }}>{t.author}</div>
                <div style={{ fontSize: 13, color: "#94A3B8", marginTop: 4 }}>{t.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:900px){section>div>div:last-child{grid-template-columns:1fr 1fr!important}}@media(max-width:600px){section>div>div:last-child{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
