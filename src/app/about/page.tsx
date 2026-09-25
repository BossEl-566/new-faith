import type { Metadata } from "next";

import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the history, vision, mission, founders and leadership of New Christian Faith Ministry.",
};

export default function About() {
  return <AboutPage />;
}