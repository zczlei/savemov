import type { Metadata } from "next";
import Link from "next/link";
import DownloaderForm from "@/components/downloader-form";
import JsonLd from "@/components/json-ld";
import { Breadcrumb, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { EN, type FormCopy } from "@/lib/copy";
import { breadcrumbJsonLd, SITE } from "@/lib/site";

const PATH = "/reddit-video-downloader/";
const URL_ABS = `${SITE}${PATH}`;

const TITLE = "Reddit Video Downloader – Save GIFs and Videos with Sound";
const DESC =
  "Download a Reddit video or GIF as MP4 – paste the post link, no app, no " +
  "sign-up, no watermark added. Original audio kept, works on iPhone and Android.";
const H1 = "Download Reddit Videos and GIFs from Any Post Link";
const H2 = "Paste a reddit.com or shared link – get the MP4 with its original audio, or save the GIF.";

const STEPS = [
  {
    t: "Copy the post link",
    b: "Open the Reddit app or site, tap Share → Copy Link. You get an address shaped like reddit.com/r/subreddit/comments/abc123.",
  },
  {
    t: "Make sure it opens logged out",
    b: "Paste the link in a private window. If the post loads there, it is public and this page can read it. Private subreddits, age-gated communities and NSFW-flagged posts that require a logged-in account are out of scope.",
  },
  {
    t: "Paste it above and hit Download MP4",
    b: "Savemov opens the post, finds the media file the player is actually streaming and prepares a copy.",
  },
  {
    t: "Save the file to your device",
    b: "The result link comes back with the response, so download it on the spot. Savemov does not keep a copy, and the original post can be deleted.",
  },
];

const TYPES = [
  { t: "Video posts", b: "Clips uploaded directly to a post, including ones with sound." },
  { t: "GIFs and loops", b: "Reddit converts uploads marked as GIFs into silent MP4 files – you download that file." },
  { t: "Slideshow posts", b: "Image slideshows are not video, so there is no MP4 behind them to prepare." },
  { t: "Your own posts", b: "Back up something you uploaded before you delete or replace it." },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "How do I download a video from Reddit?",
    a: "Copy the post link with Share → Copy Link, paste it in the box above and press Download MP4. Savemov reads the public post, finds the media file behind the player and returns a copy you can save – no app, no sign-up, no Reddit account.",
  },
  {
    q: "Why does my Reddit video have no sound – and can I download Reddit videos with sound?",
    a: "Two different things get confused here. Reddit plays most media muted by default, but the file itself does carry audio: download it and the sound is there. If the post was uploaded as a GIF or a looping animation, Reddit converts it to a silent MP4 and no downloader can add a track afterwards. Savemov keeps the audio the original file has and strips nothing.",
  },
  {
    q: "Can I save a Reddit GIF as a real GIF file?",
    a: "You get the MP4 that Reddit is actually serving. Files labelled GIF on Reddit are usually already video files, which is why they loop and stay silent – an MP4 opens everywhere, plays shorter and weighs far less than an animated GIF, so the conversion is worth keeping.",
  },
  {
    q: "Is there a Reddit video downloader app I need to install?",
    a: "No. Everything runs in the browser you already have, on desktop, iPhone or Android. Apps and extensions ask for extra permissions and keep running after you stop using them; here you submit one public link and nothing is installed.",
  },
  {
    q: "Can I download from private subreddits, NSFW communities or Reddit Premium?",
    a: "No. Anything that needs a login, an age gate or a subscription is out of scope: this page never asks for your credentials, so it can only read posts a logged-out visitor can open. There is no way to unlock a restricted post here.",
  },
  {
    q: "Does it work for links that point to another site?",
    a: "Only media hosted by Reddit itself. Posts that embed an outside player – Imgur, YouTube, Twitch or similar – link to a service with its own terms, and this page does not pull files from those hosts.",
  },
  {
    q: "How do I save a Reddit video to my iPhone?",
    a: "Tap Download MP4. On Android the file lands in your Downloads folder. On iPhone it lands in the Files app, not straight in Photos. Open Safari's download list, tap the file, press Share → Save Video, and it is in your camera roll.",
  },
  {
    q: "Can I get 1080p, 4K or the original upload?",
    a: "You get the file the post is already playing, at the quality that post published. A clip uploaded at 720p cannot be turned into 1080p, and Savemov does not upscale or re-encode – that would only make the file look softer than the source.",
  },
  {
    q: "Is this Reddit video downloader free, and is there a limit?",
    a: "Free, with no sign-up and no account. Each request saves one public video as MP4, at the quality the post published.",
  },
  {
    q: "Can I download someone else's video?",
    a: "Save only what you have the right to keep: your own uploads, material the creator allowed you to reuse, or a private copy where your local law permits one. Reddit content usually belongs to the person who posted it, so reposting it elsewhere is your responsibility – see our Copyright policy.",
  },
];

