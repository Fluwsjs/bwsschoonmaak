"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "[Hier komt de testimonial van klant 1. Deze tekst kan later worden aangepast naar de specifieke ervaring en feedback van de klant over onze schoonmaakdiensten.]",
    name: "[Naam Klant 1]",
    role: "[Functie/Rol]",
    company: "[Bedrijfsnaam]",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop&crop=face"
  },
  {
    quote: "[Hier komt de testimonial van klant 2. Deze tekst kan later worden aangepast naar de specifieke ervaring en feedback van de klant over onze schoonmaakdiensten.]",
    name: "[Naam Klant 2]", 
    role: "[Functie/Rol]",
    company: "[Bedrijfsnaam]",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e7?w=400&h=400&fit=crop&crop=face"
  },
  {
    quote: "[Hier komt de testimonial van klant 3. Deze tekst kan later worden aangepast naar de specifieke ervaring en feedback van de klant over onze schoonmaakdiensten.]",
    name: "[Naam Klant 3]",
    role: "[Functie/Rol]",
    company: "[Bedrijfsnaam]",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  }
];

export default function ModernTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-white py-24 lg:py-32">
      <div className="container px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-medium mb-4 uppercase tracking-wide"
               style={{ color: 'var(--primary)' }}>
            TEVREDEN KLANTEN
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: 'var(--accent)' }}>
            Wat onze klanten zeggen
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Main Image */}
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden image-overlay image-zoom"
                   style={{
                     borderRadius: '12px',
                     boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                   }}>
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
              </div>
              
              {/* Company Badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white p-3 sm:p-4 border border-gray-200"
                     style={{
                       borderRadius: '12px',
                       boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                     }}>
                  <div className="text-center">
                    <div className="font-semibold text-sm sm:text-base text-gray-900 mb-1">
                      {testimonials[currentTestimonial].company}
                    </div>
                    <a 
                      href="#contact"
                      className="inline-flex items-center gap-2 font-medium text-xs sm:text-sm transition-colors"
                      style={{ color: 'var(--primary)' }}
                    >
                      Ook tevreden klant worden?
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lucide" strokeWidth={2} style={{ stroke: 'currentColor' }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quote */}
          <div className="lg:pl-8 order-1 lg:order-2">
            {/* Quote */}
            <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-8 italic">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>

            {/* Author */}
            <div className="mb-6 sm:mb-8">
              <div className="font-bold text-base sm:text-lg mb-1"
                   style={{ color: 'var(--primary)' }}>
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                {testimonials[currentTestimonial].role}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300 border border-gray-300 hover:border-[color:var(--primary)] hover:bg-gray-50 active:scale-95"
                style={{ 
                  color: 'var(--primary)',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                }}
                aria-label="Vorige testimonial"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lucide" strokeWidth={2} style={{ stroke: 'currentColor' }} />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300 border border-gray-300 hover:border-[color:var(--primary)] hover:bg-gray-50 active:scale-95"
                style={{ 
                  color: 'var(--primary)',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                }}
                aria-label="Volgende testimonial"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lucide" strokeWidth={2} style={{ stroke: 'currentColor' }} />
              </button>

              {/* Dots */}
              <div className="flex gap-2 ml-2 sm:ml-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? '' : 'bg-gray-300'
                    }`}
                    style={index === currentTestimonial ? { backgroundColor: 'var(--primary)' } : {}}
                    aria-label={`Ga naar testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
