import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Heart,
  Images,
  Sparkles,
} from "lucide-react";

import GalleryExplorer from "@/components/gallery/GalleryExplorer";
import SectionHeading from "@/components/ui/SectionHeading";

export default function GalleryPage() {
  return (
    <main>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative flex min-h-[540px] items-center overflow-hidden bg-church-blue-dark lg:min-h-[620px]">
        <Image
          src="/images/music-team.jpg"
          alt="Life at New Christian Faith Ministry"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#041a35]/95 via-[#041a35]/75 to-[#041a35]/25" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-church-red" />

              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/80">
                Church Life
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Moments Of Faith
              <br />
              & Fellowship.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Explore moments from worship, ministry,
              evangelism, leadership and life together at
              New Christian Faith Ministry.
            </p>

            <a
              href="#gallery"
              className="mt-9 inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-church-red px-7 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-church-red-dark hover:shadow-xl"
            >
              Explore Gallery
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="Our Community"
            title="More Than Photographs"
            description="Every image represents people, moments and expressions of faith that form part of the continuing story of New Christian Faith Ministry."
          />

          <div className="grid grid-cols-2 gap-4">
            <GalleryFeature
              icon={<Heart size={21} />}
              title="Fellowship"
            />

            <GalleryFeature
              icon={<Sparkles size={21} />}
              title="Worship"
            />

            <GalleryFeature
              icon={<Camera size={21} />}
              title="Memories"
            />

            <GalleryFeature
              icon={<Images size={21} />}
              title="Church Life"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY
      ====================================================== */}
      <section
        id="gallery"
        className="scroll-mt-28 bg-slate-50 py-20 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="Photo Gallery"
            title="Life At New Christian Faith Ministry"
            description="Browse photographs by category and select any image for a larger view."
          />

          <div className="mt-12">
            <GalleryExplorer />
          </div>
        </div>
      </section>

      {/* =====================================================
          MORE IMAGES COMING
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="grid overflow-hidden rounded-[32px] bg-church-blue-dark lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[420px]">
              <Image
                src="/images/street-envagelism3.jpg"
                alt="Church outreach"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="flex items-center p-8 sm:p-10 lg:p-14">
              <div>
                <Camera
                  size={30}
                  className="text-church-red"
                />

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-church-red">
                  Growing Archive
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  More Moments Will Be Added.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-8 text-white/65">
                  As more church photographs become
                  available, this gallery will expand to
                  include worship services, baptisms,
                  conferences, anniversaries, children's
                  ministry, weddings, outreach and other
                  moments in church life.
                </p>

                <Link
                  href="/events"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-church-red"
                >
                  Explore Church Events
                  <ArrowRight size={17} />
                </Link>
              </div>
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
              Experience It Yourself
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white lg:text-4xl">
              Come and be part of the family.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
              Photos capture moments, but there is no
              substitute for worshipping and fellowshipping
              together.
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

function GalleryFeature({
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