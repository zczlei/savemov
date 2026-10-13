import type { Metadata } from "next";
import Link from "next/link";
import DownloaderForm from "@/components/downloader-form";
import JsonLd from "@/components/json-ld";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { ES, type FormCopy } from "@/lib/copy";
import { SITE } from "@/lib/site";

const PATH = "/es/reddit-video-downloader/";
const URL_ABS = `${SITE}${PATH}`;

const TITLE = "Reddit Video Downloader en MP4 – Descargar Video de Reddit";
const DESC =
  "Descarga un vídeo o GIF de Reddit en MP4: pega el enlace de la publicación, sin app, " +
  "sin registro y sin marca de agua añadida. El audio original se mantiene.";
const H1 = "Descargar Videos de Reddit con Audio y Sin App";
const H2 =
  "Este Reddit Downloader lee publicaciones públicas y te da el MP4 – con audio cuando el archivo original lo tiene.";

const STEPS = [
  {
    t: "Copia el enlace de la publicación",
    b: "Abre Reddit en la app o en el sitio, toca Compartir → Copiar enlace. Te queda una dirección con la forma reddit.com/r/subreddit/comments/abc123.",
  },
  {
    t: "Comprueba que se abre sin iniciar sesión",
    b: "Pega el enlace en una ventana privada. Si el post carga ahí, es público y esta página puede leerlo. Los subreddits privados, las comunidades con restricción de edad y lo que exige cuenta quedan fuera.",
  },
  {
    t: "Pega el enlace arriba y pulsa Descargar MP4",
    b: "Savemov abre la publicación, localiza el archivo que el reproductor está sirviendo y prepara una copia.",
  },
  {
    t: "Guarda el archivo en tu dispositivo",
    b: "El enlace del resultado llega con la respuesta, así que descárgalo en el momento. Savemov no conserva copias, y la publicación original se puede eliminar.",
  },
];

const TYPES = [
  { t: "Posts con vídeo", b: "Clips subidos directamente a la publicación, incluidos los que tienen pista de audio." },
  { t: "GIFs y bucles", b: "Reddit convierte en MP4 sin sonido casi todo lo que ves marcado como GIF: descargas ese archivo." },
  { t: "Slideshow de fotos", b: "El carrusel de imágenes no es vídeo, así que no hay MP4 detrás que preparar." },
  { t: "Tus propias subidas", b: "Guarda copia de lo que publicaste antes de borrarlo o reemplazarlo." },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "¿Cómo descargar un vídeo de Reddit con un enlace?",
    a: "Copia el enlace de la publicación con Compartir → Copiar enlace, pégalo en la caja de arriba y pulsa Descargar MP4. Savemov lee la publicación pública, encuentra el archivo detrás del reproductor y te devuelve una copia: sin app, sin registro y sin cuenta de Reddit.",
  },
  {
    q: "¿Por qué el vídeo de Reddit no suena?",
    a: "Se confunden dos cosas distintas. Reddit reproduce casi todo en silencio por defecto, pero el archivo suele tener audio: al descargarlo, suena. Si se subió como GIF o animación en bucle, Reddit lo convierte en un MP4 mudo y ningún descargador puede crear esa pista después. Savemov conserva el audio que el original tiene y no quita nada.",
  },
  {
    q: "¿Puedo guardar un GIF de Reddit como GIF?",
    a: "Te llevas el MP4 que Reddit está sirviendo de verdad. Los archivos marcados como GIF en Reddit suelen ser ya vídeo: por eso se repiten solos y no suenan. El MP4 se abre en cualquier parte y pesa mucho menos que un GIF animado, así que conviene quedarse con ese formato.",
  },
  {
    q: "¿Necesito instalar una app de Reddit downloader?",
    a: "No. Todo funciona en el navegador que ya usas, en ordenador, iPhone o Android. Las apps y extensiones piden permisos extra y siguen activas cuando dejas de usarlas; aquí solo envías un enlace público.",
  },
  {
    q: "¿Funciona con subreddits privados, NSFW o Reddit Premium?",
    a: "No. Lo que exige inicio de sesión, verificación de edad o suscripción queda fuera: esta página nunca pide tus credenciales, así que solo puede leer lo que también ve un visitante sin cuenta. No hay manera de abrir un contenido restringido desde aquí.",
  },
  {
    q: "¿Vale para enlaces que apuntan a otro sitio?",
    a: "Solo con media alojada por el propio Reddit. Las publicaciones que incrusten un reproductor externo —Imgur, YouTube, Twitch o similares— remiten a un servicio con sus propias condiciones, y esta página no descarga desde esos servidores.",
  },
  {
    q: "¿Cómo guardar un vídeo de Reddit en el iPhone?",
    a: "Pulsa Descargar MP4, abre el resultado y usa Compartir → Guardar en Archivos para que salga del navegador. En Android el archivo va directo a la carpeta de Descargas.",
  },
  {
    q: "¿Puedo bajarlo en 1080p o 4K?",
    a: "Recibes el archivo que la publicación ya está reproduciendo, con la calidad publicada. Un clip subido en 720p no se convierte en 1080p, y Savemov no escala ni recodifica: eso solo dejaría el archivo más borroso.",
  },
  {
    q: "¿Es gratis? ¿Cuántas descargas puedo hacer?",
    a: "Gratis, sin registro y sin cuenta. Cada solicitud guarda un video público en MP4, con la calidad publicada en el post.",
  },
  {
    q: "¿Puedo descargar el vídeo de otra persona?",
    a: "Guarda solo lo que tienes derecho a conservar: tus subidas, material con permiso de quien lo creó o copia privada donde tu ley lo permita. El contenido de Reddit suele pertenecer a quien lo publicó, así que volver a difundirlo es responsabilidad tuya — mira nuestra página de Derechos de Autor.",
  },
];

