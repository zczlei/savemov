import TiktokPage, { tiktokMetadata } from "@/components/tiktok-page";
import { ES, type FormCopy } from "@/lib/copy";
import { TIKTOK_ES } from "@/lib/tiktok-copy";

export const metadata = tiktokMetadata(TIKTOK_ES);

const FORM: FormCopy = {
  ...ES.form,
  label: TIKTOK_ES.formLabel,
  placeholder: TIKTOK_ES.formPlaceholder,
  button: TIKTOK_ES.formButton,
};

export default function Page() {
  return <TiktokPage c={TIKTOK_ES} home={ES} form={FORM} />;
}
