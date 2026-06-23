"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

const SERVICES = ["Air Freight","Sea Freight","Land Freight","Customs Clearance","Cargo Insurance","Warehousing","Supply Chain Solutions","Other"];
const INFO = [
  { Icon:MapPin, label:"Address",        text:"PC 116, PO BOX 560\nGhala, Muscat\nSultanate of Oman" },
  { Icon:Phone,  label:"Phone",          text:"+968 96995001", href:"tel:+96896995001" },
  { Icon:Mail,   label:"Email",          text:"info@globelogisticoman.com", href:"mailto:info@globelogisticoman.com" },
  { Icon:Clock,  label:"Business Hours", text:"Sun – Thu: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 1:00 PM" },
];

const inputStyle: React.CSSProperties = {
  width:"100%", padding:"11px 14px", borderRadius:10,
  border:"1px solid #E5EBF2", background:"#F9FAFB",
  color:"#111827", fontSize:14, outline:"none",
  fontFamily:"var(--font-inter,sans-serif)",
  transition:"border-color 0.15s, box-shadow 0.15s",
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 1400);
  };

  return (
    <section id="contact" ref={ref} style={{ padding:"96px 0", background:"#F8FAFC" }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 48px" }}>
        <motion.div initial={{ opacity:0, y:20 }} animate={inView?{ opacity:1, y:0 }:{}} transition={{ duration:0.6 }} style={{ marginBottom:52 }}>
          <div style={{ fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#0066FF", marginBottom:16 }}>Contact Us</div>
          <h2 style={{ fontSize:"clamp(32px,3.5vw,44px)", fontWeight:900, color:"#0A2540" }}>
            Let&apos;s Move Your<br/><span className="gradient-text">Cargo Forward</span>
          </h2>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"2fr 3fr", gap:32 }}>
          {/* Info card */}
          <motion.div initial={{ opacity:0, x:-24 }} animate={inView?{ opacity:1, x:0 }:{}} transition={{ duration:0.65 }} style={{ display:"flex", flexDirection:"column", gap:16 }}>
            <div style={{ background:"#0A2540", borderRadius:20, padding:"32px", display:"flex", flexDirection:"column", gap:28 }}>
              {INFO.map(({ Icon, label, text, href }) => (
                <div key={label} style={{ display:"flex", gap:14 }}>
                  <div style={{ width:36, height:36, borderRadius:10, background:"rgba(0,102,255,0.18)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <Icon size={16} color="#38BDF8"/>
                  </div>
                  <div>
                    <div style={{ fontSize:10.5, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#38BDF8", marginBottom:4 }}>{label}</div>
                    {href ? (
                      <a href={href} style={{ color:"rgba(255,255,255,0.6)", fontSize:13.5, lineHeight:1.65, whiteSpace:"pre-line", textDecoration:"none" }}
                        onMouseEnter={e => (e.currentTarget.style.color="#fff")}
                        onMouseLeave={e => (e.currentTarget.style.color="rgba(255,255,255,0.6)")}
                      >{text}</a>
                    ) : (
                      <p style={{ color:"rgba(255,255,255,0.5)", fontSize:13.5, lineHeight:1.65, whiteSpace:"pre-line" }}>{text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* Map placeholder */}
            <div style={{ background:"#fff", border:"1px solid #E5EBF2", borderRadius:16, height:160, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:8 }}>
              <MapPin size={28} color="#0066FF"/>
              <div style={{ fontSize:13.5, fontWeight:600, color:"#374151" }}>Ghala, Muscat</div>
              <div style={{ fontSize:12, color:"#9CA3AF" }}>Sultanate of Oman</div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity:0, x:24 }} animate={inView?{ opacity:1, x:0 }:{}} transition={{ duration:0.65, delay:0.1 }}>
            <div style={{ background:"#fff", borderRadius:20, border:"1px solid #E5EBF2", padding:"40px", boxShadow:"0 2px 20px rgba(0,0,0,0.04)" }}>
              {done ? (
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"60px 0", textAlign:"center" }}>
                  <div style={{ width:56, height:56, borderRadius:"50%", background:"rgba(16,185,129,0.1)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:20 }}>
                    <CheckCircle2 size={28} color="#10B981"/>
                  </div>
                  <h3 style={{ fontSize:22, fontWeight:900, color:"#0A2540", marginBottom:8, fontFamily:"var(--font-inter-tight,sans-serif)" }}>Quote Request Sent!</h3>
                  <p style={{ color:"#9CA3AF", fontSize:14, lineHeight:1.65, maxWidth:300 }}>Our team will review your request and respond within 24 hours with a tailored logistics solution.</p>
                </div>
              ) : (
                <form onSubmit={submit} style={{ display:"flex", flexDirection:"column", gap:18 }}>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:18 }}>
                    <div>
                      <label style={{ display:"block", fontSize:11, fontWeight:700, color:"#374151", letterSpacing:"0.07em", textTransform:"uppercase", marginBottom:7 }}>Full Name <span style={{ color:"#0066FF" }}>*</span></label>
                      <input type="text" required placeholder="John Smith" style={inputStyle}
                        onFocus={e => { e.target.style.borderColor="#0066FF"; e.target.style.boxShadow="0 0 0 3px rgba(0,102,255,0.1)"; }}
                        onBlur={e => { e.target.style.borderColor="#E5EBF2"; e.target.style.boxShadow="none"; }}
                      />
                    </div>
                    <div>
                      <label style={{ display:"block", fontSize:11, fontWeight:700, color:"#374151", letterSpacing:"0.07em", textTransform:"uppercase", marginBottom:7 }}>Company</label>
                      <input type="text" placeholder="Your Company" style={inputStyle}
                        onFocus={e => { e.target.style.borderColor="#0066FF"; e.target.style.boxShadow="0 0 0 3px rgba(0,102,255,0.1)"; }}
                        onBlur={e => { e.target.style.borderColor="#E5EBF2"; e.target.style.boxShadow="none"; }}
                      />
                    </div>
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:18 }}>
                    <div>
                      <label style={{ display:"block", fontSize:11, fontWeight:700, color:"#374151", letterSpacing:"0.07em", textTransform:"uppercase", marginBottom:7 }}>Email <span style={{ color:"#0066FF" }}>*</span></label>
                      <input type="email" required placeholder="john@company.com" style={inputStyle}
                        onFocus={e => { e.target.style.borderColor="#0066FF"; e.target.style.boxShadow="0 0 0 3px rgba(0,102,255,0.1)"; }}
                        onBlur={e => { e.target.style.borderColor="#E5EBF2"; e.target.style.boxShadow="none"; }}
                      />
                    </div>
                    <div>
                      <label style={{ display:"block", fontSize:11, fontWeight:700, color:"#374151", letterSpacing:"0.07em", textTransform:"uppercase", marginBottom:7 }}>Phone</label>
                      <input type="tel" placeholder="+968 xxxxxxxx" style={inputStyle}
                        onFocus={e => { e.target.style.borderColor="#0066FF"; e.target.style.boxShadow="0 0 0 3px rgba(0,102,255,0.1)"; }}
                        onBlur={e => { e.target.style.borderColor="#E5EBF2"; e.target.style.boxShadow="none"; }}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{ display:"block", fontSize:11, fontWeight:700, color:"#374151", letterSpacing:"0.07em", textTransform:"uppercase", marginBottom:7 }}>Service Type <span style={{ color:"#0066FF" }}>*</span></label>
                    <select required style={{ ...inputStyle, appearance:"none" }}
                      onFocus={e => { e.target.style.borderColor="#0066FF"; e.target.style.boxShadow="0 0 0 3px rgba(0,102,255,0.1)"; }}
                      onBlur={e => { e.target.style.borderColor="#E5EBF2"; e.target.style.boxShadow="none"; }}
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display:"block", fontSize:11, fontWeight:700, color:"#374151", letterSpacing:"0.07em", textTransform:"uppercase", marginBottom:7 }}>Message</label>
                    <textarea rows={4} placeholder="Tell us about your cargo, origin, destination, and special requirements..." style={{ ...inputStyle, resize:"none" }}
                      onFocus={e => { e.target.style.borderColor="#0066FF"; e.target.style.boxShadow="0 0 0 3px rgba(0,102,255,0.1)"; }}
                      onBlur={e => { e.target.style.borderColor="#E5EBF2"; e.target.style.boxShadow="none"; }}
                    />
                  </div>
                  <button type="submit" disabled={loading}
                    style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, background:"#0066FF", color:"#fff", fontWeight:700, fontSize:14, padding:"14px", borderRadius:12, border:"none", cursor:"pointer", transition:"all 0.2s", boxShadow:"0 4px 20px rgba(0,102,255,0.25)" }}
                    onMouseEnter={e => { if (!loading) { (e.currentTarget).style.background="#0055DD"; (e.currentTarget).style.boxShadow="0 8px 28px rgba(0,102,255,0.4)"; }}}
                    onMouseLeave={e => { (e.currentTarget).style.background="#0066FF"; (e.currentTarget).style.boxShadow="0 4px 20px rgba(0,102,255,0.25)"; }}
                  >
                    {loading
                      ? <span style={{ width:20, height:20, border:"2px solid rgba(255,255,255,0.3)", borderTopColor:"#fff", borderRadius:"50%", display:"inline-block", animation:"spin 0.7s linear infinite" }}/>
                      : <><Send size={15}/> Send Quote Request</>
                    }
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
