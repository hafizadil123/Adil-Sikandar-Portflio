"use client";

import { contact, profile } from "@/data/profile";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";
import { ResumeDownload } from "@/components/ui/resume-download";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { ArrowUpRight, Copy, Mail } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact">
      <FadeIn>
        <div className="panel relative overflow-hidden p-6 md:p-10 lg:p-12">
          <div className="subtle-glow -right-20 -top-20 h-64 w-64" aria-hidden />

          <div className="relative">
            <span className="label-pill">Contact</span>
            <h2 className="headline-display mt-4 max-w-2xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight">
              {contact.headline}
            </h2>
            <p className="mt-3 max-w-xl text-base leading-[1.65] text-muted-foreground">
              {contact.description}
            </p>

            <div className="mt-6">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex flex-col gap-1 transition-opacity hover:opacity-80"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  Email
                </span>
                <span className="flex items-center gap-2 text-[clamp(1.25rem,3vw,2rem)] font-medium tracking-tight text-foreground">
                  {profile.email}
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:h-6 md:w-6" />
                </span>
              </a>
              <button
                onClick={copyEmail}
                className="focus-ring mt-3 inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-[var(--border-strong)] hover:text-foreground"
              >
                <Copy className="h-3 w-3" />
                {copied ? "Copied" : "Copy email"}
              </button>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {contact.services.map((service) => (
                <li key={service}>
                  <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-muted-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>

            <div className="divider-fade my-6" />

            <div className="flex flex-wrap gap-3">
              <Button href={`mailto:${profile.email}`} size="lg">
                <Mail className="h-4 w-4" />
                Send email
              </Button>
              <ResumeDownload size="lg" />
              <Button
                href={profile.social.linkedin}
                variant="secondary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </Button>
              <Button
                href={profile.social.github}
                variant="secondary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
