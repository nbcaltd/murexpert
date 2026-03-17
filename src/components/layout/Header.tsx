"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  Droplets,
} from "lucide-react";
import { cn } from "@/lib/utils";

const problemLinks = [
  { name: "Moisissure", desc: "Taches noires et champignons sur les murs", href: "/moisissure-mur/" },
  { name: "Salpetre", desc: "Depots blanchatres sur les parois", href: "/salpetre/" },
  { name: "Remontee capillaire", desc: "Humidite ascensionnelle du sol", href: "/remontee-capillaire/" },
  { name: "Infiltration d'eau", desc: "Penetration d'eau par les murs ou toiture", href: "/humidite-maison/" },
  { name: "Condensation", desc: "Buee, gouttelettes sur les fenetres", href: "/traitement-humidite/" },
];

const solutionLinks = [
  { name: "Injection de resine", desc: "Barriere etanche contre les remontees", href: "/traitement-humidite/#injection-resine" },
  { name: "VMC / VMI", desc: "Ventilation mecanique adaptee", href: "/traitement-humidite/#vmc-vmi" },
  { name: "Cuvelage", desc: "Etancheite des sous-sols et caves", href: "/traitement-humidite/#cuvelage" },
  { name: "Drainage", desc: "Evacuation des eaux souterraines", href: "/traitement-humidite/#drainage" },
  { name: "Assechement des murs", desc: "Techniques de sechage professionnelles", href: "/traitement-humidite/#assechement" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = useCallback((name: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(name);
  }, []);

  const handleMouseLeave = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top banner */}
      {bannerVisible && (
        <div className="relative bg-[#2B5EA7] py-3 text-center">
          <p className="text-sm font-medium text-white px-10">
            L&apos;humidite deteriore votre maison ? Diagnostic gratuit et sans engagement.{" "}
            <Link href="/diagnostic-gratuit/" className="underline underline-offset-2 font-semibold hover:no-underline">
              Decouvrir &rarr;
            </Link>
          </p>
          <button
            onClick={() => setBannerVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-white/60 hover:text-white cursor-pointer"
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Main navigation */}
      <header className="sticky top-0 z-50 bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo-murexpert.png" alt="MurExpert — Expert en Traitement de l'Humidité" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {/* Problemes dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("problemes")}
              onMouseLeave={handleMouseLeave}
            >
              <button className={cn(
                "flex items-center gap-1.5 px-4 py-2 text-[0.9375rem] transition-colors duration-200 cursor-pointer",
                activeDropdown === "problemes" ? "text-[#1A1A1A] font-medium" : "text-[#1A1A1A]/60 hover:text-[#1A1A1A]"
              )}>
                Problemes
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", activeDropdown === "problemes" && "rotate-180")} />
              </button>
            </div>

            {/* Solutions dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <button className={cn(
                "flex items-center gap-1.5 px-4 py-2 text-[0.9375rem] transition-colors duration-200 cursor-pointer",
                activeDropdown === "solutions" ? "text-[#1A1A1A] font-medium" : "text-[#1A1A1A]/60 hover:text-[#1A1A1A]"
              )}>
                Solutions
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", activeDropdown === "solutions" && "rotate-180")} />
              </button>
            </div>

            <Link
              href="/diagnostic-humidite/"
              className="px-4 py-2 text-[0.9375rem] text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors duration-200"
            >
              Diagnostic
            </Link>

            <Link
              href="/a-propos/"
              className="px-4 py-2 text-[0.9375rem] text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors duration-200"
            >
              A propos
            </Link>

            <Link
              href="/contact/"
              className="px-4 py-2 text-[0.9375rem] text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Right buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+33745881675"
              className="rounded-full bg-[#2B5EA7] px-6 py-2.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" />
                07 45 88 16 75
              </span>
            </a>
            <Link
              href="/diagnostic-gratuit/"
              className="flex items-center gap-2 rounded-full bg-[#E8952D] px-6 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
            >
              Diagnostic gratuit
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-[#1A1A1A] lg:hidden cursor-pointer"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Desktop dropdown — Problemes */}
        <div
          onMouseEnter={() => handleMouseEnter("problemes")}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "absolute left-0 right-0 z-40 hidden lg:block transition-all duration-200 origin-top",
            activeDropdown === "problemes"
              ? "opacity-100 scale-y-100 pointer-events-auto"
              : "opacity-0 scale-y-[0.98] pointer-events-none"
          )}
        >
          <div className="border-t border-black/[0.06] bg-white shadow-[0_16px_48px_-12px_rgba(0,0,0,0.1)]">
            <div className="mx-auto max-w-[700px] px-6 py-5">
              <p className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-wider text-[#1A1A1A]/30">
                Types de problemes d&apos;humidite
              </p>
              {problemLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group -mx-2 flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-[#f8f7f5]"
                >
                  <div>
                    <span className="block text-[0.875rem] font-medium text-[#1A1A1A] group-hover:text-[#E8952D] transition-colors">
                      {item.name}
                    </span>
                    <span className="block text-[0.8125rem] text-[#6B6B6B]">
                      {item.desc}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop dropdown — Solutions */}
        <div
          onMouseEnter={() => handleMouseEnter("solutions")}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "absolute left-0 right-0 z-40 hidden lg:block transition-all duration-200 origin-top",
            activeDropdown === "solutions"
              ? "opacity-100 scale-y-100 pointer-events-auto"
              : "opacity-0 scale-y-[0.98] pointer-events-none"
          )}
        >
          <div className="border-t border-black/[0.06] bg-white shadow-[0_16px_48px_-12px_rgba(0,0,0,0.1)]">
            <div className="mx-auto max-w-[700px] px-6 py-5">
              <p className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-wider text-[#1A1A1A]/30">
                Nos solutions de traitement
              </p>
              {solutionLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group -mx-2 flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-[#f8f7f5]"
                >
                  <div>
                    <span className="block text-[0.875rem] font-medium text-[#1A1A1A] group-hover:text-[#E8952D] transition-colors">
                      {item.name}
                    </span>
                    <span className="block text-[0.8125rem] text-[#6B6B6B]">
                      {item.desc}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-[320px] overflow-y-auto bg-white shadow-2xl transition-transform duration-500 lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
            <img src="/logo-murexpert.png" alt="MurExpert" className="h-8 w-auto" />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-gray-100 cursor-pointer"
            aria-label="Fermer le menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-4 pt-2">
          {/* Problemes accordion */}
          <div>
            <button
              onClick={() => setMobileDropdown(mobileDropdown === "problemes" ? null : "problemes")}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-[0.9375rem] text-[#1A1A1A]/60 hover:bg-beige-50 hover:text-[#1A1A1A] transition-colors cursor-pointer"
            >
              Problemes
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", mobileDropdown === "problemes" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", mobileDropdown === "problemes" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
              <div className="py-1 pl-2">
                {problemLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-2.5 text-[0.8125rem] text-[#1A1A1A]/70 transition-colors hover:bg-beige-50 hover:text-[#1A1A1A]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions accordion */}
          <div>
            <button
              onClick={() => setMobileDropdown(mobileDropdown === "solutions" ? null : "solutions")}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-[0.9375rem] text-[#1A1A1A]/60 hover:bg-beige-50 hover:text-[#1A1A1A] transition-colors cursor-pointer"
            >
              Solutions
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", mobileDropdown === "solutions" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", mobileDropdown === "solutions" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
              <div className="py-1 pl-2">
                {solutionLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-2.5 text-[0.8125rem] text-[#1A1A1A]/70 transition-colors hover:bg-beige-50 hover:text-[#1A1A1A]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/diagnostic-humidite/"
            onClick={() => setMobileOpen(false)}
            className="rounded-xl px-4 py-3.5 text-[0.9375rem] text-[#1A1A1A]/60 hover:bg-beige-50 hover:text-[#1A1A1A] transition-colors"
          >
            Diagnostic
          </Link>

          <Link
            href="/a-propos/"
            onClick={() => setMobileOpen(false)}
            className="rounded-xl px-4 py-3.5 text-[0.9375rem] text-[#1A1A1A]/60 hover:bg-beige-50 hover:text-[#1A1A1A] transition-colors"
          >
            A propos
          </Link>

          <Link
            href="/contact/"
            onClick={() => setMobileOpen(false)}
            className="rounded-xl px-4 py-3.5 text-[0.9375rem] text-[#1A1A1A]/60 hover:bg-beige-50 hover:text-[#1A1A1A] transition-colors"
          >
            Contact
          </Link>

          <div className="mt-4 space-y-2 px-2">
            <a
              href="tel:+33745881675"
              className="flex items-center justify-center gap-2 rounded-full bg-[#2B5EA7] px-6 py-3 text-sm font-medium text-white"
            >
              <Phone className="h-4 w-4" />
              07 45 88 16 75
            </a>
            <Link
              href="/diagnostic-gratuit/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-[#E8952D] px-6 py-3 text-sm font-semibold text-white"
            >
              Diagnostic gratuit
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
