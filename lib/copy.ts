import type { Metadata } from "next";
import { LANGUAGES, SITE } from "@/lib/site";

export type FormCopy = {
  label: string;
  placeholder: string;
  button: string;
  paste: string;
  clear: string;
  steps: [string, string, string, string];
  busy: string;
  ready: string;
  badUrl: string;
  network: string;
  unsupported: string;
  ratelimit: string;
  save: string;
  another: string;
};

export type Copy = {
  lang: string;
  ogLocale: string;
  path: string;
  title: string;
  desc: string;
  h1: string;
  h2: string;
  trust: string;
  heroHint: string;
  platformLead: string;
  platformTail: string;
  form: FormCopy;
  how: { h2: string; intro?: string; steps: { t: string; d: string }[] };
  format?: { h2: string; body: string };
  what: { h2: string; body: string; limits: string; emphasis?: string };
  useCases: { h2: string; items: { t: string; d: string }[] };
  data: { h2: string; body: string };
  faqH2: string;
  faqs: { q: string; a: string }[];
  badges?: string[];
  platformsH2: string;
  platforms: { slug: string; label: string; anchor: string; note?: string; href?: string }[];
  footerNote: string;
  legal: { terms: string; privacy: string; copyright: string; contact: string };
  skip: string;
  appName?: string;
  featureList?: string[];
  offerNote?: string;
};

const SLUG = {
  tt: "tiktok-downloader",
  fb: "facebook-video-downloader",
  ig: "instagram-reels-downloader",
  pi: "pinterest-video-downloader",
  sn: "snapchat-video-downloader",
  dm: "dailymotion-video-downloader",
  st: "streamable-video-downloader",
  lo: "loom-video-downloader",
  vk: "vk-video-downloader",
  ok: "okru-video-downloader",
} as const;

