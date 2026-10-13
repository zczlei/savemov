import TiktokPage, { tiktokMetadata } from "@/components/tiktok-page";
import { EN, type FormCopy } from "@/lib/copy";
import { TIKTOK_EN } from "@/lib/tiktok-copy";

export const metadata = tiktokMetadata(TIKTOK_EN);

const FORM: FormCopy = {
  ...EN.form,
  label: TIKTOK_EN.formLabel,
  placeholder: TIKTOK_EN.formPlaceholder,
  button: TIKTOK_EN.formButton,
};

export default function Page() {
  return <TiktokPage c={TIKTOK_EN} home={EN} form={FORM} />;
}
