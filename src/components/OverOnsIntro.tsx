import Image from "next/image";

export default function OverOnsIntro() {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-6 text-blue-900">Over BWS Schoonmaak</h1>
            <div className="space-y-4">
              <p className="text-gray-700">
                BWS Schoonmaak is een professioneel schoonmaakbedrijf met meer dan 15 jaar ervaring in 
                zowel zakelijke als particuliere schoonmaakdiensten. Opgericht in 2008, hebben wij ons 
                ontwikkeld tot een betrouwbare partner voor vele bedrijven en particulieren in de regio.
              </p>
              <p className="text-gray-700">
                Wij onderscheiden ons door onze persoonlijke aanpak, flexibiliteit en consistente kwaliteit. 
                Ons team bestaat uit goed opgeleide en gemotiveerde medewerkers die met passie en precisie 
                te werk gaan. Wij gebruiken uitsluitend milieuvriendelijke schoonmaakmiddelen en moderne 
                apparatuur om het beste resultaat te garanderen.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="rounded-full bg-blue-100 p-2 mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Kwaliteit</h3>
                </div>
                <p className="text-gray-600 text-sm">Consistente schoonmaakkwaliteit gegarandeerd door ons ervaren team en kwaliteitscontroles</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="rounded-full bg-blue-100 p-2 mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Betrouwbaarheid</h3>
                </div>
                <p className="text-gray-600 text-sm">Vaste contactpersonen, afspraken die we nakomen en altijd bereikbaar voor vragen</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="rounded-full bg-blue-100 p-2 mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Flexibiliteit</h3>
                </div>
                <p className="text-gray-600 text-sm">Aangepaste schoonmaakschema's en diensten op basis van uw specifieke behoeften</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="rounded-full bg-blue-100 p-2 mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Duurzaamheid</h3>
                </div>
                <p className="text-gray-600 text-sm">Milieuvriendelijke schoonmaakmiddelen en duurzame werkpraktijken voor een groene toekomst</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative h-[450px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/over-ons-team.jpg"
                alt="BWS Schoonmaak Team"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-xl font-bold mb-2">15+ jaar ervaring</p>
              <p className="text-sm">Met ruim 15 jaar ervaring zijn wij uw betrouwbare partner voor alle schoonmaakdiensten.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 