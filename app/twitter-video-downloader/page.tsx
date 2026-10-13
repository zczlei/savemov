import type { Metadata } from "next";
import Link from "next/link";
import DownloaderForm from "@/components/downloader-form";
import JsonLd from "@/components/json-ld";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { EN, type FormCopy } from "@/lib/copy";
import { SITE } from "@/lib/site";

const PATH = "/twitter-video-downloader/";
const URL_ABS = `${SITE}${PATH}`;

const TITLE = "Twitter Video Downloader – Save X Videos as MP4 for Free";
const DESC =
  "Download a Twitter or X video as MP4 with sound – paste the tweet link, " +
  "no app, no sign-up, no watermark added. Works on iPhone and Android.";
const H1 = "Twitter Video Downloader for Public Posts";
const H2 = "Paste a twitter.com or x.com link – get the MP4 without watermark, with sound.";

const STEPS = [
  {
    t: "Open the post in a browser",
    b: "Tap Share → Copy Link in the app, or open the tweet in your browser. Either gives you an address shaped like twitter.com/user/status/123 or x.com/user/status/123.",
  },
  {
    t: "Check it opens without a login",
    b: "Paste the link into a private window. If the video plays there, it is public and this page can read it. Protected accounts and NSFW-gated posts will not work.",
  },
  {
    t: "Paste it above and hit Download MP4",
    b: "Savemov opens the post, finds the video file the page is actually streaming and prepares a copy.",
  },
  {
    t: "Save the file to your device",
    b: "The result link comes back with the response, so download it on the spot. Savemov does not keep a copy, and the source post can be deleted.",
  },
];

const TYPES = [
  { t: "Video posts", b: "Clips uploaded directly to a tweet, including long-form video." },
  { t: "X (formerly Twitter)", b: "x.com and twitter.com links are the same thing here – both work." },
  { t: "Retweets and quote posts", b: "Paste the link to the original post rather than the quote." },
  { t: "Your own uploads", b: "Back up a video you posted before you delete or replace it." },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "How do I download a video from a Twitter or X link?",
    a: "Copy the post link with Share → Copy Link, paste it in the box above and press Download MP4. Savemov reads the public post, finds the video file behind it and returns a copy you can save – no app, no sign-up, no account.",
  },
  {
    q: "Is there a Twitter video downloader without watermark?",
    a: "No. Twitter and X do not burn a logo into the video file, and Savemov does not add one either. You get the same file the post is playing, with its original audio.",
  },
  {
    q: "Why do some Twitter videos have no sound?",
    a: "That happens on the platform side: clips converted into looping GIF-style posts carry no audio track. Savemov returns the file the page serves, so it has sound exactly when the original does – nothing is stripped here.",
  },
  {
    q: "Can I get 1080p or higher quality?",
    a: "You get the file the post is already playing, at the quality that post published. A clip uploaded at 720p cannot be turned into 1080p, and this tool does not upscale or re-encode – that would only make the file look softer.",
  },
  {
    q: "Do protected accounts and NSFW posts work?",
    a: "No. Anything that needs a login or an age gate is off-limits: this page never asks for your credentials, so it can only read posts a logged-out visitor can open.",
  },
  {
    q: "Is there a Twitter video downloader app I should install instead?",
    a: "You don't need one. Apps and browser extensions ask for extra permissions and keep working after you stop using them. Here you only submit a public link, in the browser you already have, on desktop or mobile.",
  },
  {
    q: "How do I download Twitter videos on iPhone?",
    a: "Yes. On Android the file lands in your Downloads folder. On iPhone, open the result and tap Share → Save to Files so it leaves the browser and stays on your phone.",
  },
  {
    q: "Can I download a whole thread or several videos at once?",
    a: "One video per request. Open the post holding the clip you want and paste that single link – threads and bookmark folders are not saved as a batch.",
  },
  {
    q: "Is this Twitter video downloader free?",
    a: "Free, with no sign-up and no account. Each request saves one public video as MP4, at the quality the post published.",
  },
  {
    q: "Can I save someone else's video?",
    a: "Save only what you have the right to keep: your own uploads, material you were given permission for, or where your local law allows a private copy. Don't redistribute other people's copyrighted work – see our Copyright policy.",
  },
];

const RELATED = [
  { href: "/", label: "Download Video from Link or URL" },
  { href: "/reddit-video-downloader/", label: "Reddit Video Downloader" },
  { href: "/instagram-reels-downloader/", label: "Instagram Reels Downloader" },
  { href: "/tiktok-downloader/", label: "TikTok Downloader" },
  { href: "/facebook-video-downloader/", label: "Facebook Video Downloader" },
];

