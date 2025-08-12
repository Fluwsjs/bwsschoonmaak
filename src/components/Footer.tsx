import Link from "next/link";
import { COMPANY_INFO, NAVIGATION } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 lg:py-16">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BWS</span>
              </div>
              <span className="text-xl font-bold text-gray-900">{COMPANY_INFO.name}</span>
            </Link>
            
            <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
              Professionele schoonmaakdiensten voor bedrijven en particulieren in Wijchen en omgeving. 
              15+ jaar ervaring, 100% milieuvriendelijk en altijd betrouwbaar.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="text-sm font-medium text-gray-900 mb-4">Bezoek ons</div>
              
              <div className="flex items-start gap-3 text-gray-700">
                <svg className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <div>{COMPANY_INFO.contact.address.street}</div>
                  <div>{COMPANY_INFO.contact.address.postalCode} {COMPANY_INFO.contact.address.city}</div>
                </div>
              </div>
              

            </div>

            {/* Phone Numbers */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-900 mb-4">Algemeen</div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Algemeen</div>
                  <a href={`tel:${COMPANY_INFO.contact.phoneRaw}`} className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {COMPANY_INFO.contact.phone}
                  </a>
                </div>
                
                <div>
                  <div className="text-sm text-gray-500 mb-1">Support</div>
                  <a href={`tel:${COMPANY_INFO.contact.phoneRaw}`} className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {COMPANY_INFO.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Links */}
          <div>
            <div className="text-sm font-medium text-gray-900 mb-6">Snelle links</div>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {NAVIGATION.main.map((item) => (
                <Link 
                  key={item.path}
                  href={item.path}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
              
              <Link 
                href="/diensten#kantoor-bedrijfsschoonmaak" 
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
              >
                Kantoorschoonmaak
              </Link>
              <Link 
                href="/diensten#gevelreiniging-glasbewassing" 
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
              >
                Glasbewassing
              </Link>
              <Link 
                href="/contact" 
                className="text-orange-600 hover:text-orange-700 font-medium transition-colors text-sm"
              >
                Afspraak maken →
              </Link>
            </div>
          </div>


        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <span>© {new Date().getFullYear()} {COMPANY_INFO.name}.</span>
              {NAVIGATION.footer.legal.map((item) => (
                <Link 
                  key={item.path}
                  href={item.path}
                  className="hover:text-gray-700 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Website Credit */}
            <div className="text-sm text-gray-500">
              Website door{" "}
              <a 
                href="https://www.jorsite.nl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                jorsite
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;