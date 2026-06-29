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
        <section className="ab-hero" style={{ background: "#04080f", paddingTop: 28, paddingBottom: 64, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)", width: 800, height: 400, background: "radial-gradient(ellipse, rgba(79,142,247,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px", position: "relative", zIndex: 1 }}>
            <h1 className="ab-h1" style={{ fontSize: 56, fontWeight: 800, color: "#fff", marginBottom: 20, lineHeight: 1.1, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.03em" }}>
              Enterprise Logistics.<br/><span className="gt">Regional Excellence.</span>
            </h1>
            <p className="ab-sub" style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, maxWidth: 600 }}>
              We move cargo for importers, exporters, and manufacturers across the GCC and beyond with reliability, transparency, and precision.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="ab-section" style={{ background: "#070b14", paddingTop: 72, paddingBottom: 72 }}>
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg, transparent, rgba(79,142,247,0.25), transparent)" }} />
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px" }}>
            <div className="ab-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
              <div>
                <h2 className="ab-h2" style={{ fontSize: 40, fontWeight: 800, color: "#fff", marginBottom: 24, lineHeight: 1.1, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.03em" }}>
                  Our Story
                </h2>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 15, lineHeight: 1.85 }}>
                  <p style={{ marginBottom: 20 }}>
                    Globe Logistic Service LLC was founded with one mission: to bring world-class logistics infrastructure to the Sultanate of Oman. Today, we&apos;re trusted by 1,000+ businesses across the GCC.
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
                <h2 className="ab-h2" style={{ fontSize: 40, fontWeight: 800, color: "#fff", marginBottom: 24, lineHeight: 1.1, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.03em" }}>
                  Our Mission
                </h2>
                <div style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", padding: 36, borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)" }}>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, lineHeight: 1.85, margin: 0 }}>
                    Connect global trade without limits by providing seamless, reliable logistics solutions that empower businesses to reach new markets with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="ab-section" style={{ background: "#04080f", paddingTop: 72, paddingBottom: 72 }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px" }}>
            <h2 className="ab-h2 ab-center" style={{ fontSize: 40, fontWeight: 800, color: "#fff", marginBottom: 48, textAlign: "center", lineHeight: 1.1, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.03em" }}>
              Our <span className="gt">Capabilities</span>
            </h2>

            <div className="ab-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
              {[
                { number: "50+", label: "Countries Connected" },
                { number: "24/7", label: "Operations Support" },
                { number: "Air · Sea · Land", label: "Freight Modes" },
                { number: "Licensed", label: "Customs Brokers" },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: "center", padding: "36px 24px", background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div style={{ fontSize: stat.number.length > 5 ? 22 : 44, fontWeight: 800, color: "#93c5fd", marginBottom: 10, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="ab-section" style={{ background: "#070b14", paddingTop: 72, paddingBottom: 72 }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px" }}>
            <h2 className="ab-h2" style={{ fontSize: 40, fontWeight: 800, color: "#fff", marginBottom: 48, lineHeight: 1.1, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.03em" }}>
              Why Businesses <span className="gt">Trust Us</span>
            </h2>

            <div className="ab-trust" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
              {[
                { icon: ShieldCheck, title: "Licensed & Compliant", desc: "Oman-certified freight forwarder and customs broker. IATA, IMDG, and pharmaceutical certified." },
                { icon: Globe, title: "Global Network", desc: "Connected across 50+ countries with trusted partners for seamless cross-border operations." },
                { icon: Users, title: "Expert Team", desc: "Certified professionals specializing in customs, dangerous goods, pharma, and complex cargo." },
                { icon: Clock3, title: "24/7 Operations", desc: "Real-time tracking, proactive updates, and round-the-clock customer support." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} style={{ padding: 36, background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div style={{ marginBottom: 20, width: 48, height: 48, borderRadius: 12, background: "rgba(79,142,247,0.1)", border: "1px solid rgba(79,142,247,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={22} strokeWidth={1.5} style={{ color: "#93c5fd" }} />
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 10, letterSpacing: "-0.02em" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.4)", lineHeight: 1.75, margin: 0 }}>
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

      <style>{`
        @media(max-width:1024px){
          .ab-hero,.ab-section{padding-left:0!important;padding-right:0!important}
          .ab-hero>div,.ab-section>div{padding:0 40px!important}
        }
        @media(max-width:768px){
          .ab-hero{padding-top:20px!important;padding-bottom:40px!important}
          .ab-hero>div,.ab-section>div{padding:0 24px!important}
          .ab-section{padding-top:48px!important;padding-bottom:48px!important}
          .ab-h1{font-size:36px!important;margin-bottom:16px!important}
          .ab-sub{font-size:15px!important}
          .ab-h2{font-size:28px!important;margin-bottom:24px!important}
          .ab-2col{grid-template-columns:1fr!important;gap:36px!important}
          .ab-stats{grid-template-columns:1fr 1fr!important;gap:16px!important}
          .ab-trust{grid-template-columns:1fr!important;gap:16px!important}
        }
        @media(max-width:480px){
          .ab-stats{grid-template-columns:1fr 1fr!important}
        }
      `}</style>
    </>
  );
}
