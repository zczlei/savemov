import type { Metadata } from "next";
import Link from "next/link";
import DownloaderForm from "@/components/downloader-form";
import JsonLd from "@/components/json-ld";
import { Breadcrumb, SiteFooter, SiteHeader } from "@/components/site-chrome";
import type { Copy, FormCopy } from "@/lib/copy";
import { breadcrumbJsonLd, SITE } from "@/lib/site";
import type { TiktokCopy } from "@/lib/tiktok-copy";

const LANGUAGES = {
  en: "/tiktok-downloader/",
  pt: "/pt/tiktok-downloader/",
  es: "/es/tiktok-downloader/",
  "x-default": "/tiktok-downloader/",
} as const;

export function tiktokMetadata(c: TiktokCopy): Metadata {
  return {
    title: { absolute: c.title },
    description: c.description,
    alternates: { canonical: c.path, languages: { ...LANGUAGES } },
    openGraph: {
      type: "website",
      url: c.path,
      siteName: "Savemov",
      locale: c.ogLocale,
      title: c.title,
      description: c.description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: c.h1 }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.description,
      images: ["/opengraph-image"],
    },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  };
}

function jsonLd(c: TiktokCopy) {
  const url = `${SITE}${c.path}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: c.appName,
      url,
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      inLanguage: c.inLanguage,
      browserRequirements: "Requires JavaScript. No plugin or extension required.",
      description: c.description,
      isAccessibleForFree: true,
      featureList: c.featureList,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: c.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    breadcrumbJsonLd(c.home, `${SITE}${c.homePath}`, c.crumb, url),
  ];
}

const SWITCHER: Record<TiktokCopy["locale"], { code: string; short: string; label: string; href: string }[]> = {
  en: [
    { code: "pt", short: "PT", label: "Português", href: "/pt/tiktok-downloader/" },
    { code: "es", short: "ES", label: "Español", href: "/es/tiktok-downloader/" },
  ],
  pt: [
    { code: "en", short: "EN", label: "English", href: "/tiktok-downloader/" },
    { code: "es", short: "ES", label: "Español", href: "/es/tiktok-downloader/" },
  ],
  es: [
    { code: "en", short: "EN", label: "English", href: "/tiktok-downloader/" },
    { code: "pt", short: "PT", label: "Português", href: "/pt/tiktok-downloader/" },
  ],
};

export default function TiktokPage({ c, home, form }: { c: TiktokCopy; home: Copy; form: FormCopy }) {
  return (
    <div className="min-h-screen bg-paper text-ink" lang={c.htmlLang}>
      <JsonLd data={jsonLd(c)} />
      <a href="#main" className="skip-link">
        {home.skip}
      </a>

      <div className="hero-shell text-white">
        <SiteHeader c={{ lang: c.locale, path: c.homePath }} languages={SWITCHER[c.locale]} />
        <Breadcrumb homeHref={c.homePath} homeLabel={c.home} current={c.crumb} />
        <section className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:pb-20 sm:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/90">{c.eyebrow}</p>
            <h1 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-extrabold tracking-tight sm:text-5xl sm:leading-[1.08]">
              {c.h1}
            </h1>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-lg font-medium leading-relaxed text-white/75">{c.h2}</h2>
          </div>

          <div className="mx-auto mt-8 max-w-2xl text-left">
            <DownloaderForm copy={form} />
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-white/55">
            {c.helper}{" "}
            <Link href="/copyright/" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              {c.copyright}
            </Link>
          </p>
        </section>
      </div>

      <main id="main">
        <section className="mx-auto -mt-8 grid max-w-5xl grid-cols-2 gap-3 px-4 sm:grid-cols-4">
          {c.badges.map((badge) => (
            <div key={badge.t} className="rounded-2xl border border-line bg-white px-4 py-3 text-center shadow-sm">
              <p className="text-sm font-semibold text-pine">{badge.t}</p>
              <p className="mt-1 text-xs leading-5 text-ink/60">{badge.d}</p>
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">{c.how.title}</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.how.steps.map((step, index) => (
              <li key={step.h} className="rounded-3xl border border-line bg-white p-5">
                <span className="grid size-8 place-items-center rounded-full bg-sand text-sm font-bold text-pine">{index + 1}</span>
                <h3 className="mt-4 font-semibold">{step.h}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{step.p}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">{c.kinds.title}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {c.kinds.cards.map((card) => (
                <div key={card.h} className="rounded-3xl bg-white p-5 shadow-sm">
                  <h3 className="font-semibold">{card.h}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/65">{card.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {[c.formats, c.mark, c.privacy].map((block) => (
          <section key={block.title} className="border-t border-line/80">
            <div className="mx-auto max-w-5xl px-4 py-14">
              <h2 className="text-2xl font-bold tracking-tight">{block.title}</h2>
              {block.body.map((paragraph) => (
                <p key={paragraph} className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        <section id="faq" className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">{c.faq.title}</h2>
            <div className="mt-4 divide-y divide-line rounded-[1.6rem] border border-line bg-white px-5">
              {c.faq.items.map((item) => (
                <details key={item.q} className="group py-4">
                  <summary className="cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold">{item.q}</h3>
                      <span className="mt-0.5 text-ink/30 transition group-open:rotate-45" aria-hidden="true">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-ink/70">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">{c.relatedTitle}</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {c.related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-line bg-white px-4 py-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-pine/30 hover:shadow-md"
                >
                  <span className="text-ink/40">↗ </span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter c={home} />
    </div>
  );
}
