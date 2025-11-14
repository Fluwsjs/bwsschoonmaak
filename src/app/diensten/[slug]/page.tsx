import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import ProjectGallery from "@/components/ProjectGallery";
import ServiceContactForm from "@/components/ServiceContactForm";
import { servicesData, type ServiceSlug } from "@/lib/servicesData";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all service pages
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug as ServiceSlug];

  if (!service) {
    return {
      title: "Dienst niet gevonden",
    };
  }

  return {
    title: `${service.title} | BWS Schoonmaak`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData[slug as ServiceSlug];

  if (!service) {
    notFound();
  }

  return (
    <PageWrapper>
      <main>
        {/* Breadcrumb */}
        <section className="bg-white pt-24 pb-4">
          <div className="container px-4 sm:px-6">
            <nav className="text-sm text-gray-600 mb-4">
              <Link href="/" className="hover:text-[color:var(--primary)] transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/diensten" className="hover:text-[color:var(--primary)] transition-colors">Diensten</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{service.title}</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-white pt-8 pb-16 lg:pb-20">
          <div className="container px-4 sm:px-6">
            <div className="max-w-4xl">
              {/* Title - split on & for better typography */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                {service.title.includes(' & ') ? (
                  <>
                    {service.title.split(' & ')[0]} &<br />
                    {service.title.split(' & ')[1]}
                  </>
                ) : (
                  service.title
                )}
              </h1>
              
              {/* Description - left aligned for better readability */}
              <div className="space-y-6 text-gray-700">
                <p className="text-lg sm:text-xl leading-relaxed">
                  {service.description}
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <ProjectGallery 
          images={service.galleryImages}
          title="Ons Werk"
        />

        {/* Contact Form */}
        <ServiceContactForm serviceName={service.title} />
      </main>
    </PageWrapper>
  );
}

