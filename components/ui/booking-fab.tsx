"use client";

import { profile } from "@/data/profile";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";

export function BookingFab() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={profile.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a meeting on Calendly"
      initial={
        shouldReduceMotion
          ? false
          : { y: "-100vh", opacity: 0, rotate: -8 }
      }
      animate={
        shouldReduceMotion
          ? { y: 0, opacity: 1 }
          : {
              y: 0,
              opacity: 1,
              rotate: 0,
            }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              delay: 0.7,
              type: "spring",
              stiffness: 120,
              damping: 16,
              mass: 0.9,
            }
      }
      whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="group focus-ring fixed z-40 flex items-center gap-2.5 rounded-full border border-[var(--border-strong)] bg-foreground px-4 py-3 text-background shadow-[0_18px_40px_-16px_var(--accent-glow)] [bottom:max(1.25rem,env(safe-area-inset-bottom))] right-4 md:right-6"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-background/15">
        <span
          className="absolute inset-0 animate-ping rounded-full bg-background/25 motion-reduce:animate-none"
          aria-hidden
        />
        <Calendar className="relative h-4 w-4" />
      </span>
      <span className="pr-0.5 text-left leading-tight">
        <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-background/65">
          Let’s talk
        </span>
        <span className="flex items-center gap-1 text-sm font-medium">
          Book a meeting
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </span>
    </motion.a>
  );
}
