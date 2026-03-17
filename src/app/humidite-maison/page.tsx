import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, ChevronRight } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { breadcrumbJsonLd, faqJsonLd, articleJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Humidite Maison : Causes, Signes et Solutions | Expert Humidite",
  description:
    "Probleme d'humidite dans votre maison ? Apprenez a identifier les signes, comprendre les causes et decouvrir les solutions professionnelles. Diagnostic gratuit dans toute la France.",
};

const faqItems = [
  {
    question: "Quel est le taux d'humidite normal dans une maison ?",
    answer: "Le taux d'humidite relative ideal dans une maison se situe entre 40% et 60%. En dessous de 40%, l'air est trop sec. Au-dessus de 60%, l'humidite favorise le developpement des moisissures et des acariens. Un taux superieur a 70% constitue un probleme d'humidite qu'il faut traiter. Utilisez un hygrometre pour verifier.",
  },
  {
    question: "Humidite maison que faire ?",
    answer: "Face a l'humidite dans votre maison, la premiere etape est d'identifier la cause : condensation, remontee capillaire, infiltration ou fuite. Ne traitez pas les symptomes (moisissure, salpetre) sans traiter la source. Faites realiser un diagnostic gratuit par un professionnel qui identifiera la cause exacte et proposera le traitement adapte. Chez MurExpert, le diagnostic est gratuit et sans engagement.",
  },
  {
    question: "Comment mesurer l'humidite dans ma maison ?",
    answer: "Vous pouvez utiliser un hygrometre (10-30 EUR en magasin de bricolage) pour mesurer le taux d'humidite ambiant. Cependant, pour identifier la source du probleme dans les murs, il faut un professionnel equipe d'un hygrometre a pointe, d'une camera thermique et de detecteurs de sels specifiques.",
  },
  {
    question: "L'humidite dans la maison peut-elle venir du sol ?",
    answer: "Oui, c'est l'une des causes les plus frequentes dans les maisons anciennes. L'eau du sol remonte dans les murs par capillarite (remontees capillaires). Ce phenomene touche les constructions d'avant 1960 sans barriere anti-humidite. Les signes : taches d'humidite en bas des murs, salpetre, enduit qui s'effrite.",
  },
  {
    question: "Ma maison est recente, pourquoi ai-je de l'humidite ?",
    answer: "Les constructions recentes peuvent aussi avoir des problemes d'humidite : defaut d'etancheite, ventilation insuffisante, pont thermique dans l'isolation ou humidite de construction residuelle (le beton met 1 a 2 ans a secher completement). Un diagnostic identifie la cause exacte.",
  },
  {
    question: "L'humidite augmente-t-elle ma facture de chauffage ?",
    answer: "Oui, significativement. Un mur humide perd jusqu'a 50% de sa capacite isolante car l'eau conduit la chaleur 25 fois mieux que l'air. Une maison humide necessite plus d'energie pour etre chauffee, soit une augmentation de 20 a 30% de la facture de chauffage en moyenne.",
  },
  {
    question: "Quels sont les risques de l'humidite pour la sante ?",
    answer: "L'humidite favorise le developpement de moisissures dont les spores provoquent allergies, asthme et infections respiratoires. Elle favorise aussi la proliferation des acariens. Les personnes les plus a risque sont les enfants, les personnes agees et les asthmatiques. Un logement humide peut aggraver les symptomes respiratoires de 30 a 50%.",
  },
];

