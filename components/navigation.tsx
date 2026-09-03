"use client";

import { navigation, profile } from "@/data/profile";
import { ResumeDownload } from "@/components/ui/resume-download";
import { cn } from "@/lib/utils";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className={cn(
          "container-narrow flex h-14 items-center justify-between rounded-full border px-5 transition-all duration-300 md:px-6",
          scrolled
            ? "border-[var(--border-strong)] bg-background/75 shadow-lg shadow-black/5 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        )}
        aria-label="Main navigation"
      >
        <Link
          href="#"
          className="focus-ring text-sm font-semibold tracking-tight"
        >
          {profile.name.split(" ")[0]}
          <span className="text-muted-foreground">.</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-3.5 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-[var(--surface)] hover:text-foreground"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.04, duration: 0.4 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-full p-2 text-muted-foreground transition-colors hover:bg-[var(--surface)] hover:text-foreground"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-full p-2 text-muted-foreground transition-colors hover:bg-[var(--surface)] hover:text-foreground"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring hidden rounded-full border border-[var(--border)] px-3.5 py-1.5 font-mono text-[12px] text-muted-foreground transition-colors hover:border-[var(--border-strong)] hover:text-foreground xl:inline-flex"
          >
            {profile.email}
          </a>
          <ResumeDownload variant="nav" className="hidden md:inline-flex" />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)]"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="container-narrow mt-2 overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-background/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-1 p-3">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="focus-ring block rounded-xl px-4 py-3 text-[15px] text-muted-foreground transition-colors hover:bg-[var(--surface)] hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                className="focus-ring block rounded-xl px-4 py-3 font-mono text-sm text-accent"
              >
                {profile.email}
              </a>
              <div className="px-4 py-3">
                <ResumeDownload size="md" className="w-full [&_a]:w-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
