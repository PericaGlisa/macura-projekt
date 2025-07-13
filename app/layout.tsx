import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Macura projekt | Gde vizija postaje stvarnost',
  description: 'Kreativni arhitektonski studio koji transformiše snove u izuzetne prostore - od luksuznih rezidencija do ikoničnih komercijalnih objekata.',
  keywords: 'arhitektura, luksuzni dizajn, premium zgrade, arhitektonske usluge, moderna arhitektura',
  authors: [{ name: 'Macura Projekt' }],
  openGraph: {
    title: 'Macura projekt | Gde vizija postaje stvarnost',
    description: 'Kreativni arhitektonski studio koji transformiše snove u izuzetne prostore - od luksuznih rezidencija do ikoničnih komercijalnih objekata.',
    type: 'website',
    locale: 'sr_RS',
    siteName: 'Macura Projekt',
    url: 'https://macuraprojekt.netlify.app',
    images: [
      {
        url: 'https://macuraprojekt.netlify.app/about-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Macura projekt - Kreativni arhitektonski studio',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Macura projekt | Gde vizija postaje stvarnost',
    description: 'Kreativni arhitektonski studio koji transformiše snove u izuzetne prostore - od luksuznih rezidencija do ikoničnih komercijalnih objekata.',
    images: ['https://macuraprojekt.netlify.app/about-image.jpg'],
    creator: '@macuraprojekt',
    site: '@macuraprojekt',
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
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className="dark">
      <head>
        <meta name="theme-color" content="#C4A572" />
        <meta name="msapplication-navbutton-color" content="#C4A572" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta property="og:image" content="https://macuraprojekt.netlify.app/about-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:image" content="https://macuraprojekt.netlify.app/about-image.jpg" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ArchitecturalService",
              "name": "Macura Projekt",
              "description": "Kreativni arhitektonski studio koji transformiše snove u izuzetne prostore - od luksuznih rezidencija do ikoničnih komercijalnih objekata.",
              "url": "https://macuraprojekt.com",
              "telephone": "+381-11-123-4567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Arhitektonska 123",
                "addressLocality": "Beograd",
                "postalCode": "11000",
                "addressCountry": "RS"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "44.7866",
                "longitude": "20.4489"
              },
              "sameAs": [
                "https://linkedin.com/company/macura-projekt",
                "https://instagram.com/macura.projekt"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}