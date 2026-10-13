import LightDownloaderPage from "@/components/light-downloader-page";
import { lightMetadata, TUMBLR } from "@/lib/light-copy";

export const metadata = lightMetadata(TUMBLR);

export default function Page() {
  return <LightDownloaderPage c={TUMBLR} />;
}
