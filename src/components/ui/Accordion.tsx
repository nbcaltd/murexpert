"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: string;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="overflow-hidden rounded-[0.9375rem] bg-white transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer group sm:px-8 sm:py-6"
            >
              <span className="pr-6 text-[0.9375rem] font-semibold text-[#1A1A1A] transition-colors group-hover:text-primary-600 sm:text-base">
                {item.question}
              </span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                  isOpen ? "bg-[#E8952D] rotate-180" : "bg-beige-100 group-hover:bg-beige-200"
                )}
              >
                <ChevronDown className={cn("h-4 w-4 transition-colors", isOpen ? "text-white" : "text-[#6B6B6B]")} />
              </span>
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
              )}
              style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
            >
              <p className="px-6 pr-12 text-[0.9375rem] leading-relaxed text-[#6B6B6B] sm:px-8">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
