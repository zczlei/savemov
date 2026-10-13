/** English-only light pages. The page and its JSON-LD both read this file. */
import type { Metadata } from "next";
import { iphoneCameraRollFaq, noSaveButtonFaq } from "@/lib/iphoneFaq";
import { NO_SAVE_REASON } from "@/lib/iphoneReasons";

export type LightCopy = {
  slug: string;
  platform: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  h2: string;
  formLabel: string;
  formPlaceholder: string;
  helper: string;
  value: string;
  linkShape: string;
  copyStep: string;
  limitsTitle: string;
  limits: [string, string, string];
  q: { q: string; a: string }[];
  iphoneQ?: string;
  noSaveQ?: string;
  interlinks: { href: string; label: string }[];
};

export const badges = (c: LightCopy) => [
  { t: "No app or extension", d: "Runs in the browser you already have, on desktop, iPhone or Android." },
  { t: "No login asked for", d: `We never ask for a ${c.platform} account, a token or a password, so there is nothing to leak.` },
  { t: "The file as it plays", d: "You get back what the player streams, sound included – no re-encode and no watermark added by us." },
];

export const featureList = (c: LightCopy) => [
  `${c.platform} video downloader online`,
  "Original file with its sound kept",
  "No app, extension or sign-up",
  "Public links only",
  "Nothing stored after you download",
];

export const how = (c: LightCopy) => ({
  title: `How to download a ${c.platform} video`,
  steps: [
    { h: "Copy the video's address", p: `${c.copyStep} – you want a ${c.linkShape} link.` },
    { h: "Check that it plays for a logged-out visitor", p: "Paste the link into a private window. If the player starts there, this page can read it too. Anything asking for a login, an age check or a payment is out of reach." },
    { h: "Paste it above and press Download MP4", p: "Savemov opens the link, finds the media file the player streams and prepares a copy." },
    { h: "Save it on your device", p: `The result link comes back with the response, so download it on the spot – Savemov does not keep a copy of your ${c.platform} video.` },
  ],
});

export function buildFaq(c: LightCopy) {
  const items: { q: string; a: string }[] = [
    {
      q: `How do I download a ${c.platform} video?`,
      a: `Copy the link (${c.linkShape}), paste it in the box above and press Download MP4. ${c.value}`,
    },
    ...c.q,
  ];
  if (c.iphoneQ) items.push(iphoneCameraRollFaq({ q: c.iphoneQ, copyStep: c.copyStep }));
  if (c.noSaveQ) items.push(noSaveButtonFaq({ q: c.noSaveQ, reason: NO_SAVE_REASON[c.platform] }));
  items.push(
    {
      q: "Is it free, and how many videos can I save?",
      a: `Yes, with no sign-up and nothing stamped onto the file. Each request saves one public ${c.platform} video as MP4, at the quality that page published. Savemov does not keep the file.`,
    },
    {
      q: "Is downloading a video legal?",
      a: "Keeping one to watch offline is normally fine. Republishing it somewhere else – cut up or untouched – without whoever made it agreeing is not your call to make, and not ours either. Copyright stays with the person who uploaded it.",
    },
  );
  return items;
}

export function lightMetadata(c: LightCopy): Metadata {
  const path = `/${c.slug}/`;
  return {
    title: { absolute: c.title },
    description: c.description,
    alternates: {
      canonical: path,
      languages: { en: path, "x-default": path },
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: "Savemov",
      locale: "en_US",
      title: c.title,
      description: c.description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: c.h1 }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.description,
      images: ["/opengraph-image"],
    },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  };
}

