export type ChurchEvent = {
  id: string;
  name: string;
  date: string;
  endDate?: string | null;
  time: string | null;
  venue: string | null;
  description: string;
  flyer: string | null;
  registrationUrl?: string | null;
  category:
    | "Service"
    | "Conference"
    | "Convention"
    | "Youth"
    | "Prayer"
    | "Outreach"
    | "Anniversary"
    | "Other";
  featured?: boolean;
  status: "upcoming" | "past";
};

export const events: ChurchEvent[] = [];

/*
  ============================================================
  ADD REAL EVENTS LIKE THIS WHEN THE CHURCH PROVIDES THEM:

  {
    id: "annual-convention-2026",
    name: "Annual Convention 2026",
    date: "2026-11-12",
    endDate: "2026-11-15",
    time: "6:00 PM",
    venue: "New Christian Faith Ministry, Kwashieman",
    description:
      "Real description supplied by the church.",
    flyer: "/images/events/annual-convention-2026.jpg",
    registrationUrl: null,
    category: "Convention",
    featured: true,
    status: "upcoming",
  }

  Never leave sample events in production.
  ============================================================
*/

export const eventTypes = [
  {
    title: "Special Services",
    description:
      "Special worship gatherings, thanksgiving services and other church-wide services.",
  },
  {
    title: "Conferences & Conventions",
    description:
      "Teaching, worship and fellowship gatherings organised for spiritual growth and renewal.",
  },
  {
    title: "Ministry Events",
    description:
      "Activities organised by youth, men, women, children and other church ministries.",
  },
  {
    title: "Outreach",
    description:
      "Evangelism, community outreach and activities that take the gospel beyond the church walls.",
  },
];