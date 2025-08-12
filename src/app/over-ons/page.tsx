import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over Ons - BWS Schoonmaak",
  description: "Maak kennis met BWS Schoonmaak. Leer meer over onze missie, visie en het team achter onze professionele schoonmaakdiensten.",
  openGraph: {
    title: "Over Ons - BWS Schoonmaak",
    description: "Maak kennis met BWS Schoonmaak. Leer meer over onze missie, visie en het team achter onze professionele schoonmaakdiensten.",
    images: [{ url: "/og-over-ons.jpg" }],
  },
};

export default function OverOnsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-[120px] md:pt-[140px] pb-20 bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--accent)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              Over BWS Schoonmaak
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Betrouwbare Partner in Schoonmaak
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Met meer dan 15 jaar ervaring zorgen wij voor representatieve en hygiënische omgevingen. 
              Van kantoorpanden tot zorginstellingen - kwaliteit en betrouwbaarheid staan centraal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#onze-aanpak" className="btn-white">
                Ontdek onze aanpak
              </a>
              <a href="/contact" className="btn-white-outline">
                Neem contact op
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
      </section>

      <section id="onze-aanpak" className="py-20 bg-[color:var(--light-bg)] scroll-mt-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="border-l-4 border-[color:var(--primary)] pl-4 mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Onze mensen en materialen
                </h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong className="text-gray-900">Onze mensen:</strong> Met behulp van onze zorgvuldig geselecteerde medewerkers wordt schoon dus weer gewoon! Allen zijn vakkundig opgeleid en gediplomeerd. Zij worden ter plaatse consequent en nauwlettend aangestuurd. Voor elke opdracht selecteert BWS Schoonmaak specifieke medewerkers. Uiteraard uitsluitend vakbekwaam en ervaren personeel.
                </p>
                <p>
                  <strong className="text-gray-900">Onze middelen:</strong> Schoonmaken gaat niet zonder geschikte schoonmaakproducten. Wij hebben bewust gekozen om gebruik te maken van milieuvriendelijke producten die ruimschoots voldoen aan de geldende milieueisen. Een optimaal schoonmaakresultaat en een stuk verantwoord ondernemen is bij BWS Schoonmaak dus prima te combineren.
                </p>
                <p>
                  <strong className="text-gray-900">Onze materialen:</strong> BWS Schoonmaak bedient zich van de modernste apparatuur. Ook hierbij streven wij ernaar zo milieuvriendelijk te werk te gaan. En vanzelfsprekend volgens strikte veiligheid voorschriften. Veiligheid is geen last; het is onze zorg bij al onze projecten. Schoon wordt gewoon: maar het moet wel veilig gebeuren!
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/missie-visie.jpg"
                alt="BWS Schoonmaak Missie en Visie"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--primary)]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waar ziet u ons aan het werk?
            </h2>
            <p className="text-2xl font-semibold text-[color:var(--primary)] mb-6">
              Overal!
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed text-lg">
              Dagelijks zijn wij verantwoordelijk voor de schoonmaak van scholen, woningbouwcorporaties, kantoren, warenhuizen, musea, ziekenhuizen, industriële projecten.
            </p>
            <p className="text-gray-900 font-semibold text-lg">
              BWS Schoonmaak is een landelijk opererend schoonmaakbedrijf.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[color:var(--primary)]/5 to-[color:var(--secondary)]/5 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[color:var(--primary)]/10 group hover:-translate-y-1">
              <div className="text-[color:var(--primary)] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-900">Kantoren</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Van kleine kantoorruimtes tot grote kantoorgebouwen, wij zorgen voor een schone en representatieve werkomgeving voor u en uw medewerkers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[color:var(--primary)]/5 to-[color:var(--secondary)]/5 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[color:var(--primary)]/10 group hover:-translate-y-1">
              <div className="text-[color:var(--primary)] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-900">Scholen</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Een schone leeromgeving is essentieel voor het welzijn van leerlingen en docenten. Wij zorgen voor grondige en hygiënische schoonmaak van schoolgebouwen.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[color:var(--primary)]/5 to-[color:var(--secondary)]/5 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[color:var(--primary)]/10 group hover:-translate-y-1">
              <div className="text-[color:var(--primary)] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-900">Ziekenhuizen</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                In zorgomgevingen gelden strenge hygiëne-eisen. Onze specialistische schoonmaakteams zijn hiervoor speciaal opgeleid en werken volgens de hoogste standaarden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Onze waarden
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              BWS Schoonmaak heeft een aantal kernwaarden die centraal staan in
              onze bedrijfsvoering en die de basis vormen voor al onze
              activiteiten.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-gradient-to-br from-[color:var(--primary)]/5 to-[color:var(--secondary)]/5 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-[color:var(--primary)]/10 group hover:-translate-y-1">
              <div className="text-[color:var(--primary)] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Kwaliteit</h3>
              <p className="text-gray-700 leading-relaxed">
                We streven altijd naar de hoogste kwaliteit in onze dienstverlening en gebruiken alleen de beste producten.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[color:var(--primary)]/5 to-[color:var(--secondary)]/5 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-[color:var(--primary)]/10 group hover:-translate-y-1">
              <div className="text-[color:var(--primary)] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Professioneel</h3>
              <p className="text-gray-700 leading-relaxed">
                Dit is hoe BWS Schoonmaak zijn diensten graag aan u presenteert. Service, klantgerichtheid en kwaliteit: vanzelfsprekende voorwaarden.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100">
              <div className="text-[color:var(--primary)] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Duurzaamheid</h3>
              <p className="text-gray-700 leading-relaxed">
                We zijn toegewijd aan milieuvriendelijke praktijken en het minimaliseren van onze ecologische voetafdruk.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100">
              <div className="text-[color:var(--primary)] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Betrouwbaarheid</h3>
              <p className="text-gray-700 leading-relaxed">
                Middelen, materialen en mensen vormen de belangrijkste bouwstenen van onze solide organisatie. BWS Schoonmaak staat garant voor een topkwaliteit in schoonmaken tegen zeer scherpen prijzen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Werk samen met BWS Schoonmaak
            </h2>
            <p className="text-white/90 mb-8 leading-relaxed">
              Bent u op zoek naar een betrouwbare partner voor al uw
              schoonmaakbehoeften? Neem contact met ons op voor een
              vrijblijvende offerte of om te bespreken hoe wij u kunnen helpen.
            </p>
            <Link href="/contact" className="btn-white-outline">
              Neem contact met ons op
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 