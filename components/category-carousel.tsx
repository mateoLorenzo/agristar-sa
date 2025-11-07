"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const categories = [
  {
    name: "Fungicidas",
    image: "/fungicide-agricultural-spray-crops.jpg",
    date: "19 August 2025",
  },
  {
    name: "Insecticidas",
    image: "/insecticide-pest-control-agriculture.jpg",
    date: "19 August 2025",
  },
  {
    name: "Herbicidas",
    image: "/herbicide-weed-control-farming.jpg",
    date: "19 August 2025",
  },
  {
    name: "Fertilizantes",
    image: "/fertilizer-soil-nutrients-agriculture.jpg",
    date: "19 August 2025",
  },
  {
    name: "Coadyuvantes, Fitoreguladores y PGR",
    image: "/plant-growth-regulator-agriculture.jpg",
    date: "19 August 2025",
  },
  {
    name: "Fumigantes de suelo",
    image: "/soil-fumigation-agriculture-treatment.jpg",
    date: "19 August 2025",
  },
];

export default function CategoryCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    checkScroll();
    container.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      container.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 340;
    const targetScroll =
      container.scrollLeft +
      (direction === "left" ? -scrollAmount : scrollAmount);

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-4">
            Latest Info
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold leading-tight text-[#1a1a1a] tracking-tight">
            Catch up on today's top updates and the
            <br />
            stories that matter most
          </h2>
        </div>

        <div className="relative mb-12">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="hidden md:flex absolute left-[-24px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-gray-200 rounded-full items-center justify-center text-[#1a1a1a] transition-all z-[2] shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:bg-[#1a1a1a] hover:text-white hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#1a1a1a] disabled:hover:scale-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
            aria-label="Previous categories"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-4"
          >
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/productos?cat=Agroquímicos&sub=${encodeURIComponent(
                  category.name
                )}`}
                className="group flex-shrink-0 w-[280px] md:w-[320px] snap-start rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={`${category.name} category`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-0% to-black/60" />
                  <p className="absolute bottom-4 left-4 text-sm text-white z-[2]">
                    {category.date}
                  </p>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-black/60 rounded-full flex items-center justify-center text-white transition-colors group-hover:bg-black/80">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="p-6 bg-[#1a1a1a] text-white">
                  <h3 className="text-lg font-semibold text-white leading-snug">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="hidden md:flex absolute right-[-24px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-gray-200 rounded-full items-center justify-center text-[#1a1a1a] transition-all z-[2] shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:bg-[#1a1a1a] hover:text-white hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#1a1a1a] disabled:hover:scale-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
            aria-label="Next categories"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center">
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#1a1a1a] text-white rounded-full text-[0.9375rem] font-medium transition-all hover:bg-black hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
          >
            Show All
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
