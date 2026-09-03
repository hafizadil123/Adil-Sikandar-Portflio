"use client";

import { about, certifications, education, research } from "@/data/profile";
import { Section, SectionHeader } from "@/components/ui/section";
import { Tag } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";
import { ResumeDownload } from "@/components/ui/resume-download";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:gap-10">
        <div>
          <SectionHeader
            label="About"
            title="From web development to AI engineering and research"
          />
          <FadeIn>
            <div className="space-y-5 text-[15px] leading-[1.75] text-muted-foreground md:text-base">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="space-y-4">
          <ResumeDownload variant="card" />

          <FadeIn delay={0.08}>
            <div className="panel p-6">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                Certifications
              </h3>
              <ul className="mt-5 space-y-4">
                {certifications.map((cert) => (
                  <li key={cert.id}>
                    <p className="font-medium">{cert.name}</p>
                    <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      {cert.issuer}
                      <Tag className="!px-2 !py-0.5 !text-[10px]">
                        {cert.code}
                      </Tag>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="panel p-6">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                Education
              </h3>
              <ul className="mt-5 space-y-5">
                {education.map((item) => (
                  <li
                    key={item.degree}
                    className="border-b border-[var(--border)] pb-5 last:border-0 last:pb-0"
                  >
                    <p className="font-medium">{item.degree}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.institution}
                    </p>
                    <p className="mt-0.5 font-mono text-[11px] text-muted">
                      {item.location} · {item.year}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.16}>
            <div className="panel p-6">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                Research
              </h3>
              <ul className="mt-5 space-y-4">
                {research.items.map((item) => (
                  <li key={item.title}>
                    <p className="text-sm font-medium leading-snug">
                      {item.title}
                    </p>
                    <p className="mt-1.5 font-mono text-[11px] text-muted">
                      {item.highlight} · {item.year}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
