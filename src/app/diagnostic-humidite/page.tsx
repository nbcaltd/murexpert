import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, ChevronRight, Shield, Clock, Award, Eye } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { breadcrumbJsonLd, faqJsonLd, articleJsonLd, serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Diagnostic Humidite : Comment Identifier la Cause | Expert",
  description:
    "Comment diagnostiquer un probleme d'humidite ? Decouvrez les methodes professionnelles de diagnostic (hygrometre, camera thermique, test a la bombe a carbure) et demandez votre diagnostic gratuit.",
};

const faqItems = [
  {
    question: "Comment se deroule un diagnostic d'humidite professionnel ?",
    answer: "Un technicien expert se deplace chez vous pour realiser une inspection visuelle complete, puis utilise des appareils de mesure professionnels : hygrometre a pointes pour mesurer l'humidite dans les murs, camera thermique pour detecter ponts thermiques et infiltrations, detecteur de sels pour identifier les remontees capillaires. Le diagnostic dure environ 1 a 2 heures et se conclut par un rapport detaille avec les causes identifiees et les solutions recommandees.",
  },
  {
    question: "Le diagnostic humidite est-il payant ?",
    answer: "Chez MurExpert, le diagnostic d'humidite est 100% gratuit et sans engagement. Un technicien certifie se deplace a votre domicile, realise l'inspection complete et vous remet un rapport detaille. Vous n'avez aucune obligation de realiser les travaux avec nous. C'est notre facon de vous aider a comprendre votre probleme avant de prendre une decision.",
  },
  {
    question: "Qui peut realiser un diagnostic d'humidite ?",
    answer: "Un diagnostic d'humidite fiable doit etre realise par un technicien forme et equipe d'appareils de mesure professionnels. Chez MurExpert, nos techniciens sont certifies et possedent une experience de terrain de plusieurs annees. Ils maitrisent les differentes pathologies du batiment liees a l'humidite et disposent de l'equipement necessaire (hygrometre professionnel, camera thermique, detecteurs de sels).",
  },
  {
    question: "Puis-je diagnostiquer l'humidite moi-meme ?",
    answer: "Vous pouvez reperer les signes visibles (moisissure, salpetre, condensation, taches) et mesurer le taux d'humidite ambiant avec un hygrometre basique. Cependant, identifier la cause exacte (condensation, remontee capillaire, infiltration, fuite) necessite des appareils professionnels et une expertise technique. Un mauvais diagnostic conduit a un mauvais traitement et a une perte d'argent.",
  },
  {
    question: "Combien de temps dure un diagnostic d'humidite ?",
    answer: "Un diagnostic complet dure entre 1 et 2 heures, selon la taille du logement et la complexite du probleme. Le technicien inspecte l'ensemble du bien (caves, sous-sols, murs, fenetres, toiture) pour avoir une vision globale. Le rapport complet vous est remis dans les 48 heures suivant la visite.",
  },
];

