"use client";

import { useInView } from "@/hooks/useInView";

const stats = [
  { value: "10 ans", label: "Garantie decennale" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "2 500+", label: "Traitements realises" },
];

export function ManifestoSection() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-beige-100 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
        >
          <div className="mx-auto max-w-4xl text-center">
            <p
              className="text-[1.75rem] leading-[1.35] text-[#1A1A1A] sm:text-[2.25rem] sm:leading-[1.3] lg:text-[2.75rem] lg:leading-[1.25]"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
            >
              Nous croyons que chaque maison merite d&apos;etre saine et seche. L&apos;humidite n&apos;est pas une fatalite : c&apos;est un probleme avec une solution. C&apos;est pour cela que MurExpert existe.
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.8] text-[#6B6B6B]">
              Chez MurExpert, nous nous occupons de tout : diagnostic professionnel, identification de la cause, traitement adapte et suivi post-intervention. Vous retrouvez un interieur sain, nous faisons le reste.
            </p>
          </div>

          {/* 3 key stats */}
          <div className="mx-auto mt-14 flex max-w-2xl justify-center gap-12 sm:gap-20">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-500 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{
                  transitionDelay: inView ? `${400 + i * 120}ms` : "0ms",
                  transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              >
                <p
                  className="text-3xl text-[#2B5EA7] sm:text-[2.75rem]"
                  style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
                >
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm text-[#6B6B6B]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
