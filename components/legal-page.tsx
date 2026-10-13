import type { ReactNode } from "react";
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { EN } from "@/lib/copy";

export function legalMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index: false, follow: true },
  };
}

export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink" lang="en">
      <SiteHeader c={{ lang: EN.lang, path: EN.path }} tone="light" />
      <main className="mx-auto w-full max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-extrabold tracking-tight">{title}</h1>
        <div className="mt-8 space-y-8 text-sm leading-7 text-ink/80 [&_a]:font-semibold [&_a]:text-pine [&_a]:underline [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>
      </main>
      <SiteFooter c={EN} />
    </div>
  );
}
