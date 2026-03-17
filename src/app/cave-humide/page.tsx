import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, AlertTriangle, ChevronRight } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { breadcrumbJsonLd, faqJsonLd, articleJsonLd, howToJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Cave Humide : Causes, Solutions et Traitement Professionnel",
  description:
    "Cave humide ? Decouvrez les causes de l'humidite en cave (infiltrations, remontees capillaires, condensation), les traitements professionnels (cuvelage, drainage, ventilation) et les prix. Diagnostic gratuit.",
};

const faqItems = [
  {
    question: "Pourquoi ma cave est-elle humide ?",
    answer: "Une cave est humide pour trois raisons principales : les infiltrations d'eau a travers les murs enterres (pression hydrostatique), les remontees capillaires depuis le sol et la condensation due a un manque de ventilation. Les caves des maisons anciennes sans membrane d'etancheite ni drainage sont les plus touchees. Un diagnostic professionnel identifie la cause exacte.",
  },
  {
    question: "Comment assecher une cave humide ?",
    answer: "Pour assecher une cave humide, il faut traiter la cause : cuvelage des murs (enduit etanche resistant a la pression hydrostatique), injection de resine contre les remontees capillaires, drainage peripherique pour evacuer les eaux souterraines, et ventilation pour eliminer l'humidite ambiante. Le choix depend de la cause identifiee lors du diagnostic.",
  },
  {
    question: "Combien coute le traitement d'une cave humide ?",
    answer: "Le cuvelage coute entre 150 et 300 EUR par m2. L'injection de resine coute 80-150 EUR par metre lineaire. Le drainage peripherique coute 100-200 EUR par metre lineaire. La ventilation de cave coute entre 500 et 2 000 EUR. Pour une cave de 20 m2, le budget total se situe entre 3 000 et 10 000 EUR selon les travaux necessaires. Le diagnostic est gratuit chez MurExpert.",
  },
  {
    question: "Peut-on amenager une cave humide ?",
    answer: "Oui, mais uniquement apres avoir traite le probleme d'humidite. Amenager une cave humide sans traitement prealable est une erreur couteuse : les materiaux poseront se deterioreront rapidement. Apres cuvelage et ventilation, votre cave peut devenir un espace habitable sec et sain (bureau, chambre, salle de jeux).",
  },
  {
    question: "Le cuvelage est-il la meilleure solution pour une cave humide ?",
    answer: "Le cuvelage est la solution de reference pour les caves enterrees soumises a la pression hydrostatique. Il consiste a appliquer un enduit etanche haute performance sur les murs et parfois le sol de la cave. Il resiste a la pression de l'eau souterraine et empeche toute penetration d'humidite. Le cuvelage est garanti 10 ans (garantie decennale).",
  },
  {
    question: "La ventilation suffit-elle pour assecher une cave ?",
    answer: "La ventilation seule ne suffit generalement pas pour une cave humide. Elle aide a evacuer l'humidite ambiante et la condensation, mais ne traite pas les infiltrations ni les remontees capillaires. La ventilation est un complement indispensable au cuvelage ou au drainage, pas un traitement autonome.",
  },
  {
    question: "L'humidite de la cave peut-elle affecter les etages superieurs ?",
    answer: "Oui, l'humidite d'une cave non traitee remonte dans les murs par capillarite et peut affecter le rez-de-chaussee : moisissures, salpetre, odeurs de moisi, degradation des revetements. De plus, l'air humide de la cave peut migrer vers les etages par les escaliers et les gaines techniques, augmentant l'humidite dans toute la maison.",
  },
  {
    question: "Comment empecher l'eau de rentrer dans la cave ?",
    answer: "Les solutions pour empecher l'eau de rentrer dans la cave sont : le drainage peripherique (evacuation des eaux loin des fondations), le cuvelage interieur (barriere etanche sur les murs), l'etancheite exterieure (membrane sur la face externe des murs, si accessible), et la gestion des eaux pluviales (gouttieres, pente du terrain). Un professionnel determine la combinaison adaptee.",
  },
];

