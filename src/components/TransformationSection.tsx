"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const transformationAreas = [
  {
    letter: "P",
    title: "Planning",
    description: "Elke ruimte is uniek en heeft specifieke schoonmaakbehoeften. Wij maken een persoonlijk schoonmaakplan dat perfect aansluit bij uw wensen en budget."
  },
  {
    letter: "U", 
    title: "Uitvoering",
    description: "Onze ervaren teams zorgen voor consistente kwaliteit met professionele apparatuur en milieuvriendelijke middelen. Betrouwbaar en volgens afspraak."
  },
  {
    letter: "C",
    title: "Controle", 
    description: "Kwaliteitscontrole en tevredenheid staan centraal. Wij monitoren onze service en passen aan waar nodig, zodat u altijd tevreden bent met het resultaat."
  }
];

export default function TransformationSection() {
  return (
    <section className="section relative py-20 lg:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        ></div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-sm font-medium text-blue-300 mb-4 uppercase tracking-wide">
            ONZE WERKWIJZE
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            Van eerste contact tot een{" "}
            <span className="text-orange-400">langdurige samenwerking.</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-blue-100 text-lg leading-relaxed mb-12">
              Goede schoonmaak begint met begrip van uw specifieke behoeften. Wij werken volgens een bewezen methode die zorgt voor consistente kwaliteit en tevreden klanten. Van de eerste kennismaking tot jarenlange samenwerking - bij BWS weet u wat u kunt verwachten.
            </p>

            {/* Transformation Areas */}
            <div className="space-y-8">
              {transformationAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Letter Badge */}
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{area.letter}</span>
                    </div>
                    
                    <div>
                      <h3 className="text-white font-bold text-xl mb-3">{area.title}</h3>
                      <p className="text-blue-100 leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=800&fit=crop"
                alt="Professional cleaning team providing quality service"
                fill
                className="object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
