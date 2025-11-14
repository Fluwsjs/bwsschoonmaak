"use client";

import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import ProjectSectie from "@/components/ProjectSectie";
import ProjectGallery from "@/components/ProjectGallery";
import ServiceContactForm from "@/components/ServiceContactForm";

// Project data
const projecten = [
  {
    id: 1,
    titel: "Kantoorcomplex Wijchen Centrum",
    omschrijving: "Complete herinrichting schoonmaakproces voor modern kantoorcomplex met 150 werkplekken.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    sector: "Kantoren",
    oppervlakte: "3.500 m²",
    duur: "6 maanden",
    resultaten: [
      "98% klanttevredenheid na implementatie",
      "30% kostenbesparing door efficiënte planning",
      "Zero-waste doelstelling behaald",
      "ISO 14001 certificering behouden"
    ]
  },
  {
    id: 2,
    titel: "Zorgcentrum De Linde",
    omschrijving: "HACCP-conforme schoonmaak implementatie voor zorgcentrum met 200 bewoners.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    sector: "Zorgcentra",
    oppervlakte: "5.200 m²",
    duur: "12 maanden",
    resultaten: [
      "100% compliance met HACCP-richtlijnen",
      "Significante verbetering hygiëne scores",
      "15% reductie ziekteverspreiding",
      "Positive feedback van bewoners en familie"
    ]
  },
  {
    id: 3,
    titel: "Restaurant De Herberg",
    omschrijving: "Complete keuken- en restaurantreiniging volgens horeca-standaarden.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    sector: "Horeca",
    oppervlakte: "800 m²",
    duur: "Ongoing - 3 jaar",
    resultaten: [
      "100% NVWA-goedkeuring bij alle inspecties",
      "Verbetering online reviews van 3.8 naar 4.7",
      "Zero food safety incidenten",
      "Verlengd contract voor 3 jaar"
    ]
  },
  {
    id: 4,
    titel: "Basisschool De Regenboog",
    omschrijving: "Dagelijkse schoonmaak met focus op kindveilige producten en procedures.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
    sector: "Onderwijs",
    oppervlakte: "2.100 m²",
    duur: "5 jaar",
    resultaten: [
      "95% tevredenheid bij ouders en leerkrachten",
      "50% minder ziekteverzuim door betere hygiëne",
      "Kindveilige producten 100% van de tijd",
      "Flexibele planning rond schoolactiviteiten"
    ]
  },
  {
    id: 5,
    titel: "Nieuwbouw Bedrijfspand Technopark",
    omschrijving: "Opleverschoonmaak voor gloednieuw 4-verdiepingen tellend bedrijfspand.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    sector: "Nieuwbouw",
    oppervlakte: "6.000 m²",
    duur: "3 weken",
    resultaten: [
      "Perfecte oplevering binnen deadline",
      "Zero defects bij eindcontrole",
      "Direct bewoonbaar zonder nazorg",
      "Opdrachtgever kiest BWS voor volgend project"
    ]
  },
  {
    id: 6,
    titel: "Winkelcentrum Passage Wijchen",
    omschrijving: "Nachtelijke schoonmaak van winkelcentrum met 45 winkels en gemeenschappelijke ruimtes.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    sector: "Retail",
    oppervlakte: "8.500 m²",
    duur: "24 maanden",
    resultaten: [
      "Significante verbetering van shopping experience",
      "15% stijging in bezoekers volgens eigenaar",
      "100% on-time performance",
      "Verlengd contract voor 2 extra jaren"
    ]
  }
];

// Project gallery images - alle project afbeeldingen
const projectImages = projecten.map(project => project.image);

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

        {/* Project Sectie */}
        <ProjectSectie projects={projecten} />

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