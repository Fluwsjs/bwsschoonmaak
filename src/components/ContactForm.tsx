"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LiveRegion } from "./AccessibilityOptimized";
import { FORMS } from "@/lib/constants";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

interface FormData {
  naam: string;
  email: string;
  telefoon: string;
  bedrijf: string;
  bericht: string;
  dienst: string;
  privacyAkkoord: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    naam: '',
    email: '',
    telefoon: '',
    bedrijf: '',
    bericht: '',
    dienst: '',
    privacyAkkoord: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [liveMessage, setLiveMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const diensten = FORMS.contact.services;

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Naam validatie
    if (!formData.naam.trim()) {
      newErrors.naam = 'Naam is verplicht';
    } else if (formData.naam.trim().length < 2) {
      newErrors.naam = 'Naam moet minimaal 2 karakters bevatten';
    }

    // Email validatie
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'E-mailadres is verplicht';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Voer een geldig e-mailadres in';
    }

    // Telefoon validatie (optioneel maar indien ingevuld moet het geldig zijn)
    if (formData.telefoon.trim()) {
      const phoneRegex = /^[+]?[(]?[\d\s\-\(\)]{10,}$/;
      if (!phoneRegex.test(formData.telefoon.replace(/\s/g, ''))) {
        newErrors.telefoon = 'Voer een geldig telefoonnummer in';
      }
    }

    // Bericht validatie
    if (!formData.bericht.trim()) {
      newErrors.bericht = 'Bericht is verplicht';
    } else if (formData.bericht.trim().length < 10) {
      newErrors.bericht = 'Bericht moet minimaal 10 karakters bevatten';
    }

    // Privacy akkoord validatie
    if (!formData.privacyAkkoord) {
      newErrors.privacyAkkoord = 'Privacy akkoord is verplicht';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setLiveMessage('Er zijn fouten in het formulier. Controleer de velden en probeer opnieuw.');
      return;
    }

    setIsSubmitting(true);
    setLiveMessage('Formulier wordt verzonden...');

    try {
      // Simuleer API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In productie zou hier een echte API call komen
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setSubmitStatus('success');
      setLiveMessage('Bedankt! Uw bericht is succesvol verzonden. Wij nemen binnen 24 uur contact met u op.');
      
      // Reset formulier
      setFormData({
        naam: '',
        email: '',
        telefoon: '',
        bedrijf: '',
        bericht: '',
        dienst: '',
        privacyAkkoord: false
      });
      
    } catch {
      setSubmitStatus('error');
      setLiveMessage('Er is een fout opgetreden bij het verzenden. Probeer het opnieuw of neem telefonisch contact op.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100">
      <LiveRegion message={liveMessage} />
      
      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-xl"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 
                  className="text-lg font-bold text-green-900 mb-1"
                  style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                >
                  Bedankt voor uw aanvraag!
                </h3>
                <p 
                  className="text-green-700"
                  style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                >
                  Uw bericht is succesvol verzonden. Wij nemen binnen 24 uur contact met u op.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-xl"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 
                  className="text-lg font-bold text-red-900 mb-1"
                  style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                >
                  Er is een fout opgetreden
                </h3>
                <p 
                  className="text-red-700"
                  style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                >
                  Probeer het opnieuw of neem telefonisch contact op via 06 38935230.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form 
        ref={formRef} 
        onSubmit={handleSubmit} 
        className="space-y-6" 
        noValidate
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* Netlify form detection */}
        <input type="hidden" name="form-name" value="contact" />
        
        {/* Honeypot for spam protection */}
        <div style={{ display: 'none' }}>
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label 
              htmlFor="naam" 
              className="block text-sm font-semibold text-gray-900 mb-2"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              Naam <span className="text-red-500" aria-label="verplicht">*</span>
            </label>
            <input
              id="naam"
              name="naam"
              type="text"
              value={formData.naam}
              onChange={(e) => handleInputChange('naam', e.target.value)}
              required
              placeholder="Uw volledige naam"
              className={`w-full px-4 py-3.5 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0165f8] focus:border-transparent text-gray-900 bg-white placeholder-gray-400 min-h-[48px] ${
                errors.naam ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
              }`}
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
              aria-invalid={!!errors.naam}
            />
            {errors.naam && (
              <p className="text-sm text-red-600 mt-2" role="alert" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                {errors.naam}
              </p>
            )}
          </div>

          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-semibold text-gray-900 mb-2"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              E-mailadres <span className="text-red-500" aria-label="verplicht">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              placeholder="uw.naam@email.nl"
              className={`w-full px-4 py-3.5 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0165f8] focus:border-transparent text-gray-900 bg-white placeholder-gray-400 min-h-[48px] ${
                errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
              }`}
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-2" role="alert" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label 
              htmlFor="telefoon" 
              className="block text-sm font-semibold text-gray-900 mb-2"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              Telefoonnummer
            </label>
            <input
              id="telefoon"
              name="telefoon"
              type="tel"
              value={formData.telefoon}
              onChange={(e) => handleInputChange('telefoon', e.target.value)}
              placeholder="06 - 12 34 56 78"
              className={`w-full px-4 py-3.5 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0165f8] focus:border-transparent text-gray-900 bg-white placeholder-gray-400 min-h-[48px] ${
                errors.telefoon ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
              }`}
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
              aria-invalid={!!errors.telefoon}
            />
            <p className="text-sm text-gray-500 mt-2" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
              Optioneel - voor sneller contact
            </p>
            {errors.telefoon && (
              <p className="text-sm text-red-600 mt-2" role="alert" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                {errors.telefoon}
              </p>
            )}
          </div>

          <div>
            <label 
              htmlFor="bedrijf" 
              className="block text-sm font-semibold text-gray-900 mb-2"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              Bedrijfsnaam
            </label>
            <input
              id="bedrijf"
              name="bedrijf"
              type="text"
              value={formData.bedrijf}
              onChange={(e) => handleInputChange('bedrijf', e.target.value)}
              placeholder="Uw bedrijfsnaam (optioneel)"
              className="w-full px-4 py-3.5 border border-gray-300 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0165f8] focus:border-transparent hover:border-gray-400 text-gray-900 bg-white placeholder-gray-400 min-h-[48px]"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            />
          </div>
        </div>

        <div>
          <label 
            htmlFor="dienst" 
            className="block text-sm font-semibold text-gray-900 mb-2"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            Gewenste dienst
          </label>
          <select
            id="dienst"
            name="dienst"
            value={formData.dienst}
            onChange={(e) => handleInputChange('dienst', e.target.value)}
            className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0165f8] focus:border-transparent transition-all duration-200 text-gray-900 bg-white hover:border-gray-400 min-h-[48px]"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            <option value="">Selecteer een dienst</option>
            {diensten.map((dienst) => (
              <option key={dienst} value={dienst}>
                {dienst}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label 
            htmlFor="bericht" 
            className="block text-sm font-semibold text-gray-900 mb-2"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            Bericht <span className="text-red-500" aria-label="verplicht">*</span>
          </label>
          <textarea
            id="bericht"
            name="bericht"
            value={formData.bericht}
            onChange={(e) => handleInputChange('bericht', e.target.value)}
            required
            rows={6}
            className={`w-full px-4 py-3.5 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0165f8] focus:border-transparent text-gray-900 bg-white placeholder-gray-400 resize-none ${
              errors.bericht ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
            }`}
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            placeholder="Beschrijf uw schoonmaakbehoeften, frequentie, locatie en eventuele specifieke wensen..."
            aria-describedby="bericht-help bericht-error"
            aria-invalid={!!errors.bericht}
          />
          <p id="bericht-help" className="text-sm text-gray-500 mt-2" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
            Hoe meer details u verstrekt, hoe beter wij u kunnen adviseren.
          </p>
          {errors.bericht && (
            <p id="bericht-error" className="text-sm text-red-600 mt-2" role="alert" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
              {errors.bericht}
            </p>
          )}
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="privacy"
            name="privacyAkkoord"
            checked={formData.privacyAkkoord}
            onChange={(e) => handleInputChange('privacyAkkoord', e.target.checked)}
            className="mt-1.5 h-5 w-5 text-[#0165f8] border-gray-300 rounded focus:ring-[#0165f8] focus:ring-2 cursor-pointer"
            aria-describedby="privacy-error"
            aria-invalid={!!errors.privacyAkkoord}
          />
          <label 
            htmlFor="privacy" 
            className="text-sm text-gray-700 leading-relaxed"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            Ik ga akkoord met de{' '}
            <a href="/privacy" className="text-[#0165f8] hover:text-[#01cafe] font-semibold underline transition-colors">
              privacyverklaring
            </a>{' '}
            en geef toestemming voor het verwerken van mijn gegevens voor het verstrekken van een offerte.
            <span className="text-red-500 ml-1" aria-label="verplicht">*</span>
          </label>
        </div>
        {errors.privacyAkkoord && (
          <p id="privacy-error" className="text-sm text-red-600 -mt-3" role="alert" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
            {errors.privacyAkkoord}
          </p>
        )}

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full min-h-[56px] text-base font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 ${
            isSubmitting 
              ? 'opacity-75 cursor-not-allowed bg-gray-400' 
              : 'bg-gradient-to-r from-[#0165f8] to-[#01cafe] text-white hover:shadow-xl hover:shadow-[#0165f8]/30 hover:-translate-y-1'
          }`}
          style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Bezig met verzenden...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" strokeWidth={2.5} />
              <span>Offerte aanvragen</span>
            </>
          )}
        </motion.button>

        <p className="text-sm text-gray-500 text-center" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
          Door dit formulier te verzenden krijgt u binnen 24 uur een persoonlijke offerte op maat.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
