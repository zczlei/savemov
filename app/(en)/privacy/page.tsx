import Link from "next/link";
import LegalPage, { legalMetadata } from "@/components/legal-page";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = legalMetadata(
  "Privacy",
  "How Savemov handles the link you paste, what the site does not store, and how to reach us about your information.",
  "/privacy/",
);

export default function Page() {
  return (
    <LegalPage title="Privacy Policy">
      <p className="text-ink/50">Last updated: October 13, 2026</p>
      <p>
        This policy describes how Savemov (&quot;we&quot;) handles information when you use savemov.com and our related
        mobile app (together, the &quot;Service&quot;). It also explains how that information is used, and how to contact
        us about it.
      </p>

      <section>
        <h2>1. Acceptance</h2>
        <p className="mt-3">
          Please read this policy before you use the Service. By using Savemov, you agree to the collection and use
          described below. If you do not agree, do not use the Service.
        </p>
      </section>

      <section>
        <h2>2. Changes</h2>
        <p className="mt-3">
          If this policy changes, the new text is posted on this page with a new &quot;Last updated&quot; date. Continuing
          to use the Service after that date means you accept the revised policy. If you do not accept it, stop using the
          Service.
        </p>
      </section>

      <section>
        <h2>3. Information we collect</h2>
        <p className="mt-3">Savemov does not ask you to create an account, and it does not ask for your name or email to download a video.</p>
        <ul className="mt-3">
          <li>
            The link you paste. It is sent so the Service can find the file the public page is already playing. It is
            not added to a profile, because there is no profile.
          </li>
          <li>
            Ordinary connection logs. The network that serves the site may keep, for a short time, the address of the
            page requested, the time, and the browser or device type. That is how a website stays up. Those logs are not
            a copy of your video.
          </li>
          <li>
            Messages you send us. If you email {CONTACT_EMAIL}, we have the address you wrote from and the message you
            sent, so we can reply.
          </li>
          <li>
            Cookies and similar technologies. We use them to see how you use the Service, including which features you
            open, how long you stay on a page, and whether a request returned an error. Some of these technologies also
            support interest-based advertising.
          </li>
          <li>
            Device information. This can include the kind of device (phone, tablet, or computer), an advertising
            identifier such as IDFA or AdID, the connection type, the operating system and version, the language setting,
            and the mobile carrier.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. How the information is used</h2>
        <p className="mt-3">
          We use what we collect to fetch the file behind a public link, to run the site and the app, and to read email
          you send us. We also use it as follows.
        </p>
        <p className="mt-3">
          <strong className="font-semibold text-ink">Advertising.</strong> Ad partners may use cookies and usage data to
          show banners and other ads, including ads based on interests. The providers are AdMob (Google LLC) and Facebook
          Audience Network (Meta Platforms, Inc.). You can also opt out of a third party&apos;s advertising cookies at
          the Network Advertising Initiative opt-out page.
        </p>
        <p className="mt-3">
          <strong className="font-semibold text-ink">App statistics.</strong> We use an internal analytics system for
          basic usage numbers (cookies and usage data). The app also uses Google Analytics for Firebase (Google LLC),
          which can record app opens, updates, first launches, device information, region, session counts, operating
          system, session length, and usage data. Firebase may share that with its other tools, such as crash reporting.
          You can limit some of this in the advertising settings on your phone.
        </p>
        <p className="mt-3">
          <strong className="font-semibold text-ink">Crash reports.</strong> Crashlytics (Google LLC) helps us see when
          the app fails. It may receive a coarse location, an advertising identifier, and the other data described in
          Google&apos;s own privacy policy.
        </p>
        <p className="mt-3">We do not sell the links you paste, and we do not publish them.</p>
      </section>

      <section>
        <h2>5. Videos</h2>
        <p className="mt-3">
          Savemov does not keep a copy of the video. The download link comes back with the response. Save the file on
          your device. We also cannot delete the video from the platform that published it.
        </p>
      </section>

      <section>
        <h2>6. Security</h2>
        <p className="mt-3">
          We take ordinary care to protect the information under our control. No transmission over the internet can be
          guaranteed completely secure. You send a link, or an email, at your own risk.
        </p>
      </section>

      <section>
        <h2>7. Where information is processed</h2>
        <p className="mt-3">
          The site and the service that reads a public page may operate outside the country you are in. Those places may
          have different privacy laws from yours. If you do not want a link processed that way, do not paste it here.
        </p>
      </section>

      <section>
        <h2>8. Third-party platforms</h2>
        <p className="mt-3">
          The Service reads public pages on other sites, such as Instagram, TikTok, Facebook, X, and the other platforms
          listed on the homepage. We do not control how those sites collect or use information. Read their own privacy
          settings before you copy a link from them.
        </p>
      </section>

      <section>
        <h2>9. Do Not Track</h2>
        <p className="mt-3">
          Some browsers send a Do Not Track signal. Savemov does not respond to that signal, because it does not use the
          signal to change what the page does.
        </p>
      </section>

      <section>
        <h2>10. How long information is kept</h2>
        <p className="mt-3">
          A pasted link is used to answer that request. Savemov does not keep it as a library of what you downloaded.
          Connection logs kept by the host last only as long as that host needs them to operate the site. Email you send
          us is kept long enough to handle the message, and longer if we need it for a copyright notice or a legal
          obligation.
        </p>
      </section>

      <section>
        <h2>11. Children</h2>
        <p className="mt-3">
          The Service is not directed at children under 13, and we do not knowingly collect personal information from
          them. If you believe a child has sent us personal information, email {CONTACT_EMAIL} and we will delete it.
        </p>
      </section>

      <section>
        <h2>12. People in the EEA, the UK, and Switzerland</h2>
        <p className="mt-3">
          If you use the Service from the European Economic Area, the United Kingdom, or Switzerland, Savemov is the
          controller of the information described above. We process a pasted link because you asked us to fetch that
          file. We process email because we need it to reply or to meet a legal notice. Advertising, app statistics, and
          crash reports are processed for our legitimate interest in running and improving the Service, or with your
          consent where the law requires it.
        </p>
        <p className="mt-3">
          Depending on where you live, you may ask us for access to personal information we hold about you, a correction,
          deletion, a restriction, or a copy you can take elsewhere. Email {CONTACT_EMAIL}. We may ask you to confirm you
          are the person the request is about. You can also complain to the supervisory authority where you live or work.
        </p>
      </section>

      <section>
        <h2>13. Contact</h2>
        <p className="mt-3">
          Questions about this policy go to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Copyright notices
          are described on the <Link href="/copyright/">copyright page</Link>.
        </p>
      </section>
    </LegalPage>
  );
}
