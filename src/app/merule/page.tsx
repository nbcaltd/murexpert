import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, AlertTriangle, ChevronRight } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { breadcrumbJsonLd, faqJsonLd, articleJsonLd, howToJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Merule : Identification, Traitement et Prevention du Champignon",
  description:
    "La merule (Serpula lacrymans) est un champignon destructeur qui devore le bois. Apprenez a l'identifier, comprendre ses causes et decouvrir les traitements professionnels. Diagnostic gratuit.",
};

const faqItems = [
  {
    question: "Qu'est-ce que la merule ?",
    answer: "La merule (Serpula lacrymans) est un champignon lignivore qui se nourrit de la cellulose du bois. Surnommee 'la lepre des maisons', elle est capable de detruire les charpentes, planchers, poutres et escaliers en bois. Elle se developpe dans les environnements humides, sombres et mal ventiles, et peut progresser de plusieurs centimetres par semaine.",
  },
  {
    question: "Comment reconnaitre la merule ?",
    answer: "La merule se reconnait a plusieurs stades. Au stade initial : filaments blancs cotonneux ou mycélium blanc sur le bois et les murs. Au stade avance : fructification en forme de galette ou de crepe, de couleur brun-rouille avec un bord blanc. Le bois attaque se fissure en cubes (pourriture cubique) et s'effrite facilement. Une odeur forte de champignon est souvent presente.",
  },
  {
    question: "La merule est-elle dangereuse pour la sante ?",
    answer: "La merule n'est pas directement toxique pour l'homme, contrairement aux moisissures. Cependant, elle libere des spores qui peuvent provoquer des irritations respiratoires chez les personnes sensibles. Le danger principal est structurel : la merule peut fragiliser les elements porteurs du batiment (charpente, plancher, poutres) au point de provoquer un effondrement.",
  },
  {
    question: "Comment se propage la merule ?",
    answer: "La merule se propage de deux facons : par ses filaments (syrrotes) qui peuvent traverser les murs de pierre et de beton pour atteindre de nouvelles sources de bois, et par ses spores qui sont transportees par l'air. Ses filaments peuvent parcourir plusieurs metres a travers les materiaux non organiques pour trouver du bois a coloniser, ce qui la rend particulierement difficile a contenir.",
  },
  {
    question: "Combien coute le traitement de la merule ?",
    answer: "Le traitement de la merule est couteux en raison de sa complexite. Le diagnostic coute entre 300 et 800 EUR (gratuit chez MurExpert en cas de traitement). Le traitement chimique (injection fongicide) coute entre 30 et 80 EUR par m2. Le remplacement des bois detruits est en supplement. Pour une maison standard, le budget total se situe entre 5 000 et 30 000 EUR selon l'etendue de l'infestation.",
  },
  {
    question: "La merule est-elle obligatoirement declaree lors d'une vente ?",
    answer: "Oui, depuis la loi ALUR de 2014, la presence de merule doit etre declaree lors de la vente d'un bien immobilier dans les zones a risque definies par arrete prefectoral. Le vendeur doit informer l'acheteur de la presence connue de merule. Un diagnostic merule est obligatoire dans certains departements (Finistere, Cotes-d'Armor, Nord, etc.).",
  },
  {
    question: "Quelles regions de France sont les plus touchees par la merule ?",
    answer: "La merule est presente partout en France mais certaines regions sont plus touchees : la Bretagne (surtout le Finistere et les Cotes-d'Armor), le Nord-Pas-de-Calais, la Normandie, l'Ile-de-France et les Hauts-de-France. Ces regions combinent un climat humide et un parc immobilier ancien, deux conditions favorables au developpement de la merule.",
  },
  {
    question: "Peut-on traiter la merule soi-meme ?",
    answer: "Non, il est fortement deconseille de traiter la merule soi-meme. Ce champignon necessite un traitement professionnel rigoureux. Un traitement incomplet permet a la merule de se propager dans les zones non traitees. Le professionnel doit identifier l'etendue exacte de l'infestation (souvent invisible), retirer tous les materiaux contamines et traiter chimiquement une zone large autour de l'infestation.",
  },
];

