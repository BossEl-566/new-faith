"use client";

import Image from "next/image";
import {
  BookOpenText,
  CalendarDays,
  Download,
  FileText,
  Headphones,
  Play,
  Search,
  UserRound,
} from "lucide-react";
import { useMemo, useState } from "react";

import type { Sermon, SermonType } from "@/data/sermons";

type SermonLibraryProps = {
  sermons: Sermon[];
  youtubeUrl: string;
};

type Filter = "all" | SermonType;

const filters: {
  label: string;
  value: Filter;
}[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Video",
    value: "video",
  },
  {
    label: "Audio",
    value: "audio",
  },
  {
    label: "Notes",
    value: "notes",
  },
];

export default function SermonLibrary({
  sermons,
  youtubeUrl,
}: SermonLibraryProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const filteredSermons = useMemo(() => {
    return sermons.filter((sermon) => {
      const matchesFilter =
        filter === "all" || sermon.type === filter;

      const searchValue = query.trim().toLowerCase();

      const matchesSearch =
        !searchValue ||
        sermon.title.toLowerCase().includes(searchValue) ||
        sermon.speaker.toLowerCase().includes(searchValue) ||
        sermon.scripture?.toLowerCase().includes(searchValue);

      return matchesFilter && matchesSearch;
    });
  }, [filter, query, sermons]);

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col gap-5 rounded-[24px] border border-slate-200 bg-white p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                filter === item.value
                  ? "bg-church-blue-dark text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-church-blue-light hover:text-church-blue-dark"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <label className="relative block w-full lg:max-w-sm">
          <span className="sr-only">
            Search sermons
          </span>

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search messages..."
            className="h-12 w-full rounded-full border border-slate-200 bg-slate-50 pl-11 pr-5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-church-blue focus:bg-white focus:ring-4 focus:ring-church-blue/10"
          />
        </label>
      </div>

      {/* Empty overall library */}
      {sermons.length === 0 ? (
        <SermonEmptyState youtubeUrl={youtubeUrl} />
      ) : filteredSermons.length === 0 ? (
        <div className="mt-10 rounded-[28px] border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
          <Search
            size={30}
            className="mx-auto text-slate-400"
          />

          <h3 className="mt-5 text-xl font-semibold text-church-blue-dark">
            No messages found
          </h3>

          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
            Try another search term or choose a different media filter.
          </p>

          <button
            type="button"
            onClick={() => {
              setFilter("all");
              setQuery("");
            }}
            className="mt-6 text-sm font-semibold text-church-red"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredSermons.map((sermon) => (
            <SermonCard
              key={sermon.id}
              sermon={sermon}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function SermonCard({
  sermon,
}: {
  sermon: Sermon;
}) {
  return (
    <article className="group overflow-hidden rounded-[26px] border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-60 overflow-hidden bg-church-blue-dark">
        {sermon.thumbnail ? (
          <Image
            src={sermon.thumbnail}
            alt={sermon.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-church-blue-dark to-church-blue">
            {getTypeIcon(sermon.type, 32)}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-church-blue-dark backdrop-blur-md">
          {sermon.type}
        </div>

        {sermon.type === "video" && sermon.youtubeUrl ? (
          <a
            href={sermon.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch ${sermon.title}`}
            className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-church-red shadow-xl transition-transform hover:scale-110"
          >
            <Play
              size={19}
              fill="currentColor"
            />
          </a>
        ) : null}
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <UserRound size={14} />
            {sermon.speaker}
          </span>

          <span className="flex items-center gap-1.5">
            <CalendarDays size={14} />
            {formatDate(sermon.date)}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-semibold leading-snug text-church-blue-dark">
          {sermon.title}
        </h3>

        {sermon.scripture ? (
          <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-church-red">
            <BookOpenText size={15} />
            {sermon.scripture}
          </p>
        ) : null}

        {sermon.description ? (
          <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
            {sermon.description}
          </p>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-2">
          {sermon.youtubeUrl ? (
            <MediaButton
              href={sermon.youtubeUrl}
              icon={<Play size={15} />}
              label="Watch"
            />
          ) : null}

          {sermon.audioUrl ? (
            <MediaButton
              href={sermon.audioUrl}
              icon={<Headphones size={15} />}
              label="Listen"
            />
          ) : null}

          {sermon.notesUrl ? (
            <MediaButton
              href={sermon.notesUrl}
              icon={<Download size={15} />}
              label="Notes"
            />
          ) : null}
        </div>
      </div>
    </article>
  );
}

function MediaButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-church-blue-dark transition-colors hover:bg-church-red hover:text-white"
    >
      {icon}
      {label}
    </a>
  );
}

function SermonEmptyState({
  youtubeUrl,
}: {
  youtubeUrl: string;
}) {
  return (
    <div className="mt-10 overflow-hidden rounded-[30px] border border-slate-100 bg-slate-50">
      <div className="grid lg:grid-cols-[1fr_0.85fr]">
        <div className="p-8 sm:p-10 lg:p-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-church-red">
            Sermon Library
          </p>

          <h3 className="mt-4 max-w-xl text-3xl font-bold leading-tight text-church-blue-dark">
            Our Online Message Library Is Being Prepared.
          </h3>

          <p className="mt-5 max-w-xl text-sm leading-8 text-slate-600">
            Individual sermon titles, speakers, dates, audio recordings and
            notes will appear here as they are supplied and organised by the
            church.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-8 text-slate-600">
            In the meantime, you can watch available ministry content through
            our official YouTube channel.
          </p>

          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-church-red px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-church-red-dark"
          >
            <Play
              size={16}
              fill="currentColor"
            />
            Visit YouTube Channel
          </a>
        </div>

        <div className="grid grid-cols-3 border-t border-slate-200 lg:grid-cols-1 lg:border-l lg:border-t-0">
          <EmptyFormat
            icon={<Play size={20} />}
            title="Video"
          />

          <EmptyFormat
            icon={<Headphones size={20} />}
            title="Audio"
          />

          <EmptyFormat
            icon={<FileText size={20} />}
            title="Notes"
          />
        </div>
      </div>
    </div>
  );
}

function EmptyFormat({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 border-r border-slate-200 px-4 py-8 last:border-r-0 lg:flex-row lg:justify-start lg:border-b lg:border-r-0 lg:px-8 lg:last:border-b-0">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-church-blue-light text-church-blue-dark">
        {icon}
      </div>

      <p className="text-sm font-semibold text-church-blue-dark">
        {title}
      </p>
    </div>
  );
}

function getTypeIcon(
  type: SermonType,
  size: number
) {
  if (type === "audio") {
    return (
      <Headphones
        size={size}
        className="text-white"
      />
    );
  }

  if (type === "notes") {
    return (
      <FileText
        size={size}
        className="text-white"
      />
    );
  }

  return (
    <Play
      size={size}
      className="text-white"
    />
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}