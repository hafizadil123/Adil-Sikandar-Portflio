import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const variants = {
  primary:
    "bg-foreground text-background hover:opacity-90 btn-glow dark:bg-[linear-gradient(135deg,var(--foreground)_0%,color-mix(in_srgb,var(--foreground)_85%,var(--accent-from))_100%)]",
  secondary:
    "bg-transparent text-foreground border border-[var(--border-strong)] hover:bg-[var(--surface)] hover:border-[var(--border-strong)]",
  ghost:
    "bg-transparent text-muted-foreground hover:text-foreground border border-transparent hover:bg-[var(--surface)]",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 font-mono text-[11px] text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
