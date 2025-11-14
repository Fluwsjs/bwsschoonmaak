import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import ScrollToTop from "@/components/ScrollToTop";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import { SkipToContent } from "@/components/AccessibilityOptimized";
import ErrorBoundary from "@/components/ErrorBoundary";
import Script from "next/script";

// Configure Poppins for headings (700-900 weights)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

// Configure Inter for body text (400-600 weights)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bwsschoonmaak.nl'),
  title: {
    default: "BWS Schoonmaak - Professionele Schoonmaakdiensten Nederland",
    template: "%s | BWS Schoonmaak"
  },
  description: "BWS Schoonmaak ✨ Professionele schoonmaakdiensten voor bedrijven en particulieren. 15+ jaar ervaring, 500+ tevreden klanten, milieuvriendelijk. Vraag gratis offerte!",
  keywords: [
    "schoonmaakbedrijf",
    "kantoorschoonmaak", 
    "glasbewassing",
    "schoonmaakdiensten",
    "professionele schoonmaak",
    "milieuvriendelijk schoonmaken",
    "BWS Schoonmaak",
    "Nederland",
    "betrouwbaar schoonmaakbedrijf"
  ],
  authors: [{ name: "BWS Schoonmaak" }],
  creator: "BWS Schoonmaak",
  publisher: "BWS Schoonmaak",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://bwsschoonmaak.nl",
    title: "BWS Schoonmaak - #1 Schoonmaakbedrijf Nederland",
    description: "Professionele schoonmaakdiensten met 15+ jaar ervaring. Milieuvriendelijk, betrouwbaar en flexibel. 500+ tevreden klanten!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BWS Schoonmaak - Professionele Schoonmaakdiensten",
      }
    ],
    siteName: "BWS Schoonmaak",
  },
  twitter: {
    card: "summary_large_image",
    title: "BWS Schoonmaak - Professionele Schoonmaakdiensten",
    description: "15+ jaar ervaring in professionele schoonmaak. Milieuvriendelijk en betrouwbaar.",
    images: ["/og-image.jpg"],
    creator: "@bwsschoonmaak",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://bwsschoonmaak.nl",
  },
  category: "Schoonmaakdiensten",
};

// Structured Data for Local Business
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "BWS Schoonmaak",
  "image": "https://bwsschoonmaak.nl/logo.png",
  "description": "Professionele schoonmaakdiensten voor bedrijven en particulieren",
  "url": "https://bwsschoonmaak.nl",
  "telephone": "+31-6-38935230",
  "email": "info@bwsschoonmaak.nl",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Heumenseweg 37",
    "addressLocality": "Wijchen", 
    "postalCode": "6603 CX",
    "addressCountry": "NL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "52.3676",
    "longitude": "4.9041"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "serviceArea": {
    "@type": "Country",
    "name": "Nederland"
  },
  "priceRange": "€25-€35 per uur",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Schoonmaakdiensten",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kantoorschoonmaak"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Glasbewassing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Huishoudelijke hulp"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#4fb3d4" />
        <meta name="msapplication-TileColor" content="#4fb3d4" />
        
        {/* Viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/hero-image.jpg" as="image" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased font-sans`} style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
        <SkipToContent />
        <PerformanceMonitor />
        <ScrollToTop />
        
        <ErrorBoundary>
          <div className="min-h-screen flex flex-col">
            <TopBar />
            <Header />
            <main id="main-content" className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
        
        {/* Google Analytics */}
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
              ga('create', 'UA-XXXXXX-X', 'auto');
              ga('send', 'pageview');
            `,
          }}
        />
      </body>
    </html>
  );
}
