import PinterestPage, { pinterestMetadata } from "@/components/pinterest-page";
import { PT, type FormCopy } from "@/lib/copy";
import { PIN_PT } from "@/lib/pinterest-copy";

export const metadata = pinterestMetadata(PIN_PT);

const FORM: FormCopy = {
  ...PT.form,
  label: PIN_PT.formLabel,
  placeholder: PIN_PT.formPlaceholder,
  button: PIN_PT.formButton,
};

export default function Page() {
  return <PinterestPage c={PIN_PT} home={PT} form={FORM} />;
}
