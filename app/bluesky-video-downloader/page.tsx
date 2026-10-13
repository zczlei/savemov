import LightDownloaderPage from "@/components/light-downloader-page";
import { BLUESKY, lightMetadata } from "@/lib/light-copy";

export const metadata = lightMetadata(BLUESKY);

export default function Page() {
  return <LightDownloaderPage c={BLUESKY} />;
}