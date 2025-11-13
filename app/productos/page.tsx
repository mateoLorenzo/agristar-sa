import { Suspense } from "react";
import { SearchBar } from "./_components/SearchBar";
import { SidebarFilters } from "./_components/SidebarFilters";
import { ProductGrid } from "./_components/ProductGrid";
import { PRODUCTS } from "./_data/products";
import { parseCatParam, matchesQuery } from "./_lib/utils";
import type { Product } from "./_data/types";

interface ProductosPageProps {
  searchParams: Promise<{
    q?: string;
    cat?: string;
  }>;
}

async function ProductosContent({ searchParams }: ProductosPageProps) {
  const params = await searchParams;
  const query = params.q || "";
  const selectedCategories = parseCatParam(params.cat || null);

  // Filtrar productos
  let filteredProducts: Product[] = PRODUCTS;

  // Filtrar por categoría
  if (selectedCategories.size > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedCategories.has(product.category)
    );
  }

  // Filtrar por búsqueda
  if (query.trim()) {
    filteredProducts = filteredProducts.filter((product) =>
      matchesQuery(product.name, query)
    );
  }

  return (
    <main className="min-h-[calc(100vh-200px)] pt-[120px] pb-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Layout: Grid con sidebar y contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Suspense
              fallback={
                <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
                  <div className="h-6 bg-[#E5E7EB] rounded mb-6 animate-pulse" />
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="h-10 bg-[#E5E7EB] rounded animate-pulse"
                      />
                    ))}
                  </div>
                </div>
              }
            >
              <SidebarFilters />
            </Suspense>
          </div>

          {/* Contenido principal */}
          <div className="lg:col-span-1">
            {/* Search Bar */}
            <div className="mb-6">
              <Suspense
                fallback={
                  <div className="h-12 bg-[#E5E7EB] rounded-lg animate-pulse" />
                }
              >
                <SearchBar />
              </Suspense>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ProductosPage(props: ProductosPageProps) {
  return (
    <Suspense
      fallback={
        <main className="min-h-[calc(100vh-200px)] pt-[120px] pb-16">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
                  <div className="h-6 bg-[#E5E7EB] rounded mb-6 animate-pulse" />
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="h-10 bg-[#E5E7EB] rounded animate-pulse"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="h-12 bg-[#E5E7EB] rounded-lg mb-6 animate-pulse" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl border border-[#E5E7EB] p-4 md:p-5 animate-pulse"
                    >
                      <div className="bg-[#F8F9FB] rounded-lg h-16 mb-4" />
                      <div className="h-5 bg-[#E5E7EB] rounded mb-3 w-3/4" />
                      <div className="flex items-center justify-between">
                        <div className="h-4 bg-[#E5E7EB] rounded w-24" />
                        <div className="w-9 h-9 bg-[#E5E7EB] rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      }
    >
      <ProductosContent {...props} />
    </Suspense>
  );
}
