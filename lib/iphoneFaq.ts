/* iPhone「存进相机卷」问答的唯一真源，所有平台页共用。
   问句由调用方逐条写死，贴搜索结果里的原句；函数只保证答句全站一致。
   三条红线：不说一键进相册；不承诺 App Store App；不提竞品名。 */

export type FaqItem = { q: string; a: string };

export function iphoneCameraRollFaq(o: { q: string; copyStep: string }): FaqItem {
  return {
    q: o.q,
    a:
      `${o.copyStep}, paste the link above and press Download MP4 in Safari. ` +
      `Then iOS does one thing Android does not: the file lands in the Files app, ` +
      `not straight in Photos. Open Safari's download list, tap the file, ` +
      `press Share → Save Video and it is in your camera roll. ` +
      `No App Store app, and nothing is signed in along the way.`,
  };
}

export function noSaveButtonFaq(o: { q: string; reason: string }): FaqItem {
  return {
    q: o.q,
    a:
      `${o.reason} A missing button is a permission setting, not a broken file – ` +
      `the video still plays for a logged-out visitor, so its link works here. ` +
      `Paste that link above and you get back the MP4 the player is already streaming, ` +
      `with the sound it carries. No login, no app, nothing published anywhere.`,
  };
}
