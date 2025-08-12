import { Metadata } from "next";
import Hero from "@/components/Hero";
import OverOnsSectie from "@/components/OverOnsSectie";
import DienstenGallerij from '@/components/DienstenGallerij';
import StatistiekenSectie from '@/components/StatistiekenSectie';
import ProcesSectie from '@/components/ProcesSectie';
import CtaSectie from "@/components/CtaSectie";

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
      <DienstenGallerij />
      <StatistiekenSectie />
      <OverOnsSectie />
      <ProcesSectie />
      <CtaSectie />
    </main>
  );
}
