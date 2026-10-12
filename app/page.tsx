import type { Metadata } from "next";
import HomePage from "@/components/home-page";
import { EN, buildMetadata } from "@/lib/copy";

export const metadata: Metadata = buildMetadata(EN);

export default function Page() {
  return <HomePage c={EN} />;
}
