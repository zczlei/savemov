"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Mark } from "@/components/mark";
import { otherLanguages, platformsFor, type Copy } from "@/lib/copy";
import { PLATFORM_ICONS } from "@/lib/platform-pages";
import { ANDROID_APP_URL, BOOKMARKLET } from "@/lib/site";

type LanguageLink = { code: string; short: string; label: string; href: string };

const CHROME = {
  en: {
    platforms: "Platforms",
    menu: "Menu",
    downloaders: "Downloaders",
    alsoEnglish: "Also in English",
    quick: "Quick links",
    home: "Home",
    bookmark: "Download with Savemov",
    bookmarkHint: "Drag this to your bookmarks bar. On a public video page, click it and the link opens here.",
    appBadge: "Also on Android",
    appTitle: "Get the Savemov App for Android",
    appBody:
      "Prefer downloading on your phone? Get the free Savemov Android app to save videos on the go — auto-detects videos from the sites you browse and saves them straight to your gallery in HD.",
    appButton: "Get it on Google Play",
    appFeatures: [
      "Auto-detects videos while you browse",
      "One-tap downloads in HD quality",
      "Completely free, no signup required",
    ],
  },
  "pt-BR": {
    platforms: "Plataformas",
    menu: "Menu",
    downloaders: "Baixadores",
    alsoEnglish: "Também em inglês",
    quick: "Atalhos",
    home: "Início",
    bookmark: "Baixar com Savemov",
    bookmarkHint: "Arraste para a barra de favoritos. Numa página pública de vídeo, clique e o link abre aqui.",
    appBadge: "Também no Android",
    appTitle: "Baixe o app Savemov para Android",
    appBody:
      "Prefere baixar no celular? O app gratuito do Savemov salva vídeos em qualquer lugar — detecta os vídeos dos sites que você abre e guarda direto na galeria em HD.",
    appButton: "Disponível no Google Play",
    appFeatures: [
      "Detecta vídeos enquanto você navega",
      "Download em um toque, em HD",
      "Grátis, sem cadastro",
    ],
  },
  es: {
    platforms: "Plataformas",
    menu: "Menú",
    downloaders: "Descargadores",
    alsoEnglish: "También en inglés",
    quick: "Enlaces",
    home: "Inicio",
    bookmark: "Descargar con Savemov",
    bookmarkHint: "Arrástralo a la barra de marcadores. En una página pública de vídeo, púlsalo y el enlace se abre aquí.",
    appBadge: "También en Android",
    appTitle: "Consigue la app de Savemov para Android",
    appBody:
      "¿Prefieres descargar en el móvil? La app gratuita de Savemov guarda vídeos donde estés: detecta los vídeos de los sitios que visitas y los guarda en la galería en HD.",
    appButton: "Consíguela en Google Play",
    appFeatures: [
      "Detecta vídeos mientras navegas",
      "Descarga en un toque, en HD",
      "Gratis, sin registro",
    ],
  },
};

function attachBookmarklet(node: HTMLAnchorElement | null) {
  // React strips javascript: URLs from the href prop. Write it after each commit.
  node?.setAttribute("href", BOOKMARKLET);
}

function chrome(lang: string) {
  if (lang === "es") return CHROME.es;
  if (lang === "pt-BR" || lang === "pt") return CHROME["pt-BR"];
  return CHROME.en;
}

function splitPlatforms(lang: string) {
  const all = platformsFor(lang);
  if (lang === "en") return { local: all, english: [] };
  return {
    local: all.filter((platform) => platform.href),
    english: all.filter((platform) => !platform.href),
  };
}

function PlatformLinks({
  lang,
  className,
}: {
  lang: string;
  className: string;
}) {
  const { local, english } = splitPlatforms(lang);
  const text = chrome(lang);
  return (
    <>
      {local.map((platform) => (
        <Link
          key={platform.slug}
          href={platform.href ?? `/${platform.slug}/`}
          title={platform.anchor}
          className={className}
        >
          <img src={PLATFORM_ICONS[platform.slug]} alt="" width={20} height={20} className="size-5 object-contain" />
          {platform.label}
        </Link>
      ))}
      {english.length > 0 ? (
        <p className="px-2 pb-1 pt-3 text-xs font-semibold uppercase tracking-wide text-ink/40">{text.alsoEnglish}</p>
      ) : null}
      {english.map((platform) => (
        <Link
          key={platform.slug}
          href={`/${platform.slug}/`}
          hrefLang="en"
          title={platform.anchor}
          className={className}
        >
          <img src={PLATFORM_ICONS[platform.slug]} alt="" width={20} height={20} className="size-5 object-contain" />
          {platform.label}
        </Link>
      ))}
    </>
  );
}

