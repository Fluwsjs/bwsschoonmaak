import { Metadata } from "next";
import Hero from "@/components/Hero";
import MainServices from "@/components/MainServices";
import TrustIndicators from "@/components/TrustIndicators";
import TransformationSection from "@/components/TransformationSection";
import ModernTestimonials from "@/components/ModernTestimonials";
import InspiratieSectie from "@/components/InspiratieSectie";

export const metadata: Metadata = {
  title: "BWS Schoonmaak - Professionele Schoonmaakdiensten",
  description: "BWS Schoonmaak biedt professionele schoonmaakdiensten voor bedrijven en particulieren. Betrouwbaar, flexibel en met oog voor detail.",
  openGraph: {
    title: "BWS Schoonmaak - Professionele Schoonmaakdiensten",
    description: "BWS Schoonmaak biedt professionele schoonmaakdiensten voor bedrijven en particulieren. Betrouwbaar, flexibel en met oog voor detail.",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <MainServices />
      <TrustIndicators />
      <TransformationSection />
      <ModernTestimonials />
      <InspiratieSectie />
    </main>
  );
}
