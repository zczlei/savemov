import { rootMetadata, rootViewport } from "@/lib/root-document";

export const metadata = rootMetadata;
export const viewport = rootViewport;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
