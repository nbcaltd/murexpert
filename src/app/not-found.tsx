import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center py-32 text-center">
      <p
        className="text-[8rem] leading-none text-beige-200 sm:text-[12rem]"
        style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
      >
        404
      </p>
      <h1
        className="mt-4 text-3xl text-[#1A1A1A] sm:text-4xl"
        style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
      >
        Page introuvable
      </h1>
      <p className="mt-4 max-w-md text-lg text-[#6B6B6B]">
        La page que vous recherchez n&apos;existe pas ou a ete deplacee.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 rounded-full bg-[#E8952D] px-7 py-3.5 text-[0.9375rem] font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
        >
          Retour a l&apos;accueil
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Container>
  );
}
