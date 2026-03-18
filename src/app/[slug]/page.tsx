import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, CheckCircle2, AlertTriangle, ChevronRight } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { breadcrumbJsonLd, faqJsonLd, articleJsonLd, howToJsonLd } from "@/lib/seo";
import type { SeoPageContent, SeoSection } from "@/data/seo-pages/types";
import * as fs from "fs";
import * as path from "path";

// ── Load content helpers ──

const CONTENT_DIR = path.join(process.cwd(), "src/data/seo-pages/content");

function getAllSeoSlugs(): string[] {
  try {
    return fs
      .readdirSync(CONTENT_DIR)
      .filter((f) => f.endsWith(".json"))
      .map((f) => f.replace(".json", ""));
  } catch {
    return [];
  }
}

function getPageContent(slug: string): SeoPageContent | null {
  try {
    const filePath = path.join(CONTENT_DIR, `${slug}.json`);
    if (!fs.existsSync(filePath)) return null;
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return null;
  }
}

// ── Static params for build ──

export async function generateStaticParams() {
  return getAllSeoSlugs().map((slug) => ({ slug }));
}

// ── Dynamic metadata ──

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = getPageContent(slug);
  if (!content) return {};
  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

// ── Section renderer ──

function SectionContent({ section, isFirst }: { section: SeoSection; isFirst: boolean }) {
  return (
    <div>
      <h2
        className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5"
        style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
      >
        {section.h2}
      </h2>

      {section.alert && (
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-5 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <strong>Attention :</strong> {section.alert}
            </p>
          </div>
        </div>
      )}

      {section.intro && (
        <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">{section.intro}</p>
      )}

      {section.paragraphs?.map((p, i) => (
        <p key={i} className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">{p}</p>
      ))}

      {section.subsections?.map((sub, i) => (
        <div key={i}>
          <h3 className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3">{sub.h3}</h3>
          <p className="text-[0.9375rem] leading-relaxed text-[#6B6B6B] mb-4">{sub.text}</p>
        </div>
      ))}

      {section.list && (
        <ul className="space-y-3 mb-4">
          {section.list.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E8952D]" />
              <span className="text-[0.9375rem] text-[#6B6B6B]">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Mid-article CTA after first section */}
      {isFirst && (
        <div className="rounded-2xl bg-beige-100 p-6 sm:p-8 mt-8">
          <p className="text-lg font-semibold text-[#1A1A1A] mb-2">Besoin d&apos;un avis professionnel ?</p>
          <p className="text-sm text-[#6B6B6B] mb-4">
            Un expert MurExpert identifie la cause exacte et vous propose la solution adaptee. Diagnostic gratuit, sans engagement.
          </p>
          <Link
            href="/diagnostic-gratuit/"
            className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-6 py-2.5 text-sm font-semibold text-white hover:scale-[1.03] transition-all"
          >
            Demander mon diagnostic <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}

// ── Page component ──

export default async function SeoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getPageContent(slug);
  if (!content) notFound();

  const baseUrl = "https://murexpert.fr";
  const pageUrl = `${baseUrl}/${slug}/`;

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: baseUrl },
              { name: content.breadcrumbLabel, url: pageUrl },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(content.faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: content.metadata.title,
              description: content.metadata.description,
              url: pageUrl,
              datePublished: content.datePublished,
              dateModified: content.dateModified,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            howToJsonLd(content.howTo.title, content.howTo.steps, content.howTo.totalTime)
          ),
        }}
      />

      {/* Breadcrumb */}
      <div className="bg-beige-50 border-b border-beige-200">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A] font-medium">{content.breadcrumbLabel}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-beige-50 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#E8952D]/10 px-4 py-1.5 text-sm font-semibold text-[#E8952D]">
              {content.hero.badge}
            </span>
            <h1
              className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12] lg:text-[3.25rem] lg:leading-[1.08]"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
            >
              {content.hero.h1}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#6B6B6B]">
              {content.hero.description}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/diagnostic-gratuit/"
                className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
              >
                {content.hero.ctaText}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+33745881675"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#E8952D]"
              >
                <Phone className="h-4 w-4" /> 07 45 88 16 75
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-white pt-12 sm:pt-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={content.heroImage.src}
              alt={content.heroImage.alt}
              className="w-full h-[300px] sm:h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="space-y-12">
            {/* Main sections */}
            {content.sections.map((section, i) => (
              <SectionContent key={i} section={section} isFirst={i === 0} />
            ))}

            {/* Pricing table */}
            {content.pricing && content.pricing.length > 0 && (
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead className="bg-beige-50">
                    <tr>
                      <th className="px-5 py-3 text-left font-semibold text-[#1A1A1A]">
                        Traitement
                      </th>
                      <th className="px-5 py-3 text-left font-semibold text-[#1A1A1A]">
                        Prix indicatif
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {content.pricing.map((row, i) => (
                      <tr key={i}>
                        <td className="px-5 py-3 text-[#6B6B6B]">{row.item}</td>
                        <td className="px-5 py-3 text-[#6B6B6B]">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Final CTA */}
            <div className="rounded-2xl bg-beige-100 p-8 sm:p-10 text-center">
              <h2
                className="text-2xl text-[#1A1A1A] mb-3"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                Resolvez votre probleme d&apos;humidite
              </h2>
              <p className="text-[#6B6B6B] mb-6 max-w-lg mx-auto">
                Ne laissez pas l&apos;humidite deteriorer votre logement et votre sante. Diagnostic
                gratuit et sans engagement.
              </p>
              <Link
                href="/diagnostic-gratuit/"
                className="inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white hover:scale-[1.03] transition-all"
              >
                Demander mon diagnostic gratuit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Related links */}
            {content.relatedLinks.length > 0 && (
              <div>
                <h2
                  className="text-2xl text-[#1A1A1A] sm:text-3xl mb-5"
                  style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
                >
                  En savoir plus sur l&apos;humidite
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {content.relatedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between rounded-xl border border-gray-100 px-5 py-3.5 transition-all hover:border-beige-300 hover:shadow-sm group"
                    >
                      <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#E8952D] transition-colors">
                        {link.title}
                      </span>
                      <ChevronRight className="h-4 w-4 text-[#6B6B6B] group-hover:text-[#E8952D]" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ */}
            <div>
              <h2
                className="text-2xl text-[#1A1A1A] sm:text-3xl mb-8"
                style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
              >
                Questions frequentes
              </h2>
              <Accordion items={content.faq} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