export const EN: Copy = {
  lang: "en",
  ogLocale: "en_US",
  path: "/",
  title: "Download Video from Link or URL – Free Online Video Downloader",
  desc:
    "Download videos from any public link or URL as MP4 – free, no app, no sign-up. " +
    "Works with TikTok, Instagram, Facebook and more.",
  h1: "Download Videos from Any Link or URL",
  h2: "Free online video downloader – paste a link, get an MP4 in seconds",
  trust: "No app · No sign-up · MP4 · Free",
  heroHint: "Don't save material you don't have the right to keep.",
  platformLead: "Works with",
  platformTail: "and any public video link",
  form: {
    label: "URL or link to the video",
    placeholder: "Paste a TikTok, Instagram, Facebook or Pinterest link",
    button: "Download MP4",
    paste: "Paste",
    clear: "Clear",
    steps: ["Link", "Search", "Prepare", "Ready"],
    busy: "Finding the video…",
    ready: "Your video is ready.",
    badUrl: "Paste a full public link (starting with http:// or https://).",
    network: "Couldn't reach Savemov. Check your connection and try again.",
    unsupported: "No video found at that link. Make sure the page is public and try again.",
    ratelimit: "Too many requests — wait a minute and try again.",
    save: "Save",
    another: "Download another",
  },
  how: {
    h2: "How to download a video from a link",
    intro:
      "To download video from link pages such as TikTok, Instagram or Facebook, paste the share link in the box above — Savemov reads the page and prepares the file.",
    steps: [
      { t: "Copy the link", d: "Open the public video in your browser and copy its URL – or use Share → Copy link in the app." },
      { t: "Paste it above", d: "Savemov reads the page and locates the video file that page is streaming." },
      { t: "We fetch the file", d: "Savemov returns the MP4 the page is already playing, at the quality that page published." },
      { t: "Save the file", d: "One tap and it's on your device. Savemov does not keep a copy, so save it right away." },
    ],
  },
  format: {
    h2: "Video formats and quality",
    body:
      "Savemov keeps the container the source page already serves: usually an MP4 video file, which plays on iPhone, Android, Windows and Mac without extra codecs. Quality follows the original upload. The downloader does not invent a higher resolution, so a file that looks soft here was soft where it was posted. The file link comes back as soon as the request finishes — save it to your device, because Savemov does not keep a copy and the source link can expire.",
  },
  what: {
    h2: "What this tool does",
    emphasis: "free video downloader",
    body:
      "Savemov is a free video downloader for any public link: it reads a page that embeds a playable video, finds the file that page streams, and gives you a copy — the MP4 that page is already playing.",
    limits:
      "It does not work on login-only pages, private posts, stories you can't open in a browser, or DRM-protected streams. One video per request: paste a playlist link and you get that single item.",
  },
  useCases: {
    h2: "Common use cases",
    items: [
      { t: "Back up your own video", d: "Save your TikTok or Instagram Reel as an MP4 before you delete or re-edit it." },
      { t: "Watch offline", d: "Keep a tutorial or a clip you found for a flight or a bad connection." },
      { t: "Send the file, not the link", d: "Hand it to someone whose device or data plan can't open the platform." },
    ],
  },
  data: {
    h2: "How your data is handled",
    body:
      "The link you paste is used only to locate the file. Savemov does not keep the finished download. We do not publish or sell the URLs you submit, and we do not ask for an account – there is no profile to build from your searches.",
  },
  faqH2: "Frequently asked questions",
  faqs: [
    {
      q: "How do I download a video from a link?",
      a: "Copy the link of the public video page, paste it in the box above, and press Download MP4. Savemov reads the page, finds the video file behind it, and hands you a saved copy in seconds – no app to install and no sign-up.",
    },
    {
      q: "Can I paste any kind of link?",
      a: "Yes: the page URL of a public video, a share link, or a link you received in a messaging app. If the link opens the video in your browser without a login, we can usually save it. A link that already points straight at an .mp4 file just plays in the browser – use your device's own save option for that one. Any public address works: use the video URL downloader to fetch the file behind the page instead of screen-recording it.",
    },
    {
      q: "Is a link the same as a URL?",
      a: "Yes – both point to the page holding the video. Copy the address from your browser bar or the share button; either one works here.",
    },
    {
      q: "Which sites are supported?",
      a: "Any public page that embeds a playable video, including Pinterest, TikTok, Instagram Reels, Facebook, Snapchat, VK, OK, Dailymotion, Streamable and Loom. Pages that require a login, private posts and DRM-protected streams are not supported.",
    },
    {
      q: "Can I download a full playlist?",
      a: "One video per request. Open the item you want and paste that single link – playlists are not saved as a batch.",
    },
    {
      q: "Do I need to install an app or create an account?",
      a: "No. Savemov is a website that runs in your browser, on desktop and mobile. Nothing to download, no registration, no browser extension.",
    },
    {
      q: "Does it work on iPhone and Android?",
      a: "Yes. On Android the file lands in your Downloads folder. On iPhone, tap Share → Save to Files so it leaves the browser and stays on your phone.",
    },
    {
      q: "Is it free? How many videos can I save?",
      a: "Yes. The downloader on this page is free. Each request saves one public video as MP4, at the quality the source page published.",
    },
    {
      q: "Is it safe? What happens to the link I paste?",
      a: "Your link is used only to fetch the file – it is not published or sold. Savemov does not keep a copy of the finished download. Details are in “How your data is handled” below.",
    },
    {
      q: "Can I download videos that belong to someone else?",
      a: "Save only what you have the right to keep: your own uploads, material you were given permission for, or where your local law allows a private copy. Don't redistribute other people's copyrighted work – see our Copyright policy.",
    },
    {
      q: "Can I download WhatsApp status videos?",
      a: "No. WhatsApp Status has no public link a website can read, so no online downloader – including this one – can save it. Anything that does give you a public link (TikTok, Instagram, Facebook, Pinterest) works above.",
    },
  ],
  badges: ["MP4", "Source quality", "No sign-up", "iPhone & Android"],
  platformsH2: "Video downloaders by platform",
  platforms: [
    { slug: SLUG.pi, label: "Pinterest", anchor: "Pinterest Video Downloader", note: "Save video pins from any public board." },
    { slug: SLUG.tt, label: "TikTok", anchor: "TikTok Downloader", note: "Paste the share link to keep the video file." },
    { slug: SLUG.ig, label: "Instagram", anchor: "Instagram Reels Downloader", note: "Reels and video posts from public profiles." },
    { slug: SLUG.fb, label: "Facebook", anchor: "Facebook Video Downloader", note: "Public videos and Reels from pages and groups you can open." },
    { slug: SLUG.sn, label: "Snapchat", anchor: "Snapchat Video Downloader", note: "Spotlight clips from a shared link." },
    { slug: SLUG.st, label: "Streamable", anchor: "Streamable Video Downloader" },
    { slug: SLUG.vk, label: "VK", anchor: "VK Video Downloader" },
    { slug: SLUG.ok, label: "OK.ru", anchor: "OK.ru Video Downloader" },
    { slug: SLUG.dm, label: "Dailymotion", anchor: "Dailymotion Video Downloader" },
    { slug: SLUG.lo, label: "Loom", anchor: "Loom Recording Downloader" },
  ],
  footerNote: "Online video downloader.",
  legal: { terms: "Terms", privacy: "Privacy", copyright: "Copyright", contact: "Contact" },
  skip: "Skip to content",
  appName: "Savemov – Online Video Downloader",
  featureList: [
    "Download video from link or URL",
    "MP4 output",
    "No app, no sign-up",
    "Works on Android and iPhone",
  ],
  offerNote: "Free",
};

