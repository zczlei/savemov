import type { Metadata } from "next";
import Link from "next/link";
import DownloaderForm from "@/components/downloader-form";
import JsonLd from "@/components/json-ld";
import { Breadcrumb, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { PT, type FormCopy } from "@/lib/copy";
import { breadcrumbJsonLd, SITE } from "@/lib/site";

const PATH = "/pt/twitter-video-downloader/";
const URL_ABS = `${SITE}${PATH}`;

const TITLE = "Baixar Vídeo do Twitter (X) Grátis – Downloader em MP4";
const DESC =
  "Baixe vídeos do Twitter (X) em MP4 com áudio: cole o link do tweet aqui, " +
  "sem app, sem cadastro e sem marca d'água adicionada. Funciona no iPhone e no Android.";
const H1 = "Baixar Vídeos do Twitter (X) em MP4, Grátis e Sem App";
const H2 = "Cole o link do tweet e baixe o vídeo em MP4 – online, grátis e sem aplicativo";

const STEPS = [
  {
    t: "Abra o post no Twitter (X)",
    b: "Encontre o vídeo num perfil, canal ou tweet público — pelo app ou pelo navegador. Toque em Compartilhar → Copiar link: o endereço vem no formato twitter.com/usuario/status/123 ou x.com/usuario/status/123.",
  },
  {
    t: "Confira se ele abre sem login",
    b: "Cole o link numa aba anônima. Se o vídeo aparece aí, o post é público e esta página consegue lê-lo. Contas protegidas, mensagens diretas e conteúdo com restrição de idade ficam de fora.",
  },
  {
    t: "Cole o link acima e toque em Baixar MP4",
    b: "O Savemov abre o post, identifica o arquivo que a página está reproduzindo e prepara uma cópia.",
  },
  {
    t: "Salve o arquivo no seu aparelho",
    b: "O link do arquivo volta junto com a resposta, então baixe na hora. O Savemov não guarda o vídeo depois disso, e o post de origem pode sair do ar.",
  },
];

const TYPES = [
  { t: "Posts com vídeo", b: "Clipes enviados direto no tweet, inclusive os mais longos." },
  { t: "GIFs", b: "Animações também viram arquivo — mas se o post virou GIF, ele não tem trilha de áudio." },
  { t: "Retweets e citações", b: "Cole o link da publicação original, não o do retweet." },
  { t: "Seus próprios vídeos", b: "Guarde uma cópia do que você postou antes de apagar ou trocar." },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Como baixar vídeo do Twitter (X)?",
    a: "Copie o link do post em Compartilhar → Copiar link, cole na caixa acima e toque em Baixar MP4. O Savemov lê o post público, encontra o arquivo por trás do player e devolve uma cópia — sem app, sem cadastro e sem precisar de conta no Twitter.",
  },
  {
    q: "Preciso instalar um aplicativo ou um APK?",
    a: "Não. Tudo roda no navegador que você já tem, no computador ou no celular. Um APK pede permissões a mais e continua rodando depois que você para de usar; aqui você só envia um link público.",
  },
  {
    q: "O vídeo baixado vem com som?",
    a: "Vem com a trilha que o post original tem. Se o clip foi convertido em GIF ou em animação em loop, ele já nasce sem áudio e nenhum baixador consegue colocar som depois.",
  },
  {
    q: "Dá para baixar de uma conta privada ou de um DM?",
    a: "Não. Perfil protegido, mensagem direta e qualquer coisa que exija login ficam fora: esta página nunca pede suas credenciais, então só consegue ler o que um visitante sem conta também enxerga.",
  },
  {
    q: "Consigo baixar em 1080p, 2K ou 4K?",
    a: "Você recebe o arquivo que o post já está reproduzindo, na qualidade publicada. Um vídeo enviado em 720p não vira 1080p — e esta ferramenta não faz upscale nem reencode, porque isso só deixaria o arquivo mais mole.",
  },
  {
    q: "O arquivo vem com marca d'água?",
    a: "Não. O Twitter (X) não grava logo no arquivo de vídeo, e o Savemov também não adiciona nada. Você baixa o mesmo arquivo que o post reproduz, com o áudio original.",
  },
  {
    q: "Como salvar um vídeo do Twitter no celular?",
    a: "No Android o arquivo cai direto na pasta Downloads. No iPhone, toque em Baixar MP4: o arquivo cai primeiro no app Arquivos, não direto em Fotos. Abra a lista de downloads do Safari, toque no arquivo e use Compartilhar → Salvar Vídeo para colocá-lo no rolo da câmera.",
  },
  {
    q: "Funciona no iPhone e no Android?",
    a: "Sim, nos dois — e também em tablet. Não existe versão para instalar: é uma página, então funciona igual no Safari, no Chrome e no navegador do próprio app.",
  },
  {
    q: "É grátis? Tem limite de downloads?",
    a: "Grátis, sem cadastro e sem conta. Cada pedido salva um vídeo público em MP4, na qualidade publicada no post.",
  },
  {
    q: "Posso baixar qualquer vídeo?",
    a: "Baixe só o que você tem direito de guardar: seus próprios envios, material com permissão do autor ou onde a lei local permite cópia privada. Redistribuir conteúdo de terceiros sem autorização é problema seu — veja nossa página de Direitos Autorais.",
  },
];

