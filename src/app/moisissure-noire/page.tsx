import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, AlertTriangle, ChevronRight } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { breadcrumbJsonLd, faqJsonLd, articleJsonLd, howToJsonLd, medicalWebPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Moisissure Noire : Dangers, Identification et Traitement",
  description:
    "La moisissure noire (Stachybotrys) est la plus dangereuse pour la sante. Decouvrez comment l'identifier, ses risques sanitaires et les traitements professionnels pour l'eliminer.",
};

const faqItems = [
  {
    question: "La moisissure noire est-elle dangereuse ?",
    answer: "Oui, la moisissure noire (Stachybotrys chartarum) est consideree comme la moisissure la plus dangereuse pour la sante. Elle produit des mycotoxines qui provoquent des problemes respiratoires graves, des saignements de nez, des maux de tete chroniques, de la fatigue extreme et des troubles neurologiques. Une exposition prolongee peut avoir des consequences irreversibles, surtout chez les enfants.",
  },
  {
    question: "Comment reconnaitre la moisissure noire ?",
    answer: "La moisissure noire (Stachybotrys) se presente sous forme de taches noires ou vert tres fonce, avec un aspect visqueux ou gluant au toucher. Elle degage souvent une forte odeur de moisi. Elle se developpe sur les materiaux riches en cellulose (placoplatre, papier peint, bois) dans les zones tres humides. Contrairement aux moisissures courantes, elle est plus epaisse et ne s'effrite pas facilement.",
  },
  {
    question: "Peut-on enlever la moisissure noire soi-meme ?",
    answer: "Non, il est fortement deconseille d'enlever la moisissure noire soi-meme. Le nettoyage libere des spores et des mycotoxines dans l'air, ce qui aggrave l'exposition. Les professionnels utilisent des equipements de protection (masque FFP3, combinaison) et des techniques de confinement pour eviter la dissemination des spores. Faites appel a un expert pour tout traitement de moisissure noire.",
  },
  {
    question: "Quels sont les symptomes d'une exposition a la moisissure noire ?",
    answer: "Les symptomes d'une exposition a la moisissure noire incluent : toux persistante, difficultes respiratoires, saignements de nez, maux de tete chroniques, fatigue extreme, irritation des yeux et de la gorge, eruptions cutanees, problemes de concentration et de memoire. En cas d'exposition prolongee, consultez un medecin et faites traiter le probleme en urgence.",
  },
  {
    question: "Combien de temps faut-il pour que la moisissure noire se developpe ?",
    answer: "La moisissure noire peut commencer a se developper en 24 a 48 heures sur une surface humide. Cependant, elle met generalement 1 a 2 semaines pour devenir visible a l'oeil nu. La moisissure noire (Stachybotrys) se developpe plus lentement que les autres moisissures mais est beaucoup plus resistante. Elle necessite un taux d'humidite superieur a 70% pour prosperer.",
  },
  {
    question: "La moisissure noire peut-elle revenir apres traitement ?",
    answer: "Non, si le traitement est correctement realise. Un professionnel traite la cause de l'humidite (ventilation, isolation, infiltration) puis elimine la moisissure noire avec des produits fongicides professionnels. Les surfaces sont ensuite protegees avec un enduit anti-moisissure. Chez MurExpert, les traitements sont garantis 10 ans (garantie decennale).",
  },
  {
    question: "Faut-il quitter le logement en cas de moisissure noire ?",
    answer: "En cas de grande surface de moisissure noire (plus de 1 m2) dans une piece habitee, il est recommande de dormir dans une autre piece en attendant le traitement, surtout pour les enfants, les personnes asthmatiques et les femmes enceintes. Pour de petites surfaces, une aeration maximale et un traitement rapide sont suffisants.",
  },
  {
    question: "Combien coute le traitement de la moisissure noire ?",
    answer: "Le traitement de la moisissure noire coute entre 20 et 50 EUR par m2 pour le traitement fongicide professionnel (plus cher que les moisissures classiques en raison des precautions necessaires). Le traitement de la cause (VMI, injection resine, isolation) s'ajoute, entre 2 000 et 5 000 EUR selon le probleme. Le diagnostic est gratuit chez MurExpert.",
  },
];

