"use client";

import { philosophy } from "@/data/profile";
import { Section, SectionHeader } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/motion";
import { ArrowRight } from "lucide-react";

export function Philosophy() {
  return (
    <Section>
      <SectionHeader
        label="AI & Engineering"
        title={philosophy.headline}
        description={philosophy.description}
      />

      <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
        <FadeIn>
          <div className="grid gap-2 sm:grid-cols-2">
            {philosophy.concepts.map((concept) => (
              <div
                key={concept}
                className="panel panel-interactive px-4 py-3.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {concept}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="panel p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
              AI System Flow
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-2">
              {philosophy.flow.map((node, i) => (
                <div key={node} className="flex items-center gap-2">
                  <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 font-mono text-xs">
                    {node}
                  </span>
                  {i < philosophy.flow.length - 1 && (
                    <ArrowRight className="h-3 w-3 text-muted" aria-hidden />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-7 text-sm leading-[1.7] text-muted-foreground">
              From user-facing applications through intelligent agents, tool
              orchestration, and data pipelines — I design systems where
              traditional software engineering and AI capabilities work together
              in production.
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
