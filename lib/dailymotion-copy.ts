/** English Dailymotion page copy. The page and its JSON-LD both read this file. */
import { iphoneCameraRollFaq, noSaveButtonFaq } from "@/lib/iphoneFaq";
import { NO_SAVE_REASON } from "@/lib/iphoneReasons";
import type { SnapchatCopy } from "@/lib/snapchat-copy";

/* English only. dai.ly short links resolve. Embed player URLs do not, so that card is omitted. */
export const DM_EN: SnapchatCopy = {
  locale: "en",
  htmlLang: "en",
  inLanguage: "en",
  ogLocale: "en_US",
  path: "/dailymotion-video-downloader/",
  homePath: "/",
  title: "Dailymotion Video Downloader – Save Public Videos as MP4",
  description:
    "Download a public Dailymotion video as MP4 with the sound it carries. Paste a dailymotion.com/video/… link – no app, no sign-up, nothing added to the file.",
  appName: "Savemov Dailymotion Video Downloader",
  featureList: [
    "Download Dailymotion videos",
    "Dailymotion downloader online",
    "Public videos as MP4",
    "Original sound kept",
    "No app, APK or sign-up",
    "No login requested",
  ],
  eyebrow: "No app · No sign-up · Nothing added to the file",
  h1: "Download Dailymotion Videos from Any Public Link",
  h2: "Free online Dailymotion downloader – paste a dailymotion.com/video/… or dai.ly/… link and get back the MP4 the page is already playing.",
  formLabel: "Link to the Dailymotion video",
  formPlaceholder: "Paste a dailymotion.com/video/x… link",
  formButton: "Download MP4",
  helper: "Public Dailymotion videos only.",
  home: "Home",
  crumb: "Dailymotion Video Downloader",
  copyrightLink: "Copyright",
  badges: [
    { t: "No app or APK", d: "Runs in the browser you already have, on desktop, iPhone or Android." },
    { t: "No account needed", d: "We never ask for a Dailymotion login – nothing to hand over." },
    { t: "Original sound kept", d: "The audio from the video travels with the file, unconverted." },
    { t: "Public videos only", d: "Age locks, paid videos and private uploads stay out of reach by design." },
  ],
  how: {
    title: "How to download a Dailymotion video",
    steps: [
      {
        h: "Copy the video's address",
        p: "Open the video and copy it from the browser bar – you get a Dailymotion.com/video/x… address. In the app, tap Share → Copy link instead.",
      },
      {
        h: "Check that it plays for a logged-out visitor",
        p: "Paste the link into a private window. If the player starts there, this page can read it too. Anything asking for a login, an age check or a payment is out of reach.",
      },
      {
        h: "Paste it above and press Download MP4",
        p: "Savemov opens the link, finds the media file the player streams and prepares a copy.",
      },
      {
        h: "Save it on your device",
        p: "The result link comes back with the response, so download it on the spot – Savemov does not keep a copy of your video.",
      },
    ],
  },
  kinds: {
    title: "Which Dailymotion videos this page can save",
    cards: [
      { h: "Public videos", p: "Any Dailymotion.com/video/x… link that plays without signing in – news clips, sport highlights, official channel uploads." },
      { h: "Your own uploads", p: "Back up a video before you re-cut or delete it – no need to sign into Studio to keep a copy of your own file." },
      { h: "Channels and long videos", p: "One link, one file. A long documentary on Dailymotion saves the same way a 30-second clip does." },
      { h: "Live streams", p: "A broadcast that is still running has no finished file to hand back. Once it is published as a recording, its link works like any other video." },
      { h: "Paid, age-locked and private videos", p: "Rentals, private embeds and anything behind a payment or an age check need an account we will never ask for, so no downloader can honestly reach them." },
    ],
  },
  formats: {
    title: "File format, sound and quality",
    body: [
      "Savemov returns the video file the player streams. That is why there is no conversion step here: no re-encoding, no quality loss, and no watermark of ours layered on top.",
      "Quality follows the upload, not our settings. A video published at a lower resolution comes back at that resolution, and we will not upscale it to pretend otherwise. That is also why this page has no HD or 4K switch, even though people search for one.",
      "The video file only. There is no audio-only MP3 track, no subtitle download and no GIF export – pulling sound out of the file or looping it would mean re-encoding the video you asked for. If a result ever comes back silent, the video was published without sound.",
    ],
  },
  mark: {
    title: "Watermarks on Dailymotion videos – what we can and cannot do",
    body: [
      "Dailymotion does not stamp a username over the video the way an in-app save does elsewhere, so there is no platform mark to dodge. What you watched is what you get.",
      "What stays is anything already inside the frames: a broadcaster's logo, a channel bug, an editing-app mark, a caption burned into the picture. Those belong to the upload, not to us.",
      "Tools that promise to erase a burned-in logo re-encode the video, and that is what makes the result softer than the stream you watched. We would rather hand you the file as published and tell you the truth about it.",
    ],
  },
  privacy: {
    title: "Public links only – and why no Dailymotion downloader can offer more",
    body: [
      "This page reads only what a logged-out visitor can already watch. Dailymotion puts paid videos, private embeds and age-gated clips behind a login or a payment, so there is no public file for us to prepare, and no setting here changes that.",
      "It is also why no Dailymotion downloader can honestly promise locked content. Any tool asking for your login, a browser extension or an APK with permissions it has no use for is not fetching a public file – it is collecting your account. Savemov asks for none of it: one public link, nothing stored, nothing installed.",
      "Dailymotion's own help for downloading a video points at Dailymotion Studio – Media > Videos, the catalogue of whoever uploaded it. That is the path for an owner, and it is exactly the gap this page fills for everyone else: a public link, no sign-in, no dashboard.",
    ],
  },
  faq: {
    title: "Dailymotion video downloader FAQ",
    items: [
      {
        q: "How do I download a Dailymotion video?",
        a: "Copy the video's address from the browser bar (or Share → Copy link in the app), paste it above and press Download MP4. Savemov returns the file the page is already streaming – no app, no account, nothing installed.",
      },
      {
        q: "How do I download a video from Dailymotion to my phone?",
        a: "The same box, on any phone. Open the video in your browser, copy its address, paste it here and press Download MP4. Android saves it straight to your device; on iPhone the file lands in the Files app first – the next answer has the two taps that move it into Photos.",
      },
      iphoneCameraRollFaq({
        q: "How can I download videos directly to my phone?",
        copyStep: "Copy the video's address from the browser bar, or tap Share → Copy link in the app",
      }),
      noSaveButtonFaq({
        q: "Why is there no download button on a Dailymotion video?",
        reason: NO_SAVE_REASON.Dailymotion,
      }),
      {
        q: "How can I download videos from Dailymotion offline?",
        a: "There is no offline mode to switch on here – and that is the point. Press Download MP4 and the file is on your device, so it plays on a plane, in a tunnel or with the connection off, without any app keeping a library, a queue or a sync in the background.",
      },
      {
        q: "How can I convert Dailymotion videos to MP4 files?",
        a: "You don't convert anything. This page returns the video file the player already streams, so there is no converter, no second step and no re-encode that softens the picture. If you wanted the audio on its own, that is a different file – we hand back the video with its sound inside it.",
      },
      {
        q: "Is this Dailymotion downloader without watermark?",
        a: "Nothing is added, ever. Dailymotion does not stamp a username over the video either, so there is no in-app mark to dodge – a logo you can see in the picture was part of the upload and stays. Anything claiming to remove it re-encodes the file.",
      },
      {
        q: "Do I need a Dailymotion app or an account?",
        a: "No, and that is why people land here. 40,500 searches a month ask for the app, but saving one public clip needs none of it: no install, no permissions, no sign-up, no email. One link in the browser you already use.",
      },
      {
        q: "Can I download a private or paid Dailymotion video?",
        a: "No. Rentals, private embeds and age-gated videos sit behind a login or a payment, so there is no public file to prepare – and a tool that claims otherwise is asking for your credentials to do it. Savemov never asks for one.",
      },
      {
        q: "Why does my Dailymotion link not work?",
        a: "Four causes cover almost all of it: the video was deleted or made private after you saved the link, it is age-gated or a paid rental, the address you copied points at a search or channel page rather than a single video, or it is still a live broadcast with no finished file. Paste it into a private window first – if the player does not start there, nothing here can read it.",
      },
      {
        q: "Can I download a Dailymotion playlist or channel?",
        a: "One link in, one video out. Playlists and channels are lists of links, not a file, so there is nothing to hand back in bulk – open the video you actually want and paste its address.",
      },
      {
        q: "Is it free, and is there a limit?",
        a: "Yes, with no sign-up. Each request saves one public video at the quality it was published in. Savemov does not keep the file – the download link comes back with the response and that is the whole transaction.",
      },
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
