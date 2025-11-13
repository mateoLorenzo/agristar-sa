"use client";

import * as React from "react";
import { notFound } from "next/navigation";
import { PRODUCTS } from "../_data/products";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const [resolvedParams, setResolvedParams] = React.useState<{ slug: string } | null>(null);

  React.useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  if (!resolvedParams) {
    return (
      <main className="min-h-screen pt-[120px] pb-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 rounded w-48 mb-8" />
            <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-gray-200 rounded-xl h-[300px]" />
                <div>
                  <div className="h-8 bg-gray-200 rounded w-32 mb-4" />
                  <div className="h-12 bg-gray-200 rounded w-3/4 mb-6" />
                  <div className="h-20 bg-gray-200 rounded mb-8" />
                  <div className="h-12 bg-gray-200 rounded w-48" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const product = PRODUCTS.find((p) => p.id === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-[120px] pb-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Back Button */}
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#111] mb-8 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
          Volver a productos
        </Link>

        {/* Product Detail */}
        <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Logo Section */}
            <div className="bg-[#F8F9FB] rounded-xl p-12 flex items-center justify-center">
              <Image
                src={product.logoUrl}
                alt={`${product.name} logo`}
                width={300}
                height={200}
                className="object-contain max-h-[200px]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder-logo.svg";
                }}
              />
            </div>

            {/* Info Section */}
            <div>
              <div className="inline-block px-3 py-1 bg-[#F8F9FB] text-[#6B7280] text-sm rounded-full mb-4">
                {product.category}
              </div>
              <h1 className="text-4xl font-semibold text-[#1a1a1a] mb-6">
                {product.name}
              </h1>
              <p className="text-lg text-[#6B7280] mb-8">
                Información detallada sobre {product.name} próximamente
                disponible.
              </p>

              {/* CTA Button */}
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#011f2b] text-white rounded-full hover:bg-[#022b3d] transition-all hover:shadow-lg"
              >
                Consultar disponibilidad
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
