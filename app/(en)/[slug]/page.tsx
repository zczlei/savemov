import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PlatformDownloader, { platformMetadata } from "@/components/platform-downloader";
import { SIMPLE_PLATFORMS, platformBySlug } from "@/lib/platform-pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SIMPLE_PLATFORMS.map((platform) => ({ slug: platform.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const platform = platformBySlug(slug);
  if (!platform) return {};
  return platformMetadata(platform);
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;
  const platform = platformBySlug(slug);
  if (!platform) notFound();
  return <PlatformDownloader platform={platform} />;
}
