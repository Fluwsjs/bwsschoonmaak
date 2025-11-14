"use client";

import { motion } from "framer-motion";

const indicators = [
  {
    title: "15+ jaar ervaring",
    description: "Jarenlange expertise in professionele schoonmaakdiensten"
  },
  {
    title: "ISO-gecertificeerd",
    description: "Gecertificeerde kwaliteitsstandaarden en procedures"
  },
  {
    title: "500+ tevreden klanten",
    description: "Bewezen trackrecord met vele gelukkige bedrijven"
  },
  {
    title: "Milieuvriendelijk",
    description: "100% duurzame en ecologische schoonmaakmiddelen"
  }
];

export default function TrustIndicators() {
  return (
    <section className="section bg-white py-24 lg:py-32">
      <div className="container px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {indicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <motion.div 
                className="bg-white p-4 sm:p-6 lg:p-8 h-full flex flex-col items-center justify-center transition-all duration-300 border border-gray-100 group-hover:border-[color:var(--secondary)] card-float"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                }}
                whileHover={{ 
                  y: -8,
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                  transition: { duration: 0.3 }
                }}
              >
                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-200 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                
                {/* Title */}
                <h3 className="font-semibold text-xs sm:text-sm lg:text-base mb-1 sm:mb-2 text-center" style={{ color: 'var(--accent)' }}>
                  {indicator.title}
                </h3>
                
                {/* Description */}
                <p className="text-[10px] sm:text-xs text-gray-600 leading-snug text-center">
                  {indicator.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
