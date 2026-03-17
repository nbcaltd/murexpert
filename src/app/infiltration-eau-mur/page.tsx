import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, AlertTriangle, ChevronRight } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { breadcrumbJsonLd, faqJsonLd, articleJsonLd, howToJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Infiltration Eau Mur : Causes, Detection et Traitement",
  description:
    "Infiltration d'eau dans vos murs ? Decouvrez les causes (facade, toiture, joints), les methodes de detection et les traitements professionnels pour stopper les infiltrations. Diagnostic gratuit.",
};

const faqItems = [
  {
    question: "Comment savoir si j'ai une infiltration d'eau dans un mur ?",
    answer: "Les signes d'une infiltration d'eau sont : des taches d'humidite qui apparaissent ou s'aggravent apres la pluie, de la peinture qui cloque ou s'ecaille, du papier peint qui se decolle, de la moisissure localisee, des traces de ruissellement sur le mur. Contrairement aux remontees capillaires (qui partent du bas), les infiltrations peuvent apparaitre a n'importe quelle hauteur du mur.",
  },
  {
    question: "Quelles sont les causes d'une infiltration d'eau dans un mur ?",
    answer: "Les causes principales sont : une facade fissuree ou poreuse, des joints de fenetre deteriores, une toiture defaillante (tuiles cassees, solin decolle), des gouttieres bouchees ou defectueuses, un defaut d'etancheite autour des menuiseries, un mur expose a la pluie battante sans protection. Les infiltrations sont souvent multifactorielles.",
  },
  {
    question: "Comment traiter une infiltration d'eau dans un mur ?",
    answer: "Le traitement depend de la cause : hydrofugation de facade pour les murs poreux, reparation des fissures, remplacement des joints de fenetre, reparation de la toiture, curage et reparation des gouttieres. Un diagnostic professionnel est indispensable pour identifier precisement le point d'entree de l'eau, qui est souvent eloigne de la zone humide visible.",
  },
  {
    question: "Une infiltration d'eau peut-elle venir de la toiture ?",
    answer: "Oui, c'est l'une des causes les plus frequentes. L'eau qui s'infiltre par la toiture (tuile cassee, solin decolle, gouttiere debordante) peut parcourir un long chemin le long de la charpente et des murs avant d'apparaitre sous forme de tache. C'est pourquoi la tache sur le mur peut etre tres eloignee du point d'entree reel.",
  },
  {
    question: "Combien coute la reparation d'une infiltration d'eau ?",
    answer: "Le cout depend de la cause et de l'ampleur des degats. Une hydrofugation de facade coute entre 15 et 30 EUR par m2. La reparation de joints de fenetre entre 50 et 200 EUR par fenetre. La reparation d'une toiture entre 500 et 5 000 EUR selon les travaux. Le traitement des degats interieurs (sechage, fongicide, enduit) est en supplement.",
  },
  {
    question: "L'infiltration d'eau peut-elle etre prise en charge par l'assurance ?",
    answer: "Les infiltrations dues a un evenement soudain (tempete, grele, canalisation eclatee) sont generalement couvertes par l'assurance habitation au titre du degat des eaux. Les infiltrations dues au vieillissement normal du batiment (facade poreuse, joints uses) ne sont pas couvertes. Contactez votre assureur pour connaitre vos garanties.",
  },
  {
    question: "Comment differencier une infiltration d'une remontee capillaire ?",
    answer: "L'infiltration d'eau est localisee et s'aggrave apres la pluie. Elle peut apparaitre a n'importe quelle hauteur du mur. La remontee capillaire est repartie uniformement en bas des murs (jusqu'a 1-1,5 m), permanente independamment de la meteo, et s'accompagne souvent de salpetre. Un diagnostic professionnel confirme l'origine de l'humidite.",
  },
  {
    question: "Peut-on peindre un mur avec une infiltration ?",
    answer: "Non, peindre un mur avec une infiltration est inutile. La peinture cloquera et s'ecaillera a nouveau. Il faut d'abord reparer l'infiltration, laisser secher le mur completement (plusieurs semaines), puis repeindre avec une peinture adaptee. Un professionnel peut accelerer le sechage avec des equipements adaptes.",
  },
];

