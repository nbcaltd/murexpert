import type { Metadata } from "next";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mentions Legales",
  description: "Mentions legales du site MurExpert.fr - Diagnostic et traitement de l'humidite en France.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: "https://murexpert.fr" },
              { name: "Mentions legales", url: "https://murexpert.fr/mentions-legales/" },
            ])
          ),
        }}
      />

      <section className="bg-beige-50 py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12]"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
            >
              Mentions legales
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="prose prose-gray max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
                1. Editeur du site
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance
                dans l&apos;economie numerique, il est precise aux utilisateurs du site https://murexpert.fr
                l&apos;identite des differents intervenants dans le cadre de sa realisation et de son suivi :<br /><br />
                Le present site est edite par : NBCA LTD<br />
                Numero d&apos;enregistrement : C96614<br />
                Numero TVA : MT27550504<br /><br />
                Siege social : Triq San Massimiljanu Kolbe, Mais 2, the Peak BA,
                SPB1231 St. Paul&apos;s Bay, Malta<br /><br />
                Responsable de la publication : Jonathan<br /><br />
                Telephone : 07 45 88 16 75<br />
                Email : contact@murexpert.fr
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
                2. Hebergement
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Le site est heberge par :<br />
                Cloudflare, Inc.<br />
                101 Townsend Street, San Francisco, CA 94107, USA<br />
                Site web : https://www.cloudflare.com
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
                3. Propriete intellectuelle
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                L&apos;entreprise NBCA LTD est proprietaire des droits de propriete intellectuelle
                ou detient les droits d&apos;usage sur tous les elements accessibles sur le site,
                notamment : les textes, les images, les graphismes, le logo, les icones.<br /><br />
                Toute reproduction, representation, modification, publication, adaptation de tout
                ou partie des elements du site, quel que soit le moyen ou le procede utilise,
                est interdite, sauf autorisation ecrite prealable de l&apos;entreprise NBCA LTD.<br /><br />
                Toute exploitation non autorisee du site ou d&apos;un quelconque element qu&apos;il contient
                sera consideree comme constitutive d&apos;une contrefacon et poursuivie conformement
                aux dispositions des articles L.335-2 et suivants du Code de Propriete Intellectuelle.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
                4. Limitation de responsabilite
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                MurExpert s&apos;efforce d&apos;assurer l&apos;exactitude et la mise a jour des informations
                diffusees sur ce site. Toutefois, MurExpert ne peut garantir l&apos;exactitude,
                la precision ou l&apos;exhaustivite des informations mises a disposition.
                Les informations presentees sur ce site sont donnees a titre indicatif
                et ne sauraient constituer un engagement contractuel.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
                5. Donnees personnelles
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Les donnees personnelles collectees via le formulaire de contact
                sont traitees conformement au Reglement General sur la Protection
                des Donnees (RGPD). Pour en savoir plus, consultez notre{" "}
                <a href="/politique-de-confidentialite/" className="text-[#E8952D] underline hover:text-[#E8952D]/80">
                  politique de confidentialite
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
                6. Droit applicable
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Les presentes mentions legales sont soumises au droit francais.
                En cas de litige, les tribunaux francais seront seuls competents.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
