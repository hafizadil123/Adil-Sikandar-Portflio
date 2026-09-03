"use client";

import { projects } from "@/data/profile";
import { Section, SectionHeader } from "@/components/ui/section";
import { Tag } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <FadeIn delay={index * 0.06}>
      <article className="panel panel-interactive h-full p-6 md:p-7">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
          {project.group === "enterprise" ? "Enterprise" : "Product"}
        </p>
        <h3 className="mt-3 text-xl font-semibold tracking-tight">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-[1.65] text-muted-foreground">
          {project.tagline}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="mt-7 space-y-5 border-t border-[var(--border)] pt-6">
          {[
            { title: "Problem", content: project.problem },
            { title: "Architecture", content: project.architecture },
            { title: "My role", content: project.role },
            ...(project.outcome
              ? [{ title: "Outcome", content: project.outcome }]
              : []),
          ].map((block) => (
            <div key={block.title}>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                {block.title}
              </h4>
              <p className="mt-2 text-sm leading-[1.65] text-muted-foreground">
                {block.content}
              </p>
            </div>
          ))}
        </div>
      </article>
    </FadeIn>
  );
}

function ProjectGroup({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: typeof projects;
}) {
  if (items.length === 0) return null;

  const gridClass =
    items.length === 1
      ? "grid-cols-1 max-w-3xl"
      : items.length === 2
        ? "grid-cols-1 md:grid-cols-2"
        : "grid-cols-1 lg:grid-cols-3";

  return (
    <div className="mb-10 last:mb-0">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground">{description}</p>
      <div className={cn("mt-5 grid gap-4", gridClass)}>
        {items.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

export function SelectedWork() {
  const enterprise = projects.filter((p) => p.group === "enterprise");
  const earlier = projects.filter((p) => p.group === "earlier");

  return (
    <Section id="work">
      <SectionHeader
        label="Selected Work"
        title="Enterprise platforms and product engineering"
        description="Production systems from large-scale enterprise delivery to full-stack product builds."
      />
      <ProjectGroup
        title="Enterprise & AI Platform"
        description="Recent platform work and large-scale enterprise delivery — e-commerce with fine-tuned AI models, telecommunications portals, and full-stack systems at production scale."
        items={enterprise}
      />
      <ProjectGroup
        title="Product Engineering"
        description="Full-stack platforms built from concept through deployment."
        items={earlier}
      />
    </Section>
  );
}
