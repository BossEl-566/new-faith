import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Church,
  Clock3,
  MapPin,
  Megaphone,
  Star,
  Users,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import {
  events,
  eventTypes,
  type ChurchEvent,
} from "@/data/events";

export default function EventsPage() {
  const upcomingEvents = events.filter(
    (event) => event.status === "upcoming"
  );

  const pastEvents = events.filter(
    (event) => event.status === "past"
  );

  const featuredEvent =
    upcomingEvents.find((event) => event.featured) ??
    upcomingEvents[0] ??
    null;

  return (
    <main>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative flex min-h-[540px] items-center overflow-hidden bg-church-blue-dark lg:min-h-[620px]">
        <Image
          src="/images/street-envagelism2.jpg"
          alt="Events at New Christian Faith Ministry"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#041a35]/95 via-[#041a35]/82 to-[#041a35]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-church-red" />

              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/80">
                Church Events
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Gather.
              <br />
              Worship. Grow.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Stay informed about church services, conventions, ministry
              gatherings, outreach activities and special moments in the life
              of New Christian Faith Ministry.
            </p>

            <a
              href="#upcoming"
              className="mt-9 inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-church-red px-7 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-church-red-dark hover:shadow-xl"
            >
              View Upcoming Events
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="What's Happening"
            title="Moments That Bring The Church Together"
            description="From regular ministry gatherings to major conventions and outreach activities, church events create opportunities for worship, fellowship, teaching, service and spiritual growth."
          />

          <div className="grid grid-cols-2 gap-4">
            <EventStat
              icon={<Church size={21} />}
              title="Worship"
            />

            <EventStat
              icon={<Users size={21} />}
              title="Fellowship"
            />

            <EventStat
              icon={<Megaphone size={21} />}
              title="Outreach"
            />

            <EventStat
              icon={<Star size={21} />}
              title="Special Events"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED EVENT
      ====================================================== */}
      <section className="bg-church-blue-dark py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="Featured"
            title="What's Coming Up"
            description="Major upcoming gatherings and church-wide events will be highlighted here."
            light
          />

          <div className="mt-12">
            {featuredEvent ? (
              <FeaturedEvent event={featuredEvent} />
            ) : (
              <FeaturedEmptyState />
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          UPCOMING EVENTS
      ====================================================== */}
      <section
        id="upcoming"
        className="scroll-mt-28 bg-white py-20 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Save The Date"
              title="Upcoming Events"
              description="Find upcoming church gatherings, ministry programmes, conventions and special services."
            />

            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-church-blue-light px-4 py-2 text-xs font-semibold text-church-blue-dark">
              <CalendarDays size={15} />
              {upcomingEvents.length} Upcoming
            </div>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {upcomingEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                />
              ))}
            </div>
          ) : (
            <EventsEmptyState />
          )}
        </div>
      </section>

      {/* =====================================================
          EVENT TYPES
      ====================================================== */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="Church Calendar"
            title="More Than One Kind Of Gathering"
            description="Our events calendar is designed to accommodate the different ways the church gathers, serves and grows."
            align="center"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {eventTypes.map((type, index) => {
              const icons = [
                <Church key="service" size={24} />,
                <Star key="conference" size={24} />,
                <Users key="ministry" size={24} />,
                <Megaphone key="outreach" size={24} />,
              ];

              return (
                <article
                  key={type.title}
                  className="group rounded-[24px] border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-church-blue-light text-church-blue-dark transition-colors group-hover:bg-church-red group-hover:text-white">
                    {icons[index]}
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-church-blue-dark">
                    {type.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {type.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PAST EVENTS
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Looking Back"
              title="Past Events"
              description="Past events can remain available here as a record of significant gatherings and moments in church life."
            />

            <Link
              href="/gallery"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-church-blue-dark transition-colors hover:text-church-red"
            >
              Explore Church Gallery
              <ArrowRight size={16} />
            </Link>
          </div>

          {pastEvents.length > 0 ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {pastEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                />
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-[28px] border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center">
              <CalendarDays
                size={29}
                className="mx-auto text-slate-400"
              />

              <h3 className="mt-5 text-xl font-semibold text-church-blue-dark">
                Past event archive coming soon
              </h3>

              <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-500">
                Past church events will appear here as event information and
                historical material are organised.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          DON'T MISS WHAT'S NEXT
      ====================================================== */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="relative overflow-hidden rounded-[32px] bg-church-blue-dark px-7 py-14 sm:px-10 lg:px-16 lg:py-16">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/5" />
            <div className="absolute -bottom-28 right-28 h-80 w-80 rounded-full border border-white/5" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <Bell
                  size={30}
                  className="text-church-red"
                />

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-church-red">
                  Stay Informed
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Don't Miss What's Happening In The Church.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-8 text-white/65">
                  Follow our official social channels for announcements,
                  ministry activities, service updates and upcoming events.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-lg bg-church-red px-7 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-church-red-dark"
              >
                Contact The Church
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="bg-church-red py-16 sm:py-20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 xl:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">
              You Are Welcome
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white lg:text-4xl">
              Join us for worship and fellowship.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
              Plan your first visit and discover New Christian Faith Ministry
              in person.
            </p>
          </div>

          <Link
            href="/plan-a-visit"
            className="inline-flex min-h-13 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-7 text-sm font-semibold text-church-red transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Plan A Visit
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function FeaturedEvent({
  event,
}: {
  event: ChurchEvent;
}) {
  return (
    <article className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.06]">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[420px]">
          {event.flyer ? (
            <Image
              src={event.flyer}
              alt={event.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-church-blue to-church-blue-dark">
              <div className="text-center">
                <CalendarDays
                  size={42}
                  className="mx-auto text-white/60"
                />

                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Event Artwork Coming Soon
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center p-8 sm:p-10 lg:p-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-church-red">
              {event.category}
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              {event.name}
            </h2>

            <p className="mt-5 text-sm leading-8 text-white/65">
              {event.description}
            </p>

            <div className="mt-7 space-y-3">
              <EventMeta
                icon={<CalendarDays size={17} />}
                value={formatEventDate(event.date, event.endDate)}
              />

              {event.time ? (
                <EventMeta
                  icon={<Clock3 size={17} />}
                  value={event.time}
                />
              ) : null}

              {event.venue ? (
                <EventMeta
                  icon={<MapPin size={17} />}
                  value={event.venue}
                />
              ) : null}
            </div>

            {event.registrationUrl ? (
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-church-red px-6 text-sm font-semibold text-white transition-all hover:bg-church-red-dark"
              >
                Register
                <ArrowRight size={16} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

function FeaturedEmptyState() {
  return (
    <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05]">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex min-h-[330px] items-center justify-center bg-white/[0.03] p-8">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
              <CalendarDays
                size={31}
                className="text-church-red"
              />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              Featured Event
            </p>
          </div>
        </div>

        <div className="flex items-center p-8 sm:p-10 lg:p-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-church-red">
              Coming Soon
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-tight text-white">
              Upcoming Event Information Is Being Prepared.
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-8 text-white/65">
              Featured church events will appear here when official dates,
              venues, times and event artwork are supplied.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventsEmptyState() {
  return (
    <div className="mt-12 rounded-[30px] border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-church-blue-light text-church-blue-dark">
        <CalendarDays size={27} />
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-church-blue-dark">
        New events will appear here
      </h3>

      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
        Official event dates, times, venues and flyers have not yet been added
        to the website. Check back for future church activities.
      </p>
    </div>
  );
}

function EventCard({
  event,
}: {
  event: ChurchEvent;
}) {
  return (
    <article className="group overflow-hidden rounded-[26px] border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden bg-church-blue-dark">
        {event.flyer ? (
          <Image
            src={event.flyer}
            alt={event.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-church-blue-dark to-church-blue">
            <CalendarDays
              size={34}
              className="text-white/60"
            />
          </div>
        )}

        <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-church-blue-dark backdrop-blur-md">
          {event.category}
        </div>
      </div>

      <div className="p-6">
        <p className="text-xs font-semibold text-church-red">
          {formatEventDate(event.date, event.endDate)}
        </p>

        <h3 className="mt-3 text-xl font-semibold leading-snug text-church-blue-dark">
          {event.name}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
          {event.description}
        </p>

        <div className="mt-5 space-y-2">
          {event.time ? (
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Clock3 size={14} />
              {event.time}
            </div>
          ) : null}

          {event.venue ? (
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin size={14} />
              {event.venue}
            </div>
          ) : null}
        </div>

        {event.registrationUrl ? (
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-church-blue-dark transition-colors hover:text-church-red"
          >
            Event Details
            <ArrowRight size={16} />
          </a>
        ) : null}
      </div>
    </article>
  );
}

function EventStat({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
      <div className="text-church-red">
        {icon}
      </div>

      <p className="mt-4 text-sm font-semibold text-church-blue-dark">
        {title}
      </p>
    </div>
  );
}

function EventMeta({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 text-sm text-white/70">
      <span className="text-church-red">
        {icon}
      </span>

      {value}
    </div>
  );
}

function formatEventDate(
  date: string,
  endDate?: string | null
) {
  const format = (value: string) =>
    new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(`${value}T00:00:00`));

  if (!endDate) {
    return format(date);
  }

  return `${format(date)} – ${format(endDate)}`;
}