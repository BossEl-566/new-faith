import type { Metadata } from "next";

import GivingPage from "@/components/giving/GivingPage";

export const metadata: Metadata = {
  title: "Giving",
  description:
    "Learn how to support the work and ministry of New Christian Faith Ministry through verified giving methods.",
};

export default function Give() {
  return <GivingPage />;
}