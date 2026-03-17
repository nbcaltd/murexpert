import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, AlertTriangle, ChevronRight } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { breadcrumbJsonLd, faqJsonLd, articleJsonLd, howToJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Moisissure Mur : Causes, Dangers et Traitement Definitif",
  description:
    "Moisissure sur les murs ? Decouvrez les causes, les risques pour la sante et les traitements professionnels pour eliminer definitivement la moisissure. Diagnostic gratuit.",
};

const faqItems = [
  {
    question: "La moisissure sur les murs est-elle dangereuse pour la sante ?",
    answer: "Oui, la moisissure sur les murs est dangereuse pour la sante. Les spores de moisissure en suspension dans l'air provoquent des allergies, de l'asthme, des infections respiratoires et des irritations des yeux et de la peau. L'OMS classe l'exposition aux moisissures comme facteur de risque pour les maladies respiratoires. Les enfants, personnes agees et immunodeprimees sont particulierement vulnerables.",
  },
  {
    question: "Comment enlever la moisissure sur un mur ?",
    answer: "Pour enlever la moisissure sur un mur durablement, il faut d'abord identifier et traiter la cause de l'humidite (mauvaise ventilation, infiltration, remontee capillaire). Ensuite, un professionnel applique un traitement fongicide en profondeur, nettoie les surfaces et applique un enduit anti-moisissure. Nettoyer la moisissure sans traiter la cause ne fait que retarder son retour.",
  },
  {
    question: "Pourquoi j'ai de la moisissure sur mes murs ?",
    answer: "La moisissure apparait lorsque trois conditions sont reunies : un taux d'humidite superieur a 60-70%, une temperature favorable (5 a 35 degres) et une surface organique (peinture, platre, papier peint). Les causes sous-jacentes sont une mauvaise ventilation, des infiltrations d'eau, des remontees capillaires ou un pont thermique. Un diagnostic professionnel identifie la cause exacte.",
  },
  {
    question: "Quel professionnel contacter pour de la moisissure ?",
    answer: "Pour un probleme de moisissure, contactez un expert en diagnostic et traitement de l'humidite comme MurExpert. Evitez les simples peintres qui ne traitent que le symptome. Un technicien specialise utilise des appareils professionnels (hygrometre, camera thermique) pour identifier la cause exacte de l'humidite et proposer un traitement adapte. Chez MurExpert, le diagnostic est gratuit et sans engagement.",
  },
  {
    question: "Comment eviter le retour de la moisissure ?",
    answer: "Pour eviter le retour de la moisissure, il faut traiter la cause de l'humidite a la source. Assurez une ventilation correcte (VMC ou VMI), maintenez un taux d'humidite entre 40% et 60%, evitez de secher le linge en interieur, chauffez regulierement toutes les pieces et verifiez l'isolation thermique. Si la cause est structurelle (remontee capillaire, infiltration), seul un traitement professionnel est efficace.",
  },
  {
    question: "Est-ce que la javel tue la moisissure ?",
    answer: "La javel tue la moisissure en surface mais ne resout pas le probleme. Les moisissures reviennent systematiquement si la source d'humidite n'est pas traitee. De plus, la javel peut endommager certains materiaux et les vapeurs de chlore sont nocives. Les experts deconseillent la javel au profit de traitements fongicides professionnels qui penetrent en profondeur et empechent la repousse.",
  },
  {
    question: "Combien coute un traitement anti-moisissure ?",
    answer: "Le cout d'un traitement anti-moisissure depend de la cause et de la surface affectee. Un traitement fongicide professionnel coute entre 15 et 30 EUR par m2. Si la cause est un probleme de ventilation, l'installation d'une VMC/VMI coute entre 2 500 et 4 000 EUR. Pour des remontees capillaires, comptez 80 a 150 EUR par metre lineaire d'injection de resine. Le diagnostic est gratuit chez MurExpert.",
  },
];