export default function HumiditeMaisonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: "https://murexpert.fr" },
              { name: "Humidite maison", url: "https://murexpert.fr/humidite-maison/" },
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
              title: "Humidite Maison : Causes, Signes et Solutions",
              description: "Probleme d'humidite dans votre maison ? Apprenez a identifier les signes, comprendre les causes et decouvrir les solutions professionnelles.",
              url: "https://murexpert.fr/humidite-maison/",
              datePublished: "2025-01-15",
              dateModified: "2026-03-16",
            })
          ),
        }}
      />

      <div className="bg-beige-50 border-b border-beige-200">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A] font-medium">Humidite maison</span>
          </nav>
        </div>
      </div>

      <section className="bg-beige-50 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#E8952D]/10 px-4 py-1.5 text-sm font-semibold text-[#E8952D]">
              Guide complet
            </span>
            <h1
              className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12] lg:text-[3.25rem] lg:leading-[1.08]"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
            >
              Humidite dans la maison : guide complet pour comprendre et agir
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#6B6B6B]">
              L&apos;humidite dans une maison touche 1 logement sur 4 en France.
              Comprendre les causes est la premiere etape pour retrouver un interieur sain et sec.
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
            <img src="/images/infiltration.jpg" alt="Peinture ecaillee sur un mur suite a une infiltration d eau" className="w-full h-[300px] sm:h-[400px] object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="space-y-12">

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Les signes d&apos;un probleme d&apos;humidite
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                L&apos;humidite dans une maison se manifeste de nombreuses facons. Certains signes sont evidents, d&apos;autres plus subtils. Voici les principaux indicateurs d&apos;un probleme d&apos;humidite :
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Taches sombres ou de moisissure sur les murs et plafonds",
                  "Peinture qui cloque, s'ecaille ou qui jaunit",
                  "Papier peint qui se decolle",
                  "Depots blanchatres (salpetre) sur les murs",
                  "Odeur de moisi persistante, surtout dans les pieces fermees",
                  "Condensation sur les fenetres, surtout le matin",
                  "Sensation de froid et d'humidite malgre le chauffage",
                  "Boiseries qui gonflent, portes qui ne ferment plus correctement",
                  "Enduit qui s'effrite ou qui tombe",
                  "Taches d'humidite au sol, en pied de mur",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E8952D]" />
                    <span className="text-[0.9375rem] text-[#6B6B6B]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Si vous observez un ou plusieurs de ces signes, il est important de faire realiser un diagnostic par un professionnel. Plus le probleme est traite tot, moins les degats et les couts de reparation seront importants.
              </p>
            </div>

            <div className="rounded-2xl bg-beige-100 p-6 sm:p-8">
              <p className="text-lg font-semibold text-[#1A1A1A] mb-2">Vous reconnaissez ces signes ?</p>
              <p className="text-sm text-[#6B6B6B] mb-4">Un expert MurExpert se deplace gratuitement pour un diagnostic complet de votre habitation.</p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-6 py-2.5 text-sm font-semibold text-white hover:scale-[1.03] transition-all">
                Demander un diagnostic gratuit <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Les 5 causes principales d&apos;humidite dans une maison
              </h2>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">1. La condensation</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La condensation est la cause numero 1 d&apos;humidite dans les logements francais. Elle se produit lorsque l&apos;air chaud et humide (genere par la respiration, la cuisine, les douches, le sechage du linge) entre en contact avec une surface froide. Le probleme est accentue par une ventilation insuffisante, une isolation defaillante ou des fenetres trop etanches sans systeme de renouvellement d&apos;air.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">2. Les remontees capillaires</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                L&apos;eau presente dans le sol remonte dans les murs par capillarite. Ce phenomene affecte principalement les maisons anciennes sans barriere anti-humidite. Les signes typiques sont des taches d&apos;humidite en bas des murs, du <Link href="/salpetre/" className="text-[#E8952D] underline hover:no-underline">salpetre</Link> et des enduits qui s&apos;effritent sur les 50 premiers centimetres a 1,5 metre de hauteur.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">3. Les infiltrations d&apos;eau</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Les infiltrations correspondent a la penetration d&apos;eau de pluie a travers les parois du batiment : facade fissuree, joints de fenetre deteriores, toiture defaillante, gouttiere bouchee. L&apos;eau s&apos;infiltre et imprègne les murs, provoquant des taches d&apos;humidite, de la <Link href="/moisissure-mur/" className="text-[#E8952D] underline hover:no-underline">moisissure</Link> et des degradations structurelles.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">4. Les fuites de canalisation</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Une canalisation encastree qui fuit ou un probleme d&apos;etancheite dans une salle de bain peut provoquer une humidite localisee. Ces fuites sont parfois difficiles a detecter car l&apos;eau peut cheminer a l&apos;interieur des murs et apparaitre loin de la source.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">5. L&apos;humidite de construction</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Dans les constructions neuves, le beton, les enduits et les chapes contiennent une grande quantite d&apos;eau qui doit s&apos;evaporer. Le sechage complet d&apos;une construction neuve peut prendre 12 a 24 mois. Si le logement est occupe et chauffe trop tot, l&apos;humidite se concentre dans les pieces et provoque de la condensation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Les consequences de l&apos;humidite sur votre maison et votre sante
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                L&apos;humidite n&apos;est pas qu&apos;un desagrement : c&apos;est un probleme qui s&apos;aggrave avec le temps et qui a des consequences reelles sur votre sante, votre confort et la valeur de votre bien immobilier.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                <strong>Sur la sante :</strong> les moisissures liberent des spores qui provoquent allergies, asthme, infections respiratoires. L&apos;humidite favorise aussi la proliferation des acariens. Les personnes les plus vulnerables sont les enfants, les personnes agees et les personnes asthmatiques.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                <strong>Sur le batiment :</strong> degradation des enduits, pourrissement des boiseries, corrosion des elements metalliques, fragilisation de la structure. Un mur humide perd jusqu&apos;a 50% de sa capacite isolante, ce qui augmente les factures de chauffage de 20 a 30%.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                <strong>Sur la valeur du bien :</strong> un logement presentant des signes d&apos;humidite peut perdre 10 a 20% de sa valeur immobiliere. Les problemes d&apos;humidite doivent etre declares lors de la vente et peuvent bloquer une transaction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Comment traiter l&apos;humidite dans une maison ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-6">
                Le traitement depend de la cause identifiee lors du diagnostic. Voici les principales solutions :
              </p>
              <div className="space-y-4">
                {[
                  { title: "VMC / VMI", desc: "Pour les problemes de condensation. Renouvellement de l'air interieur pour maintenir un taux d'humidite optimal." },
                  { title: "Injection de resine", desc: "Pour les remontees capillaires. Creation d'une barriere etanche dans les murs pour bloquer la montee d'eau." },
                  { title: "Drainage peripherique", desc: "Pour les eaux souterraines. Evacuation de l'eau loin des fondations de la maison." },
                  { title: "Cuvelage", desc: "Pour les sous-sols et caves. Application d'un enduit etanche haute performance." },
                  { title: "Reparation des infiltrations", desc: "Pour les infiltrations d'eau de pluie. Etancheite de la facade, toiture, joints." },
                ].map((s) => (
                  <div key={s.title} className="rounded-xl border border-gray-100 p-5">
                    <h3 className="text-base font-semibold text-[#1A1A1A] mb-1">{s.title}</h3>
                    <p className="text-sm text-[#6B6B6B]">{s.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Decouvrez en detail toutes les solutions sur notre page <Link href="/traitement-humidite/" className="text-[#E8952D] underline hover:no-underline">traitement humidite</Link>.
              </p>
            </div>

            <div className="rounded-2xl bg-beige-100 p-8 sm:p-10 text-center">
              <h2 className="text-2xl text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Retrouvez une maison saine et seche
              </h2>
              <p className="text-[#6B6B6B] mb-6 max-w-lg mx-auto">
                Chaque jour d&apos;attente aggrave les degats. Faites diagnostiquer votre probleme d&apos;humidite gratuitement.
              </p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white hover:scale-[1.03] transition-all">
                Demander mon diagnostic gratuit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Pages associees
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Moisissure sur les murs", href: "/moisissure-mur/" },
                  { title: "Salpetre", href: "/salpetre/" },
                  { title: "Remontee capillaire", href: "/remontee-capillaire/" },
                  { title: "Traitements humidite", href: "/traitement-humidite/" },
                  { title: "Diagnostic humidite", href: "/diagnostic-humidite/" },
                  { title: "Diagnostic gratuit", href: "/diagnostic-gratuit/" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="flex items-center justify-between rounded-xl border border-gray-100 px-5 py-3.5 transition-all hover:border-beige-300 hover:shadow-sm group">
                    <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#E8952D] transition-colors">{link.title}</span>
                    <ChevronRight className="h-4 w-4 text-[#6B6B6B] group-hover:text-[#E8952D]" />
                  </Link>
                ))}
              </div>
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
