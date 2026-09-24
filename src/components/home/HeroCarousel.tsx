"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import { useEffect, useState } from "react";

import { church } from "@/data/church";
import { heroSlides } from "@/data/home";

const AUTOPLAY_DELAY = 6500;

export default function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(interval);
  }, [paused]);

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  return (
    <section
      className="relative min-h-[680px] overflow-hidden bg-church-blue-dark lg:min-h-[760px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Church highlights"
    >
      {/* Background slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== activeSlide}
        >
          <Image
            src={slide.image}
            alt={slide.imageAlt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#041a35]/95 via-[#041a35]/72 to-[#041a35]/25" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
        </div>
      ))}

      {/* Decorative red line */}
      <div className="absolute left-0 top-0 z-10 h-full w-1 bg-church-red sm:w-1.5" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-[680px] max-w-[1440px] items-center px-5 py-24 sm:px-8 lg:min-h-[760px] lg:px-10 xl:px-12">
        <div className="max-w-4xl">
          <div
            key={activeSlide}
            className="animate-[fadeIn_700ms_ease-out]"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-church-red" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/85 sm:text-sm">
                {heroSlides[activeSlide].eyebrow}
              </p>
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[78px]">
              {heroSlides[activeSlide].title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              {heroSlides[activeSlide].description}
            </p>

            <p className="mt-5 text-sm font-medium italic text-white/70">
              “{church.motto}”
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#visit"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-church-red px-7 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-church-red-dark hover:shadow-xl"
              >
                Plan A Visit

                <ArrowRight size={17} />
              </Link>

              <a
                href={church.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg border border-white/30 bg-white/10 px-7 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white hover:text-church-blue-dark"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-church-red">
                  <Play size={14} fill="currentColor" />
                </span>

                Watch Online
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop navigation arrows */}
      <div className="absolute bottom-10 right-5 z-30 hidden gap-2 sm:right-8 md:flex lg:right-10 xl:right-12">
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/10 text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-church-blue-dark"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/10 text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-church-blue-dark"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-9 left-5 z-30 flex items-center gap-2 sm:left-8 lg:left-10 xl:left-12">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === activeSlide}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeSlide
                ? "w-10 bg-church-red"
                : "w-5 bg-white/40 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Slide count */}
      <div className="absolute bottom-8 left-1/2 z-30 hidden -translate-x-1/2 text-xs font-semibold tracking-widest text-white/60 lg:block">
        0{activeSlide + 1} / 0{heroSlides.length}
      </div>
    </section>
  );
}