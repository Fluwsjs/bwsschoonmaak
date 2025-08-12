import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden - BWS Schoonmaak",
  description: "Lees hier de algemene voorwaarden van BWS Schoonmaak voor onze professionele schoonmaakdiensten.",
  openGraph: {
    title: "Algemene Voorwaarden - BWS Schoonmaak",
    description: "Lees hier de algemene voorwaarden van BWS Schoonmaak voor onze professionele schoonmaakdiensten.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AlgemeneVoorwaardenPage() {
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
            Algemene Voorwaarden
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            De voorwaarden die van toepassing zijn op al onze schoonmaakdiensten en overeenkomsten.
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
                Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten tussen BWS Schoonmaak B.V. 
                en haar opdrachtgevers betreffende de levering van schoonmaakdiensten.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 1 - Definities</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <dl className="space-y-3">
                <div>
                  <dt className="font-semibold text-gray-900">BWS Schoonmaak:</dt>
                  <dd className="text-gray-700">BWS Schoonmaak B.V., gevestigd te Amsterdam, KvK-nummer 12345678</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Opdrachtgever:</dt>
                  <dd className="text-gray-700">De natuurlijke of rechtspersoon die een overeenkomst aangaat met BWS Schoonmaak</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Diensten:</dt>
                  <dd className="text-gray-700">Alle schoonmaakwerkzaamheden en aanverwante diensten zoals omschreven in de overeenkomst</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Overeenkomst:</dt>
                  <dd className="text-gray-700">De schriftelijke of digitale overeenkomst tussen partijen, inclusief deze algemene voorwaarden</dd>
                </div>
              </dl>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 2 - Toepasselijkheid</h2>
            <div className="space-y-4 mb-6">
              <p>2.1. Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten van BWS Schoonmaak.</p>
              <p>2.2. Afwijkende voorwaarden van opdrachtgever zijn alleen van toepassing indien deze uitdrukkelijk schriftelijk door BWS Schoonmaak zijn aanvaard.</p>
              <p>2.3. Bij strijdigheid tussen deze voorwaarden en specifieke contractbepalingen, prevaleren de specifieke contractbepalingen.</p>
              <p>2.4. Indien één of meerdere bepalingen nietig zijn, blijven de overige bepalingen van kracht.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 3 - Aanbiedingen en totstandkoming overeenkomst</h2>
            <div className="space-y-4 mb-6">
              <p>3.1. Alle aanbiedingen en offertes van BWS Schoonmaak zijn vrijblijvend, tenzij uitdrukkelijk anders vermeld.</p>
              <p>3.2. Een overeenkomst komt tot stand door schriftelijke bevestiging door beide partijen of door aanvang van de werkzaamheden.</p>
              <p>3.3. Wijzigingen in de overeenkomst zijn alleen geldig indien schriftelijk overeengekomen.</p>
              <p>3.4. BWS Schoonmaak behoudt zich het recht voor om een opdracht te weigeren zonder opgave van redenen.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 4 - Uitvoering van de diensten</h2>
            <div className="space-y-4 mb-6">
              <p>4.1. BWS Schoonmaak voert de diensten uit conform de overeengekomen specificaties en professionele standaarden.</p>
              <p>4.2. BWS Schoonmaak heeft het recht om werkzaamheden uit te laten voeren door derden (onderaannemers).</p>
              <p>4.3. Opdrachtgever verschaft BWS Schoonmaak tijdig alle benodigde informatie en toegang tot de te reinigen ruimtes.</p>
              <p>4.4. Indien door omstandigheden aan de zijde van opdrachtgever vertraging ontstaat, komen de meerkosten voor rekening van opdrachtgever.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 5 - Toegang en veiligheid</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <p>5.1. Opdrachtgever zorgt voor vrije en veilige toegang tot de te reinigen ruimtes tijdens de overeengekomen tijden.</p>
                <p>5.2. BWS Schoonmaak is niet aansprakelijk voor schade ontstaan door onveilige situaties die niet door haar zijn veroorzaakt.</p>
                <p>5.3. Opdrachtgever informeert BWS Schoonmaak over specifieke veiligheidsregels, alarmsystemen en toegangsprocedures.</p>
                <p>5.4. Bij het gebruik van sleutels/toegangsmiddelen draagt opdrachtgever zorg voor adequate verzekering.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 6 - Prijzen en betaling</h2>
            <div className="space-y-4 mb-6">
              <p>6.1. Alle prijzen zijn exclusief BTW en andere heffingen, tenzij anders vermeld.</p>
              <p>6.2. Prijswijzigingen kunnen worden doorgevoerd met een opzegtermijn van 30 dagen.</p>
              <p>6.3. Facturen dienen binnen 30 dagen na factuurdatum te worden betaald.</p>
              <p>6.4. Bij niet-tijdige betaling is opdrachtgever van rechtswege in verzuim en is wettelijke rente verschuldigd.</p>
              <p>6.5. BWS Schoonmaak behoudt zich het recht voor om vooruitbetaling te verlangen.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 7 - Annulering en wijzigingen</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <p>7.1. <strong>Reguliere schoonmaak:</strong> Annulering moet minimaal 24 uur van tevoren worden doorgegeven.</p>
                <p>7.2. <strong>Eenmalige opdrachten:</strong> Annulering binnen 48 uur voor uitvoering: 50% van de kosten. Binnen 24 uur: 100% van de kosten.</p>
                <p>7.3. <strong>Grote projecten:</strong> Annuleringsvoorwaarden worden per project specifiek overeengekomen.</p>
                <p>7.4. Wijzigingen in opdrachten kunnen leiden tot aanpassing van de kosten en planning.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 8 - Aansprakelijkheid</h2>
            <div className="space-y-4 mb-6">
              <p>8.1. BWS Schoonmaak is aansprakelijk voor directe schade die het gevolg is van haar toerekenbare tekortkoming.</p>
              <p>8.2. De aansprakelijkheid is beperkt tot het bedrag dat de verzekeraar in het betreffende geval uitkeert, verhoogd met het eigen risico.</p>
              <p>8.3. Indien geen uitkering plaatsvindt, is de aansprakelijkheid beperkt tot de factuurwaarde van de betreffende opdracht, met een maximum van € 2.500.</p>
              <p>8.4. BWS Schoonmaak is niet aansprakelijk voor:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Schade aan kwetsbare, kostbare of antieke voorwerpen</li>
                <li>Indirecte schade, gevolgschade of bedrijfsschade</li>
                <li>Schade door gebreken aan door opdrachtgever verstrekte materialen</li>
                <li>Schade door niet-nakoming van veiligheidsregels door opdrachtgever</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 9 - Verzekering</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <p>9.1. BWS Schoonmaak heeft een bedrijfsaansprakelijkheidsverzekering met een dekking van minimaal € 1.250.000 per gebeurtenis.</p>
                <p>9.2. Op verzoek verstrekt BWS Schoonmaak een kopie van de polis of het certificaat van verzekering.</p>
                <p>9.3. BWS Schoonmaak adviseert opdrachtgever om eigen inboedel- en bedrijfsinventarisverzekering af te sluiten.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 10 - Kwaliteit en klachten</h2>
            <div className="space-y-4 mb-6">
              <p>10.1. BWS Schoonmaak streeft naar de hoogste kwaliteit van dienstverlening conform branchestandaarden.</p>
              <p>10.2. Klachten dienen binnen 24 uur na voltooiing van de werkzaamheden schriftelijk te worden gemeld.</p>
              <p>10.3. BWS Schoonmaak krijgt de gelegenheid om geconstateerde gebreken kosteloos te herstellen.</p>
              <p>10.4. Na herstel vervalt elk recht op schadevergoeding of prijsmindering.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 11 - Opzegging</h2>
            <div className="space-y-4 mb-6">
              <p>11.1. <strong>Lopende contracten:</strong> Kunnen door beide partijen worden opgezegd met inachtneming van een opzegtermijn van 1 maand.</p>
              <p>11.2. <strong>Proefperiode:</strong> De eerste 4 weken geldt een opzegtermijn van 1 week.</p>
              <p>11.3. Opzegging dient schriftelijk te geschieden voor de laatste werkdag van de maand.</p>
              <p>11.4. BWS Schoonmaak mag de overeenkomst direct opzeggen bij:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Niet-betaling na aanmaning</li>
                <li>Faillissement of surseance van opdrachtgever</li>
                <li>Ernstige tekortkoming in de nakoming door opdrachtgever</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 12 - Vertrouwelijkheid</h2>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <p>12.1. BWS Schoonmaak behandelt alle informatie over opdrachtgever vertrouwelijk.</p>
                <p>12.2. Medewerkers zijn gebonden aan geheimhouding en hebben een Verklaring Omtrent Gedrag (VOG).</p>
                <p>12.3. BWS Schoonmaak mag bedrijfsnamen gebruiken als referentie, tenzij opdrachtgever dit uitdrukkelijk verbiedt.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 13 - Overmacht</h2>
            <div className="space-y-4 mb-6">
              <p>13.1. BWS Schoonmaak is niet gehouden tot nakoming indien zij daartoe verhinderd wordt door overmacht.</p>
              <p>13.2. Onder overmacht wordt verstaan: ziekte van personeel, extreme weersomstandigheden, stakingen, overheidsmaatregelen, pandemieën, en andere omstandigheden buiten de controle van BWS Schoonmaak.</p>
              <p>13.3. Bij overmacht worden afspraken opgeschort tot normale uitvoering weer mogelijk is.</p>
              <p>13.4. Bij overmacht langer dan 2 maanden kunnen beide partijen de overeenkomst schriftelijk beëindigen.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 14 - Intellectuele eigendom</h2>
            <div className="space-y-4 mb-6">
              <p>14.1. Alle intellectuele eigendomsrechten op door BWS Schoonmaak ontwikkelde methodieken, checklists en procedures behoren toe aan BWS Schoonmaak.</p>
              <p>14.2. Het is opdrachtgever niet toegestaan om BWS-methodieken te kopiëren of aan derden ter beschikking te stellen.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 15 - Persoonsgegevens</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <p className="text-blue-700">
                BWS Schoonmaak verwerkt persoonsgegevens conform de AVG/GDPR wetgeving. 
                Meer informatie vindt u in onze 
                <Link href="/privacy" className="underline hover:no-underline font-medium">privacyverklaring</Link>.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 16 - Toepasselijk recht en geschillenregeling</h2>
            <div className="space-y-4 mb-6">
              <p>16.1. Op alle overeenkomsten met BWS Schoonmaak is Nederlands recht van toepassing.</p>
              <p>16.2. Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement Amsterdam.</p>
              <p>16.3. Partijen zullen eerst trachten geschillen in onderling overleg op te lossen.</p>
              <p>16.4. Voor geschillen tot € 40.000 is de Kantonrechter bevoegd.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 17 - Slotbepalingen</h2>
            <div className="space-y-4 mb-6">
              <p>17.1. Deze algemene voorwaarden zijn gedeponeerd bij de Kamer van Koophandel.</p>
              <p>17.2. BWS Schoonmaak behoudt zich het recht voor deze voorwaarden te wijzigen.</p>
              <p>17.3. Wijzigingen worden 30 dagen van tevoren schriftelijk medegedeeld.</p>
              <p>17.4. Indien opdrachtgever niet akkoord gaat met wijzigingen, kan de overeenkomst worden beëindigd per de datum van inwerkingtreding.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Contactgegevens</h3>
              <div className="text-gray-700">
                <p><strong>BWS Schoonmaak B.V.</strong></p>
                <p>Heumenseweg 37</p>
                <p>6603 CX Wijchen</p>
                <p>Nederland</p>
                <br />
                <p>KvK-nummer: 12345678</p>
                <p>BTW-nummer: NL123456789B01</p>
                <br />
                <p>Telefoon: 06 38935230</p>
                <p>E-mail: info@bwsschoonmaak.nl</p>
                <p>Website: www.bwsschoonmaak.nl</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[color:var(--light-bg)]">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Vragen over onze voorwaarden?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Wij leggen u graag uit wat onze algemene voorwaarden voor u betekenen.
          </p>
          <Link href="/contact" className="btn-primary">
            Neem contact op
          </Link>
        </div>
      </section>
    </>
  );
}
