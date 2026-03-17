import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, AlertTriangle, ChevronRight } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { breadcrumbJsonLd, faqJsonLd, articleJsonLd, howToJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Salpetre Cave : Causes, Dangers et Traitement Definitif",
  description:
    "Salpetre dans votre cave ? Depots blanchatres, murs qui s'effritent... Decouvrez les causes specifiques du salpetre en cave et les traitements professionnels pour l'eliminer. Diagnostic gratuit.",
};

const faqItems = [
  {
    question: "Pourquoi ai-je du salpetre dans ma cave ?",
    answer: "Le salpetre dans une cave est cause par les remontees capillaires et la pression hydrostatique. L'eau du sol, chargee en sels mineraux (nitrates, sulfates), penetre dans les murs enterres de la cave. En s'evaporant a l'interieur, elle depose ces sels sous forme de cristaux blanchatres. Les caves sont particulierement touchees car elles sont en contact direct avec le sol humide.",
  },
  {
    question: "Le salpetre dans la cave est-il dangereux ?",
    answer: "Le salpetre dans la cave est un signal d'alarme. Il indique un probleme d'humidite grave qui deteriore la structure du batiment. Les murs se fragilisent, les enduits eclatent, et l'humidite favorise l'apparition de moisissures qui peuvent se propager aux etages superieurs. A long terme, l'humidite peut compromettre la solidite des fondations.",
  },
  {
    question: "Comment traiter le salpetre dans une cave ?",
    answer: "Le traitement du salpetre en cave combine generalement plusieurs techniques : injection de resine en pied de mur pour bloquer les remontees capillaires, cuvelage des murs pour creer une barriere etanche, et drainage peripherique pour evacuer les eaux souterraines. Le choix depend de l'intensite du probleme et de la configuration de la cave.",
  },
  {
    question: "Peut-on amenager une cave avec du salpetre ?",
    answer: "Non, il ne faut jamais amenager une cave tant que le probleme de salpetre n'est pas traite. Poser un revetement (peinture, carrelage, placoplatre) par-dessus le salpetre est inutile : l'humidite continuera a migrer et detruira tous les materiaux poses. Traitez d'abord la cause, puis amenagez la cave une fois les murs secs.",
  },
  {
    question: "Combien coute le traitement du salpetre en cave ?",
    answer: "Le traitement du salpetre en cave coute entre 150 et 300 EUR par m2 pour un cuvelage complet, et 80 a 150 EUR par metre lineaire pour l'injection de resine. Un drainage peripherique coute 100 a 200 EUR par metre lineaire. Pour une cave de 20 m2, le budget total se situe entre 3 000 et 8 000 EUR. Le diagnostic est gratuit chez MurExpert.",
  },
  {
    question: "Quelle difference entre salpetre et moisissure en cave ?",
    answer: "Le salpetre est un depot de sels mineraux (cristaux blancs, secs et craquants), tandis que la moisissure est un champignon (taches noires, vertes ou blanches, duveteuses et humides). Les deux sont causes par l'humidite mais necessitent des traitements differents. Souvent, les deux coexistent dans une cave humide.",
  },
  {
    question: "Le salpetre peut-il remonter dans les etages ?",
    answer: "L'humidite qui cause le salpetre peut effectivement remonter dans les etages superieurs si elle n'est pas traitee. Les remontees capillaires peuvent atteindre 1,5 metre au-dessus du sol, voire plus. Si votre cave a du salpetre, verifiez les murs du rez-de-chaussee. Un traitement de la cave protege l'ensemble du batiment.",
  },
  {
    question: "La ventilation suffit-elle pour traiter le salpetre en cave ?",
    answer: "Non, la ventilation seule ne suffit pas. Elle peut aider a reduire l'humidite ambiante mais ne traite pas la cause (remontees capillaires, infiltrations). Le salpetre revient tant que l'eau continue a penetrer dans les murs. Un traitement structurel (injection, cuvelage, drainage) est indispensable pour un resultat definitif.",
  },
];

