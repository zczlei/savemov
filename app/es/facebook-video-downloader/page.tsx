import type { Metadata } from "next";
import Link from "next/link";
import DownloaderForm from "@/components/downloader-form";
import JsonLd from "@/components/json-ld";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { ES, type FormCopy } from "@/lib/copy";
import { SITE } from "@/lib/site";

const PATH = "/es/facebook-video-downloader/";
const URL_ABS = `${SITE}${PATH}`;

const TITLE = "Descargar Videos de Facebook Online – Reels y Historias";
const DESC =
  "Descarga videos de Facebook, Reels o Historias en MP4 – pega el enlace, sin app, " +
  "sin registro y sin añadir marca de agua. Audio original, en iPhone y Android.";
const H1 = "Descargar Video de Facebook Desde el Enlace: Posts, Reels y Historias";
const H2 =
  "Pega el enlace del post, del Reel o de la Historia y obtén el MP4 con su audio original, sin añadir marca de agua.";

const BADGES = [
  { k: "Sin app ni APK", v: "Funciona en el navegador que ya tienes." },
  { k: "Sin marca de agua propia", v: "Nunca marcamos el archivo; la marca original se queda como está." },
  { k: "Reels e Historias", v: "El formato vertical y el que desaparece a las 24 horas, en la misma caja." },
  { k: "Audio conservado", v: "Descargamos el audio que el archivo ya tiene; no extraemos solo el sonido." },
];

const STEPS = [
  {
    t: "Copia el enlace del post",
    b: "Toca los tres puntos del vídeo, o Compartir → Copiar enlace en la app de Facebook. Recibirás una dirección con la forma facebook.com/usuario/videos/1234567890, o un enlace de Reel como facebook.com/reel/1234567890.",
  },
  {
    t: "Comprueba que el post es público",
    b: "Abre el enlace en una ventana privada. Si el vídeo carga ahí, esta página puede leerlo. Si Facebook te pide iniciar sesión, el post está limitado a amigos, a un grupo o solo al autor, y ninguna herramienta puede bajarlo por ti.",
  },
  {
    t: "Pégalo arriba y pulsa Descargar MP4",
    b: "Savemov abre el post, localiza el archivo que el reproductor está emitiendo de verdad y prepara una copia.",
  },
  {
    t: "Guarda el archivo en tu dispositivo",
    b: "El enlace del resultado llega con la respuesta, así que descárgalo en el momento. Savemov no guarda ninguna copia.",
  },
];

const TYPES = [
  { t: "Posts con vídeo", b: "Subidas a una Página, a un perfil o a un grupo público." },
  { t: "Reels", b: "Los clips verticales: el mismo MP4 que reproduce el visor de Reels." },
  { t: "Historias", b: "Las Historias públicas se pueden guardar antes de que desaparezcan." },
  { t: "Vídeos de Facebook Watch", b: "Subidas a Watch y vídeos de Página que duran varios minutos." },
  { t: "Slideshow de fotos", b: "Un carrusel de fotos no es vídeo: no hay MP4 detrás que preparar." },
  { t: "Tus propias publicaciones", b: "Guarda copia de algo tuyo antes de borrarlo o editarlo." },
];

const FORMAT = [
  "Savemov conserva el archivo que Facebook ya sirve: normalmente un MP4 con su pista de audio original. No convertimos, comprimimos ni recodificamos, así que lo que guardas se ve igual que en el reproductor, y ningún archivo sale con nuestro logotipo.",
  "La calidad depende de la subida, no de nuestros ajustes. Un Reel publicado en 720p se descarga en 720p; no se convierte en 1080p, y no escalamos la imagen. Savemov devuelve el archivo que el post ya está reproduciendo.",
  "Algunas páginas prometen guardar solo el sonido del vídeo como MP3. Savemov no lo hace: entregamos el archivo de vídeo con el audio que trae, sin separar pistas.",
  "El enlace del archivo vuelve en cuanto termina la solicitud. Guárdalo en el momento, porque Savemov no conserva ninguna copia.",
];

