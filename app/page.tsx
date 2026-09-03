import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { AIProducts } from "@/components/sections/ai-products";
import { SelectedWork } from "@/components/sections/selected-work";
import { FeaturedProject } from "@/components/sections/featured-project";
import { EngineeringExperience } from "@/components/sections/experience";
import { Philosophy } from "@/components/sections/philosophy";
import { AIBackground } from "@/components/sections/ai-background";
import { TechnicalExpertise } from "@/components/sections/expertise";
import { About } from "@/components/sections/about";
import { Writing } from "@/components/sections/writing";
import { GitHubSection } from "@/components/sections/github-section";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="divide-y divide-[var(--border)]">
        <Hero />
        <FeaturedProject />
        <AIProducts />
        <SelectedWork />
        <EngineeringExperience />
        <Philosophy />
        <AIBackground />
        <TechnicalExpertise />
        <About />
        <Writing />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
