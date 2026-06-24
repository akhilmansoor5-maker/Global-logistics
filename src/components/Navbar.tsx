"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Services", href: "/Global-logistics/services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "mailto:info@globelogisticoman.com" },
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
        initial={{ y: -68, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          inset: "0 0 auto",
          zIndex: 50,
          height: 68,
          transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
          background: solid ? "#fff" : "rgba(255,255,255,0.95)",
          borderBottom: solid ? "1px solid #E5E7EB" : "1px solid rgba(0,0,0,0.05)",
          boxShadow: solid ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
          backdropFilter: "blur(8px)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <a href="/Global-logistics/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#0066FF,#38BDF8)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 18 18" fill="none" width="16" height="16">
                <circle cx="9" cy="9" r="7.5" stroke="white" strokeWidth="1.4"/>
                <ellipse cx="9" cy="9" rx="3" ry="7.5" stroke="white" strokeWidth="0.9" opacity="0.55"/>
                <line x1="2" y1="9" x2="16" y2="9" stroke="white" strokeWidth="0.9" opacity="0.45"/>
              </svg>
            </div>
            <div>
              <div style={{ color: "#0A1929", fontWeight: 800, fontSize: 14, lineHeight: 1.2, fontFamily: "var(--font-inter-tight,sans-serif)" }}>Globe Logistic</div>
              <div style={{ color: "#0066FF", fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>Service LLC</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 40 }} className="hidden-mobile">
            {NAV.map(n => (
              <a
                key={n.label}
                href={n.href}
                style={{ color: "#64748B", fontSize: 14, fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#0066FF")}
                onMouseLeave={e => (e.currentTarget.style.color = "#64748B")}
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }} className="hidden-mobile">
            <a href="tel:+96896995001" style={{ color: "#94A3B8", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#0066FF")}
              onMouseLeave={e => (e.currentTarget.style.color = "#94A3B8")}
            >
              +968 96995001
            </a>
            <a
              href="mailto:info@globelogisticoman.com"
              style={{ background: "#0066FF", color: "#fff", fontSize: 13, fontWeight: 600, padding: "10px 22px", borderRadius: 8, textDecoration: "none", transition: "background 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#0055DD")}
              onMouseLeave={e => (e.currentTarget.style.background = "#0066FF")}
            >
              Get A Quote
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
            style={{ position: "fixed", inset: "68px 0 0", zIndex: 49, background: "#fff", padding: "24px 40px", display: "flex", flexDirection: "column", gap: 0 }}
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
              href="mailto:info@globelogisticoman.com"
              onClick={() => setOpen(false)}
              style={{ marginTop: 20, background: "#0066FF", color: "#fff", textAlign: "center", fontWeight: 700, fontSize: 14, padding: "14px", borderRadius: 8, textDecoration: "none" }}
            >
              Get A Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
}
