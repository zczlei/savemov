import type { Metadata } from "next";
import Link from "next/link";
import DownloaderForm from "@/components/downloader-form";
import JsonLd from "@/components/json-ld";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { PT, type FormCopy } from "@/lib/copy";
import { SITE } from "@/lib/site";

const PATH = "/pt/facebook-video-downloader/";
const URL_ABS = `${SITE}${PATH}`;

const TITLE = "Baixar Vídeo do Facebook – Downloader de Reels e Stories";
const DESC =
  "Baixe vídeo e Reels do Facebook pelo link em MP4 com o som original. " +
  "Sem app, sem cadastro e sem adicionar marca d'água – funciona no iPhone e Android.";
const H1 = "Baixar Vídeos do Facebook: Posts, Reels e Stories pelo Link";
const H2 =
  "Cole o link do post, do Reel ou da Story e receba o MP4 com o áudio original, sem adicionar marca d'água.";

const BADGES = [
  { k: "Sem app nem APK", v: "Funciona no navegador que você já tem." },
  { k: "Sem marca d'água nossa", v: "Nunca marcamos o arquivo; a marca original fica como está." },
  { k: "Reels e Stories", v: "O formato curto e o que some em 24 horas, ambos na mesma caixa." },
  { k: "Som preservado", v: "Baixamos o áudio que o arquivo já tem; não extraímos só o som." },
];

const STEPS = [
  {
    t: "Copie o link do post",
    b: "Toque nos três pontos do vídeo, ou em Compartilhar → Copiar link no app do Facebook. Você recebe um endereço no formato facebook.com/usuario/videos/1234567890, ou um link de Reel como facebook.com/reel/1234567890.",
  },
  {
    t: "Confira se o post é público",
    b: "Abra o link numa aba anônima. Se o vídeo carrega ali, a página consegue ler. Se o Facebook pedir login, o post é restrito a amigos, grupo ou somente ao autor – e nada baixa isso no seu lugar.",
  },
  {
    t: "Cole acima e toque em Baixar MP4",
    b: "O Savemov abre o post, procura o arquivo que o player está transmitindo de fato e prepara uma cópia.",
  },
  {
    t: "Salve o arquivo no aparelho",
    b: "O link do resultado vem junto com a resposta, então baixe na hora. O Savemov não guarda cópia.",
  },
];

const TYPES = [
  { t: "Posts com vídeo", b: "Vídeos enviados para uma Página, um perfil ou um grupo público." },
  { t: "Reels", b: "Os vídeos verticais curtos – o mesmo MP4 que o player de Reels transmite." },
  { t: "Stories", b: "Stories públicos podem ser salvos antes de sumirem em 24 horas." },
  { t: "Vídeos do Watch", b: "Envios do Facebook Watch e vídeos de Página que duram vários minutos." },
  { t: "Apresentações de fotos", b: "Slideshow é imagem, não vídeo – não existe MP4 por trás." },
  { t: "Suas próprias publicações", b: "Faça cópia de algo seu antes de apagar ou editar." },
];

const FORMAT = [
  "O Savemov mantém o arquivo que o Facebook já entrega: normalmente um MP4 com a faixa de áudio original. Não convertemos, comprimimos nem recodificamos, então o que você salva é exatamente o que o player mostrava – e nada sai com o nosso logotipo.",
  "A qualidade segue o envio, não a nossa configuração. Um Reel filmado e publicado em 720p baixa em 720p; ele não vira 1080p, e não fazemos upscale. O Savemov devolve o arquivo que o post já está reproduzindo.",
  "Alguns sites prometem salvar só o som do vídeo como MP3. O Savemov não faz isso: entregamos o arquivo de vídeo com o áudio que ele tem, sem separar as faixas.",
  "O link do arquivo volta assim que o pedido termina. Salve no aparelho na hora, porque o Savemov não guarda cópia.",
];

