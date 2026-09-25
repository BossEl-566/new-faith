import type { Metadata } from "next";

import EventsPage from "@/components/events/EventsPage";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Discover upcoming services, conventions, ministry programmes and special events at New Christian Faith Ministry.",
};

export default function Events() {
  return <EventsPage />;
}