import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "Services | Globe Logistic",
  description: "Complete logistics services: Air Freight, Sea Freight, Land Freight, Customs Clearance, Project Cargo.",
};

const SERVICES = [
  {
    icon: "Plane",
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
    icon: "Ship",
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
    icon: "Truck",
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
    icon: "FileText",
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
    icon: "Container",
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
      <section style={{ background: "linear-gradient(135deg, #fff 0%, #f0f7ff 100%)", padding: "100px 40px 80px", borderBottom: "1px solid #E5E7EB" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 20 }}>
            <span style={{ color: "#0066FF", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Our Services</span>
          </div>
          <h1 style={{ fontSize: 64, fontWeight: 800, color: "#0A1929", marginBottom: 24, lineHeight: 1.15, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.01em" }}>
            End-to-End Logistics Solutions
          </h1>
          <p style={{ fontSize: 18, color: "#64748B", maxWidth: 700, lineHeight: 1.8 }}>
            Air, sea, and land freight. Customs clearance. Project cargo. We handle every aspect of your supply chain with precision and expertise.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ background: "linear-gradient(180deg, #fff 0%, #f8fbff 50%, #fff 100%)", padding: "120px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: 100 }}>
          {SERVICES.map((service, i) => (
            <div key={service.name}>
              <ServiceDetail service={service} index={i} />
              {i < SERVICES.length - 1 && (
                <div style={{ marginTop: 100, paddingBottom: 0, borderBottom: "1px solid rgba(0,102,255,0.1)" }} />
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
