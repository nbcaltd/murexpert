import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { SimpleContactForm } from "@/components/contacto/SimpleContactForm";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contactez MurExpert | Telephone, Email, Formulaire",
  description:
    "Contactez MurExpert par telephone, email ou formulaire. Notre equipe est disponible du lundi au samedi de 8h a 19h pour repondre a toutes vos questions sur l'humidite.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Telephone",
    value: "07 45 88 16 75",
    href: "tel:+33745881675",
    detail: "Appel gratuit",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@murexpert.fr",
    href: "mailto:contact@murexpert.fr",
    detail: "Reponse sous 24h",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun — Sam, 8h — 19h",
    href: null,
    detail: "Jours feries exclus",
  },
  {
    icon: MapPin,
    label: "Zone d'intervention",
    value: "Toute la France",
    href: null,
    detail: "Metropolitaine",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: "https://murexpert.fr" },
              { name: "Contact", url: "https://murexpert.fr/contact/" },
            ])
          ),
        }}
      />

      {/* Breadcrumb */}
      <div className="bg-beige-50 border-b border-beige-200">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A] font-medium">Contact</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-beige-50 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#E8952D]/10 px-4 py-1.5 text-sm font-semibold text-[#E8952D]">
              Contact
            </span>
            <h1
              className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12] lg:text-[3.25rem] lg:leading-[1.08]"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
            >
              Une question ? Contactez-nous
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#6B6B6B]">
              Notre equipe est disponible pour repondre a toutes vos questions
              sur l&apos;humidite, nos solutions et notre reseau de partenaires.
            </p>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => {
              const content = (
                <div className="rounded-2xl border border-gray-100 p-6 transition-all hover:border-beige-300 hover:shadow-sm text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8952D]/10">
                    <item.icon className="h-5 w-5 text-[#E8952D]" />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#6B6B6B]">{item.label}</p>
                  <p className="mt-1.5 text-base font-semibold text-[#1A1A1A]">{item.value}</p>
                  <p className="mt-1 text-sm text-[#6B6B6B]">{item.detail}</p>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-20">
            {/* Form */}
            <div>
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-3"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                Envoyez-nous un message
              </h2>
              <p className="text-[0.9375rem] text-[#6B6B6B] mb-8">
                Remplissez le formulaire ci-dessous et nous vous repondrons dans les plus brefs delais.
              </p>
              <SimpleContactForm />
            </div>

            {/* Sidebar */}
            <div>
              <div className="rounded-[1.5rem] bg-beige-50 p-8 sm:p-10">
                <h3
                  className="text-xl text-[#1A1A1A]"
                  style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
                >
                  Besoin d&apos;un diagnostic ?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B]">
                  Si vous avez un probleme d&apos;humidite et souhaitez un diagnostic gratuit a domicile, utilisez notre formulaire dedie.
                </p>
                <Link
                  href="/diagnostic-gratuit/"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-6 py-2.5 text-sm font-semibold text-white hover:scale-[1.03] transition-all"
                >
                  Demander un diagnostic gratuit
                </Link>

                <div className="mt-8 border-t border-beige-200 pt-6">
                  <h3 className="text-sm font-semibold text-[#1A1A1A] mb-4">Vous pouvez aussi nous joindre par :</h3>
                  <div className="space-y-4">
                    <a href="tel:+33745881675" className="flex items-center gap-3 group">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E8952D]/10">
                        <Phone className="h-4 w-4 text-[#E8952D]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#E8952D] transition-colors">07 45 88 16 75</p>
                        <p className="text-xs text-[#6B6B6B]">Lun-Sam, 8h-19h</p>
                      </div>
                    </a>
                    <a href="mailto:contact@murexpert.fr" className="flex items-center gap-3 group">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E8952D]/10">
                        <Mail className="h-4 w-4 text-[#E8952D]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#E8952D] transition-colors">contact@murexpert.fr</p>
                        <p className="text-xs text-[#6B6B6B]">Reponse sous 24h</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
