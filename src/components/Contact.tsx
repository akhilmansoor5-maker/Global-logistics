"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

const SERVICES = ["Air Freight","Sea Freight","Land Freight","Customs Clearance","Cargo Insurance","Warehousing","Supply Chain Solutions","Other"];
const INFO = [
  { Icon: MapPin,  label: "Address",        text: "PC 116, PO BOX 560\nGhala, Muscat\nSultanate of Oman" },
  { Icon: Phone,   label: "Phone",          text: "+968 96995001", href: "tel:+96896995001" },
  { Icon: Mail,    label: "Email",          text: "info@globelogisticoman.com", href: "mailto:info@globelogisticoman.com" },
  { Icon: Clock,   label: "Business Hours", text: "Sun – Thu: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 1:00 PM" },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.09)",
  background: "rgba(255,255,255,0.05)",
  color: "#fff",
  fontSize: 14,
  outline: "none",
  fontFamily: "var(--font-inter,sans-serif)",
  transition: "border-color 0.15s, box-shadow 0.15s",
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 1400);
  };

  return (
    <section id="contact" ref={ref} style={{ padding: "100px 0", background: "#04080f", position: "relative", overflow: "hidden" }}>

      {/* Glows */}
      <div style={{ position: "absolute", top: "20%", right: -100, width: 500, height: 500, background: "radial-gradient(ellipse, rgba(79,142,247,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", left: -80, width: 400, height: 400, background: "radial-gradient(ellipse, rgba(56,189,248,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: 56 }}>
          <div style={{ marginBottom: 20 }}>
            <span className="label-badge">Contact Us</span>
          </div>
          <h2 style={{ fontSize: "clamp(34px,3.5vw,52px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", fontFamily: "var(--font-inter-tight,sans-serif)" }}>
            Let&apos;s Move Your<br /><span className="gt">Cargo Forward</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 28 }} className="contact-grid">

          {/* Info card */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65 }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: 20,
              padding: "36px",
              display: "flex",
              flexDirection: "column",
              gap: 28,
              flex: 1,
            }}>
              {INFO.map(({ Icon, label, text, href }) => (
                <div key={label} style={{ display: "flex", gap: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(79,142,247,0.12)", border: "1px solid rgba(79,142,247,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={16} color="#93c5fd" />
                  </div>
                  <div>
                    <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#93c5fd", marginBottom: 5 }}>{label}</div>
                    {href ? (
                      <a href={href} style={{ color: "rgba(255,255,255,0.45)", fontSize: 13.5, lineHeight: 1.7, whiteSpace: "pre-line", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                      >{text}</a>
                    ) : (
                      <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13.5, lineHeight: 1.7, whiteSpace: "pre-line", margin: 0 }}>{text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              height: 140,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}>
              <MapPin size={26} color="#4F8EF7" />
              <div style={{ fontSize: 13.5, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>Ghala, Muscat</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>Sultanate of Oman</div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, delay: 0.1 }}>
            <div style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.09)",
              padding: "44px",
              boxShadow: "0 40px 80px rgba(0,0,0,0.3)",
            }}>
              {done ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 0", textAlign: "center" }}>
                  <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <CheckCircle2 size={28} color="#22c55e" />
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 10, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.02em" }}>Quote Request Sent!</h3>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, lineHeight: 1.7, maxWidth: 300, margin: 0 }}>Our team will review your request and respond within 24 hours with a tailored logistics solution.</p>
                </div>
              ) : (
                <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }} className="form-2col">
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Full Name <span style={{ color: "#4F8EF7" }}>*</span></label>
                      <input type="text" required placeholder="John Smith" style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = "rgba(79,142,247,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(79,142,247,0.1)"; }}
                        onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.09)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Company</label>
                      <input type="text" placeholder="Your Company" style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = "rgba(79,142,247,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(79,142,247,0.1)"; }}
                        onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.09)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }} className="form-2col">
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Email <span style={{ color: "#4F8EF7" }}>*</span></label>
                      <input type="email" required placeholder="john@company.com" style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = "rgba(79,142,247,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(79,142,247,0.1)"; }}
                        onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.09)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Phone</label>
                      <input type="tel" placeholder="+968 xxxxxxxx" style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = "rgba(79,142,247,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(79,142,247,0.1)"; }}
                        onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.09)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Service Type <span style={{ color: "#4F8EF7" }}>*</span></label>
                    <select required style={{ ...inputStyle, appearance: "none" }}
                      onFocus={e => { e.target.style.borderColor = "rgba(79,142,247,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(79,142,247,0.1)"; }}
                      onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.09)"; e.target.style.boxShadow = "none"; }}
                    >
                      <option value="" style={{ background: "#0a111e" }}>Select a service...</option>
                      {SERVICES.map(s => <option key={s} style={{ background: "#0a111e" }}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Message</label>
                    <textarea rows={4} placeholder="Tell us about your cargo, origin, destination, and special requirements..." style={{ ...inputStyle, resize: "none" }}
                      onFocus={e => { e.target.style.borderColor = "rgba(79,142,247,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(79,142,247,0.1)"; }}
                      onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.09)"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                      background: "linear-gradient(135deg, #4F8EF7 0%, #3670e8 100%)",
                      color: "#fff", fontWeight: 700, fontSize: 14,
                      padding: "15px", borderRadius: 12, border: "none", cursor: "pointer",
                      transition: "all 0.2s",
                      boxShadow: "0 4px 24px rgba(79,142,247,0.3)",
                    }}
                    onMouseEnter={e => { if (!loading) { (e.currentTarget).style.boxShadow = "0 8px 36px rgba(79,142,247,0.5)"; (e.currentTarget).style.transform = "translateY(-1px)"; }}}
                    onMouseLeave={e => { (e.currentTarget).style.boxShadow = "0 4px 24px rgba(79,142,247,0.3)"; (e.currentTarget).style.transform = "translateY(0)"; }}
                  >
                    {loading
                      ? <span style={{ width: 20, height: 20, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
                      : <><Send size={15} /> Send Quote Request</>
                    }
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){
          #contact>div>div:last-child{grid-template-columns:1fr!important}
          .contact-grid{grid-template-columns:1fr!important}
        }
        @media(max-width:768px){
          #contact{padding:72px 0!important}
          #contact>div{padding:0 24px!important}
          .form-2col{grid-template-columns:1fr!important;gap:16px!important}
          #contact>div>div:last-child>div:last-child{padding:28px!important}
        }
        input::placeholder, textarea::placeholder, select { color: rgba(255,255,255,0.25) !important; }
      `}</style>
    </section>
  );
}
