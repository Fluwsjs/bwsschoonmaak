import Image from "next/image";
import Link from "next/link";

const projecten = [
  {
    id: 1,
    titel: "AMC Ziekenhuis Amsterdam",
    categorie: "Zorginstelling",
    locatie: "Amsterdam",
    oppervlakte: "45.000 m²",
    periode: "2019 - Heden",
    beschrijving: "Complexe schoonmaakoperatie voor een van de grootste ziekenhuizen van Nederland. 24/7 service met specialistische hygiëneprotocollen voor operatiekamers, IC's en laboratoria.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=500&fit=crop",
    diensten: ["Ziekenhuisschoonmaak", "Hygiëneprotocollen", "24/7 Service", "Desinfectie"],
    uitdaging: "Handhaving van strikte hygiënenormen terwijl de zorgverlening doorging",
    oplossing: "Gespecialiseerde teams met HACCP-certificering en real-time monitoring",
    resultaat: "100% compliance met ziekenhuishygiëne standaarden, 0 infectie-incidenten gerelateerd aan schoonmaak",
    testimonial: {
      quote: "BWS Schoonmaak begrijpt de complexiteit van ziekenhuisschoonmaak. Hun professionele aanpak en flexibiliteit zijn onmisbaar voor onze dagelijkse operatie.",
      auteur: "Dr. Sarah van der Berg",
      functie: "Hoofd Facility Management AMC"
    }
  },
  {
    id: 2,
    titel: "ING Hoofdkantoor Bijlmermeer",
    categorie: "Kantoorgebouw",
    locatie: "Amsterdam Zuidoost",
    oppervlakte: "80.000 m²",
    periode: "2018 - Heden",
    beschrijving: "Onderhoud van het iconische ING-hoofdkantoor met focus op duurzaamheid en representativiteit. Dagelijkse schoonmaak voor 8.000+ medewerkers met flexibele dienstverlening.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop",
    diensten: ["Kantoorschoonmaak", "Glasbewassing", "Vloeronderhoud", "Groene schoonmaak"],
    uitdaging: "Schoonmaak tijdens kantooruren zonder verstoring van bedrijfsvoering",
    oplossing: "Flexibele planning met early-morning en late-evening shifts, stille apparatuur",
    resultaat: "98% medewerkertevredenheid, 30% reductie in schoonmaakgerelateerde klachten",
    testimonial: {
      quote: "De samenwerking met BWS verloopt uitstekend. Ze denken proactief mee en leveren consistente kwaliteit, dag in dag uit.",
      auteur: "Mark Jansen",
      functie: "Facility Manager ING"
    }
  },
  {
    id: 3,
    titel: "Universiteit van Amsterdam - Roeterseiland",
    categorie: "Onderwijsinstelling",
    locatie: "Amsterdam Centrum",
    oppervlakte: "25.000 m²",
    periode: "2020 - Heden",
    beschrijving: "Schoonmaakdiensten voor het drukbezochte Roeterseilandcomplex. Focus op leslokalen, laboratoria en studieruimtes met respect voor het studieritme.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop",
    diensten: ["Onderwijsschoonmaak", "Laboratoriumreiniging", "Evenementenondersteuning", "Preventief onderhoud"],
    uitdaging: "Verschillende hygieneeisen per ruimtetype, wisselende bezetting door colleges",
    oplossing: "Gespecialiseerde teams per gebied, flexibele planning rond lesroosters",
    resultaat: "Verhoogde studenttevredenheid, 95% beschikbaarheid van schone ruimtes tijdens college-uren",
    testimonial: {
      quote: "BWS zorgt ervoor dat onze studenten en docenten elke dag een schone en inspirerende leeromgeving aantreffen.",
      auteur: "Prof. Dr. Lisa Hartog",
      functie: "Decaan Economie & Bedrijfskunde UvA"
    }
  },
  {
    id: 4,
    titel: "Schiphol Plaza Shopping Center",
    categorie: "Retail & Horeca",
    locatie: "Schiphol",
    oppervlakte: "15.000 m²",
    periode: "2017 - Heden",
    beschrijving: "24/7 schoonmaakoperatie in een van de drukste publieke ruimtes van Nederland. Dagelijks 200.000+ bezoekers met international brand standards.",
    image: "https://images.unsplash.com/photo-1555529669-04c4deec7de9?w=800&h=500&fit=crop",
    diensten: ["Retail schoonmaak", "Vloeronderhoud", "Sanitairreiniging", "Afvalbeheer"],
    uitdaging: "Continue drukte, diverse internationale standaarden, beperkte toegankelijkheid",
    oplossing: "24/7 teams, snelle response protocols, minimal visible cleaning tijdens piekuren",
    resultaat: "Behoud van premium uitstraling, 99.5% uptime van faciliteiten",
    testimonial: {
      quote: "In een omgeving waar de eerste indruk cruciaal is, zorgt BWS voor een altijd representatieve uitstraling.",
      auteur: "Jennifer van Dijk",
      functie: "Center Manager Schiphol Plaza"
    }
  },
  {
    id: 5,
    titel: "Nieuwbouw Zorgcomplex De Zorgboog",
    categorie: "Nieuwbouw",
    locatie: "Utrecht",
    oppervlakte: "12.000 m²",
    periode: "2021",
    beschrijving: "Opleverschoonmaak en eerste inrichting van geavanceerd zorgcomplex. Van bouwstof tot move-in ready in 6 weken tijd.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop",
    diensten: ["Opleverschoonmaak", "Dieptereiniging", "Eerste inrichting", "Voorbereidende werkzaamheden"],
    uitdaging: "Tight planning voor opening, hoge hygieneeisen voor zorgomgeving",
    oplossing: "Dedicated projectteam, gefaseerde aanpak, kwaliteitscontrole per ruimte",
    resultaat: "On-time oplevering, direct operationeel zonder nawerk",
    testimonial: {
      quote: "Dankzij BWS konden we op tijd openen. Hun grondige aanpak heeft ons veel hoofdpijn bespaard.",
      auteur: "Robert Smeets",
      functie: "Projectdirecteur De Zorgboog"
    }
  },
  {
    id: 6,
    titel: "VanDer Valk Hotel Amsterdam",
    categorie: "Hospitality",
    locatie: "Amsterdam",
    oppervlakte: "8.000 m²",
    periode: "2016 - Heden",
    beschrijving: "Complete housekeeping en publieke ruimte onderhoud voor 4-sterren hotel. Dagelijks 300+ kamers en uitgebreide horeca faciliteiten.",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=500&fit=crop",
    diensten: ["Housekeeping", "Horeca schoonmaak", "Textielzorg", "Guest experience support"],
    uitdaging: "Hoge omloopsnelheid kamers, diverse gasten verwachtingen, 24/7 operations",
    oplossing: "Dedicated housekeeping teams, quality scoring system, guest feedback integration",
    resultaat: "4.6/5 gemiddelde score voor 'cleanliness' op booking platforms",
    testimonial: {
      quote: "Onze gasten complimenteren ons regelmatig over de netheid. BWS is een betrouwbare partner in onze gastvrijheid.",
      auteur: "Marina Koenders",
      functie: "Algemeen Manager Van der Valk Amsterdam"
    }
  }
];

