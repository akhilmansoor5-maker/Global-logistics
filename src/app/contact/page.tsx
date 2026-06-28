import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Contact | Globe Logistic",
  description: "Speak with our logistics specialists about your freight and supply chain needs.",
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="ct-hero" style={{ background: "#fff", paddingTop: 28, paddingBottom: 64, borderBottom: "1px solid #E5E7EB" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px" }}>
            <h1 className="ct-h1" style={{ fontSize: 56, fontWeight: 800, color: "#0A1929", marginBottom: 20, lineHeight: 1.15, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.01em" }}>
              Speak With Our Team
            </h1>
            <p className="ct-sub" style={{ fontSize: 18, color: "#64748B", lineHeight: 1.7, maxWidth: 600 }}>
              Our logistics specialists are ready to discuss your freight, customs, or supply chain needs.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="ct-section" style={{ background: "#F8F9FA", paddingTop: 72, paddingBottom: 72, borderBottom: "1px solid #E5E7EB" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px" }}>
            <div className="ct-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
              {[
                { icon: Phone, label: "Phone", value: "+968 96995001", href: "tel:+96896995001" },
                { icon: Mail, label: "Email", value: "sales@gls-oman.com", href: "mailto:sales@gls-oman.com" },
                { icon: MapPin, label: "Address", value: "Muscat, Oman", href: "#" },
                { icon: Clock, label: "Hours", value: "Sun–Thu 8AM–6PM", href: "#" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    style={{
                      padding: 32,
                      background: "#fff",
                      borderRadius: 8,
                      border: "1px solid #E5E7EB",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    <div style={{ marginBottom: 16 }}>
                      <Icon size={28} strokeWidth={1.5} style={{ color: "#0066FF" }} />
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: "#0A1929", wordBreak: "break-word" }}>
                      {item.value}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="ct-section" style={{ background: "#fff", paddingTop: 72, paddingBottom: 72 }}>
          <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 60px", textAlign: "center" }}>
            <h2 className="ct-h2" style={{ fontSize: 44, fontWeight: 800, color: "#0A1929", marginBottom: 20, lineHeight: 1.15, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.01em" }}>
              Ready to get started?
            </h2>
            <p className="ct-ctasub" style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7, marginBottom: 36 }}>
              Send us your shipment details or call us directly. Our team responds within hours.
            </p>

            <div className="ct-btns" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="mailto:sales@gls-oman.com?subject=Logistics%20Inquiry&body=Hello%20Globe%20Logistic%2C%0A%0AI%20would%20like%20to%20discuss%20my%20logistics%20needs."
                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#0A1929", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 6, textDecoration: "none" }}
              >
                Email Us <ArrowRight size={16} strokeWidth={1.5}/>
              </a>
              <a
                href="tel:+96896995001"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#0A1929", fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 6, textDecoration: "none", border: "1px solid #E5E7EB" }}
              >
                Call +968 96995001
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media(max-width:1024px){
          .ct-hero>div,.ct-section>div{padding:0 40px!important}
          .ct-grid{grid-template-columns:1fr 1fr!important}
        }
        @media(max-width:768px){
          .ct-hero{padding-top:20px!important;padding-bottom:40px!important}
          .ct-hero>div,.ct-section>div{padding:0 24px!important}
          .ct-section{padding-top:48px!important;padding-bottom:48px!important}
          .ct-h1{font-size:36px!important;margin-bottom:14px!important}
          .ct-sub{font-size:15px!important}
          .ct-h2{font-size:30px!important}
          .ct-ctasub{font-size:14px!important}
          .ct-grid{grid-template-columns:1fr 1fr!important;gap:16px!important}
          .ct-btns{flex-direction:column!important;align-items:stretch!important}
          .ct-btns a{justify-content:center!important}
        }
        @media(max-width:480px){
          .ct-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </>
  );
}
