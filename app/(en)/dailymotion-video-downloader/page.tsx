import SnapchatPage, { snapchatMetadata } from "@/components/snapchat-page";
import { EN, type FormCopy } from "@/lib/copy";
import { DM_EN } from "@/lib/dailymotion-copy";

export const metadata = snapchatMetadata(DM_EN);

const FORM: FormCopy = {
  ...EN.form,
  label: DM_EN.formLabel,
  placeholder: DM_EN.formPlaceholder,
  button: DM_EN.formButton,
};

export default function Page() {
  return <SnapchatPage c={DM_EN} home={EN} form={FORM} />;
}
