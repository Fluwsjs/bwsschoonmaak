"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Handle client-side mounting for portal
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Simple scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when menu is open
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

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isMenuOpen]);

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
    <>
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 lg:top-[41px] left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-gray-200/50' 
          : 'bg-white/90 backdrop-blur-sm border-gray-100'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16 sm:h-16 lg:h-[72px]">
          {/* Logo - Enhanced */}
          <Link 
            href="/" 
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--primary)] focus-visible:ring-offset-2 rounded-md transition-transform duration-200 active:scale-95 lg:hover:scale-105"
            aria-label="BWS Schoonmaak - Homepage"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/logobws.png"
              alt="BWS Schoonmaak Logo"
              width={150}
              height={50}
              className="h-8 w-auto sm:h-9 md:h-10 lg:h-11 xl:h-12 object-contain"
              priority
              unoptimized
            />
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
                    className={`relative flex items-center gap-1 px-4 py-2.5 text-sm font-semibold transition-all duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--primary)] focus-visible:ring-offset-2
                      ${active 
                        ? "text-[color:var(--primary)] bg-[color:var(--primary)]/10" 
                        : "text-gray-700 hover:text-[color:var(--primary)] hover:bg-gray-50/80"}
                    `}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.name}
                    {hasDropdown && (
                      <motion.div
                        animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown 
                          className="w-4 h-4"
                          strokeWidth={2.5}
                          style={{ stroke: 'currentColor' }}
                        />
                      </motion.div>
                    )}
                  </Link>
                  
                  {/* Dropdown Menu - Enhanced with Animation */}
                  <AnimatePresence>
                    {hasDropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md border border-gray-200/50 py-2 z-50 rounded-xl shadow-xl"
                        style={{
                          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        {link.dropdown.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.03 }}
                          >
                            <Link
                              href={item.path}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[color:var(--primary)] hover:bg-[color:var(--primary)]/5 transition-all duration-150 rounded-lg mx-1"
                              onClick={() => setActiveDropdown(null)}
                              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            
            {/* CTA Button - Enhanced */}
            <div className="ml-6 pl-6 border-l border-gray-200/50">
              <Link 
                href="/contact" 
                className="group relative inline-flex items-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--primary)] focus-visible:ring-offset-2 hover:opacity-90"
                style={{ 
                  backgroundColor: '#0165f8',
                  color: 'white',
                  boxShadow: '0 4px 20px rgba(1, 101, 248, 0.2)',
                }}
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--primary)] focus-visible:ring-offset-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Sluit menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={2} style={{ stroke: '#374151' }} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={2} style={{ stroke: '#374151' }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Portal to body for proper z-index stacking */}
      {mounted && typeof window !== 'undefined' && document.body && createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Full Screen Backdrop */}
              <motion.div
                key="mobile-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden"
                style={{ 
                  zIndex: 999998,
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  position: 'fixed',
                }}
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Menu Panel - Slide from Right */}
              <motion.div
                key="mobile-menu-panel"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ 
                  type: 'spring', 
                  damping: 28, 
                  stiffness: 280,
                  mass: 0.9
                }}
                id="mobile-menu"
                className="fixed top-0 right-0 bottom-0 w-full max-w-[320px] bg-white shadow-2xl lg:hidden overflow-hidden"
                style={{ 
                  zIndex: 999999,
                  height: '100vh',
                  position: 'fixed',
                }}
                onClick={(e) => e.stopPropagation()}
              >
              {/* Header with Logo and Close Button */}
              <div className="flex items-center justify-between px-4 h-16 border-b border-gray-200 bg-white shrink-0">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center"
                >
                  <Image
                    src="/logobws.png"
                    alt="BWS Schoonmaak Logo"
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain"
                    priority
                    unoptimized
                  />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
                  aria-label="Sluit menu"
                  style={{ minWidth: '44px', minHeight: '44px' }}
                >
                  <X className="w-6 h-6 text-gray-700" strokeWidth={2.5} />
                </button>
              </div>

              {/* Menu Content - Scrollable */}
              <div className="flex-1 overflow-y-auto" style={{ height: 'calc(100vh - 64px)' }}>
                <nav className="flex flex-col px-4 py-4">
                  {navLinks.map((link, index) => {
                    const hasDropdown = link.dropdown && link.dropdown.length > 0;
                    const isDropdownOpen = activeDropdown === link.name;
                    
                    return (
                      <div key={link.name} className="mb-1">
                        {hasDropdown ? (
                          <>
                            <button
                              onClick={() => setActiveDropdown(isDropdownOpen ? null : link.name)}
                              className={`w-full flex items-center justify-between px-4 py-3.5 text-base font-semibold rounded-lg transition-all duration-200 active:scale-[0.98] ${
                                isActive(link.path)
                                  ? "text-[color:var(--primary)] bg-[color:var(--primary)]/10"
                                  : "text-gray-800 hover:bg-gray-50 active:bg-gray-100"
                              }`}
                              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                            >
                              <span>{link.name}</span>
                              <motion.div
                                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronDown 
                                  className="w-5 h-5 text-gray-600"
                                  strokeWidth={2}
                                />
                              </motion.div>
                            </button>
                            <AnimatePresence>
                              {isDropdownOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="ml-4 pl-4 border-l-2 border-gray-200 mt-1 mb-2 space-y-1">
                                    {link.dropdown.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={item.path}
                                        className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[color:var(--primary)] hover:bg-[color:var(--primary)]/5 rounded-lg transition-all duration-150 active:scale-[0.98]"
                                        onClick={() => {
                                          setIsMenuOpen(false);
                                          setActiveDropdown(null);
                                        }}
                                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                      >
                                        {item.name}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={link.path}
                            className={`block px-4 py-3.5 text-base font-semibold rounded-lg transition-all duration-200 active:scale-[0.98] ${
                              isActive(link.path)
                                ? "text-[color:var(--primary)] bg-[color:var(--primary)]/10"
                                : "text-gray-800 hover:bg-gray-50 active:bg-gray-100"
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                          >
                            {link.name}
                          </Link>
                        )}
                      </div>
                    );
                  })}
                  
                  {/* CTA Button */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Link
                      href="/contact"
                      className="block w-full text-center px-6 py-3.5 text-base font-bold text-white rounded-lg transition-all duration-200 active:scale-[0.98] shadow-lg"
                      style={{ 
                        backgroundColor: '#0165f8',
                        color: 'white',
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                    <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                      Bel direct
                    </p>
                    <a 
                      href="tel:+31638935230" 
                      className="text-lg font-bold text-[color:var(--primary)] active:opacity-70 transition-opacity"
                      style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      06 38935230
                    </a>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>,
      document.body
      )}
    </motion.header>
    </>
  );
};

export default Header; 