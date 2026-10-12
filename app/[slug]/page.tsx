import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { EN } from "@/lib/copy";
import { PLACEHOLDERS } from "@/lib/placeholders";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(PLACEHOLDERS).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = PLACEHOLDERS[slug];
  if (!title) return {};
  return {
    title,
    robots: { index: false, follow: false },
  };
}

export default async function PlaceholderPage({ params }: Props) {
  const { slug } = await params;
  const title = PLACEHOLDERS[slug];
  if (!title) notFound();

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <SiteHeader c={EN} tone="light" />
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center px-4 py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss">Coming next</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight">{title}</h1>
        <p className="mt-3 text-sm leading-6 text-ink/60">
          This page is still empty. The downloader on the homepage already works.
        </p>
        <Link href="/" className="mt-6 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white">
          Use the downloader
        </Link>
      </main>
      <SiteFooter c={EN} />
    </div>
  );
}
