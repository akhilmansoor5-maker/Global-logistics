"use client";

const SocialSVG = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" width="14" height="14" style={{ fill: "currentColor" }}><path d={d}/></svg>
);

export default function Footer() {
  return (
    <footer style={{ background: "#06172D", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 40px 36px" }}>

        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px 40px", paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: "linear-gradient(135deg,#0066FF,#38BDF8)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 18 18" fill="none" width="14" height="14">
                  <circle cx="9" cy="9" r="7.5" stroke="white" strokeWidth="1.4"/>
                  <ellipse cx="9" cy="9" rx="3" ry="7.5" stroke="white" strokeWidth="0.9" opacity="0.55"/>
                  <line x1="2" y1="9" x2="16" y2="9" stroke="white" strokeWidth="0.9" opacity="0.45"/>
                </svg>
              </div>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 13.5, lineHeight: 1.2, fontFamily: "var(--font-inter-tight,sans-serif)" }}>Globe Logistic</div>
                <div style={{ color: "#38BDF8", fontSize: 9, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase" }}>Service LLC</div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.28)", fontSize: 13, lineHeight: 1.8, marginBottom: 16, maxWidth: 210 }}>
              Connecting the world through intelligent logistics from Muscat, Oman.
            </p>
            <p style={{ color: "rgba(255,255,255,0.18)", fontSize: 12.5, lineHeight: 1.9, marginBottom: 22 }}>
              PC 116, PO BOX 560<br/>Ghala, Muscat<br/>Sultanate of Oman
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { label: "LinkedIn", d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                { label: "X", d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.213 5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                { label: "Facebook", d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
              ].map(({ label, d }) => (
                <a key={label} href="#" aria-label={label}
                  style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.3)", transition: "all 0.15s", textDecoration: "none" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,102,255,0.25)"; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.3)"; }}
                >
                  <SocialSVG d={d}/>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Services</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {["Air Freight", "Sea Freight", "Land Freight", "Customs Clearance", "Warehousing", "Project Cargo"].map(s => (
                <li key={s}>
                  <a href="#services" style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
                  >{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div style={{ color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Company</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {["About Us", "Contact", "Privacy Policy"].map(s => (
                <li key={s}>
                  <a href={`#${s.toLowerCase().replace(/\s/g,"-")}`} style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
                  >{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Contact</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="tel:+96896995001" style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >+968 96995001</a>
              <a href="tel:+96892030099" style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >+968 92030099</a>
              <a href="mailto:info@globelogisticoman.com" style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, textDecoration: "none", transition: "color 0.15s", wordBreak: "break-all" as const }}
                onMouseEnter={e => (e.currentTarget.style.color = "#38BDF8")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >info@globelogisticoman.com</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ paddingTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ color: "rgba(255,255,255,0.16)", fontSize: 12 }}>
            © {new Date().getFullYear()} Globe Logistic Service LLC. All rights reserved.
          </div>
          <div style={{ color: "rgba(255,255,255,0.1)", fontSize: 12 }}>
            Muscat, Sultanate of Oman
          </div>
        </div>
      </div>
    </footer>
  );
}
