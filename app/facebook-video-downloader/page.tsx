import type { Metadata } from "next";
import Link from "next/link";
import DownloaderForm from "@/components/downloader-form";
import JsonLd from "@/components/json-ld";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { EN, type FormCopy } from "@/lib/copy";
import { SITE } from "@/lib/site";

const PATH = "/facebook-video-downloader/";
const URL_ABS = `${SITE}${PATH}`;

const TITLE = "Facebook Video Downloader – Save Reels and Stories as MP4";
const DESC =
  "Download Facebook videos, Reels or Stories as MP4 – paste the post link, no app, " +
  "no sign-up, no watermark added. Works on iPhone and Android.";
const H1 = "Download Facebook Videos, Reels and Stories from Any Post Link";
const H2 =
  "Paste a facebook.com or m.facebook.com link – get the MP4 with its original audio and no watermark added.";

const BADGES = [
  { k: "No app or APK", v: "Runs in the browser you already have." },
  { k: "No watermark added", v: "We never stamp the file; the original mark stays as it is." },
  { k: "Reels & Stories", v: "Short-form and 24-hour posts, both from the same box." },
  { k: "iPhone & Android", v: "One flow, no file manager required." },
];

const STEPS = [
  {
    t: "Copy the post link",
    b: "Tap the three dots on the video, or Share → Copy Link in the Facebook app. You get an address shaped like facebook.com/username/videos/1234567890, or a Reel link like facebook.com/reel/1234567890.",
  },
  {
    t: "Check that it is public",
    b: "Open the link in a private window. If it plays there, this page can read it. If Facebook asks you to log in, the post is limited to friends, a group or just the author – and nothing can download it for you.",
  },
  {
    t: "Paste it above and hit Download MP4",
    b: "Savemov opens the post, finds the media file the player is actually streaming and prepares a copy.",
  },
  {
    t: "Save the file to your device",
    b: "The result link comes back with the response, so download it on the spot. Savemov does not keep a copy.",
  },
];

const TYPES = [
  { t: "Video posts", b: "Clips uploaded to a Page, a profile or a public group." },
  { t: "Reels", b: "Vertical short-form posts – the same MP4 the Reels player streams." },
  { t: "Stories", b: "Public stories can be saved before they disappear after 24 hours." },
  { t: "Watch and long videos", b: "Facebook Watch uploads and Page videos that run for minutes." },
  { t: "Photo slideshows", b: "Slideshow posts are images, not video – there is no MP4 behind them." },
  { t: "Your own posts", b: "Back up something you published before you delete or edit it." },
];

const FORMAT = [
  "Savemov keeps the file Facebook already serves: usually an MP4 with the original audio track. We do not convert, compress or re-encode, so what you save looks like what the player showed – and nothing downloads with our logo on it.",
  "Quality follows the upload, not our settings. A Reel filmed and posted at 720p downloads at 720p; it does not become 1080p, and we will not upscale it. Savemov returns the file the post is already playing.",
  "The file link comes back as soon as the request finishes. Save it to your device right away, because Savemov does not keep a copy.",
];

const SCOPE = [
  "This page reads only what a logged-out visitor can already see. That is not a limitation we can lift: a private video, a friends-only post, an age-gated community or a group you are not a member of has no public file for us to prepare.",
  "It is also the reason no Facebook downloader can honestly promise those. Any tool claiming to open private videos wants your login, a browser extension that watches everything you do, or an app that asks for permissions it has no use for. Savemov asks for none of that: you submit one public link, nothing is installed, and nothing is stored.",
  "If a post is public but you would rather not have it saved elsewhere, that is a fair expectation – Facebook owners can request removal under our Copyright policy, and we act on valid notices.",
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "How do I download a video from Facebook?",
    a: "Tap the three dots on the post (or Share → Copy Link in the app), paste the address in the box above and press Download MP4. Savemov finds the media file behind the player and returns a copy you can save – no app, no sign-up, no Facebook account.",
  },
  {
    q: "Is there a Facebook video downloader online without watermark?",
    a: "Yes – in the narrow sense that we add nothing. Savemov never stamps a logo on the file. What we cannot do is remove a mark that is already part of the picture: if the creator put their own watermark or channel name inside the video, it is baked into the frames, and a downloader that claims to erase it is either lying or re-encoding the clip and making it softer.",
  },
  {
    q: "Can I download a Facebook Reel?",
    a: "Yes. Paste the Reel link – facebook.com/reel/… – and you get the same MP4 the Reels player streams, vertical, with its audio. Reels saved this way are not cropped or bordered.",
  },
  {
    q: "Can I save a Facebook Story before it disappears?",
    a: "Public stories can be saved while they are live. Stories vanish from the feed after 24 hours, and so does the file behind them – once the post is gone, the link resolves to nothing and no tool can bring it back. Archive copies that only the author can open are not public and stay out of reach.",
  },
  {
    q: "Do I need a Facebook video downloader app or APK?",
    a: "No. There is nothing to install, no APK to sideload, no browser extension to grant permissions. You paste one public link in the browser you already use, on desktop, iPhone or Android. That is also why your downloads appear nowhere in your Facebook activity: the site never sees the request.",
  },
  {
    q: "Can I download a private video, or from a group or a friend-only post?",
    a: "No. Anything that needs a login, membership or an age gate is out of scope: this page never asks for your credentials, so it can only read what a logged-out visitor can open. A link that plays in a private browser window is public; one that shows a login wall is not, and there is no setting that changes this.",
  },
  {
    q: "Why does the download look softer than the video on my screen?",
    a: "Usually the stream, not the tool. Facebook serves several versions and switches between them as your connection changes, so what you watched may have been a clearer picture than the file the page exposes. Savemov returns the file the post is already playing and never upscales – a file that looks soft here was soft at source.",
  },
  {
    q: "Does it work on iPhone and Android?",
    a: "Yes. On Android the file lands in your Downloads folder. On iPhone tap Download MP4, then use Share → Save to Files so it leaves the browser and you can move it to Photos from there.",
  },
  {
    q: "Is this Facebook video downloader free, and is there a limit?",
    a: "Free, with no sign-up and no account. Each request saves one public video as MP4, at the quality the post published.",
  },
  {
    q: "Can I download someone else's video?",
    a: "Save only what you have the right to keep: your own posts, material the creator allowed you to reuse, or a private copy where your local law permits one. Facebook content usually belongs to the person who posted it, so reposting it elsewhere – on Reels, TikTok or another Page – is your responsibility, not ours. See our Copyright policy.",
  },
];

