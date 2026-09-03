"use client";

import { expertise } from "@/data/profile";
import { Section, SectionHeader } from "@/components/ui/section";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function TechnicalExpertise() {
  const domains = Object.entries(expertise);

  return (
    <Section>
      <SectionHeader
        label="Technical Expertise"
        title="Engineering capability map"
        description="Technologies organized by domain — reflecting production experience across the full stack and AI."
      />

      <StaggerContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {domains.map(([domain, skills]) => (
          <StaggerItem key={domain}>
            <div className="panel panel-interactive h-full p-6">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                {domain}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-sm text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
