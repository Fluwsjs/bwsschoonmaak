import Image from "next/image";
import Link from "next/link";

export default function DienstenSectie() {
  const diensten = [
    {
      id: 1,
      titel: "Kantoorschoonmaak",
      beschrijving: "Professionele schoonmaak van kantoorruimtes, ongeacht de grootte",
      icon: "/icons/kantoor.svg",
    },
    {
      id: 2,
      titel: "Bedrijfsschoonmaak",
      beschrijving: "Complete schoonmaakdiensten voor commerciële ruimtes en bedrijfspanden",
      icon: "/icons/bedrijf.svg",
    },
    {
      id: 3,
      titel: "Glazenwassen",
      beschrijving: "Professionele glazenwasservice voor een stralende uitstraling",
      icon: "/icons/glazenwassen.svg",
    },
    {
      id: 4,
      titel: "Vloeronderhoud",
      beschrijving: "Specialistische reiniging en onderhoud van alle type vloeren",
      icon: "/icons/vloer.svg",
    },
    {
      id: 5,
      titel: "Gevelreiniging",
      beschrijving: "Professionele reiniging van gevels en buitenkant van gebouwen",
      icon: "/icons/gevel.svg",
    },
    {
      id: 6,
      titel: "Sanitair onderhoud",
      beschrijving: "Grondige reiniging en desinfectie van sanitaire ruimtes",
      icon: "/icons/sanitair.svg",
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Onze Diensten</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            BWS Schoonmaak biedt een breed scala aan schoonmaakdiensten aan. Of u nu op zoek bent
            naar regelmatige kantoorschoonmaak of een eenmalige specialistische reiniging, wij staan voor u klaar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diensten.map((dienst) => (
            <div
              key={dienst.id}
              className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Image
                  src={dienst.icon}
                  alt={dienst.titel}
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {dienst.titel}
              </h3>
              <p className="text-gray-600 mb-4">{dienst.beschrijving}</p>
              <Link href={`/diensten#${dienst.titel.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 hover:text-blue-800 font-medium">
                Meer informatie
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/diensten" className="btn-primary">
            Bekijk alle diensten
          </Link>
        </div>
      </div>
    </section>
  );
} 