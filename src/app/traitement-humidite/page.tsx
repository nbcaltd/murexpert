import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, ChevronRight } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { breadcrumbJsonLd, faqJsonLd, articleJsonLd, howToJsonLd, serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Traitement Humidite : Toutes les Solutions Professionnelles",
  description:
    "Decouvrez tous les traitements contre l'humidite : injection de resine, VMC/VMI, cuvelage, drainage, assechement. Solutions garanties par des experts certifies.",
};

const faqItems = [
  {
    question: "Quel est le meilleur traitement contre l'humidite ?",
    answer: "Il n'existe pas de traitement universel. Le meilleur traitement depend de la cause de l'humidite : injection de resine pour les remontees capillaires, VMC/VMI pour la condensation, cuvelage pour les caves, drainage pour les eaux souterraines, etancheite pour les infiltrations. Un diagnostic professionnel est indispensable pour determiner le traitement adapte.",
  },
  {
    question: "Les traitements contre l'humidite sont-ils garantis ?",
    answer: "Oui. Chez MurExpert, tous les traitements sont couverts par une garantie decennale (10 ans) conformement a la loi. De plus, nous offrons une garantie de resultat : si le probleme persiste apres notre intervention, nous intervenons a nouveau gratuitement jusqu'a resolution complete du probleme.",
  },
  {
    question: "Combien de temps durent les traitements ?",
    answer: "Les traitements que nous utilisons sont concus pour durer. L'injection de resine cree une barriere permanente (duree de vie superieure a 30 ans). La VMC/VMI a une duree de vie de 15 a 20 ans. Le cuvelage est une solution definitive. Tous ces traitements sont garantis 10 ans minimum.",
  },
  {
    question: "Peut-on traiter l'humidite sans gros travaux ?",
    answer: "Dans de nombreux cas, oui. L'installation d'une VMI se fait en quelques heures sans gros travaux. L'injection de resine necessite des forages discrets en pied de mur mais ne demande pas de demolition. Seuls le cuvelage et le drainage necessitent des travaux plus importants. Votre technicien vous proposera toujours la solution la moins invasive possible.",
  },
  {
    question: "Existe-t-il des aides financieres pour les traitements d'humidite ?",
    answer: "Certains traitements d'humidite peuvent beneficier d'aides financieres, notamment lorsqu'ils ameliorent la performance energetique du logement (VMC, isolation). Vous pouvez etre eligible a MaPrimeRenov', aux CEE (Certificats d'Economies d'Energie), a l'eco-pret a taux zero ou aux aides de l'ANAH. Votre technicien vous informera des aides disponibles lors du diagnostic.",
  },
];

