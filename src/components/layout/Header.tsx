"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

import { navigation } from "@/data/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdown((current) =>
      current === label ? null : label
    );
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[84px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* Logo / Brand */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex min-w-0 items-center gap-3"
          aria-label="New Christian Faith Ministry home"
        >
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white">
            <Image
              src="/images/church-logo.jpg"
              alt="New Christian Faith Ministry logo"
              fill
              priority
              sizes="56px"
              className="object-contain"
            />
          </div>

          <div className="hidden leading-tight sm:block">
            <p className="text-[15px] font-bold uppercase tracking-tight text-church-blue-dark">
              New Christian
            </p>

            <p className="text-[15px] font-bold uppercase tracking-tight text-church-blue-dark">
              Faith Ministry
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-1 xl:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            if (item.children) {
              return (
                <div key={item.label} className="group relative">
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-lg px-3 py-3 text-[14px] font-medium text-slate-700 transition-colors hover:text-church-red"
                  >
                    {item.label}

                    <ChevronDown
                      size={15}
                      strokeWidth={2}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  </button>

                  <div className="pointer-events-none absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mt-2 overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-slate-950/10">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-church-blue-light hover:text-church-blue-dark"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href ?? "/"}
                className="rounded-lg px-3 py-3 text-[14px] font-medium text-slate-700 transition-colors hover:text-church-red"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden xl:block">
          <Link
            href="/plan-a-visit"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-church-red px-6 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:bg-church-red-dark hover:shadow-lg"
          >
            Plan A Visit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-church-blue-dark transition-colors hover:border-church-red hover:text-church-red xl:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X size={24} strokeWidth={2} />
          ) : (
            <Menu size={26} strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 xl:hidden ${
          mobileMenuOpen
            ? "max-h-[900px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav
          className="mx-auto max-w-[1440px] px-5 py-5 sm:px-8"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col">
            {navigation.map((item) => {
              if (item.children) {
                const dropdownOpen = openMobileDropdown === item.label;

                return (
                  <div
                    key={item.label}
                    className="border-b border-slate-100"
                  >
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown(item.label)}
                      className="flex w-full items-center justify-between py-4 text-left text-[15px] font-semibold text-slate-800 transition-colors hover:text-church-red"
                      aria-expanded={dropdownOpen}
                    >
                      {item.label}

                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        dropdownOpen
                          ? "grid-rows-[1fr] pb-3 opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-col border-l-2 border-church-red pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={closeMobileMenu}
                              className="py-2.5 text-sm font-medium text-slate-500 transition-colors hover:text-church-blue-dark"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href ?? "/"}
                  onClick={closeMobileMenu}
                  className="border-b border-slate-100 py-4 text-[15px] font-semibold text-slate-800 transition-colors hover:text-church-red"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <Link
            href="/plan-a-visit"
            onClick={closeMobileMenu}
            className="mt-6 flex min-h-12 w-full items-center justify-center rounded-lg bg-church-red px-6 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-church-red-dark"
          >
            Plan A Visit
          </Link>
        </nav>
      </div>
    </header>
  );
}