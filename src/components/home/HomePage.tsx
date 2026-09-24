import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Church,
  Flame,
  Heart,
  MapPin,
  Play,
  Sparkles,
} from "lucide-react";

import HeroCarousel from "@/components/home/HeroCarousel";
import SectionHeading from "@/components/ui/SectionHeading";
import { church } from "@/data/church";
import {
  founders,
  galleryPreview,
  journey,
  ministries,
} from "@/data/home";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <HeroCarousel />

      {/* =====================================================
          ABOUT / WELCOME
      ====================================================== */}
      <section id="about" className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10 xl:px-12">
          <div>
            <SectionHeading
              eyebrow="Welcome Home"
              title="A Journey Of Faith, Resilience & Divine Direction"
              description="Our story is a testament to unwavering faith and the sustaining grace of God through every season."
            />

            <div className="mt-8 space-y-5 text-[15px] leading-8 text-slate-600">
              <p>
                New Christian Faith Ministry began through a distinct divine
                calling after separating from its mother denomination,
                Christo Asafo. Through sacrifice, unexpected challenges,
                relocations and seasons of growth, God has continued to guide
                and sustain the ministry.
              </p>

              <p>
                At the heart of our church is an unwavering commitment to the
                Holy Spirit and the true, undiluted Word of God. Our faith,
                hope and foundation are deeply rooted in the victorious
                resurrection of Jesus Christ.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-church-blue-dark px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-church-blue"
              >
                Discover Our Story

                <ArrowRight size={17} />
              </Link>

              <div className="flex min-h-12 items-center rounded-lg border border-slate-200 px-5">
                <span className="mr-3 text-2xl font-bold text-church-red">
                  1989
                </span>

                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Year Founded
                </span>
              </div>
            </div>
          </div>

          {/* Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative mt-12 h-[420px] overflow-hidden rounded-[28px]">
                <Image
                  src="/images/street-envagelism2.jpg"
                  alt="New Christian Faith Ministry evangelism"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="relative h-[420px] overflow-hidden rounded-[28px]">
                <Image
                  src="/images/music-team.jpg"
                  alt="New Christian Faith Ministry music ministry"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            <div className="absolute bottom-5 left-1/2 w-[78%] -translate-x-1/2 rounded-2xl border border-white/40 bg-white/90 p-5 shadow-2xl backdrop-blur-xl sm:w-auto sm:min-w-[290px]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-church-red">
                Our Foundation
              </p>

              <p className="mt-2 text-lg font-semibold leading-snug text-church-blue-dark">
                Rooted in Christ. Led by the Spirit. Grounded in Truth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE VALUES
      ====================================================== */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10 xl:px-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              icon={<Heart size={23} />}
              title="Love"
              text="Living and serving through the love of Christ."
            />

            <ValueCard
              icon={<BookOpenText size={23} />}
              title="Truth"
              text="Standing firmly upon the undiluted Word of God."
            />

            <ValueCard
              icon={<Flame size={23} />}
              title="Spirit-Led"
              text="Following the direction and leading of the Holy Spirit."
            />

            <ValueCard
              icon={<Sparkles size={23} />}
              title="Eternity"
              text="Leading souls toward everlasting life in Christ."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          VISION & MISSION
      ====================================================== */}
      <section
        id="vision-mission"
        className="bg-church-blue-dark py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="Why We Exist"
            title="Our Vision & Mission"
            description="Everything we do flows from our mandate to grow in the truth of Christ and lead souls toward eternity."
            light
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="group rounded-[28px] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/[0.09] sm:p-9">
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-church-red text-white">
                <Church size={24} />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-church-red">
                Our Vision
              </p>

              <h3 className="mt-4 text-2xl font-semibold leading-snug text-white">
                Leading and guiding souls through heavenly eternity.
              </h3>

              <p className="mt-5 leading-8 text-white/65">
                To see lives redeemed, faith perfected, and a generation of
                believers awakened to stand firm in the Word; faithfully
                leading souls from every walk of life into eternal kingdom
                glory.
              </p>

              <p className="mt-6 text-sm font-semibold text-white/80">
                Daniel 12:3
              </p>
            </div>

            <div className="group rounded-[28px] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/[0.09] sm:p-9">
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white text-church-blue-dark">
                <BookOpenText size={24} />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-church-red">
                Our Mission
              </p>

              <h3 className="mt-4 text-2xl font-semibold leading-snug text-white">
                Refining and perfecting our faith day by day.
              </h3>

              <p className="mt-5 leading-8 text-white/65">
                Rooted in the resurrection of Jesus Christ and led by the Holy
                Spirit, we refine and perfect our faith through the true,
                undiluted Word of God; equipping believers to overcome trials
                and stand firm in spiritual truth.
              </p>

              <p className="mt-6 text-sm font-semibold text-white/80">
                Hebrews 12:1–2
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MINISTRIES
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Find Your Community"
              title="Life Happens In Community"
              description="There is a place for every generation to grow, serve, worship, build meaningful relationships and discover purpose."
            />

            <Link
              href="/ministries"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-church-blue-dark transition-colors hover:text-church-red"
            >
              Explore All Ministries

              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {ministries.map((ministry) => (
              <Link
                key={ministry.name}
                href={`/ministries#${ministry.slug}`}
                className="group overflow-hidden rounded-[26px] border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden bg-church-blue-dark">
                  {ministry.image ? (
                    <Image
                      src={ministry.image}
                      alt={ministry.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <PhotoPlaceholder />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-church-blue-dark transition-transform group-hover:translate-x-1">
                    <ArrowRight size={18} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-church-blue-dark">
                    {ministry.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {ministry.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          JOURNEY / TIMELINE
      ====================================================== */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="Since 1989"
            title="Our Journey Through The Years"
            description="Different seasons, different locations, one faithful God and one continuing mandate."
            align="center"
          />

          <div className="relative mt-14">
            <div className="absolute left-[19px] top-0 hidden h-full w-px bg-slate-200 md:left-1/2 md:block" />

            <div className="space-y-8">
              {journey.map((item, index) => (
                <div
                  key={`${item.year}-${item.title}`}
                  className={`relative grid gap-8 md:grid-cols-2 ${
                    index % 2 === 0 ? "" : ""
                  }`}
                >
                  <div
                    className={`${
                      index % 2 === 0
                        ? "md:pr-14 md:text-right"
                        : "md:order-2 md:pl-14"
                    }`}
                  >
                    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-church-red">
                        {item.year}
                      </p>

                      <h3 className="mt-3 text-xl font-semibold text-church-blue-dark">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`hidden md:block ${
                      index % 2 === 0 ? "" : "md:order-1"
                    }`}
                  />

                  <div className="absolute left-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-church-red shadow md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOUNDERS
      ====================================================== */}
      <section id="founders" className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="Our Heritage"
            title="Honouring Our Founders"
            description="We honour the men whose faith, sacrifice and commitment helped establish the ministry and its continuing work."
            align="center"
          />

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="group overflow-hidden rounded-[26px] border border-slate-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-church-blue-dark">
                  {founder.image ? (
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <PhotoPlaceholder label="Portrait coming soon" />
                  )}

                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6 text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-church-red">
                    {founder.role}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-church-blue-dark">
                    {founder.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Current Leadership Highlight */}
          <div className="mt-16 overflow-hidden rounded-[30px] bg-church-blue-dark">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="relative min-h-[420px]">
                <Image
                  src="/images/pastor-yeboah.jpg"
                  alt="Ps Nicolas Yeboah"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-church-blue-dark/20" />
              </div>

              <div className="flex items-center p-8 sm:p-10 lg:p-14">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-church-red">
                    Current Leadership
                  </p>

                  <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                    Ps Nicolas Yeboah
                  </h3>

                  <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-white/55">
                    Head Pastor
                  </p>

                  <p className="mt-6 max-w-xl leading-8 text-white/70">
                    Serving the church through pastoral leadership, spiritual
                    guidance, the teaching of God's Word, and the continued
                    advancement of the ministry's mission.
                  </p>

                  <Link
                    href="/about#leadership"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-church-red"
                  >
                    Meet Our Leadership

                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY
      ====================================================== */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Church Life"
              title="Faith In Action"
              description="A glimpse into worship, ministry, fellowship, outreach and life together as a church family."
            />

            <Link
              href="/gallery"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-church-blue-dark hover:text-church-red"
            >
              View Full Gallery

              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-4">
            {galleryPreview.map((image, index) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-2xl ${
                  index === 0
                    ? "col-span-2 row-span-2 min-h-[420px] md:col-span-1 md:min-h-[480px]"
                    : "min-h-[200px] md:min-h-[232px]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-church-blue-dark/0 transition-colors duration-300 group-hover:bg-church-blue-dark/15" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PLAN A VISIT
      ====================================================== */}
      <section
        id="visit"
        className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
      >
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-church-blue-light blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="overflow-hidden rounded-[32px] bg-church-blue-dark">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 sm:p-10 lg:p-14 xl:p-16">
                <SectionHeading
                  eyebrow="Come Worship With Us"
                  title="There's A Place For You Here"
                  description="Whether you are visiting for the first time, returning to church, or looking for a community to call home, you are welcome."
                  light
                />

                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  <LocationCard
                    title="Head Office"
                    address="Kwashieman, Accra"
                    subtitle="New Christian Faith Ministry"
                  />

                  <LocationCard
                    title="Ebenezer Assemblies"
                    address="Awoshie, Adjacent DVLA"
                    subtitle="New Christian Faith Ministry"
                  />
                </div>

                <p className="mt-7 text-sm leading-7 text-white/60">
                  For current service times, special services and directions,
                  please contact the church or follow our official social
                  channels.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-church-red px-6 text-sm font-semibold text-white transition-all hover:bg-church-red-dark"
                  >
                    Contact Us

                    <ArrowRight size={16} />
                  </Link>

                  <Link
                    href="/plan-a-visit"
                    className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-6 text-sm font-semibold text-white transition-all hover:bg-white hover:text-church-blue-dark"
                  >
                    Plan Your Visit
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[400px] lg:min-h-full">
                <Image
                  src="/images/youth-group-photo.jpg"
                  alt="New Christian Faith Ministry church community"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-church-blue-dark/25 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WATCH / SOCIAL CTA
      ====================================================== */}
      <section className="bg-church-red py-14 sm:py-16">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 xl:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">
              Stay Connected
            </p>

            <h2 className="mt-3 max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              Worship with us wherever you are.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">
              Follow New Christian Faith Ministry online for sermons,
              teachings, worship and ministry updates.
            </p>
          </div>

          <a
            href={church.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-lg bg-white px-7 text-sm font-semibold text-church-red transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-church-red text-white">
              <Play size={14} fill="currentColor" />
            </span>

            Watch On YouTube
          </a>
        </div>
      </section>
    </main>
  );
}

type ValueCardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

function ValueCard({ icon, title, text }: ValueCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-church-blue-light text-church-blue-dark transition-colors group-hover:bg-church-red group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-semibold text-church-blue-dark">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {text}
      </p>
    </div>
  );
}

function PhotoPlaceholder({
  label = "Image coming soon",
}: {
  label?: string;
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-church-blue-dark to-church-blue">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10">
          <Church size={27} className="text-white" />
        </div>

        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
          {label}
        </p>
      </div>
    </div>
  );
}

type LocationCardProps = {
  title: string;
  address: string;
  subtitle: string;
};

function LocationCard({
  title,
  address,
  subtitle,
}: LocationCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-church-red text-white">
        <MapPin size={19} />
      </div>

      <h3 className="mt-4 font-semibold text-white">
        {title}
      </h3>

      <p className="mt-1 text-sm text-white/75">
        {address}
      </p>

      <p className="mt-2 text-xs text-white/45">
        {subtitle}
      </p>
    </div>
  );
}