const statistieken = [
  { label: "Lopende Projecten", waarde: "50+", beschrijving: "Actieve langetermijn contracten" },
  { label: "Tevreden Klanten", waarde: "500+", beschrijving: "Sinds oprichting in 2008" },
  { label: "M² Onderhouden", waarde: "2M+", beschrijving: "Totaal oppervlakte per maand" },
  { label: "Gemiddelde Samenwerking", waarde: "5.5 jaar", beschrijving: "Langdurige partnerships" }
];

export default function ProjectenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-[120px] md:pt-[140px] pb-20 bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--accent)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Onze Projecten & Succesverhalen
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              15+ jaar expertise in de meest uitdagende schoonmaakprojecten. 
              Van ziekenhuizen tot kantoorgebouwen - ontdek hoe wij impact maken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projecten" className="btn-white">
                Bekijk projecten
              </a>
              <a href="/contact" className="btn-white-outline">
                Start uw project
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-[color:var(--light-bg)]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistieken.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[color:var(--primary)] mb-2">
                  {stat.waarde}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.beschrijving}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projecten" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Uitgelichte Projecten
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Elk project is uniek, maar onze aanpak blijft consistent: luisteren naar uw behoeften, 
              ontwikkelen van maatoplossingen, en leveren van uitzonderlijke resultaten.
            </p>
          </div>

          <div className="space-y-16">
            {projecten.map((project, index) => (
              <div key={project.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative h-80 rounded-2xl overflow-hidden shadow-lg ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={project.image}
                    alt={project.titel}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-2">
                      {project.categorie}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{project.titel}</h3>
                  </div>
                </div>

                {/* Project Details */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                      <div>
                        <span className="font-medium text-gray-900">Locatie:</span> {project.locatie}
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Oppervlakte:</span> {project.oppervlakte}
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Periode:</span> {project.periode}
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Categorie:</span> {project.categorie}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.beschrijving}
                  </p>

                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Geleverde diensten</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.diensten.map((dienst, idx) => (
                        <span key={idx} className="px-3 py-1 bg-[color:var(--primary)]/10 text-[color:var(--primary)] text-sm font-medium rounded-full">
                          {dienst}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Challenge, Solution, Result */}
                  <div className="space-y-4 mb-6">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h5 className="font-semibold text-red-800 mb-2">💡 Uitdaging</h5>
                      <p className="text-red-700 text-sm">{project.uitdaging}</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-800 mb-2">🔧 Oplossing</h5>
                      <p className="text-blue-700 text-sm">{project.oplossing}</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h5 className="font-semibold text-green-800 mb-2">✅ Resultaat</h5>
                      <p className="text-green-700 text-sm">{project.resultaat}</p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <blockquote className="text-gray-700 italic mb-4">
                      "{project.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[color:var(--primary)] rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {project.testimonial.auteur.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{project.testimonial.auteur}</div>
                        <div className="text-sm text-gray-600">{project.testimonial.functie}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-[color:var(--light-bg)]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Onze Expertise per Sector
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Elke sector heeft zijn eigen uitdagingen en eisen. Onze gespecialiseerde teams 
              beschikken over de specifieke kennis en certificeringen per sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                sector: "Zorg & Medisch",
                beschrijving: "HACCP-gecertificeerd, hygiëneprotocollen, 24/7 beschikbaar",
                icoon: "🏥",
                projecten: 12,
                certificering: "HACCP, RIVM richtlijnen"
              },
              {
                sector: "Onderwijs",
                beschrijving: "Kindallergie bewust, flexibele planning rond lesroosters",
                icoon: "🎓",
                projecten: 25,
                certificering: "Allergeenvrije producten"
              },
              {
                sector: "Kantoren & Bedrijven",
                beschrijving: "Representatief, efficiënt, minimale verstoring",
                icoon: "🏢",
                projecten: 150,
                certificering: "ISO 9001, duurzaamheid"
              },
              {
                sector: "Retail & Horeca",
                beschrijving: "HACCP-conform, hoge frequentie, flexibele tijden",
                icoon: "🛒",
                projecten: 80,
                certificering: "HACCP, food safety"
              },
              {
                sector: "Industrie",
                beschrijving: "Veiligheidsprotocollen, gespecialiseerde reiniging",
                icoon: "🏭",
                projecten: 30,
                certificering: "VCA, milieunormen"
              },
              {
                sector: "Hospitality",
                beschrijving: "Gastgerichte service, premium standaarden",
                icoon: "🏨",
                projecten: 15,
                certificering: "Hotel standaarden"
              }
            ].map((sector, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{sector.icoon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{sector.sector}</h3>
                <p className="text-gray-600 text-sm mb-4 text-center leading-relaxed">{sector.beschrijving}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Actieve projecten:</span>
                    <span className="font-semibold text-[color:var(--primary)]">{sector.projecten}+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Certificering:</span>
                    <span className="font-semibold text-gray-900">{sector.certificering}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor uw volgende project?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Van kleine kantoorruimtes tot complexe ziekenhuizen - wij hebben de expertise 
            en ervaring om uw project tot een succes te maken. Laten we samen uw uitdaging bespreken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white">
              Start uw project
            </Link>
            <Link href="/diensten" className="btn-white-outline">
              Bekijk onze diensten
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