const RELATED = [
  { href: "/", label: "Download Video from Link or URL" },
  { href: "/reddit-video-downloader/", label: "Reddit Video Downloader" },
  { href: "/twitter-video-downloader/", label: "Twitter Video Downloader" },
];

const FORM: FormCopy = {
  ...EN.form,
  label: "Link to the Facebook post",
  placeholder: "Paste a Facebook link – facebook.com/…/videos/…, a Reel or a Story",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Savemov Facebook Video Downloader",
    url: URL_ABS,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    inLanguage: "en",
    browserRequirements: "Requires JavaScript. No plugin or extension required.",
    description: DESC,
    isAccessibleForFree: true,
    featureList: [
      "Download Facebook videos",
      "Save Facebook Reels",
      "Save public Facebook Stories",
      "MP4 with original audio",
      "No watermark added",
      "No app or extension",
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
];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: {
    canonical: PATH,
    languages: {
      en: PATH,
      pt: "/pt/facebook-video-downloader/",
      es: "/es/facebook-video-downloader/",
      "x-default": PATH,
    },
  },
  openGraph: {
    type: "website",
    url: PATH,
    siteName: "Savemov",
    locale: "en_US",
    title: TITLE,
    description: DESC,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: H1 }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/opengraph-image"] },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

export default function FacebookVideoDownloaderPage() {
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
            { code: "pt-BR", short: "PT", label: "Português", href: "/pt/facebook-video-downloader/" },
            { code: "es", short: "ES", label: "Español", href: "/es/facebook-video-downloader/" },
          ]}
        />
        <section className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:pb-20 sm:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/90">
              No app · No sign-up · No watermark added
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
            Public posts only. We never ask for a Facebook login.{" "}
            <Link href="/copyright/" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Copyright
            </Link>
          </p>
        </section>
      </div>

      <main id="main">
        <section className="mx-auto -mt-8 grid max-w-5xl grid-cols-2 gap-3 px-4 sm:grid-cols-4">
          {BADGES.map((badge) => (
            <div key={badge.k} className="rounded-2xl border border-line bg-white px-4 py-3 text-center shadow-sm">
              <p className="text-sm font-semibold text-pine">{badge.k}</p>
              <p className="mt-1 text-xs leading-5 text-ink/60">{badge.v}</p>
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">How to download a Facebook video</h2>
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

        <section className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">Which Facebook posts this page can save</h2>
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

        <section className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">Video formats and quality</h2>
            {FORMAT.map((paragraph) => (
              <p key={paragraph} className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">Public posts only – and why</h2>
            {SCOPE.map((paragraph) => (
              <p key={paragraph} className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section id="faq" className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">Facebook video downloader FAQ</h2>
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
                  className="rounded-2xl border border-line bg-white px-4 py-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-pine/30 hover:shadow-md"
                >
                  <span className="text-ink/40">↗ </span>
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-xs leading-5 text-ink/50">
              Only save videos you have the right to keep. Facebook content generally belongs to the person who posted it —
              reposting it anywhere else is your responsibility. Rights holders can request removal through our{" "}
              <Link href="/copyright/" className="underline">
                Copyright policy
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <SiteFooter c={EN} />
    </div>
  );
}
