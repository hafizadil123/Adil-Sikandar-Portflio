"use client";

import { writing } from "@/data/profile";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";
import { ArrowUpRight } from "lucide-react";

export function Writing() {
  return (
    <Section id="writing">
      <SectionHeader
        label="Writing"
        title={writing.headline}
        description={writing.description}
      />

      <FadeIn>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {writing.topics.map((topic) => (
            <div
              key={topic}
              className="panel panel-interactive px-5 py-4 text-sm leading-relaxed text-muted-foreground"
            >
              {topic}
            </div>
          ))}
        </div>

        <div className="panel mt-6 flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
          <p className="max-w-xl text-sm leading-[1.7] text-muted-foreground md:text-[15px]">
            {writing.note}
          </p>
          <Button
            href={writing.link}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            View on LinkedIn
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </FadeIn>
    </Section>
  );
}
