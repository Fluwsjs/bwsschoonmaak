"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "@/components/AccessibilityOptimized";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.98]);

  // Enhanced scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Header visibility is now controlled by opacity in headerOpacity
          // Removed setIsVisible calls as the state was removed
          
          setScrolled(currentScrollY > 20);
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        
        ticking.current = true;
      }
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
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname?.startsWith(path);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Diensten", path: "/diensten" },
    { name: "Over ons", path: "/over-ons" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b backdrop-blur-md ${scrolled ? 'bg-white/95 shadow-xl border-[color:var(--primary)]/10' : 'bg-white/80 shadow-none border-white/20'}`}
      style={{ opacity: prefersReducedMotion ? 1 : headerOpacity }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--primary)] focus-visible:ring-offset-2"
            aria-label="BWS Schoonmaak - Homepage"
          >
            <motion.div 
              className="relative"
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span className={`font-bold text-[color:var(--primary)] transition-all duration-300 ${
                scrolled ? 'text-xl' : 'text-2xl'
              }`}>
                BWS Schoonmaak
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Hoofdnavigatie">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative text-sm font-semibold transition-all duration-300 px-4 py-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--primary)] focus-visible:ring-offset-2
                    ${active 
                      ? "text-[color:var(--primary)] bg-[color:var(--primary)]/10 font-bold" 
                      : "text-gray-700 hover:text-[color:var(--primary)] hover:bg-[color:var(--primary)]/5"}
                  `}
                  aria-current={active ? "page" : undefined}
                >
                  <span className="relative z-10 px-1">
                    {link.name}
                  </span>
                  {active && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[color:var(--primary)] rounded-full" 
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            {/* CTA Button */}
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] hover:from-[color:var(--accent)] hover:to-[color:var(--primary)] rounded-md transition-all duration-300 shadow-md hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--primary)] focus-visible:ring-offset-2"
              >
                Gratis Offerte
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-3 -mr-2 z-[10000] relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--primary)] focus-visible:ring-offset-2 rounded-xl transition-all duration-300 hover:bg-[color:var(--primary)]/10 active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Sluit menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center">
              <motion.span 
                className={`block h-0.5 w-6 bg-[color:var(--primary)] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}
                animate={isMenuOpen ? { rotate: 45, translateY: 4 } : { rotate: 0, translateY: 0 }}
              />
              <motion.span 
                className={`block h-0.5 w-6 bg-[color:var(--primary)] transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span 
                className={`block h-0.5 w-6 bg-[color:var(--primary)] transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}
                animate={isMenuOpen ? { rotate: -45, translateY: -4 } : { rotate: 0, translateY: 0 }}
              />
            </div>
          </motion.button>
        </div>
      </div>
    </motion.header>

    {/* Enhanced Mobile Menu - Outside header for better layering */}
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div 
          id="mobile-menu"
          className="fixed inset-0 z-[9999] bg-[color:var(--primary)] flex flex-col"
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Close button */}
          <motion.button
            className="absolute top-4 right-4 text-white/90 p-3 rounded-full hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 z-[10001]"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Sluit menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Menu content */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 pt-16">
            <nav className="flex flex-col gap-6 items-center">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                >
                  <Link
                    href={link.path}
                    className="text-3xl font-bold text-white hover:text-[color:var(--secondary)] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded-lg px-4 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-10 py-4 text-xl font-bold text-[color:var(--primary)] bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Gratis Offerte
                </Link>
              </motion.div>
            </nav>

            {/* Contact info in mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-12 text-center text-white/80"
            >
              <p className="text-sm">Of bel direct:</p>
              <a href="tel:+31638935230" className="text-lg font-semibold text-white hover:text-[color:var(--secondary)] transition-colors">
                06 38935230
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default Header; 