const howToSteps = [
  { name: "Diagnostic professionnel", text: "Un technicien expert mesure le taux d'humidite dans les murs avec un hygrometre professionnel, utilise une camera thermique pour detecter les ponts thermiques et analyse les sels pour identifier les remontees capillaires." },
  { name: "Identification de la cause", text: "Le technicien determine la cause exacte de la moisissure : condensation, remontee capillaire, infiltration ou fuite cachee. Un rapport detaille est remis avec les solutions recommandees." },
  { name: "Traitement de la cause", text: "Selon la cause identifiee : installation d'une VMC/VMI pour la condensation, injection de resine pour les remontees capillaires, reparation des infiltrations ou drainage peripherique." },
  { name: "Elimination de la moisissure", text: "Application d'un traitement fongicide professionnel en profondeur, nettoyage des surfaces, application d'un enduit anti-moisissure et remise en peinture." },
  { name: "Suivi post-traitement", text: "Verification apres quelques semaines que le taux d'humidite est revenu a la normale et que la moisissure n'est pas reapparue. Garantie decennale sur les travaux." },
];

export default function MoisissureMurPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: "https://murexpert.fr" },
              { name: "Moisissure mur", url: "https://murexpert.fr/moisissure-mur/" },
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
              title: "Moisissure Mur : Causes, Dangers et Traitement Definitif",
              description: "Moisissure sur les murs ? Decouvrez les causes, les risques pour la sante et les traitements professionnels pour eliminer definitivement la moisissure.",
              url: "https://murexpert.fr/moisissure-mur/",
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
            howToJsonLd("Comment traiter la moisissure sur un mur", howToSteps, "P3D")
          ),
        }}
      />

      {/* Breadcrumb */}
      <div className="bg-beige-50 border-b border-beige-200">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A] font-medium">Moisissure mur</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-beige-50 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#E8952D]/10 px-4 py-1.5 text-sm font-semibold text-[#E8952D]">
              Probleme d&apos;humidite
            </span>
            <h1
              className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12] lg:text-[3.25rem] lg:leading-[1.08]"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
            >
              Moisissure sur les murs : causes, dangers et solutions
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#6B6B6B]">
              La moisissure sur les murs est bien plus qu&apos;un probleme esthetique. C&apos;est un signal
              d&apos;alarme qui revele un probleme d&apos;humidite qu&apos;il faut traiter a la source.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/diagnostic-gratuit/"
                className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
              >
                Diagnostic gratuit moisissure
                <ArrowRight className="h-4 w-4" />
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
              src="/images/moisissure.jpg"
              alt="Moisissure noire sur un mur interieur — signe d'un probleme d'humidite"
              className="w-full h-[300px] sm:h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="space-y-12">

            {/* Section 1 */}
            <div>
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                Qu&apos;est-ce que la moisissure sur les murs ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La moisissure est un champignon microscopique qui se developpe dans les environnements humides. Sur les murs de votre maison ou appartement, elle se manifeste sous forme de taches noires, vertes ou blanches, souvent accompagnees d&apos;une odeur de moisi caracteristique. Les moisissures les plus courantes dans les habitations sont l&apos;Aspergillus, le Cladosporium, le Penicillium et le Stachybotrys (la fameuse &quot;moisissure noire&quot;).
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Contrairement a ce que beaucoup pensent, la moisissure n&apos;est pas une simple tache qu&apos;on peut nettoyer et oublier. C&apos;est un organisme vivant qui se nourrit de materiaux organiques presents dans vos murs (cellulose du platre, peinture, colle de papier peint) et qui se reproduit en liberant des millions de spores dans l&apos;air ambiant.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                En France, on estime que 20 a 25% des logements presentent des signes de moisissure. C&apos;est un probleme particulierement repandu dans les logements anciens, mal isoles ou insuffisamment ventiles, mais qui peut aussi toucher des constructions recentes si les conditions sont reunies.
              </p>
            </div>

            {/* CTA mid-article */}
            <div className="rounded-2xl bg-beige-100 p-6 sm:p-8">
              <p className="text-lg font-semibold text-[#1A1A1A] mb-2">Vous avez de la moisissure chez vous ?</p>
              <p className="text-sm text-[#6B6B6B] mb-4">Un expert MurExpert identifie la cause exacte et vous propose la solution adaptee. Diagnostic gratuit, sans engagement.</p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-6 py-2.5 text-sm font-semibold text-white hover:scale-[1.03] transition-all">
                Demander mon diagnostic <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Section 2 */}
            <div>
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                Les causes de la moisissure sur les murs
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Pour eliminer durablement la moisissure, il est essentiel d&apos;identifier la cause profonde de l&apos;humidite. Voici les principales causes :
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">Probleme de ventilation et condensation</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                C&apos;est la cause la plus frequente de moisissure dans les logements. Lorsque l&apos;air chaud et humide entre en contact avec une surface froide (mur mal isole, pont thermique pres des fenetres), la vapeur d&apos;eau se condense et cree un environnement ideal pour la moisissure. Ce probleme est aggrave par une ventilation insuffisante, des fenetres trop etanches sans VMC, ou un sechage du linge en interieur.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">Remontees capillaires</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                L&apos;eau presente dans le sol remonte dans les murs par capillarite, comme un buvard qui absorbe l&apos;eau. Ce phenomene touche principalement les maisons anciennes (avant 1960) dont les fondations ne comportent pas de barriere anti-humidite. La moisissure apparait alors sur la base des murs, jusqu&apos;a 1 a 1,5 metre de hauteur.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">Infiltrations d&apos;eau</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Les infiltrations par la toiture, les facades fissures, les joints defaillants ou une mauvaise evacuation des eaux de pluie peuvent creer des zones humides propices a la moisissure. Ces infiltrations sont parfois difficiles a detecter car l&apos;eau peut parcourir un long chemin avant de se manifester.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">Fuite d&apos;eau cachee</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Une canalisation encastree qui fuit, un joint de salle de bain defaillant ou un probleme d&apos;etancheite dans un mur mitoyen peuvent provoquer une humidite localisee et l&apos;apparition de moisissure. Ce type de probleme necessite un diagnostic professionnel avec des appareils de detection specifiques.
              </p>
            </div>

            {/* Section 3 - Dangers */}
            <div>
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                Les dangers de la moisissure pour votre sante
              </h2>
              <div className="rounded-xl bg-amber-50 border border-amber-200 p-5 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800">
                    <strong>Attention :</strong> l&apos;OMS (Organisation Mondiale de la Sante) a classe l&apos;exposition aux moisissures comme un facteur de risque pour les maladies respiratoires.
                  </p>
                </div>
              </div>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La moisissure libere dans l&apos;air des spores et des mycotoxines qui peuvent provoquer de nombreux problemes de sante, en particulier chez les personnes sensibles :
              </p>
              <ul className="space-y-3 mb-4">
                {[
                  "Allergies (rhinite, eternuements, yeux qui pleurent)",
                  "Asthme et crises d'asthme aggravees",
                  "Infections respiratoires (bronchite, pneumonie)",
                  "Irritation des yeux, du nez et de la gorge",
                  "Maux de tete et fatigue chronique",
                  "Reactions cutanees (eczema, eruptions)",
                  "Risques accrus pour les nourrissons et enfants en bas age",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E8952D]" />
                    <span className="text-[0.9375rem] text-[#6B6B6B]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Au-dela de la sante, la moisissure deteriore egalement votre logement : degradation des enduits et peintures, pourrissement du bois, fragilisation des structures, perte de valeur immobiliere. Plus vous attendez, plus les degats seront importants et couteux a reparer.
              </p>
            </div>

            {/* Section 4 - Traitements */}
            <div>
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                Comment traiter la moisissure durablement ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Le traitement efficace de la moisissure repose sur une approche en deux etapes : d&apos;abord identifier et traiter la cause de l&apos;humidite, puis eliminer la moisissure existante.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">Etape 1 : Diagnostic professionnel</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Un technicien expert realise un diagnostic complet a l&apos;aide d&apos;appareils professionnels : hygrometre pour mesurer le taux d&apos;humidite dans les murs, camera thermique pour detecter les ponts thermiques et les infiltrations, detecteur de sels pour identifier les remontees capillaires. Ce diagnostic permet de determiner la cause exacte du probleme et la solution la plus adaptee.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">Etape 2 : Traitement de la cause</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Selon la cause identifiee, plusieurs traitements sont possibles :
              </p>
              <ul className="space-y-3 mb-4">
                {[
                  "Installation d'une VMC ou VMI pour les problemes de condensation",
                  "Injection de resine pour les remontees capillaires",
                  "Reparation des infiltrations (etancheite toiture, facade, joints)",
                  "Amelioration de l'isolation thermique pour eliminer les ponts thermiques",
                  "Drainage pour les problemes d'eau souterraine",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E8952D]" />
                    <span className="text-[0.9375rem] text-[#6B6B6B]">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">Etape 3 : Elimination de la moisissure</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Une fois la cause traitee, la moisissure existante est eliminee avec des produits fongicides professionnels. Les murs sont ensuite traites avec un enduit anti-moisissure et repris pour retrouver un aspect propre et sain. Un suivi post-traitement est effectue pour verifier que le probleme ne revient pas.
              </p>
            </div>

            {/* Section 5 - Prix */}
            <div>
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                Prix du traitement anti-moisissure
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-6">
                Le cout du traitement varie en fonction de la cause de la moisissure et de l&apos;etendue des degats :
              </p>
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead className="bg-beige-50">
                    <tr>
                      <th className="px-5 py-3 text-left font-semibold text-[#1A1A1A]">Traitement</th>
                      <th className="px-5 py-3 text-left font-semibold text-[#1A1A1A]">Prix indicatif</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Traitement fongicide de surface</td><td className="px-5 py-3 text-[#6B6B6B]">15 - 30 EUR/m2</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Installation VMC / VMI</td><td className="px-5 py-3 text-[#6B6B6B]">2 500 - 4 000 EUR</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Injection de resine (remontee capillaire)</td><td className="px-5 py-3 text-[#6B6B6B]">80 - 150 EUR/ml</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Reparation infiltration</td><td className="px-5 py-3 text-[#6B6B6B]">500 - 3 000 EUR</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-beige-100 p-8 sm:p-10 text-center">
              <h2 className="text-2xl text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Eliminez la moisissure definitivement
              </h2>
              <p className="text-[#6B6B6B] mb-6 max-w-lg mx-auto">
                Ne laissez pas la moisissure deteriorer votre logement et votre sante.
                Diagnostic gratuit et sans engagement.
              </p>
              <Link
                href="/diagnostic-gratuit/"
                className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white hover:scale-[1.03] transition-all"
              >
                Demander mon diagnostic gratuit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Internal links */}
            <div>
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                En savoir plus sur l&apos;humidite
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Salpetre sur les murs", href: "/salpetre/" },
                  { title: "Remontee capillaire", href: "/remontee-capillaire/" },
                  { title: "Humidite dans la maison", href: "/humidite-maison/" },
                  { title: "Traitements humidite", href: "/traitement-humidite/" },
                  { title: "Diagnostic humidite", href: "/diagnostic-humidite/" },
                  { title: "Diagnostic gratuit", href: "/diagnostic-gratuit/" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between rounded-xl border border-gray-100 px-5 py-3.5 transition-all hover:border-beige-300 hover:shadow-sm group"
                  >
                    <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#E8952D] transition-colors">{link.title}</span>
                    <ChevronRight className="h-4 w-4 text-[#6B6B6B] group-hover:text-[#E8952D]" />
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-8"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                Questions frequentes sur la moisissure
              </h2>
              <Accordion items={faqItems} />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
