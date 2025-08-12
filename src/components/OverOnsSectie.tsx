"use client";

import Link from "next/link";

export default function OverOnsSectie() {
  return (
    <section className="py-20 md:py-24 bg-[#F9FAFB] relative mb-0">
      <div className="container relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="badge-primary mb-4 text-sm font-medium text-[#00378e] bg-[#F9FAFB]">Over Ons</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#00378e] mb-4">
            BWS Schoonmaak: Betrouwbaar & Professioneel
          </h2>
          <p className="text-[#00378e] text-lg max-w-2xl mx-auto">
            Al meer dan 15 jaar dé specialist in schoonmaak voor bedrijven en particulieren. Kwaliteit, flexibiliteit en persoonlijk contact staan bij ons centraal.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="bg-[#00378e]/10 rounded-full p-3 mb-3">
              <svg className="w-7 h-7 text-[#00378e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
            </div>
            <h3 className="font-semibold text-[#00378e] mb-1">Gecertificeerd & Ervaren</h3>
            <p className="text-[#00378e] text-sm">Professioneel team met oog voor detail en veiligheid.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="bg-[#00378e]/10 rounded-full p-3 mb-3">
              <svg className="w-7 h-7 text-[#00378e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="font-semibold text-[#00378e] mb-1">100% Tevredenheid</h3>
            <p className="text-[#00378e] text-sm">Wij garanderen een schoon resultaat en tevreden klanten.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="bg-[#00378e]/10 rounded-full p-3 mb-3">
              <svg className="w-7 h-7 text-[#00378e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 018 0v2m-4-4a4 4 0 100-8 4 4 0 000 8z" /></svg>
            </div>
            <h3 className="font-semibold text-[#00378e] mb-1">Persoonlijk Contact</h3>
            <p className="text-[#00378e] text-sm">Vaste aanspreekpunten en korte lijnen voor al uw vragen.</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link href="/over-ons" className="btn-primary inline-block bg-[#00378e] text-white border-none">
            Meer over ons
          </Link>
        </div>
      </div>
    </section>
  );
} 