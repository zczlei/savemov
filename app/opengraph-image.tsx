import { ImageResponse } from "next/og";

export const alt = "Savemov online video downloader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(155deg, #071410 0%, #0e2a22 48%, #145444 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 32, fontWeight: 800 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "white",
              color: "#10211c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
            }}
          >
            ↓
          </div>
          Savemov
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 68, fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.05, maxWidth: 900 }}>
            Download Video from Link or URL
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.75)" }}>Free online video downloader · MP4 · No app</div>
        </div>
      </div>
    ),
    size,
  );
}
