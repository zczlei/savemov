/** TikTok page copy. The page and its JSON-LD both read this file. */
import { iphoneCameraRollFaq, noSaveButtonFaq } from "@/lib/iphoneFaq";
import { NO_SAVE_REASON } from "@/lib/iphoneReasons";

export type TiktokCopy = {
  locale: "en" | "pt" | "es";
  htmlLang: "en" | "pt-BR" | "es";
  inLanguage: "en" | "pt-BR" | "es";
  ogLocale: "en_US" | "pt_BR" | "es_ES";
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
  badges: { t: string; d: string }[];
  how: { title: string; steps: { h: string; p: string }[] };
  kinds: { title: string; cards: { h: string; p: string }[] };
  formats: { title: string; body: string[] };
  mark: { title: string; body: string[] };
  privacy: { title: string; body: string[] };
  faq: { title: string; items: { q: string; a: string }[] };
  copyright: string;
  relatedTitle: string;
  related: { href: string; label: string }[];
};

export const TIKTOK_EN: TiktokCopy = {
  locale: "en",
  htmlLang: "en",
  inLanguage: "en",
  ogLocale: "en_US",
  path: "/tiktok-downloader/",
  homePath: "/",
  title: "TikTok Downloader – Save Videos as MP4, No Watermark Added",
  description:
    "Download TikTok videos as MP4 with the original sound – paste a tiktok.com, vm.tiktok.com or vt.tiktok.com link. No app, no sign-up, no watermark added.",
  appName: "Savemov TikTok Downloader",
  featureList: [
    "Download TikTok videos",
    "Save a TikTok as MP4",
    "Original sound kept",
    "No watermark added",
    "Works with vm.tiktok.com short links",
    "No app or extension",
  ],
  eyebrow: "No app · No sign-up · No watermark added",
  h1: "Download TikTok Videos from Any Link",
  h2: "Paste a tiktok.com, vm.tiktok.com or vt.tiktok.com link – get the MP4 with its original sound and no watermark added.",
  formLabel: "Link to the TikTok video",
  formPlaceholder: "Paste a TikTok link – vm.tiktok.com/…, vt.tiktok.com/… or www.tiktok.com/@user/video/…",
  formButton: "Download MP4",
  helper: "Public videos only. We never ask for a TikTok login.",
  home: "Home",
  crumb: "TikTok Downloader",
  badges: [
    { t: "No app or APK", d: "Runs in the browser you already have." },
    { t: "Original sound kept", d: "The track from the post travels with the file." },
    { t: "No watermark added", d: "We never stamp the file; a mark already inside it stays as it is." },
    { t: "iPhone & Android", d: "One link, one button – no app to install and nothing to configure. On iPhone the file lands in the Files app first; the FAQ below has the two taps that move it into Photos." },
  ],
  how: {
    title: "How to download a TikTok video",
    steps: [
      {
        h: "Copy the TikTok link",
        p: "Tap Share → Copy link on the video. TikTok hands you a short address like vm.tiktok.com/xyz or vt.tiktok.com/xyz, or the long form at www.tiktok.com/@username/video/1234567890. Both work here.",
      },
      {
        h: "Check that it is public",
        p: "Open the link in a private window. If it plays there, this page can read it. A private account, a deleted post or something sent in a direct message has no public file.",
      },
      {
        h: "Paste it above and hit Download MP4",
        p: "Savemov opens the post, finds the file the player is already streaming and prepares a copy.",
      },
      {
        h: "Save the file to your device",
        p: "The result link comes back with the response, so download it on the spot. Savemov does not keep a copy.",
      },
    ],
  },
  kinds: {
    title: "Which TikTok posts this page can save",
    cards: [
      { h: "Videos on a public profile", p: "Anything posted by an account anyone can browse – from the creator grid or your For You feed." },
      { h: "Duets and Stitches", p: "Saved as one file, exactly as the player shows them. We add no split screen and no border." },
      { h: "Short links", p: "vm.tiktok.com and vt.tiktok.com addresses resolve to the same post before we read it." },
      { h: "Photo posts and slideshows", p: "Those are images with music, not video – there is no MP4 behind them." },
      { h: "The sound inside the video", p: "It comes with the file. We do not split the track out into MP3." },
      { h: "Your own posts", p: "Back up something you published before you edit or delete it." },
    ],
  },
  formats: {
    title: "Video formats and quality",
    body: [
      "Savemov keeps the file TikTok already serves: usually an MP4 with the audio track from the post. We do not convert, compress or re-encode, so what you save looks and sounds like what the player showed – and nothing downloads with our logo on it.",
      "Quality follows the upload, not our settings. A video posted at 720p downloads at 720p; it does not become 1080p, and we will not upscale it to pretend otherwise. That is why there is no HD switch on this page.",
      "The file link comes back as soon as the request finishes. Save it to your device right away, because Savemov does not keep a copy.",
    ],
  },
  mark: {
    title: "About the TikTok watermark – what we can and cannot remove",
    body: [
      "TikTok stamps its own mark only when you save inside the app: the logo, the @username and an end card. Pasting the link skips that step, so you get the file the player streams instead of the app's saved copy.",
      "What no downloader can honestly do is erase a mark that is already part of the picture – a creator's own logo, or a username burned into the frames. We leave those exactly as they are. A tool that claims to remove them is re-encoding the clip, and that is what makes the result softer than the video you watched.",
      "So: no Savemov logo, ever. Everything else stays as it was published.",
    ],
  },
  privacy: {
    title: "Public videos only – and why",
    body: [
      "This page reads only what a logged-out visitor can already see. A private account, a post restricted by age, a deleted video or something sent in a direct message has no public file for us to prepare – and no setting on this page changes that.",
      "It is also why no TikTok downloader can honestly promise those. Any tool offering private videos wants your login, a browser extension that watches everything you do, or an app that asks for permissions it has no use for. Savemov asks for none of that: you submit one public link, nothing is installed, nothing is stored.",
      "If you appear in someone's video and would rather not have it saved elsewhere, that is a fair expectation – rights holders can request removal under our Copyright policy, and we act on valid notices.",
    ],
  },
  faq: {
    title: "TikTok downloader FAQ",
    items: [
      { q: "How do I download a TikTok video?", a: "Tap Share → Copy link on the video, paste the address in the box above and press Download MP4. Savemov finds the file behind the player and returns a copy you can save – no app, no sign-up, no TikTok account." },
      { q: "Is this TikTok downloader without watermark?", a: "Yes – in the narrow sense that we add nothing. Savemov never stamps a logo on the file, and saving from a link avoids the mark TikTok adds when you save inside the app. A watermark already inside the picture stays where it is: anything claiming to erase it re-encodes the video and softens it." },
      { q: "Do I need a TikTok downloader app or APK?", a: "No. Nothing to install, no APK to sideload, no extension to grant permissions. You paste one public link in the browser you already use, on desktop, iPhone or Android. That is also why nothing here shows up in your TikTok activity: the app is never involved." },
      iphoneCameraRollFaq({
        q: "How do I download a TikTok video to my iPhone camera roll?",
        copyStep: "Tap Share → Copy link on the video",
      }),
      { q: "Does the MP4 keep the original sound?", a: "Yes – the audio from the post travels with the file. If your result has no sound, the post itself was published muted, or your browser started it muted; the saved file is not the muted part." },
      { q: "Can I get the TikTok sound as an MP3?", a: "No. This page returns the video file, not split audio. Turning a clip into MP3 means re-encoding the thing you asked us to keep intact, so we do not offer it." },
      { q: "Can I download a TikTok photo post or slideshow?", a: "Photo posts are a sequence of images with music, not a video file – there is no MP4 behind them, so this page has nothing to return." },
      { q: "Why does my TikTok link not work?", a: "Four usual reasons: the account is private, the video was deleted or taken down, the address came from a direct message, or you pasted a profile link instead of a video link. Open it in a private window – if it does not play there, nothing can download it." },
      noSaveButtonFaq({
        q: "Why can't I save a TikTok video from the app on my iPhone?",
        reason: NO_SAVE_REASON.TikTok,
      }),
      { q: "Do vm.tiktok.com and vt.tiktok.com short links work?", a: "Yes. Paste them as they are; they resolve to the same post before the file is read." },
      { q: "Is this TikTok downloader free, and is there a limit?", a: "Free, with no sign-up and no account. Each request saves one public video as MP4, at the quality the post published." },
      { q: "How is this different from the tools people argue about on Reddit?", a: "Two things to check in any TikTok downloader: does it want your login or an extension, and does it keep the file. Savemov takes neither, and the result link is not stored on our side." },
      { q: "Can I download someone else's TikTok video?", a: "Save only what you have the right to keep: your own posts, material the creator allowed you to reuse, or a private copy where your local law permits one. TikTok content usually belongs to the person who posted it, so reposting it elsewhere is your responsibility, not ours. See our Copyright policy." },
    ],
  },
  copyright: "Copyright",
  relatedTitle: "Other downloaders",
  related: [
    { href: "/", label: "Download Video from Link or URL" },
    { href: "/twitter-video-downloader/", label: "Twitter Video Downloader" },
    { href: "/facebook-video-downloader/", label: "Facebook Video Downloader" },
    { href: "/reddit-video-downloader/", label: "Reddit Video Downloader" },
  ],
};

