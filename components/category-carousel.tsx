"use client";

import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const categories = [
  {
    name: "Fungicidas",
    description: "Prevenga y elimine las principales enfermedades fúngicas.",
    image: "/fungicide-agricultural-spray-crops.jpg",
  },
  {
    name: "Insecticidas",
    description: "Protección eficaz frente a las plagas más comunes.",
    image: "/insecticide-pest-control-agriculture.jpg",
  },
  {
    name: "Herbicidas",
    description: "Soluciones selectivas para un control total de malezas.",
    image: "/herbicide-weed-control-farming.jpg",
  },
  {
    name: "Fertilizantes",
    description:
      "Formulaciones que potencian el crecimiento y la productividad.",
    image: "/fertilizer-soil-nutrients-agriculture.jpg",
  },
  {
    name: "Coadyuvantes, Fitoreguladores y PGR",
    description: "Optimizan aplicaciones y estimulan el desarrollo vegetal.",
    image: "/fitoreguladores-temp.jpg",
  },
  {
    name: "Fumigantes de suelo",
    description: "Preparan el terreno para un cultivo sano y uniforme.",
    image: "/soil-fumigation-agriculture-treatment.jpg",
  },
];

export default function CategoryCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  // Animaciones escalonadas
  const headerAnimation = useScrollAnimation({ delay: 0.3 });
  const carouselAnimation = useScrollAnimation({ delay: 0.1 });
  const buttonAnimation = useScrollAnimation({ delay: 0.3 });

  // NO triplicar - usar solo las categorías originales
  const displayCategories = categories;

  return (
    <section className="py-16 bg-white overflow-visible">
      {/* Header Section - Centered with max-width */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div
          ref={headerAnimation.ref}
          className="text-center mb-12"
          style={{
            opacity: headerAnimation.isVisible ? 1 : 0,
            transform: headerAnimation.isVisible
              ? "translateY(0)"
              : "translateY(30px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <p className="text-sm font-light text-[#243938] mb-4">Catálogo</p>
          <h2 className="text-[2.5rem] font-semibold leading-tight text-[#1a1a1a] tracking-tight mb-4">
            Conozca nuestros productos
            <br />
            Calidad, innovación y eficacia para cada necesidad
          </h2>
        </div>
      </div>

      {/* Carousel Section - Full width */}
      <div
        ref={carouselAnimation.ref}
        className="relative mb-8 w-full overflow-visible pb-8"
      >
        <Carousel
          opts={{
            align: "start",
            loop: false,
            skipSnaps: false,
            dragFree: true,
          }}
          plugins={[WheelGesturesPlugin()]}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {displayCategories.map((category, index) => {
              const animationDelay = 0.2 + index * 0.12;

              return (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-[290px] min-w-[290px]"
                  style={{
                    opacity: carouselAnimation.isVisible ? 1 : 0,
                    transform: carouselAnimation.isVisible
                      ? "translateY(0) scale(1)"
                      : "translateY(30px) scale(1)",
                    transition: `opacity 0.6s ease-out ${animationDelay}s, transform 0.6s ease-out ${animationDelay}s`,
                  }}
                >
                  <Link
                    href={`/productos?cat=Agroquímicos&sub=${encodeURIComponent(
                      category.name
                    )}`}
                    className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
                  >
                    <div className="relative h-[400px] overflow-hidden">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={`${category.name} category`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% via-transparent via-50% to-black/70" />

                      {/* Circle with arrow - Top Right */}
                      <div className="absolute top-5 right-5 w-11 h-11 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>

                      {/* Text overlay - Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-semibold text-white leading-tight mb-2">
                          {category.name}
                        </h3>
                        <p className="text-sm text-white/90">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>

      {/* See All Button - Centered with max-width */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div
          ref={buttonAnimation.ref}
          className="flex justify-center"
          style={{
            opacity: buttonAnimation.isVisible ? 1 : 0,
            transform: buttonAnimation.isVisible
              ? "translateY(0)"
              : "translateY(30px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <Link
            href="/productos"
            className="group relative inline-flex items-center gap-0 pl-5.5 pr-1.5 py-1.5 bg-[#0f1c1d] text-white rounded-full text-sm font-normal transition-all hover:bg-[#000000] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(1,31,43,0.4)] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
          >
            Ver todos
            <div className="ml-5 w-9 h-9 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#011f2b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