const FORM: FormCopy = {
  ...EN.form,
  label: "Link to the tweet or X post",
  placeholder: "Paste a twitter.com or x.com link",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Savemov Twitter Video Downloader",
    url: URL_ABS,
    description: DESC,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any (web browser)",
    browserRequirements: "Requires JavaScript",
    inLanguage: "en",
    isAccessibleForFree: true,
    hasPart: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free" },
    featureList: [
      "Download Twitter and X videos from a public post link",
      "MP4 with original audio, no watermark added",
      "No app, no extension, no sign-up",
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
    name: "How to download a Twitter or X video from a link",
    url: URL_ABS,
    inLanguage: "en",
    step: STEPS.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.t,
      text: step.b,
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
      pt: "/pt/twitter-video-downloader/",
      es: "/es/twitter-video-downloader/",
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

export default function TwitterVideoDownloaderPage() {
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
            { code: "pt-BR", short: "PT", label: "Português", href: "/pt/twitter-video-downloader/" },
            { code: "es", short: "ES", label: "Español", href: "/es/twitter-video-downloader/" },
          ]}
        />
        <section className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:pb-20 sm:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/90">
              No app · No extension · MP4 with sound · Free
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
            Don&apos;t save material you don&apos;t have the right to keep.{" "}
            <Link href="/copyright/" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Copyright
            </Link>
          </p>
        </section>
      </div>

      <main id="main">
        <section className="mx-auto -mt-8 grid max-w-5xl grid-cols-2 gap-3 px-4 sm:grid-cols-4">
          {["MP4 with audio", "Source quality", "No sign-up", "iPhone & Android"].map((badge) => (
            <div key={badge} className="rounded-2xl border border-line bg-white px-4 py-3 text-center text-sm font-semibold text-pine shadow-sm">
              {badge}
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">What this tool does</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">
            Savemov is a free <strong className="font-semibold text-ink">Twitter video downloader</strong> that works on both
            names: a twitter.com link and an x.com link are the same post, and either one pastes straight into the box above. It
            reads the public page, finds the video file that page is streaming, and hands you that file as MP4 — with the audio
            the original carried, and no watermark added.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">
            It does not work on protected accounts, posts behind an age gate, or anything that needs a login to open. One video
            per request, and nothing is re-encoded: a clip that looks soft here was soft where it was posted.
          </p>
        </section>

        <section className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">How to download a Twitter video from a link</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">
              To download video from link pages like a tweet or an X post, paste the share link in the box above — Savemov reads
              the page and prepares the file.
            </p>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step, index) => (
                <li key={step.t} className="rounded-3xl border border-line bg-white p-5">
                  <span className="grid size-8 place-items-center rounded-full bg-sand text-sm font-bold text-pine">{index + 1}</span>
                  <h3 className="mt-4 font-semibold">{step.t}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/65">{step.b}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">Which Twitter and X videos you can save</h2>
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

        <section aria-labelledby="format" className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 id="format" className="text-2xl font-bold tracking-tight">
              Format, quality and sound
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">
              You get the container the post already serves — usually MP4, which plays on iPhone, Android, Windows and Mac
              without extra codecs. Quality follows the original upload: the tool never invents a higher resolution, because
              upscaling only makes the file look softer. Audio comes through whenever the source has one; looping GIF-style
              posts have no audio track to begin with. The file link comes back as soon as the request finishes — save it to
              your device, because Savemov keeps no copy and the source post can be deleted at any time.
            </p>
          </div>
        </section>

        <section className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">Why not just install an app or extension</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">
              Most Twitter downloader apps ask for your account so they can read your timeline, and browser extensions keep
              running after you stop using them. Neither is needed for a public post: this page only takes the link you paste,
              asks for no login, installs nothing, and has no profile to build from your searches. If you are on a phone and
              don&apos;t want to switch apps, that is the whole point — open the link, copy it, paste it above.
            </p>
          </div>
        </section>

        <section className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <div className="rounded-[2rem] bg-pine px-6 py-8 text-white sm:px-10">
              <h2 className="text-2xl font-bold tracking-tight">How your data is handled</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75">
                The link you paste is used only to locate the file. Savemov does not keep the finished download. We do not
                publish or sell the URLs you submit, and we do not ask for an account — there is no profile to build from your
                searches.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">Frequently asked questions</h2>
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
            <h2 className="text-2xl font-bold tracking-tight">Other video downloaders</h2>
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
          </div>
        </section>
      </main>

      <SiteFooter c={EN} />
    </div>
  );
}
