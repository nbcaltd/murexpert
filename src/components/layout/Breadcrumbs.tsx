import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <Container className="py-4">
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-1.5 text-sm text-[#6B6B6B]">
          <li>
            <Link href="/" className="transition-colors hover:text-[#1A1A1A]">
              Accueil
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" />
              {item.href ? (
                <Link href={item.href} className="transition-colors hover:text-[#1A1A1A]">
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-[#1A1A1A]">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </Container>
  );
}