export const PT: Copy = {
  lang: "pt-BR",
  ogLocale: "pt_BR",
  path: "/pt/",
  title: "Baixar Vídeo pela URL ou Link – Vídeos Online Grátis sem App",
  desc:
    "Baixe vídeos pela URL ou por link em MP4, grátis e sem aplicativo. Funciona com " +
    "TikTok, Instagram, Facebook e qualquer link público de vídeo.",
  h1: "Baixar Vídeo pela URL ou por Link",
  h2: "Cole o link e baixe o vídeo em MP4 – online, grátis e sem aplicativo",
  trust: "Sem aplicativo · Sem cadastro · MP4 · Grátis",
  heroHint: "Não salve material que você não tem o direito de guardar.",
  platformLead: "Baixa vídeos de",
  platformTail: "qualquer link público de vídeo",
  form: {
    label: "URL ou link do vídeo",
    placeholder: "Cole aqui o link do TikTok, Instagram, Facebook ou Pinterest",
    button: "Baixar vídeo",
    paste: "Colar",
    clear: "Limpar",
    steps: ["URL", "Buscar", "Preparar", "Pronto"],
    busy: "Buscando o vídeo em {domain}…",
    ready: "O vídeo está pronto.",
    badUrl: "Isso não parece um link. Cole a URL completa de uma página pública (precisa começar com http:// ou https://).",
    network: "Não foi possível falar com o Savemov. Confira sua conexão e tente de novo.",
    unsupported: "Não encontramos um vídeo nesse link. Confira se a página é pública e tente de novo.",
    ratelimit: "Muitos pedidos — espere um minuto e tente de novo.",
    save: "Baixar vídeo",
    another: "Baixar outro",
  },
  how: {
    h2: "Como baixar um vídeo pela URL",
    steps: [
      { t: "Copie o link", d: "Abra o vídeo público no navegador e copie a URL, ou use Compartilhar → Copiar link dentro do aplicativo." },
      { t: "Cole acima", d: "O Savemov lê a página e localiza o arquivo que ela transmite." },
      { t: "Receba o arquivo", d: "Devolvemos o MP4 na qualidade publicada na página original — o arquivo que a plataforma entrega." },
      { t: "Salve o arquivo", d: "Um toque e ele abre no seu aparelho. O Savemov não guarda uma cópia: salve na hora, porque o link da origem pode expirar." },
    ],
  },
  format: {
    h2: "Formatos e qualidade do arquivo",
    body:
      "O Savemov devolve o arquivo que a página já entrega: normalmente um MP4, que toca no iPhone, Android, Windows e Mac sem instalar codec nenhum. A qualidade é a do upload original — a ferramenta não inventa uma resolução maior. O link do arquivo volta junto com a resposta; baixe na hora, porque a página de origem pode sair do ar.",
  },
  what: {
    h2: "O que esta ferramenta faz",
    body:
      "O Savemov lê uma página pública que embute um vídeo tocável, encontra o arquivo que a página transmite e entrega uma cópia para você guardar — em geral um MP4, na qualidade que a origem publicou.",
    limits:
      "Não funciona em páginas que exigem login, posts privados, stories que não abrem no navegador ou transmissões com DRM. Um vídeo por pedido: se você colar uma playlist, salvamos o item daquele link.",
  },
  useCases: {
    h2: "Para que as pessoas usam",
    items: [
      { t: "Guardar o seu vídeo antes de apagar", d: "Faça backup do seu TikTok ou dos seus Reels do Instagram em MP4 antes de apagar ou reeditar." },
      { t: "Assistir sem internet", d: "Salve uma aula ou um vídeo que você achou para ver no avião ou em uma conexão ruim." },
      { t: "Enviar o arquivo quando o link não abre", d: "Mande o vídeo pronto para quem está sem dados ou sem o aplicativo instalado." },
    ],
  },
  data: {
    h2: "Como os dados são tratados",
    body:
      "A URL que você cola serve apenas para localizar o arquivo. O Savemov não guarda uma cópia: o link de download volta na hora, e links da origem podem expirar — salve assim que ficar pronto. Não publicamos nem vendemos os links que você usa. Você não precisa criar conta para baixar.",
  },
  faqH2: "Perguntas frequentes",
  faqs: [
    {
      q: "E se a URL retornar diretamente um MP4 ou outro arquivo?",
      a: "Nesse caso o navegador abre o próprio arquivo, e não uma página com player. Ele já pode ser salvo pelas opções do seu Android ou iPhone — não há nada para a ferramenta processar.",
    },
    {
      q: "O serviço baixa playlists completas?",
      a: "Não. Cada pedido salva um único vídeo. Abra o item que você quer e cole o link daquela página.",
    },
    {
      q: "Posso baixar vídeos com direitos autorais?",
      a: "Salve apenas o que você tem o direito de guardar: seus próprios envios, material autorizado ou cópia privada permitida pela lei local. Não redistribua conteúdo de terceiros.",
    },
    {
      q: "Por quanto tempo o arquivo fica disponível?",
      a: "O Savemov não guarda o arquivo. O link de download volta na hora — salve no aparelho assim que ficar pronto, porque o link da origem pode expirar.",
    },
    {
      q: "Preciso instalar aplicativo ou criar conta?",
      a: "Não. O Savemov é um site que roda no navegador, no celular e no computador. Nada para instalar, sem cadastro, sem extensão. É um baixador de vídeo online.",
    },
    {
      q: "Funciona no celular Android e iPhone?",
      a: "Sim. No Android o arquivo vai para a pasta Downloads. No iPhone, toque em Compartilhar → Salvar em Arquivos para tirá-lo do navegador.",
    },
    {
      q: "Qual a qualidade do vídeo baixado?",
      a: "Você recebe o MP4 na qualidade publicada na página original. O baixador de vídeo online não inventa uma resolução: o arquivo é o que a plataforma entrega.",
    },
    {
      q: "É seguro? O que fazem com a URL que eu colo?",
      a: "A URL é usada só para buscar o arquivo, não é publicada nem vendida. O Savemov não fica com uma cópia. Detalhes na seção “Como os dados são tratados”.",
    },
    {
      q: "Posso baixar vídeos do status do WhatsApp?",
      a: "Não. O status do WhatsApp não tem link público que um site consiga ler, então nenhum downloader online — incluindo este — consegue salvá-lo. Links públicos de TikTok, Instagram, Facebook e Pinterest funcionam acima.",
    },
  ],
  badges: ["MP4", "Qualidade da origem", "Sem cadastro", "iPhone e Android"],
  platformsH2: "Baixadores por plataforma",
  platforms: [
    { slug: SLUG.pi, label: "Pinterest", anchor: "Pinterest Video Downloader", note: "Salve pins em vídeo de qualquer board público." },
    { slug: SLUG.tt, label: "TikTok", anchor: "TikTok Downloader", note: "Cole o link de compartilhar e fique com o arquivo." },
    { slug: SLUG.ig, label: "Instagram", anchor: "Instagram Reels Downloader", note: "Reels e vídeos de perfis públicos." },
    { slug: SLUG.fb, href: "/pt/facebook-video-downloader/", label: "Facebook", anchor: "Baixar Vídeo do Facebook", note: "Vídeos e Reels públicos de páginas que você consegue abrir." },
    { slug: SLUG.sn, label: "Snapchat", anchor: "Snapchat Video Downloader", note: "Clips do Spotlight a partir de um link." },
    { slug: SLUG.st, label: "Streamable", anchor: "Streamable Video Downloader" },
    { slug: SLUG.vk, label: "VK", anchor: "VK Video Downloader" },
    { slug: SLUG.ok, label: "OK.ru", anchor: "OK.ru Video Downloader" },
    { slug: SLUG.dm, label: "Dailymotion", anchor: "Dailymotion Video Downloader" },
    { slug: SLUG.lo, label: "Loom", anchor: "Loom Recording Downloader" },
  ],
  footerNote: "Salve somente vídeos que você tem o direito de guardar.",
  legal: { terms: "Termos de uso", privacy: "Privacidade", copyright: "Direitos autorais", contact: "Contato" },
  skip: "Ir ao conteúdo",
};