export default function DiagnosticHumiditePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: "https://murexpert.fr" },
              { name: "Diagnostic humidite", url: "https://murexpert.fr/diagnostic-humidite/" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "Diagnostic Humidite : Comment Identifier la Cause",
              description: "Comment diagnostiquer un probleme d'humidite ? Decouvrez les methodes professionnelles de diagnostic et demandez votre diagnostic gratuit.",
              url: "https://murexpert.fr/diagnostic-humidite/",
              datePublished: "2025-01-15",
              dateModified: "2026-03-16",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({ name: "Diagnostic humidite professionnel", description: "Diagnostic complet de l'humidite a domicile avec appareils professionnels : hygrometre, camera thermique, detecteur de sels. Rapport detaille et devis gratuit." })
          ),
        }}
      />

      <div className="bg-beige-50 border-b border-beige-200">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A] font-medium">Diagnostic humidite</span>
          </nav>
        </div>
      </div>

      <section className="bg-beige-50 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#E8952D]/10 px-4 py-1.5 text-sm font-semibold text-[#E8952D]">
              Expertise
            </span>
            <h1
              className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12] lg:text-[3.25rem] lg:leading-[1.08]"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
            >
              Diagnostic humidite : la cle d&apos;un traitement efficace
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#6B6B6B]">
              Un bon diagnostic est la condition indispensable d&apos;un traitement reussi.
              Nos experts identifient la cause exacte de votre probleme pour une solution definitive.
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
            <img src="/images/diagnostic.jpg" alt="Technicien professionnel inspectant un mur pour un diagnostic humidite" className="w-full h-[300px] sm:h-[400px] object-cover" />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
            {[
              { icon: Shield, text: "Diagnostic 100% gratuit" },
              { icon: Clock, text: "Intervention sous 48h" },
              { icon: Award, text: "Techniciens certifies" },
              { icon: Eye, text: "Appareils professionnels" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5">
                <item.icon className="h-5 w-5 text-[#E8952D]" />
                <span className="text-sm font-medium text-[#1A1A1A]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="space-y-12">

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Pourquoi le diagnostic est-il indispensable ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                L&apos;humidite dans un batiment peut avoir de multiples origines : condensation, remontees capillaires, infiltrations, fuites cachees. Chaque cause necessite un traitement specifique. Un traitement inadapte est non seulement inefficace, mais peut meme aggraver le probleme.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Par exemple, appliquer un enduit etanche sur un mur sujet aux remontees capillaires va emprisonner l&apos;humidite qui trouvera un autre chemin, souvent plus haut dans le mur. De meme, installer une VMC dans une maison dont le probleme vient d&apos;une infiltration de toiture ne resoudra rien.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                C&apos;est pourquoi le diagnostic professionnel est la premiere etape incontournable. Il permet d&apos;identifier avec certitude la cause du probleme et de proposer le traitement le plus adapte, au juste prix.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Les etapes d&apos;un diagnostic professionnel
              </h2>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">1. Inspection visuelle</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Le technicien commence par une inspection visuelle complete du logement : etat des murs interieurs et exterieurs, des fenetres, de la toiture, des sous-sols et caves. Il repere les signes visibles d&apos;humidite (taches, moisissures, salpetre, condensation) et evalue leur localisation et leur etendue.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">2. Mesure de l&apos;humidite dans les murs</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                A l&apos;aide d&apos;un hygrometre professionnel a pointes (ou d&apos;un testeur a bombe a carbure pour plus de precision), le technicien mesure le taux d&apos;humidite a differents endroits et differentes hauteurs du mur. Ces mesures permettent de determiner si l&apos;humidite vient du sol (remontees capillaires), de l&apos;exterieur (infiltration) ou de l&apos;interieur (condensation).
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">3. Imagerie thermique</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La camera thermique (ou thermographie infrarouge) permet de visualiser les differences de temperature a la surface des murs. Elle revele les ponts thermiques (zones mal isolees ou l&apos;humidite se condense), les infiltrations cachees et les zones humides non visibles a l&apos;oeil nu. C&apos;est un outil non destructif extremement precieux.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">4. Detection des sels</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La presence de sels (nitrates, sulfates, chlorures) dans les murs est un indicateur de remontees capillaires. Le technicien preleve des echantillons pour determiner la nature et la concentration des sels, ce qui confirme ou ecarte l&apos;hypothese des remontees capillaires.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">5. Analyse et rapport</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Le technicien croise l&apos;ensemble des donnees pour etablir un diagnostic precis. Vous recevez un rapport complet comprenant : les causes identifiees, l&apos;etendue des degats, les solutions recommandees et un devis detaille. Ce rapport est gratuit et sans engagement.
              </p>
            </div>

            <div className="rounded-2xl bg-beige-100 p-6 sm:p-8">
              <p className="text-lg font-semibold text-[#1A1A1A] mb-2">Diagnostic gratuit sous 48h</p>
              <p className="text-sm text-[#6B6B6B] mb-4">Un expert MurExpert se deplace chez vous avec tout l&apos;equipement professionnel necessaire. Rapport complet + devis transparent, sans engagement.</p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-6 py-2.5 text-sm font-semibold text-white hover:scale-[1.03] transition-all">
                Prendre rendez-vous <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Les differents types de problemes detectes
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-6">
                Le diagnostic permet d&apos;identifier precisement le type de probleme et d&apos;orienter vers la solution adaptee :
              </p>
              <div className="space-y-4">
                {[
                  { problem: "Condensation", signs: "Buee sur fenetres, moisissure angles plafond", solution: "VMC/VMI, amelioration isolation", link: "/traitement-humidite/" },
                  { problem: "Remontees capillaires", signs: "Humidite bas des murs, salpetre", solution: "Injection resine hydrophobe", link: "/remontee-capillaire/" },
                  { problem: "Infiltrations", signs: "Taches localisees, humidite apres la pluie", solution: "Etancheite facade/toiture", link: "/humidite-maison/" },
                  { problem: "Moisissures", signs: "Taches noires, odeur de moisi", solution: "Traitement cause + fongicide", link: "/moisissure-mur/" },
                  { problem: "Salpetre", signs: "Depots blancs cristallins sur murs", solution: "Traitement remontees + nettoyage", link: "/salpetre/" },
                ].map((item) => (
                  <Link key={item.problem} href={item.link} className="block rounded-xl border border-gray-100 p-5 transition-all hover:border-beige-300 hover:shadow-sm group">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-base font-semibold text-[#1A1A1A] group-hover:text-[#E8952D] transition-colors">{item.problem}</h3>
                        <p className="mt-1 text-sm text-[#6B6B6B]"><strong>Signes :</strong> {item.signs}</p>
                        <p className="text-sm text-[#6B6B6B]"><strong>Solution :</strong> {item.solution}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-[#6B6B6B] group-hover:text-[#E8952D] shrink-0 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Combien coute un diagnostic d&apos;humidite ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Chez MurExpert, le diagnostic d&apos;humidite est entierement gratuit. C&apos;est notre engagement qualite : nous voulons que vous compreniez parfaitement votre probleme avant de prendre une decision.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                A titre informatif, un diagnostic d&apos;humidite realise par un expert independant coute generalement entre 200 et 500 EUR. Notre diagnostic gratuit comprend exactement les memes prestations : deplacement d&apos;un technicien certifie, mesures avec appareils professionnels et rapport detaille.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Ce diagnostic est 100% sans engagement. Si vous decidez de ne pas donner suite, vous ne paierez rien. Notre objectif est de vous aider a prendre la meilleure decision pour votre logement.
              </p>
            </div>

            <div className="rounded-2xl bg-beige-100 p-8 sm:p-10 text-center">
              <h2 className="text-2xl text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Obtenez votre diagnostic gratuit
              </h2>
              <p className="text-[#6B6B6B] mb-6 max-w-lg mx-auto">
                Un expert se deplace chez vous sous 48h pour identifier la cause de votre probleme d&apos;humidite. Gratuit, sans engagement.
              </p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white hover:scale-[1.03] transition-all">
                Demander mon diagnostic <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-8" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Questions frequentes
              </h2>
              <Accordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
