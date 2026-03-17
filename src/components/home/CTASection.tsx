"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export function CTASection() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
        >
          <div className="relative overflow-hidden rounded-[1.5rem]">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2c1810] via-[#1a2634] to-[#0d1117]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 via-[#1A1A1A]/70 to-[#1A1A1A]/50" />

            <div className="relative px-8 py-20 sm:px-16 sm:py-28">
              <div className="max-w-xl">
                <span className="mb-5 inline-block rounded-full bg-primary-400/20 px-4 py-1.5 text-sm font-semibold text-primary-400">
                  Agissez maintenant
                </span>
                <h2
                  className="text-3xl text-white sm:text-[2.75rem] sm:leading-[1.12]"
                  style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
                >
                  Ne laissez pas l&apos;humidite deteriorer votre maison
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/50">
                  Plus vous attendez, plus les degats s&apos;aggravent. Agissez maintenant
                  avec un diagnostic gratuit et sans engagement. Nos experts vous repondent
                  sous 24 heures.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link href="/diagnostic-gratuit/" className="btn-primary">
                    Demander mon diagnostic gratuit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="tel:+33745881675"
                    className="inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-white/20 bg-transparent px-7 py-3.5 text-[0.9375rem] font-semibold text-white transition-all duration-300 hover:border-white/40 hover:scale-[1.03]"
                  >
                    <Phone className="h-4 w-4" />
                    07 45 88 16 75
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
