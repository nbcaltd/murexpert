"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const cities = [
  "Paris", "Lyon", "Marseille", "Bordeaux", "Lille", "Toulouse",
  "Nantes", "Strasbourg", "Nice", "Montpellier", "Rennes", "Rouen",
];

export function CitiesSection() {
  const { ref, inView } = useInView();

  return (
    <section id="villes" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
        >
          {/* Section heading */}
          <div className="mb-14 max-w-xl">
            <span className="mb-4 inline-block rounded-full bg-[#E8952D]/10 px-4 py-1.5 text-sm font-semibold text-[#1A1A1A]">
              Nos zones d&apos;intervention
            </span>
            <h2
              className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12]"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
            >
              MurExpert intervient dans toute la France
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {cities.map((city, i) => (
              <Link
                key={city}
                href="/diagnostic-gratuit/"
                className={`group flex items-center gap-2.5 rounded-[0.9375rem] bg-beige-50 px-4 py-3.5 transition-all duration-500 hover:bg-beige-100 hover:-translate-y-0.5 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{
                  transitionDelay: inView ? `${100 + i * 50}ms` : "0ms",
                  transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              >
                <MapPin className="h-4 w-4 text-[#E8952D] shrink-0" />
                <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#E8952D] transition-colors">
                  {city}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
