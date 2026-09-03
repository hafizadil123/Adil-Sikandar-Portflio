"use client";

import { profile } from "@/data/profile";
import { Button, Tag } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { ResumeDownload } from "@/components/ui/resume-download";
import { TypewriterCTA } from "@/components/ui/typewriter";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";

const terminalLines = [
  { prompt: "cert", text: "Microsoft DP-100 · Azure ML", accent: true },
  { prompt: "models", text: "Fine-tuned LLMs · Neural nets" },
  { prompt: "stack", text: "React · Next.js · PyTorch · Python" },
  { prompt: "focus", text: "E-commerce · 10+ AI products" },
];

function TerminalPanel() {
  return (
    <div className="panel hidden overflow-hidden lg:block" aria-hidden>
      <div className="flex items-center gap-2 border-b border-[var(--border)] px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        <span className="ml-2 font-mono text-[11px] text-muted">~/adil/engineering</span>
      </div>
      <div className="space-y-4 p-6 font-mono text-sm">
        {terminalLines.map((line, index) => (
          <motion.div
            key={line.prompt}
            className="flex gap-3"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.5 + index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="shrink-0 text-muted">{line.prompt}</span>
            <span className={line.accent ? "text-accent" : "text-muted-foreground"}>
              {line.text}
            </span>
          </motion.div>
        ))}
        <motion.span
          className="inline-block h-4 w-2 bg-accent/80"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
      <div className="border-t border-[var(--border)] px-6 py-4">
        <div className="flex items-center justify-between font-mono text-[11px] text-muted">
          <span>Canada · Full-stack · AI</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            available
          </span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20">
      <div className="absolute inset-0 grid-bg opacity-80" aria-hidden />
      <div className="subtle-glow right-0 top-0 h-[400px] w-[400px] translate-x-1/4" aria-hidden />

      <div className="container-narrow relative px-5 pb-12 pt-8 md:px-8 md:pb-14 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <FadeIn onMount>
              <span className="label-pill">{profile.label}</span>
            </FadeIn>

            <FadeIn onMount delay={0.08}>
              <h1 className="headline-display text-gradient mt-5 text-[clamp(2.75rem,6.5vw,4.75rem)] font-semibold tracking-tight">
                {profile.name}
              </h1>
            </FadeIn>

            <FadeIn onMount delay={0.14}>
              <p className="mt-4 max-w-lg text-[clamp(1.0625rem,2vw,1.375rem)] font-medium leading-snug tracking-tight text-muted-foreground">
                {profile.tagline}
              </p>
            </FadeIn>

            <FadeIn onMount delay={0.2}>
              <p className="mt-3 max-w-lg text-base leading-[1.65] text-muted-foreground">
                {profile.headline}
              </p>
            </FadeIn>

            <FadeIn onMount delay={0.26}>
              <div className="mt-7">
                <TypewriterCTA className="max-w-xl" />
              </div>
            </FadeIn>

            <FadeIn onMount delay={0.34}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button href="#ai-products" size="lg">
                  View AI Products
                </Button>
                <Button
                  href={profile.bookingUrl}
                  variant="secondary"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="h-4 w-4" />
                  Book a meeting
                </Button>
                <ResumeDownload size="lg" />
                <Button href={`mailto:${profile.email}`} variant="ghost" size="lg">
                  {profile.email}
                </Button>
              </div>
            </FadeIn>

            <FadeIn onMount delay={0.4}>
              <div className="mt-5 flex flex-wrap items-center gap-5">
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn onMount delay={0.18} direction="right">
            <TerminalPanel />
          </FadeIn>
        </div>

        <StaggerContainer onMount className="mt-10 grid gap-3 sm:grid-cols-3">
          {profile.stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="panel px-6 py-5">
                <p className="font-mono text-3xl font-semibold tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn onMount delay={0.55}>
          <div className="mt-5 flex flex-wrap gap-2">
            {profile.heroTech.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
