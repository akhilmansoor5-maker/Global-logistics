"use client";

const SocialSVG = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" width="14" height="14" style={{ fill: "currentColor" }}><path d={d}/></svg>
);

export default function Footer() {
  return (
    <footer style={{ background: "#0A1929", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px 40px" }}>

        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "56px 48px", paddingBottom: 56, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 32, height: 32, borderRadius: 6, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 18 18" fill="none" width="16" height="16">
                  <circle cx="9" cy="9" r="7.5" stroke="#0A1929" strokeWidth="1.5"/>
                  <ellipse cx="9" cy="9" rx="3" ry="7.5" stroke="#0A1929" strokeWidth="1" opacity="0.6"/>
                  <line x1="2" y1="9" x2="16" y2="9" stroke="#0A1929" strokeWidth="1" opacity="0.5"/>
                </svg>
              </div>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, lineHeight: 1.2, fontFamily: "var(--font-inter-tight,sans-serif)" }}>Globe Logistic</div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, lineHeight: 1.8, marginBottom: 20, maxWidth: 240 }}>
              Enterprise logistics solutions for importers, exporters, and manufacturers.
            </p>
            <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 13, lineHeight: 1.8, marginBottom: 0 }}>
              PC 116, PO BOX 560<br/>Ghala, Muscat<br/>Sultanate of Oman
            </p>
          </div>

          {/* Services */}
          <div>
            <div style={{ color: "#fff", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Services</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {["Air Freight", "Sea Freight", "Land Freight", "Customs Clearance", "Project Cargo"].map(s => (
                <li key={s}>
                  <a href="/Global-logistics/services" style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
                  >{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div style={{ color: "#fff", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Company</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {["About", "Contact", "Privacy"].map(s => (
                <li key={s}>
                  <a href={s === "About" ? "/Global-logistics/about" : s === "Contact" ? "/Global-logistics/contact" : "#"} style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
                  >{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ color: "#fff", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Contact</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="tel:+96896995001" style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >+968 96995001</a>
              <a href="mailto:sales@gls-oman.com" style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, textDecoration: "none", transition: "color 0.2s", wordBreak: "break-all" as const }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >sales@gls-oman.com</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ paddingTop: 32, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>
            © {new Date().getFullYear()} Globe Logistic Service LLC. All rights reserved.
          </div>
          <div style={{ color: "rgba(255,255,255,0.15)", fontSize: 12 }}>
            Muscat, Sultanate of Oman
          </div>
        </div>
      </div>
    </footer>
  );
}
