"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

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
    <section className="section bg-white py-20 lg:py-24">
      <div className="container px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wide">
            TEVREDENHEID STAAT CENTRAAL.<br/>
            LEES WAT ONZE KLANTEN ZEGGEN.
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Klanten aan het woord
          </h2>
        </motion.div>

        {/* Testimonial Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column - Image */}
          <motion.div
            key={`image-${currentTestimonial}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Main Image */}
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Company Badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 mb-1">
                      {testimonials[currentTestimonial].company}
                    </div>
                    <a 
                      href="#contact"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                    >
                      Ook tevreden klant worden?
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Quote */}
          <motion.div
            key={`quote-${currentTestimonial}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-8"
          >
            {/* Quote */}
            <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>

            {/* Author */}
            <div className="mb-8">
              <div className="font-bold text-orange-600 text-lg mb-1">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-gray-600">
                {testimonials[currentTestimonial].role}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors"
                aria-label="Vorige testimonial"
              >
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors"
                aria-label="Volgende testimonial"
              >
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex gap-2 ml-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Ga naar testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
