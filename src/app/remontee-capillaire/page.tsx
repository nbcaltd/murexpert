import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, AlertTriangle, ChevronRight } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { breadcrumbJsonLd, faqJsonLd, articleJsonLd, howToJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Remontee Capillaire : Causes, Signes et Traitement | Guide Expert",
  description:
    "Tout savoir sur les remontees capillaires : comment les identifier, comprendre les causes et les traiter definitivement. Injection de resine, drainage, diagnostic gratuit.",
};

const faqItems = [
  {
    question: "Qu'est-ce qu'une remontee capillaire ?",
    answer: "La remontee capillaire est un phenomene physique par lequel l'eau presente dans le sol remonte dans les materiaux poreux des murs (pierre, brique, mortier, parpaing) par effet de capillarite, de la meme facon qu'un buvard absorbe l'eau. L'eau peut remonter de 50 cm a plus de 1,5 metre selon le type de materiau et les conditions.",
  },
  {
    question: "Comment reconnaitre des remontees capillaires ?",
    answer: "Les signes typiques sont : des taches d'humidite en bas des murs (jusqu'a 1-1,5 m de hauteur), du salpetre (depots blanchatres), des enduits qui s'effritent ou tombent, de la peinture qui s'ecaille, des plinthes qui se decollent, une odeur de moisi au rez-de-chaussee, et parfois de la moisissure en pied de mur. La repartition de l'humidite forme souvent une ligne horizontale reguliere.",
  },
  {
    question: "Comment stopper les remontees capillaires definitivement ?",
    answer: "Le traitement le plus efficace et le plus utilise est l'injection de resine hydrophobe en pied de mur. Cette technique cree une barriere etanche qui bloque la remontee d'eau. C'est une solution definitive, garantie 10 ans (duree de vie superieure a 30 ans). Le drainage peripherique peut completer le traitement si le terrain est tres humide.",
  },
  {
    question: "Quelles maisons sont concernees par les remontees capillaires ?",
    answer: "Les remontees capillaires touchent principalement les maisons construites avant 1960, epoque a laquelle les fondations ne comportaient pas de membrane d'etancheite (coupure de capillarite). Les materiaux les plus sensibles sont la pierre, la brique et le mortier de chaux. Les maisons en zone humide, en contrebas ou avec une nappe phreatique proche sont plus exposees.",
  },
  {
    question: "Combien coute le traitement des remontees capillaires ?",
    answer: "Le traitement par injection de resine coute en moyenne entre 80 et 150 EUR par metre lineaire de mur traite. Pour une maison standard de 80 m2 au sol (environ 35 ml de mur perimetrique), le cout total se situe entre 2 800 et 5 250 EUR. Ce cout comprend le diagnostic, l'injection, la garantie decennale et le suivi post-traitement. Le diagnostic est gratuit chez MurExpert.",
  },
];

