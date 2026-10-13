import type { Metadata } from "next";
import HomePage from "@/components/home-page";
import { ES, buildMetadata } from "@/lib/copy";

export const metadata: Metadata = buildMetadata(ES);

export default function Page() {
  return <HomePage c={ES} />;
}
