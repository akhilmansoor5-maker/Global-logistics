"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ArrowRight } from "lucide-react";

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
        <section style={{ background: "#fff", paddingTop: 80, paddingBottom: 80, borderBottom: "1px solid #E5E7EB" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 style={{ fontSize: 56, fontWeight: 800, color: "#0A1929", marginBottom: 24, lineHeight: 1.15, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.01em" }}>
                Speak With Our Team
              </h1>
              <p style={{ fontSize: 18, color: "#64748B", lineHeight: 1.7, maxWidth: 600 }}>
                Our logistics specialists are ready to discuss your freight, customs, or supply chain needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section style={{ background: "#F8F9FA", paddingTop: 100, paddingBottom: 100, borderBottom: "1px solid #E5E7EB" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+968 96995001",
                  href: "tel:+96896995001",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "sales@gls-oman.com",
                  href: "mailto:sales@gls-oman.com",
                },
                {
                  icon: MapPin,
                  label: "Address",
                  value: "Muscat, Oman",
                  href: "#",
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "Sun-Thu 8AM-6PM",
                  href: "#",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={i}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      padding: 32,
                      background: "#fff",
                      borderRadius: 8,
                      border: "1px solid #E5E7EB",
                      textDecoration: "none",
                      transition: "all 0.25s",
                      transform: "translateY(0)",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "#0A1929";
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E5E7EB";
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                    }}
                  >
                    <div style={{ marginBottom: 16 }}>
                      <Icon size={28} strokeWidth={1.5} style={{ color: "#0A1929" }} />
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: "#0A1929" }}>
                      {item.value}
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ background: "#fff", paddingTop: 100, paddingBottom: 100 }}>
          <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: 44, fontWeight: 800, color: "#0A1929", marginBottom: 24, lineHeight: 1.15, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.01em" }}>
                Ready to get started?
              </h2>
              <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7, marginBottom: 40 }}>
                Send us your shipment details or call us directly. Our team responds within hours.
              </p>

              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href="mailto:sales@gls-oman.com?subject=Logistics%20Inquiry&body=Hello%20Globe%20Logistic%2C%0A%0AI%20would%20like%20to%20discuss%20my%20logistics%20needs.%0A%0AShipment%20Details%3A%0AOrigin%3A%0ADestination%3A%0AWeight%3A%0ACargo%20Type%3A%0APreferred%20Mode%3A%0ARequired%20Date%3A%0A%0AThank%20you%2C"
                  style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#0A1929", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 6, textDecoration: "none", transition: "all 0.25s", transform: "translateY(0)" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(10,25,41,0.15)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  Email Us <ArrowRight size={16} strokeWidth={1.5}/>
                </a>
                <a
                  href="tel:+96896995001"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#0A1929", fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 6, textDecoration: "none", border: "1px solid #E5E7EB", transition: "all 0.2s", transform: "translateY(0)" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#0A1929"; e.currentTarget.style.background = "#F8F9FA"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  Call +968 96995001
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
