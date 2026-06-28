"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Building2, Zap, ShieldCheck } from "lucide-react";

const CAPABILITIES = [
  {
    icon: Globe,
    title: "Global Network",
    description: "Connected to 50+ countries through partnerships with major freight forwarders, customs brokers, and logistics providers.",
  },
  {
    icon: Building2,
    title: "Licensed Operations",
    description: "Fully licensed freight forwarder and customs broker in Oman, compliant with IATA, IMDG, and all regulatory requirements.",
  },
  {
    icon: Zap,
    title: "Real-Time Visibility",
    description: "Advanced tracking systems provide complete visibility from origin to destination with proactive shipment updates.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Grade",
    description: "Handling everything from general cargo to dangerous goods, pharmaceuticals, and complex project cargo with precision.",
  },
];

export default function Credibility() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} style={{ background: "#fff", padding: "80px 60px", borderTop: "1px solid #E5E7EB" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56, maxWidth: 800, margin: "0 auto 56px", textAlign: "center" }}
        >
          <h2 style={{ fontSize: 56, fontWeight: 800, color: "#0A1929", marginBottom: 24, lineHeight: 1.1, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.01em" }}>
            Enterprise logistics, built for scale
          </h2>
          <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7 }}>
            We combine deep regional expertise with global logistics capabilities to move your cargo reliably, transparently, and profitably.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 40 }}>
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ padding: "36px 32px", background: "#F8F9FA", borderRadius: 8, border: "1px solid #E5E7EB" }}
              >
                <div style={{ marginBottom: 20 }}>
                  <Icon size={32} strokeWidth={1.5} style={{ color: "#0066FF" }} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0A1929", marginBottom: 12, letterSpacing: "-0.01em" }}>
                  {cap.title}
                </h3>
                <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.7, margin: 0 }}>
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`@media(max-width:768px){section>div>div:last-child{grid-template-columns:1fr!important;gap:40px!important}h2{font-size:36px!important}}`}</style>
    </section>
  );
}
