"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section style={{ background: "#fff", paddingTop: 120, paddingBottom: 120, borderBottom: "1px solid #E5E7EB" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }}>

        {/* Content — LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0A1929", display: "inline-block" }}/>
            <span style={{ color: "#64748B", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Headquartered in Muscat, Oman
            </span>
          </div>

          {/* Headline - Much larger and dominant */}
          <h1 style={{ fontSize: 72, fontWeight: 900, color: "#0A1929", marginBottom: 32, lineHeight: 1.15, letterSpacing: "-0.02em", fontFamily: "var(--font-inter-tight,sans-serif)" }}>
            Move global cargo with confidence
          </h1>

          {/* Subtitle */}
          <p style={{ fontSize: 17, color: "#64748B", lineHeight: 1.7, marginBottom: 48, maxWidth: 540 }}>
            Air, sea, and land freight solutions designed for importers, exporters, and manufacturers across the GCC and beyond. Licensed customs brokers. Real-time visibility.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="mailto:sales@gls-oman.com"
              style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "#0A1929", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: 6, textDecoration: "none", transition: "all 0.25s ease", transform: "translateY(0)" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(10,25,41,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(10,25,41,0.08)"; }}
            >
              Let's Move Your Cargo <ArrowRight size={18} strokeWidth={1.5} />
            </a>
          </motion.div>
        </motion.div>

        {/* Image — RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ borderRadius: 8, overflow: "hidden", aspectRatio: "4/3", boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
        >
          <img
            src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1000&q=80"
            alt="Global logistics operations"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </motion.div>
      </div>

      <style>{`@media(max-width:768px){section>div{grid-template-columns:1fr!important;gap:64px!important;padding:0 40px!important}h1{font-size:52px!important;line-height:1.2!important}}`}</style>
    </section>
  );
}
