import InstagramPage, { instagramMetadata } from "@/components/instagram-page";
import { PT, type FormCopy } from "@/lib/copy";
import { IG_PT } from "@/lib/instagram-copy";

export const metadata = instagramMetadata(IG_PT);

const FORM: FormCopy = {
  ...PT.form,
  label: IG_PT.formLabel,
  placeholder: IG_PT.formPlaceholder,
  button: IG_PT.formButton,
};

export default function Page() {
  return <InstagramPage c={IG_PT} home={PT} form={FORM} />;
}
