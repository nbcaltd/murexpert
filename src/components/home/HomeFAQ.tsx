"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const faqs = [
  {
    question: "Comment savoir si j'ai un probleme d'humidite dans ma maison ?",
    answer:
      "Les signes les plus courants sont : des taches de moisissure sur les murs ou plafonds, des depots blanchatres (salpetre), des odeurs de moisi, de la peinture qui s'ecaille, du papier peint qui se decolle, de la condensation sur les fenetres ou une sensation de froid et d'humidite dans les pieces. Si vous observez un ou plusieurs de ces symptomes, nous vous recommandons de faire realiser un diagnostic gratuit par un expert.",
  },
  {
    question: "Le diagnostic d'humidite est-il vraiment gratuit ?",
    answer:
      "Oui, le diagnostic d'humidite que nous proposons est 100% gratuit et sans engagement. Un technicien expert se deplace chez vous pour analyser la source de l'humidite a l'aide d'appareils de mesure professionnels (hygrometre, camera thermique, detecteur de sels). Vous recevez ensuite un rapport detaille avec les solutions recommandees et un devis transparent.",
  },
  {
    question: "Combien coute un traitement contre l'humidite ?",
    answer:
      "Le cout depend du type de probleme et de la surface a traiter. A titre indicatif : une injection de resine contre les remontees capillaires coute entre 80 et 150 EUR par metre lineaire, l'installation d'une VMI entre 2 500 et 4 000 EUR, et un cuvelage de cave entre 150 et 300 EUR par m2. Le diagnostic gratuit permet d'etablir un devis precis adapte a votre situation.",
  },
  {
    question: "Proposez-vous une garantie sur les travaux ?",
    answer:
      "Oui, tous nos traitements sont couverts par une garantie decennale (10 ans) conformement a la loi. De plus, nous offrons une garantie de resultat : si le probleme d'humidite persiste apres notre intervention, nous revenons gratuitement pour ajuster le traitement jusqu'a resolution complete.",
  },
  {
    question: "Intervenez-vous dans toute la France ?",
    answer:
      "Oui, MurExpert intervient dans toute la France metropolitaine. Nous avons des equipes basees dans les principales villes (Paris, Lyon, Marseille, Bordeaux, Lille, Toulouse, Nantes, Strasbourg et leurs agglomerations). Le delai d'intervention est generalement de 48 heures apres votre prise de rendez-vous.",
  },
];

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView();

  return (
    <section className="bg-beige-100 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
        >
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            {/* LEFT — Heading */}
            <div className="lg:col-span-4">
              <span className="mb-4 inline-block rounded-full bg-primary-400/10 px-4 py-1.5 text-sm font-semibold text-primary-600">
                FAQ
              </span>
              <h2 className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12]">
                Questions frequentes
              </h2>
              <p className="mt-4 text-base text-[#6B6B6B] leading-relaxed">
                Les reponses aux questions les plus courantes sur l&apos;humidite et nos traitements.
              </p>
              <Link
                href="/diagnostic-humidite/"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-500 transition-colors hover:text-primary-700"
              >
                En savoir plus sur le diagnostic
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* RIGHT — Accordion */}
            <div className="lg:col-span-8">
              <div className="space-y-3">
                {faqs.map((faq, i) => {
                  const isOpen = openIndex === i;
                  return (
                    <div
                      key={i}
                      className={`overflow-hidden rounded-[0.9375rem] bg-white transition-all duration-500 ${
                        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{
                        transitionDelay: inView ? `${i * 80}ms` : "0ms",
                        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      }}
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className="flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer group sm:px-8 sm:py-6"
                      >
                        <span className="pr-6 text-[0.9375rem] font-semibold text-[#1A1A1A] transition-colors group-hover:text-primary-600 sm:text-base">
                          {faq.question}
                        </span>
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            isOpen ? "bg-primary-400 rotate-180" : "bg-beige-100 group-hover:bg-beige-200"
                          }`}
                        >
                          <ChevronDown className={`h-4 w-4 transition-colors ${isOpen ? "text-white" : "text-[#6B6B6B]"}`} />
                        </span>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? "max-h-48 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                        }`}
                        style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
                      >
                        <p className="px-6 pr-12 text-[0.9375rem] leading-relaxed text-[#6B6B6B] sm:px-8">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
