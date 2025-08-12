"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-[120px] md:pt-[140px] pb-20 md:pb-24 min-h-[700px] overflow-hidden bg-white">
      {/* Subtle background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-[color:var(--primary)] opacity-5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-[color:var(--secondary)] opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pr-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Uw <span className="text-[color:var(--primary)]">schoonmaak</span> in vertrouwde handen
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed"
            >
              Van kantoorpand tot ziekenhuis - wij hebben er ervaring mee. Dagelijkse schoonmaak, glasbewassing en specialistisch onderhoud voor alle soorten gebouwen en moeilijk bereikbare plaatsen.
            </motion.p>

            {/* Snelle offerte aanvraag */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-12"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Krijg direct een indicatieve offerte</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Uw naam"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent text-base text-gray-900 bg-white placeholder-gray-500"
                />
                <input
                  type="tel"
                  placeholder="Telefoonnummer"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent text-base text-gray-900 bg-white placeholder-gray-500"
                />
              </div>
              <div className="mb-4">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent text-base text-gray-900 bg-white">
                  <option value="" className="text-gray-500">Selecteer gewenste dienst</option>
                  <option value="kantoorschoonmaak" className="text-gray-900">Kantoorschoonmaak</option>
                  <option value="glasbewassing" className="text-gray-900">Glasbewassing</option>
                  <option value="huishoudelijke-hulp" className="text-gray-900">Huishoudelijke hulp</option>
                  <option value="dieptereiniging" className="text-gray-900">Dieptereiniging</option>
                  <option value="nieuwbouw" className="text-gray-900">Nieuwbouw schoonmaak</option>
                  <option value="vloeronderhoud" className="text-gray-900">Vloeronderhoud</option>
                  <option value="anders" className="text-gray-900">Anders</option>
                </select>
              </div>
              <button className="w-full btn-primary py-3 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Vraag gratis offerte aan
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">
                Binnen 24 uur een persoonlijke offerte op maat
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 gap-8 mb-8"
            >
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">15+</div>
                <div className="text-gray-600 text-sm">Jaar ervaring</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">~500+</div>
                <div className="text-gray-600 text-sm">Tevreden klanten</div>
              </div>
            </motion.div>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex items-center gap-3"
            >
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span className="text-gray-900 font-semibold">4.9</span>
              <span className="text-gray-600 text-sm">Gemiddelde gebruikerswaardering</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:pl-8"
          >
            {/* Schoonmaak Dashboard Mockup */}
            <div className="relative max-w-lg mx-auto">
              {/* Main Dashboard */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-1 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">SchoonmaakPlan</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                
                {/* Diensten voortgang */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">Kantoorschoonmaak</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-4/5 h-full bg-[color:var(--primary)] rounded-full"></div>
                      </div>
                      <span className="text-xs text-gray-500">80%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L3 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l3-1.8a1 1 0 011.098.382z" clipRule="evenodd"/>
                          <path d="M6 10a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8z"/>
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">Glasbewassing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-green-400 rounded-full"></div>
                      </div>
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">Gevelreiniging</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-1/3 h-full bg-[color:var(--secondary)] rounded-full"></div>
                      </div>
                      <span className="text-xs text-gray-500">33%</span>
                    </div>
                  </div>
                </div>

                {/* Planning overzicht */}
                <div className="space-y-2">
                  <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Deze Week</h4>
                  <div className="grid grid-cols-7 gap-1">
                    {['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'].map((day, i) => (
                      <div key={day} className={`text-center p-1 rounded text-xs ${i < 5 ? 'bg-[color:var(--primary)]/10 text-[color:var(--primary)]' : 'bg-gray-100 text-gray-400'}`}>
                        {day}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Taak voltooid notificatie */}
              <div className="absolute top-8 -left-8 bg-white rounded-xl shadow-lg p-4 transform -rotate-6 hover:-rotate-3 transition-transform duration-500 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Taak voltooid</p>
                    <p className="text-xs text-gray-500">Ramen 3e verdieping</p>
                  </div>
                </div>
              </div>

              {/* Kwaliteit certificaat */}
              <div className="absolute bottom-8 -right-8 bg-white rounded-xl shadow-lg p-4 transform rotate-6 hover:rotate-3 transition-transform duration-500 border border-gray-100">
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-xs font-medium text-gray-900">ISO Gecertificeerd</p>
                  <p className="text-xs text-gray-500">Kwaliteit gewaarborgd</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 