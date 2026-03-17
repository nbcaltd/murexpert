"use client";

import { usePathname } from "next/navigation";

export function Canonical() {
  const pathname = usePathname();
  return <link rel="canonical" href={`https://murexpert.fr${pathname}`} />;
}
