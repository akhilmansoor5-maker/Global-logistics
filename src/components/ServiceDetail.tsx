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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-100px" }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "center",
      }}
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ order: isEven ? 1 : 2 }}
      >
        <div style={{ marginBottom: 28 }}>
          <Icon size={40} strokeWidth={1.5} style={{ color: "#0066FF" }} />
        </div>
        <span style={{ color: "#0066FF", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: 16 }}>
          {service.name}
        </span>

        <h2 style={{ fontSize: 48, fontWeight: 800, color: "#0A1929", marginBottom: 28, lineHeight: 1.15, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.01em" }}>
          {service.title}
        </h2>

        <p style={{ fontSize: 17, color: "#64748B", lineHeight: 1.8, marginBottom: 44 }}>
          {service.desc}
        </p>

        {/* Benefits Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {service.benefits.map((benefit) => (
            <div key={benefit} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{ color: "#0066FF", fontWeight: 700, fontSize: 16, lineHeight: 1.2, marginTop: 2, flexShrink: 0 }}>▸</span>
              <span style={{ color: "#475569", fontSize: 15, lineHeight: 1.6 }}>{benefit}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
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

      <style>{`@media(max-width:768px){div{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
    </motion.div>
  );
}
