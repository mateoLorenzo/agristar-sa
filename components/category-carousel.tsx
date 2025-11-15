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

  // Triplicar las cards para asegurar suficiente contenido para el loop
  const infiniteCategories = [...categories, ...categories, ...categories];

  useEffect(() => {
    if (!api) return;

    // Iniciar en el segundo set (medio)
    setTimeout(() => {
      const middleIndex = categories.length + Math.floor(categories.length / 2);
      api.scrollTo(middleIndex, false);
    }, 0);
  }, [api]);

  return (
    <section className="py-30 bg-white overflow-hidden">
      {/* Header Section - Centered with max-width */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-4">
            CATÁLOGO
          </p>
          <h2 className="text-[2.5rem] font-semibold leading-tight text-[#1a1a1a] tracking-tight mb-4">
            Conozca nuestros productos
            <br />
            Calidad, innovación y eficacia para cada necesidad
          </h2>
        </div>
      </div>

      {/* Carousel Section - Full width */}
      <div className="relative mb-12 w-full">
        <Carousel
          opts={{
            align: "center",
            loop: true,
            skipSnaps: false,
            dragFree: true,
          }}
          plugins={[WheelGesturesPlugin()]}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {infiniteCategories.map((category, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-[290px] min-w-[290px]"
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
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* See All Button - Centered with max-width */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="flex justify-center">
          <Link
            href="/productos"
            className="group relative inline-flex items-center gap-0 pl-5.5 pr-1.5 py-1.5 bg-[#011f2b] text-white rounded-full text-sm font-normal transition-all hover:bg-[#022b3d] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(1,31,43,0.4)] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
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
