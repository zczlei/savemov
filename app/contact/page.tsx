import Link from "next/link";
import LegalPage, { legalMetadata } from "@/components/legal-page";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = legalMetadata(
  "Contact",
  "Email Savemov about a question, a bug, or a platform to add, and where to send a copyright notice.",
  "/contact/",
);

export default function Page() {
  return (
    <LegalPage title="Contact Us">
      <p>
        Have a question, found a bug, or want to suggest a platform we should support next? Write to us and we will read
        it.
      </p>
      <section>
        <h2>Support and feedback</h2>
        <p className="mt-3">
          Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Tell us the page you were on and, if a download
          failed, the link you pasted. We reply as soon as we can. There is no phone line, and we cannot recover a video
          the source platform has already removed.
        </p>
      </section>
      <section>
        <h2>Copyright notices</h2>
        <p className="mt-3">
          If you are a rights holder and believe a public video reached through Savemov infringes your copyright, email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with the page link and the details of your claim. A
          notice we can act on needs the items listed on the <Link href="/copyright/">copyright page</Link>. A message
          that only says &quot;take this down&quot; does not give us enough to act on.
        </p>
      </section>
    </LegalPage>
  );
}
