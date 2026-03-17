import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, AlertTriangle, ChevronRight } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { breadcrumbJsonLd, faqJsonLd, articleJsonLd, howToJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Moisissure Plafond : Causes, Taches Jaunes et Traitement",
  description:
    "Moisissure au plafond ou taches jaunes ? Decouvrez les causes (infiltration, condensation, fuite), comment les traiter et les eliminer definitivement. Diagnostic gratuit.",
};

const faqItems = [
  {
    question: "Pourquoi ai-je de la moisissure au plafond ?",
    answer: "La moisissure au plafond est principalement causee par la condensation (air chaud et humide qui monte et se condense sur le plafond froid), une infiltration par la toiture (tuile cassee, solin decolle), une fuite de canalisation a l'etage superieur, ou un pont thermique au niveau du plafond. Un diagnostic professionnel identifie la cause exacte.",
  },
  {
    question: "Les taches jaunes au plafond sont-elles de la moisissure ?",
    answer: "Les taches jaunes au plafond ne sont pas toujours de la moisissure. Elles sont souvent causees par un degat des eaux (fuite a l'etage, infiltration de toiture) : l'eau qui traverse le plafond laisse des traces jaunes ou brunes en sechant. Cependant, ces zones humides peuvent devenir un terrain fertile pour la moisissure. Un professionnel determine la nature et la cause exactes.",
  },
  {
    question: "Comment enlever la moisissure au plafond ?",
    answer: "Pour enlever la moisissure au plafond durablement, il faut d'abord traiter la cause de l'humidite. Ensuite, un traitement fongicide professionnel elimine la moisissure en profondeur. Le plafond est ensuite enduit et repeint avec une peinture anti-moisissure. Sans traiter la cause, la moisissure revient systematiquement en quelques semaines.",
  },
  {
    question: "La moisissure au plafond est-elle dangereuse ?",
    answer: "Oui, la moisissure au plafond libere des spores qui tombent et flottent dans l'air de la piece. Ces spores provoquent des allergies, de l'asthme et des infections respiratoires. La moisissure au plafond est particulierement problematique dans les chambres car les spores se deposent sur la literie et sont inhalees pendant le sommeil.",
  },
  {
    question: "Comment traiter une tache d'humidite au plafond ?",
    answer: "Une tache d'humidite au plafond doit etre traitee en identifiant d'abord la source de l'eau : infiltration de toiture, fuite de canalisation, condensation. La source est reparee, le plafond est seche, la moisissure eventuelle est traitee avec un fongicide, puis le plafond est enduit et repeint. Le diagnostic est gratuit chez MurExpert.",
  },
  {
    question: "La condensation peut-elle causer de la moisissure au plafond ?",
    answer: "Oui, la condensation est la cause la plus frequente de moisissure au plafond. L'air chaud et humide (cuisine, salle de bain, respiration) monte naturellement et se condense sur le plafond, plus froid. Les angles entre mur exterieur et plafond sont les zones les plus touchees (ponts thermiques). La solution est l'amelioration de la ventilation (VMC/VMI).",
  },
  {
    question: "Comment differencier une infiltration d'une condensation au plafond ?",
    answer: "Une infiltration de toiture provoque des taches localisees qui s'aggravent apres la pluie, souvent avec un halo brun ou jaune. La condensation provoque des taches de moisissure diffuses, surtout dans les angles, independamment de la meteo. Un professionnel avec une camera thermique distingue facilement les deux en detectant les zones froides (condensation) ou les traces d'eau (infiltration).",
  },
  {
    question: "Combien coute la reparation d'un plafond avec moisissure ?",
    answer: "Le cout depend de la cause. Le traitement fongicide et la remise en peinture coutent 15-30 EUR/m2. Si la cause est la condensation, l'installation d'une VMI coute 2 500-4 000 EUR. Si c'est une infiltration de toiture, la reparation coute 500-5 000 EUR. Le diagnostic est gratuit chez MurExpert.",
  },
];

const howToSteps = [
  { name: "Diagnostic de la cause", text: "Un technicien utilise une camera thermique pour identifier la source de l'humidite au plafond : condensation (pont thermique), infiltration de toiture ou fuite de canalisation." },
  { name: "Reparation de la source", text: "Selon la cause : installation d'une VMC/VMI pour la condensation, reparation de la toiture pour les infiltrations, reparation de la canalisation pour les fuites." },
  { name: "Sechage du plafond", text: "Le plafond est seche naturellement ou avec des equipements professionnels. Le placoplatre trop endommage est remplace." },
  { name: "Traitement fongicide", text: "Application d'un fongicide professionnel en profondeur pour eliminer la moisissure et son mycelium. Les spores en surface sont egalement neutralisees." },
  { name: "Remise en etat", text: "Application d'un enduit de renovation, puis d'une peinture anti-moisissure adaptee aux plafonds. Garantie decennale sur les travaux." },
];

