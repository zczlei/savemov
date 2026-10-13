import type { Metadata } from "next";
import Link from "next/link";
import DownloaderForm from "@/components/downloader-form";
import JsonLd from "@/components/json-ld";
import { Breadcrumb, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { PT, type FormCopy } from "@/lib/copy";
import { breadcrumbJsonLd, SITE } from "@/lib/site";

const PATH = "/pt/reddit-video-downloader/";
const URL_ABS = `${SITE}${PATH}`;

const TITLE = "Reddit Video Downloader em MP4 – Baixar Vídeo do Reddit";
const DESC =
  "Baixe um vídeo ou GIF do Reddit em MP4: cole o link do post, sem app, sem cadastro " +
  "e sem marca d'água adicionada. O áudio original é mantido.";
const H1 = "Baixar Vídeos do Reddit com Som, Sem App";
const H2 = "Este Reddit Downloader lê posts públicos e devolve o MP4 – com áudio quando o arquivo original tem.";

const STEPS = [
  {
    t: "Copie o link do post",
    b: "Abra o Reddit no app ou no site, toque em Compartilhar → Copiar link. Você recebe um endereço no formato reddit.com/r/subreddit/comments/abc123.",
  },
  {
    t: "Confira se ele abre sem login",
    b: "Cole o link numa aba anônima. Se o post carrega aí, ele é público e esta página consegue lê-lo. Subreddits privados, comunidades com restrição de idade e posts que exigem login ficam de fora.",
  },
  {
    t: "Cole o link acima e toque em Baixar MP4",
    b: "O Savemov abre o post, identifica o arquivo que o player está reproduzindo e prepara uma cópia.",
  },
  {
    t: "Salve o arquivo no seu aparelho",
    b: "O link do resultado volta junto com a resposta, então baixe na hora. O Savemov não guarda o arquivo, e o post original pode continuar no ar ou ser apagado.",
  },
];

const TYPES = [
  { t: "Posts com vídeo", b: "Clipes enviados direto no post, inclusive os que têm trilha de áudio." },
  { t: "GIFs e loops", b: "O Reddit converte em MP4 silencioso quase tudo que aparece como GIF – você baixa esse arquivo." },
  { t: "Slideshow de imagens", b: "Carrossel de fotos não é vídeo, então não há MP4 por trás para baixar." },
  { t: "Seus próprios posts", b: "Guarde uma cópia do que você enviou antes de apagar ou trocar." },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Como baixar vídeo do Reddit?",
    a: "Copie o link do post em Compartilhar → Copiar link, cole na caixa acima e toque em Baixar MP4. O Savemov lê o post público, encontra o arquivo por trás do player e devolve uma cópia — sem app, sem cadastro e sem conta no Reddit.",
  },
  {
    q: "Por que o vídeo do Reddit está sem som?",
    a: "Duas coisas diferentes se misturam aqui. O Reddit reproduz a maioria das mídias mutado por padrão, mas o arquivo tem áudio: baixado, o som aparece. Se o post foi enviado como GIF ou animação em loop, o Reddit o converte em MP4 silencioso — e aí nenhum baixador consegue criar uma trilha depois. O Savemov mantém o áudio que o arquivo original tem e não remove nada.",
  },
  {
    q: "Posso salvar um GIF do Reddit como GIF mesmo?",
    a: "Você recebe o MP4 que o Reddit está de fato servindo. Arquivos marcados como GIF no Reddit geralmente já são vídeo — por isso ficam em loop e sem som. O MP4 abre em qualquer lugar e pesa bem menos que um GIF animado, então vale manter o formato.",
  },
  {
    q: "Tem um aplicativo do Reddit downloader que eu precise instalar?",
    a: "Não. Tudo roda no navegador que você já usa, no computador, iPhone ou Android. Apps e extensões pedem permissões a mais e continuam rodando depois que você para de usar; aqui você só envia um link público.",
  },
  {
    q: "Dá para baixar de subreddit privado, NSFW ou Reddit Premium?",
    a: "Não. O que exige login, verificação de idade ou assinatura fica fora: esta página nunca pede suas credenciais, então só lê o que um visitante sem conta também enxerga. Não existe forma de destravar um post restrito por aqui.",
  },
  {
    q: "Funciona com links que apontam para outro site?",
    a: "Só com mídia hospedada pelo próprio Reddit. Posts que embutem um player externo — Imgur, YouTube, Twitch e parecidos — remetem a um serviço com suas próprias regras, e esta página não puxa arquivos desses hosts.",
  },
  {
    q: "Como baixar um vídeo do Reddit no iPhone?",
    a: "Toque em Baixar MP4, abra o resultado e use Compartilhar → Salvar em Arquivos para que ele saia do navegador. No Android, o arquivo vai direto para a pasta Downloads.",
  },
  {
    q: "Consigo baixar em 1080p ou 4K?",
    a: "Você recebe o arquivo que o post já está reproduzindo, na qualidade publicada. Um vídeo enviado em 720p não vira 1080p, e o Savemov não faz upscale nem reencode — isso só deixaria o arquivo mais mole.",
  },
  {
    q: "É grátis? Tem limite de downloads?",
    a: "Grátis, sem cadastro e sem conta. Cada pedido salva um vídeo público em MP4, na qualidade publicada no post.",
  },
  {
    q: "Posso baixar o vídeo de outra pessoa?",
    a: "Baixe só o que você tem direito de guardar: seus próprios envios, material com permissão de quem criou, ou cópia privada onde a lei brasileira permite. O conteúdo do Reddit costuma pertencer a quem postou — republicar em outro lugar é responsabilidade sua. Veja a página de Direitos Autorais.",
  },
];

