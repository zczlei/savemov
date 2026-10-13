import SnapchatPage, { snapchatMetadata } from "@/components/snapchat-page";
import { EN, type FormCopy } from "@/lib/copy";
import { VK_EN } from "@/lib/vk-copy";

export const metadata = snapchatMetadata(VK_EN);

const FORM: FormCopy = {
  ...EN.form,
  label: VK_EN.formLabel,
  placeholder: VK_EN.formPlaceholder,
  button: VK_EN.formButton,
};

export default function Page() {
  return <SnapchatPage c={VK_EN} home={EN} form={FORM} />;
}
