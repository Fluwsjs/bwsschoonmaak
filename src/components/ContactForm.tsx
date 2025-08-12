"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LiveRegion } from "./AccessibilityOptimized";
import { FORMS } from "@/lib/constants";

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
    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg border border-gray-100">
      <LiveRegion message={liveMessage} />
      
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Vraag een vrijblijvende offerte aan
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Vul onderstaand formulier in en wij nemen binnen 24 uur contact met u op.
        </p>
      </div>

      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-green-700 font-medium">
                Bedankt! Uw bericht is verzonden. Wij nemen binnen 24 uur contact op.
              </p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label htmlFor="naam" className="block text-sm font-medium text-gray-700 mb-2">
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
              className={`w-full px-3 py-3 border rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent text-gray-900 bg-white placeholder-gray-500 min-h-[44px] ${
                errors.naam ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
              }`}
              aria-invalid={!!errors.naam}
            />
            {errors.naam && (
              <p className="text-sm text-red-600 mt-1" role="alert">
                {errors.naam}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
              className={`w-full px-3 py-2 border rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent text-gray-900 bg-white placeholder-gray-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
              }`}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1" role="alert">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label htmlFor="telefoon" className="block text-sm font-medium text-gray-700 mb-2">
              Telefoonnummer
            </label>
            <input
              id="telefoon"
              name="telefoon"
              type="tel"
              value={formData.telefoon}
              onChange={(e) => handleInputChange('telefoon', e.target.value)}
              placeholder="06 - 12 34 56 78"
              className={`w-full px-3 py-2 border rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent text-gray-900 bg-white placeholder-gray-500 ${
                errors.telefoon ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
              }`}
              aria-invalid={!!errors.telefoon}
            />
            <p className="text-sm text-gray-600 mt-1">Optioneel - voor sneller contact</p>
            {errors.telefoon && (
              <p className="text-sm text-red-600 mt-1" role="alert">
                {errors.telefoon}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="bedrijf" className="block text-sm font-medium text-gray-700 mb-2">
              Bedrijfsnaam
            </label>
            <input
              id="bedrijf"
              name="bedrijf"
              type="text"
              value={formData.bedrijf}
              onChange={(e) => handleInputChange('bedrijf', e.target.value)}
              placeholder="Uw bedrijfsnaam (optioneel)"
              className="w-full px-3 py-2 border border-gray-300 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent hover:border-gray-400 text-gray-900 bg-white"
            />
          </div>
        </div>

        <div>
          <label htmlFor="dienst" className="block text-sm font-medium text-gray-700 mb-2">
            Gewenste dienst
          </label>
          <select
            id="dienst"
            name="dienst"
            value={formData.dienst}
            onChange={(e) => handleInputChange('dienst', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent transition-colors duration-200 text-gray-900 bg-white"
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
          <label htmlFor="bericht" className="block text-sm font-medium text-gray-700 mb-2">
            Bericht <span className="text-red-500" aria-label="verplicht">*</span>
          </label>
          <textarea
            id="bericht"
            name="bericht"
            value={formData.bericht}
            onChange={(e) => handleInputChange('bericht', e.target.value)}
            required
            rows={4}
            className={`w-full px-3 py-2 border rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent text-gray-900 bg-white placeholder-gray-500 ${
              errors.bericht ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
            }`}
            placeholder="Beschrijf uw schoonmaakbehoeften, frequentie, locatie en eventuele specifieke wensen..."
            aria-describedby="bericht-help bericht-error"
            aria-invalid={!!errors.bericht}
          />
          <p id="bericht-help" className="text-sm text-gray-600 mt-1">
            Hoe meer details u verstrekt, hoe beter wij u kunnen adviseren.
          </p>
          {errors.bericht && (
            <p id="bericht-error" className="text-sm text-red-600 mt-1" role="alert">
              {errors.bericht}
            </p>
          )}
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="privacy"
            name="privacyAkkoord"
            checked={formData.privacyAkkoord}
            onChange={(e) => handleInputChange('privacyAkkoord', e.target.checked)}
            className="mt-1 mr-3 h-4 w-4 text-[color:var(--primary)] border-gray-300 rounded focus:ring-[color:var(--primary)] focus:ring-2"
            aria-describedby="privacy-error"
            aria-invalid={!!errors.privacyAkkoord}
          />
          <label htmlFor="privacy" className="text-sm text-gray-600">
            Ik ga akkoord met de{' '}
            <a href="/privacy" className="text-[color:var(--primary)] hover:underline">
              privacyverklaring
            </a>{' '}
            en geef toestemming voor het verwerken van mijn gegevens voor het verstrekken van een offerte.
            <span className="text-red-500 ml-1" aria-label="verplicht">*</span>
          </label>
        </div>
        {errors.privacyAkkoord && (
          <p id="privacy-error" className="text-sm text-red-600" role="alert">
            {errors.privacyAkkoord}
          </p>
        )}

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full btn-primary min-h-[48px] text-base font-semibold ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Bezig met verzenden...
            </div>
          ) : (
            <>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Offerte aanvragen
            </>
          )}
        </motion.button>

        <p className="text-xs sm:text-sm text-gray-500 text-center">
          Door dit formulier te verzenden krijgt u binnen 24 uur een persoonlijke offerte op maat.
        </p>
      </form>
    </div>
  );
};

export default ContactForm; 