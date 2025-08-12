"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projecten = [
  {
    id: 1,
    titel: "Kantoorcomplex Wijchen Centrum", 
    omschrijving: "Complete herinrichting schoonmaakproces voor modern kantoorcomplex met 150 werkplekken.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    sector: "Kantoren",
    oppervlakte: "3.500 m²",
    duur: "6 maanden",
    resultaten: [
      "98% klanttevredenheid na implementatie",
      "30% kostenbesparing door efficiënte planning", 
      "Zero-waste doelstelling behaald",
      "ISO 14001 certificering behouden"
    ],
    uitdagingen: "Complex building met veel verschillende ruimtezones en hoge hygiëne-eisen.",
    oplossing: "Ontwikkeling van een gezoneerd schoonmaakschema met specialistische teams per zone.",
    testimonial: {
      quote: "BWS heeft ons kantoorgebouw van 3.500m² omgetoverd! Supersnel, grondig en altijd betrouwbaar.",
      name: "Mark Hendriks",
      role: "Facility Manager"
    }
  },
  {
    id: 2,
    titel: "Zorgcentrum De Linde",
    omschrijving: "HACCP-conforme schoonmaak implementatie voor zorgcentrum met 200 bewoners.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    sector: "Zorgcentra", 
    oppervlakte: "5.200 m²",
    duur: "12 maanden",
    resultaten: [
      "100% compliance met HACCP-richtlijnen",
      "Significante verbetering hygiëne scores",
      "15% reductie ziekteverspreiding",
      "Positive feedback van bewoners en familie"
    ],
    uitdagingen: "Strikte hygiëne-eisen en continuïteit van zorg tijdens schoonmaakwerkzaamheden.",
    oplossing: "24/7 beschikbaar team met gespecialiseerde HACCP-training en flexibele planning.",
    testimonial: {
      quote: "De kwaliteit van BWS is uitstekend. Ze begrijpen echt wat er nodig is voor een professionele zorgomgeving.",
      name: "Sandra van der Berg",
      role: "Operations Director"
    }
  },
  {
    id: 3,
    titel: "Restaurant De Herberg",
    omschrijving: "Complete keuken- en restaurantreiniging volgens horeca-standaarden.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    sector: "Horeca",
    oppervlakte: "800 m²", 
    duur: "Ongoing - 3 jaar",
    resultaten: [
      "100% NVWA-goedkeuring bij alle inspecties",
      "Verbetering online reviews van 3.8 naar 4.7",
      "Zero food safety incidenten",
      "Verlengd contract voor 3 jaar"
    ],
    uitdagingen: "Werken buiten openingstijden en strikte food safety requirements.",
    oplossing: "Nachtelijke reiniging met gespecialiseerd horecateam en HACCP-gecertificeerde procedures.",
    testimonial: {
      quote: "BWS denkt mee in oplossingen. Ze zijn flexibel, betrouwbaar en werken altijd met een glimlach.",
      name: "Robert Jansen", 
      role: "Restauranteigenaar"
    }
  },
  {
    id: 4,
    titel: "Basisschool De Regenboog",
    omschrijving: "Dagelijkse schoonmaak met focus op kindveilige producten en procedures.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
    sector: "Onderwijs",
    oppervlakte: "2.100 m²",
    duur: "5 jaar",
    resultaten: [
      "95% tevredenheid bij ouders en leerkrachten",
      "50% minder ziekteverzuim door betere hygiëne",
      "Kindveilige producten 100% van de tijd",
      "Flexibele planning rond schoolactiviteiten"
    ],
    uitdagingen: "Schoonmaken rond 400 kinderen met kindveilige producten en materialen.",
    oplossing: "Speciaal opgeleide teams met kindveilige producten en flexibele werkschema's.",
    testimonial: {
      quote: "BWS zorgt ervoor dat onze school elke dag schoon en veilig is voor onze 400 leerlingen.",
      name: "Maria Visser",
      role: "Schooldirecteur"
    }
  },
  {
    id: 5,
    titel: "Nieuwbouw Bedrijfspand Technopark",
    omschrijving: "Opleverschoonmaak voor gloednieuw 4-verdiepingen tellend bedrijfspand.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    sector: "Nieuwbouw",
    oppervlakte: "6.000 m²",
    duur: "3 weken",
    resultaten: [
      "Perfecte oplevering binnen deadline",
      "Zero defects bij eindcontrole",
      "Direct bewoonbaar zonder nazorg",
      "Opdrachtgever kiest BWS voor volgend project"
    ],
    uitdagingen: "Strakke deadline en perfecte afwerking vereist voor bedrijfsopening.",
    oplossing: "Dedicated team van 12 specialists met gespecialiseerde nieuwbouw-equipment.",
    testimonial: {
      quote: "BWS heeft ons nieuwe pand perfect opgeleverd. Elke vierkante meter was brandschoon.",
      name: "Tom de Vries",
      role: "Projectmanager"
    }
  },
  {
    id: 6,
    titel: "Winkelcentrum Passage Wijchen",
    omschrijving: "Nachtelijke schoonmaak van winkelcentrum met 45 winkels en gemeenschappelijke ruimtes.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    sector: "Retail",
    oppervlakte: "8.500 m²", 
    duur: "24 maanden",
    resultaten: [
      "Significante verbetering van shopping experience",
      "15% stijging in bezoekers volgens eigenaar",
      "100% on-time performance",
      "Verlengd contract voor 2 extra jaren"
    ],
    uitdagingen: "Grote oppervlakte schoonmaken tussen 22:00 en 06:00 zonder overlast.",
    oplossing: "Gecoördineerd team van 15 personen met stille apparatuur en efficiënte routes.",
    testimonial: {
      quote: "BWS zorgt ervoor dat ons winkelcentrum elke ochtend perfect schoon is voor onze bezoekers.",
      name: "Linda Bakker",
      role: "Centermanager"
    }
  }
];

