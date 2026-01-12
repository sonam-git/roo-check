import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RooCheck - Sherpa Clan Relationship Checker | རུ་ཅེག",
  description: "Preserve Sherpa cultural heritage with RooCheck. Check clan (Ru) and sub-clan (Shingza) relationships for marriage eligibility. A respectful digital tool for the Sherpa community to honor ancestral traditions and clan lineage.",
  keywords: [
    "Sherpa clan",
    "Sherpa marriage",
    "Ru Shingza",
    "Sherpa culture",
    "clan relationship checker",
    "Sherpa heritage",
    "Minyakpa",
    "Thimmi",
    "Chawa",
    "Lama",
    "Ngompa",
    "Sherpa traditions",
    "clan lineage",
    "marriage eligibility",
    "Himalayan culture",
    "Sherpa community",
    "ancestral clans",
    "Khumbu",
    "Solu",
    "Nepal Sherpa",
  ],
  authors: [{ name: "RooCheck Team" }],
  creator: "RooCheck",
  publisher: "RooCheck",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://roocheck.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "RooCheck - Sherpa Clan Relationship Checker",
    description: "Preserve Sherpa cultural heritage. Check clan relationships for marriage eligibility within the Sherpa community.",
    url: 'https://roocheck.com',
    siteName: 'RooCheck',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/logo/roocheck-logo-transparent.png',
        width: 1200,
        height: 630,
        alt: 'RooCheck - Sherpa Clan Relationship Checker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RooCheck - Sherpa Clan Relationship Checker',
    description: 'Preserve Sherpa cultural heritage. Check clan relationships for marriage eligibility.',
    images: ['/images/logo/roocheck-logo-transparent.png'],
  },
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
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'RooCheck',
    alternateName: 'རུ་ཅེག',
    description: 'A cultural heritage tool for checking Sherpa clan relationships for marriage eligibility',
    url: 'https://roocheck.com',
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'RooCheck',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Sherpa Community',
    },
    inLanguage: ['en', 'ne', 'bo'],
    keywords: 'Sherpa clan, marriage eligibility, cultural heritage, Ru, Shingza, clan checker',
  };

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/logo/roocheck-logo-transparent.png" />
        <link rel="apple-touch-icon" href="/images/logo/roocheck-logo-transparent.png" />
        <meta name="theme-color" content="#a6825d" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {/* Background Image */}
        <div 
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ 
            backgroundImage: 'url(/images/backgrounds/backdrop.png)',
          }}
        >
          {/* Overlay for better readability */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
        </div>
        
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
