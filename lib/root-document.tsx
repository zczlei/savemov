import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: "Savemov", template: "%s | Savemov" },
  applicationName: "Savemov",
  icons: { icon: "/icon.svg" },
};

export const rootViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e2a22",
};

export function RootDocument({ lang, children }: { lang: "en" | "pt" | "es"; children: ReactNode }) {
  return (
    <html lang={lang}>
      <head>
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="9PhG5rWbPgpv6rkGm9bSzA" async />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
