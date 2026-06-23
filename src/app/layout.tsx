import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Globe Logistic Service LLC | Connecting The World, Delivering Excellence",
  description: "End-to-end logistics solutions across Air, Sea and Land with seamless customs clearance and supply chain expertise. Based in Muscat, Oman.",
  keywords: "logistics, air freight, sea freight, land freight, customs clearance, Oman, Muscat, supply chain, cargo insurance, warehousing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
