import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ChevronRight,
  Users,
  MapPin,
  Shield,
  Handshake,
  Search,
  CheckCircle2,
  Star,
} from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "A propos de MurExpert | Notre reseau d'experts en humidite",
  description:
    "MurExpert vous met en relation avec les meilleurs professionnels du traitement de l'humidite partout en France. Decouvrez notre reseau de partenaires certifies.",
};

const values = [
  {
    icon: Search,
    title: "Trouver le bon expert",
    description:
      "Chaque probleme d'humidite est unique. Nous identifions le professionnel le plus qualifie pres de chez vous pour votre situation specifique.",
  },
  {
    icon: Shield,
    title: "Partenaires certifies",
    description:
      "Tous nos partenaires sont selectionnes sur des criteres stricts : certifications, experience, garantie decennale et satisfaction client.",
  },
  {
    icon: MapPin,
    title: "Partout en France",
    description:
      "Notre reseau couvre l'ensemble du territoire. Ou que vous soyez, nous avons un expert qualifie a proximite de votre domicile.",
  },
  {
    icon: Handshake,
    title: "Un interlocuteur unique",
    description:
      "MurExpert vous accompagne de A a Z : diagnostic, mise en relation, suivi des travaux. Vous n'avez qu'un seul contact pour tout gerer.",
  },
];

const steps = [
  {
    number: "1",
    title: "Vous nous decrivez votre probleme",
    description:
      "Par telephone ou via notre formulaire, vous nous expliquez votre situation. Moisissure, salpetre, remontee capillaire, infiltration... chaque detail nous aide a mieux vous orienter.",
  },
  {
    number: "2",
    title: "Nous selectionnons le bon partenaire",
    description:
      "En fonction de votre probleme, de votre localisation et de la nature des travaux, nous identifions dans notre reseau le professionnel le plus adapte a votre cas.",
  },
  {
    number: "3",
    title: "Un expert intervient chez vous",
    description:
      "Le partenaire selectionne vous contacte pour planifier un diagnostic gratuit. Il se deplace avec son equipement professionnel et vous propose une solution sur mesure.",
  },
  {
    number: "4",
    title: "Nous assurons le suivi",
    description:
      "Apres l'intervention, nous restons votre interlocuteur. Satisfaction, garantie, questions : MurExpert est la pour vous jusqu'a la resolution complete de votre probleme.",
  },
];

const stats = [
  { value: "150+", label: "Partenaires certifies" },
  { value: "Toute la France", label: "Couverture nationale" },
  { value: "48h", label: "Mise en relation" },
  { value: "10 ans", label: "Garantie decennale" },
];

