"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (400px)
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
    >
      {/* Dismiss button */}
      <button
        onClick={() => setDismissed(true)}
        className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors cursor-pointer"
        aria-label="Fermer"
      >
        <X className="h-3.5 w-3.5" />
      </button>

      <Link
        href="/diagnostic-gratuit/"
        className="flex items-center gap-2.5 rounded-full bg-[#E8952D] px-6 py-3.5 text-[0.9375rem] font-semibold text-white shadow-[0_8px_32px_rgba(232,149,45,0.4)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_12px_40px_rgba(232,149,45,0.5)]"
      >
        Obtenir un devis gratuit
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
