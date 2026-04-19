import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const siteUrl = "https://jenniferjordanpmhnp.com";
const siteName = "Jennifer Jordan, PMHNP-BC";
const siteDescription =
  "Board-certified psychiatric mental health nurse practitioner in Northern Virginia. Specializing in pediatric & adult ADHD, mood disorders, trauma-informed care, and integrative medication management. Georgetown University alumna with 17+ years of clinical excellence.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Jennifer Jordan, PMHNP-BC | Psychiatric Wellness | Northern Virginia",
    template: "%s | Jennifer Jordan, PMHNP-BC",
  },
  description: siteDescription,

  keywords: [
    "Jennifer Jordan PMHNP",
    "psychiatric nurse practitioner Northern Virginia",
    "PMHNP-BC",
    "ADHD treatment Northern Virginia",
    "pediatric psychiatry Virginia",
    "adult ADHD",
    "mood disorders treatment",
    "integrative medication management",
    "trauma-informed care",
    "mental health Northern Virginia",
    "psychiatric evaluation",
    "holistic mental wellness",
    "NoVA psychiatry",
    "telehealth Virginia",
    "Georgetown University nursing",
    "psychiatric care Fairfax",
    "psychiatric care Alexandria",
    "psychiatric care Arlington",
  ],

  authors: [{ name: "Jennifer Jordan, PMHNP-BC" }],
  creator: "Jennifer Jordan",
  publisher: siteName,

  category: "Healthcare",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "Jennifer Jordan, PMHNP-BC | Psychiatric Wellness | Northern Virginia",
    description:
      "A sanctuary for psychiatric evaluation, evidence-based medication management, and holistic mental wellness. Serving Northern Virginia and telehealth across the Commonwealth.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jennifer Jordan, PMHNP-BC — Psychiatric Wellness Northern Virginia",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jennifer Jordan, PMHNP-BC | Psychiatric Wellness",
    description:
      "Board-certified psychiatric care in Northern Virginia. ADHD, mood disorders, and integrative wellness with a trauma-informed approach.",
    images: ["/og-image.jpg"],
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
    canonical: siteUrl,
  },

  other: {
    "geo.region": "US-VA",
    "geo.placename": "Northern Virginia",
    "geo.position": "38.8048;-77.0469",
    "ICBM": "38.8048, -77.0469",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F9F8F6" },
    { media: "(prefers-color-scheme: dark)", color: "#2D3436" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${siteUrl}/#practice`,
      name: siteName,
      description: siteDescription,
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      image: `${siteUrl}/og-image.jpg`,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressRegion: "VA",
        addressLocality: "Northern Virginia",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "State", name: "Virginia" },
        { "@type": "City", name: "Fairfax" },
        { "@type": "City", name: "Arlington" },
        { "@type": "City", name: "Alexandria" },
        { "@type": "City", name: "McLean" },
        { "@type": "City", name: "Reston" },
      ],
      medicalSpecialty: [
        "Psychiatry",
        "Mental Health",
        "Neurology",
      ],
      availableService: [
        {
          "@type": "MedicalTherapy",
          name: "Pediatric & Adolescent Psychiatric Care",
          description: "Psychiatric evaluation and treatment for children and teens ages 6–17.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Adult ADHD Strategy",
          description: "Comprehensive ADHD assessment and individualized management for adults.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Integrative Medication Management",
          description: "Evidence-based psychopharmacology for mood disorders with holistic integration.",
        },
      ],
      founder: {
        "@type": "Person",
        "@id": `${siteUrl}/#jennifer`,
        name: "Jennifer Jordan",
        jobTitle: "Psychiatric Mental Health Nurse Practitioner",
        honorificSuffix: "PMHNP-BC",
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Georgetown University",
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Board Certification",
          name: "PMHNP-BC",
          recognizedBy: {
            "@type": "Organization",
            name: "American Nurses Credentialing Center",
          },
        },
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