export default function AProposPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: "https://murexpert.fr" },
              { name: "A propos", url: "https://murexpert.fr/a-propos/" },
            ])
          ),
        }}
      />

      {/* Breadcrumb */}
      <div className="bg-beige-50 border-b border-beige-200">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A] font-medium">A propos</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-beige-50 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#E8952D]/10 px-4 py-1.5 text-sm font-semibold text-[#E8952D]">
              Qui sommes-nous
            </span>
            <h1
              className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12] lg:text-[3.25rem] lg:leading-[1.08]"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
            >
              Nous trouvons le meilleur expert pour regler votre probleme d&apos;humidite
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#6B6B6B]">
              MurExpert, c&apos;est un reseau de professionnels certifies partout en France.
              Notre mission : vous mettre en relation avec le bon expert, celui qui connait
              votre probleme et sait le resoudre definitivement.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white transition-all hover:scale-[1.03]">
                Diagnostic gratuit <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+33745881675" className="inline-flex items-center gap-2 text-sm font-medium text-[#E8952D]">
                <Phone className="h-4 w-4" /> 07 45 88 16 75
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image hero */}
      <section className="bg-white pt-12 sm:pt-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/maison-saine.jpg"
              alt="Famille heureuse dans une maison saine et seche"
              className="w-full h-[300px] sm:h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-2xl text-[#2B5EA7] sm:text-3xl"
                  style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[#6B6B6B]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre mission */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="space-y-12">

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Notre mission : simplifier votre recherche
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Quand l&apos;humidite s&apos;installe chez vous, la premiere difficulte est souvent de savoir vers qui se tourner. Quel professionnel ? Quelle solution ? Comment s&apos;assurer de la qualite du travail ? C&apos;est exactement la que MurExpert intervient.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Nous avons construit un reseau de partenaires specialises dans le traitement de l&apos;humidite, selectionnes pour leur expertise, leurs certifications et leur serieux. Chaque partenaire est evalue sur des criteres rigoureux avant d&apos;integrer notre reseau.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Notre role est de faire le lien entre votre probleme et la bonne personne pour le resoudre. Pas d&apos;intermediaire inutile, pas de commercial agressif : juste le bon expert, au bon endroit, au bon moment.
              </p>
            </div>

            {/* Nos valeurs */}
            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-8" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Ce qui nous differencie
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {values.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-gray-100 p-6 transition-all hover:border-beige-300 hover:shadow-sm">
                    <item.icon className="h-6 w-6 text-[#E8952D] mb-3" />
                    <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">{item.title}</h3>
                    <p className="text-[0.875rem] leading-relaxed text-[#6B6B6B]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Comment ca marche */}
            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-8" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Comment ca marche
              </h2>
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div key={step.number} className="flex gap-5">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-base font-bold text-white ${
                      i % 2 === 0 ? "bg-[#E8952D]" : "bg-[#1A1A1A]"
                    }`}>
                      {step.number}
                    </div>
                    <div className="pt-0.5">
                      <h3 className="text-base font-semibold text-[#1A1A1A] mb-1.5">{step.title}</h3>
                      <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nos partenaires */}
            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Des partenaires selectionnes avec exigence
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-6">
                Integrer le reseau MurExpert, ca se merite. Chaque professionnel est evalue sur des criteres precis avant de pouvoir intervenir aupres de nos clients :
              </p>
              <div className="space-y-3">
                {[
                  "Garantie decennale obligatoire sur tous les travaux",
                  "Certifications et formations specifiques au traitement de l'humidite",
                  "Minimum 5 ans d'experience dans le domaine",
                  "Avis clients verifies et taux de satisfaction superieur a 95%",
                  "Utilisation de materiaux professionnels et techniques eprouvees",
                  "Engagement de transparence sur les devis et les delais",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#E8952D] shrink-0 mt-0.5" />
                    <p className="text-[0.9375rem] text-[#6B6B6B]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pourquoi nous faire confiance */}
            <div className="rounded-2xl bg-beige-100 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <Star className="h-5 w-5 text-[#E8952D]" />
                <Star className="h-5 w-5 text-[#E8952D]" />
                <Star className="h-5 w-5 text-[#E8952D]" />
                <Star className="h-5 w-5 text-[#E8952D]" />
                <Star className="h-5 w-5 text-[#E8952D]" />
              </div>
              <p className="text-lg font-semibold text-[#1A1A1A] mb-2">98% de clients satisfaits</p>
              <p className="text-sm text-[#6B6B6B] mb-4">
                La satisfaction de nos clients est notre meilleure preuve de serieux. Nous ne travaillons qu&apos;avec des partenaires qui partagent notre exigence de qualite et de transparence.
              </p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-6 py-2.5 text-sm font-semibold text-white hover:scale-[1.03] transition-all">
                Trouver mon expert <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* CTA final */}
            <div className="rounded-2xl bg-beige-100 p-8 sm:p-10 text-center">
              <h2 className="text-2xl text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Un probleme d&apos;humidite ? On s&apos;occupe de tout.
              </h2>
              <p className="text-[#6B6B6B] mb-6 max-w-lg mx-auto">
                Decrivez-nous votre situation et nous vous mettons en relation avec le meilleur professionnel de votre region. Diagnostic gratuit, sans engagement.
              </p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white hover:scale-[1.03] transition-all">
                Demander mon diagnostic gratuit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
