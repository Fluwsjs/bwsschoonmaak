"use client";

import Link from "next/link";
import { COMPANY_INFO, NAVIGATION } from "@/lib/constants";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: COMPANY_INFO.website.social.facebook },
    { name: "Twitter", icon: Twitter, href: COMPANY_INFO.website.social.twitter },
    { name: "LinkedIn", icon: Linkedin, href: COMPANY_INFO.website.social.linkedin },
    { name: "Instagram", icon: Instagram, href: COMPANY_INFO.website.social.instagram },
  ];

  return (
    <footer 
      className="relative border-t bg-white"
      style={{ 
        borderColor: 'rgba(0,0,0,0.1)'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
        {/* Top Section - Logo and Navigation */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-12 lg:gap-8 mb-8 sm:mb-12">
          
          {/* Left Side - Logo and Slogan */}
          <div className="w-full lg:w-auto">
            <Link href="/" className="block mb-3">
              <span 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0E1E40]"
                style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
              >
                BWS Schoonmaak
              </span>
            </Link>
            <p 
              className="text-gray-700 text-sm sm:text-base max-w-md"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              {COMPANY_INFO.tagline}
            </p>
          </div>
          
          {/* Right Side - Navigation Links in 4 Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 w-full lg:w-auto">
            
            {/* Column 1 - Menu */}
            <div>
              <h3 
                className="text-gray-700 font-semibold text-sm mb-4 uppercase tracking-wide"
                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
              >
                Menu
              </h3>
              <nav className="space-y-2">
                {NAVIGATION.main.map((item) => (
                  <Link 
                    key={item.path}
                    href={item.path}
                    className="block text-gray-600 hover:text-[#0165f8] transition-colors duration-200 text-sm"
                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 2 - Diensten */}
            <div>
              <h3 
                className="text-gray-700 font-semibold text-sm mb-4 uppercase tracking-wide"
                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
              >
                Diensten
              </h3>
              <nav className="space-y-2">
                {NAVIGATION.footer.services.slice(0, 4).map((item) => (
                  <Link 
                    key={item.path}
                    href={item.path}
                    className="block text-gray-600 hover:text-[#0165f8] transition-colors duration-200 text-sm"
                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 3 - Over Ons */}
            <div>
              <h3 
                className="text-gray-700 font-semibold text-sm mb-4 uppercase tracking-wide"
                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
              >
                Over Ons
              </h3>
              <nav className="space-y-2">
                <Link 
                  href="/over-ons"
                  className="block text-gray-600 hover:text-[#0165f8] transition-colors duration-200 text-sm"
                  style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                >
                  Over BWS
                </Link>
                <Link 
                  href="/projecten"
                  className="block text-gray-600 hover:text-[#0165f8] transition-colors duration-200 text-sm"
                  style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                >
                  Projecten
                </Link>
                <Link 
                  href="/contact"
                  className="block text-gray-600 hover:text-[#0165f8] transition-colors duration-200 text-sm"
                  style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Column 4 - Legal */}
            <div>
              <h3 
                className="text-gray-700 font-semibold text-sm mb-4 uppercase tracking-wide"
                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
              >
                Legal
              </h3>
              <nav className="space-y-2">
                {NAVIGATION.footer.legal.map((item) => (
                  <Link 
                    key={item.path}
                    href={item.path}
                    className="block text-gray-600 hover:text-[#0165f8] transition-colors duration-200 text-sm"
                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        
        {/* Middle Section - Separator Line */}
        <div 
          className="border-t mb-8"
          style={{ borderColor: 'rgba(0,0,0,0.1)' }}
        />
        
        {/* Bottom Section - Social Media and Copyright */}
        <div className="flex flex-col items-center gap-6">
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-700 hover:border-[#0165f8] hover:text-[#0165f8] hover:bg-[#0165f8]/5 transition-all duration-200"
                  aria-label={social.name}
                >
                  <IconComponent className="w-5 h-5" strokeWidth={2} />
                </a>
              );
            })}
          </div>
          
          {/* Copyright */}
          <p 
            className="text-gray-600 text-sm text-center"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
