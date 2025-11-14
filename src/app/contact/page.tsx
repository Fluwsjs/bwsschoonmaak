"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";
import PageWrapper from "@/components/PageWrapper";

const contactMethods = [
  {
    title: "Bel ons direct",
    description: "Voor spoedgevallen en directe vragen",
    icon: Phone,
    value: COMPANY_INFO.contact.phone,
    href: `tel:${COMPANY_INFO.contact.phoneRaw}`,
    available: "Ma-Vr 8:00-18:00"
  },
  {
    title: "Stuur een email",
    description: "Voor uitgebreide vragen en offertes",
    icon: Mail,
    value: COMPANY_INFO.contact.email,
    href: `mailto:${COMPANY_INFO.contact.email}`,
    available: "Binnen 24 uur reactie"
  },
  {
    title: "Kom langs",
    description: "Voor een persoonlijk gesprek",
    icon: MapPin,
    value: COMPANY_INFO.contact.address.full,
    href: `https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.contact.address.full)}`,
    available: "Op afspraak"
  }
];

export default function ContactPage() {
  return (
    <PageWrapper>
      <main>
        {/* Breadcrumb */}
        <section className="bg-white pt-24 pb-4">
          <div className="container px-4 sm:px-6">
            <nav className="text-sm text-gray-600 mb-4">
              <Link href="/" className="hover:text-[color:var(--primary)] transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Contact</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-white pt-8 pb-12 lg:pb-16">
          <div className="container px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
                Laten we{" "}
                <span className="bg-gradient-to-r from-[#0165f8] to-[#01cafe] bg-clip-text text-transparent">
                  praten
                </span>{" "}
                over uw schoonmaakwensen
              </h1>
              
              <div className="prose prose-lg max-w-none text-gray-700 text-center">
                <p className="text-lg sm:text-xl leading-relaxed">
                  Heeft u vragen over onze diensten of wilt u een vrijblijvende offerte? 
                  Wij staan klaar om u te helpen.
                </p>
                <p className="text-base sm:text-lg leading-relaxed mt-4">
                  Neem contact met ons op via telefoon, email of vul het contactformulier in. 
                  Wij reageren binnen 24 uur op uw aanvraag.
                </p>
              </div>

              {/* Direct CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <a 
                  href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                  className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#0165f8] to-[#01cafe] text-white rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#0165f8]/30 hover:-translate-y-1 active:scale-95"
                  style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                  Bel direct: {COMPANY_INFO.contact.phone}
                </a>
                
                <a 
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:border-[#0165f8] hover:text-[#0165f8] active:scale-95"
                  style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                  Stuur email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 lg:mb-16"
            >
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', color: 'var(--accent)' }}
              >
                Kies uw voorkeur
              </h2>
              <p 
                className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
              >
                Neem contact met ons op op de manier die het beste bij u past
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-[#0165f8] to-[#01cafe] flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
                    </div>
                    <h3 
                      className="text-lg sm:text-xl font-bold mb-2"
                      style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', color: 'var(--accent)' }}
                    >
                      {method.title}
                    </h3>
                    <p 
                      className="text-sm sm:text-base text-gray-600 mb-4"
                      style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                    >
                      {method.description}
                    </p>
                    <div 
                      className="font-semibold text-sm sm:text-base text-[#0165f8] mb-2 group-hover:text-[#01cafe] transition-colors break-words"
                      style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                    >
                      {method.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                      {method.available}
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-8 sm:mb-12">
                <h2 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', color: 'var(--accent)' }}
                >
                  Vraag een offerte aan
                </h2>
                <p 
                  className="text-base sm:text-lg text-gray-600"
                  style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                >
                  Vul het formulier in en wij nemen binnen 24 uur contact met u op.
                </p>
              </div>
              
              <ContactForm />
            </motion.div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
