import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  CalendarDays,
  Church,
  Clock3,
  ExternalLink,
  Flame,
  HelpCircle,
  MapPin,
  Navigation,
  Sparkles,
  Users,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import { church } from "@/data/church";
import {
  services,
  visitFaqs,
  whatToExpect,
} from "@/data/visit";

export default function PlanVisitPage() {
  const locations = [
    church.locations.headOffice,
    church.locations.ebenezerAssemblies,
  ];

  return (
    <main>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative flex min-h-[600px] items-center overflow-hidden bg-church-blue-dark lg:min-h-[680px]">
        <Image
          src="/images/youth-group-photo.jpg"
          alt="Visit New Christian Faith Ministry"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#041a35]/95 via-[#041a35]/80 to-[#041a35]/28" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-church-red" />

              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/80">
                Plan Your Visit
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              There's A Place
              <br />
              For You Here.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Whether this is your first church visit or
              you're looking for a community to call home,
              you're welcome at New Christian Faith Ministry.
            </p>

            <a
              href="#locations"
              className="mt-9 inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-church-red px-7 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-church-red-dark hover:shadow-xl"
            >
              Choose A Location
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          WELCOME
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20 lg:px-10 xl:px-12">
          <div>
            <SectionHeading
              eyebrow="Your First Visit"
              title="Come As A Guest. Leave As Family."
              description="We want your visit to New Christian Faith Ministry to be simple and meaningful."
            />

            <p className="mt-7 max-w-2xl text-sm leading-8 text-slate-600">
              Our church community is rooted in the
              resurrection of Jesus Christ, led by the Holy
              Spirit and committed to the true, undiluted Word
              of God.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-600">
              Select one of our locations below, open the
              directions in Google Maps, and check this page
              for confirmed service information as it becomes
              available.
            </p>
          </div>

          <div className="relative h-[480px] overflow-hidden rounded-[30px]">
            <Image
              src="/images/music-team.jpg"
              alt="Worship at New Christian Faith Ministry"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-church-blue-dark/75 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 right-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-church-red">
                Welcome
              </p>

              <p className="mt-2 text-xl font-semibold leading-snug text-white">
                Worship. Word. Prayer. Fellowship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT TO EXPECT
      ====================================================== */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="What To Expect"
            title="A Church Grounded In Faith"
            description="These are some of the things that shape our gatherings and church community."
            align="center"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {whatToExpect.map((item, index) => {
              const icons = [
                <Sparkles key="worship" size={24} />,
                <Flame key="prayer" size={24} />,
                <BookOpenText key="word" size={24} />,
                <Users key="fellowship" size={24} />,
              ];

              return (
                <article
                  key={item.title}
                  className="group rounded-[24px] border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-church-blue-light text-church-blue-dark transition-colors group-hover:bg-church-red group-hover:text-white">
                    {icons[index]}
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-church-blue-dark">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATIONS
      ====================================================== */}
      <section
        id="locations"
        className="scroll-mt-28 bg-white py-20 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="Choose A Location"
            title="Where Would You Like To Visit?"
            description="Both locations can be opened directly in Google Maps for navigation."
            align="center"
          />

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-2">
            {locations.map((location, index) => (
              <VisitLocation
                key={location.id}
                location={location}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE SCHEDULE
      ====================================================== */}
      <section className="bg-church-blue-dark py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="When We Gather"
            title="Service Schedule"
            description="Confirmed service days and times will appear here once the church supplies its current schedule."
            light
          />

          {services.length > 0 ? (
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[24px] border border-white/10 bg-white/[0.05] p-7"
                >
                  <CalendarDays
                    size={23}
                    className="text-church-red"
                  />

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <div className="mt-5 space-y-3">
                    {service.day ? (
                      <p className="text-sm text-white/70">
                        {service.day}
                      </p>
                    ) : null}

                    {service.time ? (
                      <p className="flex items-center gap-2 text-sm text-white/70">
                        <Clock3 size={16} />
                        {service.time}
                      </p>
                    ) : null}
                  </div>

                  <p className="mt-5 text-sm leading-7 text-white/55">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-[28px] border border-white/10 bg-white/[0.05] p-8 sm:p-10">
              <CalendarDays
                size={30}
                className="text-church-red"
              />

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Current service times are being confirmed.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-8 text-white/60">
                We will publish the official Sunday,
                midweek and special-service schedules here
                once they are provided by the church.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-10 xl:px-12">
          <div>
            <SectionHeading
              eyebrow="Before You Visit"
              title="Frequently Asked Questions"
              description="A few helpful answers for first-time visitors."
            />

            <div className="mt-8 flex h-13 w-13 items-center justify-center rounded-2xl bg-church-blue-light text-church-blue-dark">
              <HelpCircle size={24} />
            </div>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {visitFaqs.map((faq, index) => (
              <div
                key={faq.question}
                className="grid gap-4 py-7 sm:grid-cols-[48px_1fr]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-church-blue-light text-xs font-bold text-church-blue-dark">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="font-semibold text-church-blue-dark">
                    {faq.question}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
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
              Still Have Questions?
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white lg:text-4xl">
              We're happy to help before your visit.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
              Visit our contact page for church locations,
              social media and available contact information.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex min-h-13 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-7 text-sm font-semibold text-church-red transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Contact Us
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function VisitLocation({
  location,
  index,
}: {
  location: {
    id: string;
    name: string;
    churchName: string;
    address: string;
    pastor: string | null;
    mapUrl: string;
  };
  index: number;
}) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={
            index === 0
              ? "/images/music-team.jpg"
              : "/images/youth-group-photo.jpg"
          }
          alt={location.name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-church-blue-dark/85 via-transparent to-transparent" />

        <div className="absolute bottom-6 left-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-church-red">
            New Christian Faith Ministry
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            {location.name}
          </h3>
        </div>
      </div>

      <div className="p-7">
        <div className="flex gap-3">
          <MapPin
            size={19}
            className="mt-0.5 shrink-0 text-church-red"
          />

          <p className="text-sm leading-7 text-slate-600">
            {location.address}
          </p>
        </div>

        {location.pastor ? (
          <p className="mt-4 text-sm text-slate-600">
            Pastor:{" "}
            <span className="font-semibold text-church-blue-dark">
              {location.pastor}
            </span>
          </p>
        ) : null}

        <a
          href={location.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-church-blue-dark px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-church-red"
        >
          Get Directions
          <ExternalLink size={16} />
        </a>
      </div>
    </article>
  );
}