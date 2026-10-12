"use client";

import { useEffect, useState } from "react";
import type { FormCopy } from "@/lib/copy";

type Phase = "idle" | "fetching" | "ready" | "error";
type ErrorCode = "badUrl" | "network" | "unsupported" | "ratelimit";

function isHttpUrl(value: string) {
  if (!value || value.length > 2048) return false;
  try {
    const url = new URL(value);
    return (url.protocol === "http:" || url.protocol === "https:") && url.hostname.includes(".");
  } catch {
    return false;
  }
}

function domainOf(value: string) {
  try {
    return new URL(value).hostname.replace(/^www\./, "");
  } catch {
    return "the page";
  }
}

export default function DownloaderForm({ copy }: { copy: FormCopy }) {
  const [url, setUrl] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [error, setError] = useState<ErrorCode | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  useEffect(() => {
    const preset = new URLSearchParams(window.location.search).get("url");
    if (preset) setUrl(preset);
  }, []);

  async function paste() {
    try {
      const text = await navigator.clipboard.readText();
      if (text) setUrl(text.trim());
    } catch {
      /* Clipboard permission denied: the field stays editable. */
    }
  }

  function reset() {
    setUrl("");
    setPhase("idle");
    setError(null);
    setDownloadUrl(null);
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    const value = url.trim();
    if (!isHttpUrl(value)) {
      setPhase("error");
      setError("badUrl");
      setDownloadUrl(null);
      return;
    }

    setPhase("fetching");
    setError(null);
    setDownloadUrl(null);

    try {
      const response = await fetch("/api/download/", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ url: value }),
      });
      const data = (await response.json().catch(() => null)) as { downloadUrl?: string; error?: ErrorCode } | null;

      if (!response.ok || !data?.downloadUrl) {
        setPhase("error");
        setError(data?.error === "ratelimit" || response.status === 429 ? "ratelimit" : data?.error || "unsupported");
        return;
      }

      setDownloadUrl(data.downloadUrl);
      setPhase("ready");
    } catch {
      setPhase("error");
      setError("network");
    }
  }

  const stepIndex = phase === "ready" ? 3 : phase === "fetching" ? 1 : phase === "error" ? 1 : 0;
  const message =
    phase === "fetching"
      ? copy.busy.replace("{domain}", domainOf(url))
      : phase === "ready"
        ? copy.ready
        : error
          ? copy[error]
          : "";

  return (
    <div className="rounded-[1.6rem] bg-white p-4 text-ink shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:p-5">
      <form onSubmit={submit} noValidate>
        <label htmlFor="video-url" className="block text-sm font-semibold text-pine">
          {copy.label}
        </label>
        <div className="mt-2.5 flex flex-col gap-2 sm:flex-row">
          <input
            id="video-url"
            type="url"
            inputMode="url"
            name="url"
            autoComplete="off"
            spellCheck={false}
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder={copy.placeholder}
            aria-invalid={error === "badUrl"}
            aria-describedby="url-status"
            className="min-w-0 flex-1 rounded-2xl border border-line bg-paper px-4 py-3.5 text-base text-ink outline-none transition placeholder:text-ink/35 focus:border-pine focus:bg-white focus:ring-4 focus:ring-pine/10"
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={paste}
              className="rounded-2xl border border-line px-4 py-3.5 text-sm font-semibold text-pine transition hover:bg-sand"
            >
              {copy.paste}
            </button>
            <button
              type="submit"
              disabled={phase === "fetching"}
              className="flex-1 rounded-2xl bg-ink px-6 py-3.5 text-base font-semibold text-white transition hover:bg-pine disabled:opacity-60 sm:min-w-40"
            >
              {phase === "fetching" ? copy.steps[1] + "…" : copy.button}
            </button>
          </div>
        </div>
        {url && phase !== "fetching" ? (
          <button type="button" onClick={reset} className="mt-2 text-sm text-ink/50 underline decoration-line underline-offset-2">
            {copy.clear}
          </button>
        ) : null}
      </form>

      <ol className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-[11px] font-semibold sm:text-xs" aria-label="Download progress">
        {copy.steps.map((step, index) => {
          const active = index === stepIndex && phase !== "ready";
          const done = phase === "ready" || index < stepIndex;
          return (
            <li key={step} className="flex items-center gap-2">
              <span
                aria-current={active ? "step" : undefined}
                className={
                  active
                    ? "rounded-full bg-ink px-2.5 py-1 text-white"
                    : done
                      ? "rounded-full bg-sand px-2.5 py-1 text-pine"
                      : "rounded-full px-2.5 py-1 text-ink/35"
                }
              >
                {index + 1} {step}
              </span>
              {index < copy.steps.length - 1 ? <span className="text-ink/20">›</span> : null}
            </li>
          );
        })}
      </ol>

      <p id="url-status" role="status" aria-live="polite" className="mt-3 min-h-6 text-sm text-ink/70">
        {message}
      </p>

      {phase === "ready" && downloadUrl ? (
        <div className="mt-1 flex flex-col gap-3 rounded-2xl bg-sand p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-pine">{copy.ready}</p>
          <div className="flex flex-wrap gap-2">
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white"
            >
              {copy.save}
            </a>
            <button type="button" onClick={reset} className="rounded-xl border border-line bg-white px-4 py-2.5 text-sm font-semibold text-pine">
              {copy.another}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
