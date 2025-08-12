import Link from "next/link";
import { COMPANY_INFO, NAVIGATION } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-5 sm:top-10 right-5 sm:right-10 w-16 sm:w-32 h-16 sm:h-32 bg-[color:var(--primary)]/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-24 sm:w-48 h-24 sm:h-48 bg-[color:var(--secondary)]/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--secondary)] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg sm:text-xl">BWS</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-900">{COMPANY_INFO.name}</span>
            </Link>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md">
              {COMPANY_INFO.description}. 
              Duurzaam, betrouwbaar en innovatief voor een schone toekomst.
            </p>
            
            {/* Certifications */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 transition-colors px-4 py-2 rounded-full border border-gray-200">
                <svg className="w-4 h-4 text-[color:var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-700">ISO 9001</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 transition-colors px-4 py-2 rounded-full border border-gray-200">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-700">EU Ecolabel</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">Onze Diensten</h3>
            <ul className="space-y-3">
              {NAVIGATION.footer.services.slice(0, 4).map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.path}
                    className="text-gray-600 hover:text-[color:var(--primary)] transition-colors flex items-center group"
                  >
                    <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-[color:var(--primary)] font-semibold hover:text-[color:var(--accent)] transition-colors flex items-center group bg-[color:var(--primary)]/5 hover:bg-[color:var(--primary)]/10 px-3 py-2 rounded-lg border border-[color:var(--primary)]/20"
                >
                  <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Maatwerk oplossing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">Contact & Service</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-200">
                  <svg className="h-5 w-5 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Hoofdkantoor</p>
                  <p className="text-sm text-gray-600">{COMPANY_INFO.contact.address.full}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-200">
                  <svg className="h-5 w-5 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">24/7 Service</p>
                  <a href={`tel:${COMPANY_INFO.contact.phoneRaw}`} className="text-[color:var(--primary)] hover:text-[color:var(--accent)] transition-colors">
                    {COMPANY_INFO.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-200">
                  <svg className="h-5 w-5 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-[color:var(--primary)] hover:text-[color:var(--accent)] transition-colors">
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-200">
                  <svg className="h-5 w-5 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Service Tijden</p>
                  <p className="text-sm text-gray-600">{COMPANY_INFO.contact.hours.emergency}</p>
                  <p className="text-xs text-gray-500">Spoedservice binnen 4 uur</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-600 text-sm mb-2">
                © {new Date().getFullYear()} {COMPANY_INFO.name}. Alle rechten voorbehouden.
              </p>
              <p className="text-gray-500 text-xs">
                KvK: {COMPANY_INFO.legal.kvkNumber} • BTW: {COMPANY_INFO.legal.btw} • Verzekerd tot {COMPANY_INFO.legal.insurance.liability}
              </p>
            </div>

            {/* Social & Legal */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              {/* Social Media */}
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/company/bws-schoonmaak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-50 hover:bg-[color:var(--primary)] rounded-lg flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 group border border-gray-200"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://google.com/business/bws-schoonmaak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-50 hover:bg-[color:var(--primary)] rounded-lg flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 group border border-gray-200"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </a>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 text-sm">
                {NAVIGATION.footer.legal.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.path} 
                    className="text-gray-600 hover:text-[color:var(--primary)] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 