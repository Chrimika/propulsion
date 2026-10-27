export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Communauté Propulsion",
    "alternateName": "Propulsion Cameroun",
    "url": "https://www.propulsion.cm/",
    "logo": "https://www.propulsion.cm/images/Propulsion%20Logo.png",
    "description": "Communauté d’entrepreneurs et de professionnels au Cameroun. Formation, rencontres et partage d’expériences.",
    "founder": {
      "@type": "Person",
      "@id": "https://livres.propulsion.cm/#auteur",
      "name": "Dr Claudel NOUBISSIE",
      "url": "https://livres.propulsion.cm/auteur"
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
    "sameAs": [
      "https://www.facebook.com/propulsioncameroun"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Communauté Propulsion",
    "url": "https://www.propulsion.cm/",
    "description": "Communauté d’entrepreneurs et de professionnels au Cameroun",
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
        "description": "Masterclass, replays, challenges et groupe WhatsApp. Adhésion de 12 mois.",
        "price": "10000",
        "priceCurrency": "XAF",
        "url": "https://www.propulsion.cm/#offres"
      },
      {
        "@type": "Offer",
        "name": "Pack Standard",
        "description": "Masterclass, replays, challenges et groupe WhatsApp. Adhésion de 12 mois.",
        "price": "25",
        "priceCurrency": "EUR",
        "url": "https://www.propulsion.cm/#offres"
      },
      {
        "@type": "Offer",
        "name": "Pack Pro",
        "description": "Pack Standard + annuaire, mises en relation prioritaires, formations et suivi individuel. Adhésion de 12 mois.",
        "price": "50000",
        "priceCurrency": "XAF",
        "url": "https://www.propulsion.cm/#offres"
      },
      {
        "@type": "Offer",
        "name": "Pack Pro",
        "description": "Pack Standard + annuaire, mises en relation prioritaires, formations et suivi individuel. Adhésion de 12 mois.",
        "price": "100",
        "priceCurrency": "EUR",
        "url": "https://www.propulsion.cm/#offres"
      },
      {
        "@type": "Offer",
        "name": "Pack Élite",
        "description": "Pack Pro + accompagnement stratégique renforcé, visibilité premium et accès prioritaire aux partenariats. Adhésion de 12 mois.",
        "price": "250000",
        "priceCurrency": "XAF",
        "url": "https://www.propulsion.cm/#offres"
      },
      {
        "@type": "Offer",
        "name": "Pack Élite",
        "description": "Pack Pro + accompagnement stratégique renforcé, visibilité premium et accès prioritaire aux partenariats. Adhésion de 12 mois.",
        "price": "500",
        "priceCurrency": "EUR",
        "url": "https://www.propulsion.cm/#offres"
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
