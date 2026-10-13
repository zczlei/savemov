/** Pinterest page copy. The page and its JSON-LD both read this file. */
import { iphoneCameraRollFaq, noSaveButtonFaq } from "@/lib/iphoneFaq";
import { NO_SAVE_REASON } from "@/lib/iphoneReasons";

export type PinterestCopy = {
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
  copyrightLink: string;
  notice: { title: string; body: string; link: string };
  relatedTitle: string;
  related: { href: string; label: string }[];
};

export const PIN_EN: PinterestCopy = {
  locale: "en",
  htmlLang: "en",
  inLanguage: "en",
  ogLocale: "en_US",
  path: "/pinterest-video-downloader/",
  homePath: "/",
  title: "Pinterest Video Downloader – Save as MP4, No Watermark Added",
  description:
    "Download Pinterest videos as MP4 with their original sound – paste a pin.it or pinterest.com/pin/… link. No app, no sign-up, no watermark added.",
  appName: "Savemov Pinterest Video Downloader",
  featureList: [
    "Download Pinterest videos",
    "Save a Pin as MP4",
    "Original sound kept",
    "No watermark added",
    "Works with pin.it short links",
    "No app or sign-up",
  ],
  eyebrow: "No app · No sign-up · No watermark added",
  h1: "Download Pinterest Videos from Any Pin Link",
  h2: "Free Pinterest video downloader – paste a pin.it or pinterest.com/pin/… link and save the MP4 with its original sound.",
  formLabel: "Link to the Pinterest Pin",
  formPlaceholder: "Paste a Pin link – pin.it/…, pinterest.com/pin/… or pinterest.com/user/pin/…",
  formButton: "Download MP4",
  helper: "Public Pins only. We never ask for a Pinterest login.",
  home: "Home",
  crumb: "Pinterest Video Downloader",
  badges: [
    { t: "No app or APK", d: "Runs in the browser you already have – desktop, iPhone or Android." },
    { t: "Original sound kept", d: "Music added inside the Pin travels with the file." },
    { t: "No watermark added", d: "We never stamp the file; anything the creator baked in stays as it is." },
    { t: "Video Pins only", d: "Image Pins and idea-board covers are not video – we say so before you try." },
  ],
  how: {
    title: "How to download a Pinterest video",
    steps: [
      {
        h: "Open the Pin and copy its link",
        p: "On the Pin, tap Share → Copy link. Pinterest hands you a short address like pin.it/abc12XY, or the long form at pinterest.com/pin/1234567890/ (sometimes pinterest.com/username/1234567890/). Both work here.",
      },
      {
        h: "Check it is a video Pin",
        p: "Look for a moving preview with a sound icon. A still photo, a text overlay or an image-only Idea Pin has no MP4 behind it – there is nothing for a video tool to return.",
      },
      {
        h: "Paste it above and press Download MP4",
        p: "Savemov opens the Pin, finds the file the player is already streaming and prepares a copy. Short pin.it links resolve to the same Pin first.",
      },
      {
        h: "Save the file right away",
        p: "The result link comes back with the response. Save it to your device now – Savemov keeps no copy of your Pins.",
      },
    ],
  },
  kinds: {
    title: "Which Pinterest Pins this page can save",
    cards: [
      { h: "Video Pins on public boards", p: "Anything a logged-out visitor can already watch, from a profile grid or your home feed." },
      { h: "Idea Pins with several slides", p: "Each slide is its own file. We return the video slide you linked, not a merged clip of the whole set." },
      { h: "Short links", p: "pin.it addresses resolve to the Pin before we read it, so a link copied from the app works unchanged." },
      { h: "Image Pins and stills", p: "Photos are images with no video file behind them – use Pinterest's own save instead. This page cannot hand you a JPG." },
      { h: "The sound inside the Pin", p: "It comes with the file. We do not split the track out into MP3." },
      { h: "Your own Pins", p: "Back up a video you published before you edit the board or delete the Pin." },
    ],
  },
  formats: {
    title: "Video formats and quality",
    body: [
      "Savemov keeps the file Pinterest already serves: usually an MP4 with the audio track from the Pin. We do not convert, compress or re-encode, so what you save looks and sounds like what the player showed – and nothing downloads with our logo on it.",
      "Quality follows the upload, not our settings. A Pin saved by the creator at 720p comes back at 720p; it does not become 1080p, and we will not upscale it to pretend otherwise. Pinterest itself does not publish an HD switch for third-party links, which is why there is no quality menu on this page.",
      "The file link comes back as soon as the request finishes. Save it to your device right away, because Savemov does not keep a copy.",
    ],
  },
  mark: {
    title: "About the Pinterest watermark – what we can and cannot remove",
    body: [
      "Savemov never stamps a logo on the file, and saving from a link skips the step inside the app, so you get the file the player streams instead of an app-made copy.",
      "What no downloader can honestly do is erase a mark that is already part of the picture – the creator's own handle, or a logo baked into the frames. We leave those exactly as they were published. A tool that claims to remove them is re-encoding the clip, and that is what makes the result softer than the video you watched.",
      "So: no Savemov logo, ever. Everything else stays as it was posted.",
    ],
  },
  privacy: {
    title: "Public Pins only – and why",
    body: [
      "This page reads only what a logged-out visitor can already see. A secret board, a private account, a deleted Pin or something sent in a Pinterest message has no public file for us to prepare – and no setting on this page changes that.",
      "It is also why no Pinterest downloader can honestly promise those. Any tool offering private Pins wants your login, a browser extension that watches everything you do, or an app asking for permissions it has no use for. Savemov asks for none of that: you submit one public link, nothing is installed, nothing is stored.",
      "Pinterest content often belongs to someone else. If you made the video and would rather it not be saved elsewhere, rights holders can request removal under our Copyright policy, and we act on valid notices.",
    ],
  },
  faq: {
    title: "Pinterest downloader FAQ",
    items: [
      { q: "How do I download a Pinterest video?", a: "Open the Pin, tap Share → Copy link, paste the address in the box above and press Download MP4. Savemov finds the file behind the player and returns a copy you can save – no app, no sign-up, no Pinterest account." },
      { q: "Can I download a Pinterest image?", a: "No. This page turns video Pins into MP4 files. An Image Pin is a photo, so there is no video stream to prepare – use Pinterest's own download button or long-press save for that. If a Pin shows a moving preview, this page can handle it; if it is still, it cannot." },
      { q: "Is this Pinterest downloader without watermark?", a: "Yes – in the narrow sense that we add nothing. Savemov never stamps a logo on the file. Some Pins carry the creator's own handle or logo baked into the frames; that part is inside the video, and any tool claiming to erase it is re-encoding the clip, which makes the result softer than what you watched." },
      { q: "Do I need a Pinterest video downloader app?", a: "No. Nothing to install, no APK to sideload, no browser extension to grant permissions. You paste one public Pin link in the browser you already use – on desktop, iPhone or Android. Your Pinterest account is never involved, so nothing shows up in your activity." },
      iphoneCameraRollFaq({
        q: "How to download videos from Pinterest to camera roll on iPhone?",
        copyStep: "On the Pin, tap Share → Copy link",
      }),
      noSaveButtonFaq({
        q: "Why can't I download videos from Pinterest?",
        reason: NO_SAVE_REASON.Pinterest,
      }),
      { q: "Why is there no HD or 4K option?", a: "Because we hand back the file Pinterest already serves, at the resolution it was uploaded at. A switch that says 1080p or 4K cannot deliver more than the source holds – it would be upscaling. Quality therefore follows the Pin, and audio travels with it." },
      { q: "Can I get the Pin's sound as MP3?", a: "No. This page returns the video file, not split audio. If you only want the sound, save the MP4 – the track is inside it." },
      { q: "Why does my Pinterest link not work?", a: "The usual reasons: the Pin came from a secret board or a private account, it was deleted, or it is an Image Pin rather than a video. Pinterest messaging links also have no public page behind them. Open the link in a private window first – if it does not play there, no downloader can read it." },
    ],
  },
  copyrightLink: "Copyright",
  notice: {
    title: "Copyright",
    body: "Savemov does not host Pinterest content and never bypasses a private Pin. Files come from a link you supply and stay on your device. If you hold the rights to a Pin and want it taken out of our service, send a valid notice and we act on it. See our",
    link: "Copyright policy",
  },
  relatedTitle: "Other downloaders",
  related: [
    { href: "/tiktok-downloader/", label: "TikTok Downloader" },
    { href: "/instagram-reels-downloader/", label: "Instagram Reels Downloader" },
    { href: "/facebook-video-downloader/", label: "Facebook Video Downloader" },
    { href: "/twitter-video-downloader/", label: "Twitter Video Downloader" },
  ],
};

