import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.propulsion.cm/"),
  title: "PROPULSION · Communauté d’entrepreneurs et de professionnels au Cameroun",
  description: "Découvrez PROPULSION, une communauté d’entrepreneurs et de professionnels au Cameroun. Formation, rencontres et partage d’expériences.",
  keywords: [
    "Propulsion",
    "communauté Propulsion",
    "Propulsion Cameroun",
    "Propulsion Dr Claudel NOUBISSIE",
    "Propulsion Standard",
    "Propulsion Pro",
    "Propulsion Élite",
    "masterclass Propulsion",
    "Apéro Business Propulsion",
    "réseau entrepreneurs Cameroun",
    "communauté entrepreneurs Yaoundé",
    "communauté entrepreneurs Douala",
    "entrepreneuriat Cameroun",
    "réseau professionnel Cameroun",
    "formation entrepreneurs Cameroun"
  ],
  authors: [{ name: "Dr Claudel NOUBISSIE", url: "https://livres.propulsion.cm/auteur" }],
  creator: "Dr Claudel NOUBISSIE",
  publisher: "Communauté Propulsion",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/Propulsion Logo.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/images/Propulsion Logo.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico'
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.propulsion.cm/",
    siteName: "Communauté Propulsion",
    title: "PROPULSION · Communauté d’entrepreneurs et de professionnels au Cameroun",
    description: "Découvrez PROPULSION, une communauté d’entrepreneurs et de professionnels au Cameroun. Formation, rencontres et partage d’expériences.",
    images: [
      {
        url: "/images/Propulsion Logo.png",
        width: 1200,
        height: 630,
        alt: "Logo Communauté Propulsion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PROPULSION · Communauté d’entrepreneurs et de professionnels au Cameroun",
    description: "Découvrez PROPULSION, une communauté d’entrepreneurs et de professionnels au Cameroun. Formation, rencontres et partage d’expériences.",
    images: ["/images/Propulsion Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.propulsion.cm/",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta name="geo.region" content="CM" />
        <meta name="geo.placename" content="Yaoundé, Douala" />
        <meta name="geo.position" content="3.848;11.502" />
        <meta name="ICBM" content="3.848, 11.502" />
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
