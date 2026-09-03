"use client";

import { aiProducts, aiPortfolio } from "@/data/ai-products";
import { Section, SectionHeader } from "@/components/ui/section";
import { Tag } from "@/components/ui/button";
import { FadeIn, MotionPanel, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Star } from "lucide-react";

function ProductCard({ product }: { product: (typeof aiProducts)[number] }) {
  return (
    <MotionPanel>
      <article className="panel panel-interactive flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
            {product.category}
          </p>
          <h3 className="mt-2.5 text-[17px] font-semibold leading-snug tracking-tight">
            {product.name}
          </h3>
        </div>
        {product.status === "coming-soon" && (
          <span className="label-pill shrink-0 !px-2 !py-0.5 !text-[9px]">
            Soon
          </span>
        )}
      </div>

      <p className="mt-3 flex-1 text-sm leading-[1.65] text-muted-foreground">
        {product.tagline}
      </p>

      {(product.users || product.rating) && (
        <div className="mt-5 flex items-center gap-6 border-t border-[var(--border)] pt-4">
          {product.users && (
            <div>
              <p className="font-mono text-xl font-semibold">{product.users}</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                {product.metricLabel ?? "users"}
              </p>
            </div>
          )}
          {product.rating && (
            <div>
              <p className="flex items-center gap-1 font-mono text-xl font-semibold">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                {product.rating}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                rating
              </p>
            </div>
          )}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {product.tags.slice(0, 3).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      </article>
    </MotionPanel>
  );
}

export function AIProducts() {
  const rest = aiProducts.filter((p) => !p.featured);

  return (
    <Section id="ai-products">
      <SectionHeader
        label="AI Products"
        title="10+ AI products shipped across industries"
        description={aiPortfolio.description}
      />

      <FadeIn>
        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Products", value: aiPortfolio.stats.products },
            { label: "Sectors", value: aiPortfolio.stats.sectors },
            { label: "Scope", value: aiPortfolio.stats.scope },
          ].map((stat) => (
            <div key={stat.label} className="panel px-5 py-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                {stat.label}
              </p>
              <p className="mt-2 text-sm leading-[1.6] text-muted-foreground">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>

      <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((product) => (
          <StaggerItem key={product.id}>
            <ProductCard product={product} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
