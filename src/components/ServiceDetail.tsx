"use client";
import { motion } from "framer-motion";
import { Plane, Ship, Truck, FileText, Container } from "lucide-react";

const IMAGES: Record<string, string> = {
  "Air Freight": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1000&q=80",
  "Sea Freight": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1000&q=80",
  "Land Freight": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1000&q=80",
  "Customs Clearance": "https://images.unsplash.com/photo-1529399718985-7a8a4a028f30?w=1000&q=80",
  "Project Cargo": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&q=80",
};

const ICONS: Record<string, any> = {
  Plane, Ship, Truck, FileText, Container
};

interface ServiceProps {
  service: {
    icon: string;
    name: string;
    title: string;
    desc: string;
    benefits: string[];
  };
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
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 72,
        alignItems: "center",
      }}
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
          <Icon size={40} strokeWidth={1.5} style={{ color: "#0066FF" }} />
        </div>
        <span style={{ color: "#0066FF", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: 14 }}>
          {service.name}
        </span>

        <h2 className="sd-h2" style={{ fontSize: 44, fontWeight: 800, color: "#0A1929", marginBottom: 24, lineHeight: 1.15, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.01em" }}>
          {service.title}
        </h2>

        <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.8, marginBottom: 36 }}>
          {service.desc}
        </p>

        <div className="sd-benefits" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {service.benefits.map((benefit) => (
            <div key={benefit} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <span style={{ color: "#0066FF", fontWeight: 700, fontSize: 15, lineHeight: 1.2, marginTop: 2, flexShrink: 0 }}>▸</span>
              <span style={{ color: "#475569", fontSize: 14, lineHeight: 1.6 }}>{benefit}</span>
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
        style={{ order: isEven ? 2 : 1, borderRadius: 12, overflow: "hidden", aspectRatio: "4/3", boxShadow: "0 20px 48px rgba(10,25,41,0.12)" }}
      >
        <img
          src={IMAGES[service.name] || IMAGES["Air Freight"]}
          alt={service.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </motion.div>

      <style>{`
        @media(max-width:1024px){
          .sd-row{gap:48px!important}
          .sd-h2{font-size:36px!important}
        }
        @media(max-width:768px){
          .sd-row{grid-template-columns:1fr!important;gap:32px!important}
          .sd-content{order:1!important}
          .sd-img{order:2!important;aspect-ratio:16/9!important}
          .sd-h2{font-size:28px!important;margin-bottom:16px!important}
          .sd-benefits{grid-template-columns:1fr!important;gap:10px!important}
        }
      `}</style>
    </motion.div>
  );
}