export const TIKTOK_PT: TiktokCopy = {
  locale: "pt",
  htmlLang: "pt-BR",
  inLanguage: "pt-BR",
  ogLocale: "pt_BR",
  path: "/pt/tiktok-downloader/",
  homePath: "/pt/",
  title: "Baixar Vídeo do TikTok – Salvar em MP4 com Som",
  description:
    "Baixe vídeos do TikTok em MP4 com o som original – cole o link de tiktok.com, vm.tiktok.com ou vt.tiktok.com. Sem app, sem cadastro, sem marca d'água adicionada.",
  appName: "Savemov Baixar Vídeo do TikTok",
  featureList: [
    "Baixar vídeo do TikTok",
    "Salvar em MP4",
    "Som original mantido",
    "Sem marca d'água adicionada",
    "Aceita link curto vm.tiktok.com",
    "Sem app ou extensão",
  ],
  eyebrow: "Sem app · Sem cadastro · Sem marca d'água adicionada",
  h1: "Baixar Vídeos do TikTok de Qualquer Link",
  h2: "Cole um link de tiktok.com, vm.tiktok.com ou vt.tiktok.com e receba o MP4 com o som original, sem marca d'água adicionada.",
  formLabel: "Link do vídeo do TikTok",
  formPlaceholder: "Cole um link do TikTok – vm.tiktok.com/…, vt.tiktok.com/… ou www.tiktok.com/@usuario/video/…",
  formButton: "Baixar MP4",
  helper: "Só vídeos públicos. Nunca pedimos o login do TikTok.",
  home: "Início",
  crumb: "Baixar Vídeo do TikTok",
  badges: [
    { t: "Sem app nem APK", d: "Funciona no navegador que você já usa." },
    { t: "Som original mantido", d: "A trilha do post vem junto no arquivo." },
    { t: "Sem marca d'água adicionada", d: "Nunca carimbamos o arquivo; o que já está na imagem fica como é." },
    { t: "iPhone e Android", d: "Um fluxo só, sem gerenciador de arquivos." },
  ],
  how: {
    title: "Como baixar um vídeo do TikTok",
    steps: [
      {
        h: "Copie o link do vídeo",
        p: "Toque em Compartilhar → Copiar link. O TikTok entrega um endereço curto como vm.tiktok.com/xyz ou vt.tiktok.com/xyz, ou o formato longo em www.tiktok.com/@usuario/video/1234567890. Os dois funcionam aqui.",
      },
      {
        h: "Confira se é público",
        p: "Abra o link numa janela anônima. Se ele reproduz lá, esta página consegue ler. Conta privada, vídeo apagado ou mensagem direta não têm arquivo público.",
      },
      {
        h: "Cole acima e toque em Baixar MP4",
        p: "O Savemov abre o post, encontra o arquivo que o player já está reproduzindo e prepara a cópia.",
      },
      {
        h: "Salve no seu aparelho",
        p: "O link do arquivo volta junto com a resposta, então baixe na hora. O Savemov não guarda cópia.",
      },
    ],
  },
  kinds: {
    title: "Que tipos de post do TikTok esta página salva",
    cards: [
      { h: "Vídeos de perfil público", p: "Qualquer coisa publicada por uma conta que qualquer pessoa pode ver – do grid do autor ou do seu Para Você." },
      { h: "Duos e Costuras", p: "Vêm como um arquivo só, exatamente como o player mostra. Não acrescentamos tela dividida nem borda." },
      { h: "Links curtos", p: "Endereços vm.tiktok.com e vt.tiktok.com levam ao mesmo post antes da leitura." },
      { h: "Posts de fotos e slideshows", p: "São imagens com música, não vídeo – não há MP4 por trás deles." },
      { h: "O áudio dentro do vídeo", p: "Vem junto no arquivo. Não separamos a trilha em MP3." },
      { h: "Os seus próprios posts", p: "Faça cópia de algo que você publicou antes de editar ou apagar." },
    ],
  },
  formats: {
    title: "Formato e qualidade do arquivo",
    body: [
      "O Savemov mantém o arquivo que o TikTok já entrega: normalmente um MP4 com a trilha de áudio do post. Não convertemos, comprimimos ou reencodamos, então o que você salva é o que o player mostrou – e nada sai com a nossa marca.",
      "A qualidade vem do upload, não de um ajuste nosso. Vídeo publicado em 720p é baixado em 720p; ele não vira 1080p, e não aumentamos a resolução para fingir o contrário. Por isso não existe botão de HD nesta página.",
      "O link do arquivo volta assim que a requisição termina. Salve no aparelho na hora, porque o Savemov não guarda cópia.",
    ],
  },
  mark: {
    title: "A marca d'água do TikTok: o que dá e o que não dá para tirar",
    body: [
      "O TikTok põe a sua marca quando você salva por dentro do app: o logo, o @usuário e aquela tela final. Colar o link aqui pula essa etapa – você recebe o arquivo que o player reproduz, não a cópia salva pelo aplicativo.",
      "O que nenhum baixador honesto faz é apagar uma marca que já faz parte da imagem: o logo do criador ou um @usuário gravado nos quadros. Isso fica como está. Quem promete remover está reencodando o vídeo – e é justamente isso que deixa o resultado mais mole que o original.",
      "Resumo: a marca do Savemov nunca aparece. O resto fica exatamente como foi publicado.",
    ],
  },
  privacy: {
    title: "Só vídeos públicos – e por quê",
    body: [
      "Esta página lê apenas o que uma pessoa deslogada já consegue ver. Conta privada, post com restrição de idade, vídeo apagado ou coisa mandada no direct não têm arquivo público para preparar – e nenhum ajuste daqui muda isso.",
      "É também por isso que nenhum baixador pode prometer esses. Ferramenta que oferece vídeo privado quer o seu login, uma extensão que enxerga tudo o que você faz, ou um app pedindo permissão que não precisa. O Savemov não pede nada disso: você manda um link público, nada é instalado e nada é guardado.",
      "Se você aparece no vídeo de outra pessoa e preferia que ele não fosse salvo, é uma expectativa razoável – o titular pode pedir a remoção pela nossa política de Direitos Autorais, e atendemos notificações válidas.",
    ],
  },
  faq: {
    title: "Perguntas sobre o baixar vídeo do TikTok",
    items: [
      { q: "Como baixar um vídeo do TikTok?", a: "Toque em Compartilhar → Copiar link no vídeo, cole o endereço na caixa acima e pressione Baixar MP4. O Savemov encontra o arquivo por trás do player e devolve uma cópia para você salvar – sem app, sem cadastro, sem conta do TikTok." },
      { q: "Este baixar vídeo do TikTok é sem marca d'água?", a: "Sim, no sentido estrito de que a gente não acrescenta nada. O Savemov nunca carimba o arquivo, e salvar pelo link evita a marca que o TikTok põe quando você salva por dentro do app. Uma marca que já está dentro da imagem continua lá: quem promete apagar está reencodando o vídeo e amolecendo o resultado." },
      { q: "Preciso de um app ou APK para baixar vídeo do TikTok?", a: "Não. Nada a instalar, nenhum APK para sideload, nenhuma extensão com permissão. Você cola um link público no navegador que já usa, no computador, iPhone ou Android. E é por isso que nada aparece na sua atividade do TikTok: o app nunca entra no meio." },
      { q: "O MP4 vem com o som original?", a: "Sim – a trilha do post vem junto no arquivo. Se o resultado saiu mudo, o próprio vídeo foi publicado sem som ou o navegador começou a reproduzir no mudo; o arquivo baixado não é a parte muda." },
      { q: "Dá para baixar só o áudio do TikTok em MP3?", a: "Não. Esta página devolve o arquivo de vídeo, não o áudio separado. Transformar um vídeo em MP3 significa reencodar aquilo que você pediu inteiro, então não oferecemos." },
      { q: "Dá para baixar um post de fotos ou slideshow?", a: "Posts de fotos são uma sequência de imagens com música, não um arquivo de vídeo – não há MP4 por trás deles, então esta página não tem o que devolver." },
      { q: "Por que o meu link do TikTok não funciona?", a: "Quatro motivos comuns: a conta é privada, o vídeo foi apagado ou derrubado, o endereço veio de uma mensagem direta, ou você colou o link do perfil em vez do link do vídeo. Abra numa janela anônima – se não reproduz lá, nada consegue baixar." },
      { q: "Os links curtos vm.tiktok.com e vt.tiktok.com funcionam?", a: "Sim. Cole como estão; eles resolvem para o mesmo post antes da leitura do arquivo." },
      { q: "Posso salvar vídeo do TikTok sem instalar nada?", a: "Sim, é exatamente esse o fluxo: um link, um toque, um MP4 no seu aparelho. Não existe cadastro, nem limite escondido atrás de uma conta." },
      { q: "É grátis? Tem limite?", a: "Grátis, sem cadastro e sem conta. Cada requisição salva um vídeo público como MP4, na qualidade que o post publicou." },
      { q: "Posso baixar o vídeo de outra pessoa?", a: "Salve só o que você tem direito de guardar: os seus posts, material que o criador deixou reaproveitar, ou uma cópia pessoal onde a sua lei permite. O conteúdo do TikTok normalmente pertence a quem publicou, então repostar em outro lugar é responsabilidade sua, não nossa. Veja nossa política de Direitos Autorais." },
    ],
  },
  copyright: "Direitos Autorais",
  relatedTitle: "Outros baixadores",
  related: [
    { href: "/pt/", label: "Baixar vídeo de um link" },
    { href: "/pt/twitter-video-downloader/", label: "Baixar Vídeo do Twitter (X)" },
    { href: "/pt/facebook-video-downloader/", label: "Baixar Vídeo do Facebook" },
    { href: "/pt/reddit-video-downloader/", label: "Baixar Vídeo do Reddit" },
  ],
};

