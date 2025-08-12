"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { COMPANY_INFO } from "@/lib/constants";

const contactMethods = [
  {
    title: "Bel ons direct",
    description: "Voor spoedgevallen en directe vragen",
    icon: "📞",
    value: COMPANY_INFO.contact.phone,
    href: `tel:${COMPANY_INFO.contact.phoneRaw}`,
    available: "Ma-Vr 8:00-18:00, Weekend op afspraak"
  },
  {
    title: "Stuur een email",
    description: "Voor uitgebreide vragen en offertes",
    icon: "✉️",
    value: COMPANY_INFO.contact.email,
    href: `mailto:${COMPANY_INFO.contact.email}`,
    available: "Binnen 24 uur reactie"
  },
  {
    title: "Kom langs",
    description: "Voor een persoonlijk gesprek",
    icon: "📍",
    value: COMPANY_INFO.contact.address.full,
    href: `https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.contact.address.full)}`,
    available: "Op afspraak"
  }
];

const faqs = [
  {
    question: "Wat kost een schoonmaakbeurt?",
    answer: "De kosten zijn afhankelijk van de grootte van de ruimte, frequentie en specifieke wensen. Wij maken graag een vrijblijvende offerte op maat voor uw situatie."
  },
  {
    question: "Hoe snel kunnen jullie beginnen?",
    answer: "Voor spoedklussen kunnen wij vaak binnen 24 uur ter plaatse zijn. Voor reguliere schoonmaak plannen we meestal binnen 1-2 weken in."
  },
  {
    question: "Zijn jullie verzekerd?",
    answer: "Ja, wij zijn volledig verzekerd voor aansprakelijkheid en schade. Onze verzekeringspapieren kunnen we op verzoek ter inzage geven."
  },
  {
    question: "Gebruiken jullie milieuvriendelijke producten?",
    answer: "Absoluut! Wij werken uitsluitend met gecertificeerde, milieuvriendelijke schoonmaakmiddelen die veilig zijn voor mens en milieu."
  },
  {
    question: "Kan ik een proefschoonmaak krijgen?",
    answer: "Ja, voor nieuwe klanten bieden wij graag een proefschoonmaak aan zodat u onze kwaliteit kunt ervaren voordat u een contract aangaat."
  },
  {
    question: "Werken jullie ook in het weekend?",
    answer: "Voor bepaalde diensten en spoedgevallen werken wij ook in het weekend. Dit plannen we altijd in overleg en tegen een weekendtoeslag."
  }
];

export default function ContactPage() {
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
              CONTACT
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
                Laten we{" "}
                <span className="text-blue-600">praten</span> over uw schoonmaakwensen.
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Heeft u vragen over onze diensten of wilt u een vrijblijvende offerte? 
                Wij staan klaar om u te helpen. Kies de manier van contact die het beste bij u past.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">24u</div>
                  <div className="text-gray-600 text-sm">Reactietijd</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">15+</div>
                  <div className="text-gray-600 text-sm">Jaar ervaring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">98%</div>
                  <div className="text-gray-600 text-sm">Tevredenheid</div>
                </div>
              </div>

              {/* Direct CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+31638935230"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Bel direct: 06 38935230
                </a>
                
                <a 
                  href="mailto:info@bwsschoonmaak.nl"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-gray-200 hover:border-gray-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Stuur email
                </a>
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
                    src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&h=600&fit=crop"
                    alt="Contact BWS Schoonmaak"
                    fill
                    className="object-cover"
                  />
                </div>
                

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
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
              KIES UW VOORKEUR
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Hoe wilt u contact met ons opnemen?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 text-center block"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="font-medium text-blue-600 mb-2 group-hover:text-blue-700 transition-colors">
                  {method.value}
                </div>
                <div className="text-sm text-gray-500">{method.available}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              VEELGESTELDE VRAGEN
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Antwoorden op uw vragen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hier vindt u antwoorden op de meest gestelde vragen. Staat uw vraag er niet bij? 
              Neem gerust contact met ons op.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Vraag een offerte aan
                </h2>
                
                <form className="space-y-6" name="contact" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                        Naam *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 bg-white"
                        placeholder="Uw volledige naam"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 bg-white"
                        placeholder="Uw telefoonnummer"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 bg-white"
                      placeholder="uw.email@voorbeeld.nl"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2">
                      Type dienst
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 bg-white"
                    >
                      <option value="">Selecteer een dienst</option>
                      <option value="kantoorschoonmaak">Kantoorschoonmaak</option>
                      <option value="glasbewassing">Glasbewassing</option>
                      <option value="hygiene">Hygiëne & Desinfectie</option>
                      <option value="vloeronderhoud">Vloeronderhoud</option>
                      <option value="nieuwbouw">Oplevering nieuwbouw</option>
                      <option value="huishoudelijk">Huishoudelijke hulp</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                      Bericht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 bg-white resize-none"
                      placeholder="Vertel ons over uw schoonmaakwensen, frequentie, m² oppervlakte, etc."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Verstuur aanvraag
                  </button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    Wij reageren binnen 24 uur op uw aanvraag
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Right Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Office Hours */}
              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Openingstijden</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Maandag - Vrijdag</span>
                    <span className="font-medium text-gray-900">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Zaterdag</span>
                    <span className="font-medium text-gray-900">9:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Zondag</span>
                    <span className="font-medium text-gray-900">Op afspraak</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-sm text-gray-600">
                    <strong>Spoedgevallen:</strong> Voor spoedklussen zijn wij 24/7 bereikbaar 
                    via telefonisch contact.
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="bg-green-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Locatie</h3>
                <div className="space-y-2 mb-6">
                  <p className="text-gray-900 font-medium">{COMPANY_INFO.contact.address.street}</p>
                  <p className="text-gray-600">{COMPANY_INFO.contact.address.postalCode} {COMPANY_INFO.contact.address.city}</p>
                </div>
                
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.contact.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Bekijk op Google Maps
                </a>
              </div>

              {/* Guarantee */}
              <div className="bg-orange-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Onze garantie</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">100% tevredenheidsgarantie</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Verzekerd en geborgd</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Gratis proefschoonmaak</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}