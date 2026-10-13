import InstagramPage, { instagramMetadata } from "@/components/instagram-page";
import { EN, type FormCopy } from "@/lib/copy";
import { IG_EN } from "@/lib/instagram-copy";

export const metadata = instagramMetadata(IG_EN);

const FORM: FormCopy = {
  ...EN.form,
  label: IG_EN.formLabel,
  placeholder: IG_EN.formPlaceholder,
  button: IG_EN.formButton,
};

export default function Page() {
  return <InstagramPage c={IG_EN} home={EN} form={FORM} />;
}
