import Link from "next/link";
import LegalPage, { legalMetadata } from "@/components/legal-page";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = legalMetadata(
  "Privacy",
  "What Savemov does with the link you paste: the video is not stored, and there is no account.",
  "/privacy/",
);

export default function Page() {
  return (
    <LegalPage title="Privacy">
      <p>
        Savemov does not ask you to create an account. The link you paste is used to find the file that page is already
        playing, and then to hand you a download. Savemov does not keep a copy of that video.
      </p>
      <section>
        <h2>The link</h2>
        <p className="mt-3">
          The address is sent to the service that reads the public page. It is not published, sold, or added to a profile,
          because there is no profile. The download link comes back with the response. Save the file on your device; we do
          not store it for you.
        </p>
      </section>
      <section>
        <h2>What the host may keep</h2>
        <p className="mt-3">
          The network that serves this website can keep ordinary connection logs for a short time, the way any site does.
          Those logs are not a copy of your video and are not a Savemov account.
        </p>
      </section>
      <section>
        <h2>Cookies and measurement</h2>
        <p className="mt-3">
          Savemov does not set analytics or advertising cookies. If that changes, this page will say what is collected and
          why, before it is switched on.
        </p>
      </section>
      <p>
        Privacy questions go to {CONTACT_EMAIL}. Copyright notices are described on the{" "}
        <Link href="/copyright/">copyright page</Link>.
      </p>
    </LegalPage>
  );
}
