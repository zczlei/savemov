import Link from "next/link";
import DownloaderForm from "@/components/downloader-form";
import JsonLd from "@/components/json-ld";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { buildJsonLd, type Copy } from "@/lib/copy";

function RichText({ text, emphasis }: { text: string; emphasis?: string }) {
  if (!emphasis) return text;
  const index = text.indexOf(emphasis);
  if (index < 0) return text;
  return (
    <>
      {text.slice(0, index)}
      <strong className="font-semibold text-ink">{emphasis}</strong>
      {text.slice(index + emphasis.length)}
    </>
  );
}

export default function HomePage({ c }: { c: Copy }) {
  const trust = c.trust.split("·").map((item) => item.trim());
  const heroPlatforms = c.platforms.slice(0, 6);

  return (
    <div className="min-h-screen bg-paper text-ink" lang={c.lang}>
      <JsonLd data={buildJsonLd(c)} />
      <a href="#main" className="skip-link">
        {c.skip}
      </a>

      <div className="hero-shell text-white">
        <SiteHeader c={c} />
        <section className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:pb-20 sm:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/90">{trust.join("  ·  ")}</p>
            <h1 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-extrabold tracking-tight sm:text-5xl sm:leading-[1.08]">
              {c.h1}
            </h1>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-lg font-medium leading-relaxed text-white/75">{c.h2}</h2>
          </div>

          <div className="mx-auto mt-8 max-w-2xl text-left">
            <DownloaderForm copy={c.form} />
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-white/55">
            {c.heroHint}{" "}
            <Link href="/copyright/" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              {c.legal.copyright}
            </Link>
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-white/70">
            {c.platformLead}{" "}
            {heroPlatforms.map((platform, index) => (
              <span key={platform.slug}>
                <Link href={`/${platform.slug}/`} className="text-white underline decoration-white/25 underline-offset-4 hover:decoration-white">
                  {platform.label}
                </Link>
                {index < heroPlatforms.length - 1 ? " · " : ""}
              </span>
            ))}
            {" · "}
            {c.platformTail}
          </p>
        </section>
      </div>

      <main id="main">
        <section className="mx-auto -mt-8 grid max-w-5xl grid-cols-2 gap-3 px-4 sm:grid-cols-4">
          {(c.badges ?? trust).map((item) => (
            <div key={item} className="rounded-2xl border border-line bg-white px-4 py-3 text-center text-sm font-semibold text-pine shadow-sm">
              {item}
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">{c.how.h2}</h2>
          {c.how.intro ? <p className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">{c.how.intro}</p> : null}
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.how.steps.map((step, index) => (
              <li key={step.t} className="rounded-3xl border border-line bg-white p-5">
                <span className="grid size-8 place-items-center rounded-full bg-sand text-sm font-bold text-pine">{index + 1}</span>
                <h3 className="mt-4 font-semibold">{step.t}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{step.d}</p>
              </li>
            ))}
          </ol>
        </section>

        {c.format ? (
          <section aria-labelledby="format" className="border-t border-line/80">
            <div className="mx-auto max-w-5xl px-4 py-14">
              <h2 id="format" className="text-2xl font-bold tracking-tight">
                {c.format.h2}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">{c.format.body}</p>
            </div>
          </section>
        ) : null}

        <section className="border-t border-line/80">
          <div className="mx-auto grid max-w-5xl gap-8 px-4 py-14 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">{c.what.h2}</h2>
              <p className="mt-4 text-sm leading-7 text-ink/70">
                <RichText text={c.what.body} emphasis={c.what.emphasis} />
              </p>
            </div>
            <p className="rounded-3xl bg-white p-6 text-sm leading-7 text-ink/70 shadow-sm">{c.what.limits}</p>
          </div>
        </section>

        <section className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">{c.platformsH2}</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {c.platforms.map((platform) => (
                <Link
                  key={platform.slug}
                  href={`/${platform.slug}/`}
                  className="group rounded-2xl border border-line bg-white px-4 py-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-pine/30 hover:shadow-md"
                >
                  <span className="text-ink/40">↗ </span>
                  <span className="group-hover:text-pine">{platform.anchor}</span>
                  {platform.note ? <span className="mt-1 block font-normal leading-6 text-ink/60">{platform.note}</span> : null}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">{c.useCases.h2}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {c.useCases.items.map((item) => (
                <div key={item.t} className="rounded-3xl bg-white p-5 shadow-sm">
                  <h3 className="font-semibold">{item.t}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/65">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <div className="rounded-[2rem] bg-pine px-6 py-8 text-white sm:px-10">
              <h2 className="text-2xl font-bold tracking-tight">{c.data.h2}</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75">{c.data.body}</p>
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">{c.faqH2}</h2>
            <div className="mt-4 divide-y divide-line rounded-[1.6rem] border border-line bg-white px-5">
              {c.faqs.map((faq) => (
                <details key={faq.q} className="group py-4">
                  <summary className="cursor-pointer list-none font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {faq.q}
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
      </main>

      <SiteFooter c={c} />
    </div>
  );
}
