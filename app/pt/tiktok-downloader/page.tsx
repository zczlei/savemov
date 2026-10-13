import TiktokPage, { tiktokMetadata } from "@/components/tiktok-page";
import { PT, type FormCopy } from "@/lib/copy";
import { TIKTOK_PT } from "@/lib/tiktok-copy";

export const metadata = tiktokMetadata(TIKTOK_PT);

const FORM: FormCopy = {
  ...PT.form,
  label: TIKTOK_PT.formLabel,
  placeholder: TIKTOK_PT.formPlaceholder,
  button: TIKTOK_PT.formButton,
};

export default function Page() {
  return <TiktokPage c={TIKTOK_PT} home={PT} form={FORM} />;
}