export const ES: Copy = {
  lang: "es",
  ogLocale: "es_ES",
  path: "/es/",
  title: "Descargar Videos Online por Link – Gratis, Sin App | Savemov",
  desc:
    "Descarga videos por link o URL en MP4, gratis y sin instalar apps. Funciona con TikTok, " +
    "Instagram, Facebook y cualquier enlace público.",
  h1: "Descargar videos desde cualquier enlace o URL",
  h2: "Pega el link y descarga el video en MP4 – gratis, online y sin instalar apps",
  trust: "Sin app · Sin registro · MP4 · Gratis",
  heroHint: "No descargues material con derechos de autor.",
  platformLead: "Descarga videos de",
  platformTail: "cualquier enlace público de video",
  form: {
    label: "Enlace o URL del video",
    placeholder: "Pega aquí el link del video de TikTok, Instagram o Facebook",
    button: "Descargar",
    paste: "Pegar",
    clear: "Borrar",
    steps: ["Enlace", "Buscar", "Preparar", "Listo"],
    busy: "Buscando el video en {domain}…",
    ready: "El video está listo.",
    badUrl: "Eso no parece un enlace. Pega la URL completa de una página pública (tiene que empezar por http:// o https://).",
    network: "No pudimos conectar con Savemov. Revisa tu conexión e inténtalo otra vez.",
    unsupported: "No encontramos un video en ese enlace. Comprueba que la página sea pública e inténtalo otra vez.",
    ratelimit: "Demasiadas solicitudes — espera un minuto e inténtalo otra vez.",
    save: "Descargar video",
    another: "Descargar otro",
  },
  how: {
    h2: "¿Cómo descargar videos en línea?",
    steps: [
      { t: "Copia el enlace", d: "Abre el video público en el navegador y copia la URL, o usa Compartir → Copiar enlace en la app." },
      { t: "Pégalo arriba", d: "Leemos la página y localizamos el archivo que está reproduciendo." },
      { t: "Recibe el archivo", d: "Te damos el MP4 en la calidad publicada en la página original: el archivo que entrega la plataforma." },
      { t: "Descarga el archivo", d: "Un toque y queda en tu dispositivo. Savemov no guarda una copia — descarga enseguida, porque el enlace de origen puede caducar." },
    ],
  },
  format: {
    h2: "Formatos y calidad del archivo",
    body:
      "Savemov devuelve el archivo que la página ya sirve: normalmente un MP4, que se ve en iPhone, Android, Windows y Mac sin instalar ningún códec. La calidad es la de la subida original: no inventamos una resolución más alta. El enlace llega junto con la respuesta, así que guárdalo en el momento; el enlace de origen puede caducar.",
  },
  what: {
    h2: "Qué hace esta herramienta",
    body:
      "Savemov sirve para descargar videos online desde una página pública: lee la página, encuentra el archivo que está reproduciendo y te da una copia.",
    limits:
      "No funciona con páginas que piden inicio de sesión, contenido privado, estados que no se abren en el navegador ni emisiones con DRM. Un video por solicitud: si pegas una lista, guardamos ese item.",
  },
  useCases: {
    h2: "Para qué se usa",
    items: [
      { t: "Guardar tu video antes de borrarlo", d: "Guarda tu TikTok o tus Reels de Instagram en MP4 antes de eliminarlos o reeditarlos." },
      { t: "Ver sin conexión", d: "Guarda un tutorial o un clip que encontraste para verlo en el avión o con mala señal." },
      { t: "Enviar el archivo cuando el enlace no carga", d: "Pasa el video listo a quien no tiene datos o no tiene la app instalada." },
    ],
  },
  data: {
    h2: "Cómo se tratan tus datos",
    body:
      "El enlace que pegas solo se usa para buscar el archivo. Savemov no guarda una copia: el enlace de descarga vuelve al momento, y los enlaces de origen pueden caducar. No publicamos ni vendemos tus enlaces, y no hace falta registrarse.",
  },
  faqH2: "Preguntas frecuentes",
  faqs: [
    {
      q: "¿Cómo descargar videos en línea?",
      a: "Copia el enlace de la página pública del video, pégalo en el cuadro de arriba y pulsa Descargar. Leemos la página, localizamos el archivo y te damos una copia en MP4 en segundos, sin instalar nada.",
    },
    {
      q: "¿Puedo descargar cualquier video por link o URL?",
      a: "Si el enlace abre el video en tu navegador sin pedir usuario y contraseña, normalmente se puede guardar. Un enlace que ya apunta directo a un .mp4 solo se reproduce: usa la opción de guardado de tu dispositivo.",
    },
    {
      q: "¿Necesito instalar una app o registrarme?",
      a: "No. Savemov es un sitio web que funciona en el navegador, en el móvil y en el ordenador. Sin instalación, sin registro y sin extensión.",
    },
    {
      q: "¿Funciona en iPhone y Android?",
      a: "Sí. En Android el archivo va a la carpeta Descargas. En iPhone, toca Compartir → «Salvar en Archivos» para sacarlo del navegador.",
    },
    {
      q: "¿Qué formato y calidad obtengo?",
      a: "Un MP4 en la calidad publicada en la página original. No inventamos una resolución: el archivo es el que entrega la plataforma.",
    },
    {
      q: "¿Es gratis? ¿Cuántos videos puedo descargar?",
      a: "Sí. La herramienta de esta página es gratis. Cada solicitud guarda un video público en MP4.",
    },
    {
      q: "¿Puedo descargar una playlist completa?",
      a: "Un video por solicitud. Abre el item que te interesa y pega el enlace de esa página; las listas no se guardan en bloque.",
    },
    {
      q: "¿Es legal descargar videos con copyright?",
      a: "Guarda solo lo que tienes derecho a conservar: tus propias subidas, material con permiso o la copia privada que tu ley local permita. No redistribuyas obras de terceros.",
    },
    {
      q: "¿Puedo descargar estados de WhatsApp?",
      a: "No. Los estados de WhatsApp no tienen un enlace público que un sitio pueda leer, así que ningún descargador en línea — este incluido — puede guardarlos. Los enlaces públicos de TikTok, Instagram, Facebook y Pinterest sí funcionan.",
    },
  ],
  badges: ["MP4", "Calidad de origen", "Sin registro", "iPhone y Android"],
  platformsH2: "Descargadores por plataforma",
  platforms: [
    { slug: SLUG.pi, label: "Pinterest", anchor: "Pinterest Video Downloader", note: "Guarda pines en vídeo de cualquier tablero público." },
    { slug: SLUG.tt, label: "TikTok", anchor: "TikTok Downloader", note: "Pega el enlace para quedarte con el archivo." },
    { slug: SLUG.ig, label: "Instagram", anchor: "Instagram Reels Downloader", note: "Reels y vídeos de perfiles públicos." },
    { slug: SLUG.fb, href: "/es/facebook-video-downloader/", label: "Facebook", anchor: "Descargar Videos de Facebook", note: "Vídeos y Reels públicos de páginas que puedas abrir." },
    { slug: SLUG.sn, label: "Snapchat", anchor: "Snapchat Video Downloader", note: "Clips de Spotlight desde un enlace compartido." },
    { slug: SLUG.st, label: "Streamable", anchor: "Streamable Video Downloader" },
    { slug: SLUG.vk, label: "VK", anchor: "VK Video Downloader" },
    { slug: SLUG.ok, label: "OK.ru", anchor: "OK.ru Video Downloader" },
    { slug: SLUG.dm, label: "Dailymotion", anchor: "Dailymotion Video Downloader" },
    { slug: SLUG.lo, label: "Loom", anchor: "Loom Recording Downloader" },
  ],
  footerNote: "Descarga únicamente videos que tengas derecho a conservar.",
  legal: { terms: "Términos de uso", privacy: "Privacidad", copyright: "Derechos de autor", contact: "Contacto" },
  skip: "Ir al contenido",
};

