"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Services", href: "/Global-logistics/services" },
  { label: "About", href: "/Global-logistics/about" },
  { label: "Contact", href: "/Global-logistics/contact" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          inset: "0 0 auto",
          zIndex: 50,
          height: 56,
          transition: "background 0.25s, border-color 0.25s, box-shadow 0.25s",
          background: solid ? "#fff" : "rgba(255,255,255,0.98)",
          borderBottom: solid ? "1px solid #E5E7EB" : "1px solid rgba(0,0,0,0.04)",
          boxShadow: solid ? "0 2px 8px rgba(0,0,0,0.04)" : "none",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="nb-inner" style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <a href="/Global-logistics/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", flexShrink: 0 }}>
            <div style={{ width: 32, height: 32, borderRadius: 6, background: "#0A1929", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 18 18" fill="none" width="16" height="16">
                <circle cx="9" cy="9" r="7.5" stroke="white" strokeWidth="1.5"/>
                <ellipse cx="9" cy="9" rx="3" ry="7.5" stroke="white" strokeWidth="1" opacity="0.6"/>
                <line x1="2" y1="9" x2="16" y2="9" stroke="white" strokeWidth="1" opacity="0.5"/>
              </svg>
            </div>
            <div>
              <div style={{ color: "#0A1929", fontWeight: 700, fontSize: 13, lineHeight: 1.2, fontFamily: "var(--font-inter-tight,sans-serif)", letterSpacing: "-0.01em" }}>Globe Logistic</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 48 }} className="hidden-mobile">
            {NAV.map(n => (
              <a
                key={n.label}
                href={n.href}
                style={{ color: "#64748B", fontSize: 13, fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#0A1929")}
                onMouseLeave={e => (e.currentTarget.style.color = "#64748B")}
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexShrink: 0 }} className="hidden-mobile">
            <a href="tel:+96896995001" style={{ color: "#94A3B8", fontSize: 12, textDecoration: "none", transition: "color 0.2s", fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget.style.color = "#0A1929")}
              onMouseLeave={e => (e.currentTarget.style.color = "#94A3B8")}
            >
              +968 96995001
            </a>
            <a
              href="mailto:sales@gls-oman.com"
              style={{ background: "#0A1929", color: "#fff", fontSize: 13, fontWeight: 600, padding: "10px 22px", borderRadius: 6, textDecoration: "none", transition: "all 0.25s", transform: "translateY(0)" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(10,25,41,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            style={{ display: "none", color: "#0A1929", background: "none", border: "none", cursor: "pointer", padding: 8 }}
            className="show-mobile"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            style={{ position: "fixed", inset: "56px 0 0", zIndex: 49, background: "#fff", padding: "24px 24px", display: "flex", flexDirection: "column", gap: 0 }}
          >
            {NAV.map(n => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                style={{ color: "#475569", fontSize: 16, fontWeight: 600, padding: "16px 0", borderBottom: "1px solid #E5E7EB", textDecoration: "none" }}
              >
                {n.label}
              </a>
            ))}
            <a
              href="mailto:sales@gls-oman.com"
              onClick={() => setOpen(false)}
              style={{ marginTop: 20, background: "#0A1929", color: "#fff", textAlign: "center", fontWeight: 600, fontSize: 13, padding: "12px", borderRadius: 6, textDecoration: "none" }}
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
          .nb-inner { padding: 0 20px !important; }
        }
      `}</style>
    </>
  );
}
