"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DienstenSectie() {
  const diensten = [
    {
      id: 1,
      titel: "Kantoorschoonmaak",
      beschrijving: "Professionele schoonmaak van kantoorruimtes, ongeacht de grootte",
      icon: "/icons/kantoor.svg",
      link: "/diensten#kantoor-bedrijfsschoonmaak"
    },
    {
      id: 2,
      titel: "Bedrijfsschoonmaak",
      beschrijving: "Complete schoonmaakdiensten voor commerciële ruimtes en bedrijfspanden",
      icon: "/icons/bedrijf.svg",
      link: "/diensten#kantoor-bedrijfsschoonmaak"
    },
    {
      id: 3,
      titel: "Glazenwassen",
      beschrijving: "Professionele glazenwasservice voor een stralende uitstraling",
      icon: "/icons/glazenwassen.svg",
      link: "/diensten#gevelreiniging-glasbewassing"
    },
    {
      id: 4,
      titel: "Vloeronderhoud",
      beschrijving: "Specialistische reiniging en onderhoud van alle type vloeren",
      icon: "/icons/vloer.svg",
      link: "/diensten#vloeronderhoud-coating"
    },
    {
      id: 5,
      titel: "Gevelreiniging",
      beschrijving: "Professionele reiniging van gevels en buitenkant van gebouwen",
      icon: "/icons/gevel.svg",
      link: "/diensten#gevelreiniging-glasbewassing"
    },
    {
      id: 6,
      titel: "Sanitair onderhoud",
      beschrijving: "Grondige reiniging en desinfectie van sanitaire ruimtes",
      icon: "/icons/sanitair.svg",
      link: "/diensten#sanitair-hygienereiniging"
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: '#f8f9fb' }}>
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--accent)' }}>Onze Diensten</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            BWS Schoonmaak biedt een breed scala aan schoonmaakdiensten aan. Of u nu op zoek bent
            naar regelmatige kantoorschoonmaak of een eenmalige specialistische reiniging, wij staan voor u klaar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {diensten.map((dienst, index) => (
            <motion.div
              key={dienst.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 lg:p-8 transition-all duration-300 card-float"
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
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                   style={{ backgroundColor: 'rgba(1, 101, 248, 0.1)' }}>
                <Image
                  src={dienst.icon}
                  alt={dienst.titel}
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--accent)' }}>
                {dienst.titel}
              </h3>
              <p className="text-gray-600 mb-4">{dienst.beschrijving}</p>
              <Link href={dienst.link} className="font-medium text-[color:var(--primary)] hover:text-[color:var(--secondary)] transition-colors">
                Meer informatie
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/diensten" className="btn-primary">
            Bekijk alle diensten
          </Link>
        </div>
      </div>
    </section>
  );
} 