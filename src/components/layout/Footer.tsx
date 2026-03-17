import Link from "next/link";
import { Droplets, Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Problemes: [
    { name: "Moisissure", href: "/moisissure-mur/" },
    { name: "Salpetre", href: "/salpetre/" },
    { name: "Remontee capillaire", href: "/remontee-capillaire/" },
    { name: "Humidite maison", href: "/humidite-maison/" },
    { name: "Traitement humidite", href: "/traitement-humidite/" },
  ],
  Solutions: [
    { name: "Diagnostic humidite", href: "/diagnostic-humidite/" },
    { name: "Injection de resine", href: "/traitement-humidite/#injection-resine" },
    { name: "VMC / VMI", href: "/traitement-humidite/#vmc-vmi" },
    { name: "Cuvelage", href: "/traitement-humidite/#cuvelage" },
    { name: "Drainage", href: "/traitement-humidite/#drainage" },
  ],
  Villes: [
    { name: "Paris", href: "/diagnostic-gratuit/" },
    { name: "Lyon", href: "/diagnostic-gratuit/" },
    { name: "Marseille", href: "/diagnostic-gratuit/" },
    { name: "Bordeaux", href: "/diagnostic-gratuit/" },
    { name: "Lille", href: "/diagnostic-gratuit/" },
    { name: "Toulouse", href: "/diagnostic-gratuit/" },
    { name: "Nantes", href: "/diagnostic-gratuit/" },
    { name: "Strasbourg", href: "/diagnostic-gratuit/" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Main footer content */}
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column — spans 2 */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <img src="/logo-murexpert.png" alt="MurExpert" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-white/50 max-w-sm">
              Expert en diagnostic et traitement de l&apos;humidite en France.
              Nous intervenons sur tous types de problemes : moisissure,
              salpetre, remontee capillaire, infiltration.
            </p>

            <div className="mt-6 space-y-3">
              <a href="tel:+33745881675" className="flex items-center gap-3 text-sm text-white/60 hover:text-primary-400 transition-colors">
                <Phone className="h-4 w-4" />
                07 45 88 16 75
              </a>
              <a href="mailto:contact@murexpert.fr" className="flex items-center gap-3 text-sm text-white/60 hover:text-primary-400 transition-colors">
                <Mail className="h-4 w-4" />
                contact@murexpert.fr
              </a>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4" />
                Interventions dans toute la France
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3
                className="mb-5 text-[1.125rem]"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[0.875rem] text-white/50 transition-colors duration-300 hover:text-primary-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal links + copyright */}
        <div className="border-t border-white/10 pt-8 pb-10 space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link
              href="/a-propos/"
              className="text-sm text-white/50 transition-colors duration-300 hover:text-primary-400"
            >
              A propos
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/mentions-legales/"
              className="text-sm text-white/50 transition-colors duration-300 hover:text-primary-400"
            >
              Mentions legales
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/politique-de-confidentialite/"
              className="text-sm text-white/50 transition-colors duration-300 hover:text-primary-400"
            >
              Politique de confidentialite
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/diagnostic-gratuit/"
              className="text-sm text-white/50 transition-colors duration-300 hover:text-primary-400"
            >
              Diagnostic gratuit
            </Link>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} MurExpert — Diagnostic &amp; traitement de l&apos;humidite
            </p>
            <p className="text-sm text-white/40">
              Intervention dans toute la France
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
