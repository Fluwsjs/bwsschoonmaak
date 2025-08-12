import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact - BWS Schoonmaak",
  description: "Neem contact op met BWS Schoonmaak voor al uw schoonmaakbehoeften. Vraag een vrijblijvende offerte aan of stel uw vragen over onze diensten.",
  openGraph: {
    title: "Contact - BWS Schoonmaak",
    description: "Neem contact op met BWS Schoonmaak voor al uw schoonmaakbehoeften. Vraag een vrijblijvende offerte aan of stel uw vragen over onze diensten.",
    images: [{ url: "/og-contact.jpg" }],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-[100px] sm:pt-[120px] md:pt-[140px] pb-16 sm:pb-20 bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--accent)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              Contact
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Laten we samenwerken
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-6 sm:mb-8">
              Heeft u vragen over onze diensten of wilt u een offerte aanvragen? 
              Ons team staat klaar om u te helpen met al uw schoonmaakbehoeften.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact-form" className="btn-white">
                Vraag offerte aan
              </a>
              <a href="tel:+31638935230" className="btn-white-outline">
                Bel direct: 06 38935230
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 sm:top-20 right-4 sm:right-10 w-20 sm:w-32 h-20 sm:h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-10 w-32 sm:w-48 h-32 sm:h-48 bg-white/5 rounded-full blur-3xl"></div>
      </section>

      <section id="contact-form" className="py-20 bg-[color:var(--light-bg)] scroll-mt-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contactgegevens
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Vul het formulier in of neem direct contact met ons op. 
                We helpen u graag verder met al uw vragen en wensen.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="text-[color:var(--primary)] mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Adres
                    </h3>
                    <p className="text-gray-600">
                      Heumenseweg 37
                      <br />
                      6603 CX Wijchen
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-[color:var(--primary)] mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Telefoon
                    </h3>
                    <p className="text-gray-600">06 38935230</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-[color:var(--primary)] mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      E-mail
                    </h3>
                    <p className="text-gray-600">info@bwsschoonmaak.nl</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-[color:var(--primary)] mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Openingstijden
                    </h3>
                    <p className="text-gray-600">
                      Maandag - Vrijdag: 08:00 - 18:00
                      <br />
                      Zaterdag: 09:00 - 15:00
                      <br />
                      Zondag: Gesloten
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Volg ons op social media
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[color:var(--primary)] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[color:var(--primary)] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[color:var(--primary)] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Onze locatie
          </h2>
          <div className="rounded-lg overflow-hidden shadow-md h-96 relative">
            <Image
              src="/map.jpg"
              alt="Locatie van BWS Schoonmaak"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[color:var(--light-bg)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Veelgestelde vragen
            </h2>
            <p className="text-gray-600 mb-12 text-lg">
              Hieronder vindt u antwoorden op een aantal veelgestelde vragen.
              Staat uw vraag er niet bij? Neem dan gerust contact met ons op.
            </p>

            <div className="space-y-6 text-left">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Hoe kan ik een offerte aanvragen?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  U kunt een offerte aanvragen door het contactformulier in te
                  vullen, ons te bellen of een e-mail te sturen. We nemen dan zo
                  snel mogelijk contact met u op om uw wensen te bespreken en een
                  offerte op maat te maken.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Wat zijn de kosten van jullie diensten?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  De kosten van onze diensten zijn afhankelijk van verschillende
                  factoren, zoals de grootte van de ruimte, de frequentie van de
                  schoonmaak en de specifieke werkzaamheden. We maken graag een
                  offerte op maat voor u.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Werken jullie met vaste schoonmakers?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ja, we werken zo veel mogelijk met vaste schoonmakers. Dit
                  zorgt voor continuïteit en kwaliteit in onze dienstverlening.
                  Onze medewerkers kennen uw specifieke wensen en
                  aandachtspunten.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Welke schoonmaakmiddelen gebruiken jullie?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We gebruiken professionele schoonmaakmiddelen die effectief en
                  tegelijkertijd milieuvriendelijk zijn. Op verzoek kunnen we ook
                  werken met specifieke producten die u prefereert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 