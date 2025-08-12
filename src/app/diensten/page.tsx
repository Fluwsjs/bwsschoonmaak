import { Metadata } from "next";
import Link from "next/link";
import DienstenGallerij from "@/components/DienstenGallerij";

export const metadata: Metadata = {
  title: "Diensten - BWS Schoonmaak",
  description: "Bekijk ons complete aanbod van professionele schoonmaakdiensten voor bedrijven en particulieren.",
  openGraph: {
    title: "Diensten - BWS Schoonmaak",
    description: "Bekijk ons complete aanbod van professionele schoonmaakdiensten voor bedrijven en particulieren.",
    images: [{ url: "/og-diensten.jpg" }],
  },
};

export default function DienstenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-[120px] md:pt-[140px] pb-20 bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--accent)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Professionele Schoonmaakdiensten
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Van kantoorschoonmaak tot specialistische reiniging - BWS Schoonmaak biedt 
            oplossingen voor elke schoonmaakbehoefte met kwaliteit en betrouwbaarheid.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white">
              Vraag offerte aan
            </Link>
            <Link href="#onze-diensten" className="btn-white-outline">
              Bekijk onze diensten
            </Link>
          </div>
        </div>
      </section>

      {/* Diensten Gallery */}
      <div id="onze-diensten">
        <DienstenGallerij />
      </div>

      {/* Detailed Service Sections */}
      <section className="py-20 bg-white">
        <div className="container">
          {/* Kantoor & Bedrijfsschoonmaak */}
          <div id="kantoor-bedrijfsschoonmaak" className="mb-20 scroll-mt-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Kantoor- en Bedrijfsschoonmaak</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Professionele dagelijkse en periodieke schoonmaakdiensten voor kantoorpanden. 
                  Onze gecertificeerde teams zorgen voor een representatieve en productieve werkomgeving.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[color:var(--primary)] rounded-full"></div>
                    <span className="text-sm text-gray-600">Dagelijkse schoonmaak</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[color:var(--primary)] rounded-full"></div>
                    <span className="text-sm text-gray-600">Periodieke reiniging</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[color:var(--primary)] rounded-full"></div>
                    <span className="text-sm text-gray-600">Flexibele planning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[color:var(--primary)] rounded-full"></div>
                    <span className="text-sm text-gray-600">ISO-gecertificeerd</span>
                  </div>
                </div>
                <Link href="/contact" className="btn-primary">Vraag offerte aan</Link>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop" 
                  alt="Kantoorschoonmaak" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Gevelreiniging & Glasbewassing */}
          <div id="gevelreiniging-glasbewassing" className="mb-20 scroll-mt-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Gevelreiniging & Glasbewassing</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Specialistische reiniging van gevels en glaspuien met professionele apparatuur 
                  voor optimale representatie van uw bedrijfspand.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[color:var(--primary)] rounded-full"></div>
                    <span className="text-sm text-gray-600">Hoogwerktechniek</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[color:var(--primary)] rounded-full"></div>
                    <span className="text-sm text-gray-600">Periodiek onderhoud</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[color:var(--primary)] rounded-full"></div>
                    <span className="text-sm text-gray-600">Professionele uitrusting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[color:var(--primary)] rounded-full"></div>
                    <span className="text-sm text-gray-600">Veiligheidsprotocol</span>
                  </div>
                </div>
                <Link href="/contact" className="btn-primary">Vraag offerte aan</Link>
              </div>
              <div className="lg:order-1 relative h-80 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" 
                  alt="Glasbewassing" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Sanitair & Hygiënereiniging */}
          <div id="sanitair-hygienereiniging" className="mb-20 scroll-mt-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sanitair- en Hygiënereiniging</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Grondige reiniging en desinfectie van sanitaire voorzieningen volgens HACCP-richtlijnen 
                  voor optimale hygiëne en gezondheid.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[color:var(--primary)] rounded-full"></div>
                    <span className="text-sm text-gray-600">HACCP-conform</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[color:var(--primary)] rounded-full"></div>
                    <span className="text-sm text-gray-600">Desinfectieprotocol</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[color:var(--primary)] rounded-full"></div>
                    <span className="text-sm text-gray-600">Kwaliteitsrapportage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[color:var(--primary)] rounded-full"></div>
                    <span className="text-sm text-gray-600">24/7 beschikbaar</span>
                  </div>
                </div>
                <Link href="/contact" className="btn-primary">Vraag offerte aan</Link>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop" 
                  alt="Sanitair reiniging" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* More services can be added here */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#00378e] py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Op zoek naar een dienst op maat?
          </h2>
          <p className="text-white/90 max-w-xl mx-auto mb-8 leading-relaxed">
            Staat uw gewenste dienst er niet tussen of heeft u specifieke wensen?
            Neem contact met ons op voor een op maat gemaakte offerte.
          </p>
          <Link href="/contact" className="btn-white-outline">
            Neem contact met ons op
          </Link>
        </div>
      </section>
    </>
  );
} 