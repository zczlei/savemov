import LightDownloaderPage from "@/components/light-downloader-page";
import { lightMetadata, STREAMABLE } from "@/lib/light-copy";

export const metadata = lightMetadata(STREAMABLE);

export default function Page() {
  return <LightDownloaderPage c={STREAMABLE} />;
}
