"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { SearchBar } from "./SearchBar";
import { SidebarFilters } from "./SidebarFilters";
import { ProductsGrid } from "./ProductsGrid";
import { PRODUCTS } from "../_data/products";
import { filterProducts } from "../_data/helpers";

export function ProductsContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  const mainCategories = searchParams.get("cat")?.split(",") || [];
  const subcategories = searchParams.get("sub")?.split(",") || [];

  // Combinar categorías principales y subcategorías para el filtrado
  const allSelectedCategories = useMemo(() => {
    return new Set([...mainCategories, ...subcategories]);
  }, [mainCategories, subcategories]);

  // Filter products
  const filteredProducts = useMemo(
    () => filterProducts(PRODUCTS, allSelectedCategories, searchQuery),
    [allSelectedCategories, searchQuery]
  );

  return (
    <main className="min-h-screen pt-[120px] pb-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-2">
            Productos
          </h1>
          <p className="text-lg text-[#6B7280]">
            Explorá nuestro catálogo completo
          </p>
        </div>

        {/* Layout: Sidebar + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
          {/* Sidebar */}
          <aside className="lg:max-w-[280px]" aria-label="Filtros de productos">
            <SidebarFilters />
          </aside>

          {/* Main Content */}
          <div className="min-w-0">
            {/* Search Bar */}
            <div className="mb-6">
              <SearchBar onSearch={setSearchQuery} />
            </div>

            {/* Results Count */}
            {(searchQuery || allSelectedCategories.size > 0) && (
              <div className="mb-4 text-sm text-[#6B7280]">
                {filteredProducts.length === 1
                  ? "1 producto encontrado"
                  : `${filteredProducts.length} productos encontrados`}
              </div>
            )}

            {/* Products Grid */}
            <ProductsGrid
              products={filteredProducts}
              searchQuery={searchQuery}
              hasActiveFilters={allSelectedCategories.size > 0}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
