"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Ruler, CheckCircle2 } from "lucide-react";

interface Project {
  id: number;
  titel: string;
  omschrijving: string;
  image: string;
  sector: string;
  oppervlakte: string;
  duur: string;
  resultaten: string[];
}

interface ProjectSectieProps {
  projects: Project[];
}

export default function ProjectSectie({ projects }: ProjectSectieProps) {
  return (
    <section className="section bg-gray-50 py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden transition-all duration-300 border border-gray-100"
              style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
              }}
              whileHover={{
                y: -8,
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                transition: { duration: 0.3 }
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.titel}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span
                    className="bg-white/90 backdrop-blur-sm text-[color:var(--primary)] px-3 py-1.5 rounded-full text-xs font-semibold border border-[color:var(--primary)]/20"
                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                  >
                    {project.sector}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 lg:p-8">
                {/* Project Meta */}
                <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Ruler className="w-4 h-4" strokeWidth={2} />
                    <span style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                      {project.oppervlakte}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" strokeWidth={2} />
                    <span style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                      {project.duur}
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3
                  className="text-xl lg:text-2xl font-bold mb-3"
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                    color: 'var(--accent)'
                  }}
                >
                  {project.titel}
                </h3>

                {/* Project Description */}
                <p
                  className="text-gray-700 mb-6 leading-relaxed"
                  style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                >
                  {project.omschrijving}
                </p>

                {/* Project Results */}
                {project.resultaten && project.resultaten.length > 0 && (
                  <div className="space-y-2">
                    <h4
                      className="text-sm font-semibold text-gray-900 mb-3"
                      style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                    >
                      Resultaten:
                    </h4>
                    <div className="space-y-2">
                      {project.resultaten.slice(0, 3).map((resultaat, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2
                            className="w-4 h-4 text-[color:var(--primary)] flex-shrink-0 mt-0.5"
                            strokeWidth={2.5}
                          />
                          <span
                            className="text-sm text-gray-600"
                            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                          >
                            {resultaat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
