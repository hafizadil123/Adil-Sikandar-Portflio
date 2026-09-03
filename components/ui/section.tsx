"use client";

import { FadeIn } from "@/components/ui/motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  container?: "narrow" | "wide";
};

export function Section({
  id,
  children,
  className,
  container = "narrow",
}: SectionProps) {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <div
        className={cn(
          container === "narrow" ? "container-narrow" : "container-wide"
        )}
      >
        {children}
      </div>
    </section>
  );
}

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <FadeIn className={cn("mb-8 md:mb-10", className)}>
      <header>
        {label && <span className="label-pill">{label}</span>}
        <h2 className="headline-display mt-4 max-w-3xl text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-2xl text-base leading-[1.65] text-muted-foreground md:text-[16px]">
            {description}
          </p>
        )}
        <div className="divider-fade mt-6" />
      </header>
    </FadeIn>
  );
}
