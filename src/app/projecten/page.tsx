"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Phone, Calendar, Ruler } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import PageWrapper from "@/components/PageWrapper";

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
    <PageWrapper>
      <main>
        {/* Hero Section */}
        <section className="bg-white pt-32 pb-20 lg:pb-24">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            {/* BWS Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-3 bg-[#0165f8]/10 text-[#0165f8] px-5 py-2.5 rounded-full text-sm font-semibold border border-[#0165f8]/20">
                <div className="w-7 h-7 bg-gradient-to-br from-[#0165f8] to-[#01cafe] rounded-lg flex items-center justify-center">
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
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', color: '#0E1E40' }}
              >
                Bewezen resultaten in{" "}
                <span className="bg-gradient-to-r from-[#0165f8] to-[#01cafe] bg-clip-text text-transparent">
                  de praktijk
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-700 leading-relaxed mb-12"
                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
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
                  <div 
                    className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0165f8] to-[#01cafe] bg-clip-text text-transparent mb-2"
                    style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                  >
                    500+
                  </div>
                  <div className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                    Projecten voltooid
                  </div>
                </div>
                <div className="text-center">
                  <div 
                    className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0165f8] to-[#01cafe] bg-clip-text text-transparent mb-2"
                    style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                  >
                    98%
                  </div>
                  <div className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                    Klanttevredenheid
                  </div>
                </div>
                <div className="text-center">
                  <div 
                    className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0165f8] to-[#01cafe] bg-clip-text text-transparent mb-2"
                    style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                  >
                    15+
                  </div>
                  <div className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                    Jaar ervaring
                  </div>
                </div>
                <div className="text-center">
                  <div 
                    className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0165f8] to-[#01cafe] bg-clip-text text-transparent mb-2"
                    style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                  >
                    24/7
                  </div>
                  <div className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                    Service
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="bg-[#f8f9fb] py-20 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <div className="space-y-24 lg:space-y-32">
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
                        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
                          {/* Project Header */}
                          <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span 
                              className="bg-gradient-to-r from-[#0165f8]/10 to-[#01cafe]/10 text-[#0165f8] px-4 py-2 rounded-full text-sm font-semibold border border-[#0165f8]/20"
                              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                            >
                              {project.sector}
                            </span>
                            <div className="flex items-center gap-4 text-gray-600 text-sm">
                              <div className="flex items-center gap-2">
                                <Ruler className="w-4 h-4" strokeWidth={2} />
                                <span style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>{project.oppervlakte}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" strokeWidth={2} />
                                <span style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>{project.duur}</span>
                              </div>
                            </div>
                          </div>
                          
                          <h2 
                            className="text-2xl lg:text-3xl font-bold mb-4"
                            style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', color: '#0E1E40' }}
                          >
                            {project.titel}
                          </h2>
                          
                          <p 
                            className="text-lg text-gray-700 mb-8 leading-relaxed"
                            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                          >
                            {project.omschrijving}
                          </p>

                          {/* Challenge & Solution */}
                          <div className="mb-8 space-y-4">
                            <div className="bg-[#f8f9fb] rounded-xl p-5 border border-gray-100">
                              <h4 
                                className="font-bold text-[#0E1E40] mb-2"
                                style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                              >
                                Uitdaging
                              </h4>
                              <p 
                                className="text-gray-600 text-sm leading-relaxed"
                                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                              >
                                {project.uitdagingen}
                              </p>
                            </div>
                            <div className="bg-gradient-to-br from-[#0165f8]/5 to-[#01cafe]/5 rounded-xl p-5 border border-[#0165f8]/10">
                              <h4 
                                className="font-bold text-[#0E1E40] mb-2"
                                style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                              >
                                Onze oplossing
                              </h4>
                              <p 
                                className="text-gray-600 text-sm leading-relaxed"
                                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                              >
                                {project.oplossing}
                              </p>
                            </div>
                          </div>

                          {/* Results */}
                          <div className="mb-8">
                            <h4 
                              className="font-bold text-[#0E1E40] mb-4"
                              style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                            >
                              Behaalde resultaten
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {project.resultaten.map((resultaat, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#0165f8] to-[#01cafe] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={3} />
                                  </div>
                                  <span 
                                    className="text-gray-700 text-sm"
                                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                  >
                                    {resultaat}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Testimonial */}
                          <div className="bg-gradient-to-br from-[#0165f8]/5 to-[#01cafe]/5 rounded-2xl p-6 border border-[#0165f8]/10">
                            <blockquote 
                              className="text-gray-700 italic mb-4 leading-relaxed"
                              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                            >
                              "{project.testimonial.quote}"
                            </blockquote>
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0165f8] to-[#01cafe] flex items-center justify-center">
                                <span 
                                  className="text-white font-bold text-sm"
                                  style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                                >
                                  {project.testimonial.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <div>
                                <div 
                                  className="font-semibold text-[#0E1E40]"
                                  style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                                >
                                  {project.testimonial.name}
                                </div>
                                <div 
                                  className="text-sm text-gray-600"
                                  style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                >
                                  {project.testimonial.role}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Image */}
                      <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          className="relative"
                        >
                          <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                              src={project.image}
                              alt={project.titel}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0165f8]/10 via-transparent to-[#01cafe]/10" />
                          </div>
                        </motion.div>
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
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#0165f8]/10 via-[#01cafe]/5 to-[#0165f8]/10 rounded-3xl p-12 lg:p-16 text-center max-w-4xl mx-auto border border-[#0165f8]/20"
            >
              <div 
                className="text-sm font-semibold text-[#0165f8] mb-4 uppercase tracking-wide"
                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
              >
                START UW PROJECT
              </div>
              <h2 
                className="text-3xl lg:text-4xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', color: '#0E1E40' }}
              >
                Klaar om uw eigen succesverhaal te schrijven?
              </h2>
              <p 
                className="text-lg text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto"
                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
              >
                Vertel ons over uw uitdaging en wij denken mee aan de beste oplossing. 
                Van planning tot uitvoering, wij zorgen voor resultaat.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a 
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0165f8] to-[#01cafe] hover:from-[#01cafe] hover:to-[#0165f8] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                >
                  Start uw project
                  <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                </motion.a>
                
                <motion.a 
                  href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-[#0E1E40] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border-2 border-gray-200 hover:border-[#0165f8]"
                  style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                >
                  <Phone className="w-5 h-5" strokeWidth={2.5} />
                  Bel direct: {COMPANY_INFO.contact.phone}
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
