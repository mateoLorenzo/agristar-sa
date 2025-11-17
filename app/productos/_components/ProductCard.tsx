import Image from "next/image";
import Link from "next/link";
import type { Product } from "../_data/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm px-1  md:px-2 md:pb-4 md:pt-2 transition-all hover:-translate-y-[1px] hover:shadow-md hover:border-[#D1D5DB] group cursor-pointer">
      {/* Logo Container */}
      <div className="bg-[#F8F9FB] rounded-lg p-4 mb-2 flex items-center justify-center min-h-[56px] md:min-h-[72px]">
        <div className="relative w-full h-14 md:h-16">
          <Image
            src={product.logoUrl}
            alt={`Logo de ${product.name}`}
            fill
            className="object-contain"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Product Name */}
      <h3 className="text-sm font-medium text-[#111] leading-tight line-clamp-2">
        {product.name}
      </h3>

      {/* More Info Link */}
      <Link
        href={`/productos/${product.id}`}
        className="flex items-center justify-between group/link"
        aria-label={`Más información sobre ${product.name}`}
      >
        <span className="text-sm text-[#6B7280] group-hover/link:text-[#111] transition-colors">
          Más información
        </span>
        <button
          className="w-9 h-9 rounded-full bg-[#111] text-white flex items-center justify-center hover:bg-[#1a1a1a] transition-colors focus-visible:outline-2 focus-visible:outline-[#111] focus-visible:outline-offset-2"
          aria-label={`Ver detalles de ${product.name}`}
        >
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
        </button>
      </Link>
    </article>
  );
}
