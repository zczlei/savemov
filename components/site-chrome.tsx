import Link from "next/link";
import { Mark } from "@/components/mark";
import { otherLanguages, type Copy } from "@/lib/copy";

export function SiteHeader({ c, tone = "dark" }: { c: Pick<Copy, "lang" | "path">; tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <header className={light ? "border-b border-line bg-paper/90 backdrop-blur" : ""}>
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <Link href={c.path} className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight" aria-label="Savemov">
          <Mark className={light ? "size-8 text-ink" : "size-8 text-white"} />
          <span className={light ? "text-ink" : "text-white"}>Savemov</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm sm:gap-2" aria-label={c.lang}>
          {otherLanguages(c.lang).map((item) => (
            <Link
              key={item.code}
              hrefLang={item.code}
              href={item.href}
              className={
                light
                  ? "rounded-full px-2.5 py-1.5 font-medium text-ink/70 hover:bg-white hover:text-ink sm:px-3"
                  : "rounded-full px-2.5 py-1.5 font-medium text-white/75 hover:bg-white/10 hover:text-white sm:px-3"
              }
            >
              <span className="sm:hidden">{item.short}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter({ c }: { c: Pick<Copy, "legal" | "footerNote"> }) {
  const links = [
    { href: "/terms/", label: c.legal.terms },
    { href: "/privacy/", label: c.legal.privacy },
    { href: "/copyright/", label: c.legal.copyright },
    { href: "/contact/", label: c.legal.contact },
  ];

  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">Savemov</p>
          <p className="mt-1 max-w-md text-xs leading-5 text-ink/55">{c.footerNote}</p>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink/70">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-line/80">
        <p className="mx-auto max-w-5xl px-4 py-4 text-xs text-ink/40">© {new Date().getFullYear()} Savemov</p>
      </div>
    </footer>
  );
}
