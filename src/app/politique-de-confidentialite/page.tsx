import type { Metadata } from "next";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Politique de Confidentialite",
  description: "Politique de confidentialite de MurExpert.fr - Comment nous traitons vos donnees personnelles.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: "https://murexpert.fr" },
              { name: "Politique de confidentialite", url: "https://murexpert.fr/politique-de-confidentialite/" },
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
              Politique de confidentialite
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="prose prose-gray max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
                1. Responsable du traitement
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Le responsable du traitement des donnees personnelles est :<br />
                NBCA LTD — N° d&apos;enregistrement C96614 — TVA MT27550504<br />
                Triq San Massimiljanu Kolbe, Mais 2, the Peak BA, SPB1231 St. Paul&apos;s Bay, Malta<br />
                Email : contact@murexpert.fr<br />
                Telephone : 07 45 88 16 75
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
                2. Donnees collectees
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Lors de l&apos;utilisation du formulaire de diagnostic, nous collectons les donnees suivantes :
                nom, prenom, adresse email, numero de telephone, ville, type de probleme d&apos;humidite
                et description du probleme. Ces donnees sont necessaires pour traiter votre demande
                de diagnostic gratuit et vous recontacter.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
                3. Finalite du traitement
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Vos donnees sont collectees dans le but de :<br />
                - Traiter votre demande de diagnostic humidite<br />
                - Vous recontacter pour planifier l&apos;intervention<br />
                - Vous fournir un devis personnalise<br />
                - Ameliorer nos services<br />
                Vos donnees ne sont jamais revendues a des tiers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
                4. Base legale du traitement
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Le traitement de vos donnees repose sur votre consentement, que vous donnez en
                cochant la case prevue a cet effet dans le formulaire de contact. Vous pouvez
                retirer votre consentement a tout moment en nous contactant par email.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
                5. Duree de conservation
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Vos donnees personnelles sont conservees pendant une duree de 3 ans
                a compter de votre derniere interaction avec MurExpert. Passe ce delai,
                vos donnees sont automatiquement supprimees.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
                6. Vos droits
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Conformement au RGPD, vous disposez des droits suivants :<br />
                - Droit d&apos;acces a vos donnees<br />
                - Droit de rectification<br />
                - Droit a l&apos;effacement (droit a l&apos;oubli)<br />
                - Droit a la portabilite des donnees<br />
                - Droit d&apos;opposition au traitement<br />
                - Droit a la limitation du traitement<br /><br />
                Pour exercer ces droits, contactez-nous a : contact@murexpert.fr<br />
                Vous pouvez egalement adresser une reclamation a la CNIL (www.cnil.fr).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
                7. Securite des donnees
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B]">
                Nous mettons en oeuvre toutes les mesures techniques et organisationnelles
                appropriees pour assurer la securite de vos donnees personnelles et les
                proteger contre toute destruction, perte, alteration ou acces non autorise.
                Le site utilise le protocole HTTPS pour securiser les echanges de donnees.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
