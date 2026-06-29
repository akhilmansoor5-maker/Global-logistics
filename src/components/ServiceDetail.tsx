"use client";
import { motion } from "framer-motion";
import { Plane, Ship, Truck, FileText, Container } from "lucide-react";

const IMAGES: Record<string, string> = {
  "Air Freight":      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1000&q=80",
  "Sea Freight":      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1000&q=80",
  "Land Freight":     "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1000&q=80",
  "Customs Clearance":"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=80",
  "Project Cargo":    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&q=80",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ICONS: Record<string, any> = { Plane, Ship, Truck, FileText, Container };

interface ServiceProps {
  service: { icon: string; name: string; title: string; desc: string; benefits: string[]; };
  index: number;
}

export default function ServiceDetail({ service, index }: ServiceProps) {
  const isEven = index % 2 === 0;
  const Icon = ICONS[service.icon];

  return (
    <motion.div
      className="sd-row"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-100px" }}
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}
    >
      {/* Content */}
      <motion.div
        className="sd-content"
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ order: isEven ? 1 : 2 }}
      >
        <div style={{ marginBottom: 24 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(79,142,247,0.12)", border: "1px solid rgba(79,142,247,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon size={26} strokeWidth={1.5} style={{ color: "#93c5fd" }} />
          </div>
        </div>
        <span style={{ color: "#93c5fd", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: 14 }}>
          {service.name}
        </span>

        <h2 className="sd-h2" style={{ fontSize: 44, fontWeight: 800, color: "#fff", marginBottom: 24, lineHeight: 1.1, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.03em" }}>
          {service.title}
        </h2>

        <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.85, marginBottom: 36 }}>
          {service.desc}
        </p>

        <div className="sd-benefits" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {service.benefits.map((benefit) => (
            <div key={benefit} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <span style={{ color: "#4F8EF7", fontWeight: 700, fontSize: 14, lineHeight: 1.2, marginTop: 3, flexShrink: 0 }}>▸</span>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.65 }}>{benefit}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        className="sd-img"
        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        style={{
          order: isEven ? 2 : 1,
          borderRadius: 18,
          overflow: "hidden",
          aspectRatio: "4/3",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 32px 64px rgba(0,0,0,0.5)",
          position: "relative",
        }}
      >
        <img
          src={IMAGES[service.name] || IMAGES["Air Freight"]}
          alt={service.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.7) saturate(0.85)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(4,8,15,0.5) 100%)" }} />
      </motion.div>

      <style>{`
        @media(max-width:1024px){.sd-row{gap:48px!important}.sd-h2{font-size:36px!important}}
        @media(max-width:768px){
          .sd-row{grid-template-columns:1fr!important;gap:28px!important}
          .sd-content{order:1!important}
          .sd-img{order:2!important;aspect-ratio:16/9!important}
          .sd-h2{font-size:28px!important;margin-bottom:16px!important}
          .sd-benefits{grid-template-columns:1fr!important;gap:10px!important}
        }
      `}</style>
    </motion.div>
  );
}
