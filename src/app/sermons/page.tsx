import type { Metadata } from "next";

import SermonsPage from "@/components/sermons/SermonsPage";

export const metadata: Metadata = {
  title: "Sermons",
  description:
    "Watch, listen to and study sermons and teachings from New Christian Faith Ministry.",
};

export default function Sermons() {
  return <SermonsPage />;
}