const LANG_LINKS = [
  { code: "en", short: "EN", label: "English", href: "/" },
  { code: "pt-BR", short: "PT", label: "Português", href: "/pt/" },
  { code: "es", short: "ES", label: "Español", href: "/es/" },
];

export function otherLanguages(lang: string) {
  return LANG_LINKS.filter((item) => item.code !== lang);
}

export function buildMetadata(c: Copy): Metadata {
  return {
    title: { absolute: c.title },
    description: c.desc,
    alternates: {
      canonical: c.path,
      languages: { ...LANGUAGES },
    },
    openGraph: {
      type: "website",
      url: c.path,
      siteName: "Savemov",
      locale: c.ogLocale,
      alternateLocale: ["en_US", "pt_BR", "es_ES"].filter((locale) => locale !== c.ogLocale),
      title: c.title,
      description: c.desc,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: c.h1 }],
    },
    twitter: { card: "summary_large_image", title: c.title, description: c.desc, images: ["/opengraph-image"] },
    robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  };
}

export function buildJsonLd(c: Copy) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: c.appName ?? "Savemov – " + c.h1,
      url: SITE + (c.path === "/" ? "/" : c.path),
      description: c.desc,
      applicationCategory: "UtilityApplication",
      operatingSystem: "Any (web browser)",
      inLanguage: c.lang,
      isAccessibleForFree: true,
      ...(c.offerNote
        ? { hasPart: { "@type": "Offer", price: "0", priceCurrency: "USD", description: c.offerNote } }
        : { offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }),
      featureList: c.featureList ?? [c.h1, "MP4", c.trust],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: c.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];
}
