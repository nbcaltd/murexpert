import type { Metadata } from "next";
import { DiagnosticQuiz } from "@/components/contacto/DiagnosticQuiz";
import { Phone, Clock, Shield, Award, CheckCircle2 } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Diagnostic Gratuit Humidite - Demande en ligne",
  description:
    "Demandez votre diagnostic humidite gratuit et sans engagement. Un expert MurExpert se deplace chez vous sous 48h pour identifier la cause de votre probleme d'humidite.",
};

const trustBadges = [
  { icon: Clock, text: "Reponse sous 24h" },
  { icon: Shield, text: "100% gratuit et sans engagement" },
  { icon: Award, text: "Techniciens certifies" },
];

export default function DiagnosticGratuitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: "https://murexpert.fr" },
              { name: "Diagnostic gratuit", url: "https://murexpert.fr/diagnostic-gratuit/" },
            ])
          ),
        }}
      />

      {/* Hero header */}
      <section className="bg-beige-100 py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#E8952D]/10 px-4 py-1.5 text-sm font-semibold text-[#E8952D]">
              Diagnostic gratuit
            </span>
            <h1
              className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12] lg:text-[3.25rem] lg:leading-[1.08]"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
            >
              Demandez votre diagnostic humidite gratuit
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#6B6B6B]">
              Remplissez le formulaire ci-dessous. Un expert MurExpert vous recontacte
              sous 24 heures pour planifier votre diagnostic gratuit a domicile.
            </p>
          </div>
        </div>
      </section>

      {/* Quiz */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <DiagnosticQuiz />
        </div>
      </section>
    </>
  );
}