const RELATED = [
  { href: "/", label: "Download Video from Link or URL" },
  { href: "/twitter-video-downloader/", label: "Twitter Video Downloader" },
  { href: "/facebook-video-downloader/", label: "Facebook Video Downloader" },
];

const FORM: FormCopy = {
  ...EN.form,
  label: "Link to the Reddit post",
  placeholder: "Paste a Reddit post link – reddit.com/r/…",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Savemov Reddit Video Downloader",
    url: URL_ABS,
    description: DESC,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any (web browser)",
    browserRequirements: "Requires JavaScript",
    inLanguage: "en",
    isAccessibleForFree: true,
    hasPart: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free" },
    featureList: [
      "Download Reddit videos and GIFs from a public post link",
      "MP4 with original audio kept, no watermark added",
      "No app, no extension, no sign-up, no Reddit account",
      "Works on iPhone and Android",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to download a Reddit video or GIF from a post link",
    url: URL_ABS,
    inLanguage: "en",
    step: STEPS.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.t,
      text: step.b,
    })),
  },
  breadcrumbJsonLd("Home", `${SITE}/`, "Reddit Video Downloader", URL_ABS),
];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: {
    canonical: PATH,
    languages: {
      en: PATH,
      pt: "/pt/reddit-video-downloader/",
      es: "/es/reddit-video-downloader/",
      "x-default": PATH,
    },
  },
  openGraph: {
    type: "website",
    url: PATH,
    title: TITLE,
    description: DESC,
    siteName: "Savemov",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: H1 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
};

export default function RedditVideoDownloaderPage() {
  return (
    <div className="min-h-screen bg-paper text-ink" lang="en">
      <JsonLd data={jsonLd} />
      <a href="#main" className="skip-link">
        {EN.skip}
      </a>

      <div className="hero-shell text-white">
        <SiteHeader
          c={{ lang: "en", path: "/" }}
          languages={[
            { code: "pt-BR", short: "PT", label: "Português", href: "/pt/reddit-video-downloader/" },
            { code: "es", short: "ES", label: "Español", href: "/es/reddit-video-downloader/" },
          ]}
        />
        <Breadcrumb homeHref="/" homeLabel="Home" current="Reddit Video Downloader" />
        <section className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:pb-20 sm:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/90">
              No app · No sign-up · Original audio kept
            </p>
            <h1 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-extrabold tracking-tight sm:text-5xl sm:leading-[1.08]">
              {H1}
            </h1>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-lg font-medium leading-relaxed text-white/75">{H2}</h2>
          </div>

          <div className="mx-auto mt-8 max-w-2xl text-left">
            <DownloaderForm copy={FORM} />
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-white/55">
            Public posts only. We never ask for a Reddit login.{" "}
            <Link href="/copyright/" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Copyright
            </Link>
          </p>
        </section>
      </div>

      <main id="main">
        <section id="how" className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">How to download a Reddit video from a link</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <li key={step.t} className="rounded-3xl border border-line bg-white p-5">
                <span className="grid size-8 place-items-center rounded-full bg-sand text-sm font-bold text-pine">{index + 1}</span>
                <h3 className="mt-4 font-semibold">{step.t}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{step.b}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="types" className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">What kind of Reddit post you can save</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {TYPES.map((item) => (
                <div key={item.t} className="rounded-3xl bg-white p-5 shadow-sm">
                  <h3 className="font-semibold">{item.t}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/65">{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="format" className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">File format, audio and quality</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">
              You get the MP4 the post is already streaming, with the audio track the original file has. A post that plays muted
              in your feed is usually not a silent file – open the download and the sound plays. Reddit does not publish a
              version higher than what the uploader sent, so Savemov does not invent one either: no upscaling, no re-encoding,
              no watermark on top.
            </p>
          </div>
        </section>

        <section id="faq" className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">Questions</h2>
            <div className="mt-4 divide-y divide-line rounded-[1.6rem] border border-line bg-white px-5">
              {FAQ.map((faq) => (
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
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {RELATED.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-line bg-white px-4 py-4 text-sm font-semibold transition before:mr-1.5 before:text-ink/40 before:content-['↗'] hover:-translate-y-0.5 hover:border-pine/30 hover:shadow-md"
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
