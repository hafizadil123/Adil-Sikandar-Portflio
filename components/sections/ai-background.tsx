"use client";

import {
  aiBackground,
  certifications,
  research,
} from "@/data/profile";
import { Section, SectionHeader } from "@/components/ui/section";
import { Tag } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Award, BookOpen, Brain, Cpu } from "lucide-react";

const pillarIcons = [Award, Cpu, Brain, BookOpen] as const;

export function AIBackground() {
  return (
    <Section id="ai-background">
      <SectionHeader
        label="AI Credentials"
        title={aiBackground.headline}
        description={aiBackground.description}
      />

      <StaggerContainer className="grid gap-4 sm:grid-cols-2">
        {aiBackground.pillars.map((pillar, index) => {
          const Icon = pillarIcons[index] ?? Brain;
          return (
            <StaggerItem key={pillar.title}>
              <article className="panel panel-interactive h-full p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                    <Icon className="h-4 w-4 text-accent" />
                  </span>
                  <div>
                    <h3 className="font-semibold tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.65] text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <FadeIn>
          <div className="panel h-full p-6 md:p-8">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
              Certifications
            </h3>
            <ul className="mt-6 space-y-6">
              {certifications.map((cert) => (
                <li
                  key={cert.id}
                  className="border-b border-[var(--border)] pb-6 last:border-0 last:pb-0"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold">{cert.name}</p>
                    <Tag>{cert.code}</Tag>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                  <p className="mt-3 text-sm leading-[1.65] text-muted-foreground">
                    {cert.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="panel h-full p-6 md:p-8">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
              {research.headline}
            </h3>
            <p className="mt-3 text-sm leading-[1.65] text-muted-foreground">
              {research.description}
            </p>
            <ul className="mt-6 space-y-6">
              {research.items.map((item) => (
                <li
                  key={item.title}
                  className="border-b border-[var(--border)] pb-6 last:border-0 last:pb-0"
                >
                  <p className="font-medium leading-snug">{item.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.type} · {item.institution}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-muted">
                    {item.highlight} · {item.year}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.topics.map((topic) => (
                      <Tag key={topic}>{topic}</Tag>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
