import SnapchatPage, { snapchatMetadata } from "@/components/snapchat-page";
import { EN, type FormCopy } from "@/lib/copy";
import { SNAP_EN } from "@/lib/snapchat-copy";

export const metadata = snapchatMetadata(SNAP_EN);

const FORM: FormCopy = {
  ...EN.form,
  label: SNAP_EN.formLabel,
  placeholder: SNAP_EN.formPlaceholder,
  button: SNAP_EN.formButton,
};

export default function Page() {
  return <SnapchatPage c={SNAP_EN} home={EN} form={FORM} />;
}