const howToSteps = [
  { name: "Diagnostic de la cave", text: "Un technicien mesure le taux d'humidite dans les murs et le sol de la cave, identifie l'origine de l'humidite (remontees capillaires, infiltrations laterales, pression hydrostatique) et evalue l'etendue des degats." },
  { name: "Traitement des remontees capillaires", text: "Injection de resine hydrophobe en pied de mur pour creer une barriere etanche qui bloque la remontee d'eau par capillarite. Technique efficace et definitive." },
  { name: "Cuvelage des murs", text: "Application d'un enduit d'etancheite haute performance sur les murs interieurs de la cave. Le cuvelage resiste a la pression hydrostatique et empeche toute penetration d'eau." },
  { name: "Nettoyage des sels et remise en etat", text: "Brossage des depots de salpetre, retrait des enduits deteriores, sechage des murs, puis application d'un nouvel enduit adapte." },
];

export default function SalpetreCavePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: "https://murexpert.fr" },
              { name: "Salpetre", url: "https://murexpert.fr/salpetre/" },
              { name: "Salpetre cave", url: "https://murexpert.fr/salpetre-cave/" },
            ])
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqItems)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd({ title: "Salpetre Cave : Causes, Dangers et Traitement", description: "Salpetre dans votre cave ? Causes specifiques et traitements professionnels.", url: "https://murexpert.fr/salpetre-cave/", datePublished: "2026-03-16", dateModified: "2026-03-16" })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd("Comment traiter le salpetre dans une cave", howToSteps, "P7D")) }}
      />

      <div className="bg-beige-50 border-b border-beige-200">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/salpetre/" className="hover:text-[#1A1A1A] transition-colors">Salp&ecirc;tre</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A] font-medium">Salp&ecirc;tre cave</span>
          </nav>
        </div>
      </div>

      <section className="bg-beige-50 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#E8952D]/10 px-4 py-1.5 text-sm font-semibold text-[#E8952D]">
              Probl&egrave;me d&apos;humidit&eacute;
            </span>
            <h1 className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12] lg:text-[3.25rem] lg:leading-[1.08]" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
              Salp&ecirc;tre dans la cave : causes et traitements
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#6B6B6B]">
              Le salp&ecirc;tre dans une cave est le signe d&apos;un probl&egrave;me d&apos;humidit&eacute; structurel qu&apos;il faut traiter
              &agrave; la source. D&eacute;couvrez les causes sp&eacute;cifiques et les solutions professionnelles durables.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white transition-all hover:scale-[1.03]">
                Diagnostic gratuit <ArrowRight className="h-4 w-4" />
              </Link>
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
                Pourquoi les caves sont-elles particuli&egrave;rement touch&eacute;es par le salp&ecirc;tre ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Les caves sont les espaces les plus expos&eacute;s au salp&ecirc;tre car elles sont en contact direct avec le sol sur plusieurs faces (sol, murs). L&apos;eau souterraine p&eacute;n&egrave;tre par pression hydrostatique et par capillarit&eacute;. En s&apos;&eacute;vaporant &agrave; l&apos;int&eacute;rieur, cette eau d&eacute;pose les sels min&eacute;raux (nitrates, sulfates) sous forme de cristaux blanchatres : c&apos;est le salp&ecirc;tre.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Les caves des maisons anciennes (construites avant 1960) sont les plus concern&eacute;es car elles ne disposent g&eacute;n&eacute;ralement pas de membrane d&apos;&eacute;tanch&eacute;it&eacute; ni de drainage autour des fondations. Les murs en pierre, brique ou parpaing sont naturellement poreux et absorbent l&apos;eau du sol environnant.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Le probl&egrave;me s&apos;aggrave en p&eacute;riode de fortes pluies ou en pr&eacute;sence d&apos;une nappe phr&eacute;atique &eacute;lev&eacute;e. Dans certains cas, l&apos;eau suinte directement &agrave; travers les murs ou le sol de la cave, cr&eacute;ant des flaques et une humidit&eacute; permanente.
              </p>
            </div>

            <div className="rounded-xl bg-amber-50 border border-amber-200 p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">
                  <strong>Important :</strong> le salp&ecirc;tre en cave n&apos;est pas qu&apos;un probl&egrave;me esth&eacute;tique. L&apos;humidit&eacute; fragilise les fondations, d&eacute;t&eacute;riore la structure et peut remonter dans les &eacute;tages sup&eacute;rieurs.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Les causes du salp&ecirc;tre en cave
              </h2>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">Pression hydrostatique</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                L&apos;eau pr&eacute;sente dans le sol exerce une pression sur les murs enterr&eacute;s de la cave. Cette pression hydrostatique force l&apos;eau &agrave; travers les pores et les fissures des mat&eacute;riaux. Plus le terrain est humide (nappe phr&eacute;atique &eacute;lev&eacute;e, terrain argileux), plus la pression est forte.
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">Remont&eacute;es capillaires</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                L&apos;eau du sol remonte dans les murs de la cave par capillarit&eacute;, transportant les sels min&eacute;raux qui cristallisent en surface. Les <Link href="/remontee-capillaire/" className="text-[#E8952D] underline hover:no-underline">remont&eacute;es capillaires</Link> touchent principalement la base des murs et peuvent atteindre 1 &agrave; 1,5 m&egrave;tre de hauteur.
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">Absence de drainage</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La plupart des maisons anciennes ne disposent pas de drainage p&eacute;riph&eacute;rique pour &eacute;vacuer les eaux souterraines. L&apos;eau stagne au contact des fondations et p&eacute;n&egrave;tre dans les murs de la cave.
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">Condensation</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Les caves mal ventil&eacute;es sont sujettes &agrave; la condensation. L&apos;air humide se condense sur les murs froids, ajoutant de l&apos;humidit&eacute; au probl&egrave;me existant et acc&eacute;l&eacute;rant la formation de salp&ecirc;tre.
              </p>
            </div>

            <div className="rounded-2xl bg-beige-100 p-6 sm:p-8">
              <p className="text-lg font-semibold text-[#1A1A1A] mb-2">Salp&ecirc;tre dans votre cave ?</p>
              <p className="text-sm text-[#6B6B6B] mb-4">Un expert MurExpert diagnostique la cause exacte et propose le traitement adapt&eacute;. Diagnostic gratuit, sans engagement.</p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-6 py-2.5 text-sm font-semibold text-white hover:scale-[1.03] transition-all">
                Demander un diagnostic gratuit <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Comment traiter le salp&ecirc;tre en cave ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-6">
                Le traitement du salp&ecirc;tre en cave n&eacute;cessite une approche globale qui combine le traitement de la cause et la protection des murs :
              </p>
              <div className="space-y-4">
                {[
                  { title: "Cuvelage", desc: "Application d'un enduit etanche haute performance sur les murs et le sol de la cave. Resiste a la pression hydrostatique. Solution de reference pour les caves enterrees. 150-300 EUR/m2." },
                  { title: "Injection de resine", desc: "Creation d'une barriere etanche en pied de mur pour bloquer les remontees capillaires. Technique definitive et garantie 10 ans. 80-150 EUR/ml." },
                  { title: "Drainage peripherique", desc: "Installation d'un drain autour des fondations pour evacuer les eaux souterraines loin du batiment. Particulierement efficace sur les terrains tres humides. 100-200 EUR/ml." },
                  { title: "Ventilation de la cave", desc: "Installation d'une ventilation mecanique pour evacuer l'humidite ambiante et eviter la condensation. Complement indispensable au traitement structurel." },
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
                Les cons&eacute;quences du salp&ecirc;tre non trait&eacute; en cave
              </h2>
              <ul className="space-y-3">
                {[
                  "Degradation des murs de fondation et fragilisation de la structure",
                  "Eclatement des pierres et briques sous la pression des cristaux de sel",
                  "Apparition de moisissures qui se propagent aux etages superieurs",
                  "Odeurs de moisi envahissant le rez-de-chaussee",
                  "Impossibilite d'amenager la cave en espace habitable",
                  "Perte de valeur immobiliere du bien",
                  "Surconsommation de chauffage (murs humides = mauvaise isolation)",
                  "Deterioration des objets stockes dans la cave",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E8952D]" />
                    <span className="text-[0.9375rem] text-[#6B6B6B]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-beige-100 p-8 sm:p-10 text-center">
              <h2 className="text-2xl text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Retrouvez une cave saine et s&egrave;che
              </h2>
              <p className="text-[#6B6B6B] mb-6 max-w-lg mx-auto">
                Le salp&ecirc;tre en cave s&apos;aggrave avec le temps. Diagnostic gratuit, sans engagement.
              </p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white hover:scale-[1.03] transition-all">
                Demander mon diagnostic gratuit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>Pages associ&eacute;es</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Salpetre sur les murs", href: "/salpetre/" },
                  { title: "Cave humide", href: "/cave-humide/" },
                  { title: "Remontee capillaire", href: "/remontee-capillaire/" },
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
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-8" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Questions fr&eacute;quentes
              </h2>
              <Accordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
