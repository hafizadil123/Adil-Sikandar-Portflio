"use client";

import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const PHRASES = [
  "Facing a tough engineering issue?",
  "Stuck on an AI or product problem?",
  "Need help shipping something hard?",
  "Building and looking for a partner?",
  "Have a difficult system to design?",
];

type TypewriterCTAProps = {
  className?: string;
  phrases?: string[];
};

export function TypewriterCTA({
  className,
  phrases = PHRASES,
}: TypewriterCTAProps) {
  const shouldReduceMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState<"phrase" | "reach" | "email" | "hold" | "erase">(
    "phrase"
  );
  const [reachText, setReachText] = useState("");
  const [emailText, setEmailText] = useState("");

  const reachLine = "Reach me at ";
  const email = profile.email;

  useEffect(() => {
    if (shouldReduceMotion) return;

    let timeout: ReturnType<typeof setTimeout>;
    const phrase = phrases[phraseIndex];

    if (phase === "phrase") {
      if (display.length < phrase.length) {
        timeout = setTimeout(() => {
          setDisplay(phrase.slice(0, display.length + 1));
        }, 38);
      } else {
        timeout = setTimeout(() => setPhase("reach"), 700);
      }
    } else if (phase === "reach") {
      if (reachText.length < reachLine.length) {
        timeout = setTimeout(() => {
          setReachText(reachLine.slice(0, reachText.length + 1));
        }, 32);
      } else {
        timeout = setTimeout(() => setPhase("email"), 120);
      }
    } else if (phase === "email") {
      if (emailText.length < email.length) {
        timeout = setTimeout(() => {
          setEmailText(email.slice(0, emailText.length + 1));
        }, 42);
      } else {
        timeout = setTimeout(() => setPhase("hold"), 2200);
      }
    } else if (phase === "hold") {
      timeout = setTimeout(() => setPhase("erase"), 400);
    } else if (phase === "erase") {
      if (emailText.length > 0 || reachText.length > 0 || display.length > 0) {
        timeout = setTimeout(() => {
          if (emailText.length > 0) {
            setEmailText((t) => t.slice(0, -1));
          } else if (reachText.length > 0) {
            setReachText((t) => t.slice(0, -1));
          } else {
            setDisplay((t) => t.slice(0, -1));
          }
        }, 16);
      } else {
        timeout = setTimeout(() => {
          setPhraseIndex((i) => (i + 1) % phrases.length);
          setPhase("phrase");
        }, 280);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    display,
    reachText,
    emailText,
    phase,
    phraseIndex,
    phrases,
    shouldReduceMotion,
    email,
    reachLine,
  ]);

  if (shouldReduceMotion) {
    return (
      <div className={cn("space-y-3", className)}>
        <p className="text-[clamp(1.25rem,3vw,1.75rem)] font-medium tracking-tight text-muted-foreground">
          {phrases[0]}
        </p>
        <p className="text-[clamp(1.25rem,3vw,1.75rem)] font-medium tracking-tight">
          Reach me at{" "}
          <a
            href={`mailto:${email}`}
            className="text-accent underline-offset-4 hover:underline"
          >
            {email}
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className={cn("space-y-3", className)} aria-live="polite">
      <p className="min-h-[1.4em] text-[clamp(1.25rem,3vw,1.75rem)] font-medium tracking-tight text-muted-foreground">
        {display}
        {phase === "phrase" && (
          <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.15em] bg-accent align-middle animate-pulse" />
        )}
      </p>
      <p className="min-h-[1.4em] text-[clamp(1.25rem,3vw,1.75rem)] font-medium tracking-tight">
        {reachText}
        <a
          href={`mailto:${email}`}
          className="text-accent underline-offset-4 transition-colors hover:underline"
        >
          {emailText}
        </a>
        {(phase === "reach" || phase === "email" || phase === "hold") && (
          <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.15em] bg-accent align-middle animate-pulse" />
        )}
      </p>
    </div>
  );
}
