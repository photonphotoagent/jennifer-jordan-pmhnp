import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dexterville Digital — Where Ideas Become Reality",
  description:
    "AI development and consulting. We turn your wildest ideas into living, breathing digital products. What used to cost a fortune and take forever, we do in weeks.",
  keywords: [
    "AI development",
    "AI consulting",
    "digital products",
    "rapid prototyping",
    "Dexterville Digital",
  ],
  openGraph: {
    title: "Dexterville Digital — Where Ideas Become Reality",
    description:
      "AI development and consulting. We turn your wildest ideas into living, breathing digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
