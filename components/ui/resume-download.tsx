"use client";

import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { Download, FileText } from "lucide-react";

type ResumeDownloadProps = {
  variant?: "button" | "card" | "nav" | "footer";
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
};

function AnimatedDownloadIcon({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Download className={className} />;
  }

  return (
    <motion.span
      className="inline-flex"
      animate={{ y: [0, 3, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <Download className={className} />
    </motion.span>
  );
}

export function ResumeDownload({
  variant = "button",
  size = "lg",
  className,
  label = "Download Resume",
}: ResumeDownloadProps) {
  const shouldReduceMotion = useReducedMotion();

  if (variant === "card") {
    return (
      <motion.div
        className={cn(
          "panel resume-highlight-border resume-shine-sweep relative overflow-hidden p-6",
          className
        )}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative flex items-start gap-4">
          <motion.div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)]"
            animate={
              shouldReduceMotion
                ? undefined
                : { scale: [1, 1.05, 1], rotate: [0, -2, 2, 0] }
            }
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <FileText className="h-5 w-5 text-accent" />
          </motion.div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                Resume
              </h3>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Full work history, skills, and education — available as a PDF download.
            </p>
          </div>
        </div>

        <div className="relative mt-5">
          <motion.div
            className="inline-flex w-full"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            <Button
              href={profile.resumeUrl}
              download={profile.resumeFilename}
              variant="secondary"
              size="md"
              className="resume-highlight-border relative w-full"
            >
              <AnimatedDownloadIcon className="h-4 w-4" />
              {label}
            </Button>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  const buttonLabel = variant === "nav" ? "Resume" : label;

  const content = (
    <Button
      href={profile.resumeUrl}
      download={profile.resumeFilename}
      variant={variant === "footer" ? "ghost" : "secondary"}
      size={variant === "nav" ? "sm" : size}
      className={cn(
        "relative",
        variant !== "footer" && "resume-highlight-border",
        variant === "footer" &&
          "rounded-full border border-[var(--border)] px-4 py-2.5 font-mono text-xs",
        className
      )}
    >
      <AnimatedDownloadIcon
        className={cn(variant === "nav" ? "h-3.5 w-3.5" : "h-4 w-4")}
      />
      {buttonLabel}
    </Button>
  );

  if (shouldReduceMotion || variant === "footer") {
    return content;
  }

  return (
    <motion.div
      className="inline-flex"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {content}
    </motion.div>
  );
}