export default function ProjectenPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white pt-[120px] sm:pt-[140px] pb-20 lg:pb-24">
        <div className="container px-4 sm:px-6">
          {/* BWS Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium border border-blue-100">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">BWS</span>
              </div>
              ONZE PROJECTEN
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Bewezen resultaten in{" "}
              <span className="text-blue-600">de praktijk.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed mb-8"
            >
              Van kantoorgebouwen tot zorgcentra, van scholen tot restaurants. 
              Ontdek hoe wij onze klanten hebben geholpen met professionele schoonmaakoplossingen.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projecten voltooid</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">Klanttevredenheid</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                <div className="text-gray-600">Jaar ervaring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Service</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="container px-4 sm:px-6">
          <div className="space-y-20 lg:space-y-32">
            {projecten.map((project, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    
                    {/* Content */}
                    <div className={!isEven ? 'lg:col-start-2' : ''}>
                      <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
                        {/* Project Header */}
                        <div className="flex items-center gap-4 mb-6">
                          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                            {project.sector}
                          </span>
                          <span className="text-gray-500 text-sm">
                            {project.oppervlakte} • {project.duur}
                          </span>
                        </div>
                        
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                          {project.titel}
                        </h2>
                        
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                          {project.omschrijving}
                        </p>

                        {/* Challenge & Solution */}
                        <div className="mb-8 space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Uitdaging:</h4>
                            <p className="text-gray-600 text-sm">{project.uitdagingen}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Oplossing:</h4>
                            <p className="text-gray-600 text-sm">{project.oplossing}</p>
                          </div>
                        </div>

                        {/* Results */}
                        <div className="mb-8">
                          <h4 className="font-semibold text-gray-900 mb-4">Behaalde resultaten:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {project.resultaten.map((resultaat, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700 text-sm">{resultaat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-gray-50 rounded-xl p-6">
                          <blockquote className="text-gray-700 italic mb-4">
                            "{project.testimonial.quote}"
                          </blockquote>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-bold text-sm">
                                {project.testimonial.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{project.testimonial.name}</div>
                              <div className="text-sm text-gray-600">{project.testimonial.role}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                      <div className="relative">
                        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                          <Image
                            src={project.image}
                            alt={project.titel}
                            fill
                            className="object-cover"
                          />
                        </div>
                        

                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-blue-50 rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto"
          >
            <div className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wide">
              START UW PROJECT
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Klaar om uw eigen succesverhaal te schrijven?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Vertel ons over uw uitdaging en wij denken mee aan de beste oplossing. 
              Van planning tot uitvoering, wij zorgen voor resultaat.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start uw project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a 
                href="tel:+31638935230"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-gray-200 hover:border-gray-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Bel direct: 06 38935230
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}