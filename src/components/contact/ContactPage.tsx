import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Church,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  UserRound,
} from "lucide-react";
import {
  FaFacebookF,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

import SectionHeading from "@/components/ui/SectionHeading";
import { church } from "@/data/church";

export default function ContactPage() {
  const locations = [
    church.locations.headOffice,
    church.locations.ebenezerAssemblies,
  ];

  return (
    <main>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden bg-church-blue-dark lg:min-h-[600px]">
        <Image
          src="/images/street-envagelism3.jpg"
          alt="Contact New Christian Faith Ministry"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#041a35]/95 via-[#041a35]/82 to-[#041a35]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-church-red" />

              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/80">
                Get In Touch
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              We'd Love To
              <br />
              Hear From You.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Find our church locations, connect through our
              official social platforms, or plan your first
              visit to New Christian Faith Ministry.
            </p>

            <a
              href="#locations"
              className="mt-9 inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-church-red px-7 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-church-red-dark hover:shadow-xl"
            >
              Find A Location
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT OPTIONS
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="Connect With Us"
            title="We're Here To Help"
            description="Some direct contact information is still being prepared. In the meantime, you can find our locations or connect through the church's official social platforms."
            align="center"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <ContactMethod
              icon={<Phone size={24} />}
              title="Phone"
              value={
                church.phone ||
                "Official phone number coming soon"
              }
              available={Boolean(church.phone)}
            />

            <ContactMethod
              icon={<MessageCircle size={24} />}
              title="WhatsApp"
              value={
                church.whatsapp ||
                "Official WhatsApp number coming soon"
              }
              available={Boolean(church.whatsapp)}
            />

            <ContactMethod
              icon={<Mail size={24} />}
              title="Email"
              value={
                church.email ||
                "Official email address coming soon"
              }
              available={Boolean(church.email)}
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATIONS
      ====================================================== */}
      <section
        id="locations"
        className="scroll-mt-28 bg-slate-50 py-20 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="Find Us"
            title="Our Church Locations"
            description="Use Google Maps for directions to the Head Office or Ebenezer Assemblies."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {locations.map((location, index) => (
              <LocationCard
                key={location.id}
                location={location}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SOCIAL MEDIA
      ====================================================== */}
      <section className="bg-church-blue-dark py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-10 xl:px-12">
          <div>
            <SectionHeading
              eyebrow="Stay Connected"
              title="Follow The Ministry Online"
              description="Stay connected to church messages, worship, announcements and ministry activity through our official social platforms."
              light
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <SocialCard
              href={church.socials.facebook}
              icon={<FaFacebookF size={23} />}
              platform="Facebook"
            />

            <SocialCard
              href={church.socials.youtube}
              icon={<FaYoutube size={25} />}
              platform="YouTube"
            />

            <SocialCard
              href={church.socials.tiktok}
              icon={<FaTiktok size={23} />}
              platform="TikTok"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM PLACEHOLDER
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10 xl:px-12">
          <div>
            <SectionHeading
              eyebrow="Send A Message"
              title="Online Contact Form"
              description="The form interface is ready, but submissions will only be enabled after an official church email or form service is configured."
            />

            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-semibold text-amber-950">
                Form submissions are not active yet.
              </p>

              <p className="mt-2 text-sm leading-7 text-amber-900/70">
                This prevents visitor messages from being
                silently lost before the church provides an
                official destination.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-100 bg-slate-50 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                label="First Name"
                placeholder="Your first name"
              />

              <FormField
                label="Last Name"
                placeholder="Your last name"
              />
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <FormField
                label="Email"
                placeholder="you@example.com"
                type="email"
              />

              <FormField
                label="Phone"
                placeholder="Your phone number"
                type="tel"
              />
            </div>

            <div className="mt-5">
              <label className="text-sm font-semibold text-church-blue-dark">
                Subject
              </label>

              <input
                type="text"
                disabled
                placeholder="How can we help?"
                className="mt-2 h-12 w-full cursor-not-allowed rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none disabled:opacity-70"
              />
            </div>

            <div className="mt-5">
              <label className="text-sm font-semibold text-church-blue-dark">
                Message
              </label>

              <textarea
                disabled
                rows={6}
                placeholder="Write your message..."
                className="mt-2 w-full resize-none cursor-not-allowed rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-500 outline-none disabled:opacity-70"
              />
            </div>

            <button
              type="button"
              disabled
              className="mt-6 inline-flex min-h-12 cursor-not-allowed items-center justify-center rounded-lg bg-slate-300 px-6 text-sm font-semibold text-slate-500"
            >
              Submit Message
            </button>
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
              First Time Visiting?
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white lg:text-4xl">
              We'd be glad to welcome you.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
              Explore our visitor information and choose the
              location you would like to attend.
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

function ContactMethod({
  icon,
  title,
  value,
  available,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  available: boolean;
}) {
  return (
    <article className="rounded-[24px] border border-slate-100 bg-white p-7 shadow-sm">
      <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-church-blue-light text-church-blue-dark">
        {icon}
      </div>

      <h3 className="mt-6 text-lg font-semibold text-church-blue-dark">
        {title}
      </h3>

      <p
        className={`mt-3 text-sm leading-7 ${
          available
            ? "font-medium text-slate-700"
            : "text-slate-500"
        }`}
      >
        {value}
      </p>
    </article>
  );
}

function LocationCard({
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
      <div className="relative h-64 overflow-hidden bg-church-blue-dark">
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

        <div className="absolute inset-0 bg-gradient-to-t from-church-blue-dark/85 via-church-blue-dark/10 to-transparent" />

        <div className="absolute bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-church-red text-white">
          <MapPin size={22} />
        </div>
      </div>

      <div className="p-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-church-red">
          Location {String(index + 1).padStart(2, "0")}
        </p>

        <h2 className="mt-3 text-2xl font-semibold text-church-blue-dark">
          {location.name}
        </h2>

        <p className="mt-2 text-sm font-medium text-slate-700">
          {location.churchName}
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex gap-3">
            <Navigation
              size={18}
              className="mt-0.5 shrink-0 text-church-red"
            />

            <p className="text-sm leading-7 text-slate-600">
              {location.address}
            </p>
          </div>

          {location.pastor ? (
            <div className="flex gap-3">
              <UserRound
                size={18}
                className="mt-0.5 shrink-0 text-church-red"
              />

              <p className="text-sm text-slate-600">
                Pastor:{" "}
                <span className="font-semibold text-church-blue-dark">
                  {location.pastor}
                </span>
              </p>
            </div>
          ) : null}
        </div>

        <a
          href={location.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-church-blue-dark px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-church-red"
        >
          Open In Google Maps
          <ExternalLink size={16} />
        </a>
      </div>
    </article>
  );
}

function SocialCard({
  href,
  icon,
  platform,
}: {
  href: string;
  icon: React.ReactNode;
  platform: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-[22px] border border-white/10 bg-white/[0.05] p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.09]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-church-red text-white">
        {icon}
      </div>

      <p className="mt-5 font-semibold text-white">
        {platform}
      </p>

      <p className="mt-2 flex items-center gap-1.5 text-xs text-white/50">
        Visit official page
        <ExternalLink size={12} />
      </p>
    </a>
  );
}

function FormField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-church-blue-dark">
        {label}
      </label>

      <input
        type={type}
        disabled
        placeholder={placeholder}
        className="mt-2 h-12 w-full cursor-not-allowed rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none disabled:opacity-70"
      />
    </div>
  );
}