export const TUMBLR: LightCopy = {
  slug: "tumblr-video-downloader",
  platform: "Tumblr",
  title: "Tumblr Video Downloader – Save Videos and GIFs as MP4",
  description:
    "Tumblr stores its GIFs as looping MP4, so there is nothing to convert. Paste a public tumblr.com link and get back that same MP4.",
  eyebrow: "No app · No sign-up · Nothing re-encoded",
  h1: "Download Tumblr Videos and GIFs From Any Public Post",
  h2: "Free online Tumblr downloader – paste a tumblr.com/post/… or tumblr.com/username/… link and get back the MP4 the page is already serving.",
  formLabel: "Link to the Tumblr post",
  formPlaceholder: "Paste a tumblr.com/post/… or tumblr.com/username/… link",
  helper: "Public Tumblr posts only.",
  value:
    "Tumblr plays a video or a looping GIF without offering anybody else's post as a file – its own help pages describe what to upload, not how to keep a post you came across. We hand back the same file the player streams.",
  linkShape: "tumblr.com/post/… or tumblr.com/username/…",
  copyStep: "Open the post in a browser and copy its address from the bar",
  limitsTitle: "File, quality and what stays out of reach",
  limits: [
    "No conversion step, so nothing is lost on the way. Tumblr's own help says uploads arrive as MOV or MP4 and that a GIF posted there becomes a 720p H.264 MP4 – which is exactly the file this page gives back, and why there is no GIF option to switch on.",
    "Quality follows the post, not our settings. A GIF published small comes back small and we will not upscale it into something the upload never was. There is no audio-only MP3 track, no subtitle file and no second copy at a higher resolution.",
    "Public posts only. Private blogs, password-protected posts and anything a subscriber-only blog hides behind a login stay out of reach – we never ask for a Tumblr account and cannot use one. A reblog carries the original file, so its link lands on the same video as the source post.",
  ],
  q: [
    { q: "Can I download a Tumblr GIF?", a: "Yes, and you are not really converting anything: Tumblr's own engineering post explains that GIFs on the platform are served as looping MP4 files. The copy you save plays like the GIF you saw, only with a .mp4 name." },
    { q: "Why is the GIF I saved silent?", a: "Because the file Tumblr serves for a GIF carries no audio track at all – a loop posted as a GIF never had sound to keep. Videos posted on Tumblr do keep their audio." },
    { q: "Do I need the Tumblr app or an account?", a: "Neither. One link and one request in the browser you already have – nothing to install, no login to hand over." },
  ],
  iphoneQ: "How do I save a Tumblr video to my iPhone camera roll?",
  interlinks: [
    { href: "/tiktok-downloader/", label: "TikTok Downloader" },
    { href: "/instagram-reels-downloader/", label: "Instagram Reels Downloader" },
    { href: "/pinterest-video-downloader/", label: "Pinterest Video Downloader" },
    { href: "/bluesky-video-downloader/", label: "Bluesky Video Downloader" },
  ],
};

export const OKRU: LightCopy = {
  slug: "okru-video-downloader",
  platform: "OK.ru",
  title: "OK.ru Video Downloader – Save Odnoklassniki Videos as MP4",
  description:
    "OK.ru serves several versions instead of one file. Paste a public ok.ru/video/… link that already plays logged out and get the MP4.",
  eyebrow: "No app · No sign-up · No account needed",
  h1: "Download OK.ru (Odnoklassniki) Videos From Any Public Link",
  h2: "Free online OK downloader – paste an ok.ru/video/… link only when that page already plays without a login.",
  formLabel: "Link to the OK video",
  formPlaceholder: "Paste an ok.ru/video/… link",
  helper: "Public OK videos only.",
  value:
    "OK delivers its video as several versions rather than one plain file address, and the player picks among them. When there is no single file a logged-out visitor can read, this page comes back empty too – it does not sign in to find another.",
  linkShape: "ok.ru/video/…",
  copyStep: "Open the video on OK and copy its address from the browser bar (in the app, Share → Copy link)",
  limitsTitle: "Quality, formats and limits",
  limits: [
    "When a file comes back, it is the one the player is already streaming – not a higher resolution we invented. On an older upload that may be SD. There is no MP3 track and no subtitle file.",
    "Nothing is stamped onto the frame by us, and nothing already inside the frame is removed: a channel logo or a burned-in caption belongs to the upload.",
    "Public videos only. Anything OK opens only after a login – a closed group, a profile behind a privacy lock, a clip it gates by age – is off limits here on purpose. We never ask for your account, so we cannot open a door that needs one.",
  ],
  q: [
    { q: "Why do other downloaders say the OK.ru link is not supported?", a: "Because OK does not hand the browser one ordinary file address – it serves several versions and lets the player choose. A tool that only looks for a single file link finds nothing and gives up. This page stops in the same place when that file is not there." },
    { q: "My OK video link did not work. Why?", a: "OK changes how it delivers video, and a public-looking ok.ru/video/… address can still come back with no file. Try the video's own page address instead of a link from a feed. It is not a paid quota and nothing was charged you. If a private window does not play it, nothing here can read it." },
    { q: "Can I download a video from a closed group?", a: "No. If OK needs a login or membership before it shows the player, that video is not public, and no honest downloader can fetch it without signing in – something we will never ask you to do." },
  ],
  iphoneQ: "How do I save an OK video to my iPhone camera roll?",
  interlinks: [
    { href: "/vk-video-downloader/", label: "VK Video Downloader" },
    { href: "/dailymotion-video-downloader/", label: "Dailymotion Video Downloader" },
    { href: "/rutube-video-downloader/", label: "Rutube Video Downloader" },
    { href: "/facebook-video-downloader/", label: "Facebook Video Downloader" },
  ],
};