export default function TraitementHumiditePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: "https://murexpert.fr" },
              { name: "Traitement humidite", url: "https://murexpert.fr/traitement-humidite/" },
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
              title: "Traitement Humidite : Toutes les Solutions Professionnelles",
              description: "Decouvrez tous les traitements contre l'humidite : injection de resine, VMC/VMI, cuvelage, drainage, assechement.",
              url: "https://murexpert.fr/traitement-humidite/",
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
            howToJsonLd("Comment traiter l'humidite dans une maison", [
              { name: "Diagnostic professionnel", text: "Un technicien certifie identifie la cause exacte de l'humidite avec des appareils professionnels (hygrometre, camera thermique, detecteur de sels)." },
              { name: "Choix du traitement adapte", text: "Selon la cause : injection de resine pour les remontees capillaires, VMC/VMI pour la condensation, cuvelage pour les caves, drainage pour les eaux souterraines." },
              { name: "Realisation des travaux", text: "Les techniciens certifies realisent les travaux selon les normes en vigueur, avec des materiaux professionnels garantis." },
              { name: "Sechage et remise en etat", text: "Apres traitement de la cause, les murs sechent puis sont remis en etat (enduit, peinture)." },
              { name: "Suivi et garantie", text: "Un suivi post-traitement verifie l'efficacite. Tous les travaux sont couverts par une garantie decennale." },
            ], "P7D")
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({ name: "Injection de resine hydrophobe", description: "Traitement definitif des remontees capillaires par injection de resine en pied de mur. Garantie decennale.", url: "https://murexpert.fr/traitement-humidite/#injection-resine" })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({ name: "Installation VMC/VMI", description: "Ventilation mecanique controlee ou par insufflation pour traiter les problemes de condensation et de moisissure.", url: "https://murexpert.fr/traitement-humidite/#vmc-vmi" })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({ name: "Cuvelage cave et sous-sol", description: "Etancheite des caves et sous-sols par application d'un enduit etanche haute performance resistant a la pression hydrostatique.", url: "https://murexpert.fr/traitement-humidite/#cuvelage" })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({ name: "Drainage peripherique", description: "Installation d'un drain le long des fondations pour evacuer les eaux souterraines et proteger le batiment.", url: "https://murexpert.fr/traitement-humidite/#drainage" })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({ name: "Assechement des murs", description: "Techniques professionnelles pour accelerer le sechage des murs apres traitement de la cause de l'humidite.", url: "https://murexpert.fr/traitement-humidite/#assechement" })
          ),
        }}
      />

      <div className="bg-beige-50 border-b border-beige-200">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A] font-medium">Traitement humidite</span>
          </nav>
        </div>
      </div>

      <section className="bg-beige-50 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#E8952D]/10 px-4 py-1.5 text-sm font-semibold text-[#E8952D]">
              Solutions professionnelles
            </span>
            <h1
              className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12] lg:text-[3.25rem] lg:leading-[1.08]"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
            >
              Traitement de l&apos;humidite : toutes nos solutions
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#6B6B6B]">
              Chaque probleme d&apos;humidite a une solution adaptee. Decouvrez nos traitements
              professionnels, garantis et realises par des techniciens certifies.
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
            <img src="/images/assechement.jpg" alt="Mur en cours de traitement contre l humidite" className="w-full h-[300px] sm:h-[400px] object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="space-y-12">

            {/* Injection resine */}
            <div id="injection-resine">
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Injection de resine hydrophobe
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                L&apos;injection de resine est le traitement de reference contre les <Link href="/remontee-capillaire/" className="text-[#E8952D] underline hover:no-underline">remontees capillaires</Link>. Cette technique consiste a injecter une resine hydrophobe (a base de silane/siloxane) dans la base des murs pour creer une barriere etanche qui empeche definitivement l&apos;eau de remonter par capillarite.
              </p>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mt-6 mb-3">Comment ca marche ?</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Des forages de 12 a 14 mm de diametre sont realises en pied de mur, a intervalles reguliers (tous les 10 a 15 cm), a une hauteur de 10 a 15 cm au-dessus du sol. Une resine speciale est ensuite injectee sous basse pression. La resine impregne les materiaux poreux (pierre, brique, mortier) et, en polymerisant, cree un film hydrophobe continu qui bloque la remontee d&apos;eau.
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Efficace sur tous types de materiaux (pierre, brique, parpaing, mortier)",
                  "Technique non destructive : pas de demolition necessaire",
                  "Resultat definitif : duree de vie superieure a 30 ans",
                  "Garantie decennale (10 ans)",
                  "Duree des travaux : 1 a 2 jours pour une maison standard",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E8952D]" />
                    <span className="text-[0.9375rem] text-[#6B6B6B]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                <strong>Prix indicatif :</strong> 80 a 150 EUR par metre lineaire, selon l&apos;epaisseur du mur et le type de materiau.
              </p>
            </div>

            <div className="rounded-2xl bg-beige-100 p-6 sm:p-8">
              <p className="text-lg font-semibold text-[#1A1A1A] mb-2">Quel traitement pour votre situation ?</p>
              <p className="text-sm text-[#6B6B6B] mb-4">Seul un diagnostic professionnel permet de determiner le traitement adapte. Diagnostic gratuit et sans engagement.</p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-6 py-2.5 text-sm font-semibold text-white hover:scale-[1.03] transition-all">
                Demander un diagnostic <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* VMC/VMI */}
            <div id="vmc-vmi">
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                VMC et VMI : ventilation mecanique
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La ventilation mecanique est le traitement de choix contre les problemes de condensation et de <Link href="/moisissure-mur/" className="text-[#E8952D] underline hover:no-underline">moisissure</Link> lies a un exces d&apos;humidite interieure. En renouvelant l&apos;air en permanence, elle maintient un taux d&apos;humidite optimal et empeche la condensation.
              </p>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mt-6 mb-3">VMC (Ventilation Mecanique Controlee)</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La VMC extrait l&apos;air vicie des pieces humides (cuisine, salle de bain, WC) et l&apos;evacue vers l&apos;exterieur. L&apos;air neuf entre par des bouches d&apos;entree d&apos;air placees dans les pieces seches. La VMC double flux recupere en plus la chaleur de l&apos;air sortant pour prechauffer l&apos;air entrant, ce qui limite les pertes energetiques.
              </p>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mt-6 mb-3">VMI (Ventilation Mecanique par Insufflation)</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La VMI fonctionne a l&apos;inverse : elle insuffle de l&apos;air neuf filtre et tempere dans le logement, creant une surpression qui chasse l&apos;air humide par les ouvertures naturelles. La VMI est particulierement adaptee aux logements anciens car elle ne necessite pas de gaine de ventilation dans les combles.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                <strong>Prix indicatif :</strong> VMC simple flux : 1 500 - 2 500 EUR. VMC double flux : 4 000 - 7 000 EUR. VMI : 2 500 - 4 000 EUR (installation comprise).
              </p>
            </div>

            {/* Cuvelage */}
            <div id="cuvelage">
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Cuvelage : etancheite des sous-sols et caves
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Le cuvelage est un traitement d&apos;etancheite applique sur la face interieure des murs de sous-sol et de cave. Il consiste a appliquer un enduit etanche haute performance (a base de ciment modifie ou de resine) qui cree une barriere impermeable entre le mur humide et l&apos;interieur du sous-sol.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Le cuvelage est la solution de reference pour les caves et sous-sols enterres soumis a la pression hydrostatique (poussee de l&apos;eau du sol). Il peut etre realise meme lorsque les murs sont en contact direct avec la terre et ne permet aucun acces depuis l&apos;exterieur.
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Resiste a la pression hydrostatique (poussee de l'eau)",
                  "Applicable sur tout type de support (beton, pierre, brique)",
                  "Permet de recuperer un espace habitable sec et sain",
                  "Garantie decennale (10 ans)",
                  "Duree des travaux : 3 a 5 jours selon la surface",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E8952D]" />
                    <span className="text-[0.9375rem] text-[#6B6B6B]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                <strong>Prix indicatif :</strong> 150 a 300 EUR par m2, selon la preparation necessaire et le type de produit utilise.
              </p>
            </div>

            {/* Drainage */}
            <div id="drainage">
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Drainage peripherique
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Le drainage peripherique consiste a creuser une tranchee le long des fondations de la maison pour installer un drain (tuyau perfore entoure de gravier) qui collecte les eaux souterraines et les evacue loin du batiment. C&apos;est la solution pour les maisons situees sur un terrain humide ou avec une nappe phreatique elevee.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Le drainage peut etre combine avec l&apos;application d&apos;une membrane d&apos;etancheite (delta MS) sur la face exterieure des fondations pour une protection maximale. Un regard de visite est installe a chaque angle pour permettre l&apos;entretien du systeme.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                <strong>Prix indicatif :</strong> 100 a 200 EUR par metre lineaire, selon la profondeur de fouille et les conditions d&apos;acces.
              </p>
            </div>

            {/* Assechement */}
            <div id="assechement">
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Assechement des murs
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Apres le traitement de la cause de l&apos;humidite (injection, drainage, etc.), les murs doivent secher avant de pouvoir etre repris (enduit, peinture). L&apos;assechement naturel peut prendre plusieurs mois, voire un an pour des murs epais. Des techniques professionnelles permettent d&apos;accelerer ce processus.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                L&apos;assechement peut etre accelere par l&apos;utilisation de deshumidificateurs professionnels, de systemes de chauffage par infrarouge ou de procedes electro-osmotiques. Le choix de la technique depend de l&apos;epaisseur des murs, du degre d&apos;humidite et du type de materiaux.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Un suivi regulier du taux d&apos;humidite est effectue jusqu&apos;a ce que les murs atteignent un taux acceptable (inferieur a 5% en profondeur) avant de proceder aux finitions.
              </p>
            </div>

            {/* Tableau recapitulatif */}
            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Tableau comparatif des traitements
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm min-w-[600px]">
                  <thead className="bg-beige-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-[#1A1A1A]">Traitement</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#1A1A1A]">Pour quel probleme</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#1A1A1A]">Prix</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#1A1A1A]">Duree travaux</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="px-4 py-3 text-[#1A1A1A] font-medium">Injection resine</td><td className="px-4 py-3 text-[#6B6B6B]">Remontee capillaire</td><td className="px-4 py-3 text-[#6B6B6B]">80-150 EUR/ml</td><td className="px-4 py-3 text-[#6B6B6B]">1-2 jours</td></tr>
                    <tr><td className="px-4 py-3 text-[#1A1A1A] font-medium">VMC/VMI</td><td className="px-4 py-3 text-[#6B6B6B]">Condensation</td><td className="px-4 py-3 text-[#6B6B6B]">1 500-4 000 EUR</td><td className="px-4 py-3 text-[#6B6B6B]">1 jour</td></tr>
                    <tr><td className="px-4 py-3 text-[#1A1A1A] font-medium">Cuvelage</td><td className="px-4 py-3 text-[#6B6B6B]">Cave/sous-sol</td><td className="px-4 py-3 text-[#6B6B6B]">150-300 EUR/m2</td><td className="px-4 py-3 text-[#6B6B6B]">3-5 jours</td></tr>
                    <tr><td className="px-4 py-3 text-[#1A1A1A] font-medium">Drainage</td><td className="px-4 py-3 text-[#6B6B6B]">Eaux souterraines</td><td className="px-4 py-3 text-[#6B6B6B]">100-200 EUR/ml</td><td className="px-4 py-3 text-[#6B6B6B]">1-2 semaines</td></tr>
                    <tr><td className="px-4 py-3 text-[#1A1A1A] font-medium">Assechement</td><td className="px-4 py-3 text-[#6B6B6B]">Complement traitement</td><td className="px-4 py-3 text-[#6B6B6B]">Sur devis</td><td className="px-4 py-3 text-[#6B6B6B]">Variable</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-2xl bg-beige-100 p-8 sm:p-10 text-center">
              <h2 className="text-2xl text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Trouvez le traitement adapte a votre probleme
              </h2>
              <p className="text-[#6B6B6B] mb-6 max-w-lg mx-auto">
                Un diagnostic professionnel gratuit pour identifier la cause et vous proposer le traitement le plus adapte, au meilleur prix.
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
                  { title: "Moisissure sur les murs", href: "/moisissure-mur/" },
                  { title: "Salpetre", href: "/salpetre/" },
                  { title: "Remontee capillaire", href: "/remontee-capillaire/" },
                  { title: "Humidite maison", href: "/humidite-maison/" },
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
