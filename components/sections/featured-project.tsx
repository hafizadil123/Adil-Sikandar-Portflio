"use client";

import { featuredAIProduct } from "@/data/ai-products";
import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/button";
import { AnimatedBar, FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Star } from "lucide-react";

function ArchitecturePanel() {
  const layers = [
    { label: "Mobile App", detail: "iOS / Android", w: "100%" },
    { label: "LLM Engine", detail: "Coaching flows", w: "78%" },
    { label: "Analytics", detail: "Personalization", w: "58%" },
    { label: "Cloud API", detail: "Production infra", w: "42%" },
  ];

  return (
    <div className="panel overflow-hidden" aria-hidden>
      <div className="border-b border-[var(--border)] px-5 py-3.5">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
          System Architecture
        </p>
      </div>
      <div className="grid gap-5 p-6 sm:grid-cols-2">
        {layers.map((layer, index) => (
          <FadeIn key={layer.label} delay={index * 0.08}>
            <div>
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-medium">{layer.label}</span>
                <span className="font-mono text-[10px] text-muted">{layer.detail}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[var(--surface)]">
                <AnimatedBar width={layer.w} delay={index * 0.1} />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

export function FeaturedProject() {
  const featured = featuredAIProduct;

  const detailBlocks = [
    { title: "Problem", content: featured.problem },
    { title: "Architecture", content: featured.architecture },
    { title: "My role", content: featured.role },
    ...(featured.outcome ? [{ title: "Outcome", content: featured.outcome }] : []),
  ];

  return (
    <Section className="!pt-6">
      <FadeIn>
        <div className="panel p-6 md:p-8">
          <span className="label-pill">Featured Work</span>

          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="headline-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-tight">
                {featured.name}
              </h2>
              <p className="mt-4 max-w-2xl text-[17px] leading-[1.65] text-muted-foreground">
                {featured.tagline}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-4 lg:gap-8">
              {featured.users && (
                <div>
                  <p className="font-mono text-3xl font-semibold">{featured.users}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    users
                  </p>
                </div>
              )}
              {featured.rating && (
                <div className="border-l border-[var(--border)] pl-6 lg:pl-8">
                  <p className="flex items-center gap-1.5 font-mono text-3xl font-semibold">
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    {featured.rating}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    rating
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {featured.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.08} className="mt-5 block">
        <ArchitecturePanel />
      </FadeIn>

      <StaggerContainer className="mt-5 grid gap-4 sm:grid-cols-2">
        {detailBlocks.map((block) => (
          <StaggerItem key={block.title}>
            <div className="panel panel-interactive h-full p-5">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                {block.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.7] text-muted-foreground">
                {block.content}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
