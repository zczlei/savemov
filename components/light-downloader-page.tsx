import Link from "next/link";
import DownloaderForm from "@/components/downloader-form";
import JsonLd from "@/components/json-ld";
import { Breadcrumb, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { EN, type FormCopy } from "@/lib/copy";
import { badges, buildFaq, featureList, how, type LightCopy } from "@/lib/light-copy";
import { breadcrumbJsonLd, SITE } from "@/lib/site";

const HOME_LANGUAGES = [
  { code: "pt", short: "PT", label: "Português", href: "/pt/" },
  { code: "es", short: "ES", label: "Español", href: "/es/" },
];

function jsonLd(c: LightCopy, faq: { q: string; a: string }[]) {
  const url = `${SITE}/${c.slug}/`;
  const crumb = `${c.platform} Video Downloader`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: `Savemov ${c.platform} Video Downloader`,
      url,
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      inLanguage: "en",
      browserRequirements: "Requires JavaScript. No plugin or extension required.",
      description: c.description,
      isAccessibleForFree: true,
      featureList: featureList(c),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    breadcrumbJsonLd("Home", `${SITE}/`, crumb, url),
  ];
}

export default function LightDownloaderPage({ c }: { c: LightCopy }) {
  const faq = buildFaq(c);
  const steps = how(c);
  const form: FormCopy = {
    ...EN.form,
    label: c.formLabel,
    placeholder: c.formPlaceholder,
  };

  return (
    <div className="min-h-screen bg-paper text-ink" lang="en">
      <JsonLd data={jsonLd(c, faq)} />
      <a href="#main" className="skip-link">
        {EN.skip}
      </a>

      <div className="hero-shell text-white">
        <SiteHeader c={{ lang: "en", path: "/" }} languages={HOME_LANGUAGES} />
        <Breadcrumb homeHref="/" homeLabel="Home" current={`${c.platform} Video Downloader`} />
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
              Copyright
            </Link>
          </p>
        </section>
      </div>

      <main id="main">
        <section className="mx-auto -mt-8 grid max-w-5xl grid-cols-1 gap-3 px-4 sm:grid-cols-3">
          {badges(c).map((badge) => (
            <div key={badge.t} className="rounded-2xl border border-line bg-white px-4 py-3 text-center shadow-sm">
              <p className="text-sm font-semibold text-pine">{badge.t}</p>
              <p className="mt-1 text-xs leading-5 text-ink/60">{badge.d}</p>
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">{steps.title}</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.steps.map((step, index) => (
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
            <h2 className="text-2xl font-bold tracking-tight">{c.limitsTitle}</h2>
            {c.limits.map((paragraph) => (
              <p key={paragraph} className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section id="faq" className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">{c.platform} video downloader FAQ</h2>
            <div className="mt-4 divide-y divide-line rounded-[1.6rem] border border-line bg-white px-5">
              {faq.map((item) => (
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
            <h2 className="text-2xl font-bold tracking-tight">Other downloaders</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {c.interlinks.map((item) => (
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
