import type { Metadata } from "next";

import GalleryPage from "@/components/gallery/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore photographs from worship, ministries, outreach and church life at New Christian Faith Ministry.",
};

export default function Gallery() {
  return <GalleryPage />;
}