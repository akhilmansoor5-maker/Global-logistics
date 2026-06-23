"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STEPS = [
  { n:"01", title:"Request Quote",      desc:"Submit your shipment details through our form or contact our team directly." },
  { n:"02", title:"Planning & Docs",   desc:"We plan the optimal routing and prepare all required documentation." },
  { n:"03", title:"Cargo Pickup",      desc:"Secure pickup from your location via our trusted transport network." },
  { n:"04", title:"Transportation",    desc:"Cargo moves by Air, Sea, or Land with live tracking at every stage." },
  { n:"05", title:"Customs Clearance", desc:"Licensed brokers handle all border formalities for smooth crossings." },
  { n:"06", title:"Delivery",          desc:"Safe, on-time delivery with full documentation and proof of receipt." },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });

  return (
    <section id="process" ref={ref} style={{ padding:"96px 0", background:"#fff" }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 48px" }}>
        <motion.div
          initial={{ opacity:0, y:20 }}
          animate={inView?{ opacity:1, y:0 }:{}}
          transition={{ duration:0.6 }}
          style={{ textAlign:"center", marginBottom:64 }}
        >
          <div style={{ fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#0066FF", marginBottom:16 }}>How It Works</div>
          <h2 style={{ fontSize:"clamp(32px,3.5vw,44px)", fontWeight:900, color:"#0A2540", marginBottom:16 }}>
            From Quote to Delivery<br/><span className="gradient-text">In 6 Simple Steps</span>
          </h2>
          <p style={{ color:"#9CA3AF", fontSize:15, lineHeight:1.7, maxWidth:440, margin:"0 auto" }}>
            A transparent, streamlined process designed to move your cargo with precision.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position:"relative" }}>
          {/* Track */}
          <div style={{ position:"absolute", top:22, left:0, right:0, height:1, background:"#EFF2F6" }}>
            <motion.div
              style={{ height:"100%", background:"linear-gradient(90deg,#0066FF,#38BDF8)" }}
              initial={{ width:"0%" }}
              animate={inView?{ width:"100%" }:{}}
              transition={{ duration:2, delay:0.4, ease:"easeInOut" }}
            />
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(6,1fr)", gap:24 }}>
            {STEPS.map((s,i) => (
              <motion.div
                key={s.n}
                initial={{ opacity:0, y:24 }}
                animate={inView?{ opacity:1, y:0 }:{}}
                transition={{ duration:0.5, delay:0.35+i*0.12 }}
              >
                {/* Node */}
                <div style={{ display:"flex", justifyContent:"center", marginBottom:28 }}>
                  <motion.div
                    initial={{ scale:0 }}
                    animate={inView?{ scale:1 }:{}}
                    transition={{ duration:0.35, delay:0.52+i*0.12, type:"spring", stiffness:400 }}
                    style={{ width:14, height:14, borderRadius:"50%", background:"linear-gradient(135deg,#0066FF,#38BDF8)", border:"3px solid #fff", boxShadow:"0 0 0 2px rgba(0,102,255,0.2)", position:"relative", zIndex:1 }}
                  />
                </div>
                <div style={{ fontSize:10.5, fontWeight:700, letterSpacing:"0.1em", color:"#0066FF", marginBottom:8 }}>{s.n}</div>
                <h4 style={{ fontSize:14, fontWeight:800, color:"#0A2540", marginBottom:8, fontFamily:"var(--font-inter-tight,sans-serif)", lineHeight:1.25 }}>{s.title}</h4>
                <p style={{ color:"#9CA3AF", fontSize:12.5, lineHeight:1.65 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity:0, y:14 }}
          animate={inView?{ opacity:1, y:0 }:{}}
          transition={{ duration:0.5, delay:1.1 }}
          style={{ textAlign:"center", marginTop:60 }}
        >
          <a href="#contact"
            style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#0A2540", color:"#fff", fontWeight:600, fontSize:14, padding:"13px 28px", borderRadius:12, textDecoration:"none", transition:"all 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background="#0066FF"; (e.currentTarget as HTMLAnchorElement).style.boxShadow="0 8px 24px rgba(0,102,255,0.3)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background="#0A2540"; (e.currentTarget as HTMLAnchorElement).style.boxShadow="none"; }}
          >
            Start Your Shipment Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
