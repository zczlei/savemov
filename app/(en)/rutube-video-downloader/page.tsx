import LightDownloaderPage from "@/components/light-downloader-page";
import { lightMetadata, RUTUBE } from "@/lib/light-copy";

export const metadata = lightMetadata(RUTUBE);

export default function Page() {
  return <LightDownloaderPage c={RUTUBE} />;
}
