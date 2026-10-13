/** English VK page copy. The page and its JSON-LD both read this file. */
import { iphoneCameraRollFaq, noSaveButtonFaq } from "@/lib/iphoneFaq";
import { NO_SAVE_REASON } from "@/lib/iphoneReasons";
import type { SnapchatCopy } from "@/lib/snapchat-copy";

/* English only. No Russian, Portuguese or Spanish page. */
export const VK_EN: SnapchatCopy = {
  locale: "en",
  htmlLang: "en",
  inLanguage: "en",
  ogLocale: "en_US",
  path: "/vk-video-downloader/",
  homePath: "/",
  title: "VK Video Downloader – Save Public Videos as MP4, No Login",
  description:
    "VK's own Download step only saves a video inside the app for offline viewing – it does not give you the file. Paste a public vk.com/video-… link here and get the MP4, with its sound. No app, no extension, no sign-in.",
  appName: "Savemov VK Video Downloader",
  featureList: [
    "Download VK videos",
    "VK video downloader online",
    "Public videos as MP4",
    "VK Clips saved too",
    "Original sound kept",
    "No app, extension or sign-in",
  ],
  eyebrow: "No app · No extension · No sign-in",
  h1: "Download VK Videos from Any Public Link",
  h2: "Free online VK downloader – paste a vk.com/video-… or vk.com/clip-… link and get back the MP4 the player is already streaming.",
  formLabel: "Link to the VK video",
  formPlaceholder: "Paste a vk.com/video-… or vk.com/clip-… link",
  formButton: "Download MP4",
  helper: "Public VK videos only.",
  home: "Home",
  crumb: "VK Video Downloader",
  copyrightLink: "Copyright",
  badges: [
    { t: "No app or extension", d: "Runs in the browser you already have, on desktop, iPhone or Android – nothing to install or sideload." },
    { t: "No login asked for", d: "We never ask for a VK account, a token or a password, so there is nothing to leak." },
    { t: "Original sound kept", d: "The audio from the video travels with the file, unconverted." },
    { t: "Public videos only", d: "Closed groups, private profiles, 18+ uploads and paid VK Видео titles stay out of reach by design." },
  ],
  how: {
    title: "How to download a VK video",
    steps: [
      {
        h: "Copy the video's address",
        p: "On the web, open the video and copy it from the browser bar – you get a vk.com/video-xxxxxxx_xxxxxxx address. Under the player, the three dots offer Copy link as well. In the app, use Share → Copy link.",
      },
      {
        h: "Check that it plays for a logged-out visitor",
        p: "Paste the link into a private window. If the player starts, this page can read it too. If VK shows a login prompt, an age check or \"video unavailable\", the file is not public and no honest downloader can fetch it.",
      },
      {
        h: "Paste it above and press Download MP4",
        p: "Savemov opens the link, finds the media file the player streams and prepares a copy.",
      },
      {
        h: "Save it where you can actually reach it",
        p: "The result link comes back with the response, so download it on the spot. That is the difference from the app's own Download button: what you get is a file you can move, not something locked inside VK.",
      },
    ],
  },
  kinds: {
    title: "Which VK videos this page can save",
    cards: [
      { h: "Public videos and posts", p: "Any vk.com/video-… link that plays without signing in – clips from public pages, communities and walls." },
      { h: "VK Clips", p: "The short vertical videos under vk.com/clip-… behave like any other video on the platform, so the same link and the same button work." },
      { h: "One video at a time, never a whole album", p: "A playlist or an album is a list of links. Paste one of them and you get that one file – there is no bulk save of a whole collection here, and that is deliberate." },
      { h: "Videos you uploaded yourself", p: "VK lets you keep your own uploads in your gallery and nothing from anyone else. Backing up your own file before you edit or delete the post is the simplest thing this page is for." },
      { h: "A video shared to someone's wall", p: "If the original is public and the reposted player starts without a login, the wall link resolves to the same file." },
      { h: "VK Видео films, series and premium titles", p: "Licensed catalogue content sits behind an account and, often, a subscription. There is no public file to read, so no – and any tool claiming otherwise wants your login." },
      { h: "Live streams", p: "A broadcast still running has no finished file. Once it is published as a recording, its link works like any other video." },
      { h: "Closed groups, 18+ uploads and messages", p: "Anything that needs a login, an age confirmation or membership is out of reach. Messages sent in VK Direct have no public address at all." },
    ],
  },
  formats: {
    title: "File format, sound and quality",
    body: [
      "Savemov returns the video file the player streams – normally an MP4 with the audio track from the video. No conversion step, no re-encoding, nothing of ours layered on top.",
      "Quality follows the upload, not our settings. A video published in low resolution comes back at that resolution and we will not upscale it. That is why there is no 1080p or 4K switch on this page, even though other tools advertise one.",
      "Video only. No MP3 export – VK's audio library is famous and people ask for it, but pulling the sound out of the file would mean re-encoding what you asked for. No subtitles, no photo or GIF save either. If a result comes back silent, the video was published without sound.",
    ],
  },
  mark: {
    title: "Watermarks on VK videos",
    body: [
      "VK does not stamp a username over the video the way an in-app save does on some other platforms, so there is no platform mark for us to dodge. What you watched is what you get.",
      "What stays is anything already inside the frames: a channel bug, a broadcaster's logo, a caption burned into the picture, an editing-app mark. Those belong to the upload, not to us.",
      "Anything promising to erase a burned-in mark is re-encoding the video, and that is what makes the result softer than what you watched online.",
    ],
  },
  privacy: {
    title: "Public videos only – and the warning VK itself gives",
    body: [
      "This page reads only what a logged-out visitor can already see. VK keeps closed communities, private profiles, age-restricted uploads and its paid catalogue behind an account, so there is no public file here to prepare – and no setting on this page changes that.",
      "VK's help page goes further and warns readers that programs advertising downloads from VK are dangerous for your device and account, and that your profile could get hacked. That warning is about tools that install something or ask you to sign in: a desktop program, a browser extension, an APK that wants permissions it has no use for, or a site asking for VK credentials. That is exactly the path where an account gets stolen, and it is the path we do not take. Savemov asks for no login and installs nothing – one public link, one request. What we cannot do is the same thing VK says you cannot do, and we would rather tell you that than borrow your session.",
      "What happens inside the VK app itself is VK's own behaviour, which we neither control nor claim to switch off. We also keep no copy: the result link comes back with the response, so download on the spot – a video someone deletes or locks later cannot be fetched.",
    ],
  },
  faq: {
    title: "VK video downloader FAQ",
    items: [
      {
        q: "How do I download a VK video?",
        a: "Copy the video's link (browser bar, or the three dots under the player → Copy link), paste it above and press Download MP4. You get the file the page is already playing – no app, no extension, no VK account.",
      },
      {
        q: "VK says you cannot download videos as a file – is that true?",
        a: "It is true about the app. VK's own Download step saves a video inside the VK Video app for offline viewing and hands you no file, and only your own uploads can go to your gallery. A public video's file already exists and is streamed to your screen – this page gives you that address instead of a cache entry you cannot reach.",
      },
      {
        q: "Where does the VK app put videos I downloaded?",
        a: "Inside the app's own storage, not in your gallery – which is why a saved “download” never shows up in your camera roll and cannot be sent anywhere. That is the difference between the app's Download and a real file: our result link you can open, move, upload or attach.",
      },
      iphoneCameraRollFaq({
        q: "How to download a video from VK on iPhone?",
        copyStep: "Under the player, open the three dots and choose Copy link, or use Share → Copy link in the app",
      }),
      noSaveButtonFaq({
        q: "How do I download a VK video if there is no download button?",
        reason: NO_SAVE_REASON.VK,
      }),
      {
        q: "Can I download VK music as MP3?",
        a: "No. This page returns the video file only. Splitting audio out of the file means re-encoding what you asked for, and we do not touch VK's audio library at all – tracks are not videos.",
      },
      {
        q: "Can I download a whole VK playlist or album at once?",
        a: "No – one link in, one file out. A playlist is a list of links, so paste them one at a time. A bulk-crawl button would fetch the private items in the same collection along with the public ones, and that is not something we will build.",
      },
      {
        q: "How can I download VK movies and series?",
        a: "You cannot. VK Видео's films and series are licensed catalogue content behind an account and often a subscription, so there is no public file to read. Tools that claim to do it are the ones VK's own help page warns about.",
      },
      {
        q: "Do I need the VK app, an extension or an account to use this?",
        a: "No to all three. Nothing to install, no browser add-on, no login, no API token – which also means there is no session for anyone to abuse. It runs in the browser you already have, on desktop, iPhone and Android.",
      },
      {
        q: "Can I download a private VK video or one from a closed group?",
        a: "No. Those need an account, and this page never asks for one, so they are out of reach by design. Same for 18+ uploads, paid videos and anything sent in Direct. A tool offering to fetch them is selling you a credential-harvesting flow.",
      },
      {
        q: "Why does my VK link not work?",
        a: "Five causes cover almost all of it: the post sits in a closed group or a private profile, the upload is age-restricted, it was deleted, it is still running as a live broadcast, or you pasted a Direct message link. Open the link in a private window and log out – if VK does not play it there, this page cannot read it either.",
      },
      {
        q: "Is it free?",
        a: "Yes, with no sign-up. Each request saves one public video as MP4, at the quality that page published.",
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
