import PinterestPage, { pinterestMetadata } from "@/components/pinterest-page";
import { EN, type FormCopy } from "@/lib/copy";
import { PIN_EN } from "@/lib/pinterest-copy";

export const metadata = pinterestMetadata(PIN_EN);

const FORM: FormCopy = {
  ...EN.form,
  label: PIN_EN.formLabel,
  placeholder: PIN_EN.formPlaceholder,
  button: PIN_EN.formButton,
};

export default function Page() {
  return <PinterestPage c={PIN_EN} home={EN} form={FORM} />;
}
