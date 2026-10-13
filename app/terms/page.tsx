import Link from "next/link";
import LegalPage, { legalMetadata } from "@/components/legal-page";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = legalMetadata(
  "Terms",
  "The rules for using Savemov: public links only, one video at a time, and you need the right to save it.",
  "/terms/",
);

export default function Page() {
  return (
    <LegalPage title="Terms">
      <p>
        Savemov lets you save a public video as the file that page is already playing. There is no account and nothing to
        install. Using the site means you accept the points on this page.
      </p>
      <section>
        <h2>What you may submit</h2>
        <p className="mt-3">
          One public page link per request. Pages that ask for a login, private posts, and DRM-protected streams are out
          of reach, and the site will not ask for a password to try. Playlists are not saved as a batch.
        </p>
      </section>
      <section>
        <h2>Your responsibility</h2>
        <p className="mt-3">
          Save only what you have the right to keep: your own uploads, material you were given permission for, or a
          private copy where your local law allows one. Reposting someone else&apos;s video is your decision, not ours.
          Rights holders can ask us to stop returning a link, as described on the <Link href="/copyright/">copyright page</Link>.
        </p>
      </section>
      <section>
        <h2>The file</h2>
        <p className="mt-3">
          You get the file the source page serves, at the quality it was published in. Savemov does not add a watermark
          and does not keep a copy after the response. The source link can expire, so save the file when it is ready.
        </p>
      </section>
      <section>
        <h2>No warranty</h2>
        <p className="mt-3">
          The site is offered as it runs. A platform can change how it delivers a video, and a link that worked yesterday
          can come back empty. We may refuse a link, slow a burst of requests, or stop returning a file after a valid
          copyright notice.
        </p>
      </section>
      <p>Questions about these terms go to {CONTACT_EMAIL}.</p>
    </LegalPage>
  );
}