const SCOPE = [
  "Esta página lê apenas o que um visitante sem login já consegue ver. Não é uma limitação que possamos liberar: um vídeo privado, um post só para amigos, uma comunidade com restrição de idade ou um grupo do qual você não participa não tem arquivo público para preparar.",
  "É também por isso que nenhum downloader de Facebook pode prometer isso com honestidade. Ferramenta que alega abrir vídeos privados quer o seu login, uma extensão que enxerga tudo o que você faz, ou um app pedindo permissão que não usa. O Savemov não pede nada disso: você envia um link público e nada é instalado nem ligado à sua conta.",
  "Se o post é público mas você prefere que ele não seja copiado para outro lugar, é uma expectativa razoável – donos de conteúdo no Facebook podem pedir a remoção pela nossa política de Direitos autorais, e atendemos avisos válidos.",
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Como baixar um vídeo do Facebook?",
    a: "Copie o link pelo botão Compartilhar → Copiar link (ou os três pontos do vídeo), cole na caixa acima e toque em Baixar MP4. O Savemov lê o post público, encontra o arquivo por trás do player e devolve uma cópia para você salvar – sem app, sem cadastro e sem conta do Facebook.",
  },
  {
    q: "Dá para baixar vídeo do Facebook sem marca d'água?",
    a: "O Savemov nunca adiciona logotipo, assinatura ou selo próprio ao arquivo: você recebe exatamente o MP4 que o Facebook entrega. Se o vídeo já mostra a marca do criador ou de outra rede social, aquilo fazia parte da gravação e nenhuma ferramenta consegue apagar sem estragar a imagem.",
  },
  {
    q: "Como baixar Reels do Facebook?",
    a: "Do mesmo jeito. Abra o Reel, toque em Compartilhar → Copiar link, cole na caixa: o endereço costuma vir como facebook.com/reel/1234567890. Você recebe o arquivo vertical na resolução em que foi publicado, com o áudio original – inclusive o som de trilhas que o app corta na prévia.",
  },
  {
    q: "Posso salvar uma Story antes de ela sumir?",
    a: "Sim, se a Story estiver publicada como pública. Ela fica no ar por 24 horas e some do Facebook, mas o arquivo que você baixou continua no seu aparelho. Stories de perfis privados ou de amigos só aparecem para quem tem acesso – e nada pode pular essa trava.",
  },
  {
    q: "Existe um app ou APK de downloader de vídeo do Facebook que eu precise instalar?",
    a: "Não. Tudo roda no navegador que você já tem, no celular ou no computador. Apps e extensões pedem permissões que não usam e ficam rodando depois que você para de usar; o APK baixado fora da Play Store é uma das principais portas de entrada de malware no Android. Aqui você manda um único link público e nada é instalado.",
  },
  {
    q: "Posso baixar um vídeo privado do Facebook?",
    a: "Não. O Savemov só lê vídeos definidos como públicos. Vídeos só para amigos, ou dentro de um grupo privado, não podem ser baixados.",
  },
  {
    q: "O Savemov funciona com vídeos de grupos do Facebook?",
    a: "Funciona se o grupo e o vídeo específico estiverem ambos públicos. Vídeos de grupos privados ou fechados não podem ser lidos sem login.",
  },
  {
    q: "Como baixar vídeo do Facebook no iPhone?",
    a: "Toque em Baixar MP4, abra o arquivo resultante e use Compartilhar → Salvar em Arquivos para tirá-lo do navegador. No Android o arquivo cai direto na pasta Downloads.",
  },
  {
    q: "Consigo baixar em 1080p, 2K ou 4K?",
    a: "Você recebe o arquivo que o post já está reproduzindo, na qualidade em que foi publicado. Um vídeo enviado em 720p não vira 1080p, e não fazemos upscale nem recodificação – isso só deixaria o arquivo mais suave que a origem. Vários sites anunciam 4K no título; o que baixam é a qualidade que o Facebook entrega.",
  },
  {
    q: "O downloader de Facebook é grátis? Tem limite?",
    a: "Gratuito, sem cadastro e sem conta. Cada pedido salva um vídeo público em MP4, na qualidade em que o post foi publicado.",
  },
  {
    q: "Posso baixar o vídeo de outra pessoa?",
    a: "Salve só o que você tem direito de guardar: publicações suas, material que o autor permitiu reutilizar ou cópia pessoal onde a lei local admite. Conteúdo do Facebook geralmente pertence a quem publicou, então repostar em outro lugar é responsabilidade sua – veja a nossa política de Direitos autorais.",
  },
];

const RELATED = [
  { href: "/pt/", label: "Baixar Vídeo pela URL ou Link" },
  { href: "/pt/reddit-video-downloader/", label: "Baixar Vídeo do Reddit" },
  { href: "/pt/twitter-video-downloader/", label: "Baixar Vídeo do Twitter (X)" },
];

