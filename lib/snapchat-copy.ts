/** English Snapchat page copy. The page and its JSON-LD both read this file. */
import { noSaveButtonFaq } from "@/lib/iphoneFaq";
import { NO_SAVE_REASON } from "@/lib/iphoneReasons";

export type SnapchatCopy = {
  locale: "en";
  htmlLang: "en";
  inLanguage: "en";
  ogLocale: "en_US";
  path: string;
  homePath: string;
  title: string;
  description: string;
  appName: string;
  featureList: string[];
  eyebrow: string;
  h1: string;
  h2: string;
  formLabel: string;
  formPlaceholder: string;
  formButton: string;
  helper: string;
  home: string;
  crumb: string;
  copyrightLink: string;
  badges: { t: string; d: string }[];
  how: { title: string; steps: { h: string; p: string }[] };
  kinds: { title: string; cards: { h: string; p: string }[] };
  formats: { title: string; body: string[] };
  mark: { title: string; body: string[] };
  privacy: { title: string; body: string[] };
  faq: { title: string; items: { q: string; a: string }[] };
  relatedTitle: string;
  related: { href: string; label: string }[];
};

export const SNAP_EN: SnapchatCopy = {
  locale: "en",
  htmlLang: "en",
  inLanguage: "en",
  ogLocale: "en_US",
  path: "/snapchat-video-downloader/",
  homePath: "/",
  title: "Snapchat Video Downloader – Save Stories & Spotlight as MP4",
  description:
    "Free Snapchat downloader – save a public Story or Spotlight clip as MP4 with its original sound. No app, no login, no watermark added.",
  appName: "Savemov Snapchat Video Downloader",
  featureList: [
    "Download Snapchat videos",
    "Save a public Story as MP4",
    "Snapchat Spotlight downloader",
    "Original sound kept",
    "No watermark added",
    "No app, APK or sign-up",
  ],
  eyebrow: "No app · No login · Nothing added to the file",
  h1: "Download Snapchat Videos and Public Stories from Any Link",
  h2: "Free Snapchat video downloader – paste a public Story or Spotlight link and save the MP4 with its original sound.",
  formLabel: "Link to the Snapchat Story or Spotlight video",
  formPlaceholder: "Paste a Snapchat link – snapchat.com/@…/spotlight/… or a public Story link",
  formButton: "Download MP4",
  helper: "Public Stories and Spotlight only. Snaps sent in chat stay out of reach.",
  home: "Home",
  crumb: "Snapchat Video Downloader",
  copyrightLink: "Copyright",
  badges: [
    { t: "No app or APK", d: "Runs in the browser you already have – desktop, iPhone or Android." },
    { t: "Original sound kept", d: "The audio recorded with the Snap travels inside the file." },
    { t: "No watermark added", d: "We never stamp the file; what is already in the frames stays as it is." },
    { t: "Saved before it disappears", d: "A Story only lives as long as its author set. Grab the MP4 while it still plays." },
  ],
  how: {
    title: "How to download a Snapchat video",
    steps: [
      {
        h: "Copy the link from the app",
        p: "Open the Spotlight clip or the public Story, tap Share → Copy link. Spotlight gives you an address like snapchat.com/@username/spotlight/…; a Story shared to the web looks like story.snapchat.com/p/… Both forms work here.",
      },
      {
        h: "Check that it is public and still live",
        p: "Open the link in a private window. If it plays there, this page can read it. A Story that has already expired, a Snap sent to you in chat or something inside your Memories has no public file – and no setting here changes that.",
      },
      {
        h: "Paste it above and press Download MP4",
        p: "Savemov opens the link, finds the video the player is already streaming and prepares a copy. Nothing is asked for except the link.",
      },
      {
        h: "Save the file right away",
        p: "The file link comes back with the response, so download it on the spot. That matters more on Snapchat than anywhere else: the source itself is built to disappear.",
      },
    ],
  },
  kinds: {
    title: "Which Snapchat videos this page can save",
    cards: [
      { h: "Spotlight clips", p: "Snapchat's public short-video feed. Every clip there has a shareable link, which is exactly what this page reads." },
      { h: "Public Stories", p: "A Story posted to a public profile works while it is still up – usually a day, sometimes longer if the author chose that." },
      { h: "Videos on a public profile", p: "Anything a logged-out visitor can already watch, from a profile or from a link shared on another site." },
      { h: "Snaps sent to you in chat", p: "No. They have no public address, they expire once watched, and reading them would mean logging into your account." },
      { h: "Memories and My Eyes Only", p: "No – those live inside your account. Snapchat's own My Data export is the way to get your own files back." },
      { h: "Photo Stories and text-only Snaps", p: "A photo is an image, not a video file, so there is no MP4 to hand back. Spotlight posts that are stills behave the same way." },
    ],
  },
  mark: {
    title: "Snapchat video downloader without watermark – what stays and what goes",
    body: [
      "Savemov never puts anything on the file: no logo, no site name, no 'downloaded with' end card. That is the whole of what we control, and it is the honest meaning of 'without watermark' here.",
      "Snapchat burns the sender's handle, the caption and the time onto the frames when it publishes a Story or Spotlight clip. That part is inside the video, so it stays. A page promising to erase it is re-encoding the clip, which is also why results from those tools look softer than what you watched.",
      "No quality menu either. There is no HD or 4K switch to promise: we keep the file at the size Snapchat published it at, and upscaling it would only make the handle blurrier.",
    ],
  },
  formats: {
    title: "File format, sound and quality",
    body: [
      "Savemov keeps the file Snapchat already serves: an MP4 with the audio track recorded on the Snap. We do not convert, compress or re-encode, so what you save plays on any phone, tablet or computer and looks like what the player showed.",
      "Quality follows the upload. A clip published at 720p comes back at 720p and nothing else – it does not become 1080p, and we will not upscale it to pretend otherwise. If a result ever comes out silent, the source was published without sound.",
      "We return the video file only. There is no separate MP3, no GIF export and no photo save: splitting the audio or building a loop would mean re-encoding what you asked for.",
    ],
  },
  privacy: {
    title: "Public links only – and why no Snapchat downloader can offer more",
    body: [
      "This page reads only what a logged-out visitor can already open. A Snap sent to you in chat, a Friends-only Story, an expired Story or anything in your Memories has no public file to prepare, and no option on this page changes that.",
      "It is also why any tool that offers private Snaps is not being straight with you: it wants your Snapchat login, a browser extension that watches everything you do, or money for a 'saver' that cannot beat an expiry timer. Savemov asks for none of that – you submit one public link, nothing is installed, nothing is stored.",
      "And because Snapchat is built around content that disappears, please respect that. Save your own clips, material the creator allows you to reuse, or a personal copy where your law permits. Rights holders can request removal under our Copyright policy, and we act on valid notices.",
    ],
  },
  faq: {
    title: "Snapchat video downloader FAQ",
    items: [
      { q: "How do I download a Snapchat video?", a: "Tap Share → Copy link on the Spotlight clip or public Story, paste that address in the box above and press Download MP4. Savemov finds the file behind the player and returns a copy you can save – no app, no sign-up, no Snapchat account." },
      { q: "Is this Snapchat video downloader without watermark?", a: "In the only sense that is real: we add nothing at all. The handle and caption Snapchat renders onto the frames stay, because they are part of the video – any tool claiming to remove them is re-encoding it and softening the result." },
      { q: "Can I download a public Snapchat Story?", a: "Yes, while it is still up. A Story stays visible for the duration its author set – commonly a day – and once it expires there is no file left for anyone to read. That is the usual reason a Story link stops working." },
      { q: "Can I download a Snap someone sent me?", a: "No. Chat Snaps are addressed to one account, expire after they are watched and have no public link. Reading them would mean logging into your account, which this page never asks for – and a tool that does is after your credentials, not your video." },
      { q: "Will the other person know if I download it?", a: "Nothing in this flow touches your account, so there is no Snapchat event for anyone to see. Screenshots taken inside the app are a different thing: Snapchat itself tells the sender when you screenshot a Snap sent to you." },
      { q: "What is Snapchat Spotlight?", a: "Spotlight is Snapchat's public short-video feed – the equivalent of Reels or TikTok clips. Spotlight videos carry a shareable public link, which is why they work here the same way a public Story does." },
      { q: "Do I need a Snapchat app or APK?", a: "No. Nothing to install, no APK to sideload, no extension to grant permissions. You paste one public link in the browser you already use, on desktop, iPhone or Android. Apps for this exist – the Play Store entries on that search page are them – but a web page does the same job without permissions." },
      {
        q: "How do I save a Snapchat video to my iPhone camera roll?",
        a: "Tap Share → Copy link on the Spotlight clip or public Story, paste the link above and press Download MP4 in Safari. The file lands in the Files app, not straight in Photos. A Spotlight download is an MP4, but the name often has no .mp4 ending, so Share → Save Video may not appear. It stays in Files. No App Store app, and nothing is signed in along the way.",
      },
      noSaveButtonFaq({
        q: "Why is there no download button on a Snapchat Story?",
        reason: NO_SAVE_REASON.Snapchat,
      }),
      { q: "Can I save my own Memories with this?", a: "No – Memories live inside your account and are not published at a public link. For your own files, use Snapchat's My Data request (Settings → My Data): it emails you an export of the Snaps and Memories you saved." },
      { q: "Why did my Snapchat link not work?", a: "The four usual reasons: the Story has expired, the link came from a chat Snap rather than a public post, the profile is private, or you pasted a profile address instead of the clip's own link. Open it in a private window first – if it does not play there, nothing can download it." },
      { q: "Can I get the sound as MP3, or save a photo Story?", a: "No to both. This page returns the video file; splitting audio out would mean re-encoding, and a photo Story has no video file behind it to begin with." },
      { q: "Is there an HD or 4K option?", a: "No, on purpose. We hand back the file Snapchat serves, at the resolution it was published at. A switch that reads 1080p or 4K cannot add detail the source does not hold." },
      { q: "Is it free?", a: "Yes – no sign-up and no account behind it. Each request saves one public video as MP4, at the quality that page published." },
    ],
  },
  relatedTitle: "Other downloaders",
  related: [
    { href: "/", label: "Download Video from Link or URL" },
    { href: "/tiktok-downloader/", label: "TikTok Downloader" },
    { href: "/twitter-video-downloader/", label: "Twitter Video Downloader" },
    { href: "/facebook-video-downloader/", label: "Facebook Video Downloader" },
  ],
};
