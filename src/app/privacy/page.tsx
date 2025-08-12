import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacyverklaring - BWS Schoonmaak",
  description: "Lees hier hoe BWS Schoonmaak omgaat met uw persoonlijke gegevens conform de AVG/GDPR wetgeving.",
  openGraph: {
    title: "Privacyverklaring - BWS Schoonmaak",
    description: "Lees hier hoe BWS Schoonmaak omgaat met uw persoonlijke gegevens conform de AVG/GDPR wetgeving.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
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
            Privacyverklaring
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            BWS Schoonmaak respecteert uw privacy en handelt conform de AVG/GDPR wetgeving.
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
                Deze privacyverklaring legt uit hoe BWS Schoonmaak B.V. uw persoonlijke gegevens verzamelt, gebruikt, 
                en beschermt wanneer u onze website bezoekt of onze diensten gebruikt.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Wie zijn wij?</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p><strong>BWS Schoonmaak B.V.</strong></p>
              <p>Heumenseweg 37<br />
              6603 CX Wijchen<br />
              Nederland</p>
              <p>KvK-nummer: 12345678<br />
              BTW-nummer: NL123456789B01</p>
              <p>Telefoon: 06 38935230<br />
              E-mail: privacy@bwsschoonmaak.nl</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Welke gegevens verzamelen wij?</h2>
            <p className="mb-4">Wij verzamelen de volgende categorieën persoonlijke gegevens:</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Contactgegevens</h3>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Naam en voorletters</li>
              <li>E-mailadres</li>
              <li>Telefoonnummer</li>
              <li>Postadres (indien relevant voor dienstverlening)</li>
              <li>Bedrijfsnaam en functie (voor zakelijke klanten)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Communicatiegegevens</h3>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Berichten via contactformulieren</li>
              <li>E-mailcorrespondentie</li>
              <li>Telefoongesprekken (met uw toestemming)</li>
              <li>Specifieke wensen en voorkeuren betreffende onze diensten</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Technische gegevens</h3>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>IP-adres</li>
              <li>Browsertype en -versie</li>
              <li>Besturingssysteem</li>
              <li>Bezochte pagina's en duur van bezoek</li>
              <li>Verwijzende website</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Waarom verwerken wij uw gegevens?</h2>
            <p className="mb-4">Wij verwerken uw persoonlijke gegevens voor de volgende doeleinden:</p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Dienstverlening</h3>
              <ul className="list-disc list-inside text-green-700 space-y-1">
                <li>Het uitvoeren van onze schoonmaakdiensten</li>
                <li>Het voorbereiden en versturen van offertes</li>
                <li>Communicatie over onze diensten</li>
                <li>Klantenservice en ondersteuning</li>
                <li>Facturatie en administratie</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Wettelijke verplichtingen</h3>
              <ul className="list-disc list-inside text-blue-700 space-y-1">
                <li>Administratie voor belastingdoeleinden</li>
                <li>Naleving van boekhoudwetgeving</li>
                <li>Veiligheid en beveiliging</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Marketing (met toestemming)</h3>
              <ul className="list-disc list-inside text-purple-700 space-y-1">
                <li>Nieuwsbrieven en informatieve e-mails</li>
                <li>Informatie over nieuwe diensten</li>
                <li>Klanttevredenheidsonderzoeken</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Rechtsgronden voor verwerking</h2>
            <p className="mb-4">Wij verwerken uw gegevens op basis van:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong>Uitvoering van overeenkomst:</strong> Voor het leveren van onze diensten</li>
              <li><strong>Wettelijke verplichting:</strong> Voor administratie en belastingen</li>
              <li><strong>Gerechtvaardigd belang:</strong> Voor websitebeveiliging en verbetering</li>
              <li><strong>Toestemming:</strong> Voor marketing en nieuwsbrieven (die u altijd kunt intrekken)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Hoe lang bewaren wij uw gegevens?</h2>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Gegevenstype</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bewaartermijn</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reden</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Klantgegevens actieve klanten</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Duur van overeenkomst + 2 jaar</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Dienstverlening en garantie</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Financiële administratie</td>
                    <td className="px-6 py-4 text-sm text-gray-900">7 jaar</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Wettelijke verplichting</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Offertegegevens (niet-klanten)</td>
                    <td className="px-6 py-4 text-sm text-gray-900">2 jaar</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Mogelijke toekomstige samenwerking</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Website analytics</td>
                    <td className="px-6 py-4 text-sm text-gray-900">26 maanden</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Google Analytics standaard</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Marketing toestemming</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Tot intrekking</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Op basis van toestemming</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Delen wij uw gegevens?</h2>
            <p className="mb-4">BWS Schoonmaak deelt uw gegevens uitsluitend in de volgende gevallen:</p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Verwerkingsverantwoordelijken</h3>
              <ul className="list-disc list-inside text-yellow-700 space-y-1">
                <li><strong>Boekhouder/Accountant:</strong> Voor financiële administratie</li>
                <li><strong>IT-leveranciers:</strong> Voor website onderhoud en beveiliging</li>
                <li><strong>E-mail dienstverleners:</strong> Voor nieuwsbrieven (MailChimp, etc.)</li>
                <li><strong>Cloud opslag:</strong> Voor veilige gegevensopslag (Google Workspace, etc.)</li>
              </ul>
            </div>

            <p className="mb-6">Al deze partijen hebben een verwerkersovereenkomst getekend en mogen uw gegevens alleen gebruiken voor de afgesproken doeleinden.</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Uw rechten</h2>
            <p className="mb-4">U heeft de volgende rechten betreffende uw persoonlijke gegevens:</p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">📋 Recht op inzage</h3>
                <p className="text-blue-700 text-sm">U kunt opvragen welke gegevens wij van u hebben.</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">✏️ Recht op rectificatie</h3>
                <p className="text-green-700 text-sm">U kunt onjuiste gegevens laten corrigeren.</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">🗑️ Recht op verwijdering</h3>
                <p className="text-red-700 text-sm">U kunt verzoeken om verwijdering van uw gegevens.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="font-semibold text-purple-800 mb-2">⏸️ Recht op beperking</h3>
                <p className="text-purple-700 text-sm">U kunt de verwerking laten beperken.</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">📤 Recht op overdraagbaarheid</h3>
                <p className="text-yellow-700 text-sm">U kunt uw gegevens in leesbare vorm opvragen.</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">❌ Recht van bezwaar</h3>
                <p className="text-gray-700 text-sm">U kunt bezwaar maken tegen verwerking.</p>
              </div>
            </div>

            <div className="bg-blue-100 border border-blue-300 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Uitoefening van uw rechten</h3>
              <p className="text-blue-700 mb-3">
                Om gebruik te maken van uw rechten, kunt u contact opnemen via:
              </p>
              <ul className="list-disc list-inside text-blue-700 space-y-1">
                <li>E-mail: privacy@bwsschoonmaak.nl</li>
                <li>Telefoon: 06 38935230</li>
                <li>Post: BWS Schoonmaak B.V., t.a.v. Privacy Officer, Heumenseweg 37, 6603 CX Wijchen</li>
              </ul>
              <p className="text-blue-700 mt-3 text-sm">
                <strong>Let op:</strong> Om uw identiteit te verifiëren, vragen wij om een kopie van uw identiteitsbewijs 
                (met BSN en foto afgeplakt).
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Beveiliging van uw gegevens</h2>
            <p className="mb-4">BWS Schoonmaak neemt passende technische en organisatorische maatregelen om uw gegevens te beschermen:</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">🔒 Technische maatregelen</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>SSL-versleuteling voor website verkeer</li>
                  <li>Regelmatige beveiligingsupdates</li>
                  <li>Beveiligde server omgevingen</li>
                  <li>Toegangscontrole tot systemen</li>
                  <li>Regelmatige back-ups</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">👥 Organisatorische maatregelen</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Privacy training voor medewerkers</li>
                  <li>Beperkte toegang tot gegevens</li>
                  <li>Verwerkersovereenkomsten</li>
                  <li>Incident response procedures</li>
                  <li>Regelmatige audits</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cookies en tracking</h2>
            <p className="mb-4">Onze website gebruikt verschillende soorten cookies:</p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">🍪 Functionele cookies (verplicht)</h3>
                <p className="text-green-700 text-sm">Nodig voor de werking van de website (bijv. contactformulier, taalvoorkeur).</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">📊 Analytische cookies (optioneel)</h3>
                <p className="text-blue-700 text-sm">Google Analytics voor websitestatistieken (met uw toestemming).</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="font-semibold text-purple-800 mb-2">🎯 Marketing cookies (optioneel)</h3>
                <p className="text-purple-700 text-sm">Voor gerichte advertenties (alleen met uw uitdrukkelijke toestemming).</p>
              </div>
            </div>

            <p className="mb-6">
              Meer informatie over ons cookiegebruik vindt u in ons 
              <Link href="/cookie-policy" className="text-[color:var(--primary)] hover:underline font-medium"> cookiebeleid</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Wijzigingen in deze privacyverklaring</h2>
            <p className="mb-6">
              Wij kunnen deze privacyverklaring van tijd tot tijd aanpassen. De huidige versie is altijd beschikbaar 
              op onze website. Bij belangrijke wijzigingen informeren wij u via e-mail of een bericht op onze website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Klachten</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <p className="text-red-700 mb-3">
                Heeft u klachten over hoe wij omgaan met uw persoonlijke gegevens? 
                Neem dan eerst contact met ons op via privacy@bwsschoonmaak.nl.
              </p>
              <p className="text-red-700">
                U kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens via 
                <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" 
                   className="underline hover:no-underline"> autoriteitpersoonsgegevens.nl</a>.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-3">
                Voor vragen over deze privacyverklaring of over de verwerking van uw persoonlijke gegevens 
                kunt u contact opnemen met:
              </p>
              <div className="text-gray-700">
                <p><strong>BWS Schoonmaak B.V.</strong></p>
                <p>Privacy Officer</p>
                <p>Heumenseweg 37</p>
                <p>6603 CX Wijchen</p>
                <p>Nederland</p>
                <br />
                <p>E-mail: privacy@bwsschoonmaak.nl</p>
                <p>Telefoon: 06 38935230</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[color:var(--light-bg)]">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Heeft u vragen over onze privacy?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Wij staan altijd klaar om uw vragen te beantwoorden over hoe wij omgaan met uw persoonlijke gegevens.
          </p>
          <Link href="/contact" className="btn-primary">
            Neem contact op
          </Link>
        </div>
      </section>
    </>
  );
}
