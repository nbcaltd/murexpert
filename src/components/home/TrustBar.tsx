"use client";

import { useInView } from "@/hooks/useInView";

const trustItems = [
  { value: "1 500+", label: "Diagnostics realises" },
  { value: "5", label: "Types de traitement" },
  { value: "Toute la France", label: "Couverture nationale" },
  { value: "48h", label: "Delai d'intervention" },
];

export function TrustBar() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
        >
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 lg:gap-24">
            {trustItems.map((item, i) => (
              <div
                key={item.label}
                className={`text-center transition-all duration-500 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{
                  transitionDelay: inView ? `${150 + i * 100}ms` : "0ms",
                  transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              >
                <p
                  className="text-2xl text-[#1A1A1A] sm:text-3xl"
                  style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
                >
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-[#6B6B6B]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
