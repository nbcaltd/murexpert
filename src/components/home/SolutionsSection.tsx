"use client";

import Link from "next/link";
import {
  Syringe,
  Fan,
  Layers,
  Construction,
  Flame,
  ArrowRight,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

const solutions = [
  {
    icon: Syringe,
    title: "Injection de resine",
    desc: "Barriere etanche injectee dans les murs pour stopper definitivement les remontees capillaires.",
    href: "/traitement-humidite/#injection-resine",
    image: "/images/injection-resine.jpg",
  },
  {
    icon: Fan,
    title: "VMC / VMI",
    desc: "Ventilation mecanique pour controler l'humidite interieure et eliminer la condensation.",
    href: "/traitement-humidite/#vmc-vmi",
    image: "/images/condensation.jpg",
  },
  {
    icon: Layers,
    title: "Cuvelage",
    desc: "Etancheification des sous-sols et caves par application d'un enduit etanche haute performance.",
    href: "/traitement-humidite/#cuvelage",
    image: "/images/cave-humide.jpg",
  },
  {
    icon: Construction,
    title: "Drainage",
    desc: "Systeme de drainage peripherique pour evacuer les eaux souterraines loin de vos fondations.",
    href: "/traitement-humidite/#drainage",
    image: "/images/drainage.jpg",
  },
  {
    icon: Flame,
    title: "Assechement des murs",
    desc: "Techniques professionnelles de sechage pour restaurer vos murs et eliminer l'humidite residuelle.",
    href: "/traitement-humidite/#assechement",
    image: "/images/assechement.jpg",
  },
];

export function SolutionsSection() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
        >
          {/* Section heading */}
          <div className="mb-14 max-w-xl">
            <span className="mb-4 inline-block rounded-full bg-[#E8952D]/10 px-4 py-1.5 text-sm font-semibold text-[#1A1A1A]">
              Nos solutions
            </span>
            <h2
              className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12]"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
            >
              Des traitements professionnels et durables
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                className={`group overflow-hidden rounded-[1.25rem] bg-beige-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_1rem_1rem_-0.5rem_rgba(0,0,0,0.08)] ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: inView ? `${200 + i * 100}ms` : "0ms",
                  transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8952D]/10">
                    <s.icon className="h-5 w-5 text-[#E8952D]" />
                  </div>
                  <h3
                    className="text-lg font-bold text-[#1A1A1A] sm:text-xl"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-[1.7] text-[#6B6B6B]">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#E8952D] opacity-0 group-hover:opacity-100 transition-opacity">
                    En savoir plus <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/traitement-humidite/"
              className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-[#E8952D] hover:underline"
            >
              Decouvrir toutes nos solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
