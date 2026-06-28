"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section style={{
      background: "linear-gradient(135deg, #fff 0%, #f0f7ff 50%, #fff 100%)",
      paddingTop: 28,
      paddingBottom: 80,
      borderBottom: "1px solid #E5E7EB",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Subtle accent circle */}
      <div style={{
        position: "absolute",
        top: -100,
        right: -100,
        width: 300,
        height: 300,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,102,255,0.08) 0%, rgba(0,102,255,0) 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 100, alignItems: "center", position: "relative", zIndex: 1 }}>

        {/* Content — LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 24, paddingBottom: 12, borderBottom: "2px solid rgba(0,102,255,0.3)" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#0066FF" }}/>
            <span style={{ color: "#0066FF", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Global Logistics. Local Expertise.
            </span>
          </div>

          {/* Headline - Refined and powerful */}
          <h1 style={{ fontSize: 72, fontWeight: 900, color: "#0A1929", marginBottom: 28, lineHeight: 1.08, letterSpacing: "-0.02em", fontFamily: "var(--font-inter-tight,sans-serif)" }}>
            Move global cargo with <span style={{ color: "#0066FF" }}>confidence</span>
          </h1>

          {/* Subtitle */}
          <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7, marginBottom: 48, maxWidth: 520 }}>
            Air, sea, and land freight. Customs clearance. Real-time tracking. Licensed for every market. Trusted by 1000+ businesses.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
          >
            <a
              href="mailto:sales@gls-oman.com"
              style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "linear-gradient(135deg, #0066FF 0%, #0052CC 100%)", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: 6, textDecoration: "none", transition: "all 0.3s ease", boxShadow: "0 8px 24px rgba(0,102,255,0.3)", transform: "translateY(0)" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,102,255,0.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,102,255,0.3)"; }}
            >
              Let's Move Your Cargo <ArrowRight size={18} strokeWidth={1.5} />
            </a>
            <a
              href="tel:+96896995001"
              style={{ display: "inline-flex", alignItems: "center", gap: 12, color: "#0066FF", fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: 6, textDecoration: "none", border: "2px solid #0066FF", transition: "all 0.3s ease", background: "transparent" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,102,255,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
            >
              +968 96995001
            </a>
          </motion.div>
        </motion.div>

        {/* Image — RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ borderRadius: 12, overflow: "hidden", aspectRatio: "4/3", boxShadow: "0 32px 64px rgba(0,102,255,0.15)", border: "1px solid rgba(0,102,255,0.1)" }}
        >
          <img
            src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1000&q=80"
            alt="Global logistics operations"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </motion.div>
      </div>

      <style>{`@media(max-width:768px){section>div{grid-template-columns:1fr!important;gap:48px!important;padding:0 40px!important}h1{font-size:48px!important;line-height:1.1!important}}`}</style>
    </section>
  );
}
