import Link from "next/link";
import LegalPage, { legalMetadata } from "@/components/legal-page";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = legalMetadata(
  "Copyright",
  "How to send Savemov a copyright notice, what a complete notice must include, and how a counter-notice works.",
  "/copyright/",
);

export default function Page() {
  return (
    <LegalPage title="Copyright">
      <p>
        Savemov is a website. It does not host the videos. You paste a public page link, and Savemov asks for the file that
        page is already playing. This page is how a rights holder asks us to stop doing that for a specific link.
      </p>
      <section>
        <h2>What we can act on</h2>
        <p className="mt-3">
          We only handle a video a logged-out visitor can already play. A post that needs a login, a private account, or a
          DRM stream is not a file we can fetch, so there is nothing on our side to take down. We also cannot delete the
          video from the platform that published it.
        </p>
      </section>
      <section>
        <h2>What a notice must include</h2>
        <p className="mt-3">Write to {CONTACT_EMAIL}. A notice we can act on names all of the following:</p>
        <ul className="mt-3">
          <li>The Savemov page, or the exact public link you want us to stop returning a file for.</li>
          <li>Your name and an email or postal address where we can reach you.</li>
          <li>A link or other description that shows you own the work, or that you are allowed to act for the owner.</li>
          <li>A statement that you believe the use is not authorised by the owner, the owner&apos;s agent, or the law.</li>
          <li>A statement that the notice is accurate, and that you are the owner or are allowed to act for the owner.</li>
        </ul>
      </section>
      <section>
        <h2>What happens next</h2>
        <p className="mt-3">
          We read a complete notice and reply within 7 days. When the notice is valid, we stop returning a download for
          that page link. A notice that leaves out an item above is not acted on; we will say which item is missing.
        </p>
      </section>
      <section>
        <h2>Counter-notice</h2>
        <p className="mt-3">
          If we stopped a link and you believe that was a mistake, write to the same address. Include the page link, why
          you have the right to the video, and a statement that the original notice was wrong. We put the link back only
          when that reply is specific enough to check.
        </p>
      </section>
      <section>
        <h2>Repeated or incomplete notices</h2>
        <p className="mt-3">
          A page we have already blocked stays blocked. Someone who keeps sending the same notice after we have answered
          it, or notices that point at the wrong page, may stop receiving a separate reply each time.
        </p>
      </section>
      <p>
        Questions that are not a copyright notice go to the <Link href="/contact/">contact page</Link>.
      </p>
    </LegalPage>
  );
}
