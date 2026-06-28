"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STEPS = [
  { n: "01", title: "Request Quote",      desc: "Submit your shipment details through our form or contact our team directly." },
  { n: "02", title: "Planning & Docs",    desc: "We plan the optimal routing and prepare all required documentation." },
  { n: "03", title: "Cargo Pickup",       desc: "Secure pickup from your location via our trusted transport network." },
  { n: "04", title: "Transportation",     desc: "Cargo moves by Air, Sea, or Land with live tracking at every stage." },
  { n: "05", title: "Customs Clearance",  desc: "Licensed brokers handle all border formalities for smooth crossings." },
  { n: "06", title: "Delivery",           desc: "Safe, on-time delivery with full documentation and proof of receipt." },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" ref={ref} style={{ padding: "100px 0", background: "#04080f", position: "relative", overflow: "hidden" }}>

      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg, transparent, rgba(79,142,247,0.25), transparent)" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 900, height: 300, background: "radial-gradient(ellipse, rgba(79,142,247,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <div style={{ marginBottom: 20 }}>
            <span className="label-badge">How It Works</span>
          </div>
          <h2 style={{ fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 900, color: "#fff", marginBottom: 16, letterSpacing: "-0.03em", fontFamily: "var(--font-inter-tight,sans-serif)" }}>
            From Quote to Delivery<br /><span className="gt">In 6 Simple Steps</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15, lineHeight: 1.75, maxWidth: 440, margin: "0 auto" }}>
            A transparent, streamlined process designed to move your cargo with precision.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }} className="process-steps">
          {/* Track */}
          <div style={{ position: "absolute", top: 19, left: 0, right: 0, height: 1, background: "rgba(255,255,255,0.06)" }}>
            <motion.div
              style={{ height: "100%", background: "linear-gradient(90deg, #4F8EF7, #38BDF8)" }}
              initial={{ width: "0%" }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 24 }} className="steps-grid">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.12 }}
              >
                {/* Node */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.35, delay: 0.52 + i * 0.12, type: "spring", stiffness: 400 }}
                    style={{
                      width: 14, height: 14, borderRadius: "50%",
                      background: "linear-gradient(135deg, #4F8EF7, #38BDF8)",
                      border: "3px solid #04080f",
                      boxShadow: "0 0 0 2px rgba(79,142,247,0.3), 0 0 12px rgba(79,142,247,0.3)",
                      position: "relative", zIndex: 1,
                    }}
                  />
                </div>
                <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.1em", color: "#4F8EF7", marginBottom: 8 }}>{s.n}</div>
                <h4 style={{ fontSize: 14, fontWeight: 800, color: "#fff", marginBottom: 8, fontFamily: "var(--font-inter-tight,sans-serif)", lineHeight: 1.3, letterSpacing: "-0.01em" }}>{s.title}</h4>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12.5, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.1 }}
          style={{ textAlign: "center", marginTop: 60 }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "linear-gradient(135deg, #4F8EF7 0%, #3670e8 100%)",
              color: "#fff", fontWeight: 600, fontSize: 14,
              padding: "13px 28px", borderRadius: 12, textDecoration: "none",
              transition: "all 0.2s",
              boxShadow: "0 8px 28px rgba(79,142,247,0.3)",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 40px rgba(79,142,247,0.5)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 28px rgba(79,142,247,0.3)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
          >
            Start Your Shipment Today
          </a>
        </motion.div>
      </div>

      <style>{`
        @media(max-width:900px){.steps-grid{grid-template-columns:repeat(3,1fr)!important}.process-steps>div:first-child{display:none!important}}
        @media(max-width:600px){.steps-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:768px){#process{padding:72px 0!important}#process>div{padding:0 24px!important}}
      `}</style>
    </section>
  );
}
