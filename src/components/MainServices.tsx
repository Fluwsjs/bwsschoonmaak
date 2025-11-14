"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Kantoorschoonmaak",
    description: "De professionele kantoorschoonmaak is de basis voor de dagelijkse werkbeleving.",
    details: "Professionele dagelijkse en periodieke schoonmaakdiensten voor kantoorpanden, zorgen voor een representatieve en productieve werkomgeving. ISO-gecertificeerd met flexibele planning.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    features: ["ISO-gecertificeerd", "Flexibele planning", "Kwaliteitscontrole"],
    linkText: "Bekijken",
    color: "blue"
  },
  {
    title: "Gevelreiniging & Glasbewassing",
    description: "Specialistische reiniging zorgt voor een solide balans tussen representatie en techniek.",
    details: "Specialistische reiniging van gevels en glaspuien met professionele apparatuur voor optimale representatie van uw bedrijfspand. Compliance met veiligheidsrichtlijnen en periodiek onderhoud.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    features: ["Hoogwerktechniek", "Periodiek onderhoud", "Professionele uitrusting"],
    linkText: "Bekijken",
    color: "green"
  },
  {
    title: "Hygiëne & Desinfectie",
    description: "Laat je inspireren en begeleiden bij de inzet van juiste hygiëne protocollen.",
    details: "Grondige reiniging en desinfectie van sanitaire voorzieningen volgens HACCP-richtlijnen voor optimale hygiëne en gezondheid. Kwaliteitsrapportage en desinfectieprotocol inbegrepen.",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop",
    features: ["HACCP-conform", "Desinfectieprotocol", "Kwaliteitsrapportage"],
    linkText: "Bekijken",
    color: "orange"
  }
];

const getColorClasses = (color: string) => {
  const colorMap = {
    blue: {
      bg: "bg-[color:var(--primary)]/5",
      icon: "text-white",
      button: "text-[color:var(--primary)] hover:text-[color:var(--secondary)]"
    },
    green: {
      bg: "bg-green-50", 
      icon: "bg-green-100 text-green-600",
      button: "text-[color:var(--primary)] hover:text-[color:var(--secondary)]"
    },
    orange: {
      bg: "bg-orange-50",
      icon: "bg-orange-100 text-orange-600", 
      button: "text-[color:var(--primary)] hover:text-[color:var(--secondary)]"
    }
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.blue;
};

export default function MainServices() {
  return (
    <section className="section bg-white py-24 lg:py-32">
      <div className="container px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            
            return (
              <div
                key={index}
                className={`${colors.bg} p-6 lg:p-8 h-full flex flex-col border border-gray-200 transition-all duration-300`}
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Service Icon */}
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4`}
                     style={service.color === 'blue' ? { backgroundColor: 'var(--primary)' } : {}}>
                  {index === 0 && (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L3 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l3-1.8a1 1 0 011.098.382z" clipRule="evenodd"/>
                      <path d="M6 10a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8z"/>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--accent)' }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Details */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                  {service.details}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-white text-gray-700 border border-gray-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <a 
                    href="/diensten"
                    className={`inline-flex items-center gap-2 ${colors.button} font-semibold transition-colors`}
                  >
                    {service.linkText}
                    <ArrowRight className="w-4 h-4 lucide" strokeWidth={2} style={{ stroke: 'currentColor' }} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