export default function RemonteeCapillairePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: "https://murexpert.fr" },
              { name: "Remontee capillaire", url: "https://murexpert.fr/remontee-capillaire/" },
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
              title: "Remontee Capillaire : Causes, Signes et Traitement",
              description: "Tout savoir sur les remontees capillaires : identification, causes et traitements definitifs. Injection de resine, drainage, diagnostic gratuit.",
              url: "https://murexpert.fr/remontee-capillaire/",
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
            howToJsonLd("Comment traiter les remontees capillaires", [
              { name: "Diagnostic professionnel", text: "Mesure du taux d'humidite dans les murs avec hygrometre, analyse des sels mineraux et confirmation de la remontee capillaire." },
              { name: "Forages en pied de mur", text: "Realisation de forages de 12-14 mm de diametre tous les 10-15 cm en pied de mur, a 10-15 cm au-dessus du sol." },
              { name: "Injection de resine hydrophobe", text: "Injection sous basse pression d'une resine a base de silane/siloxane qui impregne les capillaires du materiau et cree une barriere etanche." },
              { name: "Sechage des murs", text: "Attente du sechage complet des murs (2 a 6 mois selon l'epaisseur). Le taux d'humidite est suivi regulierement." },
              { name: "Remise en etat des enduits", text: "Retrait des enduits deteriores, application d'un enduit de renovation adapte et remise en peinture." },
            ], "P180D")
          ),
        }}
      />

      <div className="bg-beige-50 border-b border-beige-200">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A] font-medium">Remontee capillaire</span>
          </nav>
        </div>
      </div>

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
              Remontee capillaire : comprendre et traiter ce probleme
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#6B6B6B]">
              Les remontees capillaires sont l&apos;une des causes les plus repandues et les plus destructrices
              d&apos;humidite dans les maisons. Mais ce probleme a des solutions efficaces et definitives.
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
            <img src="/images/remontee-capillaire.jpg" alt="Mur deteriore par les remontees capillaires — peinture ecaillee et humidite" className="w-full h-[300px] sm:h-[400px] object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="space-y-12">

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Qu&apos;est-ce que la remontee capillaire ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La remontee capillaire est un phenomene physique naturel par lequel l&apos;eau presente dans le sol migre vers le haut a travers les materiaux poreux des murs. Ce mecanisme est identique a celui qui fait monter l&apos;encre dans un buvard ou l&apos;eau dans une eponge : les micro-canaux (capillaires) presents dans les materiaux de construction aspirent l&apos;eau par tension superficielle.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La hauteur de remontee depend de plusieurs facteurs : la porosite du materiau (plus il est poreux, plus l&apos;eau monte), la quantite d&apos;eau disponible dans le sol, la temperature et l&apos;evaporation. Dans les cas les plus severes, l&apos;eau peut remonter jusqu&apos;a 1,5 metre, voire davantage dans les materiaux tres poreux comme certaines pierres calcaires.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Les remontees capillaires sont un probleme specifique aux maisons anciennes (construites avant 1960 environ) dont les fondations ne comportent pas de coupure de capillarite (une membrane etanche placee a la base des murs lors de la construction). Depuis les annees 1960, les normes de construction imposent cette barriere, ce qui explique que les maisons recentes sont rarement concernees.
              </p>
            </div>

            <div className="rounded-2xl bg-beige-100 p-6 sm:p-8">
              <p className="text-lg font-semibold text-[#1A1A1A] mb-2">Suspicion de remontee capillaire ?</p>
              <p className="text-sm text-[#6B6B6B] mb-4">Un diagnostic professionnel gratuit confirme ou ecarte cette hypothese et identifie la solution adaptee.</p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-6 py-2.5 text-sm font-semibold text-white hover:scale-[1.03] transition-all">
                Diagnostic gratuit <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Comment reconnaitre une remontee capillaire ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Les remontees capillaires ont des signes caracteristiques qui les distinguent des autres types d&apos;humidite :
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Taches d'humidite en bas des murs, formant une ligne horizontale plus ou moins reguliere",
                  "Salpetre (depots blanchatres cristallins) principalement en pied de mur",
                  "Enduit qui se decolle, cloque ou tombe sur les 50 cm a 1,5 m inferieurs",
                  "Peinture qui s'ecaille, papier peint qui se decolle en partie basse",
                  "Plinthes qui se decollent ou pourrissent",
                  "Odeur de moisi au rez-de-chaussee",
                  "Sol (carrelage, parquet) qui se souleve dans certains cas graves",
                  "Le probleme est present sur les murs interieurs ET exterieurs",
                  "L'humidite est permanente, independamment de la saison ou de la meteo",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E8952D]" />
                    <span className="text-[0.9375rem] text-[#6B6B6B]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-xl bg-amber-50 border border-amber-200 p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800">
                    <strong>Attention :</strong> ne confondez pas remontee capillaire et infiltration laterale. Les infiltrations sont souvent localisees et varient avec les precipitations, alors que les remontees capillaires sont constantes et reparties uniformement.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Les consequences des remontees capillaires
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Non traitees, les remontees capillaires entrainent une degradation progressive et couteuse du batiment :
              </p>
              <ul className="space-y-3 mb-4">
                {[
                  "Deterioration des enduits, des peintures et des revetements muraux",
                  "Apparition de salpetre qui fait eclater la pierre et la brique",
                  "Developpement de moisissures nocives pour la sante",
                  "Perte d'isolation thermique (un mur humide isole 50% moins bien)",
                  "Augmentation de la facture de chauffage de 20 a 30%",
                  "Pourrissement des elements en bois (plinthes, poutres, plancher)",
                  "Corrosion des elements metalliques (armatures beton, canalisations)",
                  "Perte de valeur immobiliere significative (10 a 20%)",
                  "Inconfort de vie : sensation de froid, odeurs de moisi",
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
                Comment traiter les remontees capillaires ?
              </h2>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">Solution n&deg;1 : Injection de resine (recommandee)</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                L&apos;injection de resine hydrophobe est le traitement de reference, le plus utilise et le plus efficace. Des forages de petit diametre (12-14 mm) sont realises en pied de mur, tous les 10 a 15 cm. Une resine speciale (a base de silane/siloxane ou de silicone microemulsionne) est injectee sous basse pression dans les forages.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La resine se diffuse dans les capillaires du materiau et, en polymerisant, cree un film hydrophobe continu qui bloque definitivement la remontee d&apos;eau. C&apos;est une technique non destructive, rapide (1 a 2 jours de travaux) et dont la duree de vie depasse 30 ans.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">Solution n&deg;2 : Drainage peripherique</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Le drainage peut completer l&apos;injection de resine dans les cas ou le terrain est tres humide. Il consiste a installer un drain en pied de fondation pour evacuer les eaux souterraines et reduire la charge hydrique sur les murs. Voir notre page <Link href="/traitement-humidite/#drainage" className="text-[#E8952D] underline hover:no-underline">drainage peripherique</Link>.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">Ce qu&apos;il ne faut PAS faire</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Certaines &quot;solutions&quot; sont non seulement inefficaces mais peuvent aggraver le probleme :
              </p>
              <ul className="space-y-2">
                {[
                  "Appliquer un enduit etanche (ciment, peinture bitumineuse) : l'eau remonte plus haut",
                  "Poser du placoplatre sur les murs humides : la moisissure se developpe derriere",
                  "Utiliser des boitiers electroniques anti-humidite : aucune efficacite prouvee scientifiquement",
                  "Traiter uniquement les symptomes (anti-moisissure) sans traiter la cause",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    <span className="text-[0.9375rem] text-[#6B6B6B]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Prix du traitement des remontees capillaires
              </h2>
              <div className="overflow-hidden rounded-xl border border-gray-200 mb-4">
                <table className="w-full text-sm">
                  <thead className="bg-beige-50">
                    <tr>
                      <th className="px-5 py-3 text-left font-semibold text-[#1A1A1A]">Prestation</th>
                      <th className="px-5 py-3 text-left font-semibold text-[#1A1A1A]">Prix indicatif</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Diagnostic humidite</td><td className="px-5 py-3 text-[#E8952D] font-semibold">Gratuit</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Injection de resine (mur standard 30-40 cm)</td><td className="px-5 py-3 text-[#6B6B6B]">80 - 120 EUR/ml</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Injection de resine (mur epais 50+ cm)</td><td className="px-5 py-3 text-[#6B6B6B]">120 - 150 EUR/ml</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Remise en etat enduits + peinture</td><td className="px-5 py-3 text-[#6B6B6B]">30 - 60 EUR/m2</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Drainage peripherique (complement)</td><td className="px-5 py-3 text-[#6B6B6B]">100 - 200 EUR/ml</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                <strong>Exemple :</strong> pour une maison de 80 m2 au sol avec environ 35 metres lineaires de murs perimetriques, le traitement par injection de resine revient a environ 2 800 - 4 200 EUR (hors remise en etat des enduits). Le diagnostic gratuit permet d&apos;obtenir un devis precis adapte a votre situation.
              </p>
            </div>

            <div className="rounded-2xl bg-beige-100 p-8 sm:p-10 text-center">
              <h2 className="text-2xl text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Stoppez les remontees capillaires
              </h2>
              <p className="text-[#6B6B6B] mb-6 max-w-lg mx-auto">
                Un diagnostic gratuit pour confirmer les remontees capillaires et obtenir un devis precis pour le traitement par injection de resine.
              </p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white hover:scale-[1.03] transition-all">
                Diagnostic gratuit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Pages associees
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Salpetre sur les murs", href: "/salpetre/" },
                  { title: "Moisissure mur", href: "/moisissure-mur/" },
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
