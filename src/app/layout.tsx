import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Canonical } from "@/components/seo/Canonical";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://murexpert.fr"),
  title: {
    default: "MurExpert | Diagnostic & Traitement de l'Humidite en France",
    template: "%s | MurExpert",
  },
  description:
    "MurExpert, expert en diagnostic et traitement de l'humidite. Moisissure, salpetre, remontee capillaire, infiltration. Diagnostic gratuit dans toute la France.",
  keywords: [
    "traitement humidite",
    "diagnostic humidite",
    "moisissure mur",
    "salpetre",
    "remontee capillaire",
    "infiltration eau",
    "humidite maison",
    "expert humidite",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "MurExpert",
    images: [{ url: "/logo-murexpert.png", width: 800, height: 300, alt: "MurExpert" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <Canonical />
      </head>
      <body
        className={`${instrumentSerif.variable} ${inter.variable} antialiased`}
      >
        <ScrollToTop />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
