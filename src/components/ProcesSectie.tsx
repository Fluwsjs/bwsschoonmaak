"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ProcesStapProps {
  nummer: number;
  titel: string;
  beschrijving: string;
  icoon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const ProcesStap = ({ nummer, titel, beschrijving, icoon, isActive, onClick }: ProcesStapProps) => {
  return (
    <motion.div
      className="relative cursor-pointer group"
      onClick={onClick}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={`relative flex flex-col h-full p-6 sm:p-8 rounded-xl transition-all duration-500 min-h-[350px] sm:min-h-[400px] bg-white border-2
          ${isActive
            ? 'shadow-xl border-green-500'
            : 'shadow-lg hover:shadow-xl border-gray-100 hover:border-green-200'}
        `}
      >
        {/* Stap nummer en titel */}
        <div className="flex items-start mb-6 sm:mb-8">
          <div
            className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg transition-all duration-300
              ${isActive
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-400 group-hover:bg-green-100 group-hover:text-green-600'}
            `}
          >
            {nummer}
          </div>
          <div className="ml-3 sm:ml-4 flex-1">
            <h3
              className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 leading-tight transition-colors duration-300
                ${isActive ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'}
              `}
            >
              {titel}
            </h3>
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300
              ${isActive
                ? 'bg-green-100 text-green-600'
                : 'bg-gray-50 text-gray-400 group-hover:bg-green-50 group-hover:text-green-600'}
            `}
            >
              {icoon}
            </div>
          </div>
        </div>
        
        {/* Beschrijving */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">{beschrijving}</p>
        
        {/* Eco timeline dot - verborgen op mobiel */}
        <div className="absolute -left-2 top-6 sm:top-8 hidden lg:block">
          <div
            className={`w-4 h-4 rounded-full border-4 border-white transition-all duration-300
              ${isActive
                ? 'bg-green-600'
                : 'bg-gray-300 group-hover:bg-green-400'}
            `}
          />
        </div>
      </div>
      {/* Groene timeline verbinding - alleen op desktop */}
      {nummer < 4 && (
        <div className="hidden lg:block absolute left-0 top-12 bottom-0 w-0.5 bg-green-200">
          <motion.div
            className="w-full bg-green-600"
            initial={{ height: "0%" }}
            animate={{ height: isActive ? "100%" : "0%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      )}
    </motion.div>
  );
};

const ProcesSectie = () => {
  const [activeStep, setActiveStep] = useState(1);

  const ecoInitiatieven = [
    {
      nummer: 1,
      titel: "Biologisch Afbreekbare Producten",
      beschrijving: "Alle onze reinigingsmiddelen zijn 100% biologisch afbreekbaar en vrij van schadelijke chemicaliën. Gecertificeerd volgens EU Ecolabel standaarden voor maximale milieuvriendelijkheid.",
      icoon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      nummer: 2,
      titel: "Waterbesparende Technieken",
      beschrijving: "Geavanceerde microfiber technologie en gecontroleerde doseersystemen reduceren ons waterverbruik tot 40%. Smart cleaning methoden voor optimale efficiëntie.",
      icoon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      nummer: 3,
      titel: "CO2-neutrale Uitvoering",
      beschrijving: "Elektrische voertuigen voor lokale dienstverlening en geoptimaliseerde routeplanning. Carbon offset programma's compenseren onze totale milieu-impact.",
      icoon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      nummer: 4,
      titel: "Afvalreductie & Recycling",
      beschrijving: "Zero-waste beleid met herbruikbare materialen en complete recycling van alle afvalstromen. Digitale rapportage elimineert papierverbruik volledig.",
      icoon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white relative mb-0 overflow-hidden">
      {/* Subtiele achtergrond pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-gray-50/30" />
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-md mb-6 uppercase tracking-wider">
            Duurzame Schoonmaak
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Schoon voor Uw Bedrijf,<br />
            <span className="text-green-600">Veilig voor de Planeet</span>
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-xl leading-relaxed font-light">
            BWS Schoonmaak is volledig toegewijd aan milieuvriendelijke praktijken. Onze eco-vriendelijke aanpak zorgt voor uitstekende resultaten zonder compromissen op duurzaamheid.
          </p>
        </motion.div>
        {/* Eco Initiatieven - Responsive Grid */}
        <div className="max-w-6xl mx-auto relative">
          {/* Groene verticale timeline lijn - alleen op desktop */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-green-200 hidden lg:block" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {ecoInitiatieven.map((initiatief, index) => (
              <ProcesStap
                key={index}
                nummer={initiatief.nummer}
                titel={initiatief.titel}
                beschrijving={initiatief.beschrijving}
                icoon={initiatief.icoon}
                isActive={activeStep === initiatief.nummer}
                onClick={() => setActiveStep(initiatief.nummer)}
              />
            ))}
          </div>
        </div>
        {/* Eco Benefits Grid */}
        <div className="mt-16 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Biologisch Afbreekbaar</h3>
              <p className="text-gray-600 text-sm leading-relaxed">EU Ecolabel gecertificeerde producten</p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Waterbesparend</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Geavanceerde microfiber technologie</p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">CO₂-neutraal</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Elektrische voertuigen en offset programma's</p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Zero-waste</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Herbruikbare materialen en recycling</p>
            </div>
          </div>
        </div>
        {/* Eco CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-xl shadow-lg border border-gray-100 p-8 sm:p-10 lg:p-12 max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Maak de overstap naar duurzame schoonmaak
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              Ontdek hoe BWS Schoonmaak uw bedrijf helpt bij het realiseren van duurzaamheidsdoelstellingen 
              zonder concessies te doen aan kwaliteit of efficiëntie.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
            <a 
              href="/contact" 
              className="btn-primary text-center"
            >
              Duurzame offerte aanvragen
            </a>
            <a 
              href="tel:+31201234567" 
              className="btn-outline text-center"
            >
              020 - 123 4567
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-sm text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">100% Eco-vriendelijk</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">EU Ecolabel gecertificeerd</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">Zero-waste aanpak</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcesSectie; 