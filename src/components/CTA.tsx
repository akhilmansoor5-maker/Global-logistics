"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="cta-section" style={{ background: "#070b14", padding: "96px 40px", position: "relative", overflow: "hidden" }}>

      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg, transparent, rgba(79,142,247,0.3), transparent)" }} />

      {/* Radial glow behind card */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 400, background: "radial-gradient(ellipse, rgba(79,142,247,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65 }}
        style={{
          maxWidth: 720,
          margin: "0 auto",
          textAlign: "center",
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          border: "1px solid rgba(255,255,255,0.09)",
          borderRadius: 24,
          padding: "64px 56px",
          position: "relative",
          zIndex: 1,
          boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
        }}
      >
        {/* Top accent line */}
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "40%", height: 1, background: "linear-gradient(90deg, transparent, rgba(79,142,247,0.6), transparent)", borderRadius: 1 }} />

        <div style={{ marginBottom: 24 }}>
          <span className="label-badge">Get Started</span>
        </div>

        <h2 className="cta-h2" style={{ fontSize: 48, fontWeight: 800, color: "#fff", marginBottom: 18, lineHeight: 1.08, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.03em" }}>
          Let&apos;s discuss your<br /><span className="gt">logistics needs</span>
        </h2>
        <p className="cta-sub" style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, marginBottom: 44 }}>
          Our team of logistics specialists will work with you to design a solution that fits your business.
        </p>

        <div className="cta-btns" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="mailto:sales@gls-oman.com"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "linear-gradient(135deg, #4F8EF7 0%, #3670e8 100%)",
              color: "#fff", fontWeight: 700, fontSize: 14,
              padding: "14px 28px", borderRadius: 10, textDecoration: "none",
              transition: "all 0.25s",
              boxShadow: "0 8px 32px rgba(79,142,247,0.35)",
              transform: "translateY(0)",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(79,142,247,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(79,142,247,0.35)"; }}
          >
            <Mail size={16} strokeWidth={1.5} />
            Email Us <ArrowRight size={15} strokeWidth={2} />
          </a>
          <a
            href="tel:+96896995001"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: 14,
              padding: "14px 28px", borderRadius: 10, textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(79,142,247,0.4)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(79,142,247,0.08)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
          >
            <Phone size={15} strokeWidth={1.5} />
            Call +968 96995001
          </a>
        </div>
      </motion.div>

      <style>{`
        @media(max-width:768px){
          .cta-section{padding:72px 20px!important}
          .cta-section>div[style]{padding:44px 28px!important}
          .cta-h2{font-size:30px!important}
          .cta-sub{font-size:14px!important}
          .cta-btns{flex-direction:column!important;align-items:stretch!important}
          .cta-btns a{justify-content:center!important}
        }
      `}</style>
    </section>
  );
}
