import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Globe Logistic",
  description: "Learn about Globe Logistic Service LLC and our mission in logistics.",
};

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ background: "#fff", paddingTop: 120, paddingBottom: 100 }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
            <h1 style={{ fontSize: 48, fontWeight: 900, color: "#0A1929", marginBottom: 32, lineHeight: 1.1, fontFamily: "var(--font-inter-tight,sans-serif)" }}>
              About Globe Logistic
            </h1>
            <div style={{ maxWidth: 800, color: "#475569", fontSize: 16, lineHeight: 1.8 }}>
              <p style={{ marginBottom: 24 }}>
                Globe Logistic Service LLC is a premier logistics provider headquartered in Muscat, Oman. Since our founding, we have been committed to delivering exceptional freight and supply chain solutions across air, sea, and land transportation.
              </p>
              <p style={{ marginBottom: 24 }}>
                With over 10 years of industry experience, we serve more than 1,000 businesses across the GCC and beyond. Our team of certified professionals specializes in customs clearance, dangerous goods handling, pharmaceutical logistics, and complex project cargo management.
              </p>
              <p style={{ marginBottom: 24 }}>
                We believe in combining deep regional expertise with a powerful global network. Every shipment is handled with precision, every deadline is met with reliability, and every client receives the white-glove service they deserve.
              </p>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0A1929", marginTop: 48, marginBottom: 20 }}>
                Our Mission
              </h2>
              <p style={{ marginBottom: 24 }}>
                To connect global trade without limits—providing seamless, reliable logistics solutions that empower businesses to reach new markets with confidence.
              </p>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0A1929", marginTop: 48, marginBottom: 20 }}>
                Why Choose Us
              </h2>
              <ul style={{ marginBottom: 24, paddingLeft: 24 }}>
                <li style={{ marginBottom: 12 }}>✓ Licensed freight forwarder and customs broker in Oman</li>
                <li style={{ marginBottom: 12 }}>✓ IATA certified for air cargo operations</li>
                <li style={{ marginBottom: 12 }}>✓ 24/7 customer support and real-time tracking</li>
                <li style={{ marginBottom: 12 }}>✓ Expertise in dangerous goods, pharmaceuticals, and project cargo</li>
                <li style={{ marginBottom: 12 }}>✓ Global network spanning 50+ countries</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