export const PIN_PT: PinterestCopy = {
  locale: "pt",
  htmlLang: "pt-BR",
  inLanguage: "pt-BR",
  ogLocale: "pt_BR",
  path: "/pt/pinterest-video-downloader/",
  homePath: "/pt/",
  title: "Baixar Vídeo do Pinterest – Pinterest Downloader em MP4",
  description:
    "Baixe vídeos do Pinterest em MP4 com o som original – cole o link do pin (pin.it/… ou pinterest.com/pin/…). Sem app, sem cadastro, sem marca d'água adicionada.",
  appName: "Savemov Baixador de Vídeo do Pinterest",
  featureList: [
    "Baixar vídeo do Pinterest",
    "Salvar Pin em MP4",
    "Som original mantido",
    "Sem marca d'água nossa",
    "Aceita link curto pin.it",
    "Sem app nem cadastro",
  ],
  eyebrow: "Sem app · Sem cadastro · Sem marca d'água nossa",
  h1: "Baixar Vídeo do Pinterest",
  h2: "Baixador de Pinterest grátis – cole um link pin.it/… ou pinterest.com/pin/… e salve o MP4 com o som original.",
  formLabel: "Link do Pin do Pinterest",
  formPlaceholder: "Cole o link – pin.it/…, pinterest.com/pin/… ou pinterest.com/usuario/pin/…",
  formButton: "Baixar MP4",
  helper: "Só Pins públicos. Nunca pedimos login do Pinterest.",
  home: "Início",
  crumb: "Baixar Vídeo do Pinterest",
  badges: [
    { t: "Sem app ou APK", d: "Funciona no navegador que você já usa – celular ou computador." },
    { t: "Som original mantido", d: "A música que estava no Pin vai junto no arquivo." },
    { t: "Sem marca d'água nossa", d: "Nunca escrevemos logo no arquivo; o que o criador gravou fica como está." },
    { t: "Só Pin de vídeo", d: "Foto e capa de quadrinho não são vídeo – avisamos antes de você tentar." },
  ],
  how: {
    title: "Como baixar um vídeo do Pinterest",
    steps: [
      {
        h: "Abra o Pin e copie o link",
        p: "No Pin, toque em Compartilhar → Copiar link. O Pinterest entrega um endereço curto tipo pin.it/abc12XY ou o formato longo pinterest.com/pin/1234567890/. Os dois funcionam aqui.",
      },
      {
        h: "Confira se é um Pin de vídeo",
        p: "Veja se a prévia se move e tem ícone de som. Foto parada, arte com texto ou Pin de ideia só em imagem não têm MP4 por trás – não existe o que entregar.",
      },
      {
        h: "Cole acima e toque em Baixar MP4",
        p: "O Savemov abre o Pin, encontra o arquivo que o player já transmite e prepara uma cópia. Link curto pin.it resolve antes de ler.",
      },
      {
        h: "Salve o arquivo na hora",
        p: "O link do resultado vem junto na resposta. Baixe agora, porque o Savemov não guarda cópia dos seus Pins.",
      },
    ],
  },
  kinds: {
    title: "Quais Pins esta página consegue salvar",
    cards: [
      { h: "Pins de vídeo em pastas públicas", p: "Qualquer coisa que um visitante sem login já consiga ver, no perfil ou na sua home." },
      { h: "Pins de ideia com vários slides", p: "Cada slide é um arquivo próprio. Devolvemos o slide com vídeo que você linkou, não um clipe único do conjunto." },
      { h: "Link curto", p: "Endereços pin.it apontam para o mesmo Pin antes de a gente ler, então o link copiado do app funciona igual." },
      { h: "Pins de foto", p: "São imagem, sem vídeo por trás – não dá MP4. Use o salvar do próprio Pinterest." },
      { h: "O som do vídeo", p: "Vem junto no arquivo. Não separamos a trilha em MP3." },
      { h: "Os seus Pins", p: "Guarde uma cópia do que você publicou antes de editar a pasta ou apagar o Pin." },
    ],
  },
  formats: {
    title: "Formato e qualidade do vídeo",
    body: [
      "Mantemos o arquivo que o Pinterest já serve: normalmente MP4 com o áudio do Pin. Não convertemos, não comprimimos e não reencodeamos – o que você baixa é o que o player mostrava.",
      "A qualidade segue o upload, não a nossa configuração. Um Pin publicado em 720p volta em 720p; não vira 1080p e não fazemos upscale para parecer mais. Por isso esta página não tem seletor de qualidade.",
      "O link do arquivo chega junto na resposta e deve ser baixado na hora – o Savemov não guarda cópia.",
    ],
  },
  mark: {
    title: "Sobre a marca d'água do Pinterest – o que dá e o que não dá para tirar",
    body: [
      "O Savemov nunca escreve logo no arquivo. Salvar por link também pula a etapa do app, então você fica com o arquivo que o player transmite.",
      "O que nenhum baixador faz com honestidade é apagar o que já está dentro da imagem – o @ do criador ou uma arte gravada no vídeo. Ferramenta que promete isso reencodeia o clipe, e é aí que o resultado sai pior que o vídeo que você assistiu.",
    ],
  },
  privacy: {
    title: "Só Pin público – e por quê",
    body: [
      "Esta página lê apenas o que um visitante sem login já enxerga. Pasta secreta, conta privada, Pin apagado ou coisa mandada por mensagem do Pinterest não tem arquivo público – e nenhum ajuste daqui muda isso.",
      "É também por isso que nenhum baixador pode prometer esses. Ferramenta que oferece Pin privado quer o seu login, uma extensão que vê tudo o que você faz ou um app com permissões inúteis. O Savemov não pede nada disso: você manda um link público, nada é instalado e nada fica guardado.",
    ],
  },
  faq: {
    title: "Perguntas sobre o baixador do Pinterest",
    items: [
      { q: "Como baixar um vídeo do Pinterest?", a: "Abra o Pin, toque em Compartilhar → Copiar link, cole o endereço acima e toque em Baixar MP4. O Savemov acha o arquivo por trás do player e devolve uma cópia para você salvar – sem app, sem cadastro, sem conta do Pinterest." },
      { q: "Dá para baixar uma foto do Pinterest?", a: "Não. Esta página transforma Pin de vídeo em MP4. Pin de foto é imagem, não tem transmissão de vídeo para preparar – use o botão de salvar do próprio Pinterest. Se o Pin se move, a gente consegue; se é parado, não." },
      { q: "Preciso instalar um app ou APK para salvar vídeo do Pinterest?", a: "Não. Nada para instalar, nenhum APK, nenhuma extensão. Você cola um link público no navegador que já usa, no celular Android ou iPhone. Sua conta do Pinterest nunca é envolvida, então nada aparece na sua atividade." },
      { q: "O MP4 mantém o som original?", a: "Sim – o áudio do Pin vai junto no arquivo. Se o resultado saiu sem som, é porque o próprio Pin foi publicado mudo ou seu navegador iniciou o vídeo sem som; o arquivo salvo não é a parte muda." },
      { q: "Salvar vídeo do Pinterest fica com marca d'água?", a: "Sem marca nossa, nunca. O que criador gravou dentro do vídeo (o @ ou uma logo) continua lá: ferramenta que diz apagar isso está reencodificando o clipe e o resultado sai pior." },
      { q: "Por que meu link do Pinterest não funcionou?", a: "Os motivos mais comuns: o Pin veio de pasta secreta ou conta privada, foi apagado, ou é Pin de foto em vez de vídeo. Link de mensagem do Pinterest também não tem página pública. Abra o link numa janela anônima primeiro – se não roda lá, nenhum baixador consegue ler." },
    ],
  },
  copyrightLink: "Direitos autorais",
  notice: {
    title: "Direitos autorais",
    body: "O Savemov não hospeda conteúdo do Pinterest nem fura Pin privado. O arquivo vem do link que você mandou e fica no seu aparelho. Se você detém os direitos de um Pin e prefere que ele não seja salvo pelo nosso serviço, envie um aviso válido que atendemos. Veja nossa",
    link: "política de direitos autorais",
  },
  relatedTitle: "Outros baixadores",
  related: [
    { href: "/pt/tiktok-downloader/", label: "Baixar Vídeo do TikTok" },
    { href: "/pt/instagram-reels-downloader/", label: "Baixar Vídeo do Instagram" },
    { href: "/pt/facebook-video-downloader/", label: "Baixar Vídeo do Facebook" },
    { href: "/pt/reddit-video-downloader/", label: "Baixar Vídeo do Reddit" },
  ],
};