export default function MoisissurePlafondPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Accueil", url: "https://murexpert.fr" }, { name: "Moisissure mur", url: "https://murexpert.fr/moisissure-mur/" }, { name: "Moisissure plafond", url: "https://murexpert.fr/moisissure-plafond/" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqItems)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Moisissure Plafond : Causes, Taches Jaunes et Traitement", description: "Moisissure au plafond ou taches jaunes ? Causes et traitements professionnels.", url: "https://murexpert.fr/moisissure-plafond/", datePublished: "2026-03-16", dateModified: "2026-03-16" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd("Comment traiter la moisissure au plafond", howToSteps, "P5D")) }} />

      <div className="bg-beige-50 border-b border-beige-200">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/moisissure-mur/" className="hover:text-[#1A1A1A] transition-colors">Moisissure mur</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A] font-medium">Moisissure plafond</span>
          </nav>
        </div>
      </div>

      <section className="bg-beige-50 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#E8952D]/10 px-4 py-1.5 text-sm font-semibold text-[#E8952D]">Probl&egrave;me d&apos;humidit&eacute;</span>
            <h1 className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12] lg:text-[3.25rem] lg:leading-[1.08]" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
              Moisissure au plafond : causes, taches jaunes et solutions
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#6B6B6B]">
              Moisissure au plafond, taches jaunes ou aur&eacute;oles d&apos;humidit&eacute; ? Ces probl&egrave;mes r&eacute;v&egrave;lent une infiltration, un d&eacute;faut de ventilation ou une fuite. D&eacute;couvrez les causes et les solutions professionnelles.
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
                Pourquoi ai-je de la moisissure au plafond ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La moisissure au plafond est caus&eacute;e par un exc&egrave;s d&apos;humidit&eacute; qui peut provenir de trois sources principales : la condensation, les infiltrations de toiture et les fuites de canalisation. Chaque cause a des caract&eacute;ristiques distinctes et n&eacute;cessite un traitement sp&eacute;cifique. Un diagnostic professionnel permet de les diff&eacute;rencier avec certitude.
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">La condensation (cause n&deg;1)</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                L&apos;air chaud et humide monte naturellement vers le plafond. S&apos;il rencontre une surface froide (plafond mal isol&eacute;, pont thermique dans l&apos;angle entre mur ext&eacute;rieur et plafond), la vapeur d&apos;eau se condense. Cette humidit&eacute; persistante favorise le d&eacute;veloppement de la moisissure, qui appara&icirc;t sous forme de taches noires, principalement dans les angles et les zones les moins ventil&eacute;es.
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">Infiltration par la toiture</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Une tuile cass&eacute;e, un solin d&eacute;coll&eacute;, une goutti&egrave;re d&eacute;bordante ou un d&eacute;faut d&apos;&eacute;tanch&eacute;it&eacute; de la toiture permet &agrave; l&apos;eau de pluie de s&apos;infiltrer. L&apos;eau traverse la charpente et le faux plafond, cr&eacute;ant des taches jaunes ou brunes, des aur&eacute;oles d&apos;humidit&eacute; et, &agrave; terme, de la moisissure. Le point d&apos;entr&eacute;e de l&apos;eau peut &ecirc;tre tr&egrave;s &eacute;loign&eacute; de la tache visible.
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">Fuite de canalisation</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Si vous habitez dans un appartement ou si l&apos;&eacute;tage sup&eacute;rieur comporte une salle de bain ou une cuisine, une fuite de canalisation peut provoquer des taches d&apos;humidit&eacute; et de la moisissure au plafond. Les fuites lentes sont les plus insidieuses car elles passent inaper&ccedil;ues longtemps.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Les taches jaunes au plafond sont-elles de la moisissure ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Les taches jaunes au plafond ne sont pas forc&eacute;ment de la moisissure. Elles sont le plus souvent caus&eacute;es par un d&eacute;g&acirc;t des eaux : l&apos;eau qui traverse le plafond (placopl&acirc;tre) dissout les sels et les composants du mat&eacute;riau, laissant des traces jaun&acirc;tres ou brunes en s&eacute;chant. Cependant, ces zones humides cr&eacute;ent un environnement favorable au d&eacute;veloppement de moisissures si le probl&egrave;me n&apos;est pas trait&eacute; rapidement.
              </p>
              <div className="rounded-xl bg-amber-50 border border-amber-200 p-5 mb-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800">
                    <strong>Attention :</strong> une tache jaune au plafond qui grandit ou qui revient apr&egrave;s la pluie indique une infiltration active. Ne repeignez pas par-dessus : identifiez et r&eacute;parez d&apos;abord la source.
                  </p>
                </div>
              </div>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Pour diff&eacute;rencier une tache d&apos;eau s&eacute;ch&eacute;e de la moisissure : les taches d&apos;eau sont plates, lisses et de couleur jaune-brun uniforme. La moisissure forme des taches noires, vertes ou grises, avec un aspect velout&eacute; ou poudreux. Passez le doigt (avec un gant) : si &ccedil;a laisse une trace sombre, c&apos;est probablement de la moisissure.
              </p>
            </div>

            <div className="rounded-2xl bg-beige-100 p-6 sm:p-8">
              <p className="text-lg font-semibold text-[#1A1A1A] mb-2">Taches au plafond ?</p>
              <p className="text-sm text-[#6B6B6B] mb-4">Un expert MurExpert identifie la cause (condensation, infiltration, fuite) et propose le traitement adapt&eacute;. Diagnostic gratuit.</p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-6 py-2.5 text-sm font-semibold text-white hover:scale-[1.03] transition-all">Demander un diagnostic <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Comment traiter la moisissure au plafond ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Le traitement de la moisissure au plafond suit le m&ecirc;me principe que pour les murs : identifier et traiter la cause, puis &eacute;liminer la moisissure. Voici les &eacute;tapes :
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">1. Identifier la cause</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Un technicien utilise une cam&eacute;ra thermique pour visualiser les ponts thermiques (condensation) et les traces d&apos;eau (infiltration). Un hygrom&egrave;tre mesure l&apos;humidit&eacute; dans le plafond. Si la cause est une fuite, la source est localis&eacute;e.
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">2. Traiter la cause</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Pour la condensation : installation d&apos;une <Link href="/traitement-humidite/#vmc-vmi" className="text-[#E8952D] underline hover:no-underline">VMC ou VMI</Link>, am&eacute;lioration de l&apos;isolation du plafond. Pour les <Link href="/infiltration-eau-mur/" className="text-[#E8952D] underline hover:no-underline">infiltrations</Link> : r&eacute;paration de la toiture. Pour les fuites : r&eacute;paration de la canalisation.
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">3. Traiter le plafond</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Le placopl&acirc;tre trop endommag&eacute; est remplac&eacute;. La moisissure est &eacute;limin&eacute;e avec un fongicide professionnel. Un enduit de r&eacute;novation et une peinture anti-moisissure sont appliqu&eacute;s. L&apos;ensemble est couvert par la garantie d&eacute;cennale.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                La moisissure au plafond est-elle dangereuse ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Oui, la moisissure au plafond est dangereuse pour la sant&eacute;. Les spores de moisissure tombent par gravit&eacute; et flottent dans l&apos;air de la pi&egrave;ce, o&ugrave; elles sont inhal&eacute;es en permanence. Dans une chambre, les spores se d&eacute;posent sur la literie et sont inhal&eacute;es pendant le sommeil. Les risques sont les m&ecirc;mes que pour toute moisissure : allergies, asthme, infections respiratoires, fatigue.
              </p>
              <ul className="space-y-3">
                {[
                  "Allergies et rhinite chronique",
                  "Crises d'asthme, surtout chez les enfants",
                  "Irritation des yeux, du nez et de la gorge",
                  "Maux de tete et fatigue au reveil (chambre)",
                  "Toux chronique",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E8952D]" />
                    <span className="text-[0.9375rem] text-[#6B6B6B]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Prix du traitement de la moisissure au plafond
              </h2>
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead className="bg-beige-50">
                    <tr>
                      <th className="px-5 py-3 text-left font-semibold text-[#1A1A1A]">Prestation</th>
                      <th className="px-5 py-3 text-left font-semibold text-[#1A1A1A]">Prix indicatif</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Diagnostic</td><td className="px-5 py-3 text-[#E8952D] font-semibold">Gratuit</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Traitement fongicide + repeinture</td><td className="px-5 py-3 text-[#6B6B6B]">15 - 30 EUR/m&sup2;</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Remplacement placopl&acirc;tre</td><td className="px-5 py-3 text-[#6B6B6B]">30 - 60 EUR/m&sup2;</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Installation VMC / VMI</td><td className="px-5 py-3 text-[#6B6B6B]">2 500 - 4 000 EUR</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">R&eacute;paration toiture</td><td className="px-5 py-3 text-[#6B6B6B]">500 - 5 000 EUR</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-2xl bg-beige-100 p-8 sm:p-10 text-center">
              <h2 className="text-2xl text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Retrouvez un plafond propre et sain
              </h2>
              <p className="text-[#6B6B6B] mb-6 max-w-lg mx-auto">Diagnostic gratuit, sans engagement. Intervention sous 48h.</p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white hover:scale-[1.03] transition-all">Demander mon diagnostic gratuit <ArrowRight className="h-4 w-4" /></Link>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>Pages associ&eacute;es</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Moisissure sur les murs", href: "/moisissure-mur/" },
                  { title: "Moisissure chambre", href: "/moisissure-chambre/" },
                  { title: "Moisissure noire", href: "/moisissure-noire/" },
                  { title: "Infiltration eau mur", href: "/infiltration-eau-mur/" },
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
