import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa6";

import { church } from "@/data/church";

export default function Footer() {
  return (
    <footer className="bg-church-blue-dark text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.4fr_0.8fr_0.9fr_1fr]">
          {/* Church Identity */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-4"
              aria-label="New Christian Faith Ministry home"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white">
                <Image
                  src="/images/church-logo.jpg"
                  alt="New Christian Faith Ministry logo"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>

              <div>
                <p className="text-lg font-bold uppercase leading-tight">
                  New Christian
                </p>

                <p className="text-lg font-bold uppercase leading-tight">
                  Faith Ministry
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
              {church.motto}. Rooted in the resurrection of Jesus Christ,
              led by the Holy Spirit, and committed to the true,
              undiluted Word of God.
            </p>

            <p className="mt-5 text-sm font-medium text-white/90">
              Founded in {church.yearFounded}
            </p>

            {/* Social Media */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href={church.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="New Christian Faith Ministry Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-church-red hover:bg-church-red"
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href={church.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="New Christian Faith Ministry YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-church-red hover:bg-church-red"
              >
                <FaYoutube size={19} />
              </a>

              <a
                href={church.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="New Christian Faith Ministry TikTok"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-sm font-bold text-white transition-all hover:border-church-red hover:bg-church-red"
              >
                <FaTiktok size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide">
              Quick Links
            </h2>

            <div className="mt-6 flex flex-col gap-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/sermons">Sermons</FooterLink>
              <FooterLink href="/events">Events</FooterLink>
              <FooterLink href="/gallery">Gallery</FooterLink>
              <FooterLink href="/give">Giving</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </div>
          </div>

          {/* Ministries */}
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide">
              Ministries
            </h2>

            <div className="mt-6 flex flex-col gap-3">
              <FooterLink href="/ministries#youth">
                Youth Ministry
              </FooterLink>

              <FooterLink href="/ministries#women">
                Women&apos;s Ministry
              </FooterLink>

              <FooterLink href="/ministries#men">
                Men&apos;s Ministry
              </FooterLink>

              <FooterLink href="/ministries#children">
                Children&apos;s Ministry
              </FooterLink>

              <FooterLink href="/ministries#music">
                Music & Choir
              </FooterLink>

              <FooterLink href="/ministries#evangelism">
                Evangelism
              </FooterLink>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide">
              Visit & Contact
            </h2>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-0.5 shrink-0 text-church-red"
                />

                <div>
                  <p className="text-sm font-semibold text-white">
                    Head Office
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/65">
                    {church.address}
                  </p>
                </div>
              </div>

              {church.phone ? (
                <a
                  href={`tel:${church.phone}`}
                  className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Phone
                    size={18}
                    className="mt-0.5 shrink-0 text-church-red"
                  />

                  {church.phone}
                </a>
              ) : (
                <div className="flex items-start gap-3">
                  <Phone
                    size={18}
                    className="mt-0.5 shrink-0 text-church-red"
                  />

                  <p className="text-sm text-white/50">
                    Phone number coming soon
                  </p>
                </div>
              )}

              {church.email ? (
                <a
                  href={`mailto:${church.email}`}
                  className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Mail
                    size={18}
                    className="mt-0.5 shrink-0 text-church-red"
                  />

                  <span className="break-all">{church.email}</span>
                </a>
              ) : (
                <div className="flex items-start gap-3">
                  <Mail
                    size={18}
                    className="mt-0.5 shrink-0 text-church-red"
                  />

                  <p className="text-sm text-white/50">
                    Email address coming soon
                  </p>
                </div>
              )}
            </div>

            <Link
              href="/plan-a-visit"
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-lg bg-church-red px-5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-church-red-dark"
            >
              Plan A Visit
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-4 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} New Christian Faith Ministry.
              All rights reserved.
            </p>

            <p>{church.denomination}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="w-fit text-sm text-white/65 transition-all duration-200 hover:translate-x-1 hover:text-white"
    >
      {children}
    </Link>
  );
}