export const LOOM: LightCopy = {
  slug: "loom-video-downloader",
  platform: "Loom",
  title: "Loom Downloader – Download Loom Videos as MP4 Online",
  description:
    "Loom's download step sits in the recorder's library, behind a Downloads toggle. Paste a public loom.com/share/… link and get the MP4.",
  eyebrow: "No app · No extension · No workspace needed",
  h1: "Download Loom Videos Without Touching Your Account",
  h2: "Free Loom video downloader online – paste a loom.com/share/… link and get back the MP4 the recording was published as.",
  formLabel: "Link to the Loom recording",
  formPlaceholder: "Paste a loom.com/share/… link",
  helper: "Publicly shared Loom links only.",
  value:
    "The download button you are looking for does exist in Loom – just not for you. It belongs to whoever recorded the video and their library, and viewers only get it when that person turns Downloads on.",
  linkShape: "loom.com/share/…",
  copyStep: "Open the recording in a browser and copy its loom.com/share/… address from the bar",
  limitsTitle: "What you get, and what a Loom link will not give",
  limits: [
    "One finished MP4 per recording, with the camera and the screen already mixed into it the way Loom ships it. There is no separate camera-only file here, no audio-only MP3 and no caption file – Loom keeps those inside its own player.",
    "Resolution follows the recording and the plan it was made on. You get the file that link is already playing, and we never upscale it, so there is no HD or 4K switch on this page.",
    "Anything private stays where it is. A recording shared only to someone's workspace, behind a password, or deleted from Loom is not something this page will touch – it takes one public link and asks for no login, which is also how your own recordings stay yours.",
  ],
  q: [
    { q: "Can I download Loom videos on the free plan?", a: "The plan decides what the recorder can do; it does not decide whether you can save something they already shared publicly. A link that opens in a private window can be read here even if you have no Loom account at all." },
    { q: "Which Loom links work here?", a: "The loom.com/share/… address from the browser bar or from a recording's own share step. A link that ends on a Loom sign-in screen for a logged-out visitor is a private one, and this page will not go through it." },
    { q: "Do I need the Loom app, extension or desktop recorder?", a: "No – nothing to install, no browser extension, no Chrome web store app. One link in the browser you already use, on desktop, iPhone or Android." },
  ],
  iphoneQ: "How do I get a Loom recording into my iPhone Photos?",
  noSaveQ: "Why won't Loom let me download my video?",
  interlinks: [
    { href: "/streamable-video-downloader/", label: "Streamable Downloader" },
    { href: "/dailymotion-video-downloader/", label: "Dailymotion Video Downloader" },
    { href: "/vk-video-downloader/", label: "VK Video Downloader" },
    { href: "/tiktok-downloader/", label: "TikTok Downloader" },
  ],
};

