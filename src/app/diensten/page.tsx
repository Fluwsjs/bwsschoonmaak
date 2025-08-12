"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "kantoor-bedrijfsschoonmaak",
    title: "Kantoor- en bedrijfsschoonmaak",
    description: "De professionele kantoorschoonmaak is de basis voor de dagelijkse werkbeleving.",
    fullDescription: "Professionele dagelijkse en periodieke schoonmaakdiensten voor kantoorpanden zorgen voor een representatieve en productieve werkomgeving. Onze ISO-gecertificeerde teams werken volgens vaste procedures en kwaliteitsstandaarden.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    features: [
      "Dagelijkse kantoorschoonmaak",
      "Periodiek groot onderhoud", 
      "Flexibele planning",
      "ISO-gecertificeerde procedures",
      "Kwaliteitscontrole en rapportage",
      "Milieuvriendelijke producten"
    ],
    benefits: [
      "Representatieve uitstraling",
      "Productieve werkomgeving",
      "Gezonde werkplek",
      "Professionele service"
    ],
    color: "blue"
  },
  {
    id: "gevelreiniging-glasbewassing",
    title: "Gevelreiniging & glasbewassing",
    description: "Specialistische reiniging zorgt voor een solide balans tussen representatie en techniek.",
    fullDescription: "Specialistische reiniging van gevels en glaspuien met professionele hoogwerkapparatuur. Wij zorgen voor optimale representatie van uw bedrijfspand met periodiek onderhoud en professionele uitrusting.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    features: [
      "Professionele hoogwerktechniek",
      "Gevelreiniging alle materialen",
      "Periodiek onderhoudsschema",
      "Veiligheidsprotocollen", 
      "Weersbestendig materiaal",
      "Milieuvriendelijke middelen"
    ],
    benefits: [
      "Representatieve uitstraling",
      "Langere levensduur gevel",
      "Optimale lichtinval",
      "Professionele uitstraling"
    ],
    color: "green"
  },
  {
    id: "sanitair-hygienereiniging",
    title: "Sanitair- en hygiënereiniging",
    description: "Laat je inspireren en begeleiden bij de inzet van juiste hygiëne protocollen.",
    fullDescription: "Grondige reiniging en desinfectie van sanitaire voorzieningen volgens HACCP-richtlijnen voor optimale hygiëne en gezondheid. Inclusief kwaliteitsrapportage en uitgebreid desinfectieprotocol.",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop",
    features: [
      "HACCP-conforme procedures",
      "Uitgebreid desinfectieprotocol",
      "Kwaliteitsrapportage",
      "Hygiëne monitoring",
      "Professionele producten",
      "Compliance documentatie"
    ],
    benefits: [
      "Optimale hygiëne",
      "Gezonde omgeving",
      "Compliance garantie", 
      "Professionele uitvoering"
    ],
    color: "orange"
  },
  {
    id: "vloeronderhoud-coating",
    title: "Vloeronderhoud & coating",
    description: "Professioneel onderhoud en behandeling van alle vloertypen voor langdurige kwaliteit.",
    fullDescription: "Professioneel onderhoud en behandeling van alle vloertypen, inclusief gespecialiseerde coatings en restauratie van hoogwaardige vloeren. Van basis onderhoud tot complete renovatie.",
    image: "https://images.unsplash.com/photo-1558488999-e27a14302a32?w=800&h=600&fit=crop",
    features: [
      "Alle vloertypen onderhoud",
      "Professionele coating",
      "Restauratie mogelijkheden",
      "Beschermende behandelingen",
      "Onderhoudsprogramma's",
      "Garantie op werkzaamheden"
    ],
    benefits: [
      "Langere levensduur",
      "Representatief uiterlijk",
      "Kostenbesparend",
      "Professioneel resultaat"
    ],
    color: "purple"
  },
  {
    id: "oplevering-nieuwbouw",
    title: "Oplevering na nieuwbouw",
    description: "Specialistische eindschoonmaak voor perfect afgewerkte nieuwbouwprojecten.",
    fullDescription: "Specialistische eindschoonmaak na bouwprojecten en renovaties, inclusief verwijdering van bouwresten en stofvrije oplevering. Perfect voor nieuwbouw, verbouwingen en renovaties.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    features: [
      "Stofvrije oplevering",
      "Bouwresidu verwijdering",
      "Detailreiniging",
      "Opleverschoonmaak",
      "Beschermende folie verwijdering",
      "Eindcontrole kwaliteit"
    ],
    benefits: [
      "Direct bewoonbaar",
      "Perfecte afwerking",
      "Professioneel resultaat",
      "Tijdsbesparing"
    ],
    color: "indigo"
  },
  {
    id: "huishoudelijke-hulp",
    title: "Huishoudelijke hulp",
    description: "Persoonlijke ondersteuning voor een schoon en comfortabel thuis.",
    fullDescription: "Professionele huishoudelijke hulp voor particulieren. Van wekelijkse schoonmaak tot intensieve voorjaarsschoonmaak. Flexibel en betrouwbaar voor uw persoonlijke wensen.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
    features: [
      "Wekelijkse schoonmaak",
      "Flexibele planning",
      "Persoonlijke aanpak",
      "Betrouwbare medewerkers",
      "Eigen schoonmaakmiddelen",
      "Verzekerde service"
    ],
    benefits: [
      "Meer vrije tijd",
      "Schoon en comfortabel thuis",
      "Professionele kwaliteit",
      "Gemoedsrust"
    ],
    color: "pink"
  }
];

