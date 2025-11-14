"use client";

import PageWrapper from "@/components/PageWrapper";
import ProjectGallery from "@/components/ProjectGallery";
import ServiceContactForm from "@/components/ServiceContactForm";

// Project gallery images - placeholder images, vervang met echte project foto's
const projectImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1558488999-e27a14302a32?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=600&fit=crop",
];

export default function DienstenPage() {
  return (
    <PageWrapper>
      <main>
        {/* Hero Section */}
        <section className="bg-white pt-24 pb-12 lg:pb-16">
          <div className="container px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
                Onze Diensten
              </h1>
              
              <div className="prose prose-lg max-w-none text-gray-700 text-center">
                <p className="text-lg sm:text-xl leading-relaxed">
                  BWS Schoonmaak biedt professionele schoonmaakdiensten voor bedrijven en particulieren in Wijchen en omgeving. 
                  Met meer dan 20 jaar ervaring zorgen wij voor een schone, representatieve werkomgeving.
                </p>
                <p className="text-base sm:text-lg leading-relaxed mt-4">
                  Of het nu gaat om dagelijkse kantoorschoonmaak, gevelreiniging, of specialistische projecten - 
                  wij leveren altijd kwaliteit met oog voor detail. Onze teams werken met milieuvriendelijke producten 
                  en moderne technieken voor het beste resultaat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <ProjectGallery 
          images={projectImages}
          title="Ons Werk"
        />

        {/* Contact Form */}
        <ServiceContactForm />
      </main>
    </PageWrapper>
  );
}