const RELATED = [
  { href: "/pt/", label: "Baixar Vídeo pela URL ou Link" },
  { href: "/pt/twitter-video-downloader/", label: "Baixar Vídeo do Twitter (X)" },
  { href: "/pt/facebook-video-downloader/", label: "Baixar Vídeo do Facebook" },
];

const FORM: FormCopy = {
  ...PT.form,
  label: "Link do post do Reddit",
  placeholder: "Cole o link do post – reddit.com/r/…",
  button: "Baixar MP4",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Savemov – Baixar Vídeo do Reddit",
    url: URL_ABS,
    description: DESC,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Qualquer (navegador web)",
    browserRequirements: "Requer JavaScript",
    inLanguage: "pt-BR",
    isAccessibleForFree: true,
    hasPart: { "@type": "Offer", price: "0", priceCurrency: "BRL", description: "Grátis" },
    featureList: [
      "Baixar vídeos e GIFs de posts públicos do Reddit",
      "MP4 com o áudio original, sem marca d'água adicionada",
      "Sem aplicativo, sem cadastro, sem conta no Reddit",
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
    name: "Como baixar vídeo do Reddit pelo link do post",
    url: URL_ABS,
    inLanguage: "pt-BR",
    step: STEPS.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.t,
      text: step.b,
    })),
  },
  breadcrumbJsonLd("Início", `${SITE}/pt/`, "Baixar Vídeo do Reddit", URL_ABS),
];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: {
    canonical: PATH,
    languages: {
      pt: PATH,
      en: "/reddit-video-downloader/",
      es: "/es/reddit-video-downloader/",
      "x-default": "/reddit-video-downloader/",
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

export default function PtRedditPage() {
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
            { code: "en", short: "EN", label: "English", href: "/reddit-video-downloader/" },
            { code: "es", short: "ES", label: "Español", href: "/es/reddit-video-downloader/" },
          ]}
        />
        <Breadcrumb homeHref="/pt/" homeLabel="Início" current="Baixar Vídeo do Reddit" />
        <section className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:pb-20 sm:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/90">
              Sem app · Sem cadastro · Áudio original mantido
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
            Só posts públicos. Nunca pedimos seu login do Reddit.{" "}
            <Link href="/copyright/" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              {PT.legal.copyright}
            </Link>
          </p>
        </section>
      </div>

      <main id="main">
        <section id="como-baixar" className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">Como baixar vídeo do Reddit pelo link</h2>
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
            <h2 className="text-2xl font-bold tracking-tight">Que tipo de post do Reddit dá para salvar</h2>
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
            <h2 className="text-2xl font-bold tracking-tight">Formato do arquivo, áudio e qualidade</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">
              Você recebe o MP4 que o post já está servindo, com o áudio que o arquivo original tem. Um vídeo que aparece mutado
              no seu feed normalmente não é um arquivo silencioso — baixado, o som toca. O Reddit não publica uma versão melhor
              do que a que quem enviou usou, então o Savemov também não inventa uma: sem upscale, sem reencode, sem marca
              d&apos;água por cima.
            </p>
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
            <h2 className="text-2xl font-bold tracking-tight">Outros baixadores</h2>
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
          </div>
        </section>
      </main>

      <SiteFooter c={PT} />
    </div>
  );
}
