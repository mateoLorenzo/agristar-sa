"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { SearchBar } from "./SearchBar";
import { SidebarFilters } from "./SidebarFilters";
import { ProductsGrid } from "./ProductsGrid";
import { PRODUCTS } from "../_data/products";
import {
  parseCategoriesFromParam,
  categoriesToCSV,
  filterProducts,
} from "../_data/helpers";

export function ProductsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchQuery = searchParams.get("q") || "";
  const selectedCategories = useMemo(
    () => parseCategoriesFromParam(searchParams.get("cat")),
    [searchParams]
  );

  // Update URL with new search params
  const updateURL = useCallback(
    (newQuery: string, newCategories: Set<string>) => {
      const params = new URLSearchParams();
      if (newQuery) params.set("q", newQuery);
      if (newCategories.size > 0)
        params.set("cat", categoriesToCSV(newCategories));

      const newURL = params.toString() ? `/productos?${params}` : "/productos";
      router.replace(newURL, { scroll: false });
    },
    [router]
  );

  // Handle search query change
  const handleSearchChange = useCallback(
    (value: string) => {
      updateURL(value, selectedCategories);
    },
    [updateURL, selectedCategories]
  );

  // Handle category toggle
  const handleCategoryChange = useCallback(
    (category: string, checked: boolean) => {
      const newCategories = new Set(selectedCategories);
      if (checked) {
        newCategories.add(category);
      } else {
        newCategories.delete(category);
      }
      updateURL(searchQuery, newCategories);
    },
    [updateURL, searchQuery, selectedCategories]
  );

  // Handle reset filters
  const handleReset = useCallback(() => {
    updateURL(searchQuery, new Set());
  }, [updateURL, searchQuery]);

  // Filter products
  const filteredProducts = useMemo(
    () => filterProducts(PRODUCTS, selectedCategories, searchQuery),
    [selectedCategories, searchQuery]
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
            <SidebarFilters
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
              onReset={handleReset}
            />
          </aside>

          {/* Main Content */}
          <div className="min-w-0">
            {/* Search Bar */}
            <div className="mb-6">
              <SearchBar value={searchQuery} onChange={handleSearchChange} />
            </div>

            {/* Results Count */}
            {(searchQuery || selectedCategories.size > 0) && (
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
              hasActiveFilters={selectedCategories.size > 0}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

