import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, ChevronRight } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { breadcrumbJsonLd, faqJsonLd, articleJsonLd, howToJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Odeur d'Humidite et de Moisissure : Causes et Solutions",
  description:
    "Odeur de moisi dans votre maison ? Decouvrez les causes des odeurs d'humidite et de moisissure, comment les localiser et les eliminer definitivement. Diagnostic gratuit.",
};

const faqItems = [
  {
    question: "Pourquoi ma maison sent le moisi ?",
    answer: "Une odeur de moisi dans la maison est causee par des moisissures qui se developpent dans un environnement humide. Ces champignons microscopiques liberent des composes organiques volatils (COV) responsables de l'odeur caracteristique. L'odeur peut venir de moisissures visibles ou cachees (derriere les meubles, dans les cloisons, sous le plancher, dans les gaines de ventilation).",
  },
  {
    question: "L'odeur d'humidite est-elle dangereuse pour la sante ?",
    answer: "Oui, l'odeur d'humidite indique la presence de moisissures qui liberent des spores et des mycotoxines dans l'air. Ces substances provoquent des allergies, de l'asthme, des infections respiratoires et de la fatigue chronique. Les enfants et les personnes sensibles sont particulierement a risque. Si vous sentez une odeur de moisi persistante, faites realiser un diagnostic.",
  },
  {
    question: "Comment trouver la source d'une odeur de moisi ?",
    answer: "Verifiez les endroits typiques : derriere les meubles colles aux murs, dans les angles des pieces, sous les eviers, dans la cave et le vide sanitaire, dans les placards, derriere les rideaux. Si l'odeur est presente sans moisissure visible, elle peut venir de l'interieur des cloisons ou du plancher. Un professionnel avec une camera thermique localise les zones humides cachees.",
  },
  {
    question: "Comment eliminer l'odeur de moisissure dans une maison ?",
    answer: "Pour eliminer durablement l'odeur de moisissure, il faut traiter la cause de l'humidite (ventilation, infiltration, remontee capillaire) et eliminer les moisissures existantes avec un traitement fongicide professionnel. Aerer seul ne fait que masquer temporairement l'odeur. Les desodorisants et bougies parfumees ne reglent rien et peuvent meme masquer un probleme grave.",
  },
  {
    question: "L'odeur de moisi persiste apres nettoyage, que faire ?",
    answer: "Si l'odeur persiste apres nettoyage, c'est que la moisissure est cachee ou que la cause de l'humidite n'est pas traitee. Les moisissures peuvent se developper a l'interieur des cloisons, sous le plancher, dans les gaines de ventilation ou derriere le placoplatre. Un diagnostic professionnel avec camera thermique et hygrometre localise precisement la source.",
  },
  {
    question: "Pourquoi ma cave sent le moisi ?",
    answer: "Les caves sentent le moisi a cause de l'humidite excessive. Les murs en contact avec le sol absorbent l'eau par capillarite et par pression hydrostatique. Le manque de ventilation favorise le developpement de moisissures. Pour traiter le probleme, il faut un cuvelage des murs, une ventilation de la cave et eventuellement un drainage peripherique.",
  },
  {
    question: "L'odeur de moisi peut-elle venir de la VMC ?",
    answer: "Oui, une VMC encrassee ou mal entretenue peut diffuser des odeurs de moisi dans toute la maison. Les gaines et les bouches d'extraction accumulent poussiere et humidite, creant un terrain favorable aux moisissures. Faites entretenir votre VMC regulierement (nettoyage des bouches, verification des gaines). Si le probleme persiste, un diagnostic complet est necessaire.",
  },
  {
    question: "Le charbon actif elimine-t-il les odeurs de moisi ?",
    answer: "Le charbon actif absorbe les mauvaises odeurs temporairement mais ne traite pas la cause. Les moisissures continuent a se developper et l'odeur revient des que le charbon est sature. C'est un palliatif, pas une solution. Seul le traitement de la source d'humidite et l'elimination des moisissures resolvent le probleme durablement.",
  },
];

const howToSteps = [
  { name: "Localiser la source", text: "Un technicien utilise une camera thermique et un hygrometre professionnel pour localiser precisement les zones humides, meme celles cachees dans les cloisons ou sous le plancher." },
  { name: "Identifier la cause de l'humidite", text: "Diagnostic de la cause : condensation, remontee capillaire, infiltration, fuite cachee. Chaque cause necessite un traitement specifique." },
  { name: "Traiter la cause", text: "Mise en place de la solution adaptee : VMC/VMI pour la condensation, injection de resine pour les remontees capillaires, reparation des infiltrations, cuvelage pour les caves." },
  { name: "Eliminer les moisissures", text: "Traitement fongicide professionnel des zones affectees, y compris les moisissures cachees. Application d'un enduit anti-moisissure pour prevenir la reapparition." },
  { name: "Verifier la disparition de l'odeur", text: "Suivi post-traitement pour confirmer que l'odeur a disparu et que le taux d'humidite est revenu a la normale (40-60%)." },
];

