"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function ProductosContent() {
  const searchParams = useSearchParams()
  const category = searchParams.get("cat")
  const subcategory = searchParams.get("sub")

  return (
    <main className="min-h-[calc(100vh-200px)] pt-[120px] flex items-center justify-center">
      <div className="text-center px-6 md:px-12">
        {category && subcategory ? (
          <>
            <h1 className="text-5xl md:text-6xl font-semibold text-[#1a1a1a] mb-6">
              {category} - {subcategory}
            </h1>
            <p className="text-lg text-gray-600">Explorá nuestra selección de {subcategory.toLowerCase()}</p>
          </>
        ) : (
          <>
            <h1 className="text-5xl md:text-6xl font-semibold text-[#1a1a1a] mb-6">
              Productos
            </h1>
            <p className="text-lg text-gray-600">Explorá todos nuestros productos</p>
          </>
        )}
      </div>
    </main>
  )
}

export default function ProductosPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-[calc(100vh-200px)] pt-[120px] flex items-center justify-center">
          <div className="text-center px-6 md:px-12">
            <h1 className="text-5xl md:text-6xl font-semibold text-[#1a1a1a]">
              Productos
            </h1>
          </div>
        </main>
      }
    >
      <ProductosContent />
    </Suspense>
  )
}
