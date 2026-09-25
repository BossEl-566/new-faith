import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Camera,
  Church,
  Clock3,
  HeartHandshake,
  Megaphone,
  Mic2,
  Music2,
  Sparkles,
  UserRound,
  Users,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import { ministries, type Ministry } from "@/data/ministries";

export default function MinistriesPage() {
  return (
    <main>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative flex min-h-[540px] items-center overflow-hidden bg-church-blue-dark lg:min-h-[620px]">
        <Image
          src="/images/youth-group-photo.jpg"
          alt="New Christian Faith Ministry ministries"
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
                Find Your Place
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Grow. Serve.
              <br />
              Belong.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Church is more than attending a service. Discover a ministry,
              build meaningful relationships, grow in faith and use your gifts
              in service to God and others.
            </p>

            <a
              href="#explore"
              className="mt-9 inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-church-red px-7 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-church-red-dark hover:shadow-xl"
            >
              Explore Ministries
              <ArrowRight size={17} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 h-px bg-white/10" />
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="Life Together"
            title="There's A Ministry For You"
            description="Our ministries create opportunities for people of different ages, gifts and stages of life to grow spiritually, build relationships and actively participate in the work of the church."
          />

          <div className="grid grid-cols-2 gap-4">
            <MinistryStat
              value="8"
              label="Ministry Areas"
            />

            <MinistryStat
              value="All"
              label="Generations"
            />

            <MinistryStat
              value="Faith"
              label="Our Foundation"
            />

            <MinistryStat
              value="Service"
              label="Our Response"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK NAVIGATION
      ====================================================== */}
      <section
        id="explore"
        className="border-y border-slate-100 bg-slate-50"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-7 sm:px-8 lg:px-10 xl:px-12">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {ministries.map((ministry) => (
              <a
                key={ministry.slug}
                href={`#${ministry.slug}`}
                className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition-all hover:border-church-red hover:bg-church-red hover:text-white"
              >
                {ministry.shortName}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MINISTRY OVERVIEW GRID
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="Explore"
            title="Our Ministry Family"
            description="Every ministry contributes to the spiritual growth, fellowship and mission of the church."
            align="center"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {ministries.map((ministry, index) => (
              <a
                key={ministry.slug}
                href={`#${ministry.slug}`}
                className="group overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden bg-church-blue-dark">
                  {ministry.image ? (
                    <Image
                      src={ministry.image}
                      alt={ministry.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <PhotoPlaceholder
                      label="Ministry photo coming soon"
                      icon={getMinistryIcon(index)}
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                  <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-church-blue-dark transition-transform group-hover:translate-x-1">
                    <ArrowRight size={17} />
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-lg font-semibold text-church-blue-dark">
                    {ministry.name}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {ministry.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DETAILED MINISTRY SECTIONS
      ====================================================== */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] space-y-20 px-5 sm:px-8 lg:space-y-28 lg:px-10 xl:px-12">
          {ministries.map((ministry, index) => (
            <MinistrySection
              key={ministry.slug}
              ministry={ministry}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* =====================================================
          SERVE CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-church-blue-dark py-20 sm:py-24 lg:py-28">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/5" />
        <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-15 w-15 items-center justify-center rounded-2xl bg-church-red text-white">
              <HeartHandshake size={28} />
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-church-red">
              Get Involved
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Your Gifts Have A Place In God's Work.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65">
              Whether your passion is worship, media, outreach, children,
              prayer, mentoring or simply serving wherever needed, there is an
              opportunity to become part of the work.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-lg bg-church-red px-7 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-church-red-dark"
              >
                Join A Ministry
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/plan-a-visit"
                className="inline-flex min-h-13 items-center justify-center rounded-lg border border-white/20 px-7 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-church-blue-dark"
              >
                Visit The Church
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function MinistrySection({
  ministry,
  index,
}: {
  ministry: Ministry;
  index: number;
}) {
  const reverse = index % 2 !== 0;

  return (
    <article
      id={ministry.slug}
      className="scroll-mt-28"
    >
      <div
        className={`grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 ${
          reverse ? "" : ""
        }`}
      >
        {/* Images */}
        <div className={reverse ? "lg:order-2" : ""}>
          <MinistryImages ministry={ministry} />
        </div>

        {/* Content */}
        <div className={reverse ? "lg:order-1" : ""}>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-[0.2em] text-church-red">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="h-px w-8 bg-church-red" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-church-red">
              Ministry
            </p>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-church-blue-dark sm:text-4xl">
            {ministry.name}
          </h2>

          <p className="mt-5 text-base font-medium leading-8 text-slate-700">
            {ministry.description}
          </p>

          <p className="mt-5 text-sm leading-8 text-slate-600">
            {ministry.longDescription}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <MinistryInfo
              icon={<UserRound size={18} />}
              label="Ministry Leader"
              value={
                ministry.leader ??
                "Leadership information coming soon"
              }
            />

            <MinistryInfo
              icon={<Clock3 size={18} />}
              label="Meeting Schedule"
              value={
                ministry.meeting ??
                "Schedule information coming soon"
              }
            />
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-church-blue-dark transition-colors hover:text-church-red"
          >
            Ask About This Ministry
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}

function MinistryImages({
  ministry,
}: {
  ministry: Ministry;
}) {
  if (ministry.gallery.length >= 3) {
    return (
      <div className="grid grid-cols-2 gap-3">
        <div className="relative col-span-2 h-[300px] overflow-hidden rounded-[26px] sm:h-[350px]">
          <Image
            src={ministry.gallery[0]}
            alt={ministry.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>

        {ministry.gallery.slice(1, 3).map((image, index) => (
          <div
            key={image}
            className="relative h-44 overflow-hidden rounded-[20px] sm:h-52"
          >
            <Image
              src={image}
              alt={`${ministry.name} ${index + 2}`}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>
    );
  }

  if (ministry.gallery.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-3">
        <div className="relative col-span-2 h-[390px] overflow-hidden rounded-[26px] sm:col-span-1 sm:h-[500px]">
          <Image
            src={ministry.gallery[0]}
            alt={ministry.name}
            fill
            sizes="(max-width: 1024px) 100vw, 25vw"
            className="object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>

        <div className="relative col-span-2 h-[300px] overflow-hidden rounded-[26px] sm:col-span-1 sm:mt-12 sm:h-[440px]">
          <Image
            src={ministry.gallery[1]}
            alt={`${ministry.name} worship`}
            fill
            sizes="(max-width: 1024px) 100vw, 25vw"
            className="object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
      </div>
    );
  }

  if (ministry.image) {
    return (
      <div className="relative h-[430px] overflow-hidden rounded-[28px] sm:h-[520px]">
        <Image
          src={ministry.image}
          alt={ministry.name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
      </div>
    );
  }

  return (
    <div className="relative h-[430px] overflow-hidden rounded-[28px] bg-church-blue-dark sm:h-[520px]">
      <PhotoPlaceholder
        label="Ministry photography coming soon"
        icon={<Church size={31} />}
      />
    </div>
  );
}

function MinistryInfo({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-2 text-church-red">
        {icon}

        <p className="text-[11px] font-bold uppercase tracking-[0.16em]">
          {label}
        </p>
      </div>

      <p className="mt-3 text-sm font-medium leading-6 text-church-blue-dark">
        {value}
      </p>
    </div>
  );
}

function MinistryStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
      <p className="text-2xl font-bold text-church-blue-dark">
        {value}
      </p>

      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>
    </div>
  );
}

function PhotoPlaceholder({
  label,
  icon,
}: {
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-church-blue-dark to-church-blue">
      <div className="px-6 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
          {icon}
        </div>

        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
          {label}
        </p>
      </div>
    </div>
  );
}

function getMinistryIcon(index: number) {
  const icons = [
    <Users key="users" size={28} />,
    <Sparkles key="sparkles" size={28} />,
    <HeartHandshake key="heart" size={28} />,
    <BookOpen key="book" size={28} />,
    <Music2 key="music" size={28} />,
    <Camera key="camera" size={28} />,
    <Megaphone key="megaphone" size={28} />,
    <Church key="church" size={28} />,
  ];

  return icons[index] ?? <Church size={28} />;
}