export const PIN_ES: PinterestCopy = {
  locale: "es",
  htmlLang: "es",
  inLanguage: "es",
  ogLocale: "es_ES",
  path: "/es/pinterest-video-downloader/",
  homePath: "/es/",
  title: "Descargar Videos de Pinterest – Pinterest Downloader en MP4",
  description:
    "Descarga vídeos de Pinterest en MP4 con su audio original – pega el enlace del pin. Sin app, sin registro, sin marca de agua añadida.",
  appName: "Savemov Descargador de Videos de Pinterest",
  featureList: [
    "Descargar videos de Pinterest",
    "Guardar un Pin en MP4",
    "Audio original conservado",
    "Sin marca de agua nuestra",
    "Acepta enlaces cortos pin.it",
    "Sin app ni registro",
  ],
  eyebrow: "Sin app · Sin registro · Sin marca de agua añadida",
  h1: "Descargar Videos de Pinterest Desde Cualquier Enlace",
  h2: "Pinterest Downloader gratis – pega un enlace pin.it/… o pinterest.com/pin/… y guarda el MP4 con su sonido original.",
  formLabel: "Enlace del Pin de Pinterest",
  formPlaceholder: "Pega el enlace – pin.it/…, pinterest.com/pin/… o pinterest.com/usuario/pin/…",
  formButton: "Descargar MP4",
  helper: "Solo Pins públicos. Nunca pedimos tu sesión de Pinterest.",
  home: "Inicio",
  crumb: "Descargar Videos de Pinterest",
  badges: [
    { t: "Sin app ni APK", d: "Funciona en el navegador que ya tienes – móvil o ordenador." },
    { t: "Audio original intacto", d: "La música del Pin viaja con el archivo." },
    { t: "Sin marca de agua nuestra", d: "Nunca estampamos logo; lo que el creador grabó dentro se queda igual." },
    { t: "Solo Pins de vídeo", d: "Las fotos no son vídeo – te lo decimos antes de que lo intentes." },
  ],
  how: {
    title: "Cómo descargar un vídeo de Pinterest",
    steps: [
      {
        h: "Abre el Pin y copia el enlace",
        p: "En el Pin, pulsa Compartir → Copiar enlace. Pinterest da una dirección corta tipo pin.it/abc12XY o la forma larga pinterest.com/pin/1234567890/. Las dos sirven aquí.",
      },
      {
        h: "Comprueba que es un Pin de vídeo",
        p: "Busca una vista previa que se mueva con icono de sonido. Una foto fija, un gráfico con texto o un Pin de ideas solo en imagen no tienen MP4 detrás: no hay nada que entregar.",
      },
      {
        h: "Pégalo arriba y pulsa Descargar MP4",
        p: "Savemov abre el Pin, localiza el archivo que el reproductor ya está emitiendo y prepara una copia. Los enlaces cortos pin.it se resuelven antes de leer.",
      },
      {
        h: "Guarda el archivo en el momento",
        p: "El enlace del resultado llega con la respuesta. Descárgalo ahora: Savemov no guarda copia de tus Pins.",
      },
    ],
  },
  kinds: {
    title: "Qué Pins puede guardar esta página",
    cards: [
      { h: "Pins de vídeo en tableros públicos", p: "Todo lo que un visitante sin sesión ya puede ver, desde un perfil o tu inicio." },
      { h: "Pins de ideas con varias diapositivas", p: "Cada diapositiva es un archivo distinto. Devolvemos la diapositiva con vídeo que enlazaste, no un clip único del conjunto." },
      { h: "Enlaces cortos", p: "Las direcciones pin.it apuntan al mismo Pin antes de leerlo, así que el enlace copiado desde la app funciona igual." },
      { h: "Pins de foto", p: "Son imágenes, sin vídeo detrás – no devuelven MP4. Usa el guardado del propio Pinterest." },
      { h: "El sonido del vídeo", p: "Viene dentro del archivo. No separamos la pista en MP3." },
      { h: "Tus propios Pins", p: "Haz copia de seguridad de lo que publicaste antes de editar el tablero o borrar el Pin." },
    ],
  },
  formats: {
    title: "Formato y calidad del vídeo",
    body: [
      "Conservamos el archivo que Pinterest ya sirve: normalmente MP4 con el audio del Pin. No convertimos, no comprimimos y no reencodeamos, así que lo que descargas se ve y suena como lo que mostró el reproductor.",
      "La calidad sigue a la subida, no a nuestros ajustes. Un Pin publicado a 720p vuelve a 720p; no se convierte en 1080p y no hacemos escalado para fingir lo contrario. Por eso esta página no tiene selector de calidad.",
      "El enlace del archivo llega con la respuesta y debe descargarse en el momento: Savemov no guarda copia.",
    ],
  },
  mark: {
    title: "Sobre la marca de agua de Pinterest – qué se puede y qué no",
    body: [
      "Savemov no estampa ninguna marca en el archivo, y guardar desde el enlace evita el paso de la app, así que te quedas con el archivo que emite el reproductor.",
      "Lo que ningún descargador hace con honestidad es borrar lo que ya está dentro de la imagen – el @ del creador o un logo grabado en los fotogramas. Una herramienta que promete eso reencodea el clip, y ahí es donde el resultado sale peor que el vídeo que viste.",
    ],
  },
  privacy: {
    title: "Solo Pins públicos – y por qué",
    body: [
      "Esta página lee únicamente lo que un visitante sin sesión ya puede ver. Un tablero secreto, una cuenta privada, un Pin borrado o algo enviado por mensaje de Pinterest no tienen archivo público que preparar – y ningún ajuste de aquí lo cambia.",
      "Por eso tampoco ningún descargador puede prometer eso. Una herramienta que ofrece Pins privados quiere tu sesión, una extensión que vigila todo lo que haces o una app con permisos que no usa para nada. Savemov no pide nada de eso: envías un enlace público, no se instala nada y no se guarda nada.",
      "El contenido de un Pin suele ser de otra persona. Si el vídeo es tuyo y prefieres que no se guarde en otro sitio, quien tenga los derechos puede pedir la retirada según nuestra política de Copyright, y actuamos sobre avisos válidos.",
    ],
  },
  faq: {
    title: "Preguntas sobre el descargador de Pinterest",
    items: [
      { q: "¿Cómo descargo un vídeo de Pinterest?", a: "Abre el Pin, pulsa Compartir → Copiar enlace, pégalo en la caja de arriba y toca Descargar MP4. Savemov encuentra el archivo detrás del reproductor y te devuelve una copia para guardar – sin app, sin registro y sin cuenta de Pinterest." },
      { q: "¿Puedo descargar una foto de Pinterest?", a: "No. Esta página convierte Pins de vídeo en archivos MP4. Un Pin de foto es una imagen: no hay emisión de vídeo que preparar, así que usa el botón de guardar del propio Pinterest. Si el Pin se mueve, aquí se puede; si es fijo, no." },
      { q: "¿Hace falta una app o un APK para guardar vídeos de Pinterest?", a: "No. Nada que instalar, ningún APK que habilitar, ninguna extensión a la que dar permisos. Pegas un enlace público en el navegador que ya usas, en Android o en iPhone. Tu cuenta de Pinterest no interviene, así que no aparece nada en tu actividad." },
      { q: "¿El MP4 conserva el audio original?", a: "Sí – el sonido del Pin viaja dentro del archivo. Si te bajó sin audio, ese Pin se publicó sin sonido o el navegador lo inició en silencio; el archivo guardado no es la parte muda." },
      { q: "¿Los vídeos se descargan sin marca de agua?", a: "Sin marca nuestra, nunca. Lo que el creador grabó dentro del vídeo (su @ o un logo) se queda donde está: cualquier herramienta que prometa borrarlo está reencodeando el clip y el resultado sale peor que lo que viste." },
      { q: "¿Por qué mi enlace de Pinterest no funciona?", a: "Las razones habituales: el Pin viene de un tablero secreto o de una cuenta privada, lo borraron, o es un Pin de foto en lugar de vídeo. Los enlaces de mensajes de Pinterest tampoco tienen página pública. Abre el enlace primero en una ventana de incógnito – si allí no se reproduce, ningún descargador puede leerlo." },
    ],
  },
  copyrightLink: "Derechos de autor",
  notice: {
    title: "Derechos de autor",
    body: "Savemov no aloja contenido de Pinterest ni salta la privacidad de un Pin. El archivo sale del enlace que tú aportas y se queda en tu dispositivo. Si tienes los derechos de un Pin y prefieres que no se guarde desde nuestro servicio, envía un aviso válido y lo atendemos. Consulta nuestra",
    link: "política de derechos de autor",
  },
  relatedTitle: "Otros descargadores",
  related: [
    { href: "/es/tiktok-downloader/", label: "Descargar Videos de TikTok" },
    { href: "/es/instagram-reels-downloader/", label: "Descargar Videos de Instagram" },
    { href: "/es/facebook-video-downloader/", label: "Descargar Videos de Facebook" },
    { href: "/es/reddit-video-downloader/", label: "Descargar Videos de Reddit" },
  ],
};
