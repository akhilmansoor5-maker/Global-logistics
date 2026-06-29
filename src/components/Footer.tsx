"use client";

export default function Footer() {
  return (
    <footer style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.08)", position: "relative", overflow: "hidden" }}>

      {/* Top glow */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "50%", height: 1, background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)" }} />

      <div className="ft-wrap" style={{ maxWidth: 1400, margin: "0 auto", padding: "72px 60px 40px", position: "relative", zIndex: 1 }}>

        <div className="ft-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px 40px", paddingBottom: 48, borderBottom: "1px solid rgba(0,0,0,0.08)" }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ height: 34, overflow: "hidden", display: "flex", alignItems: "flex-start" }}>
                <img
                  src="/Global-logistics/gls-logo.png"
                  alt="Globe Logistic Services LLC"
                  style={{
                    height: 56,
                    width: "auto",
                    display: "block",
                    flexShrink: 0,
                  }}
                />
              </div>
            </div>
            <p style={{ color: "rgba(0,0,0,0.7)", fontSize: 13, lineHeight: 1.85, marginBottom: 16, maxWidth: 240 }}>
              Enterprise logistics solutions for importers, exporters, and manufacturers.
            </p>
            <p style={{ color: "rgba(0,0,0,0.5)", fontSize: 13, lineHeight: 1.85, margin: 0 }}>
              PC 116, PO BOX 560<br />Ghala, Muscat<br />Sultanate of Oman
            </p>
          </div>

          {/* Services */}
          <div>
            <div style={{ color: "#000", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>Services</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 13 }}>
              {["Air Freight", "Sea Freight", "Land Freight", "Customs Clearance", "Project Cargo"].map(s => (
                <li key={s}>
                  <a href="/Global-logistics/services" style={{ color: "rgba(0,0,0,0.65)", fontSize: 13.5, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#000")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(0,0,0,0.65)")}
                  >{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div style={{ color: "#000", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>Company</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 13 }}>
              {[
                { label: "About", href: "/Global-logistics/about" },
                { label: "Contact", href: "/Global-logistics/contact" },
                { label: "Privacy", href: "#" },
              ].map(s => (
                <li key={s.label}>
                  <a href={s.href} style={{ color: "rgba(0,0,0,0.65)", fontSize: 13.5, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#000")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(0,0,0,0.65)")}
                  >{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ color: "#000", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>Contact</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
              <a href="tel:+96896995001" style={{ color: "rgba(0,0,0,0.65)", fontSize: 13.5, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#000")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(0,0,0,0.65)")}
              >+968 96995001</a>
              <a href="mailto:sales@gls-oman.com" style={{ color: "rgba(0,0,0,0.65)", fontSize: 13.5, textDecoration: "none", transition: "color 0.2s", wordBreak: "break-all" as const }}
                onMouseEnter={e => (e.currentTarget.style.color = "#000")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(0,0,0,0.65)")}
              >sales@gls-oman.com</a>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ color: "rgba(0,0,0,0.5)", fontSize: 12 }}>
            © {new Date().getFullYear()} Globe Logistic Service LLC. All rights reserved.
          </div>
          <div style={{ color: "rgba(0,0,0,0.4)", fontSize: 12 }}>
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
