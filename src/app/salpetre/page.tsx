import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, AlertTriangle, ChevronRight } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { breadcrumbJsonLd, faqJsonLd, articleJsonLd, howToJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Salpetre : Causes, Traitement et Prevention | Guide Complet",
  description:
    "Salpetre sur vos murs ? Depots blanchatres, efflorescences... Decouvrez les causes du salpetre, les traitements professionnels et comment l'eliminer definitivement.",
};

const faqItems = [
  {
    question: "Le salpetre est-il dangereux pour la sante ?",
    answer: "Le salpetre (nitrate de potassium) est moderement dangereux pour la sante. Il provoque des irritations respiratoires et favorise le developpement de moisissures qui liberent des spores nocives et des mycotoxines. L'ingestion de salpetre peut etre toxique, ce qui est un risque si de jeunes enfants grattent les murs. Surtout, le salpetre est le signe d'un probleme d'humidite qui deteriore la structure du batiment.",
  },
  {
    question: "Comment se debarrasser du salpetre sur un mur ?",
    answer: "Pour se debarrasser du salpetre definitivement, il faut traiter la cause : les remontees capillaires. La solution la plus efficace est l'injection de resine hydrophobe en pied de mur, qui cree une barriere etanche permanente. Ensuite, les sels sont brosses, les enduits deteriores retires, et les murs sont remis en etat apres sechage. Sans traiter la cause, le salpetre revient systematiquement.",
  },
  {
    question: "Quelle est la cause du salpetre ?",
    answer: "La cause principale du salpetre est la remontee capillaire : l'eau du sol remonte dans les murs poreux par capillarite, transportant des sels mineraux (nitrates, sulfates, chlorures). Lorsque l'eau s'evapore en surface, les sels cristallisent sous forme de depots blanchatres. Un terrain humide, un mauvais drainage ou une nappe phreatique elevee aggravent le phenomene.",
  },
  {
    question: "Le salpetre revient-il apres traitement ?",
    answer: "Non, si le traitement est bien realise. L'injection de resine cree une barriere etanche definitive (duree de vie superieure a 30 ans) qui bloque les remontees capillaires. Le salpetre ne peut plus se former car l'eau ne remonte plus. Le traitement est garanti 10 ans (garantie decennale). Si le salpetre reapparait apres intervention, MurExpert revient gratuitement.",
  },
  {
    question: "Comment reconnaitre le salpetre ?",
    answer: "Le salpetre se reconnait a ses depots blancs, poudreux ou cristallins, principalement situes en bas des murs (jusqu'a 1-1,5 m de hauteur). Il est sec et craquant au toucher, contrairement a la moisissure blanche qui est duveteuse et humide. Le salpetre peut aussi provoquer l'eclatement des enduits et de la pierre. Un professionnel confirme le diagnostic avec des tests de sels.",
  },
  {
    question: "Quel est le prix d'un traitement anti-salpetre ?",
    answer: "Le traitement du salpetre par injection de resine coute entre 80 et 150 EUR par metre lineaire. Le nettoyage des sels et la remise en etat des enduits representent 30 a 60 EUR par m2 supplementaires. Pour une maison standard, le budget total se situe entre 3 000 et 6 000 EUR. Le diagnostic est gratuit chez MurExpert.",
  },
  {
    question: "Peut-on peindre par-dessus du salpetre ?",
    answer: "Non, peindre par-dessus du salpetre est inutile. Les sels continueront a migrer et feront cloquer et ecailler la peinture en quelques mois. Il faut d'abord traiter la cause de l'humidite, puis brosser les sels, laisser secher les murs et appliquer un enduit adapte avant de repeindre.",
  },
];

const howToSteps = [
  { name: "Diagnostic professionnel", text: "Un technicien mesure l'humidite dans les murs, analyse les sels presents et confirme la presence de remontees capillaires a l'aide d'appareils professionnels." },
  { name: "Injection de resine hydrophobe", text: "Des forages de 12-14 mm sont realises en pied de mur tous les 10-15 cm. Une resine speciale est injectee sous pression pour creer une barriere etanche permanente." },
  { name: "Temps de sechage", text: "Les murs sont laisses a secher pendant plusieurs semaines. Le temps de sechage depend de l'epaisseur du mur et du degre d'humidite initial." },
  { name: "Nettoyage et remise en etat", text: "Les sels en surface sont brosses, les enduits deteriores retires. Un nouvel enduit adapte est applique et les murs sont repeints." },
];

