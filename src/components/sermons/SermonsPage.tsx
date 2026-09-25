import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  FileText,
  Headphones,
  MessageSquareText,
  Play,
} from "lucide-react";
import { FaYoutube } from "react-icons/fa6";

import SermonLibrary from "@/components/sermons/SermonLibrary";
import SectionHeading from "@/components/ui/SectionHeading";
import { church } from "@/data/church";
import { sermonFormats, sermons } from "@/data/sermons";

export default function SermonsPage() {
  return (
    <main>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative flex min-h-[550px] items-center overflow-hidden bg-church-blue-dark lg:min-h-[620px]">
        <Image
          src="/images/singing-ministry.jpg"
          alt="New Christian Faith Ministry worship"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#041a35]/95 via-[#041a35]/82 to-[#041a35]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-church-red" />

              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/80">
                Sermons & Teaching
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Grow In The
              <br />
              Word Of God.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Watch, listen and study messages that encourage faith, deepen
              understanding of Scripture and help believers stand firmly in
              spiritual truth.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={church.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-church-red px-7 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-church-red-dark hover:shadow-xl"
              >
                <Play
                  size={17}
                  fill="currentColor"
                />
                Watch Messages
              </a>

              <a
                href="#library"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white hover:text-church-blue-dark"
              >
                Browse Library
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WORD INTRODUCTION
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20 lg:px-10 xl:px-12">
          <div>
            <SectionHeading
              eyebrow="Rooted In Truth"
              title="The Word Is At The Heart Of Our Faith"
              description="At New Christian Faith Ministry, biblical teaching is central to our desire to grow in Christ, strengthen faith and equip believers for faithful Christian living."
            />

            <p className="mt-7 max-w-2xl text-sm leading-8 text-slate-600">
              Our mission calls us to refine and perfect our faith day by day
              through the true, undiluted Word of God. This media library is
              designed to make church teaching easier to access both during the
              week and wherever members may be.
            </p>

            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-church-blue-dark text-white">
                <BookOpenText size={22} />
              </div>

              <div>
                <p className="font-semibold text-church-blue-dark">
                  Hebrews 12:1–2
                </p>

                <p className="mt-1 text-xs leading-6 text-slate-500">
                  The scriptural foundation accompanying our mission.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[470px] overflow-hidden rounded-[30px]">
              <Image
                src="/images/music-team.jpg"
                alt="Worship at New Christian Faith Ministry"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-church-blue-dark/70 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-church-red">
                  Our Motto
                </p>

                <p className="mt-2 text-2xl font-semibold leading-snug text-white">
                  “The Word is true from the beginning.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ONLINE MINISTRY FEATURE
      ====================================================== */}
      <section className="bg-church-blue-dark py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="grid overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[420px] overflow-hidden">
              <Image
                src="/images/street-envagelism1.jpg"
                alt="New Christian Faith Ministry"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              <a
                href={church.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch New Christian Faith Ministry on YouTube"
                className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-church-red shadow-2xl transition-transform hover:scale-110"
              >
                <Play
                  size={26}
                  fill="currentColor"
                />
              </a>
            </div>

            <div className="flex items-center p-8 sm:p-10 lg:p-14">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-church-red text-white">
                  <FaYoutube size={25} />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-church-red">
                  Watch Online
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Stay Connected To The Ministry Wherever You Are.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-8 text-white/65">
                  Visit our official YouTube channel for available sermons,
                  church services, teachings, worship and ministry content.
                </p>

                <a
                  href={church.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-church-blue-dark transition-all hover:-translate-y-0.5 hover:bg-church-red hover:text-white"
                >
                  <FaYoutube size={18} />
                  Visit Our YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MEDIA FORMATS
      ====================================================== */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="Learn Your Way"
            title="Messages Wherever Life Takes You"
            description="The sermon library is structured to support video, audio and downloadable teaching resources."
            align="center"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {sermonFormats.map((format, index) => {
              const icons = [
                <Play key="video" size={25} />,
                <Headphones key="audio" size={25} />,
                <FileText key="notes" size={25} />,
              ];

              return (
                <div
                  key={format.title}
                  className="group rounded-[24px] border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-church-blue-light text-church-blue-dark transition-colors group-hover:bg-church-red group-hover:text-white">
                    {icons[index]}
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-church-blue-dark">
                    {format.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {format.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          LIBRARY
      ====================================================== */}
      <section
        id="library"
        className="scroll-mt-28 bg-white py-20 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="Message Library"
            title="Watch, Listen & Study"
            description="Browse messages by media type or search for a particular teaching, speaker or scripture reference."
          />

          <div className="mt-12">
            <SermonLibrary
              sermons={sermons}
              youtubeUrl={church.socials.youtube}
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          DAILY WORD / REFLECTION CTA
      ====================================================== */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="relative overflow-hidden rounded-[32px] bg-church-blue-dark px-7 py-14 sm:px-10 lg:px-16 lg:py-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/5" />
            <div className="absolute -bottom-28 right-20 h-80 w-80 rounded-full border border-white/5" />

            <div className="relative max-w-3xl">
              <MessageSquareText
                size={31}
                className="text-church-red"
              />

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-church-red">
                Beyond Sunday
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Take The Word With You.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/65">
                Spiritual growth continues beyond the church service. Revisit
                messages, study Scripture and stay connected to teachings that
                strengthen your walk with Christ.
              </p>

              <a
                href={church.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-church-red"
              >
                Explore Online Messages
                <ArrowRight size={17} />
              </a>
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
              Worship With Us
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white lg:text-4xl">
              Online is helpful. Community matters too.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
              Join us in person and experience worship, fellowship, prayer and
              the Word together with the church family.
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