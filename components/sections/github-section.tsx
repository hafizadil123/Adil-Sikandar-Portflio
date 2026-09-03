"use client";

import { github, profile } from "@/data/profile";
import { Section, SectionHeader } from "@/components/ui/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { GitHubIcon } from "@/components/icons/social";
import { ArrowUpRight } from "lucide-react";

export function GitHubSection() {
  return (
    <Section>
      <SectionHeader
        label="Open Source"
        title={github.headline}
        description={github.description}
      />

      <FadeIn>
        <a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring panel panel-interactive group mb-5 inline-flex items-center gap-3 px-5 py-3.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <GitHubIcon className="h-5 w-5" />
          <span className="font-mono text-sm">@{github.username}</span>
          <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
        </a>
      </FadeIn>

      <StaggerContainer className="grid gap-4 md:grid-cols-2">
        {github.repositories.map((repo) => (
          <StaggerItem key={repo.name}>
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring panel panel-interactive group block h-full p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-mono text-sm font-medium">{repo.name}</h3>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </div>
              <p className="mt-2 text-sm leading-[1.65] text-muted-foreground">
                {repo.description}
              </p>
              <p className="mt-4 font-mono text-xs text-muted">{repo.language}</p>
            </a>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