const howToSteps = [
  { name: "Diagnostic et delimitation", text: "Un expert inspecte le batiment pour identifier l'etendue exacte de l'infestation. Des sondages dans les murs, planchers et charpente sont necessaires car la merule se developpe souvent dans des zones cachees." },
  { name: "Traitement de la cause d'humidite", text: "La merule ne peut se developper sans humidite. La cause est identifiee et traitee : ventilation, infiltrations, remontees capillaires, fuites. Sans eliminer l'humidite, la merule reviendra." },
  { name: "Retrait des materiaux contamines", text: "Tous les bois et materiaux contamines sont retires sur une distance d'au moins 1 metre au-dela de la zone visible d'infestation. Les debris sont evacues dans des sacs etanches pour eviter la propagation des spores." },
  { name: "Traitement fongicide", text: "Les murs, les maconneries et les bois sains a proximite sont traites avec un fongicide professionnel par injection et pulverisation. Un traitement preventif est applique sur toutes les pieces de bois neuves." },
  { name: "Reconstruction et suivi", text: "Les elements retires sont remplaces par du bois traite. Un suivi regulier est effectue pendant 2 ans pour verifier l'absence de recidive. Le traitement est couvert par la garantie decennale." },
];

export default function MerulePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: "https://murexpert.fr" },
              { name: "Merule", url: "https://murexpert.fr/merule/" },
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
              title: "Merule : Identification, Traitement et Prevention",
              description: "La merule (Serpula lacrymans) est un champignon destructeur du bois. Identification, traitement et prevention.",
              url: "https://murexpert.fr/merule/",
              datePublished: "2026-03-16",
              dateModified: "2026-03-16",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            howToJsonLd("Comment traiter la merule dans une maison", howToSteps, "P14D")
          ),
        }}
      />

      {/* Breadcrumb */}
      <div className="bg-beige-50 border-b border-beige-200">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A] font-medium">M&eacute;rule</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-beige-50 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-red-100 px-4 py-1.5 text-sm font-semibold text-red-700">
              Danger structurel
            </span>
            <h1
              className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12] lg:text-[3.25rem] lg:leading-[1.08]"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
            >
              M&eacute;rule : le champignon qui d&eacute;vore le bois de votre maison
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#6B6B6B]">
              La m&eacute;rule (Serpula lacrymans) est surnomm&eacute;e &laquo; la l&egrave;pre des maisons &raquo;.
              Ce champignon destructeur s&apos;attaque aux charpentes, planchers et poutres en bois.
              D&eacute;tection pr&eacute;coce et traitement rapide sont essentiels.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white transition-all duration-300 hover:scale-[1.03]">
                Diagnostic gratuit m&eacute;rule <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+33745881675" className="inline-flex items-center gap-2 text-sm font-medium text-[#E8952D]">
                <Phone className="h-4 w-4" /> 07 45 88 16 75
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="space-y-12">

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Qu&apos;est-ce que la m&eacute;rule ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La m&eacute;rule (Serpula lacrymans) est un champignon lignivore, c&apos;est-&agrave;-dire qu&apos;il se nourrit de la cellulose contenue dans le bois. Souvent qualifi&eacute;e de &laquo; cancer du b&acirc;timent &raquo; ou &laquo; l&egrave;pre des maisons &raquo;, la m&eacute;rule est le champignon le plus destructeur pour les constructions en Europe. Elle peut r&eacute;duire une poutre porteuse en poussi&egrave;re en quelques mois.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Ce champignon se d&eacute;veloppe dans les environnements humides (taux d&apos;humidit&eacute; du bois sup&eacute;rieur &agrave; 20%), sombres et mal ventil&eacute;s. Les temp&eacute;ratures id&eacute;ales pour sa croissance se situent entre 20 et 26&deg;C, mais elle peut survivre &agrave; des temp&eacute;ratures extr&ecirc;mes en entrant en dormance. Elle peut reprendre sa croissance d&egrave;s que les conditions redeviennent favorables.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                La m&eacute;rule est particuli&egrave;rement redoutable car elle peut traverser les murs de pierre et de b&eacute;ton gr&acirc;ce &agrave; ses filaments (syrrotes) pour atteindre de nouvelles sources de bois. Elle peut ainsi se propager d&apos;une pi&egrave;ce &agrave; l&apos;autre, voire d&apos;un logement &agrave; l&apos;autre dans un immeuble.
              </p>
            </div>

            <div className="rounded-xl bg-red-50 border border-red-200 p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm text-red-800">
                  <strong>Urgent :</strong> la m&eacute;rule peut progresser de plusieurs centim&egrave;tres par semaine. Plus le traitement est tardif, plus les d&eacute;g&acirc;ts structurels seront importants et co&ucirc;teux. Si vous suspectez la pr&eacute;sence de m&eacute;rule, faites appel &agrave; un professionnel imm&eacute;diatement.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Comment reconna&icirc;tre la m&eacute;rule ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La m&eacute;rule passe par plusieurs stades de d&eacute;veloppement, chacun avec des caract&eacute;ristiques visuelles distinctes. Savoir la reconna&icirc;tre &agrave; un stade pr&eacute;coce peut sauver votre maison de d&eacute;g&acirc;ts consid&eacute;rables :
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">Stade 1 : Myc&eacute;lium (filaments)</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Au stade initial, la m&eacute;rule se pr&eacute;sente sous forme de filaments blancs cotonneux, semblables &agrave; de la ouate ou des toiles d&apos;araign&eacute;e. Ces filaments se d&eacute;veloppent sur le bois et peuvent traverser les joints de mortier et les murs. Ils sont parfois tr&egrave;s discrets et passent inaper&ccedil;us.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">Stade 2 : Syrrotes (cordons)</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Les filaments se regroupent en cordons plus &eacute;pais (syrrotes) qui peuvent atteindre plusieurs millim&egrave;tres de diam&egrave;tre. Ces cordons, gris&acirc;tres, sont visibles sur les murs et permettent au champignon de transporter l&apos;eau &agrave; distance pour coloniser du bois sec. Ils peuvent traverser des murs de pierre de plus de 50 cm.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">Stade 3 : Fructification (carpophore)</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Au stade avanc&eacute;, la m&eacute;rule produit une fructification en forme de galette ou de cr&ecirc;pe, de couleur brun-rouille orang&eacute; avec un bord blanc. Cette fructification peut mesurer de quelques centim&egrave;tres &agrave; plus d&apos;un m&egrave;tre. Elle lib&egrave;re des millions de spores brun-rouge qui se d&eacute;posent en fine poussi&egrave;re sur les surfaces environnantes.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">Signes sur le bois</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Le bois attaqu&eacute; par la m&eacute;rule pr&eacute;sente une pourriture cubique caract&eacute;ristique : il se fissure en petits cubes r&eacute;guliers et devient brun fonc&eacute;. Le bois perd toute r&eacute;sistance et s&apos;effrite facilement entre les doigts. Dans les cas avanc&eacute;s, une simple pression du doigt suffit &agrave; traverser une poutre.
              </p>
            </div>

            <div className="rounded-2xl bg-beige-100 p-6 sm:p-8">
              <p className="text-lg font-semibold text-[#1A1A1A] mb-2">Suspicion de m&eacute;rule ?</p>
              <p className="text-sm text-[#6B6B6B] mb-4">Chaque jour compte. Un expert MurExpert se d&eacute;place sous 48h pour un diagnostic complet. Gratuit et sans engagement.</p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-6 py-2.5 text-sm font-semibold text-white hover:scale-[1.03] transition-all">
                Diagnostic urgent gratuit <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Les causes de la m&eacute;rule
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La m&eacute;rule a besoin de trois conditions pour se d&eacute;velopper : de l&apos;humidit&eacute;, du bois et un manque de ventilation. Les causes les plus fr&eacute;quentes d&apos;apparition de la m&eacute;rule sont :
              </p>
              <ul className="space-y-3 mb-4">
                {[
                  "Infiltration d'eau par la toiture, les murs ou les fenetres",
                  "Remontees capillaires dans les maisons anciennes",
                  "Fuite de canalisation non detectee",
                  "Manque de ventilation (caves fermees, combles non ventiles)",
                  "Degat des eaux mal seche",
                  "Condensation chronique dans les pieces mal chauffees",
                  "Travaux d'isolation qui empechent le bois de respirer",
                  "Confinement excessif du logement (fenetres etanches sans VMC)",
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
                Comment traiter la m&eacute;rule ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Le traitement de la m&eacute;rule est une op&eacute;ration complexe qui doit &ecirc;tre r&eacute;alis&eacute;e par un professionnel certifi&eacute;. Un traitement incomplet ou mal r&eacute;alis&eacute; permet &agrave; la m&eacute;rule de reprendre sa croissance. Voici les &eacute;tapes d&apos;un traitement professionnel :
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">1. Diagnostic complet</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Un expert r&eacute;alise une inspection approfondie pour d&eacute;limiter pr&eacute;cis&eacute;ment la zone infest&eacute;e. Des sondages sont effectu&eacute;s dans les murs, planchers et charpente. La cause de l&apos;humidit&eacute; est identifi&eacute;e. Ce diagnostic est essentiel car la m&eacute;rule est souvent bien plus &eacute;tendue que ce qui est visible.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">2. Traitement de l&apos;humidit&eacute;</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La cause de l&apos;humidit&eacute; doit &ecirc;tre &eacute;limin&eacute;e avant tout : r&eacute;paration de la toiture, traitement des <Link href="/remontee-capillaire/" className="text-[#E8952D] underline hover:no-underline">remont&eacute;es capillaires</Link>, <Link href="/traitement-humidite/" className="text-[#E8952D] underline hover:no-underline">am&eacute;lioration de la ventilation</Link>. Sans assecher l&apos;environnement, le traitement chimique sera inefficace.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">3. Retrait des bois contamin&eacute;s</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Tous les bois contamin&eacute;s sont retir&eacute;s sur au moins 1 m&egrave;tre au-del&agrave; de la zone visible d&apos;infestation. Les d&eacute;bris sont &eacute;vacu&eacute;s dans des sacs &eacute;tanches et incin&eacute;r&eacute;s. Les enduits, plâtres et mat&eacute;riaux touch&eacute;s par les filaments sont &eacute;galement retir&eacute;s.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">4. Traitement chimique</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Les murs et ma&ccedil;onneries &agrave; proximit&eacute; sont trait&eacute;s par injection de fongicide sous pression. Les bois sains conserv&eacute;s re&ccedil;oivent un traitement pr&eacute;ventif par pulv&eacute;risation et injection. Les pi&egrave;ces de bois neuves utilis&eacute;es pour la reconstruction sont &eacute;galement trait&eacute;es.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">5. Reconstruction et suivi</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Les &eacute;l&eacute;ments retir&eacute;s sont remplac&eacute;s par du bois trait&eacute; autoclave. Un suivi r&eacute;gulier est effectu&eacute; pendant 2 ans pour s&apos;assurer de l&apos;absence de r&eacute;cidive. Le traitement est couvert par la garantie d&eacute;cennale.
              </p>
            </div>

            {/* Prix */}
            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Prix du traitement de la m&eacute;rule
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
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Diagnostic m&eacute;rule</td><td className="px-5 py-3 text-[#E8952D] font-semibold">Gratuit*</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Traitement fongicide (murs + bois)</td><td className="px-5 py-3 text-[#6B6B6B]">30 - 80 EUR/m&sup2;</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Retrait bois contamin&eacute;s</td><td className="px-5 py-3 text-[#6B6B6B]">Sur devis</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Remplacement charpente/poutres</td><td className="px-5 py-3 text-[#6B6B6B]">Sur devis</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Budget total moyen</td><td className="px-5 py-3 text-[#6B6B6B]">5 000 - 30 000 EUR</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#6B6B6B]">* Gratuit en cas de traitement confi&eacute; &agrave; MurExpert</p>
            </div>

            {/* Obligations legales */}
            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Obligations l&eacute;gales li&eacute;es &agrave; la m&eacute;rule
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La loi ALUR (2014) impose plusieurs obligations en mati&egrave;re de m&eacute;rule :
              </p>
              <ul className="space-y-3 mb-4">
                {[
                  "Declaration obligatoire en mairie de la presence de merule dans votre bien",
                  "Information obligatoire de l'acheteur lors d'une vente immobiliere",
                  "Diagnostic merule obligatoire dans les zones a risque (arrete prefectoral)",
                  "Le diagnostic doit etre realise par un professionnel certifie",
                  "Le vendeur peut voir sa responsabilite engagee en cas de dissimulation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E8952D]" />
                    <span className="text-[0.9375rem] text-[#6B6B6B]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-beige-100 p-8 sm:p-10 text-center">
              <h2 className="text-2xl text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Suspicion de m&eacute;rule ? Agissez vite.
              </h2>
              <p className="text-[#6B6B6B] mb-6 max-w-lg mx-auto">
                Chaque semaine de retard aggrave les d&eacute;g&acirc;ts structurels. Diagnostic gratuit, intervention rapide.
              </p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white hover:scale-[1.03] transition-all">
                Demander mon diagnostic gratuit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Internal links */}
            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Pages associ&eacute;es
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Moisissure sur les murs", href: "/moisissure-mur/" },
                  { title: "Moisissure noire", href: "/moisissure-noire/" },
                  { title: "Cave humide", href: "/cave-humide/" },
                  { title: "Remontee capillaire", href: "/remontee-capillaire/" },
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

            {/* FAQ */}
            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-8" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Questions fr&eacute;quentes sur la m&eacute;rule
              </h2>
              <Accordion items={faqItems} />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
