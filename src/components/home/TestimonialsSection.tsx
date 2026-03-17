"use client";

import { Star } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "Marie L.",
    city: "Paris 15e",
    text: "Nous avions des moisissures dans la chambre de notre fils depuis 2 ans. MurExpert a identifie un probleme de condensation et installe une VMI. Plus aucune trace d'humidite depuis 6 mois. Equipe tres professionnelle.",
    rating: 5,
  },
  {
    name: "Patrick D.",
    city: "Lyon",
    text: "Des remontees capillaires deterioraient notre maison de 1920. L'injection de resine a completement resolu le probleme. Le diagnostic gratuit etait tres complet et le devis clair. Je recommande sans hesiter.",
    rating: 5,
  },
  {
    name: "Sophie et Marc B.",
    city: "Bordeaux",
    text: "Cave inondee a chaque forte pluie. MurExpert a realise un cuvelage impeccable. Notre cave est seche pour la premiere fois en 10 ans. Intervention rapide et equipe a l'ecoute. Excellent rapport qualite-prix.",
    rating: 5,
  },
  {
    name: "Jean-Pierre R.",
    city: "Lille",
    text: "Du salpetre sur tous les murs du rez-de-chaussee. Le technicien a pris le temps d'expliquer le diagnostic et les solutions. Travaux realises en 3 jours, resultat impeccable. Garantie 10 ans, ca rassure.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-beige-100 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
        >
          {/* Section heading */}
          <div className="mb-14 max-w-xl lg:mb-20">
            <span className="mb-4 inline-block rounded-full bg-[#E8952D]/10 px-4 py-1.5 text-sm font-semibold text-[#1A1A1A]">
              Temoignages
            </span>
            <h2
              className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12]"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
            >
              Ils nous ont fait confiance
            </h2>
          </div>

          {/* Testimonial cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`rounded-[1.25rem] bg-white p-8 transition-all duration-500 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: inView ? `${200 + i * 140}ms` : "0ms",
                  transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[0.9375rem] leading-[1.7] text-[#6B6B6B] italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Name + city */}
                <div className="mt-5 flex items-center gap-3 border-t border-beige-200 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8952D]/10 text-sm font-semibold text-[#E8952D]">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1A1A1A]">{t.name}</p>
                    <p className="text-xs text-[#6B6B6B]">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
