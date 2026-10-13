/** Instagram page copy. The page and its JSON-LD both read this file. */

export type InstagramCopy = {
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

export const IG_EN: InstagramCopy = {
  locale: "en",
  htmlLang: "en",
  inLanguage: "en",
  ogLocale: "en_US",
  path: "/instagram-reels-downloader/",
  homePath: "/",
  title: "Instagram Reels Downloader – Save Videos as MP4, No Watermark",
  description:
    "Download Instagram Reels as MP4 with the original sound – paste an instagram.com/reel/… or instagram.com/p/… link. No app, no sign-up, no watermark added.",
  appName: "Savemov Instagram Reels Downloader",
  featureList: [
    "Download Instagram Reels",
    "Save feed videos as MP4",
    "Original sound kept",
    "No watermark added",
    "No app or sign-up",
    "Works on iPhone and Android",
  ],
  eyebrow: "No app · No sign-up · No watermark added",
  h1: "Download Instagram Reels, Videos and Carousels from Any Link",
  h2: "Free Instagram video downloader – paste an instagram.com/reel/… or instagram.com/p/… link and save the MP4 with its original sound.",
  formLabel: "Link to the Instagram post",
  formPlaceholder: "Paste an Instagram link – instagram.com/reel/…, instagram.com/p/… or a share link",
  formButton: "Download MP4",
  helper: "Public posts only. We never ask for an Instagram login.",
  home: "Home",
  crumb: "Instagram Reels Downloader",
  badges: [
    { t: "No app or APK", d: "Runs in the browser you already have." },
    { t: "Original sound kept", d: "The audio from the post travels with the file." },
    { t: "No watermark added", d: "We never stamp the file; a mark already in the picture stays." },
    { t: "Public posts only", d: "Private accounts and friend-only posts are out of reach by design." },
  ],
  how: {
    title: "How to download an Instagram Reel",
    steps: [
      {
        h: "Open the post in a browser",
        p: "From the app tap the three dots → Link → Copy link. You get an address like instagram.com/reel/xxxxxxx/ for a Reel, or instagram.com/p/xxxxxxx/ for a feed video.",
      },
      {
        h: "Check it is public",
        p: "Paste the link into a private window and log out. If the video plays there, this page can read it too. Anything from a private account stays behind the login wall.",
      },
      {
        h: "Paste it above and hit Download MP4",
        p: "Savemov opens the post, finds the file the player streams and prepares a copy.",
      },
      {
        h: "Save it to your device",
        p: "The result link comes back with the response, so download on the spot – Savemov does not keep a copy.",
      },
    ],
  },
  kinds: {
    title: "What this Instagram downloader can save",
    cards: [
      { h: "Reels", p: "instagram.com/reel/… links – saved as MP4 in the vertical format the post was published in." },
      { h: "Feed videos", p: "A single video in the grid (instagram.com/p/…). Audio included." },
      { h: "The video inside a carousel", p: "A mixed carousel can hold a video slide; that slide comes back as MP4." },
      { h: "Your own posts", p: "Back up a Reel before editing or deleting it." },
    ],
  },
  formats: {
    title: "Video formats and quality",
    body: [
      "Savemov keeps the file Instagram already serves: an MP4 with the audio track from the post. No conversion, no re-encoding, no watermark of ours on top.",
      "Quality follows the upload, not our settings. A video published at a lower resolution downloads at that resolution, and we will not upscale it to pretend otherwise. That is why there is no HD switch on this page.",
    ],
  },
  mark: {
    title: "About the Instagram watermark",
    body: [
      "Instagram adds its own mark when you save inside the app – the @username across the clip. Copying the link and using this page skips that step, so you get the file the player streams instead of the app's saved copy.",
      "What no downloader can honestly remove is a mark already burned into the frames: a creator's logo, a caption sticker, an editing-app watermark. We leave those as published. Tools that claim to erase them re-encode the video, and that is what makes the result softer than what you watched.",
      "So: no Savemov logo, ever. Everything else stays exactly as posted.",
    ],
  },
  privacy: {
    title: "Public posts only – private accounts",
    body: [
      "This page reads only what a logged-out visitor can already see. Instagram puts private accounts, friend-only posts and most DMs behind a login, so there is no public file for us to prepare, and no setting here changes that.",
      "It is also why no Instagram downloader can honestly promise private content. Any tool asking for your login, a browser extension or an APK with permissions it has no use for is not fetching a public file – it is collecting your account. Savemov asks for none of it: one public link, nothing stored, nothing installed.",
    ],
  },
  faq: {
    title: "Instagram Reels downloader FAQ",
    items: [
      { q: "How do I download an Instagram Reel?", a: "Tap the three dots on the Reel → Link → Copy link, paste it above and press Download MP4. Savemov returns the file the player streams – no app, no sign-up, no Instagram account." },
      { q: "Is this Instagram downloader without watermark?", a: "Yes, in the narrow sense: we add nothing, and saving from a link avoids the @username mark Instagram puts on in-app saves. A watermark already inside the picture stays where it is – removing it would mean re-encoding and softening the video." },
      { q: "Do I need an Instagram downloader app or APK?", a: "No. Nothing to install or sideload, no extension, no permissions. You paste one public link in the browser you already use, on desktop, iPhone or Android – which is also why nothing here appears in your Instagram activity." },
      { q: "Can I download a video from a private Instagram account?", a: "No. A private account's posts are visible only to approved followers when logged in, so there is no public file for any downloader to read. Tools promising otherwise want your login; that is how accounts get stolen." },
      { q: "Can I save Instagram photos or a whole carousel?", a: "Photos are images, not video – this page returns an MP4, so a photo post has nothing to hand back. A mixed carousel is different: its video slide comes back as MP4." },
    ],
  },
  copyrightLink: "Copyright",
  notice: {
    title: "Before you save someone's video",
    body: "Reels and posts belong to the people who made them. Saving for your own offline viewing or backing up your own account is one thing; reposting, selling or trimming someone else's work into your own is another. Rights holders can ask us to act on valid notices under our",
    link: "Copyright policy",
  },
  relatedTitle: "Other downloaders",
  related: [
    { href: "/tiktok-downloader/", label: "TikTok Downloader" },
    { href: "/facebook-video-downloader/", label: "Facebook Video Downloader" },
    { href: "/twitter-video-downloader/", label: "Twitter Video Downloader" },
    { href: "/reddit-video-downloader/", label: "Reddit Video Downloader" },
  ],
};

export const IG_PT: InstagramCopy = {
  locale: "pt",
  htmlLang: "pt-BR",
  inLanguage: "pt-BR",
  ogLocale: "pt_BR",
  path: "/pt/instagram-reels-downloader/",
  homePath: "/pt/",
  title: "Baixar Video do Instagram – Reels e Vídeos em MP4, Sem App",
  description:
    "Baixe Reels e vídeos do Instagram em MP4 com o som original – cole um link instagram.com/reel/… ou instagram.com/p/…. Sem app, sem cadastro, sem marca d'água adicionada.",
  appName: "Savemov – Baixar Video do Instagram",
  featureList: [
    "Baixar Reels do Instagram",
    "Salvar vídeos do feed em MP4",
    "Som original mantido",
    "Sem marca d'água adicionada",
    "Sem app nem cadastro",
    "Funciona no iPhone e no Android",
  ],
  eyebrow: "Sem app · Sem cadastro · Sem marca d'água nossa",
  h1: "Baixar Reels, Vídeos e Carrosséis do Instagram por Link",
  h2: "Baixador de Instagram grátis – salve Reels e vídeos do feed em MP4 com o áudio original.",
  formLabel: "Link do post do Instagram",
  formPlaceholder: "Cole um link – instagram.com/reel/…, instagram.com/p/… ou o link de Compartilhar",
  formButton: "Baixar MP4",
  helper: "Só posts públicos. Nunca pedimos login do Instagram.",
  home: "Início",
  crumb: "Baixar Video do Instagram",
  badges: [
    { t: "Sem app nem APK", d: "Roda no navegador que você já usa." },
    { t: "Som original mantido", d: "O áudio do post vem junto no arquivo." },
    { t: "Sem marca d'água nossa", d: "Nunca estampamos logo; o que já está na imagem fica." },
    { t: "Só conteúdo público", d: "Perfil privado e post para amigos estão fora, por design." },
  ],
  how: {
    title: "Como baixar Reels do Instagram",
    steps: [
      {
        h: "Copie o link do post",
        p: "Toque nos três pontos → Link → Copiar link. Um Reel vem como instagram.com/reel/xxxxxxx/, um vídeo do feed como instagram.com/p/xxxxxxx/.",
      },
      {
        h: "Confira se é público",
        p: "Abra o link numa janela anônima, deslogado. Se o vídeo roda ali, esta página também lê. Post de perfil privado continua atrás da tela de login.",
      },
      {
        h: "Cole acima e toque em Baixar MP4",
        p: "O Savemov abre o post, encontra o arquivo que o player já transmite e prepara a cópia.",
      },
      {
        h: "Salve no aparelho",
        p: "O link do arquivo volta junto com a resposta – baixe na hora, porque o Savemov não guarda cópia.",
      },
    ],
  },
  kinds: {
    title: "O que este baixador de Instagram consegue salvar",
    cards: [
      { h: "Reels", p: "Links instagram.com/reel/… voltam em MP4, no formato vertical em que foram publicados." },
      { h: "Vídeos do feed", p: "Vídeo único no grid (instagram.com/p/…), com o áudio." },
      { h: "O vídeo dentro do carrossel", p: "Carrossel misto pode ter um slide de vídeo: esse volta em MP4." },
      { h: "Seus próprios posts", p: "Faça backup de um Reel antes de editar ou apagar." },
    ],
  },
  formats: {
    title: "Formatos e qualidade",
    body: [
      "O Savemov entrega o arquivo que o Instagram já serve: MP4 com a trilha de áudio do post. Sem conversão, sem reencodar, sem nossa marca por cima.",
      "A qualidade segue o upload, não um ajuste nosso. Vídeo publicado numa resolução menor é baixado nessa resolução, e não aumentamos para fingir o contrário. Por isso não há seletor de HD aqui.",
    ],
  },
  mark: {
    title: "Sobre a marca d'água do Instagram",
    body: [
      "O Instagram põe a marca dele quando você salva dentro do app – o @username cruzando o vídeo. Copiar o link e usar esta página pula essa etapa: você fica com o arquivo que o player transmite, não com a cópia do app.",
      "O que nenhum baixador tira com honestidade é a marca que já está dentro da imagem: logo do criador, sticker, marca de editor externo. Isso fica como foi publicado.",
    ],
  },
  privacy: {
    title: "Só conteúdo público – perfil privado",
    body: [
      "Esta página lê apenas o que quem está deslogado já consegue ver. Perfil privado, post restrito e DM ficam atrás do login, então não existe arquivo público para preparar.",
      "É por isso que nenhum baixador promete conteúdo privado: quem pede seu login, extensão ou APK com permissões estranhas não está buscando um arquivo público. O Savemov não pede nada disso.",
    ],
  },
  faq: {
    title: "Perguntas sobre baixar video do Instagram",
    items: [
      { q: "Como baixar Reels do Instagram?", a: "Toque nos três pontos → Link → Copiar link, cole acima e pressione Baixar MP4. O arquivo vem com o som original, sem app e sem cadastro." },
      { q: "Dá para salvar video do Instagram sem marca d'água?", a: "Sem a nossa, sempre. Como o link pula a gravação dentro do app, você recebe o arquivo que o player transmite, sem o @username por cima. Marca que já está na imagem continua lá." },
      { q: "Preciso de um app ou APK para baixar Instagram?", a: "Não. Nada para instalar, nenhuma permissão. Um link público no navegador que você já usa, no celular ou no computador." },
      { q: "Posso baixar vídeo de um perfil privado?", a: "Não. Post de conta privada só aparece para quem é aprovado e está logado – não há arquivo público para nenhum baixador ler." },
      { q: "Consigo salvar fotos ou um carrossel inteiro?", a: "Foto não é vídeo: esta página devolve um MP4, então um post só de fotos não tem arquivo de vídeo. No carrossel misto, o slide de vídeo volta normalmente." },
    ],
  },
  copyrightLink: "Direitos Autorais",
  notice: {
    title: "Antes de salvar o vídeo de outra pessoa",
    body: "Reels e posts pertencem a quem fez. Guardar para ver offline ou salvar o seu próprio conteúdo é uma coisa; republicar ou remixar o trabalho alheio é outra. Titulares de direito podem pedir providência pela nossa",
    link: "política de direitos autorais",
  },
  relatedTitle: "Outros baixadores",
  related: [
    { href: "/pt/tiktok-downloader/", label: "Baixar Vídeo do TikTok" },
    { href: "/pt/facebook-video-downloader/", label: "Baixar Vídeo do Facebook" },
    { href: "/pt/twitter-video-downloader/", label: "Baixar Vídeo do Twitter (X)" },
    { href: "/pt/reddit-video-downloader/", label: "Baixar Vídeo do Reddit" },
  ],
};

export const IG_ES: InstagramCopy = {
  locale: "es",
  htmlLang: "es",
  inLanguage: "es",
  ogLocale: "es_ES",
  path: "/es/instagram-reels-downloader/",
  homePath: "/es/",
  title: "Descargar Videos de Instagram – Reels en MP4, Sin Marca ni App",
  description:
    "Descarga Reels y vídeos de Instagram en MP4 con el audio original – pega un enlace instagram.com/reel/… o instagram.com/p/…. Sin app, sin registro, sin marca de agua añadida.",
  appName: "Savemov – Descargar Videos de Instagram",
  featureList: [
    "Descargar Reels de Instagram",
    "Guardar vídeos del feed en MP4",
    "Audio original conservado",
    "Sin marca de agua añadida",
    "Sin app ni registro",
    "Funciona en iPhone y Android",
  ],
  eyebrow: "Sin app · Sin registro · Sin marca de agua añadida",
  h1: "Descargar Videos de Instagram desde Cualquier Enlace",
  h2: "Descargador de Instagram gratis – guarda Reels y vídeos del feed en MP4 con su audio original.",
  formLabel: "Enlace de la publicación de Instagram",
  formPlaceholder: "Pega un enlace – instagram.com/reel/…, instagram.com/p/… o el enlace de Compartir",
  formButton: "Descargar MP4",
  helper: "Solo publicaciones públicas. Nunca pedimos tu cuenta de Instagram.",
  home: "Inicio",
  crumb: "Descargar Videos de Instagram",
  badges: [
    { t: "Sin app ni APK", d: "Funciona en el navegador que ya tienes." },
    { t: "Audio original conservado", d: "El sonido de la publicación viaja con el archivo." },
    { t: "Sin marca de agua nuestra", d: "Nunca estampamos logo; lo que ya está en la imagen sigue ahí." },
    { t: "Solo contenido público", d: "Las cuentas privadas y lo que es solo para amigos quedan fuera, por diseño." },
  ],
  how: {
    title: "Cómo descargar un Reel de Instagram",
    steps: [
      {
        h: "Copia el enlace de la publicación",
        p: "Toca los tres puntos → Enlace → Copiar enlace. Un Reel llega como instagram.com/reel/xxxxxxx/ y un vídeo del feed como instagram.com/p/xxxxxxx/.",
      },
      {
        h: "Comprueba que es público",
        p: "Ábrelo en una ventana de incógnito, sin sesión. Si el vídeo se ve ahí, esta página también lo lee. Lo de una cuenta privada sigue tras el inicio de sesión.",
      },
      {
        h: "Pégalo arriba y pulsa Descargar MP4",
        p: "Savemov abre la publicación, encuentra el archivo que el reproductor ya está emitiendo y prepara la copia.",
      },
      {
        h: "Guárdalo en tu dispositivo",
        p: "El enlace del archivo llega con la respuesta, así que descárgalo en el momento: Savemov no guarda copias.",
      },
    ],
  },
  kinds: {
    title: "Qué puede guardar este descargador de Instagram",
    cards: [
      { h: "Reels", p: "Enlaces instagram.com/reel/… vuelven en MP4, en el formato vertical en que se publicaron." },
      { h: "Vídeos del feed", p: "Un vídeo suelto de la cuadrícula (instagram.com/p/…), con su audio." },
      { h: "El vídeo de un carrusel", p: "Un carrusel mixto puede llevar una diapositiva de vídeo: esa vuelve en MP4." },
      { h: "Tus propias publicaciones", p: "Haz copia de seguridad de un Reel antes de editarlo o borrarlo." },
    ],
  },
  formats: {
    title: "Formatos y calidad",
    body: [
      "Savemov entrega el archivo que Instagram ya sirve: un MP4 con la pista de audio de la publicación. Sin conversión, sin recodificar y sin nuestra marca encima.",
      "La calidad sigue a la subida, no a un ajuste nuestro. Un vídeo publicado a menor resolución se descarga a esa resolución, y no lo escalamos para fingir lo contrario. Por eso aquí no hay selector de HD.",
    ],
  },
  mark: {
    title: "Sobre la marca de agua de Instagram",
    body: [
      "Instagram pone su marca cuando guardas dentro de la app: el @username cruzando el clip. Copiar el enlace y usar esta página salta ese paso, así que te quedas con el archivo que emite el reproductor, no con la copia de la app.",
      "Lo que ningún descargador puede quitar con honestidad es una marca ya quemada en la imagen: el logo del creador, una pegatina, la marca de un editor externo. Eso se queda tal como se publicó.",
    ],
  },
  privacy: {
    title: "Solo lo público – cuentas privadas",
    body: [
      "Esta página lee únicamente lo que ya puede ver alguien sin sesión. Instagram deja detrás del inicio de sesión las cuentas privadas, lo restringido por edad y los mensajes directos, así que no existe archivo público que preparar.",
      "Por eso ningún descargador promete contenido privado: el que te pide la contraseña, una extensión o un APK con permisos raros no está buscando un archivo público. Savemov no pide nada de eso.",
    ],
  },
  faq: {
    title: "Preguntas sobre descargar videos de Instagram",
    items: [
      { q: "¿Cómo descargo un Reel de Instagram?", a: "Toca los tres puntos → Enlace → Copiar enlace, pégalo arriba y pulsa Descargar MP4. Recibes el archivo con el audio original – sin app, sin registro y sin cuenta de Instagram." },
      { q: "¿Sirve para descargar videos de Instagram sin marca de agua?", a: "Sin la nuestra, siempre. Como el enlace se salta el guardado dentro de la app, te llega lo que emite el reproductor sin el @username encima. Una marca ya integrada en la imagen se queda donde está." },
      { q: "¿Necesito una app o un APK para Instagram?", a: "No. Nada que instalar ni permisos que dar. Pegas un enlace público en el navegador que ya usas, en el móvil o en el ordenador – y por eso nada de esto aparece en tu actividad de Instagram." },
      { q: "¿Puedo bajar un vídeo de una cuenta privada?", a: "No. Las publicaciones de una cuenta privada solo se ven si eres aprobado y tienes sesión: no hay archivo público para ningún descargador." },
      { q: "¿Puedo guardar fotos o un carrusel entero?", a: "Las fotos no son vídeo – esta página devuelve un MP4, así que un post solo de fotos no tiene archivo de vídeo que devolver. En un carrusel mixto, la diapositiva de vídeo sí vuelve." },
    ],
  },
  copyrightLink: "Derechos de Autor",
  notice: {
    title: "Antes de guardar el vídeo de otra persona",
    body: "Los Reels y las publicaciones pertenecen a quien los hizo. Guardarlos para verlos sin conexión o respaldar lo tuyo es una cosa; republicarlos, venderlos o cortarlos en contenido propio es otra. Los titulares de derechos pueden pedirnos que actuemos ante avisos válidos según nuestra",
    link: "política de derechos de autor",
  },
  relatedTitle: "Otros descargadores",
  related: [
    { href: "/es/tiktok-downloader/", label: "TikTok Downloader" },
    { href: "/es/facebook-video-downloader/", label: "Descargar Videos de Facebook" },
    { href: "/es/twitter-video-downloader/", label: "Descargar Video de Twitter (X)" },
    { href: "/es/reddit-video-downloader/", label: "Descargar Videos de Reddit" },
  ],
};
