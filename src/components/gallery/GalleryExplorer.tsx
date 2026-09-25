"use client";

import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  Images,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import {
  galleryCategories,
  galleryImages,
  type GalleryFilter,
  type GalleryImage,
} from "@/data/gallery";

export default function GalleryExplorer() {
  const [activeCategory, setActiveCategory] =
    useState<GalleryFilter>("All");

  const [selectedId, setSelectedId] =
    useState<string | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      return galleryImages;
    }

    return galleryImages.filter(
      (image) => image.category === activeCategory
    );
  }, [activeCategory]);

  const selectedIndex = filteredImages.findIndex(
    (image) => image.id === selectedId
  );

  const selectedImage =
    selectedIndex >= 0
      ? filteredImages[selectedIndex]
      : null;

  const closeLightbox = () => {
    setSelectedId(null);
  };

  const showPrevious = () => {
    if (!filteredImages.length) {
      return;
    }

    const nextIndex =
      selectedIndex <= 0
        ? filteredImages.length - 1
        : selectedIndex - 1;

    setSelectedId(filteredImages[nextIndex].id);
  };

  const showNext = () => {
    if (!filteredImages.length) {
      return;
    }

    const nextIndex =
      selectedIndex >= filteredImages.length - 1
        ? 0
        : selectedIndex + 1;

    setSelectedId(filteredImages[nextIndex].id);
  };

 useEffect(() => {
  if (!selectedImage) {
    document.body.style.overflow = "";
    return;
  }

  document.body.style.overflow = "hidden";

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setSelectedId(null);
    }

    if (
      event.key === "ArrowLeft" &&
      filteredImages.length
    ) {
      const previousIndex =
        selectedIndex <= 0
          ? filteredImages.length - 1
          : selectedIndex - 1;

      setSelectedId(
        filteredImages[previousIndex].id
      );
    }

    if (
      event.key === "ArrowRight" &&
      filteredImages.length
    ) {
      const nextIndex =
        selectedIndex >= filteredImages.length - 1
          ? 0
          : selectedIndex + 1;

      setSelectedId(
        filteredImages[nextIndex].id
      );
    }
  };

  window.addEventListener(
    "keydown",
    handleKeyDown
  );

  return () => {
    document.body.style.overflow = "";

    window.removeEventListener(
      "keydown",
      handleKeyDown
    );
  };
}, [
  selectedImage,
  selectedIndex,
  filteredImages,
]);

  const changeCategory = (
    category: GalleryFilter
  ) => {
    setActiveCategory(category);
    setSelectedId(null);
  };

  return (
    <>
      {/* Category Filters */}
      <div className="flex gap-2 overflow-x-auto pb-3">
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => changeCategory(category)}
            className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-semibold transition-all ${
              activeCategory === category
                ? "bg-church-blue-dark text-white shadow-md"
                : "border border-slate-200 bg-white text-slate-600 hover:border-church-red hover:text-church-red"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Count */}
      <div className="mt-7 flex items-center justify-between border-b border-slate-100 pb-5">
        <p className="text-sm text-slate-500">
          Showing{" "}
          <span className="font-semibold text-church-blue-dark">
            {filteredImages.length}
          </span>{" "}
          {filteredImages.length === 1
            ? "photo"
            : "photos"}
        </p>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
          <Images size={16} />
          {activeCategory}
        </div>
      </div>

      {/* Gallery */}
      {filteredImages.length > 0 ? (
        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {filteredImages.map((image) => (
            <GalleryCard
              key={image.id}
              image={image}
              onOpen={() => setSelectedId(image.id)}
            />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-[28px] border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
          <Images
            size={31}
            className="mx-auto text-slate-400"
          />

          <h3 className="mt-5 text-xl font-semibold text-church-blue-dark">
            Photos coming soon
          </h3>

          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
            Images for this gallery category have not yet
            been added.
          </p>
        </div>
      )}

      {/* Lightbox */}
      {selectedImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020817]/95 p-4 backdrop-blur-lg sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-church-blue-dark sm:right-7 sm:top-7"
            aria-label="Close image viewer"
          >
            <X size={21} />
          </button>

          {/* Previous */}
          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-church-blue-dark sm:left-7 sm:h-13 sm:w-13"
            aria-label="Previous image"
          >
            <ChevronLeft size={23} />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-church-blue-dark sm:right-7 sm:h-13 sm:w-13"
            aria-label="Next image"
          >
            <ChevronRight size={23} />
          </button>

          {/* Image */}
          <div className="relative flex h-[88vh] w-full max-w-6xl flex-col">
            <div className="relative min-h-0 flex-1">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 flex shrink-0 flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-church-red">
                  {selectedImage.category}
                </p>

                <h3 className="mt-1 text-base font-semibold text-white sm:text-lg">
                  {selectedImage.title}
                </h3>
              </div>

              <p className="text-xs font-semibold tracking-widest text-white/50">
                {String(selectedIndex + 1).padStart(
                  2,
                  "0"
                )}{" "}
                /{" "}
                {String(filteredImages.length).padStart(
                  2,
                  "0"
                )}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function GalleryCard({
  image,
  onOpen,
}: {
  image: GalleryImage;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-[22px] bg-slate-100 text-left"
      aria-label={`View ${image.title}`}
    >
      <div
        className={`relative overflow-hidden ${getAspectClass(
          image.aspect
        )}`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-church-blue-dark/80 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between gap-4 p-5 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
              {image.category}
            </p>

            <h3 className="mt-1 text-sm font-semibold text-white">
              {image.title}
            </h3>
          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-church-blue-dark shadow-lg">
            <Expand size={16} />
          </div>
        </div>
      </div>
    </button>
  );
}

function getAspectClass(
  aspect: GalleryImage["aspect"]
) {
  if (aspect === "portrait") {
    return "aspect-[4/5]";
  }

  if (aspect === "square") {
    return "aspect-square";
  }

  return "aspect-[4/3]";
}