export const STREAMABLE: LightCopy = {
  slug: "streamable-video-downloader",
  platform: "Streamable",
  title: "Streamable Downloader – Save Videos as MP4 Before They Expire",
  description:
    "Streamable shows its download step only to the uploader. Paste a public streamable.com link while it still plays and get the MP4 with sound.",
  eyebrow: "No app · No sign-up · Grab it before it ages out",
  h1: "Download Streamable Videos From Any Public Link",
  h2: "Free Streamable video downloader online – paste a streamable.com/… link and get back the MP4 still being served.",
  formLabel: "Link to the Streamable video",
  formPlaceholder: "Paste a streamable.com/… link",
  helper: "Public Streamable links only.",
  value:
    "Streamable keeps a download step for whoever uploaded the video, and shows it to viewers only when downloading is switched on for that upload. A link you were sent very often has no button to press at all.",
  linkShape: "streamable.com/…",
  copyStep: "Open the video and copy its streamable.com address from the browser bar",
  limitsTitle: "Format, sound and the 90-day clock",
  limits: [
    "One MP4 per upload – Streamable hosts plain files rather than a stream of segments, and that is the file that comes back with its audio intact. No re-encode, no quality switch, no separate MP3 and no GIF.",
    "Resolution is whatever the upload was. If the video looks like 480p in the player, a 1080p copy does not exist anywhere to fetch, and we will not make one by upscaling.",
    "The hard limit is time, not our settings: Streamable deletes free uploads automatically after 90 days and states plainly that a deleted video cannot be recovered. So save the file while the page still shows a player – expired or taken-down links have no file left for any tool to hand back.",
  ],
  q: [
    { q: "The Streamable page says the video is gone – can you still get it?", a: "No, and a tool that promises otherwise is padding its own results page. Free uploads are deleted after 90 days and Streamable says they cannot be recovered, so there is nothing left to read. This is exactly why people save the file the week they upload it." },
    { q: "Do I need a Streamable account to use this?", a: "No. No sign-up, no app, no extension – one link, one request. Savemov does not keep the file." },
  ],
  iphoneQ: "How do I save a Streamable video to my iPhone camera roll?",
  noSaveQ: "Why can't I download this video from the Streamable page?",
  interlinks: [
    { href: "/loom-video-downloader/", label: "Loom Downloader" },
    { href: "/reddit-video-downloader/", label: "Reddit Video Downloader" },
    { href: "/dailymotion-video-downloader/", label: "Dailymotion Video Downloader" },
    { href: "/tumblr-video-downloader/", label: "Tumblr Video Downloader" },
  ],
};

export const RUTUBE: LightCopy = {
  slug: "rutube-video-downloader",
  platform: "Rutube",
  title: "Rutube Video Downloader – Save Public Videos as MP4",
  description:
    "Rutube shows a download step on only some videos. Paste a public rutube.ru/video/… link that plays logged out and get the file.",
  eyebrow: "No app · No sign-up · No account needed",
  h1: "Download Rutube Videos From Any Public Link",
  h2: "Free online Rutube downloader – paste a rutube.ru/video/… link and get back the file it is already playing.",
  formLabel: "Link to the Rutube video",
  formPlaceholder: "Paste a rutube.ru/video/… link",
  helper: "Public Rutube videos only.",
  value:
    "Rutube is built for watching rather than keeping: a download option shows up on some uploads only, and a good part of the catalogue is gated behind an age or region marker that needs an account.",
  linkShape: "rutube.ru/video/…",
  copyStep: "Open the video on Rutube and copy its address from the browser bar",
  limitsTitle: "File, restrictions and what one link means",
  limits: [
    "You get the video Rutube streams for that link, sound included: no re-encode, no quality switch, no audio-only MP3. Some uploads exist only as a lower-resolution copy, and then that is what comes back.",
    "Age-marked and region-restricted uploads open only for a signed-in account that meets the requirement. This page never asks for a login, so it cannot read them – and it will not ask you to hand one over in order to try.",
    "One link, one file. There is no bulk save of a channel or a collection here. A player embedded on another website points at the same Rutube file, so the video's own address is the one worth pasting.",
  ],
  q: [
    { q: "Can I download any video from Rutube?", a: "Only the ones that play for a visitor who is not logged in. Paste the link into a private window first: if Rutube shows a sign-in prompt or an age check there, the video is not public and no honest tool can fetch it." },
    { q: "Do I need the Rutube app, APK or a Russian account?", a: "None of them. One link in the browser you already have – nothing installed, no login, no region setting to change." },
    { q: "Will the saved file have a watermark?", a: "Nothing is added by us. A channel logo or a caption already burned into the frames belongs to the upload and stays, because scraping it off would mean re-encoding the video into a worse copy than the one you watched." },
  ],
  iphoneQ: "How do I save a Rutube video to my iPhone camera roll?",
  interlinks: [
    { href: "/okru-video-downloader/", label: "OK.ru Video Downloader" },
    { href: "/vk-video-downloader/", label: "VK Video Downloader" },
    { href: "/dailymotion-video-downloader/", label: "Dailymotion Video Downloader" },
    { href: "/pinterest-video-downloader/", label: "Pinterest Video Downloader" },
  ],
};

