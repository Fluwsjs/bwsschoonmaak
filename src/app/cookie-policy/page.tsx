import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookiebeleid - BWS Schoonmaak",
  description: "Lees hier hoe BWS Schoonmaak cookies gebruikt op onze website en hoe u uw voorkeuren kunt beheren.",
  openGraph: {
    title: "Cookiebeleid - BWS Schoonmaak",
    description: "Lees hier hoe BWS Schoonmaak cookies gebruikt op onze website en hoe u uw voorkeuren kunt beheren.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-[120px] md:pt-[140px] pb-16 bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--accent)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10 text-center">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
            Juridisch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cookiebeleid
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Informatie over het gebruik van cookies op onze website en hoe u uw voorkeuren kunt beheren.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <p className="text-blue-800 font-medium mb-2">Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}</p>
              <p className="text-blue-700">
                Dit cookiebeleid legt uit welke cookies BWS Schoonmaak gebruikt op de website www.bwsschoonmaak.nl 
                en hoe u uw cookievoorkeuren kunt beheren.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Wat zijn cookies?</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <p className="text-green-700 mb-3">
                Cookies zijn kleine tekstbestanden die worden geplaatst op uw computer of mobiele apparaat 
                wanneer u een website bezoekt. Ze worden veel gebruikt om websites te laten werken, 
                of om efficiënter te werken, evenals om informatie te verstrekken aan de eigenaren van de site.
              </p>
              <p className="text-green-700">
                Cookies kunnen door de website zelf worden geplaatst (first-party cookies) of door derden 
                (third-party cookies). Ze kunnen voor de duur van uw browserssessie bestaan (sessiecookies) 
                of voor een langere periode (permanente cookies).
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Welke cookies gebruiken wij?</h2>
            <p className="mb-6">BWS Schoonmaak gebruikt verschillende soorten cookies voor verschillende doeleinden:</p>

            <div className="space-y-6 mb-8">
              {/* Functionele Cookies */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">🍪 Functionele cookies (Noodzakelijk)</h3>
                    <p className="text-blue-700 mb-3">
                      Deze cookies zijn essentieel voor het goed functioneren van onze website. 
                      Zonder deze cookies zou onze website niet naar behoren werken.
                    </p>
                    <div className="bg-white rounded p-4">
                      <h4 className="font-medium text-gray-800 mb-2">Voorbeelden:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>Contactformulier functionaliteit</li>
                        <li>Beveiligingsinstellingen</li>
                        <li>Taalvoorkeur onthouden</li>
                        <li>Cookievoorkeuren opslaan</li>
                        <li>Sessie beheer</li>
                      </ul>
                    </div>
                    <p className="text-blue-600 text-sm mt-2">
                      <strong>Rechtsgrond:</strong> Gerechtvaardigd belang - noodzakelijk voor website functionaliteit
                    </p>
                  </div>
                </div>
              </div>

              {/* Analytische Cookies */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-purple-800 mb-2">📊 Analytische cookies (Optioneel)</h3>
                    <p className="text-purple-700 mb-3">
                      Deze cookies helpen ons begrijpen hoe bezoekers onze website gebruiken door 
                      informatie te verzamelen en te rapporteren op anonieme basis.
                    </p>
                    <div className="bg-white rounded p-4 mb-3">
                      <h4 className="font-medium text-gray-800 mb-2">Google Analytics:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>_ga: Onderscheidt unieke gebruikers (2 jaar)</li>
                        <li>_ga_[container-id]: Bevat campagne-gerelateerde informatie (2 jaar)</li>
                        <li>_gid: Onderscheidt unieke gebruikers (24 uur)</li>
                        <li>_gat: Gebruikt om request rate te beperken (1 minuut)</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mb-2">
                      <p className="text-yellow-700 text-sm">
                        <strong>Let op:</strong> Deze cookies worden alleen geplaatst met uw toestemming. 
                        U kunt deze te allen tijde uitschakelen via de cookie-instellingen.
                      </p>
                    </div>
                    <p className="text-purple-600 text-sm">
                      <strong>Rechtsgrond:</strong> Toestemming (die u kunt intrekken)
                    </p>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-orange-800 mb-2">🎯 Marketing cookies (Optioneel)</h3>
                    <p className="text-orange-700 mb-3">
                      Deze cookies worden gebruikt om u relevante advertenties te tonen op andere websites 
                      en om de effectiviteit van onze marketingcampagnes te meten.
                    </p>
                    <div className="bg-white rounded p-4 mb-3">
                      <h4 className="font-medium text-gray-800 mb-2">Momenteel gebruiken wij:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>Geen marketing cookies actief</li>
                        <li>Mogelijke toekomstige implementatie van Facebook Pixel</li>
                        <li>Mogelijke toekomstige implementatie van Google Ads remarketing</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded p-3 mb-2">
                      <p className="text-green-700 text-sm">
                        <strong>Goed nieuws:</strong> Momenteel plaatsen wij geen marketing cookies. 
                        Mocht dit in de toekomst veranderen, dan vragen wij altijd eerst uw uitdrukkelijke toestemming.
                      </p>
                    </div>
                    <p className="text-orange-600 text-sm">
                      <strong>Rechtsgrond:</strong> Uitdrukkelijke toestemming (indien geïmplementeerd)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hoe beheert u uw cookievoorkeuren?</h2>
            <p className="mb-6">U heeft verschillende mogelijkheden om uw cookievoorkeuren te beheren:</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">🔧 Via onze cookie-instellingen</h3>
                <p className="text-blue-700 mb-4">
                  Gebruik de cookie-instellingen op onze website om uw voorkeuren aan te passen.
                </p>
                <button className="w-full btn-primary">
                  Cookie-instellingen beheren
                </button>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">🌐 Via uw browser</h3>
                <p className="text-green-700 mb-4">
                  De meeste browsers stellen u in staat om cookies te beheren via de browserinstellingen.
                </p>
                <div className="space-y-2 text-sm">
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" 
                     className="block text-green-600 hover:underline">↗ Chrome instructies</a>
                  <a href="https://support.mozilla.org/nl/kb/cookies-informatie-websites-computer-opgeslagen" target="_blank" rel="noopener noreferrer" 
                     className="block text-green-600 hover:underline">↗ Firefox instructies</a>
                  <a href="https://support.apple.com/nl-nl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" 
                     className="block text-green-600 hover:underline">↗ Safari instructies</a>
                  <a href="https://support.microsoft.com/nl-nl/microsoft-edge/cookies-in-microsoft-edge-verwijderen-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" 
                     className="block text-green-600 hover:underline">↗ Edge instructies</a>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ Belangrijk om te weten</h3>
              <ul className="list-disc list-inside text-yellow-700 space-y-2">
                <li>Het uitschakelen van functionele cookies kan de werking van onze website beperken</li>
                <li>Uw cookievoorkeuren worden lokaal opgeslagen en moeten per apparaat/browser worden ingesteld</li>
                <li>Bij het wissen van uw browsergegevens worden ook uw cookievoorkeuren gereset</li>
                <li>Sommige cookies worden automatisch verwijderd wanneer u uw browser sluit (sessiecookies)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Externe diensten en cookies</h2>
            <p className="mb-4">Onze website maakt mogelijk gebruik van externe diensten die hun eigen cookies kunnen plaatsen:</p>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dienst</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Doel</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Privacy Policy</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Google Analytics</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Website analyse</td>
                    <td className="px-6 py-4 text-sm">
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                         className="text-blue-600 hover:underline">Google Privacy</a>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">Optioneel</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Google Maps</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Locatie weergave</td>
                    <td className="px-6 py-4 text-sm">
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                         className="text-blue-600 hover:underline">Google Privacy</a>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Functioneel</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Cloudflare</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Beveiliging & CDN</td>
                    <td className="px-6 py-4 text-sm">
                      <a href="https://www.cloudflare.com/privacy/" target="_blank" rel="noopener noreferrer" 
                         className="text-blue-600 hover:underline">Cloudflare Privacy</a>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Functioneel</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Uw rechten</h2>
            <p className="mb-4">In overeenstemming met de AVG/GDPR heeft u de volgende rechten betreffende cookies en persoonsgegevens:</p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 border border-gray-200 rounded p-4">
                <h4 className="font-semibold text-gray-800 mb-2">✅ Recht op informatie</h4>
                <p className="text-gray-700 text-sm">Weten welke cookies worden gebruikt en waarvoor</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded p-4">
                <h4 className="font-semibold text-gray-800 mb-2">🔄 Recht op wijziging</h4>
                <p className="text-gray-700 text-sm">Uw cookievoorkeuren op elk moment wijzigen</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded p-4">
                <h4 className="font-semibold text-gray-800 mb-2">❌ Recht op weigering</h4>
                <p className="text-gray-700 text-sm">Niet-essentiële cookies weigeren</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded p-4">
                <h4 className="font-semibold text-gray-800 mb-2">🗑️ Recht op verwijdering</h4>
                <p className="text-gray-700 text-sm">Verzoeken om verwijdering van uw gegevens</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Wijzigingen in dit cookiebeleid</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <p className="text-blue-700 mb-3">
                Wij kunnen dit cookiebeleid van tijd tot tijd bijwerken om wijzigingen in onze praktijken 
                of om andere operationele, wettelijke of regelgevingsredenen weer te geven.
              </p>
              <p className="text-blue-700">
                De meest recente versie van dit beleid is altijd beschikbaar op deze pagina. 
                We raden u aan om dit beleid regelmatig te bekijken om op de hoogte te blijven 
                van ons gebruik van cookies.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-3">
                Als u vragen heeft over dit cookiebeleid of over ons gebruik van cookies, 
                neem dan contact met ons op:
              </p>
              <div className="text-gray-700">
                <p><strong>BWS Schoonmaak B.V.</strong></p>
                <p>Heumenseweg 37</p>
                <p>6603 CX Wijchen</p>
                <p>Nederland</p>
                <br />
                <p>E-mail: privacy@bwsschoonmaak.nl</p>
                <p>Telefoon: 06 38935230</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-green-800 mb-3">🔗 Gerelateerde pagina's</h3>
              <div className="space-y-2">
                <Link href="/privacy" className="block text-green-600 hover:underline">
                  → Privacyverklaring
                </Link>
                <Link href="/algemene-voorwaarden" className="block text-green-600 hover:underline">
                  → Algemene voorwaarden
                </Link>
                <Link href="/contact" className="block text-green-600 hover:underline">
                  → Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[color:var(--light-bg)]">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Uw privacy is belangrijk voor ons
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We gebruiken alleen cookies die nodig zijn voor de functionaliteit van onze website, 
            plus optionele cookies voor analyse (met uw toestemming).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Cookie-instellingen beheren
            </button>
            <Link href="/privacy" className="btn-outline">
              Lees onze privacyverklaring
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
