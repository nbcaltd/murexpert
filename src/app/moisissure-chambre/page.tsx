import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, AlertTriangle, ChevronRight } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { breadcrumbJsonLd, faqJsonLd, articleJsonLd, howToJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Moisissure Chambre : Causes, Dangers et Solutions Efficaces",
  description:
    "Moisissure dans la chambre ? Decouvrez les causes, les risques pour la sante (sommeil, allergies, asthme) et les solutions professionnelles pour l'eliminer definitivement. Diagnostic gratuit.",
};

const faqItems = [
  {
    question: "La moisissure dans la chambre est-elle dangereuse pour la sante ?",
    answer: "Oui, la moisissure dans la chambre est particulierement dangereuse car vous y passez 7 a 8 heures par nuit. Vous inhalez des spores de moisissure pendant toute la duree du sommeil, ce qui provoque allergies, rhinite, asthme, toux chronique, maux de tete et fatigue. Les enfants et les personnes asthmatiques sont les plus a risque.",
  },
  {
    question: "Pourquoi ai-je de la moisissure dans ma chambre ?",
    answer: "La moisissure dans une chambre est principalement causee par un probleme de condensation. L'air chaud et humide (respiration nocturne, transpiration) entre en contact avec des surfaces froides (mur mal isole, pont thermique). Une ventilation insuffisante, une fenetre trop etanche sans VMC ou un manque de chauffage aggravent le probleme.",
  },
  {
    question: "Comment enlever la moisissure dans une chambre ?",
    answer: "Pour enlever la moisissure dans une chambre, il faut d'abord traiter la cause de l'humidite (ventilation, isolation). Un traitement fongicide professionnel elimine ensuite la moisissure en profondeur. Evitez la javel qui ne traite qu'en surface. Un enduit anti-moisissure est applique pour empecher la repousse. Seul un professionnel garantit un resultat durable.",
  },
  {
    question: "La moisissure dans la chambre peut-elle affecter le sommeil ?",
    answer: "Oui, la moisissure dans la chambre degrade significativement la qualite du sommeil. Les spores provoquent une congestion nasale, des eternuements, une toux nocturne et des difficultes respiratoires qui perturbent le sommeil. Des etudes montrent que les personnes exposees aux moisissures ont un sommeil plus fragmente et moins reparateur.",
  },
  {
    question: "Que faire si mon enfant a de la moisissure dans sa chambre ?",
    answer: "Si votre enfant a de la moisissure dans sa chambre, agissez immediatement. Les enfants sont plus sensibles aux spores de moisissure et ont un risque accru de developper de l'asthme. En attendant le traitement, deplacez l'enfant dans une autre piece, aerez la chambre 10 minutes matin et soir, et faites realiser un diagnostic professionnel en urgence.",
  },
  {
    question: "Pourquoi la moisissure apparait-elle derriere les meubles ?",
    answer: "La moisissure apparait derriere les meubles car l'air ne circule pas entre le meuble et le mur. La surface du mur reste froide et l'humidite se condense, creant un environnement ideal pour la moisissure. Laissez toujours 5 a 10 cm d'espace entre les meubles et les murs exterieurs, surtout dans les chambres.",
  },
  {
    question: "La moisissure peut-elle se cacher dans le matelas ?",
    answer: "Oui, la moisissure peut se developper dans le matelas si la chambre est trop humide. La transpiration nocturne et la condensation favorisent son developpement. Signes : odeur de moisi, taches sombres sous le matelas. Aerez le matelas regulierement, utilisez un sommier a lattes pour favoriser la ventilation, et traitez la cause de l'humidite dans la piece.",
  },
  {
    question: "Combien coute le traitement de la moisissure dans une chambre ?",
    answer: "Le traitement de la moisissure dans une chambre coute entre 500 et 4 000 EUR selon la cause. Un traitement fongicide seul coute 15-30 EUR/m2. Si la cause est un probleme de ventilation, l'installation d'une VMI coute 2 500-4 000 EUR. Si c'est un defaut d'isolation, le cout depend de la surface. Le diagnostic est gratuit chez MurExpert.",
  },
];