const RELATED = [
  { href: "/es/", label: "Descargar Videos Online por Link" },
  { href: "/es/twitter-video-downloader/", label: "Descargar Video de Twitter (X)" },
  { href: "/es/facebook-video-downloader/", label: "Descargar Videos de Facebook" },
];

const FORM: FormCopy = {
  ...ES.form,
  label: "Enlace de la publicación de Reddit",
  placeholder: "Pega el enlace del post – reddit.com/r/…",
  button: "Descargar MP4",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Savemov – Descargar Video de Reddit",
    url: URL_ABS,
    description: DESC,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Cualquiera (navegador web)",
    browserRequirements: "Requiere JavaScript",
    inLanguage: "es",
    isAccessibleForFree: true,
    hasPart: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Gratis" },
    featureList: [
      "Descargar vídeos y GIFs de publicaciones públicas de Reddit",
      "MP4 con el audio original, sin marca de agua añadida",
      "Sin app, sin registro, sin cuenta de Reddit",
      "Funciona en iPhone y Android",
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
    name: "Cómo descargar un vídeo de Reddit con el enlace del post",
    url: URL_ABS,
    inLanguage: "es",
    step: STEPS.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.t,
      text: step.b,
    })),
  },
];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: {
    canonical: PATH,
    languages: {
      es: PATH,
      en: "/reddit-video-downloader/",
      pt: "/pt/reddit-video-downloader/",
      "x-default": "/reddit-video-downloader/",
    },
  },
  openGraph: {
    type: "website",
    url: PATH,
    title: TITLE,
    description: DESC,
    siteName: "Savemov",
    locale: "es_ES",
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

export default function EsRedditPage() {
  return (
    <div className="min-h-screen bg-paper text-ink" lang="es">
      <JsonLd data={jsonLd} />
      <a href="#main" className="skip-link">
        {ES.skip}
      </a>

      <div className="hero-shell text-white">
        <SiteHeader
          c={{ lang: "es", path: "/es/" }}
          languages={[
            { code: "en", short: "EN", label: "English", href: "/reddit-video-downloader/" },
            { code: "pt-BR", short: "PT", label: "Português", href: "/pt/reddit-video-downloader/" },
          ]}
        />
        <section className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:pb-20 sm:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/90">
              Sin app · Sin registro · Audio original intacto
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
            Solo publicaciones públicas. Nunca pedimos tu inicio de sesión.{" "}
            <Link href="/copyright/" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              {ES.legal.copyright}
            </Link>
          </p>
        </section>
      </div>

      <main id="main">
        <section id="como-descargar" className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">Cómo descargar un vídeo de Reddit con el enlace</h2>
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
            <h2 className="text-2xl font-bold tracking-tight">Qué tipo de publicación de Reddit puedes guardar</h2>
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
            <h2 className="text-2xl font-bold tracking-tight">Formato del archivo, audio y calidad</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">
              Recibes el MP4 que la publicación ya está sirviendo, con el audio que el archivo original tenga. Un vídeo que
              aparece en silencio en tu feed normalmente no es un archivo mudo: al descargarlo, suena. Reddit no publica una
              versión mejor que la que subió quien lo creó, así que Savemov tampoco inventa una: sin escalado, sin recodificar,
              sin marca de agua por encima.
            </p>
          </div>
        </section>

        <section id="faq" className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">Preguntas frecuentes</h2>
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
            <h2 className="text-2xl font-bold tracking-tight">Otros descargadores</h2>
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

      <SiteFooter c={ES} />
    </div>
  );
}
