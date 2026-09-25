export type SermonType = "video" | "audio" | "notes";

export type Sermon = {
  id: string;
  title: string;
  speaker: string;
  date: string;
  scripture?: string;
  description?: string;
  type: SermonType;
  thumbnail?: string | null;
  youtubeUrl?: string | null;
  audioUrl?: string | null;
  notesUrl?: string | null;
  featured?: boolean;
};

export const sermons: Sermon[] = [];

/*
  ============================================================
  WHEN REAL SERMONS ARE AVAILABLE, ADD THEM LIKE THIS:

  {
    id: "faith-in-christ",
    title: "Faith In Christ",
    speaker: "Ps Nicolas Yeboah",
    date: "2026-09-20",
    scripture: "Hebrews 12:1–2",
    description:
      "A message about remaining rooted in Christ through every season.",
    type: "video",
    thumbnail: "/images/sermons/faith-in-christ.jpg",
    youtubeUrl: "https://youtube.com/watch?v=...",
    audioUrl: null,
    notesUrl: null,
    featured: true,
  }

  Do NOT leave sample sermons in production.
  ============================================================
*/

export const sermonFormats = [
  {
    title: "Video Messages",
    description:
      "Watch sermons, teachings, worship services and ministry messages from New Christian Faith Ministry.",
    type: "video",
  },
  {
    title: "Audio Messages",
    description:
      "Listen to messages wherever you are when downloadable or streamed audio sermons become available.",
    type: "audio",
  },
  {
    title: "Sermon Notes",
    description:
      "Download teaching notes and supporting PDF resources as they are made available by the church.",
    type: "notes",
  },
];