export function BookmarkletLink({ lang, tone = "light" }: { lang: string; tone?: "dark" | "light" }) {
  const text = chrome(lang);
  const light = tone === "light";

  return (
    <p className={light ? "text-xs leading-5 text-ink/55" : "text-xs leading-5 text-white/60"}>
      <a
        ref={attachBookmarklet}
        href="#download-with-savemov"
        className={light ? "font-semibold text-pine underline" : "font-semibold text-white underline decoration-white/40"}
        onClick={(event) => event.preventDefault()}
      >
        {text.bookmark}
      </a>
      {". "}
      {text.bookmarkHint}
    </p>
  );
}

export function Breadcrumb({
  homeHref,
  homeLabel,
  current,
}: {
  homeHref: string;
  homeLabel: string;
  current: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className="border-y border-line bg-white text-ink">
      <ol className="mx-auto flex max-w-5xl flex-wrap items-center gap-2 px-4 py-2.5 text-sm">
        <li>
          <Link href={homeHref} className="font-medium text-pine hover:underline">
            {homeLabel}
          </Link>
        </li>
        <li aria-hidden="true" className="text-ink/35">
          /
        </li>
        <li aria-current="page" className="text-ink/75">
          {current}
        </li>
      </ol>
    </nav>
  );
}

export function SiteHeader({
  c,
  tone = "dark",
  languages,
}: {
  c: Pick<Copy, "lang" | "path">;
  tone?: "dark" | "light";
  languages?: LanguageLink[];
}) {
  const light = tone === "light";
  const items = languages ?? otherLanguages(c.lang);
  const text = chrome(c.lang);
  const linkClass = light
    ? "rounded-full px-2.5 py-1.5 font-medium text-ink/70 hover:bg-white hover:text-ink sm:px-3"
    : "rounded-full px-2.5 py-1.5 font-medium text-white/75 hover:bg-white/10 hover:text-white sm:px-3";
  const summaryClass = light
    ? "cursor-pointer list-none rounded-full px-3 py-1.5 font-medium text-ink/80 marker:content-none hover:bg-white [&::-webkit-details-marker]:hidden"
    : "cursor-pointer list-none rounded-full px-3 py-1.5 font-medium text-white/80 marker:content-none hover:bg-white/10 [&::-webkit-details-marker]:hidden";

  useEffect(() => {
    function closeOnOutside(event: PointerEvent) {
      const target = event.target;
      if (!(target instanceof Node)) return;
      document.querySelectorAll("header details[open]").forEach((menu) => {
        if (!menu.contains(target)) menu.removeAttribute("open");
      });
    }
    document.addEventListener("pointerdown", closeOnOutside);
    return () => document.removeEventListener("pointerdown", closeOnOutside);
  }, []);

  return (
    <header className={light ? "border-b border-line bg-paper/90 backdrop-blur" : ""}>
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-4">
        <Link href={c.path} className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight" aria-label="Savemov">
          <Mark className={light ? "size-8 text-ink" : "size-8 text-white"} />
          <span className={light ? "text-ink" : "text-white"}>Savemov</span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm md:flex" aria-label={c.lang}>
          {items.map((item) => (
            <Link key={item.code} hrefLang={item.code} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
          <details className="group relative">
            <summary className={summaryClass}>{text.platforms}</summary>
            <div className="absolute right-0 z-30 mt-2 hidden max-h-80 w-56 overflow-auto rounded-2xl border border-line bg-white p-2 text-ink shadow-lg group-open:block">
              <PlatformLinks lang={c.lang} className="flex items-center gap-2 rounded-xl px-2 py-1.5 text-sm font-medium hover:bg-sand" />
            </div>
          </details>
        </nav>

        <details className="group relative md:hidden">
          <summary className={summaryClass} aria-label={text.menu}>
            <span className="flex flex-col gap-1 px-1 py-1" aria-hidden="true">
              <span className={light ? "block h-0.5 w-4 bg-ink" : "block h-0.5 w-4 bg-white"} />
              <span className={light ? "block h-0.5 w-4 bg-ink" : "block h-0.5 w-4 bg-white"} />
              <span className={light ? "block h-0.5 w-4 bg-ink" : "block h-0.5 w-4 bg-white"} />
            </span>
          </summary>
          <div className="absolute right-0 z-30 mt-2 hidden max-h-[70vh] w-64 overflow-auto rounded-2xl border border-line bg-white p-3 text-ink shadow-lg group-open:block">
            <div className="flex flex-wrap gap-2 border-b border-line pb-3">
              {items.map((item) => (
                <Link key={item.code} hrefLang={item.code} href={item.href} className="rounded-full bg-sand px-3 py-1 text-sm font-medium">
                  {item.short}
                </Link>
              ))}
            </div>
            <p className="px-2 pb-1 pt-3 text-xs font-semibold uppercase tracking-wide text-ink/40">{text.platforms}</p>
            <PlatformLinks lang={c.lang} className="flex items-center gap-2 rounded-xl px-2 py-1.5 text-sm font-medium hover:bg-sand" />
          </div>
        </details>
      </div>
    </header>
  );
}

function PlayMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M3.2 20.6V3.4c0-.5.2-.9.5-1.2l.1.1 9.4 9.4-9.4 9.5-.1-.1c-.3-.2-.5-.6-.5-1.1z" />
      <path fill="#34A853" d="m13.2 12.3 2.6 2.6-9.6 5.5c-.5.3-1.1.2-1.5-.1l8.5-8z" />
      <path fill="#FBBC04" d="M18.7 9.6 15.8 8 13.2 11.7l2.6 2.6 3-1.7c.8-.5.8-1.5-.1-2z" />
      <path fill="#EA4335" d="M6.2 3.6 15.8 8 13.2 11.7 4.3 2.8c.4-.4 1.1-.5 1.9-.2z" />
    </svg>
  );
}

function FeatureIcon({ index }: { index: number }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, "aria-hidden": true as const };
  if (index === 0) {
    return (
      <svg {...common}>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M10 9.5v5l4.5-2.5L10 9.5z" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg {...common}>
        <path d="M13 3 5 14h6l-1 7 9-12h-6l0-6z" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M12 3v18M16.5 7.5c0-1.8-2-3-4.5-3s-4.5 1.2-4.5 3 2 2.8 4.5 3.2 4.5 1.5 4.5 3.3-2 3-4.5 3-4.5-1.2-4.5-3" strokeLinecap="round" />
    </svg>
  );
}

function AndroidAppPromo({ lang }: { lang: string }) {
  const text = chrome(lang);
  return (
    <section className="border-t border-line/80 bg-paper">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="rounded-[1.6rem] border border-line bg-white px-6 py-7 shadow-[0_10px_30px_rgba(16,33,28,0.05)] sm:px-8 sm:py-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1.35fr_0.85fr]">
            <div>
              <span className="inline-block rounded-full bg-[#e7f6f1] px-3 py-1 text-[0.72rem] font-bold uppercase tracking-wide text-moss">
                {text.appBadge}
              </span>
              <h2 className="mt-3 text-[1.55rem] font-extrabold leading-tight tracking-tight text-ink">{text.appTitle}</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-ink/60">{text.appBody}</p>
              <a
                href={ANDROID_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#d1d5db] bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-px hover:shadow-md"
              >
                <PlayMark />
                {text.appButton}
              </a>
            </div>
            <ul className="space-y-3.5">
              {text.appFeatures.map((feature, index) => (
                <li key={feature} className="flex items-start gap-2.5 text-[0.95rem] leading-6 text-ink">
                  <span className="mt-0.5 text-moss">
                    <FeatureIcon index={index} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter({ c }: { c: Pick<Copy, "lang" | "path" | "legal" | "footerNote"> }) {
  const text = chrome(c.lang);
  const platforms = splitPlatforms(c.lang);
  const links = [
    { href: c.path, label: text.home },
    { href: "/terms/", label: c.legal.terms },
    { href: "/privacy/", label: c.legal.privacy },
    { href: "/copyright/", label: c.legal.copyright },
    { href: "/contact/", label: c.legal.contact },
  ];

  return (
    <>
    <AndroidAppPromo lang={c.lang} />
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold text-ink">Savemov</p>
          <p className="mt-2 max-w-xs text-xs leading-5 text-ink/55">{c.footerNote}</p>
          <div className="mt-4">
            <BookmarkletLink lang={c.lang} />
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ink">{text.downloaders}</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm">
            {platforms.local.map((platform) => (
              <li key={platform.slug}>
                <Link
                  href={platform.href ?? `/${platform.slug}/`}
                  title={platform.anchor}
                  className="text-ink/70 hover:text-ink"
                >
                  {c.lang === "es" ? `Descargar ${platform.label}` : c.lang === "pt-BR" || c.lang === "pt" ? `Baixar ${platform.label}` : `${platform.label} Downloader`}
                </Link>
              </li>
            ))}
            {platforms.english.length > 0 ? (
              <li className="col-span-2 pt-3 text-xs font-semibold uppercase tracking-wide text-ink/40">{text.alsoEnglish}</li>
            ) : null}
            {platforms.english.map((platform) => (
              <li key={platform.slug}>
                <Link
                  href={`/${platform.slug}/`}
                  hrefLang="en"
                  title={platform.anchor}
                  className="text-ink/70 hover:text-ink"
                >
                  {c.lang === "es" ? `Descargar ${platform.label}` : `Baixar ${platform.label}`}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ink">{text.quick}</h2>
          <ul className="mt-3 space-y-1.5 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ink/70 hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line/80">
        <p className="mx-auto max-w-5xl px-4 py-4 text-xs text-ink/40">© {new Date().getFullYear()} Savemov</p>
      </div>
    </footer>
    </>
  );
}
