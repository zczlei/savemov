import Link from "next/link";
import { Mark } from "@/components/mark";

export function NotFoundView() {
  return (
    <div className="hero-shell flex min-h-screen flex-col text-white">
      <header className="mx-auto flex w-full max-w-5xl items-center px-4 py-4">
        <Link href="/" className="flex items-center gap-2.5 font-extrabold">
          <Mark className="size-8 text-white" />
          Savemov
        </Link>
      </header>
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center px-4 pb-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">404</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight">This page is not here</h1>
        <p className="mt-3 text-white/70">The downloader still lives on the homepage.</p>
        <Link href="/" className="mt-6 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink">
          Back to the downloader
        </Link>
      </main>
    </div>
  );
}
