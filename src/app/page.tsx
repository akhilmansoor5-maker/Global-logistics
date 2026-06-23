import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import ServicesIntro from "@/components/ServicesIntro";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyChoose />
      <ServicesIntro />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