const howToSteps = [
  { name: "Diagnostic complet de la cave", text: "Un technicien mesure le taux d'humidite dans les murs et l'air, identifie l'origine de l'eau (remontees capillaires, infiltrations, condensation) et evalue l'etendue des degats." },
  { name: "Traitement des infiltrations", text: "Cuvelage des murs interieurs et/ou drainage peripherique pour empecher l'eau de penetrer dans la cave. Le choix depend de la configuration et de l'accessibilite des fondations." },
  { name: "Traitement des remontees capillaires", text: "Injection de resine hydrophobe en pied de mur pour creer une barriere etanche contre les remontees capillaires." },
  { name: "Mise en place de la ventilation", text: "Installation d'une ventilation mecanique adaptee a la cave pour evacuer l'humidite residuelle et prevenir la condensation." },
  { name: "Remise en etat et amenagement", text: "Apres sechage complet des murs, application d'un enduit adapte et remise en etat. La cave peut ensuite etre amenagee si souhaite." },
];

export default function CaveHumidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Accueil", url: "https://murexpert.fr" }, { name: "Cave humide", url: "https://murexpert.fr/cave-humide/" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqItems)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Cave Humide : Causes, Solutions et Traitement", description: "Cave humide ? Causes et traitements professionnels : cuvelage, drainage, ventilation.", url: "https://murexpert.fr/cave-humide/", datePublished: "2026-03-16", dateModified: "2026-03-16" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd("Comment traiter une cave humide", howToSteps, "P10D")) }} />

      <div className="bg-beige-50 border-b border-beige-200">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A] font-medium">Cave humide</span>
          </nav>
        </div>
      </div>

      <section className="bg-beige-50 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#E8952D]/10 px-4 py-1.5 text-sm font-semibold text-[#E8952D]">Probl&egrave;me d&apos;humidit&eacute;</span>
            <h1 className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12] lg:text-[3.25rem] lg:leading-[1.08]" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
              Cave humide : causes, solutions et traitements professionnels
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#6B6B6B]">
              Une cave humide d&eacute;t&eacute;riore les fondations, provoque des moisissures et affecte toute la maison. D&eacute;couvrez les solutions professionnelles pour retrouver une cave s&egrave;che et saine.
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
                Pourquoi ma cave est-elle humide ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Une cave humide est un probl&egrave;me fr&eacute;quent qui touche une grande majorit&eacute; des maisons anciennes en France. Les caves, de par leur position enterr&eacute;e ou semi-enterr&eacute;e, sont en contact direct avec le sol et l&apos;eau souterraine. Trois m&eacute;canismes principaux expliquent l&apos;humidit&eacute; en cave :
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">Infiltrations lat&eacute;rales et pression hydrostatique</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                L&apos;eau pr&eacute;sente dans le sol exerce une pression sur les murs enterr&eacute;s de la cave. Cette pression hydrostatique force l&apos;eau &agrave; travers les pores du mat&eacute;riau et les fissures. Apr&egrave;s de fortes pluies ou en p&eacute;riode de nappe phr&eacute;atique haute, la pression augmente et l&apos;eau peut m&ecirc;me suinter directement &agrave; travers les murs.
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">Remont&eacute;es capillaires</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                L&apos;eau du sol remonte dans les murs par capillarit&eacute;. Les mat&eacute;riaux poreux (pierre, brique, parpaing) agissent comme des &eacute;ponges. L&apos;eau transporte des sels min&eacute;raux qui cristallisent en surface sous forme de <Link href="/salpetre-cave/" className="text-[#E8952D] underline hover:no-underline">salp&ecirc;tre</Link>, endommageant les enduits et la structure.
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">Condensation</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                En &eacute;t&eacute;, l&apos;air chaud et humide qui p&eacute;n&egrave;tre dans la cave froide se condense sur les murs et le sol. Ce ph&eacute;nom&egrave;ne cr&eacute;e un voile d&apos;humidit&eacute; qui favorise les moisissures. Un manque de ventilation aggrave consid&eacute;rablement ce probl&egrave;me.
              </p>
            </div>

            <div className="rounded-xl bg-amber-50 border border-amber-200 p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">
                  <strong>Important :</strong> une cave humide non trait&eacute;e fragilise les fondations et provoque des d&eacute;g&acirc;ts qui remontent aux &eacute;tages sup&eacute;rieurs. Plus vous attendez, plus les travaux seront co&ucirc;teux.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-beige-100 p-6 sm:p-8">
              <p className="text-lg font-semibold text-[#1A1A1A] mb-2">Cave humide ?</p>
              <p className="text-sm text-[#6B6B6B] mb-4">Un expert MurExpert diagnostique la cause et propose le traitement adapt&eacute;. Gratuit et sans engagement.</p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-6 py-2.5 text-sm font-semibold text-white hover:scale-[1.03] transition-all">Diagnostic gratuit <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Comment traiter une cave humide ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-6">
                Le traitement d&apos;une cave humide combine g&eacute;n&eacute;ralement plusieurs techniques pour un r&eacute;sultat durable :
              </p>
              <div className="space-y-4">
                {[
                  { title: "Cuvelage", desc: "Application d'un enduit etanche haute performance sur les murs et le sol de la cave. Resiste a la pression hydrostatique. C'est la solution de reference pour les caves enterrees. Prix : 150-300 EUR/m2." },
                  { title: "Drainage peripherique", desc: "Installation d'un drain autour des fondations pour evacuer les eaux souterraines loin du batiment. Necessaire si le terrain est tres humide ou si la nappe phreatique est elevee. Prix : 100-200 EUR/ml." },
                  { title: "Injection de resine", desc: "Barriere etanche en pied de mur contre les remontees capillaires. Technique definitive, garantie 10 ans. Prix : 80-150 EUR/ml." },
                  { title: "Ventilation de cave", desc: "Installation d'un systeme de ventilation mecanique pour evacuer l'humidite ambiante et prevenir la condensation. Complement indispensable au traitement structurel." },
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
                Les cons&eacute;quences d&apos;une cave humide non trait&eacute;e
              </h2>
              <ul className="space-y-3">
                {[
                  "Fragilisation des fondations et de la structure du batiment",
                  "Apparition de salpetre, moisissures et odeurs de moisi",
                  "Propagation de l'humidite au rez-de-chaussee (moisissures, salpetre)",
                  "Deterioration des objets stockes dans la cave",
                  "Risque de developpement de merule (champignon destructeur du bois)",
                  "Perte de valeur immobiliere du bien",
                  "Impossibilite d'amenager la cave en espace habitable",
                  "Surconsommation de chauffage due aux murs humides",
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
                Prix du traitement d&apos;une cave humide
              </h2>
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead className="bg-beige-50">
                    <tr>
                      <th className="px-5 py-3 text-left font-semibold text-[#1A1A1A]">Traitement</th>
                      <th className="px-5 py-3 text-left font-semibold text-[#1A1A1A]">Prix indicatif</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Diagnostic</td><td className="px-5 py-3 text-[#E8952D] font-semibold">Gratuit</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Cuvelage</td><td className="px-5 py-3 text-[#6B6B6B]">150 - 300 EUR/m&sup2;</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Drainage p&eacute;riph&eacute;rique</td><td className="px-5 py-3 text-[#6B6B6B]">100 - 200 EUR/ml</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Injection r&eacute;sine</td><td className="px-5 py-3 text-[#6B6B6B]">80 - 150 EUR/ml</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Ventilation cave</td><td className="px-5 py-3 text-[#6B6B6B]">500 - 2 000 EUR</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-2xl bg-beige-100 p-8 sm:p-10 text-center">
              <h2 className="text-2xl text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>Retrouvez une cave s&egrave;che</h2>
              <p className="text-[#6B6B6B] mb-6 max-w-lg mx-auto">Diagnostic gratuit, sans engagement. Intervention sous 48h dans toute la France.</p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white hover:scale-[1.03] transition-all">Demander mon diagnostic gratuit <ArrowRight className="h-4 w-4" /></Link>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>Pages associ&eacute;es</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Salpetre en cave", href: "/salpetre-cave/" },
                  { title: "Salpetre", href: "/salpetre/" },
                  { title: "Remontee capillaire", href: "/remontee-capillaire/" },
                  { title: "Merule", href: "/merule/" },
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
