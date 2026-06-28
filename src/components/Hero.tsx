"use client";
import { motion } from "framer-motion";
import { ArrowRight, Plane, Ship, Truck } from "lucide-react";

const STATS = [
  { value: "50+", label: "Countries" },
  { value: "1K+", label: "Clients" },
  { value: "10+", label: "Years" },
  { value: "24/7", label: "Support" },
];

export default function Hero() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "#04080f", paddingTop: 32, paddingBottom: 100 }}>

      {/* Ambient glows */}
      <div style={{ position: "absolute", top: -120, left: "50%", transform: "translateX(-50%)", width: 900, height: 500, background: "radial-gradient(ellipse at center, rgba(79,142,247,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="glow-orb" style={{ top: "10%", right: "8%", width: 360, height: 360, background: "rgba(56,189,248,0.07)" }} />
      <div className="glow-orb" style={{ bottom: "5%", left: "5%", width: 280, height: 280, background: "rgba(79,142,247,0.06)" }} />

      {/* Grid pattern overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
      }} />

      <div className="hero-grid" style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", position: "relative", zIndex: 1 }}>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <div style={{ marginBottom: 28 }}>
            <span className="label-badge">
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4F8EF7", display: "inline-block" }} />
              Global Logistics · Local Expertise
            </span>
          </div>

          <h1 className="hero-h1" style={{ fontSize: 72, fontWeight: 900, color: "#fff", marginBottom: 24, lineHeight: 1.04, letterSpacing: "-0.03em", fontFamily: "var(--font-inter-tight,sans-serif)" }}>
            Move global cargo<br />
            with{" "}
            <span className="gt">confidence</span>
          </h1>

          <p className="hero-sub" style={{ fontSize: 16.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: 44, maxWidth: 500, fontWeight: 400 }}>
            Air, sea, and land freight. Customs clearance. Real-time tracking. Licensed for every market. Trusted by 1,000+ businesses.
          </p>

          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 56 }}
          >
            <a
              href="mailto:sales@gls-oman.com"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "linear-gradient(135deg, #4F8EF7 0%, #3670e8 100%)",
                color: "#fff", fontWeight: 700, fontSize: 14.5,
                padding: "14px 30px", borderRadius: 10, textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 32px rgba(79,142,247,0.35)",
                transform: "translateY(0)",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(79,142,247,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(79,142,247,0.35)"; }}
            >
              Let&apos;s Move Your Cargo <ArrowRight size={17} strokeWidth={2} />
            </a>
            <a
              href="tel:+96896995001"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                color: "rgba(255,255,255,0.75)", fontWeight: 600, fontSize: 14.5,
                padding: "14px 30px", borderRadius: 10, textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
                transition: "all 0.25s ease",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(79,142,247,0.5)"; e.currentTarget.style.background = "rgba(79,142,247,0.08)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}
            >
              +968 96995001
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="hero-stats"
            style={{ display: "flex", gap: 0, borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            {STATS.map((s, i) => (
              <div key={s.label} style={{
                padding: "20px 28px 0",
                borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", fontFamily: "var(--font-inter-tight,sans-serif)" }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 2, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right panel */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative" }}
        >
          {/* Main image card */}
          <div style={{
            borderRadius: 20,
            overflow: "hidden",
            aspectRatio: "4/3",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04) inset",
            position: "relative",
          }}>
            <img
              src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1000&q=80"
              alt="Global logistics operations"
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.75) saturate(0.9)" }}
            />
            {/* Gradient overlay */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(4,8,15,0.7) 100%)" }} />
          </div>

          {/* Floating mode cards */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              bottom: 32,
              left: -32,
              background: "rgba(10,17,30,0.9)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 14,
              padding: "16px 20px",
              display: "flex",
              gap: 16,
              alignItems: "center",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            }}
          >
            {[Plane, Ship, Truck].map((Icon, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(79,142,247,0.15)", border: "1px solid rgba(79,142,247,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={16} color="#93c5fd" strokeWidth={1.5} />
                </div>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontWeight: 600, letterSpacing: "0.05em" }}>
                  {["AIR", "SEA", "LAND"][i]}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Live badge */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            style={{
              position: "absolute",
              top: 24,
              right: -20,
              background: "rgba(10,17,30,0.9)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              padding: "12px 18px",
              boxShadow: "0 16px 32px rgba(0,0,0,0.4)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span className="dot-pulse" style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>Live Tracking</span>
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 3 }}>Real-time visibility</div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media(max-width:1024px){
          .hero-grid{grid-template-columns:1fr!important;gap:48px!important;padding:0 40px!important}
          .hero-right{display:none!important}
        }
        @media(max-width:768px){
          .hero-grid{padding:0 24px!important}
          .hero-h1{font-size:40px!important;line-height:1.06!important;margin-bottom:18px!important}
          .hero-sub{font-size:15px!important;margin-bottom:32px!important}
          .hero-btns{flex-direction:column!important;gap:10px!important}
          .hero-btns a{justify-content:center!important;padding:13px 24px!important}
          .hero-stats{gap:0!important}
        }
        @media(max-width:480px){
          .hero-h1{font-size:34px!important}
        }
      `}</style>
    </section>
  );
}
