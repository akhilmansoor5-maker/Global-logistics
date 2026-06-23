"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CARDS = [
  { icon: "✈", title: "Air Freight",        desc: "Fast, reliable air cargo worldwide. General, DG, pharma, and express shipments." },
  { icon: "🚢", title: "Sea Freight",        desc: "FCL and LCL ocean freight to every major port. Cost-effective global coverage." },
  { icon: "🚛", title: "Land Freight",       desc: "Domestic and GCC cross-border trucking. FTL, PTL, and last-mile delivery." },
  { icon: "📋", title: "Customs Clearance",  desc: "Licensed brokers handling all documentation, compliance, and port formalities." },
  { icon: "🏭", title: "Warehousing",        desc: "Secure, flexible storage in Oman. Inventory management and distribution services." },
  { icon: "⚓", title: "Project Cargo",      desc: "Heavy-lift, OOG, and complex project logistics planned and executed precisely." },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" ref={ref} style={{ background: "#F8FAFF", padding: "120px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64, maxWidth: 520 }}
        >
          <div style={{ color: "#0066FF", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>Services</div>
          <h2 style={{ fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 800, color: "#0A2540", lineHeight: 1.1 }}>
            Complete Logistics,<br /><span className="gt">One Partner</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{ background: "#fff", padding: "40px 36px", border: "1px solid #EBF0FF", transition: "border-color 0.2s, box-shadow 0.2s", cursor: "default" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#C7D8FF";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,102,255,0.07)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#EBF0FF";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 20 }}>{c.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0A2540", marginBottom: 12 }}>{c.title}</h3>
              <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.75 }}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:900px){#services>div>div:last-child{grid-template-columns:1fr 1fr!important}}@media(max-width:600px){#services>div>div:last-child{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
