import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Church,
  Compass,
  Flame,
  Heart,
  Quote,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import {
  aboutTimeline,
  coreValues,
  faithStatements,
  founders,
  leadership,
} from "@/data/about";

export default function AboutPage() {
  return (
    <main>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden bg-church-blue-dark lg:min-h-[600px]">
        <Image
          src="/images/street-envagelism3.jpg"
          alt="New Christian Faith Ministry"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#041a35]/95 via-[#041a35]/80 to-[#041a35]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-church-red" />

              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/80">
                About Our Church
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              A Story Of Faith,
              <br />
              Resilience & Purpose.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              From humble beginnings to a continuing ministry, our journey has
              been shaped by divine direction, sacrifice, spiritual truth and
              an unwavering commitment to Jesus Christ.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE ARE
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-10 xl:px-12">
          <div className="relative">
            <div className="relative h-[520px] overflow-hidden rounded-[30px]">
              <Image
                src="/images/youth-group-photo.jpg"
                alt="New Christian Faith Ministry church family"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-church-blue-dark/55 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">
                  Since
                </p>

                <p className="mt-1 text-4xl font-bold">
                  1989
                </p>

                <p className="mt-2 text-sm text-white/75">
                  Continuing in faith from generation to generation.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-7 -right-4 hidden w-52 rounded-2xl bg-church-red p-6 text-white shadow-xl sm:block">
              <Quote size={28} className="opacity-60" />

              <p className="mt-4 text-sm font-medium leading-6">
                The Word is true from the beginning.
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Welcome To Our Journey & Faith"
              description="Our story is a testimony to unwavering faith, resilience and divine direction."
            />

            <div className="mt-8 space-y-5 text-[15px] leading-8 text-slate-600">
              <p>
                Having stepped out from our mother denomination, Christo Asafo,
                to follow God's distinct calling, our path has not been without
                trials. Through seasons of sacrifice, unexpected challenges and
                multiple relocations, the Lord has remained our anchor.
              </p>

              <p>
                He has steadily guided, built and sustained us through every
                season. From Odorkor to Darkuman and eventually to our
                permanent home at Kwashieman, the ministry has continued to
                pursue the calling placed before it.
              </p>

              <p>
                At the heart of our ministry is an unshakable commitment to
                the Holy Spirit and the true, undiluted Word of God. We are a
                community grounded in spiritual truth, with our hope and
                foundation deeply rooted in the victorious resurrection of
                Jesus Christ.
              </p>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <InfoStat
                value="1989"
                label="Year Founded"
              />

              <InfoStat
                value="Ghana"
                label="Serving From Accra"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HISTORY
      ====================================================== */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="Our History"
            title="Faithful Through Every Season"
            description="The locations and leadership have changed through the years, but the spiritual mandate remains."
            align="center"
          />

          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="absolute bottom-0 left-[19px] top-0 w-px bg-slate-200 md:left-1/2" />

            <div className="space-y-10">
              {aboutTimeline.map((item, index) => (
                <div
                  key={`${item.year}-${item.title}`}
                  className="relative grid md:grid-cols-2"
                >
                  <div
                    className={`ml-12 md:ml-0 ${
                      index % 2 === 0
                        ? "md:pr-14 md:text-right"
                        : "md:order-2 md:pl-14"
                    }`}
                  >
                    <div className="rounded-[22px] border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
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
                      index % 2 !== 0 ? "md:order-1" : ""
                    }`}
                  />

                  <div className="absolute left-[12px] top-8 flex h-4 w-4 items-center justify-center rounded-full bg-church-red ring-4 ring-slate-50 md:left-1/2 md:-translate-x-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISION / MISSION
      ====================================================== */}
      <section
        id="vision-mission"
        className="relative overflow-hidden bg-church-blue-dark py-20 sm:py-24 lg:py-32"
      >
        <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/5" />
        <div className="absolute -right-16 -top-16 h-[280px] w-[280px] rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="Our Direction"
            title="Vision & Mission"
            description="Our vision determines where we are going. Our mission shapes how we live and serve every day."
            light
            align="center"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <PurposeCard
              icon={<Compass size={27} />}
              label="Our Vision"
              headline="Leading and guiding souls through heavenly eternity."
              description="To see lives redeemed, faith perfected, and a generation of believers awakened to stand firm in the Word; faithfully leading souls from every walk of life into eternal kingdom glory."
              scripture="Daniel 12:3"
            />

            <PurposeCard
              icon={<BookOpen size={27} />}
              label="Our Mission"
              headline="Refining and perfecting our faith day by day."
              description="Rooted in the resurrection of Jesus Christ and led by the Holy Spirit, we have a perpetual mandate to refine and perfect our faith through the true, undiluted Word of God; equipping believers to overcome every trial, stand firm in spiritual truth, and lead souls toward heavenly eternity."
              scripture="Hebrews 12:1–2"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="What Shapes Us"
            title="Our Core Values"
            description="These values reflect the spiritual principles we seek to live out as individuals and as one church family."
            align="center"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {coreValues.map((value, index) => {
              const icons = [
                <Heart key="heart" size={24} />,
                <ShieldCheck key="shield" size={24} />,
                <Flame key="flame" size={24} />,
                <Sparkles key="sparkles" size={24} />,
              ];

              return (
                <div
                  key={value.name}
                  className="group rounded-[24px] border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-church-blue-light text-church-blue-dark transition-colors group-hover:bg-church-red group-hover:text-white">
                    {icons[index]}
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-church-blue-dark">
                    {value.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FOUNDERS
      ====================================================== */}
      <section
        id="founders"
        className="bg-slate-50 py-20 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="Our Heritage"
            title="The Founders"
            description="We honour those whose faith and commitment helped establish the foundation upon which the ministry continues today."
            align="center"
          />

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
            {founders.map((person) => (
              <PersonCard
                key={person.name}
                name={person.name}
                role={person.role}
                image={person.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LEADERSHIP
      ====================================================== */}
      <section
        id="leadership"
        className="bg-white py-20 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Serving The Church"
              title="Our Leadership"
              description="Meet some of the people serving the church through pastoral ministry, spiritual guidance, administration and ministry leadership."
            />

            <div className="rounded-xl bg-church-blue-light px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-church-blue-dark">
                Christ-centered leadership
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {leadership.map((person) => (
              <LeadershipCard
                key={person.name}
                name={person.name}
                role={person.role}
                image={person.image}
                description={person.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SPIRITUAL IDENTITY
      ====================================================== */}
      <section className="bg-church-blue-dark py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-10 xl:px-12">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Our Foundation"
              title="What Defines Our Faith"
              description="Our ministry is centered on Jesus Christ, grounded in Scripture and dependent upon the Holy Spirit."
              light
            />

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-6">
              <Church size={28} className="text-church-red" />

              <p className="mt-5 text-sm leading-7 text-white/70">
                New Christian Faith Ministry is a member church of the
                Pentecostal Council of Ghana.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {faithStatements.map((statement, index) => (
              <div
                key={statement.title}
                className="flex gap-5 rounded-[22px] border border-white/10 bg-white/[0.05] p-6 transition-all hover:bg-white/[0.08]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-church-red text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {statement.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/65">
                    {statement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          COUNCIL / COMMUNITY
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="grid overflow-hidden rounded-[30px] border border-slate-100 bg-slate-50 lg:grid-cols-2">
            <div className="flex items-center p-8 sm:p-10 lg:p-14">
              <div>
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-church-blue-dark text-white">
                  <Users size={25} />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-church-red">
                  Our Wider Fellowship
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-church-blue-dark sm:text-4xl">
                  Member Church Of The Pentecostal Council Of Ghana
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-8 text-slate-600">
                  New Christian Faith Ministry identifies as a member church
                  within the Pentecostal Council of Ghana, while continuing its
                  distinct ministry mandate and commitment to spiritual truth,
                  discipleship and evangelism.
                </p>
              </div>
            </div>

            <div className="relative min-h-[380px]">
              <Image
                src="/images/music-team.jpg"
                alt="New Christian Faith Ministry worship"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-slate-50/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-church-red py-16 sm:py-20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 xl:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">
              Become Part Of The Journey
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white lg:text-4xl">
              Come worship, grow and serve with us.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
              Whether you are visiting for the first time or looking for a
              church community, you are welcome at New Christian Faith
              Ministry.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="/plan-a-visit"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-church-red transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Plan A Visit

              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-13 items-center justify-center rounded-lg border border-white/30 px-6 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-church-red"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   SMALL LOCAL COMPONENTS
========================================================= */

function InfoStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5">
      <p className="text-2xl font-bold text-church-blue-dark">
        {value}
      </p>

      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
        {label}
      </p>
    </div>
  );
}

function PurposeCard({
  icon,
  label,
  headline,
  description,
  scripture,
}: {
  icon: React.ReactNode;
  label: string;
  headline: string;
  description: string;
  scripture: string;
}) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm sm:p-9 lg:p-10">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-church-red text-white">
        {icon}
      </div>

      <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-church-red">
        {label}
      </p>

      <h3 className="mt-4 text-2xl font-semibold leading-snug text-white sm:text-3xl">
        {headline}
      </h3>

      <p className="mt-5 text-sm leading-8 text-white/65">
        {description}
      </p>

      <div className="mt-7 inline-flex rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white/75">
        {scripture}
      </div>
    </article>
  );
}

function PersonCard({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string | null;
}) {
  return (
    <article className="group overflow-hidden rounded-[26px] border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/5] overflow-hidden bg-church-blue-dark">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <PhotoPlaceholder />
        )}

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent" />
      </div>

      <div className="p-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-church-red">
          {role}
        </p>

        <h3 className="mt-2 text-lg font-semibold text-church-blue-dark">
          {name}
        </h3>
      </div>
    </article>
  );
}

function LeadershipCard({
  name,
  role,
  image,
  description,
}: {
  name: string;
  role: string;
  image: string | null;
  description: string;
}) {
  return (
    <article className="group overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/5] overflow-hidden bg-church-blue-dark">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, 20vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <PhotoPlaceholder />
        )}
      </div>

      <div className="p-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-church-red">
          {role}
        </p>

        <h3 className="mt-2 font-semibold text-church-blue-dark">
          {name}
        </h3>

        <p className="mt-3 text-xs leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </article>
  );
}

function PhotoPlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-church-blue-dark to-church-blue">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10">
          <Church size={26} className="text-white" />
        </div>

        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
          Portrait Coming Soon
        </p>
      </div>
    </div>
  );
}