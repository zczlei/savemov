"use client";

import Link from "next/link";
import { Mark } from "@/components/mark";
import { otherLanguages, platformsFor, type Copy } from "@/lib/copy";
import { PLATFORM_ICONS } from "@/lib/platform-pages";
import { BOOKMARKLET } from "@/lib/site";

type LanguageLink = { code: string; short: string; label: string; href: string };

const CHROME = {
  en: {
    platforms: "Platforms",
    menu: "Menu",
    downloaders: "Downloaders",
    quick: "Quick links",
    home: "Home",
    bookmark: "Download with Savemov",
    bookmarkHint: "Drag this to your bookmarks bar. On a public video page, click it and the link opens here.",
  },
  "pt-BR": {
    platforms: "Plataformas",
    menu: "Menu",
    downloaders: "Baixadores",
    quick: "Atalhos",
    home: "Início",
    bookmark: "Baixar com Savemov",
    bookmarkHint: "Arraste para a barra de favoritos. Numa página pública de vídeo, clique e o link abre aqui.",
  },
  es: {
    platforms: "Plataformas",
    menu: "Menú",
    downloaders: "Descargadores",
    quick: "Enlaces",
    home: "Inicio",
    bookmark: "Descargar con Savemov",
    bookmarkHint: "Arrástralo a la barra de marcadores. En una página pública de vídeo, púlsalo y el enlace se abre aquí.",
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

function PlatformLinks({
  lang,
  className,
}: {
  lang: string;
  className: string;
}) {
  return (
    <>
      {platformsFor(lang).map((platform) => (
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

export function SiteFooter({ c }: { c: Pick<Copy, "lang" | "path" | "legal" | "footerNote"> }) {
  const text = chrome(c.lang);
  const links = [
    { href: c.path, label: text.home },
    { href: "/terms/", label: c.legal.terms },
    { href: "/privacy/", label: c.legal.privacy },
    { href: "/copyright/", label: c.legal.copyright },
    { href: "/contact/", label: c.legal.contact },
  ];

  return (
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
            {platformsFor(c.lang).map((platform) => (
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
  );
}
