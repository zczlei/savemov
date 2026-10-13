import PinterestPage, { pinterestMetadata } from "@/components/pinterest-page";
import { ES, type FormCopy } from "@/lib/copy";
import { PIN_ES } from "@/lib/pinterest-copy";

export const metadata = pinterestMetadata(PIN_ES);

const FORM: FormCopy = {
  ...ES.form,
  label: PIN_ES.formLabel,
  placeholder: PIN_ES.formPlaceholder,
  button: PIN_ES.formButton,
};

export default function Page() {
  return <PinterestPage c={PIN_ES} home={ES} form={FORM} />;
}