const RELATED = [
  { href: "/pt/", label: "Baixar Vídeo pela URL ou Link" },
  { href: "/pt/facebook-video-downloader/", label: "Baixar Vídeo do Facebook" },
];

const FORM: FormCopy = {
  ...PT.form,
  label: "Link do tweet ou do post no X",
  placeholder: "Cole o link de um tweet com vídeo – twitter.com ou x.com",
  button: "Baixar MP4",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Savemov – Baixar Vídeo do Twitter (X)",
    url: URL_ABS,
    description: DESC,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Qualquer (navegador web)",
    browserRequirements: "Requer JavaScript",
    inLanguage: "pt-BR",
    isAccessibleForFree: true,
    hasPart: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Grátis" },
    featureList: [
      "Baixar vídeos de posts públicos do Twitter (X)",
      "MP4 com o áudio original, sem marca d'água adicionada",
      "Sem aplicativo, sem bot e sem cadastro",
      "Funciona no iPhone e no Android",
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
    "@type": "HowTo",
    name: "Como baixar vídeo do Twitter (X) pelo link",
    url: URL_ABS,
    inLanguage: "pt-BR",
    step: STEPS.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.t,
      text: step.b,
    })),
  },
  breadcrumbJsonLd("Início", `${SITE}/pt/`, "Baixar Vídeo do Twitter (X)", URL_ABS),
];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: {
    canonical: PATH,
    languages: {
      pt: PATH,
      en: "/twitter-video-downloader/",
      es: "/es/twitter-video-downloader/",
      "x-default": "/twitter-video-downloader/",
    },
  },
  openGraph: {
    type: "website",
    url: PATH,
    title: TITLE,
    description: DESC,
    siteName: "Savemov",
    locale: "pt_BR",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: H1 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
};

export default function PTTwitterVideoDownloaderPage() {
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
            { code: "en", short: "EN", label: "English", href: "/twitter-video-downloader/" },
            { code: "es", short: "ES", label: "Español", href: "/es/twitter-video-downloader/" },
          ]}
        />
        <Breadcrumb homeHref="/pt/" homeLabel="Início" current="Baixar Vídeo do Twitter (X)" />
        <section className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:pb-20 sm:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/90">
              Sem aplicativo · Sem bot · Sem cadastro · Grátis
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
            {PT.heroHint}{" "}
            <Link href="/copyright/" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              {PT.legal.copyright}
            </Link>
          </p>
        </section>
      </div>

      <main id="main">
        <section className="mx-auto max-w-5xl px-4 py-14">
          <p className="max-w-3xl text-sm leading-7 text-ink/70">
            O Savemov é um <strong className="font-semibold text-ink">baixador de vídeos do Twitter</strong> gratuito: você cola
            um link público e recebe o arquivo. Não pedimos login, não instalamos nada e não guardamos o que você baixou.
          </p>
        </section>

        <section className="border-t border-line/80" aria-labelledby="como">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 id="como" className="text-2xl font-bold tracking-tight">
              Como baixar vídeo do Twitter pelo link
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">
              Para baixar um vídeo do Twitter (X) pela URL, use o link que o próprio app copia — não é preciso encaminhar o
              arquivo para ninguém.
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
          </div>
        </section>

        <section className="border-t border-line/80" aria-labelledby="tipos">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 id="tipos" className="text-2xl font-bold tracking-tight">
              O que dá para baixar
            </h2>
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

        <section className="border-t border-line/80" aria-labelledby="formato">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 id="formato" className="text-2xl font-bold tracking-tight">
              Formatos e qualidade do arquivo
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">
              O Savemov devolve o arquivo que a página já entrega: normalmente um MP4, que toca no iPhone, Android, Windows e Mac
              sem instalar codec nenhum. A qualidade é a do upload original — a ferramenta não inventa uma resolução maior nem
              reempacota o vídeo. Se o post foi convertido em GIF, ele volta sem trilha de áudio, porque já nasceu assim.
            </p>
          </div>
        </section>

        <section id="faq" className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">Perguntas frequentes</h2>
            <div className="mt-4 divide-y divide-line rounded-[1.6rem] border border-line bg-white px-5">
              {FAQ.map((faq) => (
                <details key={faq.q} className="group py-4">
                  <summary className="cursor-pointer list-none font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {faq.q}
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

        <nav className="border-t border-line/80" aria-label="Ferramentas relacionadas">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">Outros baixadores</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {RELATED.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-line bg-white px-4 py-4 text-sm font-semibold transition before:mr-1.5 before:text-ink/40 before:content-['↗'] hover:-translate-y-0.5 hover:border-pine/30 hover:shadow-md"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </main>

      <SiteFooter c={PT} />
    </div>
  );
}