export default function SalpetrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: "https://murexpert.fr" },
              { name: "Salpetre", url: "https://murexpert.fr/salpetre/" },
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
              title: "Salpetre : Causes, Traitement et Prevention",
              description: "Salpetre sur vos murs ? Depots blanchatres, efflorescences... Decouvrez les causes du salpetre, les traitements professionnels et comment l'eliminer definitivement.",
              url: "https://murexpert.fr/salpetre/",
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
            howToJsonLd("Comment traiter le salpetre sur un mur", howToSteps, "P14D")
          ),
        }}
      />

      {/* Breadcrumb */}
      <div className="bg-beige-50 border-b border-beige-200">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A] font-medium">Salpetre</span>
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
              Salpetre sur les murs : tout comprendre pour l&apos;eliminer
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#6B6B6B]">
              Le salpetre est l&apos;un des signes les plus visibles d&apos;un probleme d&apos;humidite
              dans votre maison. Depots blanchatres, enduit qui s&apos;effrite, murs qui se degradent...
              Il faut agir avant que les degats ne s&apos;aggravent.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white transition-all duration-300 hover:scale-[1.03]">
                Diagnostic gratuit salpetre <ArrowRight className="h-4 w-4" />
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
            <img src="/images/salpetre.jpg" alt="Depots de salpetre sur un mur interieur — signe de remontees capillaires" className="w-full h-[300px] sm:h-[400px] object-cover" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="space-y-12">

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Qu&apos;est-ce que le salpetre ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Le salpetre, ou nitrate de potassium (KNO3), est un sel mineral qui cristallise a la surface des murs humides. Il se forme lorsque l&apos;eau presente dans le sol remonte dans les murs par capillarite, transportant avec elle des sels mineraux (nitrates, sulfates, chlorures) contenus dans la terre. Lorsque cette eau s&apos;evapore a la surface du mur, les sels se deposent sous forme de cristaux blanchatres.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Le salpetre se reconnait facilement : ce sont des depots blancs, poudreux ou cristallins, qui apparaissent principalement sur la partie basse des murs (jusqu&apos;a 1 a 1,5 metre de hauteur). Il peut aussi se manifester sous forme d&apos;efflorescences (trainees blanches) ou de crypto-florescences (cristallisation a l&apos;interieur du materiau, provoquant l&apos;eclatement de l&apos;enduit).
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Le mot &quot;salpetre&quot; vient du latin &quot;sal petrae&quot; (sel de pierre). Ce phenomene est connu depuis l&apos;Antiquite et touche principalement les maisons anciennes construites avec des materiaux poreux (pierre, brique, parpaing) et dont les fondations ne comportent pas de barriere etanche.
              </p>
            </div>

            <div className="rounded-2xl bg-beige-100 p-6 sm:p-8">
              <p className="text-lg font-semibold text-[#1A1A1A] mb-2">Du salpetre sur vos murs ?</p>
              <p className="text-sm text-[#6B6B6B] mb-4">N&apos;attendez pas que le probleme s&apos;aggrave. Un expert MurExpert identifie la cause et propose un traitement garanti.</p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-6 py-2.5 text-sm font-semibold text-white hover:scale-[1.03] transition-all">
                Diagnostic gratuit <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Les causes du salpetre
              </h2>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">Remontees capillaires</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La cause principale du salpetre est la remontee capillaire. L&apos;eau du sol remonte dans les materiaux poreux des murs (pierre, brique, mortier) par un phenomene physique appele capillarite. Cette eau chargee en sels mineraux provoque la cristallisation du salpetre en surface. Les maisons anterieures a 1960, qui ne possedent generalement pas de coupure de capillarite dans leurs fondations, sont les plus touchees.
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">Humidite du sol et mauvais drainage</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Un terrain humide, un mauvais drainage autour des fondations ou une nappe phreatique elevee accentuent les remontees capillaires et donc la formation de salpetre. Les maisons en contrebas, les sous-sols enterres et les caves sont particulierement exposes.
              </p>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">Presence de nitrates dans le sol</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Le salpetre se forme d&apos;autant plus facilement que le sol est riche en nitrates. C&apos;est souvent le cas pres des anciennes exploitations agricoles, des fosses septiques, des ecuries ou dans les zones ou des engrais ont ete utilises. L&apos;eau chargee en nitrates transporte plus de sels qui cristallisent ensuite en surface.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Les consequences du salpetre
              </h2>
              <div className="rounded-xl bg-amber-50 border border-amber-200 p-5 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800">
                    <strong>Important :</strong> le salpetre est un signal d&apos;alarme. Ignorer ce probleme conduit a une degradation progressive et couteuse de votre batiment.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Degradation des enduits, peintures et revetements muraux",
                  "Eclatement de la pierre et de la brique sous la pression des cristaux",
                  "Perte d'isolation thermique des murs humides",
                  "Apparition de moisissures et d'odeurs de moisi",
                  "Deterioration de la structure du batiment a long terme",
                  "Baisse de la valeur immobiliere du bien",
                  "Surconsommation de chauffage (un mur humide perd 50% de sa capacite isolante)",
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
                Comment traiter le salpetre ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-6">
                Le traitement du salpetre doit obligatoirement passer par le traitement de la cause (generalement les remontees capillaires). Voici les etapes d&apos;un traitement professionnel complet :
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">1. Diagnostic professionnel</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Mesure du taux d&apos;humidite dans les murs avec un hygrometre professionnel, analyse des sels presents, identification de la source d&apos;humidite (remontees capillaires, infiltration, condensation). Ce diagnostic est gratuit chez MurExpert.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">2. Injection de resine hydrophobe</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Si le salpetre est cause par des remontees capillaires, la solution la plus efficace est l&apos;injection de resine hydrophobe dans la base des murs. Des forages sont realises a intervalles reguliers, puis une resine speciale est injectee sous pression. En polymerisant, elle cree une barriere etanche qui empeche l&apos;eau de remonter. Cette technique est definitive et garantie 10 ans.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">3. Nettoyage et remise en etat</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Apres le traitement de la cause, les sels en surface sont brosses et les enduits deteriores sont retires. Les murs sont laisses a secher pendant plusieurs semaines (le temps de sechage depend de l&apos;epaisseur et du degre d&apos;humidite). Enfin, un nouvel enduit est applique et les murs sont repeints.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Prix du traitement anti-salpetre
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
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Diagnostic humidite</td><td className="px-5 py-3 text-[#E8952D] font-semibold">Gratuit</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Injection de resine</td><td className="px-5 py-3 text-[#6B6B6B]">80 - 150 EUR/ml</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Nettoyage sels + enduit</td><td className="px-5 py-3 text-[#6B6B6B]">30 - 60 EUR/m2</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Drainage peripherique</td><td className="px-5 py-3 text-[#6B6B6B]">100 - 200 EUR/ml</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-beige-100 p-8 sm:p-10 text-center">
              <h2 className="text-2xl text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Stoppez le salpetre definitivement
              </h2>
              <p className="text-[#6B6B6B] mb-6 max-w-lg mx-auto">
                Le salpetre s&apos;aggrave avec le temps. Plus vous attendez, plus les degats seront importants. Diagnostic gratuit, sans engagement.
              </p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white hover:scale-[1.03] transition-all">
                Demander mon diagnostic gratuit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Internal links */}
            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Pages associees
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Moisissure sur les murs", href: "/moisissure-mur/" },
                  { title: "Remontee capillaire", href: "/remontee-capillaire/" },
                  { title: "Humidite dans la maison", href: "/humidite-maison/" },
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

            {/* FAQ */}
            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-8" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Questions frequentes sur le salpetre
              </h2>
              <Accordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
