import { profile } from "@/data/profile";
import { ResumeDownload } from "@/components/ui/resume-download";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="container-narrow section-padding !py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-tight">{profile.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Software Engineer · AI · Full Stack
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring mt-4 inline-block font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {profile.email}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-full border border-[var(--border)] p-2.5 text-muted-foreground transition-colors hover:border-[var(--border-strong)] hover:text-foreground"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-full border border-[var(--border)] p-2.5 text-muted-foreground transition-colors hover:border-[var(--border-strong)] hover:text-foreground"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <ResumeDownload variant="footer" />
            <a
              href={profile.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-full border border-[var(--border)] px-4 py-2.5 font-mono text-xs text-muted-foreground transition-colors hover:border-[var(--border-strong)] hover:text-foreground"
            >
              Book a meeting
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring rounded-full border border-[var(--border)] px-4 py-2.5 font-mono text-xs text-muted-foreground transition-colors hover:border-[var(--border-strong)] hover:text-foreground"
            >
              Email
            </a>
          </div>
        </div>

        <p className="mt-8 font-mono text-[11px] text-muted">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