export const BLUESKY: LightCopy = {
  slug: "bluesky-video-downloader",
  platform: "Bluesky",
  title: "Bluesky Video Downloader – Save Public Videos as MP4",
  description:
    "Bluesky has no save step for a video somebody else posted. Paste a public bsky.app link and get back the file your feed is playing.",
  eyebrow: "No app · No sign-in · One link, one file",
  h1: "Download Bluesky Videos From Any Public Post",
  h2: "Free online Bluesky downloader – paste a bsky.app link and get back the video the timeline is already playing.",
  formLabel: "Link to the Bluesky post",
  formPlaceholder: "Paste a bsky.app/profile/…/post/… link",
  helper: "Public Bluesky posts only.",
  value:
    "Bluesky lets you post video but gives you no way to keep one that someone else posted – its share step sends the link, not the file, and people asking about it on Bluesky's own forums is how this page exists.",
  linkShape: "bsky.app/profile/…/post/…",
  copyStep: "Tap the three dots on the post and choose Copy Link (on the web, copy the bsky.app address from the bar)",
  limitsTitle: "File, GIFs and what stays out of reach",
  limits: [
    "You get back the video Bluesky prepared for playback, with its sound – the same picture and audio the feed shows, no re-encode and no quality switch to guess at.",
    "GIFs are video here. Bluesky does not post actual .gif files: an animation somebody wants to share goes up as a short looping clip, so the copy you save has no .gif name even though it loops the same way. Subtitles a recorder attached live in Bluesky's player and are not packed into the file.",
    "Public posts only. A video from a deleted, blocked or private account has nothing here to read, and we never ask for a Bluesky login to try. Nothing about your link is kept on our side – the result comes back with the response and we do not store a copy.",
  ],
  q: [
    { q: "Which Bluesky links work here?", a: "A post URL – the bsky.app/profile/…/post/… shape you get from Copy Link or from the browser bar. A repost or a quote carries the original video, so its own link lands on the same file." },
    { q: "Can I save a Bluesky GIF?", a: "Yes, as a video file. Bluesky turns animations into short looping clips instead of serving a .gif, so the download plays the same and just ends in a different name." },
    { q: "Do I need the Bluesky app or an account?", a: "Neither. One link, one request, nothing installed and no login – which is also why a post you cannot open while logged out cannot be saved here either." },
  ],
  iphoneQ: "How do I save a Bluesky video to my iPhone camera roll?",
  noSaveQ: "Why is there no download button on a Bluesky post?",
  interlinks: [
    { href: "/twitter-video-downloader/", label: "Twitter Video Downloader" },
    { href: "/tiktok-downloader/", label: "TikTok Downloader" },
    { href: "/tumblr-video-downloader/", label: "Tumblr Video Downloader" },
    { href: "/reddit-video-downloader/", label: "Reddit Video Downloader" },
  ],
};