export const TIKTOK_ES: TiktokCopy = {
  locale: "es",
  htmlLang: "es",
  inLanguage: "es",
  ogLocale: "es_ES",
  path: "/es/tiktok-downloader/",
  homePath: "/es/",
  title: "TikTok Downloader – Descargar Videos de TikTok en MP4",
  description:
    "Descarga videos de TikTok en MP4 con el sonido original – pega el enlace de tiktok.com, vm.tiktok.com o vt.tiktok.com. Sin app, sin registro, sin marca de agua añadida.",
  appName: "Savemov TikTok Downloader",
  featureList: [
    "Descargar videos de TikTok",
    "Guardar en MP4",
    "Sonido original conservado",
    "Sin marca de agua añadida",
    "Acepta enlaces cortos vm.tiktok.com",
    "Sin app ni extensión",
  ],
  eyebrow: "Sin app · Sin registro · Sin marca de agua añadida",
  h1: "Descargar Videos de TikTok Desde Cualquier Enlace",
  h2: "Pega un enlace de tiktok.com, vm.tiktok.com o vt.tiktok.com y recibe el MP4 con su sonido original, sin marca de agua añadida.",
  formLabel: "Enlace del vídeo de TikTok",
  formPlaceholder: "Pega un enlace de TikTok – vm.tiktok.com/…, vt.tiktok.com/… o www.tiktok.com/@usuario/video/…",
  formButton: "Descargar MP4",
  helper: "Solo vídeos públicos. Nunca pedimos tu cuenta de TikTok.",
  home: "Inicio",
  crumb: "TikTok Downloader",
  badges: [
    { t: "Sin app ni APK", d: "Funciona en el navegador que ya tienes." },
    { t: "Sonido original", d: "La pista del vídeo viene dentro del archivo." },
    { t: "Sin marca de agua añadida", d: "Nunca sellamos el archivo; lo que ya está en la imagen sigue igual." },
    { t: "iPhone y Android", d: "Un solo flujo, sin gestor de archivos." },
  ],
  how: {
    title: "Cómo descargar un vídeo de TikTok",
    steps: [
      {
        h: "Copia el enlace",
        p: "Toca Compartir → Copiar enlace en el vídeo. TikTok te da una dirección corta como vm.tiktok.com/xyz o vt.tiktok.com/xyz, o la forma larga en www.tiktok.com/@usuario/video/1234567890. Las dos funcionan aquí.",
      },
      {
        h: "Comprueba que es público",
        p: "Ábrelo en una ventana privada. Si se reproduce ahí, esta página puede leerlo. Una cuenta privada, un vídeo borrado o un mensaje directo no tienen archivo público.",
      },
      {
        h: "Pégalo arriba y pulsa Descargar MP4",
        p: "Savemov abre la publicación, encuentra el archivo que el reproductor ya está sirviendo y prepara la copia.",
      },
      {
        h: "Guarda el archivo en tu dispositivo",
        p: "El enlace del archivo llega con la respuesta, así que descárgalo en el momento. Savemov no guarda copias.",
      },
    ],
  },
  kinds: {
    title: "Qué publicaciones de TikTok puedes descargar",
    cards: [
      { h: "Vídeos de perfil público", p: "Cualquier cosa publicada por una cuenta que cualquiera puede ver: de la rejilla del autor o de tu Para Ti." },
      { h: "Dúos y remixes", p: "Se guardan como un solo archivo, tal como los muestra el reproductor. No añadimos pantalla dividida ni bordes." },
      { h: "Enlaces cortos", p: "Las direcciones vm.tiktok.com y vt.tiktok.com apuntan a la misma publicación." },
      { h: "Publicaciones de fotos", p: "Son imágenes con música, no un vídeo: no hay MP4 detrás de ellas." },
      { h: "El audio dentro del vídeo", p: "Viaja con el archivo. No separamos la pista en MP3." },
      { h: "Tus propias publicaciones", p: "Guarda algo que publicaste antes de editarlo o borrarlo." },
    ],
  },
  formats: {
    title: "Formato y calidad del archivo",
    body: [
      "Savemov conserva el archivo que TikTok ya sirve: normalmente un MP4 con la pista de audio de la publicación. No convertimos, comprimimos ni recodificamos, así que lo que guardas se ve y se escucha como lo mostraba el reproductor – y nada sale con nuestro logo.",
      "La calidad viene de la subida, no de un ajuste nuestro. Un vídeo publicado en 720p se descarga en 720p; no se convierte en 1080p, y no lo escalamos para fingir lo contrario. Por eso no hay selector de HD en esta página.",
      "El enlace del archivo llega en cuanto termina la petición. Guárdalo en tu dispositivo al momento, porque Savemov no conserva copias.",
    ],
  },
  mark: {
    title: "Descargar videos de TikTok sin marca de agua: lo que sí y lo que no",
    body: [
      "TikTok pone su marca solo cuando guardas desde dentro de la app: el logo, el @usuario y la pantalla final. Pegar el enlace se salta ese paso, así que recibes el archivo que reproduce el reproductor en lugar de la copia de la aplicación.",
      "Lo que ningún descargador honesto puede hacer es borrar una marca que ya forma parte de la imagen: el logo del creador o un @usuario grabado en los fotogramas. Eso queda tal cual. Quien promete quitarlo está recodificando el vídeo, y eso es justo lo que hace que el resultado se vea más blando que el original.",
      "En resumen: el logo de Savemov nunca aparece. Todo lo demás se queda como se publicó.",
    ],
  },
  privacy: {
    title: "Solo vídeos públicos – y por qué",
    body: [
      "Esta página lee únicamente lo que ya puede ver alguien sin iniciar sesión. Una cuenta privada, una publicación con restricción de edad, un vídeo borrado o un mensaje directo no tienen archivo público que preparar – y ningún ajuste de aquí cambia eso.",
      "También por eso ningún TikTok downloader puede prometer eso honestamente. La herramienta que ofrece vídeos privados quiere tu contraseña, una extensión que ve todo lo que haces, o una app que pide permisos que no le sirven. Savemov no pide nada de eso: envías un enlace público, no se instala nada y no se guarda nada.",
      "Si apareces en el vídeo de otra persona y prefieres que no lo guarden en otro sitio, es una expectativa razonable: el titular puede solicitar la retirada según nuestra política de Derechos de Autor, y atendemos avisos válidos.",
    ],
  },
  faq: {
    title: "Preguntas sobre el TikTok downloader",
    items: [
      { q: "¿Cómo descargo un vídeo de TikTok?", a: "Toca Compartir → Copiar enlace en el vídeo, pega la dirección en la caja de arriba y pulsa Descargar MP4. Savemov encuentra el archivo detrás del reproductor y devuelve una copia que puedes guardar – sin app, sin registro, sin cuenta de TikTok." },
      { q: "¿Este TikTok downloader es sin marca de agua?", a: "Sí, en el sentido estricto de que no añadimos nada. Savemov nunca sella el archivo, y descargar desde el enlace evita la marca que TikTok pone al guardar desde la app. Una marca que ya está dentro de la imagen se queda donde está: quien promete borrarla está recodificando el vídeo y reblandeciéndolo." },
      { q: "¿Necesito una app o un APK de TikTok downloader?", a: "No. Nada que instalar, ningún APK que cargar a mano, ninguna extensión con permisos. Pegas un enlace público en el navegador que ya usas, en ordenador, iPhone o Android. Y por eso nada de esto aparece en tu actividad de TikTok: la app nunca interviene." },
      { q: "¿El MP4 conserva el sonido original?", a: "Sí: la pista de la publicación viaja con el archivo. Si el resultado sale sin sonido, el vídeo se publicó así o tu navegador lo empezó en silencio; el archivo descargado no es la parte muda." },
      { q: "¿Puedo descargar solo el audio en MP3?", a: "No. Esta página devuelve el archivo de vídeo, no el audio por separado. Convertir un vídeo en MP3 significa recodificar justo lo que pediste intacto, así que no lo ofrecemos." },
      { q: "¿Puedo descargar una publicación de fotos?", a: "Las publicaciones de fotos son una secuencia de imágenes con música, no un archivo de vídeo: no hay MP4 detrás, así que esta página no tiene nada que devolver." },
      { q: "¿Por qué no funciona mi enlace de TikTok?", a: "Cuatro razones habituales: la cuenta es privada, el vídeo fue borrado o retirado, la dirección venía de un mensaje directo, o pegaste el enlace del perfil en lugar del vídeo. Ábrelo en una ventana privada: si ahí no se reproduce, nada puede descargarlo." },
      { q: "¿Funcionan los enlaces cortos vm.tiktok.com y vt.tiktok.com?", a: "Sí. Pégalos tal cual; resuelven a la misma publicación antes de leer el archivo." },
      { q: "¿Es gratis y hay algún límite?", a: "Gratis, sin registro y sin cuenta. Cada petición guarda un vídeo público en MP4, con la calidad que publicó la cuenta." },
      { q: "¿Puedo descargar el vídeo de otra persona?", a: "Guarda solo lo que tienes derecho a conservar: tus publicaciones, material que el creador permitió reutilizar, o una copia personal donde tu ley local lo permita. El contenido de TikTok suele pertenecer a quien lo publicó, así que volver a publicarlo en otro sitio es tu responsabilidad, no la nuestra. Consulta nuestra política de Derechos de Autor." },
    ],
  },
  copyright: "Derechos de Autor",
  relatedTitle: "Otros descargadores",
  related: [
    { href: "/es/", label: "Descargar video desde un enlace" },
    { href: "/es/twitter-video-downloader/", label: "Descargar Video de Twitter (X)" },
    { href: "/es/facebook-video-downloader/", label: "Descargar Videos de Facebook" },
    { href: "/es/reddit-video-downloader/", label: "Descargar Videos de Reddit" },
  ],
};
