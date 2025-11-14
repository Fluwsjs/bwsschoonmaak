"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Sparkles, Building2, Droplets, Home } from "lucide-react";
import { SERVICES } from "@/lib/constants";

// NavbarBWS Component - Sticky Glass Header
export const NavbarBWS = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname?.startsWith(path);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Diensten",
      path: "/diensten",
      dropdown: [
        { name: "Kantoor- en bedrijfsschoonmaak", path: "/diensten/kantoor-bedrijfsschoonmaak" },
        { name: "Gevelreiniging & glasbewassing", path: "/diensten/gevelreiniging-glasbewassing" },
        { name: "Sanitair- en hygiënereiniging", path: "/diensten/sanitair-hygienereiniging" },
        { name: "Vloeronderhoud & coating", path: "/diensten/vloeronderhoud-coating" },
        { name: "Oplevering na nieuwbouw", path: "/diensten/oplevering-nieuwbouw" },
        { name: "Huishoudelijke hulp", path: "/diensten/huishoudelijke-hulp" },
        { name: "Alle diensten", path: "/diensten" }
      ]
    },
    { name: "Projecten", path: "/projecten" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50"
          : "bg-white/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0165f8] focus-visible:ring-offset-2 rounded-md"
            aria-label="BWS Schoonmaak - Homepage"
          >
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#0165f8] to-[#01cafe] bg-clip-text text-transparent">
              BWS Schoonmaak
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Hoofdnavigatie">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const hasDropdown = link.dropdown && link.dropdown.length > 0;

              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <Link
                    href={link.path}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0165f8] focus-visible:ring-offset-2 ${
                      active
                        ? "text-[#0165f8] bg-[#0165f8]/10"
                        : "text-[#0E1E40] hover:text-[#0165f8] hover:bg-[#0165f8]/5"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.name}
                    {hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                        strokeWidth={2.5}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasDropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-xl py-2 z-50 shadow-xl"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.path}
                          className="block px-4 py-2.5 text-sm text-[#0E1E40] hover:text-[#0165f8] hover:bg-[#0165f8]/5 transition-colors duration-150"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            })}

            {/* CTA Button */}
            <div className="ml-6 pl-6 border-l border-gray-200/50">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#0165f8] to-[#01cafe] rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#0165f8]/30 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0165f8] focus-visible:ring-offset-2"
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0165f8] focus-visible:ring-offset-2 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Sluit menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#0E1E40]" strokeWidth={2.5} />
            ) : (
              <Menu className="w-6 h-6 text-[#0E1E40]" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          id="mobile-menu"
          className="lg:hidden fixed inset-0 z-[9999] bg-white/95 backdrop-blur-md top-16 border-t border-gray-200/50"
        >
          <div className="px-6 py-8">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`px-4 py-3 text-base font-semibold transition-colors duration-150 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0165f8] focus-visible:ring-offset-2 ${
                    isActive(link.path)
                      ? "text-[#0165f8] bg-[#0165f8]/10"
                      : "text-[#0E1E40] hover:text-[#0165f8] hover:bg-[#0165f8]/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="mt-4 pt-4 border-t border-gray-200/50">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#0165f8] to-[#01cafe] rounded-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0165f8] focus-visible:ring-offset-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

// HeroBWS Component - Gradient Hero with Glassmorphism
const HeroBWS = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-image.jpg')",
          }}
        />
        {/* Light blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0165f8]/40 via-[#01cafe]/30 to-[#0E1E40]/50" />
        {/* Additional gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E40]/60 via-transparent to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-[#01cafe]/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#0165f8]/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
            >
              <span className="text-white drop-shadow-lg">Kantoor vuil?</span>
              <br />
              <span className="bg-gradient-to-r from-white via-[#e0f2fe] to-white bg-clip-text text-transparent drop-shadow-lg">
                BWS BELLEN!
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/90 text-lg sm:text-xl md:text-2xl mb-8 font-medium"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              Lokaal schoonmaakbedrijf in Wijchen en omgeving
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0165f8] rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/30 hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 focus-visible:ring-offset-2"
              >
                <Phone className="w-6 h-6" strokeWidth={2.5} />
                Neem contact op
              </Link>
              <Link
                href="/diensten"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/50 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 focus-visible:ring-offset-2"
              >
                Bekijk diensten
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

// ServicesGridBWS Component - 4-Card Grid
const ServicesGridBWS = () => {
  const mainServices = SERVICES.main.slice(0, 4);

  const serviceIcons: Record<string, typeof Building2> = {
    kantoorschoonmaak: Building2,
    glasbewassing: Droplets,
    "huishoudelijke-hulp": Home,
    dieptereiniging: Sparkles,
    nieuwbouw: Building2,
    vloeronderhoud: Sparkles,
  };

  return (
    <section className="relative py-20 md:py-32 bg-[#f8f9fb]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#0E1E40]"
            style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
          >
            Onze Diensten
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            Professionele schoonmaakdiensten voor bedrijven en particulieren
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {mainServices.map((service, index) => {
            const IconComponent =
              serviceIcons[service.id as keyof typeof serviceIcons] || Building2;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <Link
                  href={`/diensten/${service.slug}`}
                  className="block h-full bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0165f8]/10 hover:border-[#0165f8]/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0165f8]/20 focus-visible:ring-offset-2"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0165f8] to-[#01cafe] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>

                  {/* Content */}
                  <h3
                    className="text-xl md:text-2xl font-bold mb-3 text-[#0E1E40] group-hover:text-[#0165f8] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="text-gray-600 mb-4 leading-relaxed"
                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                  >
                    {service.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="flex items-center text-[#0165f8] font-semibold group-hover:gap-2 transition-all duration-300">
                    <span>Meer info</span>
                    <motion.svg
                      className="w-5 h-5 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <Link
            href="/diensten"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0165f8] to-[#01cafe] text-white rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#0165f8]/30 hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0165f8]/30 focus-visible:ring-offset-2"
          >
            Bekijk alle diensten
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBWS;
export { ServicesGridBWS };

