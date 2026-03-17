export interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    name: "Problemes",
    href: "#",
    children: [
      { name: "Moisissure", href: "/moisissure-mur/" },
      { name: "Salpetre", href: "/salpetre/" },
      { name: "Remontee capillaire", href: "/remontee-capillaire/" },
      { name: "Infiltration", href: "/humidite-maison/" },
      { name: "Condensation", href: "/traitement-humidite/" },
    ],
  },
  {
    name: "Solutions",
    href: "#",
    children: [
      { name: "Injection de resine", href: "/traitement-humidite/#injection-resine" },
      { name: "VMC / VMI", href: "/traitement-humidite/#vmc-vmi" },
      { name: "Cuvelage", href: "/traitement-humidite/#cuvelage" },
      { name: "Drainage", href: "/traitement-humidite/#drainage" },
      { name: "Assechement des murs", href: "/traitement-humidite/#assechement" },
    ],
  },
  { name: "Diagnostic", href: "/diagnostic-humidite/" },
  { name: "Nos Villes", href: "#villes" },
  { name: "Diagnostic Gratuit", href: "/diagnostic-gratuit/" },
];
