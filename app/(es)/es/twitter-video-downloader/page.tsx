import type { Metadata } from "next";
import Link from "next/link";
import DownloaderForm from "@/components/downloader-form";
import JsonLd from "@/components/json-ld";
import { Breadcrumb, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { ES, type FormCopy } from "@/lib/copy";
import { breadcrumbJsonLd, SITE } from "@/lib/site";

const PATH = "/es/twitter-video-downloader/";
const URL_ABS = `${SITE}${PATH}`;

const TITLE = "Descargar Video de Twitter (X) – Downloader Gratis en MP4";
const DESC =
  "Descarga videos de Twitter (X) en MP4 con audio: pega el enlace del tweet, sin " +
  "apps, sin registro y sin marca de agua añadida. Funciona en iPhone y Android.";
const H1 = "Descargar Videos de Twitter (X) con Audio en MP4";
const H2 = "Pega el enlace del tweet y descarga el video gratis – online y sin instalar apps";

const STEPS = [
  {
    t: "Abre el post en Twitter (X)",
    b: "Busca el video en un perfil, publicación o tweet público, desde la app o desde el navegador. Toca en Compartir → Copiar enlace: la dirección llega en la forma twitter.com/usuario/status/123 o x.com/usuario/status/123.",
  },
  {
    t: "Comprueba que se abre sin iniciar sesión",
    b: "Pega el enlace en una ventana privada. Si el video se reproduce ahí, el post es público y esta página puede leerlo. Las cuentas protegidas, los mensajes directos y el contenido con restricción de edad quedan fuera.",
  },
  {
    t: "Pega el enlace arriba y pulsa Descargar MP4",
    b: "Savemov abre el post, localiza el archivo que la página está reproduciendo y prepara una copia.",
  },
  {
    t: "Guarda el archivo en tu dispositivo",
    b: "El enlace del archivo llega junto con la respuesta, así que descárgalo en el momento. Savemov no conserva copia después de eso, y el post original puede desaparecer.",
  },
];

const TYPES = [
  { t: "Posts con video", b: "Clips subidos directamente al tweet, incluidos los más largos." },
  { t: "GIFs", b: "Las animaciones también se guardan — pero si el post quedó como GIF, no lleva pista de audio." },
  { t: "Retweets y citas", b: "Pega el enlace de la publicación original, no el del retweet." },
  { t: "Tus propios videos", b: "Guarda copia de lo que subiste antes de borrarlo o reemplazarlo." },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "¿Cómo descargar un video de Twitter (X)?",
    a: "Copia el enlace del post con Compartir → Copiar enlace, pégalo en la caja de arriba y pulsa Descargar MP4. Savemov lee el post público, encuentra el archivo detrás del reproductor y te devuelve una copia: sin apps, sin registro y sin necesidad de cuenta en Twitter.",
  },
  {
    q: "¿Necesito instalar una aplicación?",
    a: "No. Todo funciona en el navegador que ya tienes, en el ordenador o en el móvil. Una app pide permisos de más y sigue activa cuando dejas de usarla; aquí solo envías un enlace público.",
  },
  {
    q: "¿El video se descarga con sonido?",
    a: "Con el sonido que tenga el post original. Si el clip se convirtió en GIF o en una animación en bucle, nace sin pista de audio y ningún descargador puede añadírselo después.",
  },
  {
    q: "¿Puedo descargar de una cuenta privada o de un mensaje directo?",
    a: "No. Las cuentas protegidas, los mensajes directos y todo lo que exija iniciar sesión quedan fuera: esta página nunca te pide tus datos de acceso, así que solo puede leer lo que también ve un visitante sin cuenta.",
  },
  {
    q: "¿Se puede descargar en 1080p o 4K?",
    a: "Recibes el archivo que el post ya está reproduciendo, con la calidad publicada. Un video subido en 720p no se convierte en 1080p, y esta herramienta no escala ni re-codifica: eso solo dejaría el archivo más borroso.",
  },
  {
    q: "¿Tiene marca de agua?",
    a: "No. Twitter (X) no graba un logotipo en el archivo de video, y Savemov tampoco añade nada. Descargas el mismo archivo que el post reproduce, con su audio original.",
  },
  {
    q: "¿Funciona en iPhone y Android?",
    a: "Sí, en los dos y también en tablets. No hay nada que instalar: es una página, así que funciona igual en Safari, en Chrome y en el navegador de la propia app.",
  },
  {
    q: "¿Puedo bajar varios videos a la vez o un hilo entero?",
    a: "Un video por petición. Abre el post que lleva el clip que quieres y pega ese enlace concreto: hilos y carpetas de guardados no se descargan en lote.",
  },
  {
    q: "¿Es gratis? ¿Cuántas descargas puedo hacer?",
    a: "Gratis, sin registro y sin cuenta. Cada solicitud guarda un video público en MP4, con la calidad publicada en el post.",
  },
  {
    q: "¿Puedo descargar cualquier video?",
    a: "Guarda solo lo que tienes derecho a conservar: tus propias subidas, material con permiso del autor o donde tu ley local admita copia privada. Redistribuir contenido ajeno sin autorización es cosa tuya — mira nuestra página de Derechos de Autor.",
  },
];

