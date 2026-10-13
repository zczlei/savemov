import LightDownloaderPage from "@/components/light-downloader-page";
import { lightMetadata, OKRU } from "@/lib/light-copy";

export const metadata = lightMetadata(OKRU);

export default function Page() {
  return <LightDownloaderPage c={OKRU} />;
}
