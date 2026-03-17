import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Droplets,
  ThermometerSun,
  CloudRain,
  Waves,
  Wind,
  Syringe,
  Fan,
  Layers,
  Construction,
  Flame,
  Star,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { TrustBar } from "@/components/home/TrustBar";
import { ManifestoSection } from "@/components/home/ManifestoSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { CTASection } from "@/components/home/CTASection";
import { ProblemsSection } from "@/components/home/ProblemsSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { CitiesSection } from "@/components/home/CitiesSection";
import { organizationJsonLd, webSiteJsonLd, faqJsonLd, aggregateRatingJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "MurExpert | Diagnostic & Traitement de l'Humidite en France",
  description:
    "Expert en diagnostic et traitement de l'humidite. Moisissure, salpetre, remontee capillaire, infiltration. Diagnostic gratuit et intervention rapide dans toute la France.",
};

const faqItems = [
  {
    question: "Comment savoir si j'ai un probleme d'humidite dans ma maison ?",
    answer: "Les signes les plus courants sont : des taches de moisissure sur les murs ou plafonds, des depots blanchatres (salpetre), des odeurs de moisi, de la peinture qui s'ecaille, du papier peint qui se decolle, de la condensation sur les fenetres ou une sensation de froid et d'humidite dans les pieces. Si vous observez un ou plusieurs de ces symptomes, nous vous recommandons de faire realiser un diagnostic gratuit par un expert.",
  },
  {
    question: "Le diagnostic d'humidite est-il vraiment gratuit ?",
    answer: "Oui, le diagnostic d'humidite que nous proposons est 100% gratuit et sans engagement. Un technicien expert se deplace chez vous pour analyser la source de l'humidite a l'aide d'appareils de mesure professionnels (hygrometre, camera thermique, detecteur de sels). Vous recevez ensuite un rapport detaille avec les solutions recommandees et un devis transparent.",
  },
  {
    question: "Combien coute un traitement contre l'humidite ?",
    answer: "Le cout depend du type de probleme et de la surface a traiter. A titre indicatif : une injection de resine contre les remontees capillaires coute entre 80 et 150 EUR par metre lineaire, l'installation d'une VMI entre 2 500 et 4 000 EUR, et un cuvelage de cave entre 150 et 300 EUR par m2. Le diagnostic gratuit permet d'etablir un devis precis adapte a votre situation.",
  },
  {
    question: "Combien de temps durent les travaux de traitement ?",
    answer: "La duree varie selon la nature des travaux. Une injection de resine prend generalement 1 a 2 jours. L'installation d'une VMC/VMI se fait en une journee. Un cuvelage de cave necessite 3 a 5 jours selon la surface. Le drainage peripherique peut prendre 1 a 2 semaines. Votre technicien vous donnera un planning precis lors du diagnostic.",
  },
  {
    question: "Proposez-vous une garantie sur les travaux ?",
    answer: "Oui, tous nos traitements sont couverts par une garantie decennale (10 ans) conformement a la loi. De plus, nous offrons une garantie de resultat : si le probleme d'humidite persiste apres notre intervention, nous revenons gratuitement pour ajuster le traitement jusqu'a resolution complete.",
  },
  {
    question: "Intervenez-vous dans toute la France ?",
    answer: "Oui, MurExpert intervient dans toute la France metropolitaine. Nous avons des equipes basees dans les principales villes (Paris, Lyon, Marseille, Bordeaux, Lille, Toulouse, Nantes, Strasbourg et leurs agglomerations). Le delai d'intervention est generalement de 48 heures apres votre prise de rendez-vous.",
  },
];

export default function Home() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingJsonLd()) }}
      />

      {/* ══════ HERO — CAEs style rounded card ══════ */}
      <section className="bg-white px-5 pt-4 pb-0 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative min-h-[520px] overflow-hidden rounded-[1.5rem] sm:min-h-[600px] lg:min-h-[680px]">
            {/* Background video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              poster="/images/hero.jpg"
            >
              <source src="/images/hero-video.mp4" type="video/mp4" />
            </video>
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Content — positioned bottom-left */}
            <div className="relative flex h-full min-h-[520px] flex-col justify-end p-8 sm:min-h-[600px] sm:p-12 lg:min-h-[680px] lg:p-16">
              <div className="max-w-xl">
                {/* Large serif heading */}
                <h1
                  className="text-[2.25rem] leading-[1.1] text-white sm:text-[3rem] lg:text-[3.75rem]"
                  style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
                >
                  Votre maison souffre d&apos;humidite ?
                </h1>

                {/* Subtitle */}
                <p className="mt-5 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
                  Moisissure, salpetre, remontee capillaire, infiltration...
                  Nos experts diagnostiquent la cause et traitent le probleme a la source.
                  Diagnostic gratuit, intervention rapide dans toute la France.
                </p>

                {/* CTA button */}
                <Link
                  href="/diagnostic-gratuit/"
                  className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white transition-transform duration-300 hover:scale-[1.04]"
                >
                  Demander mon diagnostic gratuit
                  <ArrowRight className="h-4 w-4" />
                </Link>

                {/* Trust badge */}
                <div className="mt-6 flex items-center gap-3">
                  <ShieldCheck className="h-4 w-4 text-white/60" />
                  <span className="text-sm text-white/60">
                    Garantie decennale &middot; Intervention sous 48h &middot; 100% gratuit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ TRUST BAR ══════ */}
      <TrustBar />

      {/* ══════ MANIFESTO ══════ */}
      <ManifestoSection />

      {/* ══════ PROBLEMS ══════ */}
      <ProblemsSection />

      {/* ══════ HOW IT WORKS ══════ */}
      <HowItWorks />

      {/* ══════ SOLUTIONS ══════ */}
      <SolutionsSection />

      {/* ══════ TESTIMONIALS ══════ */}
      <TestimonialsSection />

      {/* ══════ CITIES ══════ */}
      <CitiesSection />

      {/* ══════ FAQ ══════ */}
      <HomeFAQ />

      {/* ══════ FINAL CTA ══════ */}
      <CTASection />
    </>
  );
}
