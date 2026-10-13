import type { Metadata } from "next";
import HomePage from "@/components/home-page";
import { PT, buildMetadata } from "@/lib/copy";

export const metadata: Metadata = buildMetadata(PT);

export default function Page() {
  return <HomePage c={PT} />;
}
