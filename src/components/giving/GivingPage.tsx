import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Church,
  HeartHandshake,
  HelpCircle,
  Landmark,
  LockKeyhole,
  QrCode,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import {
  givingFaqs,
  givingMethods,
  givingPrinciples,
  type GivingMethod,
} from "@/data/giving";

export default function GivingPage() {
  return (
    <main>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative flex min-h-[540px] items-center overflow-hidden bg-church-blue-dark lg:min-h-[620px]">
        <Image
          src="/images/music-team.jpg"
          alt="Giving at New Christian Faith Ministry"
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
                Giving
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Give With Faith
              <br />
              & Purpose.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Giving supports the continuing work of the
              ministry, worship, outreach and the mission of
              New Christian Faith Ministry.
            </p>

            <a
              href="#giving-methods"
              className="mt-9 inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-church-red px-7 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-church-red-dark hover:shadow-xl"
            >
              Giving Options
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY GIVE
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20 lg:px-10 xl:px-12">
          <div>
            <SectionHeading
              eyebrow="Why We Give"
              title="Supporting The Work Of The Ministry"
              description="Giving creates an opportunity to participate practically in the continuing work and mission of the church."
            />

            <div className="mt-8 space-y-5 text-sm leading-8 text-slate-600">
              <p>
                Through the support of members and friends of
                the ministry, the church is able to continue
                its work of worship, teaching, fellowship,
                evangelism and ministry.
              </p>

              <p>
                Giving should be approached freely,
                responsibly and with a sincere heart. The
                website exists to make verified church giving
                information easier to access whenever official
                digital payment details are provided.
              </p>
            </div>

            <div className="mt-9 inline-flex items-center gap-4 rounded-2xl bg-church-blue-light px-5 py-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-church-blue-dark text-white">
                <HeartHandshake size={21} />
              </div>

              <p className="text-sm font-semibold text-church-blue-dark">
                Worship • Ministry • Outreach • Stewardship
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[510px] overflow-hidden rounded-[30px]">
              <Image
                src="/images/street-envagelism1.jpg"
                alt="New Christian Faith Ministry outreach"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-church-blue-dark/70 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-church-red">
                  Impact
                </p>

                <p className="mt-2 max-w-md text-xl font-semibold leading-snug text-white">
                  Helping sustain ministry within the church
                  and beyond its walls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GIVING METHODS
      ====================================================== */}
      <section
        id="giving-methods"
        className="scroll-mt-28 bg-slate-50 py-20 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="Ways To Give"
            title="Choose A Giving Method"
            description="Verified digital giving information will be displayed here when the church supplies its official payment details."
            align="center"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {givingMethods.map((method, index) => (
              <GivingMethodCard
                key={method.id}
                method={method}
                icon={getGivingIcon(index)}
              />
            ))}
          </div>

          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <ShieldCheck
              size={22}
              className="mt-0.5 shrink-0 text-amber-700"
            />

            <div>
              <p className="text-sm font-semibold text-amber-950">
                Payment details are awaiting verification.
              </p>

              <p className="mt-2 text-sm leading-7 text-amber-900/70">
                No Mobile Money number, bank account or QR
                code will be displayed until the church has
                officially supplied and confirmed the
                information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <SectionHeading
            eyebrow="Giving With Purpose"
            title="What Giving Helps Support"
            description="Financial support contributes to different areas of church life and ministry."
            align="center"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {givingPrinciples.map((principle, index) => (
              <article
                key={principle.title}
                className="group rounded-[24px] border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-church-blue-light text-church-blue-dark transition-colors group-hover:bg-church-red group-hover:text-white">
                  {getPrincipleIcon(index)}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-church-blue-dark">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECURITY
      ====================================================== */}
      <section className="bg-church-blue-dark py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-10 xl:px-12">
          <div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-church-red text-white">
              <LockKeyhole size={28} />
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-church-red">
              Give Safely
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Always Verify Before Sending Money.
            </h2>
          </div>

          <div className="grid gap-4">
            <SecurityItem>
              Use only payment details displayed on the
              official New Christian Faith Ministry website
              or confirmed directly by the church.
            </SecurityItem>

            <SecurityItem>
              Check the account or recipient name before
              completing a Mobile Money or bank transaction.
            </SecurityItem>

            <SecurityItem>
              Do not send money to personal numbers claiming
              to represent the church unless they have been
              officially confirmed.
            </SecurityItem>

            <SecurityItem>
              If you are uncertain about any giving
              information, contact the church before making
              the payment.
            </SecurityItem>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-10 xl:px-12">
          <div>
            <SectionHeading
              eyebrow="Questions"
              title="Giving FAQ"
              description="Helpful information about giving through the church website."
            />
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {givingFaqs.map((faq, index) => (
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
          HELP CTA
      ====================================================== */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="relative overflow-hidden rounded-[32px] bg-church-blue-dark px-7 py-14 sm:px-10 lg:px-16 lg:py-16">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/5" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <HelpCircle
                  size={30}
                  className="text-church-red"
                />

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-church-red">
                  Need Assistance?
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Have A Question About Giving?
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-8 text-white/65">
                  Contact the church if you need confirmation
                  of payment information or assistance with a
                  giving method.
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
              Thank You
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white lg:text-4xl">
              Thank you for supporting the work of the ministry.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
              Your support contributes to the continuing life,
              work and mission of New Christian Faith Ministry.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-flex min-h-13 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-7 text-sm font-semibold text-church-red transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Learn About Our Mission
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   LOCAL COMPONENTS
========================================================= */

function GivingMethodCard({
  method,
  icon,
}: {
  method: GivingMethod;
  icon: React.ReactNode;
}) {
  return (
    <article className="relative overflow-hidden rounded-[26px] border border-slate-100 bg-white p-7 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-church-blue-light text-church-blue-dark">
          {icon}
        </div>

        <span
          className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] ${
            method.enabled
              ? "bg-green-100 text-green-700"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          {method.enabled
            ? "Available"
            : "Coming Soon"}
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-church-blue-dark">
        {method.name}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {method.description}
      </p>

      {method.enabled && method.details.length > 0 ? (
        <div className="mt-7 space-y-3 border-t border-slate-100 pt-6">
          {method.details.map((detail) => (
            <div
              key={detail.label}
              className="flex items-start justify-between gap-4"
            >
              <span className="text-xs text-slate-500">
                {detail.label}
              </span>

              <span className="text-right text-sm font-semibold text-church-blue-dark">
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-7 rounded-2xl bg-slate-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Official details pending
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Verified payment information will appear here
            when provided by the church.
          </p>
        </div>
      )}
    </article>
  );
}

function SecurityItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
      <CheckCircle2
        size={20}
        className="mt-0.5 shrink-0 text-church-red"
      />

      <p className="text-sm leading-7 text-white/70">
        {children}
      </p>
    </div>
  );
}

function getGivingIcon(index: number) {
  const icons = [
    <Smartphone key="momo" size={26} />,
    <Landmark key="bank" size={26} />,
    <QrCode key="qr" size={26} />,
  ];

  return icons[index] ?? (
    <Building2 size={26} />
  );
}

function getPrincipleIcon(index: number) {
  const icons = [
    <Sparkles key="worship" size={24} />,
    <Church key="ministry" size={24} />,
    <HeartHandshake key="outreach" size={24} />,
    <ShieldCheck key="stewardship" size={24} />,
  ];

  return icons[index] ?? (
    <Church size={24} />
  );
}