const SCOPE = [
  "Esta página lee únicamente lo que ya puede ver un visitante sin sesión. No es un límite que podamos quitar: un vídeo privado, un post solo para amigos, una comunidad con edad mínima o un grupo del que no formas parte no tienen ningún archivo público que preparar.",
  "Es también la razón por la que ningún descargador de Facebook puede prometer eso con honestidad. La herramienta que asegura abrir vídeos privados quiere tus credenciales, una extensión que ve todo lo que haces o una app que pide permisos que no usa. Savemov no pide nada de eso: envías un enlace público, no se instala nada y nada queda unido a tu cuenta.",
  "Si un post es público pero prefieres que no se guarde en otro sitio, es una expectativa razonable: los propietarios de contenido en Facebook pueden solicitar su retirada según nuestra política de Derechos de autor, y atendemos los avisos válidos.",
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "¿Cómo descargar un vídeo de Facebook?",
    a: "Copia el enlace con Compartir → Copiar enlace (o desde los tres puntos del vídeo), pégalo en la caja de arriba y pulsa Descargar MP4. Savemov lee el post público, encuentra el archivo que hay detrás del reproductor y devuelve una copia para guardar: sin app, sin registro y sin necesidad de cuenta de Facebook.",
  },
  {
    q: "¿Se pueden descargar vídeos de Facebook sin marca de agua?",
    a: "Savemov no añade logotipo, firma ni sello propio: recibes el MP4 exacto que entrega Facebook. Si el vídeo ya muestra la marca de agua del creador o de otra red social, eso venía en la grabación, y ninguna herramienta puede quitarlo sin estropear la imagen.",
  },
  {
    q: "¿Cómo bajar los Reels de Facebook?",
    a: "Igual. Abre el Reel, toca Compartir → Copiar enlace y pégalo en la caja: la dirección suele tener la forma facebook.com/reel/1234567890. Obtendrás el archivo vertical a la resolución en que fue publicado y con su audio original, incluida la música que la app silencia en la vista previa.",
  },
  {
    q: "¿Puedo guardar una Historia antes de que desaparezca?",
    a: "Sí, si está publicada como pública. La Historia dura 24 horas en Facebook, pero el archivo que descargues se queda en tu dispositivo. Las Historias de perfiles privados o de amigos solo están visibles para quien tiene acceso, y no hay forma de saltarse esa restricción.",
  },
  {
    q: "¿Necesito instalar una app o un APK para descargar vídeos de Facebook?",
    a: "No. Todo funciona en el navegador que ya usas, en el ordenador o en el móvil. Las apps y extensiones piden permisos que nunca usan y siguen activas después de cerrar la pestaña; además, un APK instalado fuera de Play Store es una de las puertas de malware más comunes en Android. Aquí solo envías un enlace público: no se instala nada.",
  },
  {
    q: "¿Funciona con vídeos de grupos, de amigos o de perfiles privados?",
    a: "No, y desconfía de quien prometa lo contrario. Un grupo privado, un post limitado a amigos, una comunidad con restricción de edad o un perfil cerrado no tienen ninguna versión pública que esta página pueda leer. Los servicios que afirman abrir ese contenido piden tu contraseña, una extensión que ve todo lo que haces o acceso a tu cuenta de Facebook.",
  },
  {
    q: "¿Cómo descargar un vídeo de Facebook en el iPhone?",
    a: "Pulsa Descargar MP4, abre el archivo que aparece y usa Compartir → Guardar en Archivos para sacarlo del navegador. En Android el archivo va directamente a la carpeta de Descargas.",
  },
  {
    q: "¿Puedo bajarlo en 1080p, 2K o 4K?",
    a: "Recibes el archivo que el post ya está reproduciendo, con la calidad en que se publicó. Un vídeo subido en 720p no se convierte en 1080p, y no escalamos ni recodificamos: eso solo haría que el archivo se viera peor que el original. Que un titular anuncie 4K no cambia lo que Facebook entrega.",
  },
  {
    q: "¿El descargador de vídeos de Facebook es gratis? ¿Tiene límite?",
    a: "Gratis, sin registro y sin cuenta. Cada solicitud guarda un vídeo público en MP4, con la calidad que publicó el post.",
  },
  {
    q: "¿Puedo descargar el vídeo de otra persona?",
    a: "Guarda solo lo que tienes derecho a conservar: tus propias publicaciones, material que el autor permitió reutilizar o una copia personal donde la ley local lo admita. El contenido de Facebook suele pertenecer a quien lo publicó, y volver a subirlo en otro sitio es responsabilidad tuya: consulta nuestra política de Derechos de autor.",
  },
];

