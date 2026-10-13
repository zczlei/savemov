import LightDownloaderPage from "@/components/light-downloader-page";
import { lightMetadata, LOOM } from "@/lib/light-copy";

export const metadata = lightMetadata(LOOM);

export default function Page() {
  return <LightDownloaderPage c={LOOM} />;
}
