"use client";

import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import ProjectGallery from "@/components/ProjectGallery";
import ServiceContactForm from "@/components/ServiceContactForm";

// Project gallery images - placeholder images, vervang met echte project foto's
const projectImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1558488999-e27a14302a32?w=600&h=600&fit=crop",
];

export default function ProjectenPage() {
  return (
    <PageWrapper>
      <main>
        {/* Breadcrumb */}
        <section className="bg-white pt-24 pb-4">
          <div className="container px-4 sm:px-6">
            <nav className="text-sm text-gray-600 mb-4">
              <Link href="/" className="hover:text-[color:var(--primary)] transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Projecten</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-white pt-8 pb-12 lg:pb-16">
          <div className="container px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
                Onze Projecten
              </h1>
              
              <div className="prose prose-lg max-w-none text-gray-700 text-center">
                <p className="text-lg sm:text-xl leading-relaxed">
                  BWS Schoonmaak heeft al meer dan 500 projecten succesvol afgerond. 
                  Van kantoren tot zorgcentra, van scholen tot restaurants - wij leveren altijd kwaliteit met oog voor detail.
                </p>
                <p className="text-base sm:text-lg leading-relaxed mt-4">
                  Ontdek hoe wij onze klanten hebben geholpen met professionele schoonmaakoplossingen. 
                  Onze teams werken met milieuvriendelijke producten en moderne technieken voor het beste resultaat.
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