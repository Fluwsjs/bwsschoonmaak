// Company Information Constants
export const COMPANY_INFO = {
  name: "BWS Schoonmaak",
  legalName: "BWS Schoonmaak B.V.",
  description: "Professionele schoonmaakdiensten voor bedrijven en particulieren",
  tagline: "Uw schoonmaak in vertrouwde handen",
  
  // Contact Information
  contact: {
    phone: "06 38935230",
    phoneRaw: "+31638935230",
    email: "info@bwsschoonmaak.nl",
    privacyEmail: "privacy@bwsschoonmaak.nl",
    
    // Address
    address: {
      street: "Heumenseweg 37",
      postalCode: "6603 CX",
      city: "Wijchen",
      country: "Nederland",
      full: "Heumenseweg 37, 6603 CX Wijchen, Nederland"
    },
    
    // Business Hours
    hours: {
      weekdays: "Maandag - Vrijdag: 08:00 - 18:00",
      saturday: "Zaterdag: 09:00 - 15:00",
      sunday: "Zondag: Gesloten",
      emergency: "24/7 spoeddienst beschikbaar"
    }
  },
  
  // Legal Information
  legal: {
    kvkNumber: "12345678",
    btw: "NL123456789B01",
    iban: "NL00 BANK 0123 4567 89",
    
    // Insurance
    insurance: {
      liability: "€ 1.250.000 per gebeurtenis",
      provider: "Nationale Nederlanden"
    }
  },
  
  // Website & Social
  website: {
    domain: "bwsschoonmaak.nl",
    url: "https://bwsschoonmaak.nl",
    
    social: {
      facebook: "https://facebook.com/bwsschoonmaak",
      instagram: "https://instagram.com/bwsschoonmaak", 
      linkedin: "https://linkedin.com/company/bws-schoonmaak",
      twitter: "https://twitter.com/bwsschoonmaak"
    }
  }
} as const;

// Services Information
export const SERVICES = {
  main: [
    {
      id: "kantoorschoonmaak",
      name: "Kantoorschoonmaak",
      description: "Professionele dagelijkse en periodieke schoonmaak voor kantoorpanden",
      slug: "kantoor-bedrijfsschoonmaak"
    },
    {
      id: "glasbewassing", 
      name: "Glasbewassing",
      description: "Specialistische reiniging van gevels en glaspuien",
      slug: "gevelreiniging-glasbewassing"
    },
    {
      id: "huishoudelijke-hulp",
      name: "Huishoudelijke hulp", 
      description: "Betrouwbare schoonmaakhulp voor particulieren",
      slug: "huishoudelijke-hulp"
    },
    {
      id: "dieptereiniging",
      name: "Dieptereiniging",
      description: "Grondige eenmalige reiniging van ruimtes en objecten",
      slug: "dieptereiniging"
    },
    {
      id: "nieuwbouw",
      name: "Nieuwbouw schoonmaak",
      description: "Specialistische oplevering van nieuwbouwprojecten", 
      slug: "nieuwbouw-schoonmaak"
    },
    {
      id: "vloeronderhoud",
      name: "Vloeronderhoud",
      description: "Professioneel onderhoud van alle vloertypen",
      slug: "vloeronderhoud"
    }
  ],
  
  specialties: [
    "Ziekenhuizen en zorginstellingen",
    "Scholen en onderwijsinstellingen", 
    "Kantoorgebouwen",
    "Winkels en retail",
    "Industriële complexen",
    "Sportfaciliteiten"
  ]
} as const;

// Navigation Links
export const NAVIGATION = {
  main: [
    { name: "Home", path: "/" },
    { name: "Diensten", path: "/diensten" },
    { name: "Projecten", path: "/projecten" },
    { name: "Over ons", path: "/over-ons" },
    { name: "Contact", path: "/contact" }
  ],
  
  footer: {
    services: [
      { name: "Kantoorschoonmaak", path: "/diensten#kantoor-bedrijfsschoonmaak" },
      { name: "Glasbewassing", path: "/diensten#gevelreiniging-glasbewassing" },
      { name: "Huishoudelijke hulp", path: "/diensten#huishoudelijke-hulp" },
      { name: "Dieptereiniging", path: "/diensten#dieptereiniging" },
      { name: "Nieuwbouw schoonmaak", path: "/diensten#nieuwbouw-schoonmaak" },
      { name: "Vloeronderhoud", path: "/diensten#vloeronderhoud" }
    ],
    
    company: [
      { name: "Over ons", path: "/over-ons" },
      { name: "Projecten", path: "/projecten" },
      { name: "Onze aanpak", path: "/over-ons#onze-aanpak" },
      { name: "Contact", path: "/contact" }
    ],
    
    legal: [
      { name: "Privacyverklaring", path: "/privacy" },
      { name: "Algemene voorwaarden", path: "/algemene-voorwaarden" },
      { name: "Cookiebeleid", path: "/cookie-policy" },
      { name: "Sitemap", path: "/sitemap.xml" }
    ]
  }
} as const;

