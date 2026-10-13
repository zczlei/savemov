import Link from "next/link";
import DownloaderForm from "@/components/downloader-form";
import JsonLd from "@/components/json-ld";
import { Breadcrumb, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { EN, type FormCopy } from "@/lib/copy";
import { SIMPLE_PLATFORMS, type SimplePlatform } from "@/lib/platform-pages";
import { breadcrumbJsonLd, SITE } from "@/lib/site";

const BESPOKE = [
  { href: "/twitter-video-downloader/", label: "Twitter/X" },
  { href: "/facebook-video-downloader/", label: "Facebook" },
  { href: "/reddit-video-downloader/", label: "Reddit" },
];

function copyFor(platform: SimplePlatform) {
  const { name, scope } = platform;
  return {
    title: `${name} Video Downloader – Save as MP4`,
    description: `Download a public ${name} video as MP4. Paste the link, no app, no sign-up, no watermark added.`,
    h1: `Download ${name} Videos from a Public Link`,
    h2: `Paste a public ${name} link and get the MP4 the page is already playing.`,
    scope,
    steps: [
      {
        t: "Copy the link",
        b: `Open the ${name} post and copy its address with Share → Copy link, or from the browser bar.`,
      },
      {
        t: "Check that it is public",
        b: "Open the link in a private window. If it plays there, this page can read it. A login wall means the post is private.",
      },
      {
        t: "Paste it and hit Download MP4",
        b: "Savemov finds the media file the player is already streaming and prepares a copy.",
      },
      {
        t: "Save it on your device",
        b: "The result link comes back with the response. Download it on the spot. Savemov does not keep a copy.",
      },
    ],
    faqs: [
      {
        q: `How do I download a ${name} video?`,
        a: `Copy the public post link, paste it in the box above and press Download MP4. You get the file the page is already playing – no app and no account.`,
      },
      {
        q: "Do I need an app or an account?",
        a: "No. It runs in the browser you already have, on desktop, iPhone and Android. Nothing is installed.",
      },
      {
        q: `Can I download a private ${name} video?`,
        a: "No. This page never asks for a login, so it can only read what a logged-out visitor can open.",
      },
      {
        q: "Will the file have a watermark?",
        a: "Savemov does not add one. A mark that is already part of the picture stays, because removing it would mean re-encoding the video.",
      },
      {
        q: "Is it free?",
        a: "Yes, with no sign-up. Each request saves one public video as MP4, at the quality that page published.",
      },
    ],
  };
}

export function platformMetadata(platform: SimplePlatform) {
  const copy = copyFor(platform);
  const path = `/${platform.slug}/`;
  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates: { canonical: path },
    openGraph: {
      type: "website" as const,
      url: path,
      siteName: "Savemov",
      locale: "en_US",
      title: copy.title,
      description: copy.description,
    },
    robots: { index: true, follow: true, "max-image-preview": "large" as const, "max-snippet": -1 },
  };
}

export default function PlatformDownloader({ platform }: { platform: SimplePlatform }) {
  const copy = copyFor(platform);
  const path = `/${platform.slug}/`;
  const form: FormCopy = {
    ...EN.form,
    label: `Link to the ${platform.name} video`,
    placeholder: `Paste a public ${platform.name} link`,
  };
  const related = [
    { href: "/", label: "Download Video from Link or URL" },
    ...BESPOKE,
    ...SIMPLE_PLATFORMS.filter((item) => item.slug !== platform.slug).map((item) => ({
      href: `/${item.slug}/`,
      label: item.name,
    })),
  ];
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: `Savemov ${platform.name} Video Downloader`,
      url: `${SITE}${path}`,
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      inLanguage: "en",
      description: copy.description,
      isAccessibleForFree: true,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: copy.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    breadcrumbJsonLd("Home", `${SITE}/`, `${platform.name} Video Downloader`, `${SITE}${path}`),
  ];

  return (
    <div className="min-h-screen bg-paper text-ink" lang="en">
      <JsonLd data={jsonLd} />
      <a href="#main" className="skip-link">
        {EN.skip}
      </a>
      <div className="hero-shell text-white">
        <SiteHeader c={{ lang: "en", path: "/" }} />
        <Breadcrumb homeHref="/" homeLabel="Home" current={`${platform.name} Video Downloader`} />
        <section className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:pb-20 sm:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/90">
              No app · No sign-up · No watermark added
            </p>
            <h1 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-extrabold tracking-tight sm:text-5xl sm:leading-[1.08]">
              {copy.h1}
            </h1>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-lg font-medium leading-relaxed text-white/75">{copy.h2}</h2>
          </div>
          <div className="mx-auto mt-8 max-w-2xl text-left">
            <DownloaderForm copy={form} />
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-white/55">
            {copy.scope}{" "}
            <Link href="/copyright/" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Copyright
            </Link>
          </p>
        </section>
      </div>
      <main id="main">
        <section className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">How to download a {platform.name} video</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {copy.steps.map((step, index) => (
              <li key={step.t} className="rounded-3xl border border-line bg-white p-5">
                <span className="grid size-8 place-items-center rounded-full bg-sand text-sm font-bold text-pine">{index + 1}</span>
                <h3 className="mt-4 font-semibold">{step.t}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{step.b}</p>
              </li>
            ))}
          </ol>
        </section>
        <section id="faq" className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">Questions</h2>
            <div className="mt-4 divide-y divide-line rounded-[1.6rem] border border-line bg-white px-5">
              {copy.faqs.map((faq) => (
                <details key={faq.q} className="group py-4">
                  <summary className="cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold">{faq.q}</h3>
                      <span className="mt-0.5 text-ink/30 transition group-open:rotate-45" aria-hidden="true">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-ink/70">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">Other downloaders</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold hover:border-pine/30 hover:text-pine"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter c={EN} />
    </div>
  );
}
