"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const testimonials = [
  {
    quote: "BWS Schoonmaak zorgt al jaren voor ons kantoor. Het team is professioneel, grondig en betrouwbaar. De kwaliteit is consistent en de communicatie uitstekend.",
    author: "Jan de Vries",
    company: "Media Solutions B.V.",
    rating: 5,
    avatar: "/images/avatars/jan-devries.jpg",
    role: "Facility Manager"
  },
  {
    quote: "Sinds we samenwerken met BWS Schoonmaak is ons restaurant altijd perfect schoon. De hygiëne is enorm verbeterd en onze gasten complimenteren ons regelmatig.",
    author: "Laura Jansen", 
    company: "Stadscafé Amsterdam",
    rating: 5,
    avatar: "/images/avatars/laura-jansen.jpg",
    role: "Eigenaar"
  },
  {
    quote: "Flexibel, betrouwbaar en altijd bereikbaar. BWS past zich aan onze wisselende behoeften aan en denkt proactief mee in oplossingen.",
    author: "Mark Hendriks",
    company: "TechStart B.V.",
    rating: 5,
    avatar: "/images/avatars/mark-hendriks.jpg",
    role: "Office Manager"
  }
];

export default function CtaSectie() {
  return (
    <section className="py-20 md:py-28 bg-[color:var(--primary)] text-white relative overflow-hidden mt-0">
      {/* Decoratieve elementen */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[color:var(--accent)] opacity-10 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            variants={fadeIn}
            className="max-w-2xl"
          >
            <motion.span variants={fadeIn} className="badge-white mb-4 text-sm font-medium">
              Neem contact op
            </motion.span>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-4">
              Klaar voor een stralend schone omgeving?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-white/90 mb-8">
              Neem vandaag nog contact met ons op voor een vrijblijvende offerte. 
              Wij denken graag met u mee over de beste schoonmaakoplossing voor uw situatie.
            </motion.p>
            
            {/* Enhanced Testimonials */}
            <motion.div variants={fadeIn} className="mb-8 space-y-6">
              {testimonials.slice(0, 2).map((testimonial, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/15 p-6 rounded-xl backdrop-blur-md border border-white/20 shadow-lg"
                >
                  <div className="flex items-start mb-4">
                    <div className="flex text-yellow-300">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="italic text-white/95 mb-4 text-sm leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center border border-white/20">
                      <span className="text-sm font-bold text-white">
                        {testimonial.author.split(' ').map(name => name[0]).join('')}
                      </span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-white">{testimonial.author}</p>
                      <p className="text-xs text-white/80">{testimonial.role} - {testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-white-outline">
                Contact opnemen
              </Link>
              <Link href="/offerte" className="btn-white">
                Offerte aanvragen
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            variants={fadeIn}
            className="bg-white text-gray-800 p-6 lg:p-8 rounded-lg shadow-lg max-w-md mx-auto lg:mx-0 w-full"
          >
            <h3 className="text-xl font-semibold mb-3">Snelle reactie gegarandeerd</h3>
            <p className="text-gray-600 mb-6">
              Wij streven ernaar om binnen 24 uur te reageren op uw aanvraag.
              Vul onderstaand formulier in of bel ons direct.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="p-4 border border-gray-200 rounded-lg flex items-start">
                <svg className="w-5 h-5 text-[color:var(--primary)] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div>
                  <h4 className="font-medium text-gray-900">Bel ons direct</h4>
                  <p className="text-gray-600">020 - 123 4567</p>
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg flex items-start">
                <svg className="w-5 h-5 text-[color:var(--primary)] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div>
                  <h4 className="font-medium text-gray-900">E-mail ons</h4>
                  <p className="text-gray-600">info@bwsschoonmaak.nl</p>
                </div>
              </div>
            </div>
            
            <ul className="space-y-3 mb-4">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[color:var(--primary)] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Vrijblijvende offerte</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[color:var(--primary)] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Persoonlijk advies</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[color:var(--primary)] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Flexibele planning</span>
              </li>
            </ul>
            <p className="text-sm text-gray-500 border-t border-gray-100 pt-4 mt-4">
              Telefonisch bereikbaar op werkdagen van 8:00 tot 17:00
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 