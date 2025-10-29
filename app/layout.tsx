import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Macura Projekt | Arhitektonski Studio Beograd, Surčin, Novi Beograd',
  description: 'Vodeći arhitektonski studio u Beogradu specijalizovan za luksuzni dizajn enterijera, projektovanje stambenih i poslovnih objekata u Surčinu, Novom Beogradu i široj okolini.',
  keywords: 'arhitektonski biro Beograd, projektovanje kuća Surčin, dizajn enterijera Novi Beograd, arhitekta Šumadija, energetska efikasnost, legalizacija objekata, idejni projekat, glavni projekat, stambeni objekti, poslovni prostori, luksuzni dizajn, moderna arhitektura, adaptacija prostora',
  authors: [{ name: 'Macura Projekt' }],
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' }
    ],
    apple: '/favicon.png',
    shortcut: '/favicon.png'
  },
  metadataBase: new URL('https://arhitektamacura.rs'),
  alternates: {
    canonical: '/',
    languages: {
      'sr-RS': '/',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'Macura Projekt | Arhitektonski Studio Beograd, Surčin, Novi Beograd',
    description: 'Vodeći arhitektonski studio u Beogradu specijalizovan za luksuzni dizajn enterijera, projektovanje stambenih i poslovnih objekata u Surčinu, Novom Beogradu i široj okolini.',
    type: 'website',
    locale: 'sr_RS',
    siteName: 'Macura Projekt',
    url: 'https://arhitektamacura.rs',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Macura Projekt - Vodeći arhitektonski studio u Beogradu',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Macura Projekt | Arhitektonski Studio Beograd',
    description: 'Vodeći arhitektonski studio u Beogradu specijalizovan za luksuzni dizajn enterijera, projektovanje stambenih i poslovnih objekata.',
    images: ['/og-image.svg'],
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
    nocache: false,
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'yandex-verification-code',
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
        <meta property="og:image" content="https://macuraprojekt.netlify.app/og-image.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta name="twitter:image" content="https://macuraprojekt.netlify.app/og-image.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
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
              "description": "Vodeći arhitektonski studio u Beogradu specijalizovan za luksuzni dizajn enterijera, projektovanje stambenih i poslovnih objekata u Surčinu, Novom Beogradu i široj okolini.",
              "url": "https://arhitektamacura.rs",
              "email": "info@arhitektamacura.rs",
              "telephone": "+381-11-123-4567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Surčinska 227",
                "addressLocality": "Surčin",
                "addressRegion": "Beograd",
                "postalCode": "11271",
                "addressCountry": "RS"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "44.7866",
                "longitude": "20.4489"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Surčin"
                },
                {
                  "@type": "City",
                  "name": "Novi Beograd"
                },
                {
                  "@type": "City",
                  "name": "Beograd"
                },
                {
                  "@type": "Place",
                  "name": "Šumadija"
                }
              ],
              "priceRange": "$$-$$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "17:00"
                }
              ],
              "sameAs": [
                "https://linkedin.com/company/macura-projekt",
                "https://instagram.com/macura.projekt",
                "https://facebook.com/macuraprojekt"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Arhitektonske usluge",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Projektovanje stambenih objekata",
                      "description": "Idejni i glavni projekti za kuće, stanove i stambene zgrade"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Dizajn enterijera",
                      "description": "Luksuzni dizajn enterijera za stambene i poslovne prostore"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Energetska efikasnost",
                      "description": "Energetski efikasna rešenja i sertifikacija"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {children}
        
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}