import type { Metadata } from "next";

import MinistriesPage from "@/components/ministries/MinistriesPage";

export const metadata: Metadata = {
  title: "Ministries",
  description:
    "Explore the ministries of New Christian Faith Ministries including youth, men, women, children, music, media, evangelism and prayer.",
};

export default function Ministries() {
  return <MinistriesPage />;
}