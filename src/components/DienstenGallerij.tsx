"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface DienstProps {
  title: string;
  description: string;
  image: string;
  link: string;
  features?: string[];
}

const diensten: DienstProps[] = [
  {
    title: "Kantoor- en bedrijfsschoonmaak",
    description: "Professionele dagelijkse en periodieke schoonmaakdiensten voor kantoorpanden, zorgen voor een representatieve en productieve werkomgeving.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop",
    link: "/diensten#kantoor-bedrijfsschoonmaak",
    features: ["ISO-gecertificeerd", "Flexibele planning", "Kwaliteitscontrole"]
  },
  {
    title: "Gevelreiniging & glasbewassing",
    description: "Specialistische reiniging van gevels en glaspuien met professionele apparatuur voor optimale representatie van uw bedrijfspand.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
    link: "/diensten#gevelreiniging-glasbewassing",
    features: ["Hoogwerktechniek", "Periodiek onderhoud", "Professionele uitrusting"]
  },
  {
    title: "Sanitair- en hygiënereiniging",
    description: "Grondige reiniging en desinfectie van sanitaire voorzieningen volgens HACCP-richtlijnen voor optimale hygiëne en gezondheid.",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=300&fit=crop",
    link: "/diensten#sanitair-hygienereiniging",
    features: ["HACCP-conform", "Desinfectieprotocol", "Kwaliteitsrapportage"]
  },
  {
    title: "Oplevering na nieuwbouw",
    description: "Specialistische eindschoonmaak na bouwprojecten en renovaties, inclusief verwijdering van bouwresten en stofvrije oplevering.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop",
    link: "/diensten#oplevering-nieuwbouw",
    features: ["Stofvrije oplevering", "Bouwresidu-verwijdering", "Opleverschoonmaak"]
  },
  {
    title: "Vloeronderhoud & coating",
    description: "Professioneel onderhoud en behandeling van alle vloertypen, inclusief gespecialiseerde coatings en restauratie van hoogwaardige vloeren.",
    image: "https://images.unsplash.com/photo-1558488999-e27a14302a32?w=500&h=300&fit=crop",
    link: "/diensten#vloeronderhoud-coating",
    features: ["Alle materialen", "Coating & bescherming", "Restauratie mogelijk"]
  },
  {
    title: "Zorginstelling & ziekenhuizen",
    description: "Gespecialiseerde schoonmaak voor zorginstellingen met strikte hygiëneprotocollen en certificeringen voor de zorgverlening.",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=500&h=300&fit=crop",
    link: "/diensten#zorginstelling-ziekenhuizen",
    features: ["Zorgcertificering", "Hygiëneprotocol", "24/7 beschikbaar"]
  },
];

const DienstKaart = ({ title, description, image, link, features }: DienstProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 group"
    >
      <div className="relative h-56 sm:h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">{title}</h3>
        </div>
      </div>
      
      <div className="p-4 sm:p-6 flex-grow flex flex-col">
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 flex-grow">{description}</p>
        
        {/* Features List */}
        {features && features.length > 0 && (
          <div className="mb-6">
            <div className="grid grid-cols-1 gap-2">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-sm"
                >
                  <div className="w-1.5 h-1.5 bg-[color:var(--primary)] rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <Link
          href={link}
          className="inline-flex items-center justify-center w-full px-4 py-3 bg-[color:var(--primary)] hover:bg-[color:var(--accent)] text-white font-semibold rounded-lg transition-all duration-300 group/button"
        >
          <span>Meer informatie</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2 transform transition-transform group-hover/button:translate-x-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

const DienstenGallerij = () => {
  return (
    <section className="py-20 md:py-24 bg-[#F9FAFB] relative mt-0">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-primary mb-4 text-sm font-medium text-[color:var(--primary)] bg-white border border-[color:var(--primary)]/20">
            Onze Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Van klein kantoor tot groot complex
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mb-6">
            <strong>500+ bedrijven in Wijchen en omgeving</strong> vertrouwen ons al jaren voor professionele schoonmaakdiensten.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <div className="flex items-center gap-2 text-[color:var(--primary)]">
              <div className="w-2 h-2 bg-[color:var(--primary)] rounded-full"></div>
              24/7 bereikbaar
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              100% milieuvriendelijk
            </div>
            <div className="flex items-center gap-2 text-blue-600">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              ISO-gecertificeerd
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {diensten.map((dienst, index) => (
            <DienstKaart
              key={index}
              title={dienst.title}
              description={dienst.description}
              image={dienst.image}
              link={dienst.link}
              features={dienst.features}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 text-center bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8 lg:p-10"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Maatwerk Schoonmaakoplossingen
          </h3>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            Heeft u specifieke eisen of zoekt u een schoonmaakdienst die niet in ons standaardaanbod staat? 
            Onze experts ontwikkelen graag een op maat gesneden oplossing voor uw organisatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link href="/contact" className="btn-primary text-center">
              Vraag een offerte aan
            </Link>
            <Link href="/diensten" className="btn-outline text-center">
              Alle diensten
            </Link>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default DienstenGallerij; 