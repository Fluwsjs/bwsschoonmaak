"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "[Naam Teamlid 1]",
    role: "[Functie/Rol]",
    description: "[Beschrijving van ervaring en expertise. Deze tekst kan later worden aangepast naar de specifieke achtergrond van het teamlid.]",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop&crop=face",
    linkedin: "#"
  },
  {
    name: "[Naam Teamlid 2]",
    role: "[Functie/Rol]", 
    description: "[Beschrijving van ervaring en expertise. Deze tekst kan later worden aangepast naar de specifieke achtergrond van het teamlid.]",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e7?w=400&h=400&fit=crop&crop=face",
    linkedin: "#"
  },
  {
    name: "[Naam Teamlid 3]",
    role: "[Functie/Rol]",
    description: "[Beschrijving van ervaring en expertise. Deze tekst kan later worden aangepast naar de specifieke achtergrond van het teamlid.]",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    linkedin: "#"
  }
];

const values = [
  {
    title: "Betrouwbaarheid",
    description: "Wij staan voor onze afspraken en leveren consistent hoge kwaliteit.",
    icon: "🤝"
  },
  {
    title: "Duurzaamheid", 
    description: "100% milieuvriendelijke producten en procedures voor een schone toekomst.",
    icon: "🌱"
  },
  {
    title: "Kwaliteit",
    description: "ISO-gecertificeerde processen en continue kwaliteitscontrole.",
    icon: "⭐"
  },
  {
    title: "Persoonlijke aanpak",
    description: "Elke klant is uniek en verdient een op maat gemaakte service.",
    icon: "💪"
  }
];

const stats = [
  { number: "15+", label: "Jaar ervaring" },
  { number: "500+", label: "Tevreden klanten" },
  { number: "98%", label: "Klanttevredenheid" },
  { number: "24/7", label: "Bereikbaarheid" }
];

const workAreas = [
  {
    title: "Kantoorgebouwen",
    description: "Van kleine kantoren tot grote bedrijfscomplexen",
    icon: "🏢"
  },
  {
    title: "Zorgcentra",
    description: "Specialistische hygiëne voor zorgorganisaties", 
    icon: "🏥"
  },
  {
    title: "Scholen",
    description: "Veilige en schone leeromgeving voor kinderen",
    icon: "🎓"
  },
  {
    title: "Particulieren",
    description: "Huishoudelijke hulp voor een comfortabel thuis",
    icon: "🏠"
  },
  {
    title: "Restaurants",
    description: "HACCP-conforme reiniging voor horeca",
    icon: "🍽️"
  },
  {
    title: "Winkels",
    description: "Representatieve uitstraling voor retail",
    icon: "🛍️"
  }
];

export default function OverOnsPage() {
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
              WIE WIJ ZIJN
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1]">
                BWS Schoonmaak bestaat voor{" "}
                <span className="text-blue-600">de mens.</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Opgericht in 2008 vanuit de passie voor kwaliteit en service. Wij geloven dat schoonmaak 
                er is om mensen te ondersteunen, niet om in de weg te staan. Daarom stellen wij altijd 
                de mens centraal in alles wat we doen.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-2xl">
                <div className="relative w-full h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                    alt="BWS Schoonmaak team at work"
                    fill
                    className="object-cover"
                  />
                </div>
                

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wide">
              ONZE KERNWAARDEN
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Waar wij voor staan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deze waarden vormen de basis van onze bedrijfscultuur en bepalen hoe wij met elkaar 
              en met onze klanten omgaan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wide">
              ONS TEAM
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              De mensen achter BWS
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ons ervaren team staat elke dag klaar om de beste schoonmaakservice te leveren. 
              Leer de mensen kennen die het verschil maken.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  {/* Photo */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  
                  {/* Info */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-blue-600 font-medium mb-4">{member.role}</div>
                  <p className="text-gray-600 leading-relaxed mb-6">{member.description}</p>
                  
                  {/* LinkedIn */}
                  <a 
                    href={member.linkedin}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Areas Section */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wide">
              WAAR WIJ WERKEN
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Waar ziet u ons aan het werk?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Van kantoorgebouwen tot zorgcentra, van scholen tot particuliere woningen. 
              Wij bieden passende schoonmaakoplossingen voor elke sector.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 text-center"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
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
              LATEN WE KENNISMAKEN
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Klaar om samen te werken?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Wij geloven in persoonlijk contact. Laat ons weten wat uw wensen zijn en 
              wij zorgen voor een passende oplossing.
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