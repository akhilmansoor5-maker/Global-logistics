"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section style={{ background: "#fff", paddingTop: 80, paddingBottom: 100, borderBottom: "1px solid #f0f0f0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

        {/* Content — LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#0066FF", display: "inline-block" }}/>
            <span style={{ color: "#0066FF", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Muscat, Oman
            </span>
          </div>

          {/* Headline */}
          <h1 style={{ fontSize: 56, fontWeight: 900, color: "#0A1929", marginBottom: 24, lineHeight: 1.12, fontFamily: "var(--font-inter-tight,sans-serif)" }}>
            Global Freight,<br />Local Expertise
          </h1>

          {/* Subtitle */}
          <p style={{ fontSize: 18, color: "#475569", lineHeight: 1.8, marginBottom: 40, maxWidth: 520 }}>
            End-to-end logistics across Air, Sea, and Land. Licensed customs brokers. Trusted by 1000+ businesses across the GCC and beyond.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="mailto:info@globelogisticoman.com"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#0066FF", color: "#fff", fontWeight: 700, fontSize: 15, padding: "16px 32px", borderRadius: 8, textDecoration: "none", boxShadow: "0 4px 16px rgba(0,102,255,0.2)", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#0055DD"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,102,255,0.35)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#0066FF"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,102,255,0.2)"; }}
            >
              Get A Free Quote <ArrowRight size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Image — RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}
        >
          <img
            src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1000&q=80"
            alt="Global logistics operations"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </motion.div>
      </div>

      <style>{`@media(max-width:768px){section>div{grid-template-columns:1fr!important;gap:48px!important}h1{font-size:40px!important}}`}</style>
    </section>
  );
}
