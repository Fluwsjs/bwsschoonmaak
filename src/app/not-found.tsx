import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pagina niet gevonden - BWS Schoonmaak',
  description: 'De pagina die u zoekt kon niet worden gevonden. Ga terug naar de homepage of neem contact met ons op.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--accent)] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          {/* 404 Icon */}
          <div className="text-white/20 mb-6">
            <svg 
              className="w-32 h-32 mx-auto" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Pagina niet gevonden
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-md mx-auto">
            De pagina die u zoekt bestaat niet of is verplaatst. 
            Geen zorgen, we helpen u graag verder!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            href="/" 
            className="bg-white text-[color:var(--primary)] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            🏠 Naar Homepage
          </Link>
          <Link 
            href="/diensten" 
            className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-all duration-300"
          >
            🧹 Onze Diensten
          </Link>
          <Link 
            href="/contact" 
            className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-all duration-300"
          >
            📞 Contact
          </Link>
        </div>

        {/* Quick Links */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-white font-semibold mb-4">Populaire pagina's:</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link 
              href="/diensten#kantoor-bedrijfsschoonmaak" 
              className="text-white/80 hover:text-white text-sm underline hover:no-underline transition-colors"
            >
              Kantoorschoonmaak
            </Link>
            <span className="text-white/40">•</span>
            <Link 
              href="/diensten#gevelreiniging-glasbewassing" 
              className="text-white/80 hover:text-white text-sm underline hover:no-underline transition-colors"
            >
              Glasbewassing
            </Link>
            <span className="text-white/40">•</span>
            <Link 
              href="/projecten" 
              className="text-white/80 hover:text-white text-sm underline hover:no-underline transition-colors"
            >
              Projecten
            </Link>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm mb-2">
            Dringend schoonmaakwerk nodig?
          </p>
          <a 
            href="tel:+31638935230" 
            className="text-white font-semibold hover:text-[color:var(--secondary)] transition-colors text-lg"
          >
            📱 06 38935230
          </a>
        </div>
      </div>
    </div>
  );
}
