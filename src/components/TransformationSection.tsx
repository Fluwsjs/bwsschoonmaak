"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TransformationSection() {
  return (
    <section className="section relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: '#f8f9fb' }}>

      <div className="container relative z-10 px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-sm font-medium mb-4 uppercase tracking-wide text-gray-600">
            ONZE WERKWIJZE
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-8" style={{ color: 'var(--accent)' }}>
            Specialist in zakelijke schoonmaak – al 20 jaar
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-5 sm:space-y-6 mb-6 sm:mb-8">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                Een schone werkplek is essentieel voor productiviteit en een professionele uitstraling. Ons familiebedrijf is al 20 jaar dé betrouwbare partner voor bedrijven die waarde hechten aan kwaliteit, continuïteit en persoonlijke service.
              </p>

              {/* Service Points */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-green-600 font-bold text-lg sm:text-xl mt-0.5 sm:mt-1 flex-shrink-0">✔</span>
                  <p className="text-sm sm:text-base leading-relaxed text-gray-700">Kantoor- en bedrijfsruimtes</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-green-600 font-bold text-lg sm:text-xl mt-0.5 sm:mt-1 flex-shrink-0">✔</span>
                  <p className="text-sm sm:text-base leading-relaxed text-gray-700">Periodiek onderhoud en specialistische reiniging</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-green-600 font-bold text-lg sm:text-xl mt-0.5 sm:mt-1 flex-shrink-0">✔</span>
                  <p className="text-sm sm:text-base leading-relaxed text-gray-700">Duurzame middelen en moderne technieken</p>
                </div>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-gray-700 mt-5 sm:mt-6">
                Wij werken efficiënt, discreet en altijd op maat. Zo kunt u zich volledig richten op uw business, terwijl wij zorgen voor een frisse en representatieve werkomgeving.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden image-overlay image-zoom"
                 style={{
                   borderRadius: '12px',
                   boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                 }}>
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=800&fit=crop"
                alt="Professioneel schoonmaakteam"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
