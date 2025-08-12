"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const inspirationItems = [
  {
    category: "PROJECTEN",
    title: "Duurzame schoonmaak draait om meer dan alleen technologie.",
    description: "Duurzame schoonmaak is geen buzzword meer van 5 jaar geleden. Duurzame schoonmaak is anno 2025 nog steeds actueel. Het belang",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    linkText: "Meer lezen"
  },
  {
    category: "TIPS",
    title: "7 redenen waarom het beschrijven van processen belangrijk is.",
    description: "We weten toch wat we moeten doen. Toch? Waarom dan toch verbieden om alle processen uit te schrijven? Goede vraag!",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    linkText: "Meer lezen"
  },
  {
    category: "TRENDS",
    title: "4 tips om succesvol te automatiseren.",
    description: "Automatisering is natuurlijk al lang geen nieuw onderwerp meer - bedrijven automatiseren al jaren routinetaken om tijd te besparen en",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop",
    linkText: "Meer lezen"
  }
];

export default function InspiratieSectie() {
  return (
    <section className="section bg-gray-50 py-20 lg:py-24">
      <div className="container px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wide">
            SHARING IS THE POWER OF KNOWLEDGE
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Laat je inspireren.
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {inspirationItems.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {item.description}
                </p>

                <a 
                  href="/projecten"
                  className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                >
                  {item.linkText}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-blue-50 rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto"
        >
          <div className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wide">
            PLAN EEN VRIJBLIJVEND ADVIESGESPREK
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            In gesprek met een specialist of samen direct aan de slag?
          </h3>
          
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Plan een gesprek
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