// Analytics & Tracking
export const ANALYTICS = {
  googleAnalytics: {
    measurementId: "G-XXXXXXXXXX", // Replace with actual GA4 measurement ID
    enabled: process.env.NODE_ENV === "production"
  },
  
  googleTagManager: {
    containerId: "GTM-XXXXXXX", // Replace with actual GTM container ID
    enabled: process.env.NODE_ENV === "production"
  }
} as const;

// SEO Meta Information
export const SEO = {
  defaultTitle: "BWS Schoonmaak - Professionele Schoonmaakdiensten Nederland",
  titleTemplate: "%s | BWS Schoonmaak",
  defaultDescription: "BWS Schoonmaak ✨ Professionele schoonmaakdiensten voor bedrijven en particulieren. 15+ jaar ervaring, 500+ tevreden klanten, milieuvriendelijk. Vraag gratis offerte!",
  
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
  
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "BWS Schoonmaak",
    images: {
      default: "/og-image.jpg",
      width: 1200,
      height: 630
    }
  },
  
  twitter: {
    card: "summary_large_image",
    site: "@bwsschoonmaak",
    creator: "@bwsschoonmaak"
  }
} as const;

// Form Configuration
export const FORMS = {
  contact: {
    maxFileSize: 5 * 1024 * 1024, // 5MB
    allowedFileTypes: [".pdf", ".doc", ".docx", ".jpg", ".jpeg", ".png"],
    
    services: [...SERVICES.main.map(service => service.name), "Anders"] as const,
    
    validation: {
      name: { min: 2, max: 50 },
      email: { 
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Voer een geldig e-mailadres in"
      },
      phone: {
        pattern: /^[+]?[(]?[\d\s\-\(\)]{10,}$/,
        message: "Voer een geldig telefoonnummer in"
      },
      message: { min: 10, max: 1000 }
    }
  }
} as const;

// Business Statistics
export const STATISTICS = {
  experience: "15+",
  clients: "500+",
  projects: "1000+",
  satisfaction: "98%",
  
  // Certifications
  certifications: [
    "ISO 9001 Kwaliteitsmanagementsysteem",
    "ISO 14001 Milieumanagementsysteem", 
    "VCA Veiligheid, Gezondheid en Milieu",
    "EU Ecolabel gecertificeerde producten"
  ],
  
  // Coverage areas
  serviceAreas: [
    "Amsterdam",
    "Rotterdam", 
    "Den Haag",
    "Utrecht",
    "Eindhoven",
    "Tilburg",
    "Almere",
    "Groningen"
  ]
} as const;

// Cookie Configuration
export const COOKIES = {
  necessary: {
    name: "bws_necessary",
    description: "Noodzakelijke cookies voor website functionaliteit",
    duration: "Session / 1 year"
  },
  
  analytics: {
    name: "bws_analytics", 
    description: "Google Analytics voor website statistieken",
    duration: "2 years"
  },
  
  marketing: {
    name: "bws_marketing",
    description: "Marketing en remarketing cookies",
    duration: "1 year"
  },
  
  preferences: {
    name: "bws_cookie_preferences",
    description: "Uw cookie voorkeuren",
    duration: "1 year"
  }
} as const;

// Helper functions
export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/\D/g, '').replace(/(\d{2})(\d{3})(\d{4})/, '$1 $2 $3');
};

export const formatAddress = (includeCountry = false): string => {
  const { street, postalCode, city, country } = COMPANY_INFO.contact.address;
  return includeCountry 
    ? `${street}, ${postalCode} ${city}, ${country}`
    : `${street}, ${postalCode} ${city}`;
};

export const getServiceBySlug = (slug: string) => {
  return SERVICES.main.find(service => service.slug === slug);
};

export const getFullUrl = (path: string = ""): string => {
  return `${COMPANY_INFO.website.url}${path}`;
};