const getColorClasses = (color: string) => {
  const colorMap = {
    blue: { bg: "bg-blue-50", accent: "text-blue-600", button: "bg-blue-600 hover:bg-blue-700" },
    green: { bg: "bg-green-50", accent: "text-green-600", button: "bg-green-600 hover:bg-green-700" },
    orange: { bg: "bg-orange-50", accent: "text-orange-600", button: "bg-orange-600 hover:bg-orange-700" },
    purple: { bg: "bg-purple-50", accent: "text-purple-600", button: "bg-purple-600 hover:bg-purple-700" },
    indigo: { bg: "bg-indigo-50", accent: "text-indigo-600", button: "bg-indigo-600 hover:bg-indigo-700" },
    pink: { bg: "bg-pink-50", accent: "text-pink-600", button: "bg-pink-600 hover:bg-pink-700" }
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.blue;
};

export default function DienstenPage() {
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
              ONZE DIENSTEN
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Professionele schoonmaakdiensten voor{" "}
              <span className="text-blue-600">elke situatie.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Van kantoorschoonmaak tot specialistische projecten. Wij bieden maatwerkoplossingen 
              voor bedrijven en particulieren in Wijchen en omgeving.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="container px-4 sm:px-6">
          <div className="space-y-20 lg:space-y-32">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="scroll-mt-24"
                >
                  <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    
                    {/* Content */}
                    <div className={!isEven ? 'lg:col-start-2' : ''}>
                      <div className={`${colors.bg} rounded-2xl p-8 lg:p-12`}>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                          {service.title}
                        </h2>
                        
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                          {service.fullDescription}
                        </p>

                        {/* Features */}
                        <div className="mb-8">
                          <h3 className="font-semibold text-gray-900 mb-4">Wat wij bieden:</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-3">
                                <div className={`w-2 h-2 ${colors.button.split(' ')[0]} rounded-full`}></div>
                                <span className="text-gray-700 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="mb-8">
                          <h3 className="font-semibold text-gray-900 mb-4">Uw voordelen:</h3>
                          <div className="flex flex-wrap gap-2">
                            {service.benefits.map((benefit, idx) => (
                              <span 
                                key={idx}
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-gray-700 border border-gray-200"
                              >
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <a 
                          href="/contact"
                          className={`inline-flex items-center gap-2 ${colors.button} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                        >
                          Vraag offerte aan
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Image */}
                    <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                      <div className="relative">
                        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                          <Image
                            src={service.image}
                            alt={service.title}
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
              PLAN EEN VRIJBLIJVEND ADVIESGESPREK
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Welke schoonmaakoplossing past bij uw situatie?
          </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Laat ons weten wat uw wensen zijn. Wij denken graag mee en maken een passende offerte op maat.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Plan een gesprek
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