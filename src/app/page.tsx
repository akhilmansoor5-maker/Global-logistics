import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import ServicesIntro from "@/components/ServicesIntro";
import Credibility from "@/components/Credibility";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyChoose />
      <ServicesIntro />
      <Credibility />
      <CTA />
      <Footer />
    </main>
  );
}
