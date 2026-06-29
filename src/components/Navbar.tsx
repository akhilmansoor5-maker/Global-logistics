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
    const fn = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          inset: "0 0 auto",
          zIndex: 50,
          height: 64,
          transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
          background: solid
            ? "rgba(4,8,15,0.85)"
            : "rgba(4,8,15,0.4)",
          borderBottom: solid
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(255,255,255,0.04)",
          boxShadow: solid ? "0 8px 40px rgba(0,0,0,0.5)" : "none",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        <div className="nb-inner" style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <a href="/Global-logistics/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0, mixBlendMode: "screen" }}>
            <div style={{ height: 50, overflow: "hidden", display: "flex", alignItems: "flex-start" }}>
              <img
                src="/Global-logistics/gls-logo.png"
                alt="Globe Logistic Services LLC"
                style={{
                  height: 82,
                  width: "auto",
                  filter: "invert(1) grayscale(1) brightness(10)",
                  display: "block",
                  flexShrink: 0,
                }}
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 44 }} className="hidden-mobile">
            {NAV.map(n => (
              <a
                key={n.label}
                href={n.href}
                style={{ color: "rgba(255,255,255,0.5)", fontSize: 13.5, fontWeight: 500, textDecoration: "none", transition: "color 0.2s", letterSpacing: "0.01em" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexShrink: 0 }} className="hidden-mobile">
            <a href="tel:+96896995001" style={{ color: "rgba(255,255,255,0.35)", fontSize: 12.5, textDecoration: "none", transition: "color 0.2s", fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
            >
              +968 96995001
            </a>
            <a
              href="mailto:sales@gls-oman.com"
              style={{
                background: "linear-gradient(135deg, #4F8EF7 0%, #3b7ef0 100%)",
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
                padding: "9px 22px",
                borderRadius: 8,
                textDecoration: "none",
                transition: "all 0.25s",
                transform: "translateY(0)",
                boxShadow: "0 4px 16px rgba(79,142,247,0.3)",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(79,142,247,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(79,142,247,0.3)"; }}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            style={{ display: "none", color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, cursor: "pointer", padding: 8, lineHeight: 0 }}
            className="show-mobile"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            style={{
              position: "fixed",
              inset: "64px 0 0",
              zIndex: 49,
              background: "rgba(4,8,15,0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              padding: "28px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 0,
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {NAV.map(n => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                style={{ color: "rgba(255,255,255,0.7)", fontSize: 17, fontWeight: 600, padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", textDecoration: "none", letterSpacing: "-0.01em" }}
              >
                {n.label}
              </a>
            ))}
            <a
              href="mailto:sales@gls-oman.com"
              onClick={() => setOpen(false)}
              style={{
                marginTop: 24,
                background: "linear-gradient(135deg, #4F8EF7 0%, #3b7ef0 100%)",
                color: "#fff",
                textAlign: "center",
                fontWeight: 600,
                fontSize: 14,
                padding: "14px",
                borderRadius: 10,
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(79,142,247,0.3)",
              }}
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .nb-inner { padding: 0 20px !important; }
        }
      `}</style>
    </>
  );
}
