"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    number: "1",
    category: "CONTACT",
    title: "Demandez votre diagnostic",
    description:
      "Remplissez le formulaire en moins de 2 minutes ou appelez-nous. Nous planifions une visite sous 48 heures, sans engagement.",
  },
  {
    number: "2",
    category: "DIAGNOSTIC",
    title: "Un expert analyse votre probleme",
    description:
      "Un technicien certifie se deplace avec des appareils professionnels (hygrometre, camera thermique, detecteur de sels) pour identifier la cause exacte.",
  },
  {
    number: "3",
    category: "TRAITEMENT",
    title: "Nous traitons a la source",
    description:
      "Injection de resine, VMC/VMI, cuvelage, drainage... Nous appliquons la solution adaptee avec des materiaux professionnels. Resultat garanti 10 ans.",
  },
];

export function HowItWorks() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-beige-100 py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
        >
          {/* Section heading */}
          <div className="mb-14 max-w-xl lg:mb-20">
            <span className="mb-4 inline-block rounded-full bg-[#E8952D]/10 px-4 py-1.5 text-sm font-semibold text-[#1A1A1A]">
              Comment ca marche
            </span>
            <h2
              className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12]"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
            >
              3 etapes pour retrouver une maison saine
            </h2>
          </div>

          <div className="rounded-[1.5rem] bg-white p-8 sm:p-10 lg:p-12">
            <div className="space-y-10 lg:space-y-11">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`flex gap-5 transition-all duration-500 ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: inView ? `${200 + i * 120}ms` : "0ms",
                    transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                >
                  {/* Number circle */}
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white ${
                    i === 1 ? "bg-[#1A1A1A]" : "bg-[#E8952D]"
                  }`}>
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <p className="mb-1 text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-[#6B6B6B]">
                      {step.category}
                    </p>
                    <h3
                      className="text-lg font-bold leading-snug text-[#1A1A1A] sm:text-xl"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] leading-[1.7] text-[#6B6B6B]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <Link
              href="/diagnostic-gratuit/"
              className="mt-10 inline-flex w-fit items-center gap-2.5 rounded-full bg-[#E8952D] px-8 py-4 text-[0.9375rem] font-semibold text-white transition-transform duration-300 hover:scale-[1.04]"
            >
              Demander mon diagnostic gratuit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
