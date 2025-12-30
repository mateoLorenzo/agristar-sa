"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImageProps {
  logoUrl: string | null;
  name: string;
}

export function ProductImage({ logoUrl, name }: ProductImageProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-full aspect-[4/2] lg:aspect-auto lg:h-[280px] flex items-center justify-center">
      <div className="relative w-full h-full max-w-md mx-auto">
        {logoUrl && !imageError ? (
          <Image
            src={logoUrl}
            alt={`Logo de ${name}`}
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span className="text-base md:text-lg">Sin imagen</span>
          </div>
        )}
      </div>
    </div>
  );
}
