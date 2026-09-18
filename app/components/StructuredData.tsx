export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Communauté Propulsion",
    "alternateName": "Propulsion Cameroun",
    "url": "https://propulsion.cm",
    "logo": "https://propulsion.cm/images/Propulsion Logo.png",
    "description": "Communauté de plus de 3500 entrepreneurs, professionnels et freelances au Cameroun et à l'international. Formation, networking et accompagnement entrepreneurial.",
    "founder": {
      "@type": "Person",
      "name": "Dr Claudel NOUBISSIE"
    },
    "foundingDate": "2025-11-11",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+237-682-36-57-61",
        "contactType": "customer service",
        "areaServed": "CM",
        "availableLanguage": ["French", "English"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+237-672-52-94-78",
        "contactType": "customer service",
        "areaServed": "CM",
        "availableLanguage": ["French", "English"]
      }
    ],
    "email": "info@claudel-noubissie.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CM",
      "addressLocality": "Yaoundé"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Cameroon"
      },
      {
        "@type": "Place",
        "name": "International"
      }
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 3500
    },
    "sameAs": [
      "https://www.facebook.com/propulsioncameroun"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Communauté Propulsion",
    "url": "https://propulsion.cm",
    "description": "Communauté de 3500+ entrepreneurs et professionnels au Cameroun",
    "publisher": {
      "@type": "Organization",
      "name": "Communauté Propulsion"
    },
    "inLanguage": "fr-FR"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Professional Networking and Entrepreneurship Training",
    "provider": {
      "@type": "Organization",
      "name": "Communauté Propulsion"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Cameroon"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Pack Standard",
        "description": "Masterclass, replays, challenges et groupe WhatsApp",
        "price": "10000",
        "priceCurrency": "XAF",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "25",
          "priceCurrency": "EUR"
        },
        "validFor": "P12M"
      },
      {
        "@type": "Offer",
        "name": "Pack Pro",
        "description": "Pack Standard + annuaire, mises en relation prioritaires, formations et suivi individuel",
        "price": "50000",
        "priceCurrency": "XAF",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "100",
          "priceCurrency": "EUR"
        },
        "validFor": "P12M"
      },
      {
        "@type": "Offer",
        "name": "Pack Élite",
        "description": "Pack Pro + accompagnement stratégique renforcé, visibilité premium et accès prioritaire aux partenariats",
        "price": "250000",
        "priceCurrency": "XAF",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "500",
          "priceCurrency": "EUR"
        },
        "validFor": "P12M"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
