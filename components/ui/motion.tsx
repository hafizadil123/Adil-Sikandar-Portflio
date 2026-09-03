"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const easeOut = [0.22, 1, 0.36, 1] as const;

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Play on mount instead of scroll — use for above-the-fold content */
  onMount?: boolean;
};

function getOffset(direction: FadeInProps["direction"]) {
  switch (direction) {
    case "down":
      return { y: -24 };
    case "left":
      return { x: 24 };
    case "right":
      return { x: -24 };
    case "none":
      return {};
    default:
      return { y: 24 };
  }
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  onMount = false,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const initial = {
    opacity: 0,
    scale: 0.98,
    filter: "blur(6px)",
    ...getOffset(direction),
  };

  const animate = {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
  };

  const transition = {
    duration: 0.65,
    delay,
    ease: easeOut,
  };

  if (onMount) {
    return (
      <motion.div
        className={className}
        initial={initial}
        animate={animate}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.15 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  onMount = false,
  stagger = 0.09,
}: {
  children: ReactNode;
  className?: string;
  onMount?: boolean;
  stagger?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: 0.05 },
    },
  };

  if (onMount) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.97, filter: "blur(4px)" },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.55, ease: easeOut },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{
        y: -3,
        transition: { duration: 0.25, ease: easeOut },
      }}
      whileTap={{ scale: 0.995 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedBar({
  width,
  className,
  delay = 0,
}: {
  width: string;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div
        className={cn("h-full rounded-full bg-accent/70", className)}
        style={{ width }}
      />
    );
  }

  return (
    <motion.div
      className={cn("h-full rounded-full bg-accent/70", className)}
      initial={{ width: 0, opacity: 0.5 }}
      whileInView={{ width, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9, delay, ease: easeOut }}
    />
  );
}