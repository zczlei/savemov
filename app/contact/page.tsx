import Link from "next/link";
import LegalPage, { legalMetadata } from "@/components/legal-page";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = legalMetadata(
  "Contact",
  "How to reach Savemov, and where to send a copyright notice.",
  "/contact/",
);

export default function Page() {
  return (
    <LegalPage title="Contact">
      <p>
        Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. That address is read by the people who run Savemov.
      </p>
      <section>
        <h2>Copyright notices</h2>
        <p className="mt-3">
          A notice about someone else&apos;s video should include the items listed on the{" "}
          <Link href="/copyright/">copyright page</Link>. A short message that only says &quot;take this down&quot; does
          not give us enough to act on.
        </p>
      </section>
      <section>
        <h2>Anything else</h2>
        <p className="mt-3">
          Tell us the page you were on and the link you pasted. We do not offer phone support, and we cannot recover a
          video the source platform has already removed.
        </p>
      </section>
    </LegalPage>
  );
}