const FORM: FormCopy = {
  ...PT.form,
  label: "Link do post do Facebook",
  placeholder: "Cole o link do Facebook – facebook.com/…/videos/…, um Reel ou uma Story",
  button: "Baixar MP4",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Baixar Vídeo do Facebook | Savemov",
    url: URL_ABS,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Windows, macOS, Android, iOS",
    inLanguage: "pt-BR",
    description: DESC,
    isAccessibleForFree: true,
    hasPart: { "@type": "Offer", price: "0", priceCurrency: "BRL", description: "Grátis" },
    featureList: [
      "Baixar vídeo do Facebook pelo link",
      "Salvar Reels do Facebook",
      "Salvar Stories públicas",
      "MP4 com o áudio original",
      "Sem instalar app nem APK",
      "Sem adicionar marca d'água",
      "Funciona no iPhone, Android, Windows, macOS e Linux",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/pt/` },
      { "@type": "ListItem", position: 2, name: "Baixar Vídeo do Facebook", item: URL_ABS },
    ],
  },
];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: {
    canonical: PATH,
    languages: {
      pt: PATH,
      en: "/facebook-video-downloader/",
      es: "/es/facebook-video-downloader/",
      "x-default": "/facebook-video-downloader/",
    },
  },
  openGraph: {
    type: "website",
    url: PATH,
    siteName: "Savemov",
    locale: "pt_BR",
    title: TITLE,
    description: DESC,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: H1 }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/opengraph-image"] },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

export default function PtFacebookPage() {
  return (
    <div className="min-h-screen bg-paper text-ink" lang="pt-BR">
      <JsonLd data={jsonLd} />
      <a href="#main" className="skip-link">
        {PT.skip}
      </a>

      <div className="hero-shell text-white">
        <SiteHeader
          c={{ lang: "pt-BR", path: "/pt/" }}
          languages={[
            { code: "en", short: "EN", label: "English", href: "/facebook-video-downloader/" },
            { code: "es", short: "ES", label: "Español", href: "/es/facebook-video-downloader/" },
          ]}
        />
        <section className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:pb-20 sm:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/90">
              Sem app · Sem cadastro · Sem marca d&apos;água nossa
            </p>
            <h1 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-extrabold tracking-tight sm:text-5xl sm:leading-[1.08]">
              {H1}
            </h1>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-lg font-medium leading-relaxed text-white/75">{H2}</h2>
          </div>

          <div className="mx-auto mt-8 max-w-2xl text-left">
            <DownloaderForm copy={FORM} />
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-white/55">
            Só posts públicos. Nunca pedimos seu login do Facebook.{" "}
            <Link href="/copyright/" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              {PT.legal.copyright}
            </Link>
          </p>
        </section>
      </div>

      <main id="main">
        <section aria-label="Destaques" className="mx-auto -mt-8 grid max-w-5xl grid-cols-2 gap-3 px-4 sm:grid-cols-4">
          {BADGES.map((badge) => (
            <div key={badge.k} className="rounded-2xl border border-line bg-white px-4 py-3 text-center shadow-sm">
              <p className="text-sm font-semibold text-pine">{badge.k}</p>
              <p className="mt-1 text-xs leading-5 text-ink/60">{badge.v}</p>
            </div>
          ))}
        </section>

        <section id="como-baixar" className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">Como baixar vídeo do Facebook pelo link</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">
            Quatro passos. O ponto que mais trava não é o download, é saber se o post é público.
          </p>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <li key={step.t} className="rounded-3xl border border-line bg-white p-5">
                <span className="grid size-8 place-items-center rounded-full bg-sand text-sm font-bold text-pine">{index + 1}</span>
                <h3 className="mt-4 font-semibold">{step.t}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{step.b}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="tipos" className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">O que dá para baixar do Facebook</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {TYPES.map((item) => (
                <div key={item.t} className="rounded-3xl bg-white p-5 shadow-sm">
                  <h3 className="font-semibold">{item.t}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/65">{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="formato" className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">Formato e qualidade do arquivo</h2>
            {FORMAT.map((paragraph) => (
              <p key={paragraph} className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section id="publico" className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">Só conteúdo público – e por quê</h2>
            {SCOPE.map((paragraph) => (
              <p key={paragraph} className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section id="faq" className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">Perguntas frequentes</h2>
            <div className="mt-4 divide-y divide-line rounded-[1.6rem] border border-line bg-white px-5">
              {FAQ.map((faq) => (
                <details key={faq.q} className="group py-4">
                  <summary className="cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold">{faq.q}</h3>
                      <span className="mt-0.5 text-ink/30 transition group-open:rotate-45" aria-hidden="true">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-ink/70">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">Mais downloaders</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {RELATED.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-line bg-white px-4 py-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-pine/30 hover:shadow-md"
                >
                  <span className="text-ink/40">↗ </span>
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-xs leading-5 text-ink/50">
              O Savemov destina-se a conteúdo que você tem o direito de salvar – suas próprias publicações, material com
              permissão do autor ou cópia pessoal admitida pela lei local. O Facebook é marca da Meta Platforms; esta página é
              independente, sem afiliação, patrocínio ou endosso. Não oferecemos meio de contornar privacidade, restrição de
              idade ou assinatura, nem atendemos posts que exijam login. Para avisos de direitos autorais,{" "}
              <Link href="/contact/" className="underline">
                fale com a nossa equipe
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <SiteFooter c={PT} />
    </div>
  );
}