const RELATED = [
  { href: "/es/", label: "Descargar Videos Online por Link" },
  { href: "/es/reddit-video-downloader/", label: "Descargar Videos de Reddit" },
  { href: "/es/twitter-video-downloader/", label: "Descargar Video de Twitter (X)" },
];

const FORM: FormCopy = {
  ...ES.form,
  label: "Enlace de la publicación de Facebook",
  placeholder: "Pega un enlace de Facebook – facebook.com/…/videos/…, un Reel o una Historia",
  button: "Descargar MP4",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Descargar Videos de Facebook Online | Savemov",
    url: URL_ABS,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Windows, macOS, Android, iOS",
    inLanguage: "es",
    description: DESC,
    isAccessibleForFree: true,
    hasPart: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Gratis" },
    featureList: [
      "Descargar vídeos de Facebook desde el enlace",
      "Guardar Reels de Facebook",
      "Guardar Historias públicas",
      "MP4 con el audio original",
      "Sin instalar apps ni APK",
      "Sin añadir marca de agua",
      "Funciona en iPhone, Android, Windows, macOS y Linux",
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
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE}/es/` },
      { "@type": "ListItem", position: 2, name: "Descargar Videos de Facebook", item: URL_ABS },
    ],
  },
];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: {
    canonical: PATH,
    languages: {
      es: PATH,
      pt: "/pt/facebook-video-downloader/",
      en: "/facebook-video-downloader/",
      "x-default": "/facebook-video-downloader/",
    },
  },
  openGraph: {
    type: "website",
    url: PATH,
    siteName: "Savemov",
    locale: "es_ES",
    title: TITLE,
    description: DESC,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: H1 }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/opengraph-image"] },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

export default function EsFacebookPage() {
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
            { code: "en", short: "EN", label: "English", href: "/facebook-video-downloader/" },
            { code: "pt-BR", short: "PT", label: "Português", href: "/pt/facebook-video-downloader/" },
          ]}
        />
        <section className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:pb-20 sm:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/90">
              Sin app · Sin registro · Sin marca de agua propia
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
            Solo publicaciones públicas. Nunca pedimos tu inicio de sesión de Facebook.{" "}
            <Link href="/copyright/" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              {ES.legal.copyright}
            </Link>
          </p>
        </section>
      </div>

      <main id="main">
        <section aria-label="Ventajas" className="mx-auto -mt-8 grid max-w-5xl grid-cols-2 gap-3 px-4 sm:grid-cols-4">
          {BADGES.map((badge) => (
            <div key={badge.k} className="rounded-2xl border border-line bg-white px-4 py-3 text-center shadow-sm">
              <p className="text-sm font-semibold text-pine">{badge.k}</p>
              <p className="mt-1 text-xs leading-5 text-ink/60">{badge.v}</p>
            </div>
          ))}
        </section>

        <section id="como-descargar" className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">Cómo descargar vídeos de Facebook desde el enlace</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">
            Cuatro pasos. Lo que más falla no es la descarga, sino saber si el post es público.
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
            <h2 className="text-2xl font-bold tracking-tight">Qué puedes descargar de Facebook</h2>
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
            <h2 className="text-2xl font-bold tracking-tight">Formato y calidad del archivo</h2>
            {FORMAT.map((paragraph) => (
              <p key={paragraph} className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section id="publico" className="border-t border-line/80">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold tracking-tight">Solo contenido público, y por qué</h2>
            {SCOPE.map((paragraph) => (
              <p key={paragraph} className="mt-4 max-w-3xl text-sm leading-7 text-ink/70">
                {paragraph}
              </p>
            ))}
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
            <h2 className="text-2xl font-bold tracking-tight">Más descargadores</h2>
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
              Savemov está pensado para contenido que tienes derecho a conservar: tus propias publicaciones, material con
              permiso del autor o copia personal admitida por tu legislación. Facebook es una marca de Meta Platforms; esta
              página es independiente y no está afiliada, patrocinada ni respaldada por ella. No ofrecemos forma alguna de
              saltar restricciones de privacidad, edad mínima o suscripción, ni atendemos posts que exijan iniciar sesión.
              Para avisos de derechos de autor,{" "}
              <Link href="/contact/" className="underline">
                escríbenos
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <SiteFooter c={ES} />
    </div>
  );
}
