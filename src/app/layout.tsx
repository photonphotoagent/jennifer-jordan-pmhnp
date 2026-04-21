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

const siteUrl = "https://jennifer-jordan-pmhnp.vercel.app";
const siteName = "Jennifer Jordan, PMHNP-BC";
const siteDescription =
  "Board-certified psychiatric mental health nurse practitioner in Northern Virginia. Specializing in pediatric & adult ADHD, mood disorders, trauma-informed care, and integrative medication management. Georgetown University alumna with 17+ years of clinical excellence.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Jennifer Jordan, PMHNP-BC — Psychiatric Nurse Practitioner | Northern Virginia",
    template: "%s | Jennifer Jordan, PMHNP-BC",
  },
  description: siteDescription,

  keywords: [
    "Jennifer Jordan PMHNP",
    "psychiatric nurse practitioner Northern Virginia",
    "PMHNP-BC Northern Virginia",
    "ADHD treatment Northern Virginia",
    "ADHD specialist Fairfax VA",
    "ADHD specialist Arlington VA",
    "ADHD specialist Alexandria VA",
    "pediatric psychiatry Virginia",
    "pediatric ADHD evaluation Northern Virginia",
    "adult ADHD assessment Virginia",
    "mood disorder treatment Northern Virginia",
    "anxiety treatment Northern Virginia",
    "depression treatment Northern Virginia",
    "integrative medication management",
    "trauma-informed psychiatric care Virginia",
    "mental health nurse practitioner NoVA",
    "psychiatric evaluation Northern Virginia",
    "holistic mental wellness Virginia",
    "telehealth psychiatry Virginia",
    "medication management psychiatric",
    "psychiatric care Fairfax",
    "psychiatric care Alexandria",
    "psychiatric care Arlington",
    "psychiatric care McLean",
    "psychiatric care Reston",
    "child psychiatry Northern Virginia",
    "Georgetown University nurse practitioner",
    "board certified psychiatric nurse practitioner",
    "PMHNP near me",
  ],

  authors: [{ name: "Jennifer Jordan, PMHNP-BC" }],
  creator: "Jennifer Jordan, PMHNP-BC",
  publisher: siteName,

  category: "Healthcare",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title:
      "Jennifer Jordan, PMHNP-BC — Psychiatric Nurse Practitioner | Northern Virginia",
    description:
      "Board-certified psychiatric care in Northern Virginia. Specializing in ADHD, mood disorders, and trauma-informed integrative wellness. 17+ years of clinical excellence. Now accepting new patients.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jennifer Jordan, PMHNP-BC — Board-Certified Psychiatric Nurse Practitioner in Northern Virginia",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Jennifer Jordan, PMHNP-BC — Psychiatric Nurse Practitioner",
    description:
      "Board-certified psychiatric care in Northern Virginia. ADHD, mood disorders, and integrative wellness with a trauma-informed approach. 17+ years of experience.",
    images: ["/og-image.png"],
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
    ICBM: "38.8048, -77.0469",
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
      image: `${siteUrl}/og-image.png`,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressRegion: "VA",
        addressLocality: "Northern Virginia",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 38.8048,
        longitude: -77.0469,
      },
      areaServed: [
        { "@type": "State", name: "Virginia" },
        { "@type": "City", name: "Fairfax" },
        { "@type": "City", name: "Arlington" },
        { "@type": "City", name: "Alexandria" },
        { "@type": "City", name: "McLean" },
        { "@type": "City", name: "Reston" },
        { "@type": "City", name: "Tysons" },
        { "@type": "City", name: "Herndon" },
        { "@type": "City", name: "Leesburg" },
        { "@type": "City", name: "Manassas" },
      ],
      medicalSpecialty: ["Psychiatry", "Mental Health", "Psychiatric Nursing"],
      availableService: [
        {
          "@type": "MedicalTherapy",
          name: "Pediatric & Adolescent Psychiatric Care",
          description:
            "Psychiatric evaluation and treatment for children and teens ages 6-17, including ADHD, anxiety, and mood disorders.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Adult ADHD Assessment & Management",
          description:
            "Comprehensive ADHD assessment, diagnostic clarity, and individualized treatment plans for adults.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Integrative Medication Management",
          description:
            "Evidence-based psychopharmacology for mood disorders, anxiety, and depression with holistic lifestyle integration.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Trauma-Informed Psychiatric Care",
          description:
            "Compassionate psychiatric evaluation and treatment grounded in trauma-informed principles.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Telehealth Psychiatry",
          description:
            "Virtual psychiatric consultations available statewide across Virginia.",
        },
      ],
      founder: {
        "@type": "Person",
        "@id": `${siteUrl}/#jennifer`,
        name: "Jennifer Jordan",
        jobTitle: "Psychiatric Mental Health Nurse Practitioner",
        honorificSuffix: "PMHNP-BC",
        description:
          "Board-certified psychiatric mental health nurse practitioner with 17+ years of clinical excellence. Georgetown University alumna specializing in ADHD, mood disorders, and trauma-informed care.",
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Georgetown University",
          sameAs: "https://www.georgetown.edu",
        },
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Board Certification",
            name: "PMHNP-BC",
            recognizedBy: {
              "@type": "Organization",
              name: "American Nurses Credentialing Center",
              sameAs: "https://www.nursingworld.org/ancc/",
            },
          },
        ],
        knowsAbout: [
          "ADHD",
          "Mood Disorders",
          "Trauma-Informed Care",
          "Psychopharmacology",
          "Pediatric Psychiatry",
          "Adult Psychiatry",
          "Integrative Mental Health",
        ],
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
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
      publisher: { "@id": `${siteUrl}/#practice` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Jennifer Jordan, PMHNP-BC — Psychiatric Nurse Practitioner | Northern Virginia",
      description: siteDescription,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#practice` },
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What conditions does Jennifer Jordan, PMHNP-BC treat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jennifer Jordan specializes in ADHD (pediatric and adult), mood disorders, anxiety, depression, and provides trauma-informed psychiatric care with integrative medication management.",
          },
        },
        {
          "@type": "Question",
          name: "Does Jennifer Jordan offer telehealth appointments?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, telehealth psychiatric consultations are available statewide across Virginia, in addition to in-person appointments in Northern Virginia.",
          },
        },
        {
          "@type": "Question",
          name: "What ages does the practice serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The practice provides psychiatric care for children ages 6 and up, adolescents, and adults.",
          },
        },
        {
          "@type": "Question",
          name: "What is a PMHNP-BC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "PMHNP-BC stands for Psychiatric Mental Health Nurse Practitioner, Board Certified. This credential is awarded by the American Nurses Credentialing Center and indicates advanced training and certification in psychiatric and mental health care.",
          },
        },
      ],
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
