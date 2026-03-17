import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "mb-14", className)}>
      {eyebrow && (
        <span className="mb-4 inline-block rounded-full bg-[#E8952D]/10 px-4 py-1.5 text-sm font-semibold text-[#E8952D]">
          {eyebrow}
        </span>
      )}
      <h2
        className="text-3xl text-[#1A1A1A] sm:text-[2.75rem] sm:leading-[1.12]"
        style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
      >
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#6B6B6B]">
          {description}
        </p>
      )}
    </div>
  );
}
