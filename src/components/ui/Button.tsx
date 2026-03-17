import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[#E8952D] text-white hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(198,11,30,0.3)]",
  secondary:
    "bg-[#1A1A1A] text-white hover:scale-[1.03]",
  outline:
    "border-[1.5px] border-[#E0E0E0] text-[#1A1A1A] hover:border-[#1A1A1A] hover:scale-[1.03]",
  ghost:
    "text-[#1A1A1A] hover:bg-beige-100",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-full",
  md: "px-6 py-2.5 text-[0.9375rem] rounded-full",
  lg: "px-7 py-3.5 text-[0.9375rem] rounded-full",
};

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    className
  );
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
