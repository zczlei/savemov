import "../globals.css";
import { RootDocument, rootMetadata, rootViewport } from "@/lib/root-document";

export const metadata = rootMetadata;
export const viewport = rootViewport;

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
