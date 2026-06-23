import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "Services | Globe Logistic",
  description: "Complete logistics services: Air Freight, Sea Freight, Land Freight, Customs Clearance, Warehousing, Project Cargo.",
};

const SERVICES = [
  {
    icon: "✈️",
    name: "Air Freight",
    title: "Speed Without Compromise",
    desc: "From general cargo to dangerous goods and pharmaceutical shipments — our certified air freight network delivers with precision and speed.",
    benefits: [
      "General cargo handling",
      "Dangerous goods expertise",
      "Pharmaceutical cold chain",
      "Express options available",
      "Global airport network",
      "Real-time tracking",
    ],
  },
  {
    icon: "🚢",
    name: "Sea Freight",
    title: "Cost-Effective Global Reach",
    desc: "Ocean freight connecting Oman to every major port worldwide. FCL, LCL, and cross-trade — handled with expertise.",
    benefits: [
      "Full Container Load (FCL)",
      "Less-than-Container (LCL)",
      "Cross-trade shipments",
      "Project & break-bulk cargo",
      "Port-to-door delivery",
      "Customs clearance included",
    ],
  },
  {
    icon: "🚛",
    name: "Land Freight",
    title: "Across Borders, On Schedule",
    desc: "Reliable overland logistics across Oman and the GCC. Domestic, international, and cross-border clearances handled efficiently.",
    benefits: [
      "Domestic transportation",
      "International transport",
      "GCC cross-border clearance",
      "Full truck load (FTL)",
      "Partial truck load (PTL)",
      "Last-mile delivery",
    ],
  },
  {
    icon: "📋",
    name: "Customs Clearance",
    title: "Licensed & Compliant",
    desc: "Licensed brokers handling all documentation, compliance checks, and port formalities — so your cargo moves without delay.",
    benefits: [
      "Import customs clearance",
      "Export customs clearance",
      "Port & terminal clearance",
      "Duty drawback assistance",
      "Temporary import/export",
      "Full documentation support",
    ],
  },
  {
    icon: "📦",
    name: "Warehousing",
    title: "Smart Storage Solutions",
    desc: "Modern, secure warehousing in Oman with flexible capacity — from general goods to temperature-controlled pharma.",
    benefits: [
      "Short & long-term storage",
      "Temperature-controlled zones",
      "Advanced inventory management",
      "Pick & pack services",
      "Cross-docking available",
      "Distribution & fulfillment",
    ],
  },
  {
    icon: "⚓",
    name: "Project Cargo",
    title: "Complex Solutions Made Simple",
    desc: "Heavy-lift, oversized, and complex project logistics planned and executed with precision engineering.",
    benefits: [
      "Heavy-lift capabilities",
      "Oversized cargo handling",
      "Engineering consultation",
      "Route planning & permits",
      "Specialized equipment",
      "On-time delivery guarantee",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "#fff", padding: "80px 40px", borderBottom: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h1 style={{ fontSize: 56, fontWeight: 900, color: "#0A1929", marginBottom: 20, lineHeight: 1.12, fontFamily: "var(--font-inter-tight,sans-serif)" }}>
            Our Services
          </h1>
          <p style={{ fontSize: 18, color: "#64748B", maxWidth: 600, lineHeight: 1.8 }}>
            Complete logistics solutions tailored to your business. From air freight to warehousing, we handle every aspect of your supply chain.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ background: "#F9FAFB", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: 80 }}>
          {SERVICES.map((service, i) => (
            <ServiceDetail key={service.name} service={service} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
