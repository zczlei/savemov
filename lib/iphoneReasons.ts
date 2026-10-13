/* 各平台「App 里没有下载按钮」的原因。只写进对应平台的英文页，不许互相复用。 */
export const NO_SAVE_REASON: Record<string, string> = {
  TikTok:
    "TikTok lets the creator switch downloading off per video, and a clip under an age limit or a regional restriction loses the button too.",
  Instagram:
    "Instagram has never offered a save-to-camera-roll button for other people's posts – the bookmark only keeps it inside the app.",
  Snapchat:
    "Snaps are built to disappear: a Story or Spotlight clip has no save button in the app, and screenshots get reported to the sender.",
  Facebook:
    "Facebook hides the save option on many Reels and on posts it decides are not downloadable, and the rule changes per post.",
  Twitter:
    "X only lets you save clips uploaded natively to the app – retweets, ads and anything from a third-party uploader have no download button.",
  Reddit:
    "Reddit's save button keeps a post in your own profile; a video posted to the feed often has no option to drop the file on your device.",
  Pinterest:
    "Pinterest's own download step is built for images – the help centre documents Download image, not Download video. Many video Pins therefore only offer Save and Copy link in the app, and Pins on a secret board hide even that.",
  Dailymotion:
    "Dailymotion's own help for downloading walks you through Dailymotion Studio – Media > Videos, the catalogue of whoever uploaded it. Watching someone else's clip gives you no download step at all.",
  VK:
    "VK's own help page says it in one sentence: you can't download a video as a file to your device – the Download step inside the VK Video app only saves it there for offline viewing. Videos you uploaded yourself are the one exception, and those go to your gallery.",
  Loom:
    "Loom does have a download step, but it sits inside whoever recorded it – their own library, and a toggle called Downloads in the recording's audience settings that only they can reach. A recording you were merely sent often has no button for you to press.",
  Streamable:
    "Streamable only shows the download step to the person who uploaded the video, and to everyone else only when downloading is switched on for that upload. Turn it off, and the button simply is not there for the viewer.",
  Bluesky:
    "Bluesky's share step hands out a link to the post, never the file, and there is no save option in the app for a video somebody else posted. That gap is exactly what this page is for.",
};
