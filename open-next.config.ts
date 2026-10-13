import { defineCloudflareConfig } from "@opennextjs/cloudflare";

/** Same OpenNext setup as video-effects: no R2 incremental cache. */
export default defineCloudflareConfig({});
