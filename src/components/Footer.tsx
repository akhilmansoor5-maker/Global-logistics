"use client";

export default function Footer() {
  return (
    <footer style={{ background: "#0A1929", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="ft-wrap" style={{ maxWidth: 1400, margin: "0 auto", padding: "72px 60px 40px" }}>

        <div className="ft-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px 40px", paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <img
                src="/Global-logistics/gls-logo.png"
                alt="Globe Logistic Services LLC"
                style={{ height: 48, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, lineHeight: 1.8, marginBottom: 16, maxWidth: 240 }}>
              Enterprise logistics solutions for importers, exporters, and manufacturers.
            </p>
            <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 13, lineHeight: 1.8, margin: 0 }}>
              PC 116, PO BOX 560<br/>Ghala, Muscat<br/>Sultanate of Oman
            </p>
          </div>

          {/* Services */}
          <div>
            <div style={{ color: "#fff", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18 }}>Services</div>
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
            <div style={{ color: "#fff", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18 }}>Company</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "About", href: "/Global-logistics/about" },
                { label: "Contact", href: "/Global-logistics/contact" },
                { label: "Privacy", href: "#" },
              ].map(s => (
                <li key={s.label}>
                  <a href={s.href} style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
                  >{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ color: "#fff", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18 }}>Contact</div>
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

        <div style={{ paddingTop: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>
            © {new Date().getFullYear()} Globe Logistic Service LLC. All rights reserved.
          </div>
          <div style={{ color: "rgba(255,255,255,0.15)", fontSize: 12 }}>
            Muscat, Sultanate of Oman
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){.ft-wrap{padding:56px 40px 32px!important}.ft-grid{grid-template-columns:1fr 1fr!important;gap:40px 32px!important}}
        @media(max-width:768px){.ft-wrap{padding:48px 24px 28px!important}.ft-grid{grid-template-columns:1fr 1fr!important;gap:32px 24px!important}}
        @media(max-width:480px){.ft-grid{grid-template-columns:1fr!important;gap:28px!important}}
      `}</style>
    </footer>
  );
}
