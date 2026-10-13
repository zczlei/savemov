import InstagramPage, { instagramMetadata } from "@/components/instagram-page";
import { ES, type FormCopy } from "@/lib/copy";
import { IG_ES } from "@/lib/instagram-copy";

export const metadata = instagramMetadata(IG_ES);

const FORM: FormCopy = {
  ...ES.form,
  label: IG_ES.formLabel,
  placeholder: IG_ES.formPlaceholder,
  button: IG_ES.formButton,
};

export default function Page() {
  return <InstagramPage c={IG_ES} home={ES} form={FORM} />;
}
