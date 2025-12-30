"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "../_data/types";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  console.log("product from carousel", product);
  const animation = useScrollAnimation({ delay: 0.2 }); // Mismo delay para todos los productos
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      href={`/productos/${product.id}`}
      className="block"
      aria-label={`Ver detalles de ${product.name}`}
    >
      <article
        ref={animation.ref}
        className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm p-4 md:px-4 md:py-5 transition-all hover:-translate-y-[1px] hover:shadow-md hover:border-[#D1D5DB] group cursor-pointer h-full flex flex-col"
        style={{
          opacity: animation.isVisible ? 1 : 0,
          transform: animation.isVisible
            ? "translateY(0) scale(1)"
            : "translateY(10px) scale(1)",
          transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
        }}
      >
        {/* Logo Container */}
        <div className="bg-[#F8F9FB] rounded-lg p-4 md:p-5 mb-3 md:mb-4 flex items-center justify-center min-h-[80px] md:min-h-[100px]">
          <div className="relative w-full h-16 md:h-20">
            {product.logoUrl && !imageError ? (
              <Image
                src={product.logoUrl}
                alt={`Logo de ${product.name}`}
                fill
                className="object-contain"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span className="text-sm">Sin imagen</span>
              </div>
            )}
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-sm md:text-base font-medium text-[#111] leading-tight line-clamp-2 mb-3 md:mb-4 flex-1">
          {product.name}
        </h3>

        {/* More Info Link */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs md:text-sm text-[#6B7280] group-hover:text-[#111] transition-colors">
            Más información
          </span>
          <div className="w-9 h-9 rounded-full bg-[#111] text-white flex items-center justify-center group-hover:bg-[#1a1a1a] transition-colors flex-shrink-0">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
