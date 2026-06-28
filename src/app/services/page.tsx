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
    desc: "From general cargo to dangerous goods and pharmaceutical shipments — our certified air freight network delivers with precision and speed. We also handle Air-to-Air and Sea-to-Air transshipments, connecting ocean and air modes seamlessly.",
    benefits: [
      "General cargo handling",
      "Dangerous goods expertise",
      "Pharmaceutical cold chain",
      "Express options available",
      "Air to Air Transshipment",
      "Sea to Air Transshipment",
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
      <section className="sv-hero" style={{ background: "#04080f", padding: "28px 60px 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)", width: 800, height: 400, background: "radial-gradient(ellipse, rgba(79,142,247,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: 20 }}>
            <span className="label-badge">Our Services</span>
          </div>
          <h1 className="sv-h1" style={{ fontSize: 56, fontWeight: 800, color: "#fff", marginBottom: 20, lineHeight: 1.1, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.03em" }}>
            End-to-End <span className="gt">Logistics Solutions</span>
          </h1>
          <p className="sv-sub" style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", maxWidth: 640, lineHeight: 1.8 }}>
            Air, sea, and land freight. Customs clearance. Project cargo. We handle every aspect of your supply chain with precision and expertise.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="sv-list" style={{ background: "#04080f", padding: "72px 60px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: 72 }}>
          {SERVICES.map((service, i) => (
            <div key={service.name}>
              <ServiceDetail service={service} index={i} />
              {i < SERVICES.length - 1 && (
                <div style={{ marginTop: 72, borderBottom: "1px solid rgba(79,142,247,0.1)" }} />
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />

      <style>{`
        @media(max-width:1024px){
          .sv-hero{padding:20px 40px 48px!important}
          .sv-list{padding:56px 40px!important}
        }
        @media(max-width:768px){
          .sv-hero{padding:16px 24px 40px!important}
          .sv-list{padding:40px 24px!important}
          .sv-list>div{gap:48px!important}
          .sv-h1{font-size:36px!important;margin-bottom:14px!important}
          .sv-sub{font-size:15px!important}
        }
      `}</style>
    </main>
  );
}
