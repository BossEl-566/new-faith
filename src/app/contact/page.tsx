import type { Metadata } from "next";

import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact New Christian Faith Ministry, find our church locations and connect with our official social platforms.",
};

export default function Contact() {
  return <ContactPage />;
}