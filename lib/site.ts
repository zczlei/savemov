export const SITE = "https://savemov.com";
export const SITE_NAME = "Savemov";
export const CONTACT_EMAIL = "tinaliu660@gmail.com";

/** Same resolver AllVideoDL posts to. One public page URL in, one file URL out. */
export const DOWNLOAD_API = "https://tool.umebro.com/";

/** Android app listing. Same package AllVideoDL links from the promo card. */
export const ANDROID_APP_URL =
  "https://play.google.com/store/apps/details?id=com.yt.videodownloader.allvideodownloader&pcampaignid=web_share";

/** Opens the current page on Savemov with its address already filled in. */
export const BOOKMARKLET =
  "javascript:(function(){window.open('https://savemov.com/?url='+encodeURIComponent(location.href),'_blank','noopener');})();";

export function breadcrumbJsonLd(homeName: string, homeUrl: string, pageName: string, pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: homeName, item: homeUrl },
      { "@type": "ListItem", position: 2, name: pageName, item: pageUrl },
    ],
  };
}

export const LANGUAGES = {
  en: "/",
  pt: "/pt/",
  es: "/es/",
  "x-default": "/",
} as const;