export default function OdeurHumiditePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Accueil", url: "https://murexpert.fr" }, { name: "Odeur humidite", url: "https://murexpert.fr/odeur-humidite/" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqItems)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Odeur d'Humidite et de Moisissure : Causes et Solutions", description: "Odeur de moisi dans votre maison ? Causes et solutions professionnelles.", url: "https://murexpert.fr/odeur-humidite/", datePublished: "2026-03-16", dateModified: "2026-03-16" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd("Comment eliminer l'odeur de moisi dans une maison", howToSteps, "P3D")) }} />

      <div className="bg-beige-50 border-b border-beige-200">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A] font-medium">Odeur d&apos;humidit&eacute;</span>
          </nav>
        </div>
      </div>

      <section className="bg-beige-50 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#E8952D]/10 px-4 py-1.5 text-sm font-semibold text-[#E8952D]">Probl&egrave;me d&apos;humidit&eacute;</span>
            <h1 className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12] lg:text-[3.25rem] lg:leading-[1.08]" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
              Odeur d&apos;humidit&eacute; et de moisissure : causes et solutions
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#6B6B6B]">
              Une odeur de moisi dans votre maison est le signe d&apos;un probl&egrave;me d&apos;humidit&eacute; et de moisissures, visibles ou cach&eacute;es. D&eacute;couvrez comment localiser la source et &eacute;liminer l&apos;odeur d&eacute;finitivement.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white transition-all hover:scale-[1.03]">Diagnostic gratuit <ArrowRight className="h-4 w-4" /></Link>
              <a href="tel:+33745881675" className="inline-flex items-center gap-2 text-sm font-medium text-[#E8952D]"><Phone className="h-4 w-4" /> 07 45 88 16 75</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Pourquoi ma maison sent le moisi ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Une odeur de moisi dans la maison est provoqu&eacute;e par des moisissures qui se d&eacute;veloppent dans un environnement humide. Ces champignons microscopiques lib&egrave;rent des compos&eacute;s organiques volatils (COV) responsables de cette odeur caract&eacute;ristique de renferm&eacute;. L&apos;odeur est souvent le premier signe d&apos;un probl&egrave;me d&apos;humidit&eacute;, parfois avant m&ecirc;me que les moisissures ne soient visibles.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Les causes principales d&apos;une odeur de moisi sont une ventilation insuffisante, des infiltrations d&apos;eau, des <Link href="/remontee-capillaire/" className="text-[#E8952D] underline hover:no-underline">remont&eacute;es capillaires</Link>, une <Link href="/cave-humide/" className="text-[#E8952D] underline hover:no-underline">cave humide</Link> ou un d&eacute;g&acirc;t des eaux mal s&eacute;ch&eacute;. L&apos;humidit&eacute; cr&eacute;e un environnement propice aux <Link href="/moisissure-mur/" className="text-[#E8952D] underline hover:no-underline">moisissures</Link> qui s&apos;installent sur les murs, dans les cloisons, sous les planchers ou derri&egrave;re les meubles.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Si vous sentez une odeur de moisi dans certaines pi&egrave;ces seulement, cela aide &agrave; localiser la source. Une odeur g&eacute;n&eacute;ralis&eacute;e dans toute la maison peut indiquer un probl&egrave;me de ventilation ou une source d&apos;humidit&eacute; dans les caves ou les combles qui se diffuse par les gaines.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                L&apos;odeur d&apos;humidit&eacute; est-elle dangereuse pour la sant&eacute; ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Oui, une odeur d&apos;humidit&eacute; persistante est dangereuse car elle signale la pr&eacute;sence de moisissures qui lib&egrave;rent des spores et des mycotoxines dans l&apos;air que vous respirez. L&apos;exposition prolong&eacute;e provoque des allergies, aggrave l&apos;asthme, cause des infections respiratoires et peut entra&icirc;ner une fatigue chronique. Les enfants et les personnes &acirc;g&eacute;es sont les plus vuln&eacute;rables.
              </p>
              <ul className="space-y-3">
                {[
                  "Allergies et rhinite chronique (nez bouche, eternuements)",
                  "Crises d'asthme declenchees ou aggravees",
                  "Maux de tete et fatigue au reveil",
                  "Irritation des yeux, du nez et de la gorge",
                  "Toux chronique, surtout le matin",
                  "Difficultes de concentration",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E8952D]" />
                    <span className="text-[0.9375rem] text-[#6B6B6B]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-beige-100 p-6 sm:p-8">
              <p className="text-lg font-semibold text-[#1A1A1A] mb-2">Odeur de moisi persistante ?</p>
              <p className="text-sm text-[#6B6B6B] mb-4">Un expert MurExpert localise la source avec une cam&eacute;ra thermique et propose le traitement adapt&eacute;. Diagnostic gratuit.</p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-6 py-2.5 text-sm font-semibold text-white hover:scale-[1.03] transition-all">Demander un diagnostic <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Comment trouver la source de l&apos;odeur ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Localiser la source de l&apos;odeur de moisi est la premi&egrave;re &eacute;tape. V&eacute;rifiez syst&eacute;matiquement les endroits suivants :
              </p>
              <ul className="space-y-3 mb-4">
                {[
                  "Derriere les meubles colles aux murs exterieurs",
                  "Dans les angles entre mur exterieur et plafond",
                  "Sous les eviers et autour de la plomberie",
                  "Dans la cave, le vide sanitaire et les combles",
                  "Dans les placards et penderies contre les murs exterieurs",
                  "Sous le papier peint ou derriere les plinthes",
                  "Dans les gaines de ventilation et autour de la VMC",
                  "Sous le parquet ou la moquette",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E8952D]" />
                    <span className="text-[0.9375rem] text-[#6B6B6B]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Si vous ne trouvez pas la source visuellement, un professionnel &eacute;quip&eacute; d&apos;une cam&eacute;ra thermique et d&apos;un hygrom&egrave;tre professionnel peut d&eacute;tecter les zones humides cach&eacute;es &agrave; l&apos;int&eacute;rieur des murs, sous les planchers et dans les espaces inaccessibles.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Comment &eacute;liminer l&apos;odeur d&apos;humidit&eacute; ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Pour &eacute;liminer durablement l&apos;odeur d&apos;humidit&eacute;, il faut traiter la cause et non masquer le symptôme. Les d&eacute;sodorisants, bougies parfum&eacute;es et charbon actif ne font que masquer temporairement l&apos;odeur sans r&eacute;soudre le probl&egrave;me. Voici la marche &agrave; suivre :
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">1. Identifier et traiter la cause de l&apos;humidit&eacute;</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Un diagnostic professionnel identifie la source d&apos;humidit&eacute;. Le traitement adapt&eacute; est mis en place : VMC/VMI pour la condensation, injection de r&eacute;sine pour les remont&eacute;es capillaires, r&eacute;paration des infiltrations, cuvelage pour les caves.
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">2. &Eacute;liminer les moisissures</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Un traitement fongicide professionnel &eacute;limine les moisissures en profondeur, y compris celles cach&eacute;es dans les cloisons ou sous les rev&ecirc;tements. Les mat&eacute;riaux trop contamin&eacute;s sont remplac&eacute;s.
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">3. Assurer une bonne ventilation</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Une ventilation correcte (VMC ou VMI) renouvelle l&apos;air et maintient un taux d&apos;humidit&eacute; entre 40% et 60%. A&eacute;rez votre logement 10 minutes par jour, ne bloquez pas les bouches de ventilation et faites entretenir votre VMC r&eacute;guli&egrave;rement.
              </p>
            </div>

            <div className="rounded-2xl bg-beige-100 p-8 sm:p-10 text-center">
              <h2 className="text-2xl text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Retrouvez un air sain chez vous
              </h2>
              <p className="text-[#6B6B6B] mb-6 max-w-lg mx-auto">L&apos;odeur de moisi est un signal d&apos;alarme. Diagnostic gratuit, sans engagement.</p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white hover:scale-[1.03] transition-all">
                Demander mon diagnostic gratuit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>Pages associ&eacute;es</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Moisissure sur les murs", href: "/moisissure-mur/" },
                  { title: "Moisissure noire", href: "/moisissure-noire/" },
                  { title: "Cave humide", href: "/cave-humide/" },
                  { title: "Humidite maison", href: "/humidite-maison/" },
                  { title: "Traitement humidite", href: "/traitement-humidite/" },
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
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-8" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>Questions fr&eacute;quentes</h2>
              <Accordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