const howToSteps = [
  { name: "Diagnostic et identification", text: "Un technicien identifie le type de moisissure et la cause de l'humidite. La moisissure noire (Stachybotrys) necessite un protocole de traitement specifique plus rigoureux." },
  { name: "Confinement de la zone", text: "La zone affectee est isolee avec des baches et du ruban adhesif pour eviter la dissemination des spores pendant le traitement. Un extracteur d'air avec filtre HEPA peut etre installe." },
  { name: "Traitement de la cause", text: "Installation d'une VMC/VMI pour la condensation, reparation des infiltrations, injection de resine pour les remontees capillaires. La cause de l'humidite doit etre eliminee." },
  { name: "Elimination de la moisissure", text: "Application d'un fongicide professionnel puissant, retrait des materiaux contamines si necessaire (placoplatre, papier peint). Les techniciens portent des equipements de protection complets." },
  { name: "Desinfection et protection", text: "Desinfection complete de la zone, application d'un enduit anti-moisissure et remise en etat. Suivi post-traitement pour verifier l'absence de recidive." },
];

export default function MoisissureNoirePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: "https://murexpert.fr" },
              { name: "Moisissure mur", url: "https://murexpert.fr/moisissure-mur/" },
              { name: "Moisissure noire", url: "https://murexpert.fr/moisissure-noire/" },
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
              title: "Moisissure Noire : Dangers, Identification et Traitement",
              description: "La moisissure noire (Stachybotrys) est la plus dangereuse. Decouvrez comment l'identifier et l'eliminer.",
              url: "https://murexpert.fr/moisissure-noire/",
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
            howToJsonLd("Comment eliminer la moisissure noire", howToSteps, "P5D")
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageJsonLd({
              name: "Dangers de la moisissure noire pour la sante",
              description: "Risques sanitaires lies a l'exposition a la moisissure noire (Stachybotrys chartarum) et mycotoxines.",
              url: "https://murexpert.fr/moisissure-noire/",
              lastReviewed: "2026-03-16",
            })
          ),
        }}
      />

      {/* Breadcrumb */}
      <div className="bg-beige-50 border-b border-beige-200">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/moisissure-mur/" className="hover:text-[#1A1A1A] transition-colors">Moisissure mur</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A] font-medium">Moisissure noire</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-beige-50 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-red-100 px-4 py-1.5 text-sm font-semibold text-red-700">
              Danger sanitaire
            </span>
            <h1
              className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12] lg:text-[3.25rem] lg:leading-[1.08]"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
            >
              Moisissure noire : la plus dangereuse des moisissures
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#6B6B6B]">
              La moisissure noire (Stachybotrys chartarum) produit des mycotoxines extr&ecirc;mement nocives.
              Elle repr&eacute;sente un danger r&eacute;el pour votre sant&eacute; et celle de votre famille.
              Identification, risques et traitement professionnel.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white transition-all duration-300 hover:scale-[1.03]">
                Diagnostic gratuit urgent <ArrowRight className="h-4 w-4" />
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
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                Qu&apos;est-ce que la moisissure noire ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La moisissure noire d&eacute;signe principalement le Stachybotrys chartarum, un champignon microscopique qui se d&eacute;veloppe dans les environnements tr&egrave;s humides. Contrairement aux moisissures courantes (Aspergillus, Cladosporium, Penicillium), le Stachybotrys produit des mycotoxines (trichothecenes) particuli&egrave;rement nocives pour la sant&eacute; humaine.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Cette moisissure se d&eacute;veloppe exclusivement sur les mat&eacute;riaux riches en cellulose : placoplâtre (BA13), papier peint, carton, bois, faux plafonds. Elle n&eacute;cessite un taux d&apos;humidit&eacute; tr&egrave;s &eacute;lev&eacute; (sup&eacute;rieur &agrave; 70%) et une source d&apos;humidit&eacute; continue pendant plusieurs jours. Elle est souvent le signe d&apos;un d&eacute;g&acirc;t des eaux, d&apos;une infiltration grave ou d&apos;un probl&egrave;me d&apos;humidit&eacute; structurel non trait&eacute;.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Il est important de noter que toutes les moisissures noires ne sont pas du Stachybotrys. D&apos;autres esp&egrave;ces peuvent avoir une couleur noire sans &ecirc;tre aussi dangereuses. Seul un professionnel ou un laboratoire peut identifier formellement l&apos;esp&egrave;ce de moisissure. Dans le doute, traitez toute moisissure noire comme potentiellement dangereuse.
              </p>
            </div>

            <div>
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                La moisissure noire est-elle dangereuse ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Oui, la moisissure noire est consid&eacute;r&eacute;e comme la moisissure la plus dangereuse pour la sant&eacute; humaine. Le Stachybotrys chartarum produit des mycotoxines (substances toxiques) qui sont lib&eacute;r&eacute;es dans l&apos;air avec les spores. L&apos;inhalation, le contact cutan&eacute; ou l&apos;ingestion accidentelle de ces mycotoxines peuvent provoquer des probl&egrave;mes de sant&eacute; graves, allant des symptômes respiratoires &agrave; des troubles neurologiques.
              </p>
              <div className="rounded-xl bg-red-50 border border-red-200 p-5 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800">
                    <strong>Alerte sant&eacute; :</strong> la moisissure noire produit des mycotoxines qui peuvent provoquer des probl&egrave;mes respiratoires graves, des troubles neurologiques et des h&eacute;morragies pulmonaires chez les nourrissons. Consultez un m&eacute;decin en cas de symptômes et faites traiter le probl&egrave;me en urgence.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">Symptômes respiratoires</h3>
              <ul className="space-y-3 mb-4">
                {[
                  "Toux chronique et persistante",
                  "Difficultes respiratoires et essoufflement",
                  "Crises d'asthme declenchees ou aggravees",
                  "Saignements de nez recurrents",
                  "Douleurs thoraciques",
                  "Infections pulmonaires a repetition",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E8952D]" />
                    <span className="text-[0.9375rem] text-[#6B6B6B]">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">Symptômes neurologiques et g&eacute;n&eacute;raux</h3>
              <ul className="space-y-3 mb-4">
                {[
                  "Maux de tete chroniques et migraines",
                  "Fatigue extreme et epuisement",
                  "Problemes de concentration et de memoire",
                  "Vertiges et nausees",
                  "Irritation des yeux (rougeurs, larmoiements)",
                  "Eruptions cutanees et demangeaisons",
                  "Douleurs musculaires et articulaires",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E8952D]" />
                    <span className="text-[0.9375rem] text-[#6B6B6B]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA mid-article */}
            <div className="rounded-2xl bg-beige-100 p-6 sm:p-8">
              <p className="text-lg font-semibold text-[#1A1A1A] mb-2">Moisissure noire chez vous ?</p>
              <p className="text-sm text-[#6B6B6B] mb-4">N&apos;attendez pas. La moisissure noire repr&eacute;sente un danger imm&eacute;diat pour votre sant&eacute;. Diagnostic gratuit en urgence.</p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-6 py-2.5 text-sm font-semibold text-white hover:scale-[1.03] transition-all">
                Diagnostic urgent gratuit <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div>
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                Comment reconna&icirc;tre la moisissure noire ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La moisissure noire (Stachybotrys) se distingue des autres moisissures par plusieurs caract&eacute;ristiques visuelles et olfactives. Voici comment l&apos;identifier :
              </p>
              <ul className="space-y-3 mb-4">
                {[
                  "Couleur noire intense ou vert tres fonce, parfois avec des reflets brillants",
                  "Aspect visqueux ou gluant au toucher (contrairement aux moisissures poudreuses)",
                  "Odeur forte et desagreable de moisi, plus intense que les moisissures classiques",
                  "Se developpe en plaques denses, pas en points epars",
                  "Localisation sur les materiaux a base de cellulose (placoplatre, papier peint, bois)",
                  "Presence dans les zones tres humides (degat des eaux, infiltration, cave)",
                  "Ne s'effrite pas facilement quand on la gratte",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E8952D]" />
                    <span className="text-[0.9375rem] text-[#6B6B6B]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Attention : ne grattez pas et ne frottez pas la moisissure noire, cela lib&egrave;re des spores et des mycotoxines dans l&apos;air. Si vous suspectez de la moisissure noire, a&eacute;rez imm&eacute;diatement la pi&egrave;ce et contactez un professionnel.
              </p>
            </div>

            <div>
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                Comment &eacute;liminer la moisissure noire ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Le traitement de la moisissure noire est plus complexe et plus rigoureux que celui des moisissures courantes. Il n&eacute;cessite obligatoirement l&apos;intervention d&apos;un professionnel &eacute;quip&eacute;. Voici les &eacute;tapes d&apos;un traitement professionnel :
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">1. Confinement et protection</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La zone contamin&eacute;e est isol&eacute;e du reste du logement avec des b&acirc;ches et du ruban adh&eacute;sif pour &eacute;viter la diss&eacute;mination des spores. Un extracteur d&apos;air avec filtre HEPA peut &ecirc;tre install&eacute; pour maintenir la zone en d&eacute;pression. Les techniciens portent des &eacute;quipements de protection complets : masque FFP3, combinaison, gants, lunettes.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">2. Retrait des mat&eacute;riaux contamin&eacute;s</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Les mat&eacute;riaux profond&eacute;ment contamin&eacute;s (placoplâtre, papier peint, bois pourri) sont retir&eacute;s et &eacute;vacu&eacute;s dans des sacs &eacute;tanches. Le myc&eacute;lium de la moisissure noire p&eacute;n&egrave;tre profond&eacute;ment dans les mat&eacute;riaux poreux et ne peut pas &ecirc;tre simplement trait&eacute; en surface.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">3. Traitement de la cause</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Parall&egrave;lement, la cause de l&apos;humidit&eacute; est trait&eacute;e : r&eacute;paration de l&apos;infiltration, am&eacute;lioration de la ventilation, traitement des remont&eacute;es capillaires. Sans &eacute;liminer la source d&apos;humidit&eacute;, la moisissure noire reviendra in&eacute;vitablement.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">4. D&eacute;sinfection et remise en &eacute;tat</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                La zone est d&eacute;sinfect&eacute;e avec un fongicide professionnel puissant. Les surfaces sont trait&eacute;es avec un enduit anti-moisissure et remises en &eacute;tat (placoplâtre neuf, peinture). Un suivi post-traitement v&eacute;rifie l&apos;absence de r&eacute;cidive.
              </p>
            </div>

            <div>
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                O&ugrave; se d&eacute;veloppe la moisissure noire ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La moisissure noire se d&eacute;veloppe dans les environnements o&ugrave; l&apos;humidit&eacute; est tr&egrave;s &eacute;lev&eacute;e et permanente. Les endroits les plus fr&eacute;quents sont :
              </p>
              <ul className="space-y-3 mb-4">
                {[
                  "Derriere les meubles colles aux murs exterieurs",
                  "Dans les angles entre mur exterieur et plafond",
                  "Autour des fenetres (ponts thermiques)",
                  "Dans les salles de bain mal ventilees",
                  "Dans les caves et sous-sols humides",
                  "Derriere le placoplatre apres un degat des eaux",
                  "Sous les papiers peints dans les pieces humides",
                  "Dans les faux plafonds avec infiltration de toiture",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E8952D]" />
                    <span className="text-[0.9375rem] text-[#6B6B6B]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                La moisissure noire peut aussi se d&eacute;velopper dans des endroits cach&eacute;s : &agrave; l&apos;int&eacute;rieur des cloisons, dans les gaines de ventilation ou sous le parquet. Un diagnostic professionnel avec cam&eacute;ra thermique permet de d&eacute;tecter ces contaminations invisibles.
              </p>
            </div>

            {/* Prix */}
            <div>
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                Prix du traitement de la moisissure noire
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
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Diagnostic humidit&eacute;</td><td className="px-5 py-3 text-[#E8952D] font-semibold">Gratuit</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Traitement fongicide moisissure noire</td><td className="px-5 py-3 text-[#6B6B6B]">20 - 50 EUR/m&sup2;</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Retrait + remplacement placoplâtre</td><td className="px-5 py-3 text-[#6B6B6B]">40 - 80 EUR/m&sup2;</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Installation VMC / VMI</td><td className="px-5 py-3 text-[#6B6B6B]">2 500 - 4 000 EUR</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">R&eacute;paration infiltration</td><td className="px-5 py-3 text-[#6B6B6B]">500 - 3 000 EUR</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-beige-100 p-8 sm:p-10 text-center">
              <h2 className="text-2xl text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                &Eacute;liminez la moisissure noire en urgence
              </h2>
              <p className="text-[#6B6B6B] mb-6 max-w-lg mx-auto">
                La moisissure noire est un danger pour votre sant&eacute;. Diagnostic gratuit, intervention rapide.
              </p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white hover:scale-[1.03] transition-all">
                Demander mon diagnostic gratuit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Internal links */}
            <div>
              <h2 className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                En savoir plus
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Moisissure sur les murs", href: "/moisissure-mur/" },
                  { title: "Moisissure chambre", href: "/moisissure-chambre/" },
                  { title: "Moisissure plafond", href: "/moisissure-plafond/" },
                  { title: "Odeur d'humidite", href: "/odeur-humidite/" },
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
                Questions fr&eacute;quentes sur la moisissure noire
              </h2>
              <Accordion items={faqItems} />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
