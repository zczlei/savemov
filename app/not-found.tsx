import { NotFoundView } from "@/components/not-found-view";
import { RootDocument } from "@/lib/root-document";
import "./globals.css";

export default function NotFound() {
  return (
    <RootDocument lang="en">
      <NotFoundView />
    </RootDocument>
  );
}