const RELATED = [
  { href: "/es/", label: "Descargar Videos Online por Link" },
  { href: "/es/facebook-video-downloader/", label: "Descargar Videos de Facebook" },
];

const FORM: FormCopy = {
  ...ES.form,
  label: "Enlace del tweet o de la publicación en X",
  placeholder: "Pega el enlace de un tweet con video – twitter.com o x.com",
  button: "Descargar MP4",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Savemov – Descargar Video de Twitter (X)",
    url: URL_ABS,
    description: DESC,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Cualquiera (navegador web)",
    browserRequirements: "Requiere JavaScript",
    inLanguage: "es",
    isAccessibleForFree: true,
    hasPart: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Gratis" },
    featureList: [
      "Descargar videos de posts públicos de Twitter (X)",
      "MP4 con el audio original, sin marca de agua añadida",
      "Sin apps, sin bot y sin registro",
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
    name: "Cómo descargar un video de Twitter (X) desde un enlace",
    url: URL_ABS,
    inLanguage: "es",
    step: STEPS.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.t,
      text: step.b,
    })),
  },
  breadcrumbJsonLd("Inicio", `${SITE}/es/`, "Descargar Video de Twitter (X)", URL_ABS),
];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: {
    canonical: PATH,
    languages: {
      es: PATH,
      en: "/twitter-video-downloader/",
      pt: "/pt/twitter-video-downloader/",
      "x-default": "/twitter-video-downloader/",
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

export default function ESTwitterVideoDownloaderPage() {
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
            { code: "en", short: "EN", label: "English", href: "/twitter-video-downloader/" },
            { code: "pt-BR", short: "PT", label: "Português", href: "/pt/twitter-video-downloader/" },
          ]}
        />
        <Breadcrumb homeHref="/es/" homeLabel="Inicio" current="Descargar Video de Twitter (X)" />
        <section className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:pb-20 sm:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/90">
              Sin aplicación · Sin bot · Sin registro · Gratis
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
            {ES.heroHint}{" "}
            <Link href="/copyright/" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              {ES.legal.copyright}
            </Link>
          </p>
        </section>
      </div>

      <main id="main">
        <section className="mx-auto max-w-5xl px-4 py-14">
          <p className="max-w-3xl text-sm leading-7 text-ink/70">
            Savemov es un <strong className="font-semibold text-ink">descargador de videos de Twitter</strong> gratuito: pegas un
            enlace público y recibes el archivo. No pedimos inicio de sesión, no instalamos nada y no guardamos lo que
            descargaste.
          </p>
        </section>

        <section className="border-t border-line/80" aria-labelledby="como">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 id="como" className="text-2xl font-bold tracking-tight">
              Cómo descargar un video de Twitter por enlace
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">
              Para descargar un video de Twitter (X) desde la URL del post, usa el enlace que copia la propia app: no hace falta
              reenviar el archivo a nadie.
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
              Lo que puedes descargar
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
              Formatos y calidad del archivo
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">
              Savemov devuelve el archivo que la página ya sirve: normalmente un MP4, que se ve en iPhone, Android, Windows y Mac
              sin instalar ningún códec. La calidad es la de la subida original — no inventamos una resolución más alta ni
              re-codificamos el video. Si el post quedó como GIF, se descarga sin pista de audio porque así fue publicado.
            </p>
          </div>
        </section>

        <section id="faq" className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">Preguntas frecuentes</h2>
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

        <nav className="border-t border-line/80" aria-label="Herramientas relacionadas">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">Otros descargadores</h2>
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

      <SiteFooter c={ES} />
    </div>
  );
}
