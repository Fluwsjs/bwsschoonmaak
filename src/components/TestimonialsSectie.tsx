'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Mark Hendriks",
    role: "Facility Manager",
    company: "TechBedrijf Wijchen",
    review: "BWS heeft ons kantoorgebouw van 3.500m² omgetoverd! Supersnel, grondig en altijd betrouwbaar. Ons personeel is echt blij met de schone werkomgeving.",
    rating: 5,
    highlight: "3.500m² in 2 dagen"
  },
  {
    name: "Sandra van der Berg",
    role: "Huiseigenaar", 
    company: "Wijchen Noord",
    review: "Na een waterschade had ik BWS nodig voor een spoedklus. Binnen 4 uur ter plaatse en binnen 1 dag was alles weer perfect! Echt ongelooflijk wat zij kunnen.",
    rating: 5,
    highlight: "Spoedklus in 4 uur"
  },
  {
    name: "Robert Jansen",
    role: "Restauranteigenaar",
    company: "Restaurant De Linde",
    review: "Al 3 jaar laat ik BWS mijn restaurant schoonmaken. Ze begrijpen de horeca en werken buiten openingstijden. Kwaliteit is altijd top, prijs eerlijk.",
    rating: 5,
    highlight: "3 jaar vaste klant"
  }
];

export default function TestimonialsSectie() {
  return (
    <section className="section bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>⭐</span>
            4.9 gemiddelde beoordeling
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Wat onze klanten <span className="text-[color:var(--primary)]">écht</span> zeggen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            🗣️ Geen gefabriceerde reviews - dit zijn echte verhalen van échte klanten uit Wijchen en omgeving
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-[color:var(--primary)]/20"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              {/* Highlight Badge */}
              <div className="inline-flex items-center gap-2 bg-[color:var(--primary)]/10 text-[color:var(--primary)] px-3 py-1 rounded-full text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-[color:var(--primary)] rounded-full"></span>
                {testimonial.highlight}
              </div>

              {/* Review */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.review}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--secondary)] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-gray-500">{testimonial.company}</div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Geverifieerde Google review
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🚀 Word jij onze volgende tevreden klant?
            </h3>
            <p className="text-gray-600 mb-6">
              Bel direct voor een vrijblijvende offerte en ervaar zelf waarom 500+ klanten ons vertrouwen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+31638935230" 
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold"
              >
                📞 Bel direct: 06 38935230
              </a>
              <a 
                href="#contact" 
                className="btn-outline inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold"
              >
                ✉️ Vraag offerte aan
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
