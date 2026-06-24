import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Globe Logistic",
  description: "Get in touch with Globe Logistic Service LLC. Contact us for quotes and inquiries.",
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ background: "#fff", paddingTop: 120, paddingBottom: 100 }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
            <h1 style={{ fontSize: 48, fontWeight: 900, color: "#0A1929", marginBottom: 16, lineHeight: 1.1, fontFamily: "var(--font-inter-tight,sans-serif)" }}>
              Contact Us
            </h1>
            <p style={{ fontSize: 18, color: "#64748B", marginBottom: 56, maxWidth: 600 }}>
              Have a question or ready to move your cargo? Get in touch with our team.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
              {/* Contact Info */}
              <div>
                <h2 style={{ fontSize: 24, fontWeight: 800, color: "#0A1929", marginBottom: 32 }}>
                  Get In Touch
                </h2>

                <div style={{ marginBottom: 40 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#0066FF", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
                    Phone
                  </div>
                  <a href="tel:+96896995001" style={{ fontSize: 18, color: "#0A1929", textDecoration: "none", fontWeight: 600 }}>
                    +968 96995001
                  </a>
                </div>

                <div style={{ marginBottom: 40 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#0066FF", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
                    Email
                  </div>
                  <a href="mailto:info@globelogisticoman.com" style={{ fontSize: 18, color: "#0A1929", textDecoration: "none", fontWeight: 600 }}>
                    info@globelogisticoman.com
                  </a>
                </div>

                <div style={{ marginBottom: 40 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#0066FF", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
                    Address
                  </div>
                  <div style={{ fontSize: 16, color: "#475569", lineHeight: 1.8 }}>
                    PC 116, PO BOX 560<br />
                    Ghala, Muscat<br />
                    Sultanate of Oman
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#0066FF", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
                    Hours
                  </div>
                  <div style={{ fontSize: 16, color: "#475569", lineHeight: 1.8 }}>
                    Sunday - Thursday: 8:00 AM - 6:00 PM<br />
                    Friday - Saturday: Closed<br />
                    24/7 Emergency Support Available
                  </div>
                </div>
              </div>

              {/* Quick Quote */}
              <div>
                <h2 style={{ fontSize: 24, fontWeight: 800, color: "#0A1929", marginBottom: 32 }}>
                  Request A Quote
                </h2>
                <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.8, marginBottom: 32 }}>
                  Send us your shipment details and we'll provide a customized quote within 24 hours.
                </p>
                <a
                  href="mailto:info@globelogisticoman.com?subject=Freight%20Quote%20Request&body=Hello%20Globe%20Logistic%2C%0A%0AI%20would%20like%20to%20request%20a%20quote%20for%20the%20following%20shipment%3A%0A%0AShipment%20Details%3A%0AOrigin%3A%0ADestination%3A%0AWeight%3A%0ACargo%20Type%3A%0APreferred%20Mode%3A%0ARequired%20Date%3A%0A%0AThank%20you%2C"
                  style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#0066FF", color: "#fff", fontWeight: 700, fontSize: 16, padding: "16px 32px", borderRadius: 8, textDecoration: "none", boxShadow: "0 4px 16px rgba(0,102,255,0.2)" }}
                >
                  Email Us Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
