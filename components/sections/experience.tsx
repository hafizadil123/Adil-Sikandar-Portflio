"use client";

import { experience } from "@/data/profile";
import { Section, SectionHeader } from "@/components/ui/section";
import { Tag } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

export function EngineeringExperience() {
  return (
    <Section id="experience">
      <SectionHeader
        label="Experience"
        title="Engineering across enterprise and product"
        description="A progression from backend development through full-stack architecture and AI-focused engineering."
      />

      <div className="space-y-3">
        {experience.map((item, index) => (
          <FadeIn key={item.id} delay={index * 0.08}>
            <article className="panel p-6 md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="font-mono text-sm text-muted">{item.period}</p>
                <p className="font-mono text-[11px] text-muted">{item.location}</p>
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-1 text-muted-foreground">{item.company}</p>
              <p className="mt-4 max-w-3xl text-sm leading-[1.7] text-muted-foreground md:text-[15px]">
                {item.description}
              </p>

              <div className="mt-6">
                <h4 className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                  Selected contributions
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {item.contributions.map((contribution) => (
                    <li
                      key={contribution}
                      className="flex gap-3 text-sm leading-[1.65] text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {contribution}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {item.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