const howToSteps = [
  { name: "Detection de l'infiltration", text: "Un technicien utilise une camera thermique pour visualiser les zones humides et identifier le parcours de l'eau dans le mur. Un hygrometre mesure le taux d'humidite a differents endroits pour delimiter la zone affectee." },
  { name: "Identification du point d'entree", text: "Le professionnel inspecte la facade, la toiture, les fenetres et les gouttieres pour localiser le point d'entree exact de l'eau. Des tests d'arrosage peuvent etre realises pour confirmer l'origine." },
  { name: "Reparation de la source", text: "Selon la cause : hydrofugation de la facade, reparation des fissures, remplacement des joints, reparation de la toiture, curage des gouttieres. La source doit etre completement etanchee." },
  { name: "Sechage du mur", text: "Le mur est laisse a secher ou un sechage accelere est mis en place. Le taux d'humidite est suivi regulierement jusqu'a atteindre un niveau normal." },
  { name: "Remise en etat interieure", text: "Traitement fongicide si moisissure, application d'un enduit de renovation et remise en peinture. Garantie decennale sur les travaux." },
];

export default function InfiltrationEauMurPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Accueil", url: "https://murexpert.fr" }, { name: "Infiltration eau mur", url: "https://murexpert.fr/infiltration-eau-mur/" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqItems)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Infiltration Eau Mur : Causes, Detection et Traitement", description: "Infiltration d'eau dans vos murs ? Causes, detection et traitements professionnels.", url: "https://murexpert.fr/infiltration-eau-mur/", datePublished: "2026-03-16", dateModified: "2026-03-16" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd("Comment traiter une infiltration d'eau dans un mur", howToSteps, "P7D")) }} />

      <div className="bg-beige-50 border-b border-beige-200">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A] font-medium">Infiltration eau mur</span>
          </nav>
        </div>
      </div>

      <section className="bg-beige-50 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#E8952D]/10 px-4 py-1.5 text-sm font-semibold text-[#E8952D]">Probl&egrave;me d&apos;humidit&eacute;</span>
            <h1 className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12] lg:text-[3.25rem] lg:leading-[1.08]" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
              Infiltration d&apos;eau dans les murs : causes, d&eacute;tection et traitement
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#6B6B6B]">
              Les infiltrations d&apos;eau provoquent des d&eacute;g&acirc;ts importants : moisissures, d&eacute;gradation des murs, perte d&apos;isolation. Identification pr&eacute;cise de la source et traitement professionnel garanti.
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
                Comment savoir si j&apos;ai une infiltration d&apos;eau ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Une infiltration d&apos;eau dans un mur se manifeste par des taches d&apos;humidit&eacute; qui apparaissent ou s&apos;aggravent apr&egrave;s la pluie, de la peinture qui cloque ou s&apos;&eacute;caille, du papier peint qui se d&eacute;colle, de la moisissure localis&eacute;e et des traces de ruissellement. Contrairement aux remont&eacute;es capillaires, les infiltrations peuvent appara&icirc;tre &agrave; n&apos;importe quelle hauteur du mur et sont souvent localis&eacute;es.
              </p>
              <ul className="space-y-3">
                {[
                  "Taches d'humidite qui apparaissent apres la pluie",
                  "Peinture qui cloque, s'ecaille ou jaunit",
                  "Papier peint qui se decolle dans une zone precise",
                  "Moisissure localisee sur un mur, souvent pres d'une fenetre",
                  "Traces de ruissellement ou coulees sur le mur",
                  "Aureole d'humidite au plafond (infiltration par la toiture)",
                  "Enduit qui gonfle ou se decolle",
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
                Les causes d&apos;une infiltration d&apos;eau dans un mur
              </h2>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">Fa&ccedil;ade poreuse ou fissur&eacute;e</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                L&apos;enduit de fa&ccedil;ade se d&eacute;t&eacute;riore avec le temps : microfissures, fissures, enduit poreux qui n&apos;assure plus son r&ocirc;le de protection. L&apos;eau de pluie, pouss&eacute;e par le vent, p&eacute;n&egrave;tre dans ces d&eacute;fauts et impr&egrave;gne le mur. Ce probl&egrave;me est accentu&eacute; sur les fa&ccedil;ades expos&eacute;es aux vents dominants (ouest et sud-ouest en France).
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">Toiture d&eacute;faillante</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Les infiltrations par la toiture sont fr&eacute;quentes : tuiles cass&eacute;es ou d&eacute;plac&eacute;es, solins d&eacute;coll&eacute;s, noues encrass&eacute;es, fen&ecirc;tres de toit mal &eacute;tanch&eacute;es. L&apos;eau peut parcourir un long trajet le long de la charpente avant d&apos;appara&icirc;tre sous forme de tache sur un mur ou un plafond, loin du point d&apos;entr&eacute;e.
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">Menuiseries d&eacute;fectueuses</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Des joints de fen&ecirc;tre d&eacute;t&eacute;rior&eacute;s, un mauvais calfeutrement entre la menuiserie et le mur, ou un appui de fen&ecirc;tre mal con&ccedil;u (sans rejet d&apos;eau) permettent &agrave; l&apos;eau de pluie de s&apos;infiltrer. Les infiltrations autour des fen&ecirc;tres se traduisent par des moisissures dans les angles et sur les tableaux de fen&ecirc;tre.
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">Goutti&egrave;res bouch&eacute;es</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Des goutti&egrave;res bouch&eacute;es ou endommag&eacute;es provoquent un d&eacute;bordement de l&apos;eau de pluie qui ruisselle le long de la fa&ccedil;ade au lieu d&apos;&ecirc;tre &eacute;vacu&eacute;e. L&apos;eau p&eacute;n&egrave;tre dans les fissures et impr&egrave;gne le mur. Un entretien r&eacute;gulier des goutti&egrave;res est essentiel.
              </p>
            </div>

            <div className="rounded-2xl bg-beige-100 p-6 sm:p-8">
              <p className="text-lg font-semibold text-[#1A1A1A] mb-2">Infiltration d&apos;eau dans vos murs ?</p>
              <p className="text-sm text-[#6B6B6B] mb-4">Un expert MurExpert localise pr&eacute;cis&eacute;ment le point d&apos;entr&eacute;e de l&apos;eau et r&eacute;pare l&apos;infiltration. Diagnostic gratuit.</p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-6 py-2.5 text-sm font-semibold text-white hover:scale-[1.03] transition-all">Demander un diagnostic <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Comment traiter une infiltration d&apos;eau ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-6">
                Le traitement d&apos;une infiltration d&eacute;pend de sa cause. Voici les solutions les plus courantes :
              </p>
              <div className="space-y-4">
                {[
                  { title: "Hydrofugation de facade", desc: "Application d'un produit hydrofuge qui impermeabilise la facade tout en la laissant respirer. Protege contre la pluie battante. 15-30 EUR/m2." },
                  { title: "Reparation des fissures", desc: "Rebouchage des fissures avec un mortier adapte, suivi d'une hydrofugation. Les fissures structurelles necessitent un traitement specifique." },
                  { title: "Remplacement des joints de fenetre", desc: "Retrait des joints uses et application de nouveaux joints d'etancheite autour des menuiseries. 50-200 EUR par fenetre." },
                  { title: "Reparation de toiture", desc: "Remplacement des tuiles cassees, refixation des solins, nettoyage des noues. Intervention par un couvreur professionnel." },
                  { title: "Entretien des gouttieres", desc: "Curage, reparation des fuites, verification des descentes. A realiser au moins une fois par an." },
                ].map((s) => (
                  <div key={s.title} className="rounded-xl border border-gray-100 p-5">
                    <h3 className="text-base font-semibold text-[#1A1A1A] mb-1">{s.title}</h3>
                    <p className="text-sm text-[#6B6B6B]">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Prix du traitement des infiltrations
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
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Hydrofugation fa&ccedil;ade</td><td className="px-5 py-3 text-[#6B6B6B]">15 - 30 EUR/m&sup2;</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">R&eacute;paration fissures</td><td className="px-5 py-3 text-[#6B6B6B]">20 - 80 EUR/ml</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Joints de fen&ecirc;tre</td><td className="px-5 py-3 text-[#6B6B6B]">50 - 200 EUR/fen&ecirc;tre</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">R&eacute;paration toiture</td><td className="px-5 py-3 text-[#6B6B6B]">500 - 5 000 EUR</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-2xl bg-beige-100 p-8 sm:p-10 text-center">
              <h2 className="text-2xl text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Stoppez les infiltrations d&eacute;finitivement
              </h2>
              <p className="text-[#6B6B6B] mb-6 max-w-lg mx-auto">Chaque pluie aggrave les d&eacute;g&acirc;ts. Diagnostic gratuit, sans engagement.</p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white hover:scale-[1.03] transition-all">Demander mon diagnostic gratuit <ArrowRight className="h-4 w-4" /></Link>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>Pages associ&eacute;es</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Moisissure sur les murs", href: "/moisissure-mur/" },
                  { title: "Humidite maison", href: "/humidite-maison/" },
                  { title: "Moisissure plafond", href: "/moisissure-plafond/" },
                  { title: "Traitement humidite", href: "/traitement-humidite/" },
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
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-8" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>Questions fr&eacute;quentes</h2>
              <Accordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
