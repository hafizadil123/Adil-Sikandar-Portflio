import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/data/profile";
import "./globals.css";

const siteDescription =
  "Adil Sikandar is a Software Engineer and AI Engineer based in Canada. He builds scalable web applications, backend systems, and AI-powered products using React, Next.js, NestJS, Python, and AWS.";

export const metadata: Metadata = {
  metadataBase: new URL("https://adilsikandar.dev"),
  title: {
    default: "Adil Sikandar | Software Engineer & AI Engineer",
    template: "%s | Adil Sikandar",
  },
  description: siteDescription,
  keywords: [
    "Adil Sikandar",
    "Software Engineer",
    "AI Engineer",
    "Full Stack Developer",
    "Microsoft DP-100",
    "Fine-tuning",
    "Neural Networks",
    "React",
    "Next.js",
    "PyTorch",
    "Machine Learning",
  ],
  authors: [{ name: profile.name, url: profile.website }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: profile.website,
    siteName: profile.name,
    title: "Adil Sikandar | Software Engineer & AI Engineer",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Adil Sikandar | Software Engineer & AI Engineer",
    description: siteDescription,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: profile.website },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Software Engineer",
  url: profile.website,
  email: profile.email,
  sameAs: [profile.social.github, profile.social.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="page-bg min-h-screen antialiased">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
          >
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