const howToSteps = [
  { name: "Identifier la source d'humidite", text: "Un technicien expert mesure le taux d'humidite dans les murs et l'air ambiant, utilise une camera thermique pour detecter les ponts thermiques et identifie la cause exacte (condensation, infiltration, remontee capillaire)." },
  { name: "Traiter la cause de l'humidite", text: "Selon la cause identifiee : installation d'une VMC ou VMI pour la condensation, amelioration de l'isolation pour les ponts thermiques, reparation des infiltrations si necessaire." },
  { name: "Appliquer un traitement fongicide professionnel", text: "Application d'un produit fongicide specialise qui penetre en profondeur pour eliminer completement la moisissure et ses racines (mycelium) dans le support." },
  { name: "Remettre en etat les surfaces", text: "Application d'un enduit anti-moisissure sur les murs traites, puis remise en peinture avec une peinture adaptee aux pieces humides." },
  { name: "Mettre en place les bonnes pratiques", text: "Aerer la chambre 10 minutes matin et soir, maintenir une temperature de 18-19 degres, espacer les meubles des murs, ne pas secher de linge dans la chambre." },
];

export default function MoisissureChambrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: "https://murexpert.fr" },
              { name: "Moisissure mur", url: "https://murexpert.fr/moisissure-mur/" },
              { name: "Moisissure chambre", url: "https://murexpert.fr/moisissure-chambre/" },
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
              title: "Moisissure dans la chambre : causes, dangers et solutions",
              description: "Moisissure dans la chambre ? Decouvrez les causes, les risques pour la sante et les solutions professionnelles pour l'eliminer definitivement.",
              url: "https://murexpert.fr/moisissure-chambre/",
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
            howToJsonLd("Comment enlever la moisissure dans une chambre", howToSteps, "P3D")
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
            <span className="text-[#1A1A1A] font-medium">Moisissure chambre</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-beige-50 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#E8952D]/10 px-4 py-1.5 text-sm font-semibold text-[#E8952D]">
              Probl&egrave;me d&apos;humidit&eacute;
            </span>
            <h1
              className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12] lg:text-[3.25rem] lg:leading-[1.08]"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
            >
              Moisissure dans la chambre : causes, dangers et solutions
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#6B6B6B]">
              La moisissure dans une chambre est un probl&egrave;me de sant&eacute; s&eacute;rieux, surtout pour les enfants.
              Vous respirez des spores nocives pendant 7 &agrave; 8 heures chaque nuit. D&eacute;couvrez comment identifier
              la cause et &eacute;liminer la moisissure d&eacute;finitivement.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/diagnostic-gratuit/"
                className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
              >
                Diagnostic gratuit moisissure
                <ArrowRight className="h-4 w-4" />
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

            {/* Intro */}
            <div>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La moisissure dans une chambre &agrave; coucher est un probl&egrave;me fr&eacute;quent qui touche des milliers de logements en France. Contrairement &agrave; la moisissure dans une salle de bain ou une cuisine, la moisissure dans une chambre repr&eacute;sente un risque sanitaire majeur car vous y passez en moyenne un tiers de votre vie. Pendant 7 &agrave; 8 heures de sommeil, vous inhalez en continu les spores de moisissure en suspension dans l&apos;air, ce qui multiplie les risques d&apos;allergies, d&apos;asthme et d&apos;infections respiratoires.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Ce probl&egrave;me est particuli&egrave;rement pr&eacute;occupant dans les chambres d&apos;enfants : leur syst&egrave;me immunitaire en d&eacute;veloppement les rend plus vuln&eacute;rables aux effets nocifs des moisissures. Les &eacute;tudes scientifiques montrent que l&apos;exposition aux moisissures dans la petite enfance augmente significativement le risque de d&eacute;velopper de l&apos;asthme chronique.
              </p>
            </div>

            {/* Section: Causes */}
            <div>
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                Pourquoi ai-je de la moisissure dans ma chambre ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                La moisissure dans une chambre est principalement caus&eacute;e par un exc&egrave;s d&apos;humidit&eacute; li&eacute; &agrave; la condensation. L&apos;air chaud et humide produit par la respiration nocturne et la transpiration entre en contact avec des surfaces froides (mur mal isol&eacute;, pont thermique pr&egrave;s des fen&ecirc;tres), cr&eacute;ant les conditions id&eacute;ales pour le d&eacute;veloppement des champignons. Une ventilation insuffisante aggrave consid&eacute;rablement le probl&egrave;me.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">La condensation : cause n&deg;1</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Chaque nuit, une personne endormie produit environ 0,5 litre de vapeur d&apos;eau par sa respiration et sa transpiration. Pour un couple, c&apos;est 1 litre d&apos;eau lib&eacute;r&eacute; dans l&apos;air de la chambre chaque nuit. Si la pi&egrave;ce n&apos;est pas suffisamment ventil&eacute;e ou si les murs sont mal isol&eacute;s, cette vapeur d&apos;eau se condense sur les surfaces froides (angles des murs, contour des fen&ecirc;tres, derri&egrave;re les meubles) et la moisissure s&apos;installe.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">Les ponts thermiques</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Les ponts thermiques sont des zones o&ugrave; l&apos;isolation est interrompue : angles entre mur ext&eacute;rieur et plafond, contour des fen&ecirc;tres, jonction entre plancher et mur ext&eacute;rieur. Ces zones sont plus froides que le reste du mur et favorisent la condensation. La moisissure appara&icirc;t typiquement dans les angles sup&eacute;rieurs de la chambre, pr&egrave;s des fen&ecirc;tres ou derri&egrave;re les meubles plac&eacute;s contre un mur ext&eacute;rieur.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">Le manque de ventilation</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Les chambres modernes avec des fen&ecirc;tres &agrave; double ou triple vitrage tr&egrave;s &eacute;tanches ne permettent plus le renouvellement naturel de l&apos;air. Sans VMC (Ventilation M&eacute;canique Contr&ocirc;l&eacute;e) ni a&eacute;ration r&eacute;guli&egrave;re, l&apos;humidit&eacute; s&apos;accumule et la moisissure prosp&egrave;re. C&apos;est un probl&egrave;me tr&egrave;s courant dans les logements r&eacute;nov&eacute;s o&ugrave; les fen&ecirc;tres ont &eacute;t&eacute; chang&eacute;es sans installer de VMC.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">Les remont&eacute;es capillaires</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Dans les maisons anciennes, les <Link href="/remontee-capillaire/" className="text-[#E8952D] underline hover:no-underline">remont&eacute;es capillaires</Link> peuvent provoquer de la moisissure sur la partie basse des murs de la chambre, surtout au rez-de-chauss&eacute;e. L&apos;eau du sol remonte dans les murs et cr&eacute;e un environnement humide permanent propice &agrave; la moisissure.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">Les infiltrations d&apos;eau</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Une infiltration par la toiture, une fa&ccedil;ade fissur&eacute;e ou un joint de fen&ecirc;tre d&eacute;faillant peut provoquer une humidit&eacute; localis&eacute;e dans la chambre. L&apos;eau s&apos;infiltre dans le mur et cr&eacute;e des zones humides o&ugrave; la moisissure se d&eacute;veloppe rapidement. Ces infiltrations sont parfois difficiles &agrave; d&eacute;tecter sans appareils professionnels.
              </p>
            </div>

            {/* CTA mid-article */}
            <div className="rounded-2xl bg-beige-100 p-6 sm:p-8">
              <p className="text-lg font-semibold text-[#1A1A1A] mb-2">Moisissure dans votre chambre ?</p>
              <p className="text-sm text-[#6B6B6B] mb-4">Un expert MurExpert identifie la cause exacte et vous propose la solution adapt&eacute;e. Diagnostic gratuit, sans engagement. Intervention sous 48h.</p>
              <Link href="/diagnostic-gratuit/" className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-6 py-2.5 text-sm font-semibold text-white hover:scale-[1.03] transition-all">
                Demander mon diagnostic <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Section: Dangers */}
            <div>
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                La moisissure dans la chambre est-elle dangereuse ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Oui, la moisissure dans la chambre est particuli&egrave;rement dangereuse car vous y passez de longues heures en continu pendant le sommeil. L&apos;exposition prolong&eacute;e aux spores de moisissure provoque des r&eacute;actions allergiques, aggrave l&apos;asthme et peut causer des infections respiratoires. L&apos;Organisation Mondiale de la Sant&eacute; (OMS) classe l&apos;exposition aux moisissures comme un facteur de risque majeur pour les maladies respiratoires.
              </p>
              <div className="rounded-xl bg-amber-50 border border-amber-200 p-5 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800">
                    <strong>Attention :</strong> les enfants expos&eacute;s &agrave; la moisissure dans leur chambre ont un risque 2 &agrave; 3 fois plus &eacute;lev&eacute; de d&eacute;velopper de l&apos;asthme chronique.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">Risques respiratoires</h3>
              <ul className="space-y-3 mb-4">
                {[
                  "Rhinite allergique (nez bouche, eternuements, ecoulements)",
                  "Crises d'asthme et aggravation de l'asthme existant",
                  "Toux chronique, surtout au reveil",
                  "Bronchite et infections respiratoires a repetition",
                  "Congestion nasale perturbant le sommeil",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E8952D]" />
                    <span className="text-[0.9375rem] text-[#6B6B6B]">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">Autres effets sur la sant&eacute;</h3>
              <ul className="space-y-3 mb-4">
                {[
                  "Fatigue chronique et sommeil non reparateur",
                  "Maux de tete recurrents au reveil",
                  "Irritation des yeux (rouges, qui grattent, qui pleurent)",
                  "Reactions cutanees (eczema, demangeaisons)",
                  "Baisse des defenses immunitaires",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E8952D]" />
                    <span className="text-[0.9375rem] text-[#6B6B6B]">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">Populations &agrave; risque</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Les personnes les plus vuln&eacute;rables sont les nourrissons et les enfants en bas &acirc;ge (syst&egrave;me immunitaire en d&eacute;veloppement), les personnes asthmatiques, les personnes &acirc;g&eacute;es, les femmes enceintes et les personnes immunod&eacute;prim&eacute;es. Si une personne vuln&eacute;rable dort dans une chambre avec de la moisissure, le traitement doit &ecirc;tre consid&eacute;r&eacute; comme urgent.
              </p>
            </div>

            {/* Section: How to remove */}
            <div>
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                Comment enlever la moisissure dans une chambre ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Pour enlever la moisissure dans une chambre de mani&egrave;re durable, il faut imp&eacute;rativement traiter la cause de l&apos;humidit&eacute; en plus de la moisissure visible. Un simple nettoyage de surface ne fait que retarder le probl&egrave;me de quelques semaines. Voici les &eacute;tapes d&apos;un traitement professionnel efficace :
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">&Eacute;tape 1 : Diagnostic de la cause</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Un technicien expert r&eacute;alise un diagnostic complet de la chambre et de l&apos;habitation : mesure du taux d&apos;humidit&eacute; dans les murs et l&apos;air ambiant avec un hygrom&egrave;tre professionnel, d&eacute;tection des ponts thermiques avec une cam&eacute;ra thermique, v&eacute;rification de la ventilation existante. Ce diagnostic permet d&apos;identifier avec certitude la cause du probl&egrave;me.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">&Eacute;tape 2 : Traitement de la cause</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Selon la cause identifi&eacute;e, le technicien met en oeuvre la solution adapt&eacute;e : installation d&apos;une VMC ou VMI pour les probl&egrave;mes de condensation, am&eacute;lioration de l&apos;isolation pour les ponts thermiques, injection de r&eacute;sine pour les remont&eacute;es capillaires, r&eacute;paration des infiltrations. Sans traiter la cause, la moisissure revient syst&eacute;matiquement.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">&Eacute;tape 3 : &Eacute;limination de la moisissure</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Un traitement fongicide professionnel est appliqu&eacute; pour &eacute;liminer la moisissure en profondeur, y compris le myc&eacute;lium invisible dans le support. Les surfaces sont ensuite trait&eacute;es avec un enduit anti-moisissure et remises en peinture.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">&Eacute;tape 4 : Pr&eacute;vention</h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Le technicien vous donne des conseils personnalis&eacute;s : a&eacute;rer la chambre 10 minutes matin et soir, maintenir la temp&eacute;rature &agrave; 18-19&deg;C, &eacute;viter de s&eacute;cher du linge dans la chambre, espacer les meubles des murs ext&eacute;rieurs d&apos;au moins 5 cm, ne pas obstruer les bouches de ventilation.
              </p>
            </div>

            {/* Section: Prevention */}
            <div>
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                Comment &eacute;viter le retour de la moisissure ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Une fois la cause trait&eacute;e, adoptez ces bonnes pratiques pour &eacute;viter tout retour de la moisissure dans votre chambre. La pr&eacute;vention passe par le contr&ocirc;le de l&apos;humidit&eacute; et une bonne ventilation :
              </p>
              <ul className="space-y-3 mb-4">
                {[
                  "Aerez la chambre au moins 10 minutes chaque matin en ouvrant la fenetre en grand",
                  "Maintenez une temperature constante de 18-19 degres dans la chambre",
                  "Ne sechez jamais de linge dans la chambre a coucher",
                  "Laissez 5 a 10 cm d'espace entre les meubles et les murs exterieurs",
                  "Ne bloquez pas les bouches de ventilation (VMC) avec des meubles ou des rideaux",
                  "Utilisez un hygrometre pour surveiller le taux d'humidite (objectif : 40-60%)",
                  "Retournez regulierement votre matelas et aerez votre literie",
                  "Verifiez regulierement les angles des murs et derriere les meubles",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E8952D]" />
                    <span className="text-[0.9375rem] text-[#6B6B6B]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Attention : ces gestes sont utiles en pr&eacute;vention mais insuffisants si la cause structurelle n&apos;est pas trait&eacute;e. Si la moisissure revient malgr&eacute; ces pr&eacute;cautions, c&apos;est le signe qu&apos;un traitement professionnel est n&eacute;cessaire.
              </p>
            </div>

            {/* Section: Professional */}
            <div>
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                Quel professionnel contacter ?
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Pour un probl&egrave;me de moisissure dans une chambre, contactez un sp&eacute;cialiste du diagnostic et du traitement de l&apos;humidit&eacute; comme MurExpert, et non un simple peintre ou un homme toutes mains. Seul un professionnel &eacute;quip&eacute; d&apos;appareils de mesure (hygrom&egrave;tre professionnel, cam&eacute;ra thermique) peut identifier la cause exacte du probl&egrave;me et proposer un traitement adapt&eacute; et durable.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">
                Chez MurExpert, le diagnostic est enti&egrave;rement gratuit et sans engagement. Un technicien certifi&eacute; se d&eacute;place chez vous sous 48 heures, r&eacute;alise l&apos;analyse compl&egrave;te et vous remet un rapport d&eacute;taill&eacute; avec les solutions recommand&eacute;es et un devis transparent.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-4">
                {[
                  { value: "48h", label: "Delai d'intervention" },
                  { value: "Gratuit", label: "Diagnostic complet" },
                  { value: "10 ans", label: "Garantie decennale" },
                  { value: "4.9/5", label: "Avis clients" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center rounded-xl bg-beige-50 p-4">
                    <div className="text-xl font-bold text-[#2B5EA7]">{stat.value}</div>
                    <div className="mt-1 text-xs text-[#6B6B6B]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price table */}
            <div>
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                Prix du traitement de la moisissure dans une chambre
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-6">
                Le co&ucirc;t du traitement d&eacute;pend de la cause de la moisissure et de l&apos;&eacute;tendue des d&eacute;g&acirc;ts. Voici les prix indicatifs :
              </p>
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead className="bg-beige-50">
                    <tr>
                      <th className="px-5 py-3 text-left font-semibold text-[#1A1A1A]">Traitement</th>
                      <th className="px-5 py-3 text-left font-semibold text-[#1A1A1A]">Prix indicatif</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Diagnostic humidit&eacute;</td><td className="px-5 py-3 text-[#E8952D] font-semibold">Gratuit</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Traitement fongicide de surface</td><td className="px-5 py-3 text-[#6B6B6B]">15 - 30 EUR/m&sup2;</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Installation VMC / VMI</td><td className="px-5 py-3 text-[#6B6B6B]">2 500 - 4 000 EUR</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Am&eacute;lioration isolation</td><td className="px-5 py-3 text-[#6B6B6B]">40 - 100 EUR/m&sup2;</td></tr>
                    <tr><td className="px-5 py-3 text-[#6B6B6B]">Injection r&eacute;sine (remont&eacute;e capillaire)</td><td className="px-5 py-3 text-[#6B6B6B]">80 - 150 EUR/ml</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-beige-100 p-8 sm:p-10 text-center">
              <h2 className="text-2xl text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}>
                Retrouvez une chambre saine et sans moisissure
              </h2>
              <p className="text-[#6B6B6B] mb-6 max-w-lg mx-auto">
                Ne dormez plus dans une chambre contamin&eacute;e. Diagnostic gratuit, sans engagement, intervention sous 48h.
              </p>
              <Link
                href="/diagnostic-gratuit/"
                className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white hover:scale-[1.03] transition-all"
              >
                Demander mon diagnostic gratuit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Internal links */}
            <div>
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                En savoir plus
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Moisissure sur les murs", href: "/moisissure-mur/" },
                  { title: "Moisissure noire", href: "/moisissure-noire/" },
                  { title: "Moisissure plafond", href: "/moisissure-plafond/" },
                  { title: "Odeur d'humidite", href: "/odeur-humidite/" },
                  { title: "Traitement humidite", href: "/traitement-humidite/" },
                  { title: "Diagnostic gratuit", href: "/diagnostic-gratuit/" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between rounded-xl border border-gray-100 px-5 py-3.5 transition-all hover:border-beige-300 hover:shadow-sm group"
                  >
                    <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#E8952D] transition-colors">{link.title}</span>
                    <ChevronRight className="h-4 w-4 text-[#6B6B6B] group-hover:text-[#E8952D]" />
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-8"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                Questions fr&eacute;quentes sur la moisissure dans la chambre
              </h2>
              <Accordion items={faqItems} />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
