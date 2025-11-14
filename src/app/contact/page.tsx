"use client";

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

const guarantees = [
  "100% tevredenheidsgarantie",
  "Verzekerd en geborgd",
  "Gratis proefschoonmaak",
  "Binnen 24 uur reactie"
];

export default function ContactPage() {
  return (
    <PageWrapper>
      <main>
        {/* Hero Section */}
        <section className="bg-white pt-24 pb-16 lg:pb-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h1 
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', color: '#0E1E40' }}
                >
                  Laten we{" "}
                  <span className="bg-gradient-to-r from-[#0165f8] to-[#01cafe] bg-clip-text text-transparent">
                    praten
                  </span>{" "}
                  over uw schoonmaakwensen
                </h1>
                
                <p 
                  className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto"
                  style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                >
                  Heeft u vragen over onze diensten of wilt u een vrijblijvende offerte? 
                  Wij staan klaar om u te helpen.
                </p>
              </motion.div>

              {/* Direct CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <a 
                  href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0165f8] to-[#01cafe] text-white rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#0165f8]/30 hover:-translate-y-1"
                  style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                >
                  <Phone className="w-6 h-6" strokeWidth={2.5} />
                  Bel direct: {COMPANY_INFO.contact.phone}
                </a>
                
                <a 
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl font-bold text-lg transition-all duration-300 hover:border-[#0165f8] hover:text-[#0165f8]"
                  style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                >
                  <Mail className="w-6 h-6" strokeWidth={2.5} />
                  Stuur email
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="bg-[#f8f9fb] py-20 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', color: '#0E1E40' }}
              >
                Kies uw voorkeur
              </h2>
              <p 
                className="text-lg text-gray-600 max-w-2xl mx-auto"
                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
              >
                Neem contact met ons op op de manier die het beste bij u past
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0165f8] to-[#01cafe] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                    <h3 
                      className="text-xl font-bold mb-2"
                      style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', color: '#0E1E40' }}
                    >
                      {method.title}
                    </h3>
                    <p 
                      className="text-gray-600 mb-4"
                      style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                    >
                      {method.description}
                    </p>
                    <div 
                      className="font-semibold text-[#0165f8] mb-2 group-hover:text-[#01cafe] transition-colors"
                      style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                    >
                      {method.value}
                    </div>
                    <div className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                      {method.available}
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 
                  className="text-3xl lg:text-4xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', color: '#0E1E40' }}
                >
                  Vraag een offerte aan
                </h2>
                <p 
                  className="text-lg text-gray-600"
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
