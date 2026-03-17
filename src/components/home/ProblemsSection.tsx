"use client";

import Link from "next/link";
import {
  Droplets,
  ThermometerSun,
  Waves,
  CloudRain,
  Wind,
  ArrowRight,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

const problems = [
  {
    icon: Droplets,
    title: "Moisissure",
    desc: "Taches noires, champignons et odeurs de moisi sur vos murs et plafonds. Un risque pour votre sante et votre habitat.",
    href: "/moisissure-mur/",
    image: "/images/moisissure.jpg",
  },
  {
    icon: ThermometerSun,
    title: "Salpetre",
    desc: "Depots blanchatres et cristallisation sur les murs. Signe d'humidite ascensionnelle qui deteriore vos parois.",
    href: "/salpetre/",
    image: "/images/salpetre.jpg",
  },
  {
    icon: Waves,
    title: "Remontee capillaire",
    desc: "L'eau du sol remonte dans vos murs par capillarite, provoquant des degats sur toute la base de votre habitation.",
    href: "/remontee-capillaire/",
    image: "/images/remontee-capillaire.jpg",
  },
  {
    icon: CloudRain,
    title: "Infiltration",
    desc: "L'eau penetre par les murs, la toiture ou les joints. Les infiltrations causent des degats structurels importants.",
    href: "/humidite-maison/",
    image: "/images/infiltration.jpg",
  },
  {
    icon: Wind,
    title: "Condensation",
    desc: "Buee sur les fenetres, gouttelettes sur les murs froids. Un probleme de ventilation qui favorise les moisissures.",
    href: "/traitement-humidite/",
    image: "/images/condensation.jpg",
  },
];

export function ProblemsSection() {
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
              Problemes d&apos;humidite
            </span>
            <h2
              className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12]"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
            >
              Identifiez votre probleme d&apos;humidite
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {problems.map((p, i) => (
              <Link
                key={p.title}
                href={p.href}
                className={`group overflow-hidden rounded-[1.25rem] bg-beige-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_1rem_1rem_-0.5rem_rgba(0,0,0,0.08)] ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: inView ? `${200 + i * 100}ms` : "0ms",
                  transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              >
                <div className="h-36 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8952D]/10">
                    <p.icon className="h-5 w-5 text-[#E8952D]" />
                  </div>
                  <h3
                    className="text-lg font-bold text-[#1A1A1A] sm:text-xl"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-[1.7] text-[#6B6B6B]">{p.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#E8952D] opacity-0 group-hover:opacity-100 transition-opacity">
                    En savoir plus <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
