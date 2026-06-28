import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Users, Globe, Clock3 } from "lucide-react";

export const metadata = {
  title: "About | Globe Logistic",
  description: "Enterprise logistics provider serving importers, exporters, and manufacturers across the GCC.",
};

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section style={{ background: "#fff", paddingTop: 28, paddingBottom: 64, borderBottom: "1px solid #E5E7EB" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px" }}>
              <h1 style={{ fontSize: 56, fontWeight: 800, color: "#0A1929", marginBottom: 24, lineHeight: 1.15, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.01em" }}>
                Enterprise Logistics. Regional Excellence.
              </h1>
              <p style={{ fontSize: 18, color: "#64748B", lineHeight: 1.7, maxWidth: 600 }}>
                We move cargo for importers, exporters, and manufacturers across the GCC and beyond with reliability, transparency, and precision.
              </p>
          </div>
        </section>

        {/* Story Section */}
        <section style={{ background: "#F8F9FA", paddingTop: 72, paddingBottom: 72, borderBottom: "1px solid #E5E7EB" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
              <div>
                <h2 style={{ fontSize: 40, fontWeight: 800, color: "#0A1929", marginBottom: 28, lineHeight: 1.2, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.01em" }}>
                  Our Story
                </h2>
                <div style={{ color: "#64748B", fontSize: 15, lineHeight: 1.8 }}>
                  <p style={{ marginBottom: 20 }}>
                    Globe Logistic Service LLC was founded with one mission: to bring world-class logistics infrastructure to the Sultanate of Oman. Today, we're trusted by 1,000+ businesses across the GCC.
                  </p>
                  <p style={{ marginBottom: 20 }}>
                    Our team of licensed freight forwarders and customs brokers specializes in air, sea, and land freight—including dangerous goods, pharmaceuticals, and complex project cargo.
                  </p>
                  <p>
                    We combine deep regional expertise with global partnerships to deliver reliable, transparent, and cost-effective logistics solutions.
                  </p>
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: 40, fontWeight: 800, color: "#0A1929", marginBottom: 28, lineHeight: 1.2, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.01em" }}>
                  Our Mission
                </h2>
                <div style={{ background: "#fff", padding: 40, borderRadius: 8, border: "1px solid #E5E7EB" }}>
                  <p style={{ color: "#64748B", fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                    Connect global trade without limits by providing seamless, reliable logistics solutions that empower businesses to reach new markets with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{ background: "#fff", paddingTop: 72, paddingBottom: 72, borderBottom: "1px solid #E5E7EB" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px" }}>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: "#0A1929", marginBottom: 48, textAlign: "center", lineHeight: 1.2, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.01em" }}>
              By The Numbers
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
              {[
                { number: "10+", label: "Years Industry Experience" },
                { number: "50+", label: "Countries Connected" },
                { number: "1000+", label: "Enterprise Clients" },
                { number: "24/7", label: "Operations Support" },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 48, fontWeight: 800, color: "#0A1929", marginBottom: 12, fontFamily: "var(--font-inter-tight,sans-serif)" }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: 14, color: "#64748B", fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section style={{ background: "#F8F9FA", paddingTop: 72, paddingBottom: 72 }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px" }}>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: "#0A1929", marginBottom: 48, lineHeight: 1.2, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.01em" }}>
              Why Businesses Trust Us
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 48 }}>
              {[
                { icon: ShieldCheck, title: "Licensed & Compliant", desc: "Oman-certified freight forwarder and customs broker. IATA, IMDG, and pharmaceutical certified." },
                { icon: Globe, title: "Global Network", desc: "Connected across 50+ countries with trusted partners for seamless cross-border operations." },
                { icon: Users, title: "Expert Team", desc: "Certified professionals specializing in customs, dangerous goods, pharma, and complex cargo." },
                { icon: Clock3, title: "24/7 Operations", desc: "Real-time tracking, proactive updates, and round-the-clock customer support." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} style={{ padding: 32, background: "#fff", borderRadius: 8, border: "1px solid #E5E7EB" }}>
                    <div style={{ marginBottom: 20 }}>
                      <Icon size={28} strokeWidth={1.5} style={{ color: "#0066FF" }} />
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0A1929", marginBottom: 12, letterSpacing: "-0.01em" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.7, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
