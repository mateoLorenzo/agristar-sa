"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ProductCard } from "./ProductCard";
import type { Product } from "../_data/types";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";

interface RelatedProductsCarouselProps {
  products: Product[];
}

export function RelatedProductsCarousel({
  products,
}: RelatedProductsCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    const onPointerDown = () => {
      setIsDragging(true);
    };

    const onPointerUp = () => {
      setIsDragging(false);
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);
    api.on("pointerDown", onPointerDown);
    api.on("pointerUp", onPointerUp);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
      api.off("pointerDown", onPointerDown);
      api.off("pointerUp", onPointerUp);
    };
  }, [api]);

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="mt-20">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-2">
          Productos Relacionados
        </h2>
        <p className="text-[#6B7280]">Otros productos de la misma categoría</p>
      </div>
      <div className="relative py-4 -my-4">
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
          <CarouselContent
            className={`-ml-4 select-none ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{
              cursor: isDragging ? "grabbing" : "grab",
              userSelect: "none",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              msUserSelect: "none",
            }}
          >
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-4 basis-[calc(50%-0.5rem)] sm:basis-[calc(33.333%-0.75rem)] lg:basis-[calc(25%-0.75rem)] min-w-[calc(50%-0.5rem)] sm:min-w-[calc(33.333%-0.75rem)] lg:min-w-[calc(25%-0.75rem)]"
              >
                <div className="h-full">
                  <ProductCard product={product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
            onMouseDown={(e) => {
              if (!canScrollPrev) {
                e.preventDefault();
                e.stopPropagation();
              }
            }}
            onClick={(e) => {
              if (!canScrollPrev) {
                e.preventDefault();
                e.stopPropagation();
              }
            }}
          >
            <CarouselPrevious className="bg-white/90 hover:bg-white border-gray-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed" />
          </div>
          <div
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
            onMouseDown={(e) => {
              if (!canScrollNext) {
                e.preventDefault();
                e.stopPropagation();
              }
            }}
            onClick={(e) => {
              if (!canScrollNext) {
                e.preventDefault();
                e.stopPropagation();
              }
            }}
          >
            <CarouselNext className="bg-white/90 hover:bg-white border-gray-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
