"use client";

import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-16 pb-16 sm:pb-20 md:pb-24 lg:pb-32 min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden lg:pt-[113px]" 
      style={{
        background: 'linear-gradient(135deg, #0165f8 0%, #01cafe 100%)',
      }}
    >
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
        }}
      ></div>
      
      {/* Subtle radial pattern */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      ></div>
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-2">
            <span className="text-white block">Kantoor vuil?</span>
            <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gradient block mt-2" style={{
              background: 'linear-gradient(90deg, #ffffff 0%, #e0f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
            }}>BWS BELLEN!</span>
          </h1>
          
          {/* CTA Button */}
          <div className="mt-8 sm:mt-10 px-4">
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 sm:gap-3 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl font-semibold text-base sm:text-lg md:text-xl transition-all duration-300 hover:shadow-2xl active:scale-95"
              style={{ 
                backgroundColor: 'white',
                color: 'var(--primary)',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                fontWeight: 600,
                minHeight: '48px'
              }}
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 lucide" strokeWidth={2} style={{ stroke: 'var(--primary)' }} />
              <span className="whitespace-nowrap">Neem contact op</span>
            </a>
          </div>

          {/* Optional: Subtle tagline */}
          <p className="mt-6 sm:mt-8 text-white/90 text-base sm:text-lg md:text-xl px-4">
            Lokaal schoonmaakbedrijf in Wijchen en omgeving
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;